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
  return { capsOk:[], quizNotas:{}, semanas:new Array(SEMANAS.length).fill(false), examen:null, examenes:{} };
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
  r.innerHTML=CAPS.length+' capítulos · <b>'+capsOk.size+' superado'+(capsOk.size===1?'':'s')+'</b> · examen '+exTxt;
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
  if(e.target.tagName!=='BUTTON'||!e.target.dataset.sec)return;
  activarSeccion(e.target.dataset.sec);
  window.scrollTo({top:0});
});
/* Navega al temario y abre el capítulo n (usado desde el plan de estudio). */
function irACapitulo(n){
  activarSeccion('temario');
  cerrarCap();        // asegura que la rejilla está montada antes de abrir
  abrirCap(n);
  window.scrollTo({top:0});
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

    // Cuerpo: enlace al capítulo (o a la sección) si la semana lo define
    const enlazable = s.cap!=null || !!s.sec;
    const cuerpo=document.createElement(enlazable?'button':'div');
    cuerpo.className='semana-cuerpo';
    if(enlazable)cuerpo.type='button';
    const irTxt = s.cap!=null ? ('Ir al capítulo '+s.cap+' →')
                : (s.sec ? 'Ir a «'+(s.sec==='simulacro'?'Examen final':s.sec)+'» →' : '');
    cuerpo.innerHTML='<div class="num">SEMANA '+String(i+1).padStart(2,'0')+'</div><h4>'+s.t+'</h4><p>'+s.d+'</p>'+
      (enlazable?'<span class="semana-ir">'+irTxt+'</span>':'');
    if(enlazable){
      cuerpo.addEventListener('click',()=>{
        if(s.cap!=null) irACapitulo(s.cap);
        else { activarSeccion(s.sec); window.scrollTo({top:0}); }
      });
    }

    fila.appendChild(lab);
    fila.appendChild(cuerpo);
    cont.appendChild(fila);
  });
})();

/* =========================================================
   COPIA DE SEGURIDAD DEL PROGRESO (exportar / importar JSON)
========================================================= */
(function copiaSeguridad(){
  const sec=document.getElementById('sec-plan');
  if(!sec)return;
  const card=document.createElement('div');
  card.className='card';
  card.innerHTML='<h2>Copia de seguridad del progreso</h2>'+
    '<p>Tu progreso vive solo en este navegador. Expórtalo a un archivo para guardarlo o llevarlo a otro equipo, e impórtalo cuando quieras restaurarlo. El archivo incluye capítulos superados, notas de los quizzes, semanas marcadas y resultados de examen.</p>'+
    '<div style="display:flex;gap:10px;flex-wrap:wrap">'+
      '<button class="btn sec" id="btn-exportar">↓ Exportar progreso (.json)</button>'+
      '<button class="btn sec" id="btn-importar">↑ Importar progreso…</button>'+
      '<input type="file" id="file-importar" accept="application/json,.json" hidden>'+
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
function pintaGrid(){
  const g=document.getElementById('cap-grid');g.innerHTML='';
  CAPS.forEach(c=>{
    const b=document.createElement('button');b.className='cap-card'+(capsOk.has(c.n)?' ok':'');
    const nota = estado.quizNotas[c.n];
    const st = capsOk.has(c.n) ? '✓ superado' : (nota!=null ? ('último: '+nota+'/'+c.quiz.length) : 'quiz pendiente');
    b.innerHTML='<div class="cn">CAPÍTULO '+c.n+'</div><h4>'+c.titulo+'</h4><div class="st">'+st+'</div>';
    b.onclick=()=>abrirCap(c.n);
    g.appendChild(b);
  });
}
function abrirCap(n){
  const c=CAPS.find(x=>x.n===n);
  const idx=CAPS.findIndex(x=>x.n===n);
  const prev=CAPS[idx-1], next=CAPS[idx+1];
  const v=document.getElementById('vista-cap');
  document.getElementById('vista-caps').style.display='none';
  v.style.display='block';
  let html='<button class="volver" id="btn-volver">← Todos los capítulos</button>';
  html+='<div class="card"><div class="eyebrow">CAPÍTULO '+c.n+'</div><h2>'+c.titulo+'</h2>'+c.html+'</div>';
  const umbral=Math.ceil(c.quiz.length*0.8);
  html+='<div class="card"><h2>Quiz del capítulo '+c.n+'</h2><p>Responde las '+c.quiz.length+' preguntas. Verás la corrección razonada al elegir cada opción. Con '+umbral+' o más aciertos, el capítulo se marca como superado.</p><div id="quiz-zona"></div><div id="quiz-final"></div></div>';
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
  montaQuiz(c);
  window.scrollTo({top:0});
}
function cerrarCap(){
  document.getElementById('vista-cap').style.display='none';
  document.getElementById('vista-caps').style.display='block';
  pintaGrid();
}
function montaQuiz(c){
  const zona=document.getElementById('quiz-zona');
  let aciertos=0,respondidas=0;
  c.quiz.forEach((p,i)=>{
    const div=document.createElement('div');div.className='preg';
    div.innerHTML='<div><span class="tag '+p.k+'">'+p.k.toUpperCase()+'</span><span class="tag">P'+(i+1)+'</span></div><div class="enun">'+p.q+'</div>';
    const expl=document.createElement('div');expl.className='expl';
    p.op.forEach((o,j)=>{
      const b=document.createElement('button');b.className='opcion';b.textContent=String.fromCharCode(97+j)+') '+o;
      b.onclick=()=>{
        div.querySelectorAll('.opcion').forEach((x,k2)=>{x.disabled=true;if(k2===p.c)x.classList.add('ok');});
        if(j!==p.c)b.classList.add('mal');else aciertos++;
        expl.className='expl '+(j===p.c?'ok':'mal');
        expl.innerHTML='<strong>'+(j===p.c?'Correcto.':'La respuesta correcta es la '+String.fromCharCode(97+p.c)+').')+'</strong> '+p.e;
        respondidas++;
        if(respondidas===c.quiz.length)cierraQuiz(c,aciertos);
      };
      div.appendChild(b);
    });
    div.appendChild(expl);
    zona.appendChild(div);
  });
}
function cierraQuiz(c,aciertos){
  const f=document.getElementById('quiz-final');
  const ok=aciertos>=Math.ceil(c.quiz.length*0.8);
  estado.quizNotas[c.n]=aciertos;
  if(ok)capsOk.add(c.n);
  guardar();
  f.innerHTML='<div class="quiz-res '+(ok?'ok':'mal')+'">'+aciertos+'/'+c.quiz.length+' aciertos — '+(ok?'capítulo superado ✓':'repasa el capítulo y reábrelo para reintentar el quiz')+'</div>';
  pintaPipeline();
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
/* Copia las preguntas y, si aleatorizar está activo, baraja orden y opciones (remapeando la correcta). */
function prepararPreguntas(preguntas){
  let lista=preguntas.map(p=>({q:p.q,op:p.op.slice(),c:p.c,e:p.e,k:p.k,cap:p.cap}));
  if(aleatorizar){
    barajar(lista);
    lista.forEach(p=>{
      const idx=p.op.map((_,i)=>i); barajar(idx);
      p.op=idx.map(i=>p.op[i]); p.c=idx.indexOf(p.c);
    });
  }
  return lista;
}

function pintaSelectorSim(){
  const cont=document.getElementById('sim-inicio');
  let html='<div class="card"><h2>Examen final</h2>'+
    '<p>Elige un examen completo o un examen de un capítulo concreto. Cada pregunta vale 1 punto; al corregir verás la justificación de cada respuesta y tu desglose por capítulo. Hazlo sin apuntes para simular condiciones reales.</p>'+
    '<ul><li>Puedes navegar libremente entre preguntas con el mapa numérico.</li>'+
    '<li>Al agotarse el tiempo, el examen se corrige automáticamente.</li></ul>'+
    '<label style="display:flex;gap:8px;align-items:center;font-size:14px;cursor:pointer"><input type="checkbox" id="chk-aleatorizar"'+(aleatorizar?' checked':'')+'> Aleatorizar el orden de preguntas y de respuestas</label></div>';
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
  // Examen por capítulo
  html+='<div class="card"><h3 style="margin-top:0">Examen por capítulo</h3>'+
    '<p>Practica un capítulo concreto, cronometrado. Las preguntas salen del banco de todos los exámenes y el tiempo se ajusta al número de preguntas.</p>'+
    '<div class="mapa">';
  CAPS_CON_PREG.forEach(n=>{
    const cnt=POOL.filter(p=>p.cap===n).length;
    const prev=estado.examenes&&estado.examenes['cap-'+n];
    const prevTxt=prev?(' · último '+prev.nota+'/'+prev.total):'';
    html+='<button class="btn sec" data-cap="'+n+'" style="width:auto;height:auto;padding:8px 12px">Cap. '+n+' · '+cnt+' preg.'+prevTxt+'</button>';
  });
  html+='</div></div>';
  cont.innerHTML=html;
  cont.querySelector('#chk-aleatorizar').onchange=e=>{aleatorizar=e.target.checked;};
  cont.querySelectorAll('button[data-set]').forEach(b=>b.onclick=()=>empezarSimSet(b.getAttribute('data-set')));
  cont.querySelectorAll('button[data-cap]').forEach(b=>b.onclick=()=>empezarSimCap(parseInt(b.getAttribute('data-cap'),10)));
}

let simResp=[],simIdx=0,simSeg=0,simTimer=null;
function lanzarExamen(exObj){
  examenActual=exObj;
  EXAMEN=exObj.preguntas; CORTE=Math.ceil(EXAMEN.length*exObj.cortePorcentaje/100);
  simResp=new Array(EXAMEN.length).fill(null);simIdx=0;simSeg=exObj.minutos*60;
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
    if(i===simIdx)b.classList.add('act');
    b.onclick=()=>{simIdx=i;pintaMapa();pintaPregSim();};
    mp.appendChild(b);
  });
  document.getElementById('sim-pos').textContent=(simIdx+1)+' / '+EXAMEN.length;
  document.getElementById('sim-ant').disabled=simIdx===0;
  document.getElementById('sim-sig').disabled=simIdx===EXAMEN.length-1;
}
function pintaPregSim(){
  const p=EXAMEN[simIdx];
  const z=document.getElementById('sim-pregunta');
  z.innerHTML='<div class="preg"><div><span class="tag '+p.k+'">'+p.k.toUpperCase()+'</span><span class="tag">CAP. '+p.cap+'</span></div><div class="enun">'+p.q+'</div></div>';
  const cont=z.querySelector('.preg');
  p.op.forEach((o,j)=>{
    const b=document.createElement('button');b.className='opcion'+(simResp[simIdx]===j?' elegida':'');
    b.textContent=String.fromCharCode(97+j)+') '+o;
    b.onclick=()=>{simResp[simIdx]=j;pintaPregSim();pintaMapa();};
    cont.appendChild(b);
  });
}
function moverSim(d){simIdx=Math.min(EXAMEN.length-1,Math.max(0,simIdx+d));pintaMapa();pintaPregSim();}
function confirmarFin(){
  const sin=simResp.filter(r=>r===null).length;
  if(sin>0 && !window.confirm('Tienes '+sin+' pregunta'+(sin===1?'':'s')+' sin responder. ¿Corregir igualmente?'))return;
  clearInterval(simTimer);corrigeSim(false);
}
function corrigeSim(porTiempo){
  document.getElementById('sim-curso').style.display='none';
  const f=document.getElementById('sim-final');f.style.display='block';
  let nota=0;const porCap={};
  EXAMEN.forEach((p,i)=>{
    porCap[p.cap]=porCap[p.cap]||{ok:0,tot:0};porCap[p.cap].tot++;
    if(simResp[i]===p.c){nota++;porCap[p.cap].ok++;}
  });
  const res={nota:nota,total:EXAMEN.length,fecha:new Date().toISOString()};
  estado.examen=res;
  if(!estado.examenes) estado.examenes={};
  estado.examenes[examenActual.id]=res;
  guardar();pintaPipeline();
  const apro=nota>=CORTE;
  let html='<div class="card">'+(porTiempo?'<div class="nota">Se agotó el tiempo: el examen se ha corregido automáticamente.</div>':'')+
    '<h2>Resultado · '+examenActual.nombre+'</h2><div><span class="marcador">'+nota+'<span style="font-size:20px;color:var(--tinta2)"> / '+EXAMEN.length+'</span></span>'+
    '<span class="veredicto '+(apro?'ok':'mal')+'">'+(apro?'APROBADO ('+Math.round(nota/EXAMEN.length*100)+' %)':'NO APROBADO ('+Math.round(nota/EXAMEN.length*100)+' %) — corte: '+CORTE+'/'+EXAMEN.length)+'</span></div>'+
    '<h3>Desglose por capítulo</h3><div class="desglose">';
  Object.keys(porCap).sort((a,b)=>a-b).forEach(c=>{
    const d=porCap[c];
    html+='<div><b>CAPÍTULO '+c+'</b>'+d.ok+'/'+d.tot+' aciertos'+(d.ok/d.tot<0.6?' · <span style="color:var(--fail)">repasar</span>':'')+'</div>';
  });
  html+='</div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn sec" id="btn-repetir">Repetir este examen</button><button class="btn sec" id="btn-otro">Elegir otro examen</button></div></div>';
  html+='<div class="card"><h2>Revisión pregunta a pregunta</h2><p>Las falladas aparecen primero. Cada una incluye la justificación de la respuesta correcta.</p></div>';
  const orden=EXAMEN.map((p,i)=>({p,i})).sort((a,b)=>{
    const fa=simResp[a.i]===a.p.c?1:0,fb=simResp[b.i]===b.p.c?1:0;return fa-fb||a.i-b.i;
  });
  orden.forEach(({p,i})=>{
    const ok=simResp[i]===p.c;
    html+='<div class="rev-item '+(ok?'ok':'mal')+'"><div class="meta">PREGUNTA '+(i+1)+' · CAP. '+p.cap+' · '+p.k.toUpperCase()+' · '+(ok?'ACERTADA':'FALLADA')+'</div>'+
      '<div class="enun" style="font-weight:600">'+p.q+'</div>'+
      '<div class="resp">Tu respuesta: <b>'+(simResp[i]===null?'(sin responder)':String.fromCharCode(97+simResp[i])+') '+p.op[simResp[i]])+'</b></div>'+
      (ok?'':'<div class="resp">Correcta: <b>'+String.fromCharCode(97+p.c)+') '+p.op[p.c]+'</b></div>')+
      '<div class="expl ok" style="display:block">'+p.e+'</div></div>';
  });
  f.innerHTML=html;
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
  html+=CASO.capitulos.map(c=>
    '<div class="card caso-cap"><div class="eyebrow">CAPÍTULO '+c.n+' · sobre el caso</div>'+
    '<h3 style="margin-top:6px">'+c.titulo+'</h3>'+c.html+
    '<button class="btn sec caso-ir" data-cap="'+c.n+'">Ir al capítulo '+c.n+' →</button></div>').join('');
  sec.innerHTML=html;
  sec.querySelectorAll('.caso-ir').forEach(b=>b.onclick=()=>irACapitulo(parseInt(b.getAttribute('data-cap'),10)));
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
  sec.innerHTML='<div class="card"><h2>Glosario ES ↔ EN</h2>'+
    '<p>'+GLOSARIO.length+' términos del syllabus y del glosario oficial. Busca por término en español o inglés, por sigla o por la definición.</p>'+
    '<input type="search" id="glos-q" class="glos-buscador" placeholder="Buscar: «adaptación», «gTAA», «contract»…" autocomplete="off" aria-label="Buscar en el glosario">'+
    '<div id="glos-cuenta" class="glos-cuenta"></div>'+
    '<div id="glos-lista" class="glos-lista"></div></div>';
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
pintaPipeline();pintaGrid();pintaSelectorSim();

})();
