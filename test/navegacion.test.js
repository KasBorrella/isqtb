/* =========================================================
   NAVEGACIÓN: secciones del syllabus, índices, plan y examen
   Cubre lo construido en las fases 7 y 8.1.
========================================================= */
'use strict';
const A = require('./ayuda');

module.exports = function(cert){
  const s = A.suite('Navegación · ' + cert);
  const w = A.arranca(cert);
  const d = w.document;
  const CERT = w.__CERT__;

  s.comprueba(!w.__errores.length, 'la app arranca sin errores de JavaScript', w.__errores.join(' | '));

  /* --- Rejilla de capítulos --- */
  const tarjetas = d.querySelectorAll('#cap-grid .cap-card');
  s.comprueba(tarjetas.length === CERT.caps.length,
    'la rejilla pinta una tarjeta por capítulo (' + CERT.caps.length + ')', 'hay ' + tarjetas.length);

  const totalSecs = CERT.caps.reduce((a,c) => a + c.secciones.length, 0);
  let enlaces = 0, desajuste = [];
  CERT.caps.forEach((c,i) => {
    const n = tarjetas[i].querySelectorAll('.cap-sec-link').length;
    enlaces += n;
    if(n !== c.secciones.length) desajuste.push('cap. ' + c.n + ': ' + n + '≠' + c.secciones.length);
  });
  s.comprueba(!desajuste.length && enlaces === totalSecs,
    'cada tarjeta lista sus secciones (' + totalSecs + ' enlaces)', desajuste.join(', '));

  /* --- Vista de capítulo: anclas, índice, objetivos y quiz --- */
  (function(){
    const problemas = [];
    CERT.caps.forEach((c,i) => {
      tarjetas[i].querySelector('.cap-card-cab').click();
      const v = d.getElementById('vista-cap');
      const anclas = [...v.querySelectorAll('.cap-sec')].map(e => e.id);
      const esperadas = c.secciones.map(x => A.ancla(c.n, x.id));
      if(anclas.join('|') !== esperadas.join('|')) problemas.push('cap. ' + c.n + ': anclas');
      if(v.querySelectorAll('.cap-indice .ci-ir').length !== c.secciones.length) problemas.push('cap. ' + c.n + ': índice');
      const los = v.querySelectorAll('.sec-lo li').length;
      const esperadosLo = c.secciones.reduce((a,x) => a + (x.lo||[]).length, 0);
      if(los !== esperadosLo) problemas.push('cap. ' + c.n + ': objetivos ' + los + '≠' + esperadosLo);
      if(!v.querySelector('#quiz-zona .preg')) problemas.push('cap. ' + c.n + ': quiz sin montar');
    });
    s.comprueba(!problemas.length,
      'cada capítulo pinta su índice, sus secciones con ancla, sus objetivos y su quiz', problemas.join('; '));
  })();

  /* --- El índice lleva a la sección exacta --- */
  (function(){
    const destinos = new Set();
    let malas = 0;
    CERT.caps.forEach((c,i) => {
      tarjetas[i].querySelector('.cap-card-cab').click();
      [...d.getElementById('vista-cap').querySelectorAll('.ci-ir')].forEach(b => {
        w.__ultimoScroll = null;
        b.click();
        const esperado = A.ancla(c.n, b.getAttribute('data-ir'));
        if(w.__ultimoScroll !== esperado) malas++;
        destinos.add(w.__ultimoScroll);
      });
    });
    s.comprueba(!malas && destinos.size === totalSecs,
      'las ' + totalSecs + ' entradas de los índices llevan a su sección, todas distintas',
      malas + ' fallan, ' + destinos.size + ' destinos únicos');
  })();

  /* --- Plan de estudio: el fallo que originó la fase 7 --- */
  (function(){
    const filas = d.querySelectorAll('#lista-semanas .semana');
    s.comprueba(filas.length === CERT.semanas.length,
      'el plan pinta las ' + CERT.semanas.length + ' semanas', 'hay ' + filas.length);
    const destinos = [];
    const problemas = [];
    CERT.semanas.forEach((sem,i) => {
      const subs = sem.subs || (sem.sub != null ? [sem.sub] : []);
      const chips = filas[i].querySelectorAll('.ss-chip');
      if(chips.length !== subs.length) problemas.push('semana ' + (i+1) + ': pastillas');
      if(sem.cap != null){
        w.__ultimoScroll = null;
        filas[i].querySelector('.semana-cuerpo').click();
        const esperado = A.ancla(sem.cap, subs[0]);
        if(w.__ultimoScroll !== esperado) problemas.push('semana ' + (i+1) + ': destino');
        if(d.getElementById('sec-temario').className !== 'act') problemas.push('semana ' + (i+1) + ': no abre el temario');
        destinos.push(w.__ultimoScroll);
        chips.forEach((ch,j) => {
          w.__ultimoScroll = null;
          ch.click();
          if(w.__ultimoScroll !== A.ancla(sem.cap, subs[j])) problemas.push('semana ' + (i+1) + ' pastilla ' + subs[j]);
        });
      }
    });
    s.comprueba(!problemas.length, 'cada semana y cada pastilla llevan a su sección', problemas.join('; '));
    const repes = destinos.filter((v,i) => destinos.indexOf(v) !== i);
    s.comprueba(!repes.length,
      'las ' + destinos.length + ' semanas con capítulo van a puntos distintos del temario',
      'repiten: ' + [...new Set(repes)].join(', '));
  })();

  /* --- Caso de estudio (si lo hay) --- */
  if(CERT.caso && CERT.caso.capitulos){
    const botones = d.querySelectorAll('#sec-caso .caso-ir');
    let malas = 0;
    botones.forEach((b,i) => {
      const c = CERT.caso.capitulos[i];
      w.__ultimoScroll = null;
      b.click();
      if(w.__ultimoScroll !== A.ancla(c.n, c.sub)) malas++;
    });
    s.comprueba(botones.length === CERT.caso.capitulos.length && !malas,
      'los ' + botones.length + ' bloques del caso de estudio abren su sección', malas + ' fallan');
  }

  /* --- Examen: sets, por capítulo y por sección --- */
  (function(){
    d.querySelector('nav button[data-sec="simulacro"]').click();
    const sets = d.querySelectorAll('#sim-inicio button[data-set]');
    s.comprueba(sets.length === CERT.examenes.length,
      'el selector ofrece los ' + CERT.examenes.length + ' sets de examen', 'hay ' + sets.length);

    const conPreg = new Set();
    CERT.examenes.forEach(e => e.preguntas.forEach(p => conPreg.add(p.sec)));
    const esperados = CERT.caps.filter(c => c.secciones.filter(x => conPreg.has(x.id)).length > 1)
      .reduce((a,c) => a + c.secciones.filter(x => conPreg.has(x.id)).length, 0);
    const porSec = d.querySelectorAll('#sim-inicio button[data-sec]');
    s.comprueba(porSec.length === esperados,
      'y un examen por cada sección con preguntas (' + esperados + ')', 'hay ' + porSec.length);

    if(porSec.length){
      const id = porSec[0].getAttribute('data-sec');
      porSec[0].click();
      const n = d.querySelectorAll('#sim-mapa button').length;
      let tot = 0;
      CERT.examenes.forEach(e => e.preguntas.forEach(p => { if(p.sec === id) tot++; }));
      s.comprueba(n === tot, 'el examen de la sección ' + id + ' trae sus ' + tot + ' preguntas', 'trae ' + n);
    }
  })();

  /* --- Corrección: desglose por sección y atajos de repaso --- */
  (function(){
    d.getElementById('sim-corregir').click();   // sin responder: todo falla
    const filas = d.querySelectorAll('#sim-final .ds-fila');
    const revs = d.querySelectorAll('#sim-final .rev-item .ir-sec');
    s.comprueba(filas.length > 0, 'el resultado incluye desglose por sección del syllabus');
    s.comprueba(revs.length > 0, 'cada pregunta de la revisión ofrece «Repasar …»');
    let malas = 0;
    [...filas].concat([...revs]).forEach(b => {
      w.__ultimoScroll = null;
      b.click();
      if(w.__ultimoScroll !== A.ancla(b.getAttribute('data-ir-cap'), b.getAttribute('data-ir-sec'))) malas++;
    });
    s.comprueba(!malas, 'los ' + (filas.length + revs.length) + ' atajos del resultado abren su sección exacta',
      malas + ' fallan');
  })();

  /* --- Todas las pestañas pintan algo y ninguna rompe --- */
  (function(){
    const vacias = [];
    ['plan','temario','repaso','ejercicios','caso','simulacro','glosario','recursos'].forEach(nombre => {
      const btn = d.querySelector('nav button[data-sec="' + nombre + '"]');
      if(!btn || btn.style.display === 'none') return;   // pestaña oculta en esta cert
      btn.click();
      const sec = d.getElementById('sec-' + nombre);
      if(!sec || !sec.textContent.trim()) vacias.push(nombre);
    });
    s.comprueba(!vacias.length, 'todas las pestañas visibles pintan contenido', vacias.join(', '));
    s.comprueba(!w.__errores.length, 'no se ha producido ningún error de JavaScript en todo el recorrido',
      w.__errores.join(' | '));
  })();

  return s;
};
