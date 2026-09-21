/* =========================================================
   MOTOR GENÉRICO DE ESTUDIO ISTQB
   Recibe los datos de una certificación (window.__CERT__) y
   renderiza: plan, temario + quizzes y examen final con
   temporizador. El progreso se guarda en localStorage.
   Sin dependencias, sin build, sin llamadas de red.
========================================================= */
(function(){
'use strict';

/* ---------- Carga de datos de la certificación ---------- */
const CERT = window.__CERT__;
if(!CERT){ document.body.innerHTML='<div class="wrap"><p>No se han cargado los datos de la certificación.</p></div>'; return; }
const META = CERT.meta, SEMANAS = CERT.semanas||[], CAPS = CERT.caps||[];
/* Lista normalizada de exámenes. Admite el formato nuevo (CERT.examenes: array
   de sets) y el antiguo (CERT.examen + META.examen) por compatibilidad. */
const EXAMENES = (CERT.examenes && CERT.examenes.length)
  ? CERT.examenes.map(e=>({
      id:e.id, nombre:e.nombre, descripcion:e.descripcion||'',
      minutos:e.minutos||META.examen.minutos,
      cortePorcentaje:e.cortePorcentaje||META.examen.cortePorcentaje,
      preguntas:e.preguntas||[]
    }))
  : [{ id:'final', nombre:'Examen final', descripcion:'',
       minutos:META.examen.minutos, cortePorcentaje:META.examen.cortePorcentaje,
       preguntas:(CERT.examen||[]) }];
function corteDe(ex){ return Math.ceil(ex.preguntas.length * ex.cortePorcentaje / 100); }

/* ---------- Persistencia ---------- */
const LS_KEY = 'istqb:'+META.id;
function estadoPorDefecto(){
  return { capsOk:[], quizNotas:{}, semanas:new Array(SEMANAS.length).fill(false), examen:null, examenes:{},
           preguntas:{},     // id de pregunta -> {ok, mal, ult, ultOk}
           quizIntentos:{},  // nº de capítulo -> [{f:fecha, n:nota, t:total}] (el más reciente primero)
           glosario:{} };    // término (es) -> {ok, mal, ult, ultOk} de las flashcards
}
function cargarEstado(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(!raw) return estadoPorDefecto();
    const e = JSON.parse(raw);
    const base = estadoPorDefecto();
    return Object.assign(base, e, { semanas:(e.semanas&&e.semanas.length===SEMANAS.length)?e.semanas:base.semanas });
  }catch(_){ return estadoPorDefecto(); }
}
let estado = cargarEstado();
const capsOk = new Set(estado.capsOk);
function guardar(){
  estado.capsOk = [...capsOk];
  try{ localStorage.setItem(LS_KEY, JSON.stringify(estado)); }catch(_){}
}

/* =========================================================
   BANCO DE PREGUNTAS E HISTORIAL POR PREGUNTA
   Índice único (quizzes + todos los sets de examen) para poder
   reconstruir una pregunta a partir del id guardado, y registro
   de aciertos/fallos que alimenta el repaso dirigido.
========================================================= */
const BANCO = {};
CAPS.forEach(c=>(c.quiz||[]).forEach((p,i)=>{
  if(p.id) BANCO[p.id]={ p:p, cap:c.n, sec:p.sec, origen:'Quiz del capítulo '+c.n+' · P'+(i+1) };
}));
EXAMENES.forEach(e=>e.preguntas.forEach((p,i)=>{
  if(p.id && !BANCO[p.id]) BANCO[p.id]={ p:p, cap:p.cap, sec:p.sec, origen:e.nombre+' · P'+(i+1) };
}));
function registraRespuesta(id,acertada,diferido){
  if(!id)return;
  if(!estado.preguntas) estado.preguntas={};
  const r = estado.preguntas[id] || (estado.preguntas[id]={ok:0,mal:0,ult:null,ultOk:null});
  if(acertada) r.ok++; else r.mal++;
  r.ult = new Date().toISOString();
  r.ultOk = !!acertada;
  if(!diferido){ guardar(); refrescaRepaso(); }
}
const MS_DIA = 86400000;
const DIAS_FRAGIL = 7;          // días tras los que una pregunta ya fallada vuelve a la cola
function diasDesde(iso){
  const t = Date.parse(iso||'');
  return isFinite(t) ? Math.floor((Date.now()-t)/MS_DIA) : 999;
}
/* Clasifica un registro {ok,mal,ult,ultOk} según su historial.
   Lo usan por igual las preguntas y las tarjetas del glosario. */
function clasificaRegistro(r){
  if(!r || (r.ok===0 && r.mal===0)) return {estado:'sin', r:null, dias:null};
  const dias = diasDesde(r.ult);
  if(r.ultOk===false) return {estado:'pendiente', r:r, dias:dias};
  if(r.mal>0) return {estado: dias>=DIAS_FRAGIL ? 'fragil' : 'reciente', r:r, dias:dias};
  return {estado:'dominada', r:r, dias:dias};
}
function clasificaPregunta(id){ return clasificaRegistro((estado.preguntas||{})[id]); }
/* Cola de repaso ordenada: primero lo último fallado, después lo frágil.
   La prioridad sube con el número de fallos y con los días sin tocarla. */
function colaRepaso(){
  const lista=[];
  Object.keys(BANCO).forEach(id=>{
    const c=clasificaPregunta(id);
    if(c.estado!=='pendiente' && c.estado!=='fragil') return;
    lista.push(Object.assign({id:id}, BANCO[id], c, {
      prio:(c.estado==='pendiente'?1000:0) + c.r.mal*10 + Math.min(c.dias,60)
    }));
  });
  lista.sort((a,b)=>b.prio-a.prio || cmpSec(a.sec,b.sec));
  return lista;
}
function resumenRepaso(){
  const r={total:0,sin:0,pendiente:0,fragil:0,reciente:0,dominada:0};
  Object.keys(BANCO).forEach(id=>{ r.total++; r[clasificaPregunta(id).estado]++; });
  return r;
}

/* ---------- Cabecera ---------- */
(function cabecera(){
  document.title = META.nombre + ' · Estudio interactivo';
  document.getElementById('eyebrow').textContent = META.eyebrow||'ISTQB';
  document.getElementById('titulo').innerHTML = META.titulo||META.nombre;
  document.getElementById('sub').innerHTML = META.sub||'';
})();

/* =========================================================
   PIPELINE + ESTADO RESUMIDO
========================================================= */
function pintaPipeline(){
  const p=document.getElementById('pipeline');p.innerHTML='';
  CAPS.forEach((c,i)=>{
    if(i>0){const t=document.createElement('div');t.className='tramo'+(capsOk.has(c.n)&&capsOk.has(CAPS[i-1].n)?' ok':'');p.appendChild(t);}
    const n=document.createElement('div');n.className='nodo'+(capsOk.has(c.n)?' ok':'');
    n.innerHTML='<div class="punto">'+(capsOk.has(c.n)?'✓':'C'+c.n)+'</div><span>C'+c.n+'</span>';
    p.appendChild(n);
  });
  const r=document.getElementById('runner');
  const exTxt = estado.examen ? ('hecho — '+estado.examen.nota+'/'+estado.examen.total) : 'pendiente';
  const porRepasar = colaRepaso().length;
  r.innerHTML=CAPS.length+' capítulos · <b>'+capsOk.size+' superado'+(capsOk.size===1?'':'s')+'</b> · examen '+exTxt+
    (porRepasar?(' · <b class="aviso">'+porRepasar+' por repasar</b>'):'');
}

/* ---------- Navegación entre secciones ---------- */
function activarSeccion(nombre){
  const sec=document.getElementById('sec-'+nombre);
  if(!sec)return;
  document.querySelectorAll('nav button[data-sec]').forEach(b=>b.classList.toggle('act',b.dataset.sec===nombre));
  document.querySelectorAll('section').forEach(s=>s.classList.remove('act'));
  sec.classList.add('act');
}
document.getElementById('nav').addEventListener('click',e=>{
  // closest: las pestañas pueden llevar dentro un contador (p. ej. «Repaso 7»)
  const b=e.target.closest?e.target.closest('button[data-sec]'):null;
  if(!b)return;
  activarSeccion(b.dataset.sec);
  window.scrollTo({top:0});
});
/* Navega al temario y abre el capítulo n (usado desde el plan de estudio).
   Si se indica secId, además se desplaza a esa sección del capítulo. */
function irACapitulo(n,secId){
  activarSeccion('temario');
  cerrarCap();        // asegura que la rejilla está montada antes de abrir
  abrirCap(n,secId);
}

/* =========================================================
   SECCIONES DE CAPÍTULO
   Un capítulo puede traer `secciones:[{id,titulo,lo,html}]` —numeradas
   como en el syllabus oficial— o el formato antiguo `html`. Todo lo que
   sigue trabaja siempre con la lista normalizada.
========================================================= */
function seccionesDe(c){
  return (c && c.secciones && c.secciones.length) ? c.secciones : [];
}
function anclaSec(capN,secId){
  return 'capsec-'+capN+'-'+String(secId==null?'':secId).replace(/[^0-9A-Za-z]+/g,'-');
}
function buscaSec(capN,secId){
  if(secId==null) return null;
  const c=CAPS.find(x=>x.n===capN);
  return seccionesDe(c).find(s=>s.id===secId)||null;
}
/* Ordena identificadores de sección («3.1.10» va después de «3.1.2»). */
function cmpSec(a,b){
  const pa=String(a).split('.').map(Number), pb=String(b).split('.').map(Number);
  for(let i=0;i<Math.max(pa.length,pb.length);i++){
    const d=(pa[i]||0)-(pb[i]||0); if(d) return d;
  }
  return 0;
}
let destacadaTimer=null;
/* Lleva el foco visual a una sección ya renderizada y la resalta un momento. */
function irASeccion(capN,secId){
  const el=document.getElementById(anclaSec(capN,secId));
  if(!el){ window.scrollTo({top:0}); return; }
  // La barra de navegación es sticky y su alto varía al plegarse: se mide para
  // que el título de la sección no quede tapado al desplazarse.
  const nav=document.querySelector('nav');
  const alto=nav?Math.ceil(nav.getBoundingClientRect().height):0;
  if(alto) el.style.scrollMarginTop=(alto+16)+'px';
  el.scrollIntoView({block:'start'});
  clearTimeout(destacadaTimer);
  document.querySelectorAll('.cap-sec.destacada').forEach(x=>x.classList.remove('destacada'));
  el.classList.add('destacada');
  destacadaTimer=setTimeout(()=>el.classList.remove('destacada'),2600);
}

/* =========================================================
   PLAN DE ESTUDIO
========================================================= */
(function pintaPlan(){
  const sec=document.getElementById('sec-plan');
  let intro = META.planIntro||'<div class="card"><h2>Plan de estudio</h2><p>Marca cada semana al completarla. El progreso se guarda en este navegador.</p></div>';
  sec.innerHTML = intro + '<div id="lista-semanas"></div>';
  const cont=document.getElementById('lista-semanas');
  SEMANAS.forEach((s,i)=>{
    const fila=document.createElement('div');
    fila.className='semana'+(estado.semanas[i]?' done':'');

    // Casilla de progreso (independiente del enlace)
    const lab=document.createElement('label');
    lab.className='semana-check';
    lab.title='Marcar la semana '+(i+1)+' como completada';
    lab.innerHTML='<input type="checkbox" aria-label="Semana '+(i+1)+' completada"'+(estado.semanas[i]?' checked':'')+'>';
    lab.querySelector('input').addEventListener('change',ev=>{
      fila.classList.toggle('done',ev.target.checked);
      estado.semanas[i]=ev.target.checked; guardar();
    });

    // Secciones concretas del syllabus que cubre la semana (`subs:['1.4','1.5']`
    // o `sub:'1.4'`). Cada una navega a su punto exacto del temario.
    const subs = (s.subs||(s.sub!=null?[s.sub]:[])).filter(id=>buscaSec(s.cap,id));

    // Cuerpo: enlace al capítulo (o a la sección de la app) si la semana lo define
    const enlazable = s.cap!=null || !!s.sec;
    const col=document.createElement('div');
    col.className='semana-col';
    const cuerpo=document.createElement(enlazable?'button':'div');
    cuerpo.className='semana-cuerpo';
    if(enlazable)cuerpo.type='button';
    let irTxt='';
    if(s.cap!=null){
      const primera = subs.length ? buscaSec(s.cap,subs[0]) : null;
      irTxt = primera ? ('Ir al capítulo '+s.cap+' · '+primera.id+' '+primera.titulo+' →')
                      : ('Ir al capítulo '+s.cap+' →');
    }else if(s.sec){
      irTxt = 'Ir a «'+(s.sec==='simulacro'?'Examen final':s.sec)+'» →';
    }
    cuerpo.innerHTML='<div class="num">SEMANA '+String(i+1).padStart(2,'0')+'</div><h4>'+s.t+'</h4><p>'+s.d+'</p>'+
      (enlazable?'<span class="semana-ir">'+irTxt+'</span>':'');
    if(enlazable){
      cuerpo.addEventListener('click',()=>{
        if(s.cap!=null) irACapitulo(s.cap,subs[0]);
        else { activarSeccion(s.sec); window.scrollTo({top:0}); }
      });
    }
    col.appendChild(cuerpo);

    // Atajos: una pastilla por sección cubierta, fuera del botón principal
    if(subs.length){
      const chips=document.createElement('div');
      chips.className='semana-secs';
      chips.innerHTML='<span class="ss-et">Secciones:</span>';
      subs.forEach(id=>{
        const sc=buscaSec(s.cap,id);
        const b=document.createElement('button');
        b.type='button'; b.className='ss-chip';
        b.title='Ir a la sección '+sc.id+' del capítulo '+s.cap;
        b.innerHTML='<span class="ss-num">'+sc.id+'</span> '+sc.titulo;
        b.addEventListener('click',()=>irACapitulo(s.cap,sc.id));
        chips.appendChild(b);
      });
      col.appendChild(chips);
    }

    fila.appendChild(lab);
    fila.appendChild(col);
    cont.appendChild(fila);
  });
})();

/* =========================================================
   GESTIÓN DEL PROGRESO (exportar / importar JSON y reiniciar)
   Vive en «Plan de estudio»: la barra de navegación queda solo
   para las secciones, y así cabe en una fila en ambas certs.
========================================================= */
(function copiaSeguridad(){
  const sec=document.getElementById('sec-plan');
  if(!sec)return;
  const card=document.createElement('div');
  card.className='card';
  card.innerHTML='<h2>Tu progreso</h2>'+
    '<p>Tu progreso vive solo en este navegador. Expórtalo a un archivo para guardarlo o llevarlo a otro equipo, e impórtalo cuando quieras restaurarlo. El archivo incluye capítulos superados, notas de los quizzes, semanas marcadas y resultados de examen.</p>'+
    '<div class="acciones-progreso">'+
      '<button class="btn sec" id="btn-exportar">↓ Exportar progreso (.json)</button>'+
      '<button class="btn sec" id="btn-importar">↑ Importar progreso…</button>'+
      '<input type="file" id="file-importar" accept="application/json,.json" hidden>'+
      '<button class="btn sec peligro" id="btn-reset" title="Borrar el progreso guardado de esta certificación">Reiniciar progreso</button>'+
    '</div><div id="copia-msg" class="copia-msg" role="status"></div>';
  sec.appendChild(card);
  const msg=card.querySelector('#copia-msg');
  const aviso=(t,ok)=>{ msg.textContent=t; msg.className='copia-msg '+(ok?'ok':'mal'); };
  card.querySelector('#btn-exportar').onclick=()=>{
    estado.capsOk=[...capsOk];
    const data={ app:'istqb-estudio', cert:META.id, version:1, fecha:new Date().toISOString(), estado:estado };
    try{
      const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url; a.download='istqb-'+META.id+'-progreso-'+new Date().toISOString().slice(0,10)+'.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),1000);
      aviso('Progreso exportado correctamente.',true);
    }catch(_){ aviso('No se pudo exportar el progreso en este navegador.',false); }
  };
  const file=card.querySelector('#file-importar');
  card.querySelector('#btn-importar').onclick=()=>file.click();
  file.onchange=()=>{
    const f=file.files&&file.files[0]; if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        const data=JSON.parse(r.result);
        const nuevo=(data&&data.estado&&typeof data.estado==='object')?data.estado:data;
        if(!nuevo||typeof nuevo!=='object'||!('capsOk' in nuevo||'semanas' in nuevo||'examenes' in nuevo)) throw 0;
        if(data&&data.cert&&data.cert!==META.id &&
           !window.confirm('El archivo es de la certificación «'+data.cert+'» y ahora estás en «'+META.id+'». ¿Importarlo de todos modos?')){ file.value=''; return; }
        if(!window.confirm('Esto sustituirá tu progreso actual de esta certificación por el del archivo. ¿Continuar?')){ file.value=''; return; }
        localStorage.setItem(LS_KEY, JSON.stringify(nuevo));
        aviso('Progreso importado. Recargando…',true);
        setTimeout(()=>window.location.reload(),500);
      }catch(_){ aviso('No se pudo leer el archivo: no parece un progreso válido.',false); }
      file.value='';
    };
    r.readAsText(f);
  };
})();

/* =========================================================
   TEMARIO + QUIZ POR CAPÍTULO
========================================================= */
(function cabeceraTemario(){
  const cont=document.getElementById('vista-caps');
  cont.innerHTML = (META.temarioIntro||('<div class="card"><h2>Capítulos del syllabus</h2><p>Cada capítulo incluye teoría y un quiz. Se marca como superado al acertar al menos 4 de 5.</p></div>'))
    + '<div class="cap-grid" id="cap-grid"></div>';
})();
let quizBarajado=false;   // conmutador de «barajar» del quiz, común a todos los capítulos
function pintaGrid(){
  const g=document.getElementById('cap-grid');g.innerHTML='';
  CAPS.forEach(c=>{
    const secs=seccionesDe(c);
    const tar=document.createElement('div');tar.className='cap-card'+(capsOk.has(c.n)?' ok':'');
    const intentos=intentosDe(c.n), mejor=mejorIntento(c.n);
    const nota = estado.quizNotas[c.n];
    const st = capsOk.has(c.n)
      ? '✓ superado'+(intentos.length>1?(' · '+intentos.length+' intentos'):'')
      : (intentos.length ? (intentos.length+' intento'+(intentos.length===1?'':'s')+' · mejor '+mejor+'/'+c.quiz.length)
                         : (nota!=null ? ('último: '+nota+'/'+c.quiz.length) : 'quiz pendiente'));
    const cab=document.createElement('button');
    cab.className='cap-card-cab';
    cab.innerHTML='<div class="cn">CAPÍTULO '+c.n+'</div><h4>'+c.titulo+'</h4>'+
      '<div class="st">'+st+(secs.length?(' · '+secs.length+' secciones'):'')+'</div>';
    cab.onclick=()=>abrirCap(c.n);
    tar.appendChild(cab);
    // Índice de secciones: cada una abre el capítulo directamente en su punto
    if(secs.length){
      const ul=document.createElement('ul');ul.className='cap-secs';
      secs.forEach(s=>{
        const li=document.createElement('li');
        const b=document.createElement('button');
        b.className='cap-sec-link';
        b.title='Abrir el capítulo '+c.n+' en la sección '+s.id;
        b.innerHTML='<span class="cs-num">'+s.id+'</span><span class="cs-txt">'+s.titulo+'</span>';
        b.onclick=()=>abrirCap(c.n,s.id);
        li.appendChild(b);ul.appendChild(li);
      });
      tar.appendChild(ul);
    }
    g.appendChild(tar);
  });
}
/* Cabecera de una sección + sus objetivos de aprendizaje oficiales. */
function cabeceraSeccion(c,s){
  let h='<div class="sec-cab"><span class="sec-num">'+s.id+'</span><h2>'+s.titulo+'</h2></div>';
  if(s.resumen) h+='<p class="sec-resumen">'+s.resumen+'</p>';
  if(s.lo&&s.lo.length){
    h+='<div class="sec-lo"><div class="slo-tit">Objetivos de aprendizaje evaluables</div><ul>'+
      s.lo.map(o=>'<li><span class="tag '+String(o.k||'k2').toLowerCase()+'">'+String(o.k||'K2').toUpperCase()+'</span>'+
        '<span class="lo-id">'+o.id+'</span> '+o.t+'</li>').join('')+'</ul></div>';
  }
  return h;
}
function abrirCap(n,secId){
  const c=CAPS.find(x=>x.n===n);
  if(!c)return;
  const idx=CAPS.findIndex(x=>x.n===n);
  const prev=CAPS[idx-1], next=CAPS[idx+1];
  const secs=seccionesDe(c);
  const v=document.getElementById('vista-cap');
  document.getElementById('vista-caps').style.display='none';
  v.style.display='block';
  let html='<button class="volver" id="btn-volver">← Todos los capítulos</button>';
  html+='<div class="card cap-portada" id="'+anclaSec(c.n,'indice')+'"><div class="eyebrow">CAPÍTULO '+c.n+'</div><h2>'+c.titulo+'</h2>';
  if(c.resumen) html+='<p class="cap-resumen">'+c.resumen+'</p>';
  if(secs.length){
    html+='<div class="cap-indice"><div class="ci-tit">En este capítulo</div><ol class="ci-lista">'+
      secs.map(s=>'<li><button class="ci-ir" data-ir="'+s.id+'">'+
        '<span class="ci-num">'+s.id+'</span>'+
        '<span class="ci-txt">'+s.titulo+'</span>'+
        (s.lo&&s.lo.length?'<span class="ci-lo">'+s.lo.length+' LO</span>':'')+
        '</button></li>').join('')+'</ol></div>';
  }
  html+='</div>';
  if(secs.length){
    secs.forEach(s=>{
      html+='<div class="card cap-sec" id="'+anclaSec(c.n,s.id)+'">'+
        cabeceraSeccion(c,s)+s.html+
        '<button class="btn sec sec-arriba" data-arriba="1">↑ Volver al índice del capítulo</button>'+
        '</div>';
    });
  }else{
    html+='<div class="card">'+(c.html||'')+'</div>';
  }
  const umbral=Math.ceil(c.quiz.length*0.8);
  html+='<div class="card" id="quiz-card"><h2>Quiz del capítulo '+c.n+'</h2>'+
    '<p>Responde las '+c.quiz.length+' preguntas. Verás la corrección razonada al elegir cada opción. Con '+umbral+' o más aciertos, el capítulo se marca como superado. Puedes repetirlo las veces que quieras: cada intento queda registrado.</p>'+
    '<div id="quiz-historial"></div>'+
    '<div class="quiz-ctrl">'+
      '<button class="btn sec" id="quiz-reiniciar">↻ Repetir quiz</button>'+
      '<label class="quiz-barajar"><input type="checkbox" id="quiz-barajar"'+(quizBarajado?' checked':'')+'> Barajar preguntas y respuestas</label>'+
    '</div>'+
    '<div id="quiz-zona"></div><div id="quiz-final"></div></div>';
  // Navegación entre capítulos (anterior · todos · siguiente)
  html+='<nav class="cap-nav" aria-label="Navegación entre capítulos">'+
    '<button class="btn sec cap-nav-btn" id="cap-prev"'+(prev?'':' disabled')+'>'+
      (prev?'<span class="cn">← Capítulo '+prev.n+'</span><span class="ct">'+prev.titulo+'</span>':'<span class="cn">← Anterior</span>')+'</button>'+
    '<button class="btn sec cap-nav-mid" id="cap-todos">Todos los capítulos</button>'+
    '<button class="btn sec cap-nav-btn fin" id="cap-next"'+(next?'':' disabled')+'>'+
      (next?'<span class="cn">Capítulo '+next.n+' →</span><span class="ct">'+next.titulo+'</span>':'<span class="cn">Siguiente →</span>')+'</button>'+
    '</nav>';
  v.innerHTML=html;
  document.getElementById('btn-volver').onclick=cerrarCap;
  document.getElementById('cap-todos').onclick=cerrarCap;
  if(prev)document.getElementById('cap-prev').onclick=()=>abrirCap(prev.n);
  if(next)document.getElementById('cap-next').onclick=()=>abrirCap(next.n);
  v.querySelectorAll('.ci-ir').forEach(b=>b.onclick=()=>irASeccion(c.n,b.getAttribute('data-ir')));
  v.querySelectorAll('.sec-arriba').forEach(b=>b.onclick=()=>irASeccion(c.n,'indice'));
  const chkBar=document.getElementById('quiz-barajar');
  if(chkBar) chkBar.onchange=()=>{ quizBarajado=chkBar.checked; };
  const btnRep=document.getElementById('quiz-reiniciar');
  if(btnRep) btnRep.onclick=()=>repiteQuiz(c);
  pintaHistorialQuiz(c);
  montaQuiz(c,quizBarajado);
  if(secId!=null && document.getElementById(anclaSec(c.n,secId))) irASeccion(c.n,secId);
  else window.scrollTo({top:0});
}
function cerrarCap(){
  document.getElementById('vista-cap').style.display='none';
  document.getElementById('vista-caps').style.display='block';
  pintaGrid();
}
/* Pinta una pregunta con corrección inmediata y justificación razonada.
   `etiquetas` es el HTML de las pastillas de cabecera; `irSec` (opcional) es el
   atajo de repaso que aparece al fallar; `onResp` se invoca una sola vez.
   Registra siempre el resultado en el historial de la pregunta. */
function pintaPreguntaInteractiva(p,etiquetas,irSec,onResp){
  const div=document.createElement('div');div.className='preg';
  div.innerHTML='<div>'+etiquetas+'</div><div class="enun">'+p.q+'</div>';
  const expl=document.createElement('div');expl.className='expl';
  p.op.forEach((o,j)=>{
    const b=document.createElement('button');b.className='opcion';
    b.textContent=String.fromCharCode(97+j)+') '+o;
    b.onclick=()=>{
      div.querySelectorAll('.opcion').forEach((x,k2)=>{x.disabled=true;if(k2===p.c)x.classList.add('ok');});
      const acertada=j===p.c;
      if(!acertada)b.classList.add('mal');
      expl.className='expl '+(acertada?'ok':'mal');
      expl.innerHTML='<strong>'+(acertada?'Correcto.':'La respuesta correcta es la '+String.fromCharCode(97+p.c)+').')+'</strong> '+p.e;
      if(!acertada&&irSec){
        const ir=document.createElement('button');
        ir.className='btn sec ir-sec';
        ir.textContent=irSec.texto;
        ir.onclick=irSec.accion;
        expl.appendChild(ir);
      }
      registraRespuesta(p.id,acertada);
      if(onResp)onResp(acertada);
    };
    div.appendChild(b);
  });
  div.appendChild(expl);
  return div;
}
/* Monta (o vuelve a montar) el quiz del capítulo. Con `barajado`, cambia el
   orden de las preguntas y de las opciones, remapeando la correcta. */
function montaQuiz(c,barajado){
  const zona=document.getElementById('quiz-zona');
  if(!zona)return;
  zona.innerHTML='';
  const fin=document.getElementById('quiz-final'); if(fin)fin.innerHTML='';
  const preguntas = barajado ? prepararPreguntas(c.quiz,true) : c.quiz;
  let aciertos=0,respondidas=0;
  preguntas.forEach((p,i)=>{
    const s=p.sec?buscaSec(c.n,p.sec):null;
    const etq='<span class="tag '+p.k+'">'+p.k.toUpperCase()+'</span><span class="tag">P'+(i+1)+'</span>'+
      (s?'<span class="tag sec-tag">'+s.id+'</span>':'');
    const irSec=s?{texto:'Repasar '+s.id+' · '+s.titulo+' →', accion:()=>irASeccion(c.n,s.id)}:null;
    zona.appendChild(pintaPreguntaInteractiva(p,etq,irSec,acertada=>{
      if(acertada)aciertos++;
      if(++respondidas===preguntas.length)cierraQuiz(c,aciertos);
    }));
  });
}
function repiteQuiz(c){
  montaQuiz(c,quizBarajado);
  const card=document.getElementById('quiz-card');
  if(card) card.scrollIntoView({block:'start'});
}
function cierraQuiz(c,aciertos){
  const f=document.getElementById('quiz-final');
  const umbral=Math.ceil(c.quiz.length*0.8);
  const ok=aciertos>=umbral;
  const yaSuperado=capsOk.has(c.n);
  estado.quizNotas[c.n]=aciertos;
  guardaIntento(c.n,aciertos,c.quiz.length);
  if(ok)capsOk.add(c.n);
  guardar();
  f.innerHTML='<div class="quiz-res '+(ok?'ok':'mal')+'">'+aciertos+'/'+c.quiz.length+' aciertos — '+
      (ok ? (yaSuperado?'capítulo superado ✓':'¡capítulo superado! ✓')
          : 'te faltan '+(umbral-aciertos)+' para superarlo (mínimo '+umbral+'/'+c.quiz.length+')')+'</div>'+
    '<div class="quiz-ctrl" style="margin-top:12px">'+
      '<button class="btn" id="quiz-otra">↻ Repetir quiz</button>'+
      (ok?'':'<span class="quiz-pista">Lo que has fallado ya está en tu cola de repaso.</span>')+
    '</div>';
  f.querySelector('#quiz-otra').onclick=()=>repiteQuiz(c);
  pintaHistorialQuiz(c);
  refrescaRepaso();
}

/* ---------- Historial de intentos del quiz ---------- */
const MAX_INTENTOS = 10;
function intentosDe(n){ return (estado.quizIntentos&&estado.quizIntentos[n])||[]; }
function guardaIntento(n,nota,total){
  if(!estado.quizIntentos) estado.quizIntentos={};
  const l = estado.quizIntentos[n] || (estado.quizIntentos[n]=[]);
  l.unshift({ f:new Date().toISOString(), n:nota, t:total });
  if(l.length>MAX_INTENTOS) l.length=MAX_INTENTOS;
}
function mejorIntento(n){
  const l=intentosDe(n);
  return l.length?l.reduce((m,x)=>x.n>m?x.n:m,-1):null;
}
function fechaCorta(iso){
  const d=new Date(iso);
  if(isNaN(d.getTime()))return '';
  try{
    return d.toLocaleDateString('es-ES',{day:'2-digit',month:'short'})+' · '+
           d.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});
  }catch(_){ return iso.slice(0,10); }
}
function pintaHistorialQuiz(c){
  const cont=document.getElementById('quiz-historial');
  if(!cont)return;
  const l=intentosDe(c.n);
  if(!l.length){ cont.innerHTML=''; return; }
  const umbral=Math.ceil(c.quiz.length*0.8);
  cont.innerHTML='<div class="quiz-hist"><div class="qh-tit">'+l.length+' intento'+(l.length===1?'':'s')+
    ' · mejor '+mejorIntento(c.n)+'/'+c.quiz.length+
    (l.length===MAX_INTENTOS?' · se guardan los '+MAX_INTENTOS+' últimos':'')+'</div><ol class="qh-lista">'+
    l.map(x=>'<li class="'+(x.n>=umbral?'ok':'mal')+'"><span class="qh-nota">'+x.n+'/'+x.t+'</span>'+
      '<span class="qh-fecha">'+fechaCorta(x.f)+'</span></li>').join('')+'</ol></div>';
}

/* =========================================================
   EXAMEN FINAL (SIMULACRO CON TEMPORIZADOR)
========================================================= */
let EXAMEN=[], CORTE=0, examenActual=null, aleatorizar=false;   // set en curso

/* Banco común de todas las preguntas (todos los sets), para el examen por capítulo */
const POOL = EXAMENES.reduce((a,e)=>a.concat(e.preguntas),[]);
const CAPS_CON_PREG = [...new Set(POOL.map(p=>p.cap))].sort((a,b)=>a-b);
const MIN_POR_PREG = META.examen.minutos / META.examen.preguntas;

function barajar(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}return a;}
/* Copia las preguntas y, si procede, baraja orden y opciones (remapeando la correcta).
   `barajarlo` permite forzarlo desde el quiz; si se omite, manda el conmutador del examen. */
function prepararPreguntas(preguntas,barajarlo){
  let lista=preguntas.map(p=>({id:p.id,q:p.q,op:p.op.slice(),c:p.c,e:p.e,k:p.k,cap:p.cap,sec:p.sec}));
  if(barajarlo===undefined?aleatorizar:barajarlo){
    barajar(lista);
    lista.forEach(p=>{
      const idx=p.op.map((_,i)=>i); barajar(idx);
      p.op=idx.map(i=>p.op[i]); p.c=idx.indexOf(p.c);
    });
  }
  return lista;
}

/* ---------------------------------------------------------
   EXAMEN ADAPTATIVO
   En vez de la distribución oficial por capítulo, pondera cada
   pregunta según tu historial: lo fallado pesa mucho, lo nunca
   visto bastante y lo dominado poco.
--------------------------------------------------------- */
const PESO_ESTADO = { pendiente:100, fragil:60, sin:40, reciente:15, dominada:5 };
function pesoPregunta(id){
  const c=clasificaPregunta(id);
  let p=PESO_ESTADO[c.estado]!==undefined?PESO_ESTADO[c.estado]:30;
  if(c.r) p += Math.min(c.r.mal,5)*8 + Math.min(c.dias,60)*0.3;
  return p;
}
/* Muestreo ponderado sin reemplazo: favorece lo flojo sin volverse
   determinista, para que dos exámenes seguidos no sean idénticos. */
function eligePonderadas(candidatas,n){
  const bolsa=candidatas.map(p=>({p:p,w:pesoPregunta(p.id)}));
  let total=bolsa.reduce((a,x)=>a+x.w,0);
  const elegidas=[];
  while(elegidas.length<n && bolsa.length){
    let r=Math.random()*total, i=0;
    while(i<bolsa.length-1 && (r-=bolsa[i].w)>0) i++;
    elegidas.push(bolsa[i].p);
    total-=bolsa[i].w;
    bolsa.splice(i,1);
  }
  return elegidas;
}
/* Secciones con más peso acumulado, para explicar qué se priorizaría. */
function focoAdaptativo(limite){
  const porSec={};
  POOL.forEach(p=>{
    const c=clasificaPregunta(p.id);
    const d=porSec[p.sec]||(porSec[p.sec]={sec:p.sec,cap:p.cap,peso:0,flojas:0});
    d.peso+=pesoPregunta(p.id);
    if(c.estado==='pendiente'||c.estado==='fragil')d.flojas++;
  });
  return Object.keys(porSec).map(k=>porSec[k])
    .sort((a,b)=>b.flojas-a.flojas || b.peso-a.peso || cmpSec(a.sec,b.sec))
    .slice(0,limite||5);
}
function empezarSimAdaptativo(){
  const n=Math.min(META.examen.preguntas,POOL.length);
  const preg=eligePonderadas(POOL,n);
  const minutos=Math.max(5,Math.ceil(n*MIN_POR_PREG));
  lanzarExamen({ id:'adaptativo', nombre:'Examen adaptativo', minutos:minutos,
    cortePorcentaje:META.examen.cortePorcentaje, preguntas:prepararPreguntas(preg),
    adaptativo:true, relanzar:empezarSimAdaptativo });
}

function pintaSelectorSim(){
  const cont=document.getElementById('sim-inicio');
  let html='<div class="card"><h2>Examen final</h2>'+
    '<p>Elige un examen completo, de un capítulo o de una sección concreta del syllabus. Cada pregunta vale 1 punto; al corregir verás la justificación de cada respuesta y tu desglose por capítulo y por sección, con un atajo para repasar justo lo que falles. Hazlo sin apuntes para simular condiciones reales.</p>'+
    '<ul><li>Puedes navegar libremente entre preguntas con el mapa numérico.</li>'+
    '<li>Marca con <span class="term">⚑</span> las preguntas dudosas para volver a ellas antes de corregir.</li>'+
    '<li>Al agotarse el tiempo, el examen se corrige automáticamente.</li></ul>'+
    '<label style="display:flex;gap:8px;align-items:center;font-size:14px;cursor:pointer"><input type="checkbox" id="chk-aleatorizar"'+(aleatorizar?' checked':'')+'> Aleatorizar el orden de preguntas y de respuestas</label></div>';

  // Examen adaptativo (fase 9.1)
  (function(){
    const n=Math.min(META.examen.preguntas,POOL.length);
    const foco=focoAdaptativo(5).filter(x=>x.flojas>0);
    const prev=estado.examenes&&estado.examenes['adaptativo'];
    const corte=Math.ceil(n*META.examen.cortePorcentaje/100);
    html+='<div class="card card-adaptativo"><h3 style="margin-top:0">Examen adaptativo</h3>'+
      '<p>Mismo formato que el examen real, pero las preguntas <strong>no</strong> se reparten por la distribución oficial: se sortean ponderando tu historial. Lo que fallaste la última vez pesa mucho; lo que nunca has practicado, bastante; lo que ya dominas, poco.</p>'+
      '<div class="meta-prog">'+n+' preguntas · '+Math.max(5,Math.ceil(n*MIN_POR_PREG))+' min · corte '+corte+'/'+n+' ('+META.examen.cortePorcentaje+' %)</div>';
    if(foco.length){
      html+='<p class="adap-foco">Ahora mismo priorizaría: '+
        foco.map(x=>'<span class="af-sec">'+x.sec+'</span> <span class="af-n">'+x.flojas+'</span>').join(' · ')+'</p>';
    }else{
      html+='<p class="adap-foco">Todavía no tienes fallos registrados, así que saldría un examen prácticamente al azar. Haz antes un quiz o un examen completo y vuelve.</p>';
    }
    if(prev) html+='<span class="prog-txt">Tu último adaptativo: <b>'+prev.nota+'/'+prev.total+'</b></span>';
    html+='<div style="margin-top:12px"><button class="btn'+(foco.length?'':' sec')+'" id="btn-adaptativo">Generar examen adaptativo</button></div></div>';
  })();

  EXAMENES.forEach(ex=>{
    const corte=corteDe(ex);
    const prev=estado.examenes&&estado.examenes[ex.id];
    const prevTxt=prev?('<span class="prog-txt">Tu último intento: <b>'+prev.nota+'/'+prev.total+'</b> ('+(prev.nota>=corte?'aprobado':'no aprobado')+')</span>'):'';
    html+='<div class="card"><h3 style="margin-top:0">'+ex.nombre+'</h3>'+
      (ex.descripcion?'<p>'+ex.descripcion+'</p>':'')+
      '<div class="meta-prog">'+ex.preguntas.length+' preguntas · '+ex.minutos+' min · corte '+corte+'/'+ex.preguntas.length+' ('+ex.cortePorcentaje+' %)</div>'+
      prevTxt+
      '<div style="margin-top:12px"><button class="btn" data-set="'+ex.id+'">Empezar este examen</button></div></div>';
  });
  // Examen por capítulo y por sección del syllabus
  html+='<div class="card"><h3 style="margin-top:0">Examen por capítulo o sección</h3>'+
    '<p>Practica un capítulo concreto o una sola sección del syllabus, cronometrado. Las preguntas salen del banco de todos los exámenes y el tiempo se ajusta al número de preguntas.</p>';
  CAPS_CON_PREG.forEach(n=>{
    const c=CAPS.find(x=>x.n===n);
    const delCap=POOL.filter(p=>p.cap===n);
    const prev=estado.examenes&&estado.examenes['cap-'+n];
    const prevTxt=prev?(' · último '+prev.nota+'/'+prev.total):'';
    html+='<div class="ex-cap"><button class="btn sec ex-cap-btn" data-cap="'+n+'">Capítulo '+n+' · '+delCap.length+' preg.'+prevTxt+'</button>';
    const secs=seccionesDe(c).filter(s=>delCap.some(p=>p.sec===s.id));
    if(secs.length>1){
      html+='<div class="ex-secs">';
      secs.forEach(s=>{
        const cnt=delCap.filter(p=>p.sec===s.id).length;
        const pv=estado.examenes&&estado.examenes['sec-'+s.id];
        html+='<button class="ss-chip" data-sec="'+s.id+'" title="'+s.titulo+'"><span class="ss-num">'+s.id+'</span> '+
          cnt+' preg.'+(pv?(' · '+pv.nota+'/'+pv.total):'')+'</button>';
      });
      html+='</div>';
    }
    html+='</div>';
  });
  html+='</div>';
  cont.innerHTML=html;
  cont.querySelector('#chk-aleatorizar').onchange=e=>{aleatorizar=e.target.checked;};
  cont.querySelectorAll('button[data-set]').forEach(b=>b.onclick=()=>empezarSimSet(b.getAttribute('data-set')));
  cont.querySelectorAll('button[data-cap]').forEach(b=>b.onclick=()=>empezarSimCap(parseInt(b.getAttribute('data-cap'),10)));
  cont.querySelectorAll('button[data-sec]').forEach(b=>b.onclick=()=>empezarSimSec(b.getAttribute('data-sec')));
  const ad=cont.querySelector('#btn-adaptativo'); if(ad) ad.onclick=empezarSimAdaptativo;
}

let simResp=[],simMarcadas=[],simIdx=0,simSeg=0,simTimer=null;
function lanzarExamen(exObj){
  examenActual=exObj;
  EXAMEN=exObj.preguntas; CORTE=Math.ceil(EXAMEN.length*exObj.cortePorcentaje/100);
  simResp=new Array(EXAMEN.length).fill(null);
  simMarcadas=new Array(EXAMEN.length).fill(false);
  simIdx=0;simSeg=exObj.minutos*60;
  document.getElementById('sim-inicio').style.display='none';
  document.getElementById('sim-final').style.display='none';
  document.getElementById('sim-curso').style.display='block';
  clearInterval(simTimer);
  simTimer=setInterval(()=>{
    simSeg--;pintaReloj();
    if(simSeg<=0){clearInterval(simTimer);corrigeSim(true);}
  },1000);
  pintaReloj();pintaMapa();pintaPregSim();
}
function empezarSimSet(exId){
  const set=EXAMENES.find(e=>e.id===exId)||EXAMENES[0];
  lanzarExamen({ id:set.id, nombre:set.nombre, minutos:set.minutos, cortePorcentaje:set.cortePorcentaje,
    preguntas:prepararPreguntas(set.preguntas), relanzar:()=>empezarSimSet(exId) });
}
function empezarSimCap(n){
  const preg=POOL.filter(p=>p.cap===n);
  if(!preg.length)return;
  const minutos=Math.max(5,Math.ceil(preg.length*MIN_POR_PREG));
  lanzarExamen({ id:'cap-'+n, nombre:'Examen del capítulo '+n, minutos:minutos,
    cortePorcentaje:META.examen.cortePorcentaje, preguntas:prepararPreguntas(preg),
    relanzar:()=>empezarSimCap(n) });
}
function empezarSimSec(secId){
  const preg=POOL.filter(p=>p.sec===secId);
  if(!preg.length)return;
  const s=buscaSec(preg[0].cap,secId);
  const minutos=Math.max(5,Math.ceil(preg.length*MIN_POR_PREG));
  lanzarExamen({ id:'sec-'+secId, nombre:'Examen de la sección '+secId+(s?' · '+s.titulo:''),
    minutos:minutos, cortePorcentaje:META.examen.cortePorcentaje, preguntas:prepararPreguntas(preg),
    relanzar:()=>empezarSimSec(secId) });
}
function pintaReloj(){
  const m=Math.floor(simSeg/60),s=simSeg%60;
  const r=document.getElementById('sim-reloj');
  r.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  r.classList.toggle('poco',simSeg<=600);
}
function pintaMapa(){
  const mp=document.getElementById('sim-mapa');mp.innerHTML='';
  EXAMEN.forEach((_,i)=>{
    const b=document.createElement('button');b.textContent=i+1;
    if(simResp[i]!==null)b.classList.add('resp');
    if(simMarcadas[i]){ b.classList.add('marcada'); b.title='Marcada para revisar'; }
    if(i===simIdx)b.classList.add('act');
    b.onclick=()=>{simIdx=i;pintaMapa();pintaPregSim();};
    mp.appendChild(b);
  });
  const marcadas=simMarcadas.filter(Boolean).length;
  const leyenda=document.getElementById('sim-leyenda');
  if(leyenda){
    const sin=simResp.filter(r=>r===null).length;
    leyenda.innerHTML='<span class="lg lg-resp">'+(EXAMEN.length-sin)+' respondida'+(EXAMEN.length-sin===1?'':'s')+'</span>'+
      '<span class="lg lg-sin">'+sin+' sin responder</span>'+
      (marcadas?'<span class="lg lg-marc">⚑ '+marcadas+' para revisar</span>':'');
  }
  document.getElementById('sim-pos').textContent=(simIdx+1)+' / '+EXAMEN.length;
  document.getElementById('sim-ant').disabled=simIdx===0;
  document.getElementById('sim-sig').disabled=simIdx===EXAMEN.length-1;
}
function pintaPregSim(){
  const p=EXAMEN[simIdx];
  const marcada=!!simMarcadas[simIdx];
  const z=document.getElementById('sim-pregunta');
  z.innerHTML='<div class="preg"><div class="preg-cab"><div>'+
      '<span class="tag '+p.k+'">'+p.k.toUpperCase()+'</span><span class="tag">CAP. '+p.cap+'</span></div>'+
      '<button class="btn-marcar'+(marcada?' act':'')+'" id="sim-marcar" aria-pressed="'+marcada+'">'+
        '⚑ '+(marcada?'Marcada para revisar':'Marcar para revisar')+'</button>'+
    '</div><div class="enun">'+p.q+'</div></div>';
  const cont=z.querySelector('.preg');
  z.querySelector('#sim-marcar').onclick=()=>{
    simMarcadas[simIdx]=!simMarcadas[simIdx];
    pintaPregSim();pintaMapa();
  };
  p.op.forEach((o,j)=>{
    const b=document.createElement('button');b.className='opcion'+(simResp[simIdx]===j?' elegida':'');
    b.textContent=String.fromCharCode(97+j)+') '+o;
    b.onclick=()=>{simResp[simIdx]=j;pintaPregSim();pintaMapa();};
    cont.appendChild(b);
  });
}
function moverSim(d){simIdx=Math.min(EXAMEN.length-1,Math.max(0,simIdx+d));pintaMapa();pintaPregSim();}
/* Salta a la siguiente pregunta marcada (o sin responder) a partir de la actual. */
function irAPendiente(){
  const total=EXAMEN.length;
  for(let k=1;k<=total;k++){
    const i=(simIdx+k)%total;
    if(simMarcadas[i]||simResp[i]===null){ simIdx=i; pintaMapa(); pintaPregSim(); return; }
  }
}
function confirmarFin(){
  const sin=simResp.filter(r=>r===null).length;
  const marcadas=simMarcadas.filter(Boolean).length;
  const avisos=[];
  if(sin) avisos.push(sin+' pregunta'+(sin===1?'':'s')+' sin responder');
  if(marcadas) avisos.push(marcadas+' marcada'+(marcadas===1?'':'s')+' para revisar');
  if(avisos.length && !window.confirm('Tienes '+avisos.join(' y ')+'. ¿Corregir igualmente?'))return;
  clearInterval(simTimer);corrigeSim(false);
}
function corrigeSim(porTiempo){
  document.getElementById('sim-curso').style.display='none';
  const f=document.getElementById('sim-final');f.style.display='block';
  let nota=0;const porCap={},porSec={};
  EXAMEN.forEach((p,i)=>{
    porCap[p.cap]=porCap[p.cap]||{ok:0,tot:0};porCap[p.cap].tot++;
    if(p.sec){ porSec[p.sec]=porSec[p.sec]||{ok:0,tot:0,cap:p.cap}; porSec[p.sec].tot++; }
    const acertada=simResp[i]===p.c;
    if(acertada){nota++;porCap[p.cap].ok++;if(p.sec)porSec[p.sec].ok++;}
    // Historial por pregunta (una sin responder cuenta como fallo). Diferido:
    // se guarda una sola vez al final, no 40 veces.
    registraRespuesta(p.id,acertada,true);
  });
  const res={nota:nota,total:EXAMEN.length,fecha:new Date().toISOString()};
  estado.examen=res;
  if(!estado.examenes) estado.examenes={};
  estado.examenes[examenActual.id]=res;
  guardar();refrescaRepaso();   // repinta pipeline, contador de la pestaña y cola
  const apro=nota>=CORTE;
  let html='<div class="card">'+(porTiempo?'<div class="nota">Se agotó el tiempo: el examen se ha corregido automáticamente.</div>':'')+
    '<h2>Resultado · '+examenActual.nombre+'</h2><div><span class="marcador">'+nota+'<span style="font-size:20px;color:var(--tinta2)"> / '+EXAMEN.length+'</span></span>'+
    '<span class="veredicto '+(apro?'ok':'mal')+'">'+(apro?'APROBADO ('+Math.round(nota/EXAMEN.length*100)+' %)':'NO APROBADO ('+Math.round(nota/EXAMEN.length*100)+' %) — corte: '+CORTE+'/'+EXAMEN.length)+'</span></div>';
  // Cómo se compuso el examen adaptativo, para que no sea una caja negra
  if(examenActual.adaptativo){
    const comp={};
    EXAMEN.forEach(p=>comp[p.sec]=(comp[p.sec]||0)+1);
    const orden=Object.keys(comp).sort((a,b)=>comp[b]-comp[a]||cmpSec(a,b)).slice(0,6);
    html+='<div class="nota"><strong>Examen adaptativo:</strong> estas '+EXAMEN.length+' preguntas se sortearon ponderando tu historial, no por la distribución oficial. Más presentes: '+
      orden.map(id=>'<span class="term">'+id+'</span> ('+comp[id]+')').join(', ')+'.</div>';
  }
  const marcadasFin=simMarcadas.filter(Boolean).length;
  if(marcadasFin){
    const aciertoMarcadas=EXAMEN.filter((p,i)=>simMarcadas[i]&&simResp[i]===p.c).length;
    html+='<div class="nota">Marcaste <strong>'+marcadasFin+'</strong> pregunta'+(marcadasFin===1?'':'s')+
      ' para revisar y acertaste '+aciertoMarcadas+' de ellas. Aparecen señaladas con ⚑ en la revisión.</div>';
  }
  html+='<h3>Desglose por capítulo</h3><div class="desglose">';
  Object.keys(porCap).sort((a,b)=>a-b).forEach(c=>{
    const d=porCap[c];
    html+='<div><b>CAPÍTULO '+c+'</b>'+d.ok+'/'+d.tot+' aciertos'+(d.ok/d.tot<0.6?' · <span style="color:var(--fail)">repasar</span>':'')+'</div>';
  });
  html+='</div>';
  // Desglose por sección del syllabus: cada fila lleva a su punto del temario
  const secsOrden=Object.keys(porSec).sort(cmpSec);
  if(secsOrden.length){
    html+='<h3>Desglose por sección del syllabus</h3>'+
      '<p style="font-size:14px;color:var(--tinta2)">Pulsa una sección para abrir el temario justo por ahí.</p><div class="desglose-sec">';
    secsOrden.forEach(id=>{
      const d=porSec[id], s=buscaSec(d.cap,id), pct=d.ok/d.tot;
      const est=pct===1?'ok':(pct<0.6?'mal':'medio');
      html+='<button class="ds-fila '+est+'" data-ir-sec="'+id+'" data-ir-cap="'+d.cap+'">'+
        '<span class="ds-num">'+id+'</span>'+
        '<span class="ds-tit">'+(s?s.titulo:'')+'</span>'+
        '<span class="ds-nota">'+d.ok+'/'+d.tot+'</span></button>';
    });
    html+='</div>';
  }
  html+='<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn sec" id="btn-repetir">Repetir este examen</button><button class="btn sec" id="btn-otro">Elegir otro examen</button></div></div>';
  html+='<div class="card"><h2>Revisión pregunta a pregunta</h2><p>Las falladas aparecen primero. Cada una incluye la justificación de la respuesta correcta.</p></div>';
  const orden=EXAMEN.map((p,i)=>({p,i})).sort((a,b)=>{
    const fa=simResp[a.i]===a.p.c?1:0,fb=simResp[b.i]===b.p.c?1:0;return fa-fb||a.i-b.i;
  });
  orden.forEach(({p,i})=>{
    const ok=simResp[i]===p.c;
    const s=p.sec?buscaSec(p.cap,p.sec):null;
    html+='<div class="rev-item '+(ok?'ok':'mal')+'"><div class="meta">'+(simMarcadas[i]?'<span class="marca-rev">⚑</span> ':'')+
      'PREGUNTA '+(i+1)+' · CAP. '+p.cap+(p.sec?' · '+p.sec:'')+' · '+p.k.toUpperCase()+' · '+(ok?'ACERTADA':'FALLADA')+'</div>'+
      '<div class="enun" style="font-weight:600">'+p.q+'</div>'+
      '<div class="resp">Tu respuesta: <b>'+(simResp[i]===null?'(sin responder)':String.fromCharCode(97+simResp[i])+') '+p.op[simResp[i]])+'</b></div>'+
      (ok?'':'<div class="resp">Correcta: <b>'+String.fromCharCode(97+p.c)+') '+p.op[p.c]+'</b></div>')+
      '<div class="expl ok" style="display:block">'+p.e+'</div>'+
      (s?'<button class="btn sec ir-sec" data-ir-sec="'+s.id+'" data-ir-cap="'+p.cap+'">Repasar '+s.id+' · '+s.titulo+' →</button>':'')+
      '</div>';
  });
  f.innerHTML=html;
  f.querySelectorAll('[data-ir-sec]').forEach(b=>b.onclick=()=>
    irACapitulo(parseInt(b.getAttribute('data-ir-cap'),10), b.getAttribute('data-ir-sec')));
  document.getElementById('btn-repetir').onclick=()=>examenActual.relanzar();
  document.getElementById('btn-otro').onclick=()=>{
    document.getElementById('sim-final').style.display='none';
    document.getElementById('sim-inicio').style.display='block';
    pintaSelectorSim();window.scrollTo({top:0});
  };
  window.scrollTo({top:0});
}
// Conexión de botones del examen en curso
document.getElementById('sim-ant').onclick=()=>moverSim(-1);
document.getElementById('sim-sig').onclick=()=>moverSim(1);
document.getElementById('sim-corregir').onclick=confirmarFin;
(function(){ const b=document.getElementById('sim-pendiente'); if(b) b.onclick=irAPendiente; })();

/* =========================================================
   REPASO DIRIGIDO (lo que fallas, cuando toca)
   Se nutre del historial por pregunta: sin temporizador y con
   corrección inmediata, porque aquí se estudia, no se examina.
========================================================= */
const RAPIDO = 10;
let vistaRepaso='cola';           // 'cola' | 'mapa'
function refrescaRepaso(){
  const n = colaRepaso().length;
  const b = document.getElementById('nav-repaso');
  if(b) b.innerHTML = 'Repaso'+(n?' <span class="nav-cuenta">'+n+'</span>':'');
  pintaResumenRepaso();
  pintaPipeline();
}
function pintaResumenRepaso(){
  const cont=document.getElementById('repaso-resumen');
  if(!cont)return;
  const cola=colaRepaso();
  cont.innerHTML=
    '<div class="seg">'+
      '<button class="seg-btn'+(vistaRepaso==='cola'?' act':'')+'" data-vista="cola">Cola de repaso'+(cola.length?' ('+cola.length+')':'')+'</button>'+
      '<button class="seg-btn'+(vistaRepaso==='mapa'?' act':'')+'" data-vista="mapa">Mapa de dominio · '+LO_TOTAL+' objetivos</button>'+
    '</div>' + (vistaRepaso==='cola' ? htmlCola(cola) : htmlMapa());
  cont.querySelectorAll('[data-vista]').forEach(b=>b.onclick=()=>{
    vistaRepaso=b.getAttribute('data-vista'); pintaResumenRepaso(); window.scrollTo({top:0});
  });
  const todo=cont.querySelector('#rep-todo'); if(todo) todo.onclick=()=>iniciaRepaso(cola);
  const rap=cont.querySelector('#rep-rapido'); if(rap) rap.onclick=()=>iniciaRepaso(cola.slice(0,RAPIDO));
  cont.querySelectorAll('[data-ir-sec]').forEach(b=>b.onclick=()=>
    irACapitulo(parseInt(b.getAttribute('data-ir-cap'),10), b.getAttribute('data-ir-sec')));
  cont.querySelectorAll('[data-rep-sec]').forEach(b=>b.onclick=()=>
    iniciaRepaso(cola.filter(it=>it.sec===b.getAttribute('data-rep-sec'))));
  cont.querySelectorAll('[data-practicar]').forEach(b=>b.onclick=()=>practicaSeccion(b.getAttribute('data-practicar')));
}
function htmlCola(cola){
  const r=resumenRepaso();
  let html='<div class="card"><h2>Repaso dirigido</h2>'+
    '<p>Aquí vuelven las preguntas que has fallado, en vez de repetir el temario entero. Cada respuesta se guarda en este navegador y alimenta esta cola:</p>'+
    '<ul><li><b>Pendientes:</b> las que fallaste la última vez que las viste. Salen primero.</li>'+
    '<li><b>Frágiles:</b> las que ya acertaste pero habías fallado antes, y hace '+DIAS_FRAGIL+' días o más que no las tocas.</li>'+
    '<li>Dentro de cada grupo mandan el número de fallos y los días sin practicarlas.</li></ul>'+
    '<div class="rep-tiles">'+
      '<div class="rt pendiente"><b>'+r.pendiente+'</b><span>pendientes</span></div>'+
      '<div class="rt fragil"><b>'+r.fragil+'</b><span>frágiles</span></div>'+
      '<div class="rt reciente"><b>'+r.reciente+'</b><span>en repaso</span></div>'+
      '<div class="rt dominada"><b>'+r.dominada+'</b><span>dominadas</span></div>'+
      '<div class="rt sin"><b>'+r.sin+'</b><span>sin practicar</span></div>'+
    '</div>';
  if(cola.length){
    html+='<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">'+
      '<button class="btn" id="rep-todo">Repasar las '+cola.length+'</button>'+
      (cola.length>RAPIDO?'<button class="btn sec" id="rep-rapido">Repaso rápido ('+RAPIDO+')</button>':'')+
      '</div>';
  }else{
    html+='<div class="quiz-res ok" style="margin-top:14px">'+
      (r.sin===r.total
        ? 'Aún no has respondido ninguna pregunta. Haz un quiz o un examen y lo que falles aparecerá aquí.'
        : 'No tienes nada pendiente de repaso ahora mismo. Las preguntas que hayas fallado alguna vez volverán a la cola a los '+DIAS_FRAGIL+' días.')+
      '</div>';
  }
  html+='</div>';
  // Reparto de la cola por sección del syllabus
  if(cola.length){
    const porSec={};
    cola.forEach(it=>{ (porSec[it.sec]=porSec[it.sec]||{n:0,cap:it.cap}).n++; });
    html+='<div class="card"><h3 style="margin-top:0">Dónde se concentran tus fallos</h3>'+
      '<p style="font-size:14px;color:var(--tinta2)">Pulsa una sección para repasar el temario, o repásala con sus preguntas.</p>'+
      '<div class="desglose-sec">';
    Object.keys(porSec).sort(cmpSec).forEach(id=>{
      const d=porSec[id], s=buscaSec(d.cap,id);
      html+='<div class="rep-fila"><button class="ds-fila mal" data-ir-sec="'+id+'" data-ir-cap="'+d.cap+'">'+
        '<span class="ds-num">'+id+'</span><span class="ds-tit">'+(s?s.titulo:'')+'</span>'+
        '<span class="ds-nota">'+d.n+'</span></button>'+
        '<button class="btn sec rep-sec-btn" data-rep-sec="'+id+'">Repasar estas '+d.n+'</button></div>';
    });
    html+='</div></div>';
  }
  return html;
}

/* ---------------------------------------------------------
   MAPA DE DOMINIO POR OBJETIVO DE APRENDIZAJE
   El banco está etiquetado por sección, así que el dominio se
   mide por sección y se hereda a los objetivos que la componen.
--------------------------------------------------------- */
const LO_TOTAL = CAPS.reduce((a,c)=>a+seccionesDe(c).reduce((b,s)=>b+((s.lo||[]).length),0),0);
function statsSeccion(secId){
  let preg=0,practicadas=0,bien=0,enCola=0;
  Object.keys(BANCO).forEach(id=>{
    if(BANCO[id].sec!==secId)return;
    preg++;
    const c=clasificaPregunta(id);
    if(c.estado==='sin')return;
    practicadas++;
    if(c.r.ultOk)bien++;
    if(c.estado==='pendiente'||c.estado==='fragil')enCola++;
  });
  return {preg:preg, practicadas:practicadas, bien:bien, enCola:enCola,
          nivel: (!preg||!practicadas) ? 'sin' : (bien/preg>=0.8 ? 'ok' : (bien/preg>=0.5 ? 'medio' : 'mal'))};
}
function htmlMapa(){
  const porNivel={ok:0,medio:0,mal:0,sin:0};
  let loSinPracticar=0;
  const cuerpo=CAPS.map(c=>{
    const secs=seccionesDe(c).filter(s=>(s.lo||[]).length);
    if(!secs.length)return '';
    return '<div class="card mapa-cap"><div class="eyebrow">CAPÍTULO '+c.n+'</div>'+
      '<h3 style="margin:6px 0 12px">'+c.titulo+'</h3>'+
      secs.map(s=>{
        const st=statsSeccion(s.id);
        porNivel[st.nivel]+=s.lo.length;
        if(st.nivel==='sin')loSinPracticar+=s.lo.length;
        const pct=st.preg?Math.round(st.bien/st.preg*100):0;
        return '<div class="mapa-sec '+st.nivel+'">'+
          '<div class="ms-cab">'+
            '<button class="ms-ir" data-ir-sec="'+s.id+'" data-ir-cap="'+c.n+'">'+
              '<span class="ms-num">'+s.id+'</span><span class="ms-tit">'+s.titulo+'</span></button>'+
            '<span class="ms-datos">'+(st.preg
               ? (st.bien+'/'+st.preg+' preguntas al día · '+pct+' %'+(st.enCola?' · '+st.enCola+' en cola':''))
               : 'sin preguntas en el banco')+'</span>'+
            (st.preg?'<button class="btn sec ms-practicar" data-practicar="'+s.id+'">'+
               (st.practicadas?'Practicar':'Empezar')+' ('+st.preg+')</button>':'')+
          '</div>'+
          '<div class="ms-barra"><i style="width:'+pct+'%"></i></div>'+
          '<div class="ms-los">'+s.lo.map(o=>
            '<button class="lo-chip" data-ir-sec="'+s.id+'" data-ir-cap="'+c.n+'" title="'+
              String(o.t).replace(/"/g,'&quot;')+'"><span class="tag '+String(o.k||'k2').toLowerCase()+'">'+
              String(o.k||'K2').toUpperCase()+'</span>'+o.id+'</button>').join('')+
          '</div></div>';
      }).join('')+'</div>';
  }).join('');
  const practicados=LO_TOTAL-loSinPracticar;
  return '<div class="card"><h2>Mapa de dominio</h2>'+
    '<p>Los <b>'+LO_TOTAL+' objetivos de aprendizaje</b> del syllabus, coloreados según cómo llevas las preguntas de su sección. '+
    'El banco está etiquetado por sección, así que todos los objetivos de una misma sección comparten su medición.</p>'+
    '<p style="font-size:14px;color:var(--tinta2)">«Al día» = preguntas cuyo último intento fue un acierto. Una sección en verde tiene el 80 % o más de sus preguntas al día.</p>'+
    '<div class="rep-tiles">'+
      '<div class="rt dominada"><b>'+porNivel.ok+'</b><span>dominados</span></div>'+
      '<div class="rt fragil"><b>'+porNivel.medio+'</b><span>a medias</span></div>'+
      '<div class="rt pendiente"><b>'+porNivel.mal+'</b><span>flojos</span></div>'+
      '<div class="rt sin"><b>'+porNivel.sin+'</b><span>sin practicar</span></div>'+
      '<div class="rt reciente"><b>'+practicados+'/'+LO_TOTAL+'</b><span>practicados</span></div>'+
    '</div></div>'+cuerpo;
}
/* Práctica libre de una sección: todas sus preguntas, sin cronómetro. */
function practicaSeccion(secId){
  const lista=Object.keys(BANCO).filter(id=>BANCO[id].sec===secId).map(id=>{
    const c=clasificaPregunta(id);
    return Object.assign({id:id}, BANCO[id], c);
  }).sort((a,b)=>(a.estado==='sin'?0:1)-(b.estado==='sin'?0:1));
  const s=lista.length?buscaSec(lista[0].cap,secId):null;
  iniciaRepaso(lista,'Práctica de la sección '+secId+(s?' · '+s.titulo:''));
}
function iniciaRepaso(lista,titulo){
  if(!lista.length)return;
  const res=document.getElementById('repaso-resumen'), ses=document.getElementById('repaso-sesion');
  res.style.display='none'; ses.style.display='block';
  ses.innerHTML='<button class="volver" id="rep-volver">← Volver al resumen de repaso</button>'+
    '<div class="card"><h2>'+(titulo||'Sesión de repaso')+' · '+lista.length+' pregunta'+(lista.length===1?'':'s')+'</h2>'+
    '<p>Sin temporizador: responde, lee la justificación y, si fallas, salta al punto del temario que la cubre. '+
    'Las que aciertes salen de la cola de repaso; las que falles seguirán ahí.</p>'+
    '<div id="rep-zona"></div><div id="rep-final"></div></div>';
  const zona=ses.querySelector('#rep-zona');
  let aciertos=0,respondidas=0;
  const SELLO={ pendiente:['k4','PENDIENTE'], fragil:['k3','FRÁGIL'],
                sin:['k1','SIN PRACTICAR'], reciente:['k2','REPASO'], dominada:['k2','AL DÍA'] };
  lista.forEach(it=>{
    const p=it.p, s=buscaSec(it.cap,it.sec), sello=SELLO[it.estado]||SELLO.reciente;
    const etq='<span class="tag '+p.k+'">'+p.k.toUpperCase()+'</span>'+
      (s?'<span class="tag sec-tag">'+s.id+'</span>':'')+
      '<span class="tag '+sello[0]+'">'+sello[1]+'</span>'+
      '<span class="rep-origen">'+it.origen+
        (it.r&&it.r.mal?' · '+it.r.mal+' fallo'+(it.r.mal===1?'':'s'):'')+'</span>';
    const irSec=s?{texto:'Repasar '+s.id+' · '+s.titulo+' →', accion:()=>irACapitulo(it.cap,s.id)}:null;
    zona.appendChild(pintaPreguntaInteractiva(p,etq,irSec,acertada=>{
      if(acertada)aciertos++;
      if(++respondidas===lista.length) cierraRepaso(lista.length,aciertos);
    }));
  });
  ses.querySelector('#rep-volver').onclick=volverAlResumenRepaso;
  window.scrollTo({top:0});
}
function cierraRepaso(total,aciertos){
  const f=document.getElementById('rep-final');
  const quedan=colaRepaso().length;
  f.innerHTML='<div class="quiz-res '+(aciertos===total?'ok':'mal')+'">'+aciertos+'/'+total+' aciertos en esta sesión — '+
    (quedan?quedan+' pregunta'+(quedan===1?'':'s')+' siguen en la cola de repaso':'cola de repaso vacía ✓')+'</div>'+
    '<button class="btn sec" id="rep-fin" style="margin-top:12px">Volver al resumen de repaso</button>';
  f.querySelector('#rep-fin').onclick=volverAlResumenRepaso;
}
function volverAlResumenRepaso(){
  document.getElementById('repaso-sesion').style.display='none';
  document.getElementById('repaso-resumen').style.display='block';
  pintaResumenRepaso();
  window.scrollTo({top:0});
}

/* =========================================================
   EJERCICIOS DE PRÁCTICA (con botón «Ver solución»)
========================================================= */
const EJERCICIOS = CERT.ejercicios || [];
(function pintaEjercicios(){
  const navBtn=document.getElementById('nav-ejercicios');
  const sec=document.getElementById('sec-ejercicios');
  if(!EJERCICIOS.length){ if(navBtn)navBtn.style.display='none'; if(sec)sec.innerHTML=''; return; }
  let html='<div class="card"><h2>Ejercicios de práctica</h2><p>Resuelve cada ejercicio por tu cuenta (papel y boli) y pulsa <strong>«Ver solución»</strong> para comprobarlo. Son ejercicios originales del estilo de los de aplicación (nivel K3) que aparecen en el examen.</p></div>';
  EJERCICIOS.forEach((e,i)=>{
    const k=e.k||'k3';
    html+='<div class="card ejercicio">'+
      '<div><span class="tag '+k+'">'+k.toUpperCase()+'</span><span class="tag">CAP. '+e.cap+'</span><span class="tag">EJ '+(i+1)+'</span></div>'+
      '<h3 style="margin-top:8px">'+e.titulo+'</h3>'+
      '<div class="enun-ej">'+e.enunciado+'</div>'+
      '<button class="btn sec btn-sol" data-i="'+i+'">Ver solución</button>'+
      '<div class="solucion" id="sol-'+i+'">'+e.solucion+'</div></div>';
  });
  sec.innerHTML=html;
  sec.querySelectorAll('.btn-sol').forEach(b=>{
    b.onclick=()=>{
      const sol=document.getElementById('sol-'+b.getAttribute('data-i'));
      const ver=sol.classList.toggle('ver');
      b.textContent=ver?'Ocultar solución':'Ver solución';
    };
  });
})();

/* =========================================================
   CASO DE ESTUDIO TRANSVERSAL. Se oculta si la certificación
   no define CERT.caso. Cada bloque enlaza con su capítulo.
========================================================= */
const CASO = CERT.caso || null;
(function pintaCaso(){
  const navBtn=document.getElementById('nav-caso');
  const sec=document.getElementById('sec-caso');
  if(!sec)return;
  if(!CASO || !CASO.capitulos || !CASO.capitulos.length){ if(navBtn)navBtn.style.display='none'; sec.innerHTML=''; return; }
  let html='<div class="card">'+(CASO.intro||'')+'</div>';
  html+=CASO.capitulos.map(c=>{
    const s=buscaSec(c.n,c.sub);
    return '<div class="card caso-cap"><div class="eyebrow">CAPÍTULO '+c.n+' · sobre el caso</div>'+
      '<h3 style="margin-top:6px">'+c.titulo+'</h3>'+c.html+
      '<button class="btn sec caso-ir" data-cap="'+c.n+'" data-sub="'+(s?s.id:'')+'">'+
      (s?('Ir a '+s.id+' · '+s.titulo+' →'):('Ir al capítulo '+c.n+' →'))+'</button></div>';
  }).join('');
  sec.innerHTML=html;
  sec.querySelectorAll('.caso-ir').forEach(b=>b.onclick=()=>
    irACapitulo(parseInt(b.getAttribute('data-cap'),10), b.getAttribute('data-sub')||undefined));
})();

/* =========================================================
   GLOSARIO ES ↔ EN (buscable). Se oculta si la certificación
   no define CERT.glosario.
========================================================= */
const GLOSARIO = CERT.glosario || [];
(function pintaGlosario(){
  const navBtn=document.getElementById('nav-glosario');
  const sec=document.getElementById('sec-glosario');
  if(!sec)return;
  if(!GLOSARIO.length){ if(navBtn)navBtn.style.display='none'; sec.innerHTML=''; return; }
  sec.innerHTML='<div class="seg" id="glos-seg">'+
      '<button class="seg-btn act" data-glos="lista">Lista buscable</button>'+
      '<button class="seg-btn" data-glos="tarjetas">Flashcards</button>'+
    '</div>'+
    '<div id="glos-vista-lista"><div class="card"><h2>Glosario ES ↔ EN</h2>'+
    '<p>'+GLOSARIO.length+' términos del syllabus y del glosario oficial. Busca por término en español o inglés, por sigla o por la definición.</p>'+
    '<input type="search" id="glos-q" class="glos-buscador" placeholder="Buscar: «adaptación», «gTAA», «contract»…" autocomplete="off" aria-label="Buscar en el glosario">'+
    '<div id="glos-cuenta" class="glos-cuenta"></div>'+
    '<div id="glos-lista" class="glos-lista"></div></div></div>'+
    '<div id="glos-vista-tarjetas" style="display:none"></div>';
  sec.querySelectorAll('[data-glos]').forEach(b=>b.onclick=()=>{
    const v=b.getAttribute('data-glos');
    sec.querySelectorAll('[data-glos]').forEach(x=>x.classList.toggle('act',x===b));
    document.getElementById('glos-vista-lista').style.display = v==='lista'?'block':'none';
    document.getElementById('glos-vista-tarjetas').style.display = v==='tarjetas'?'block':'none';
    if(v==='tarjetas') pintaFichasInicio();
    window.scrollTo({top:0});
  });
  const q=sec.querySelector('#glos-q'), lista=sec.querySelector('#glos-lista'), cuenta=sec.querySelector('#glos-cuenta');
  const DIACR=new RegExp('[\\u0300-\\u036f]','g');
  const norm=s=>(s||'').toLowerCase().normalize('NFD').replace(DIACR,'');
  const esc=s=>(s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  const datos=GLOSARIO.slice().sort((a,b)=>a.es.localeCompare(b.es,'es'));
  function resalta(texto,f){
    const t=esc(texto); if(!f)return t;
    const nt=norm(texto), idx=nt.indexOf(f);
    if(idx<0)return t;
    // mapear el rango sobre el texto escapado es complejo; resaltamos sobre texto plano y reescapamos por tramos
    const ini=texto.slice(0,idx), med=texto.slice(idx,idx+f.length), fin=texto.slice(idx+f.length);
    return esc(ini)+'<mark>'+esc(med)+'</mark>'+resalta(fin,f);
  }
  function pinta(filtro){
    const f=norm(filtro);
    const res=datos.filter(t=>!f||norm(t.es).includes(f)||norm(t.en).includes(f)||norm(t.def).includes(f));
    cuenta.textContent=res.length+' de '+datos.length+' términos';
    lista.innerHTML = res.length
      ? res.map(t=>'<div class="glos-item"><div class="glos-term"><b>'+resalta(t.es,f)+'</b><span class="glos-en">'+resalta(t.en,f)+'</span></div><div class="glos-def">'+resalta(t.def,f)+'</div></div>').join('')
      : '<p class="glos-vacio">Sin resultados para «'+esc(filtro)+'».</p>';
  }
  q.addEventListener('input',()=>pinta(q.value));
  pinta('');
})();

/* =========================================================
   FLASHCARDS DEL GLOSARIO
   Misma mecánica de dominio que el repaso (8.2): cada término
   guarda {ok,mal,ult,ultOk} y las falladas vuelven a la baraja.
========================================================= */
let fichaDir='es-en';              // sentido de la tarjeta
function registraTermino(clave,sabida){
  if(!estado.glosario) estado.glosario={};
  const r = estado.glosario[clave] || (estado.glosario[clave]={ok:0,mal:0,ult:null,ultOk:null});
  if(sabida) r.ok++; else r.mal++;
  r.ult=new Date().toISOString();
  r.ultOk=!!sabida;
  guardar();
}
function clasificaTermino(t){ return clasificaRegistro((estado.glosario||{})[t.es]); }
function resumenFichas(){
  const r={total:GLOSARIO.length,sin:0,pendiente:0,fragil:0,reciente:0,dominada:0};
  GLOSARIO.forEach(t=>r[clasificaTermino(t).estado]++);
  return r;
}
function barajaTerminos(lista){ return barajar(lista.slice()); }
function pintaFichasInicio(){
  const cont=document.getElementById('glos-vista-tarjetas');
  if(!cont)return;
  const r=resumenFichas();
  const flojas=GLOSARIO.filter(t=>{
    const e=clasificaTermino(t).estado; return e==='pendiente'||e==='fragil';
  });
  cont.innerHTML='<div class="card"><h2>Flashcards del glosario</h2>'+
    '<p>Los '+GLOSARIO.length+' términos, de uno en uno: intenta recordar la definición antes de darle la vuelta a la tarjeta. Lo que marques como «no me la sé» vuelve a la baraja, igual que en el repaso.</p>'+
    '<div class="rep-tiles">'+
      '<div class="rt pendiente"><b>'+r.pendiente+'</b><span>pendientes</span></div>'+
      '<div class="rt fragil"><b>'+r.fragil+'</b><span>frágiles</span></div>'+
      '<div class="rt reciente"><b>'+r.reciente+'</b><span>en repaso</span></div>'+
      '<div class="rt dominada"><b>'+r.dominada+'</b><span>dominadas</span></div>'+
      '<div class="rt sin"><b>'+r.sin+'</b><span>sin ver</span></div>'+
    '</div>'+
    '<div class="ficha-ctrl">'+
      '<span class="fc-et">Sentido de la tarjeta:</span>'+
      '<button class="ss-chip'+(fichaDir==='es-en'?' act':'')+'" data-dir="es-en">Español → inglés</button>'+
      '<button class="ss-chip'+(fichaDir==='en-es'?' act':'')+'" data-dir="en-es">Inglés → español</button>'+
      '<button class="ss-chip'+(fichaDir==='def'?' act':'')+'" data-dir="def">Definición → término</button>'+
    '</div>'+
    '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">'+
      '<button class="btn" id="fichas-todas">Barajar las '+GLOSARIO.length+'</button>'+
      (flojas.length?'<button class="btn sec" id="fichas-flojas">Solo las '+flojas.length+' que fallo</button>':'')+
    '</div></div>';
  cont.querySelectorAll('[data-dir]').forEach(b=>b.onclick=()=>{ fichaDir=b.getAttribute('data-dir'); pintaFichasInicio(); });
  cont.querySelector('#fichas-todas').onclick=()=>iniciaFichas(barajaTerminos(GLOSARIO));
  const fl=cont.querySelector('#fichas-flojas');
  if(fl) fl.onclick=()=>iniciaFichas(barajaTerminos(flojas));
}
function iniciaFichas(baraja){
  if(!baraja.length)return;
  const cont=document.getElementById('glos-vista-tarjetas');
  let i=0, sabidas=0;
  function pinta(){
    if(i>=baraja.length){
      cont.innerHTML='<button class="volver" id="fichas-volver">← Volver a las flashcards</button>'+
        '<div class="card"><h2>Baraja terminada</h2>'+
        '<div class="quiz-res '+(sabidas===baraja.length?'ok':'mal')+'">'+sabidas+'/'+baraja.length+' te las sabías</div>'+
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">'+
          '<button class="btn" id="fichas-otra">Repetir baraja</button>'+
          '<button class="btn sec" id="fichas-fin">Volver</button>'+
        '</div></div>';
      cont.querySelector('#fichas-volver').onclick=pintaFichasInicio;
      cont.querySelector('#fichas-fin').onclick=pintaFichasInicio;
      cont.querySelector('#fichas-otra').onclick=()=>iniciaFichas(barajaTerminos(baraja));
      window.scrollTo({top:0});
      return;
    }
    const t=baraja[i], cl=clasificaTermino(t);
    const SELLO={ pendiente:['k4','PENDIENTE'], fragil:['k3','FRÁGIL'],
                  sin:['k1','SIN VER'], reciente:['k2','EN REPASO'], dominada:['k2','DOMINADA'] };
    const sello=SELLO[cl.estado]||SELLO.sin;
    const anverso = fichaDir==='en-es' ? t.en : (fichaDir==='def' ? t.def : t.es);
    const pista   = fichaDir==='def' ? 'Definición' : (fichaDir==='en-es' ? 'Término en inglés' : 'Término en español');
    cont.innerHTML='<button class="volver" id="fichas-salir">← Volver a las flashcards</button>'+
      '<div class="card"><div class="ficha-barra">'+
        '<span class="fb-pos">Tarjeta '+(i+1)+' de '+baraja.length+'</span>'+
        '<span class="tag '+sello[0]+'">'+sello[1]+'</span>'+
        '<span class="fb-acierto">'+sabidas+' sabidas</span>'+
      '</div>'+
      '<div class="ficha" id="ficha">'+
        '<div class="fi-pista">'+pista+'</div>'+
        '<div class="fi-anverso">'+anverso+'</div>'+
        '<div class="fi-reverso" id="ficha-reverso" hidden>'+
          '<div class="fi-par"><span class="fi-et">ES</span> <b>'+t.es+'</b></div>'+
          '<div class="fi-par"><span class="fi-et">EN</span> <b>'+t.en+'</b></div>'+
          '<div class="fi-def">'+t.def+'</div>'+
        '</div>'+
      '</div>'+
      '<div class="ficha-acciones" id="ficha-acciones">'+
        '<button class="btn" id="ficha-voltear">Ver la respuesta</button>'+
      '</div></div>';
    cont.querySelector('#fichas-salir').onclick=pintaFichasInicio;
    cont.querySelector('#ficha-voltear').onclick=()=>{
      cont.querySelector('#ficha-reverso').hidden=false;
      cont.querySelector('#ficha').classList.add('vuelta');
      cont.querySelector('#ficha-acciones').innerHTML=
        '<button class="btn sec ficha-mal" id="ficha-no">✗ No me la sé</button>'+
        '<button class="btn ficha-ok" id="ficha-si">✓ Me la sé</button>';
      cont.querySelector('#ficha-si').onclick=()=>responde(true);
      cont.querySelector('#ficha-no').onclick=()=>responde(false);
    };
  }
  function responde(sabida){
    registraTermino(baraja[i].es,sabida);
    if(sabida)sabidas++;
    i++;
    pinta();
  }
  pinta();
  window.scrollTo({top:0});
}

/* =========================================================
   RECURSOS (contenido por certificación)
========================================================= */
document.getElementById('sec-recursos').innerHTML = META.recursosHtml||'<div class="card"><p>Recursos próximamente.</p></div>';

/* =========================================================
   REINICIAR PROGRESO
========================================================= */
const btnReset=document.getElementById('btn-reset');
if(btnReset) btnReset.onclick=()=>{
  if(!window.confirm('¿Seguro que quieres borrar todo tu progreso de esta certificación?'))return;
  localStorage.removeItem(LS_KEY);
  estado=estadoPorDefecto();capsOk.clear();
  window.location.reload();
};

/* ---------- Arranque ---------- */
pintaGrid();pintaSelectorSim();refrescaRepaso();   // refrescaRepaso ya repinta el pipeline

})();
