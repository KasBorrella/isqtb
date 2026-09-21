/* =========================================================
   REPASO DIRIGIDO (fase 8.2)
   Ciclo completo: fallar → cola → sesión → reclasificación.
========================================================= */
'use strict';
const A = require('./ayuda');

module.exports = function(cert){
  const s = A.suite('Repaso · ' + cert);
  let w = A.arranca(cert);
  let d = w.document;
  const CERT = w.__CERT__;
  const cap1 = CERT.caps[0];
  const N = cap1.quiz.length;
  const totalBanco = CERT.caps.reduce((a,c) => a + c.quiz.length, 0) +
                     CERT.examenes.reduce((a,e) => a + e.preguntas.length, 0);

  /* --- Estado inicial --- */
  s.comprueba(+d.querySelector('#repaso-resumen .rt.sin b').textContent === totalBanco,
    'al empezar, las ' + totalBanco + ' preguntas del banco figuran sin practicar');
  s.comprueba(!d.querySelector('#nav-repaso .nav-cuenta'),
    'la pestaña Repaso no lleva contador con la cola vacía');

  /* --- Fallar el quiz del capítulo 1 alimenta la cola --- */
  (function(){
    d.querySelector('#cap-grid .cap-card .cap-card-cab').click();
    [...d.querySelectorAll('#quiz-zona .preg')].forEach((div,i) => {
      const c = cap1.quiz[i].c;
      div.querySelectorAll('.opcion')[(c+1) % cap1.quiz[i].op.length].click();
    });
    const g = w.__progreso();
    const ids = Object.keys(g.preguntas || {});
    s.comprueba(ids.length === N, 'las ' + N + ' respuestas del quiz se guardan en el historial', 'guardadas ' + ids.length);
    s.comprueba(ids.every(id => g.preguntas[id].ultOk === false && g.preguntas[id].mal === 1),
      'cada fallada queda con ultOk=false y un fallo contabilizado');
    const cuenta = d.querySelector('#nav-repaso .nav-cuenta');
    s.comprueba(cuenta && +cuenta.textContent === N, 'la pestaña Repaso muestra el contador ' + N,
      cuenta ? cuenta.textContent : 'sin contador');
    s.comprueba(/por repasar/.test(d.getElementById('runner').textContent),
      'la cabecera avisa de lo que queda por repasar');
  })();

  /* --- Persistencia --- */
  const almacenado = w.localStorage.getItem(w.__ls);
  w = A.arranca(cert, almacenado); d = w.document;
  s.comprueba(+d.querySelector('#repaso-resumen .rt.pendiente b').textContent === N,
    'tras recargar siguen ' + N + ' pendientes');

  /* --- Sesión de repaso --- */
  (function(){
    d.querySelector('#rep-todo').click();
    const pregs = [...d.querySelectorAll('#rep-zona .preg')];
    if(pregs.length !== N){ s.fail('la sesión trae ' + pregs.length + ' preguntas en vez de ' + N); return; }
    s.ok('la sesión de repaso recoge las ' + N + ' falladas, con su origen y estado');
    // acertamos todas menos la última
    pregs.forEach((div,i) => {
      const txt = div.querySelector('.enun').textContent;
      const q = cap1.quiz.find(x => A.aTexto(d, x.q) === txt);
      if(!q){ s.fail('no se localiza una pregunta de la sesión'); return; }
      const ops = div.querySelectorAll('.opcion');
      let correcta = -1;
      ops.forEach((o,j) => { if(o.textContent.slice(3) === q.op[q.c]) correcta = j; });
      ops[i === pregs.length-1 ? (correcta+1) % ops.length : correcta].click();
    });
    s.comprueba(!!d.querySelector('#rep-final .quiz-res'), 'la sesión termina con su resumen');
    const g = w.__progreso().preguntas;
    s.comprueba(Object.keys(g).filter(id => g[id].ultOk === true).length === N-1,
      'los ' + (N-1) + ' aciertos quedan registrados y la fallada sigue marcada');
  })();

  /* --- Reclasificación --- */
  (function(){
    d.querySelector('#rep-final #rep-fin').click();
    const leer = cls => +d.querySelector('#repaso-resumen .rt.' + cls + ' b').textContent;
    s.comprueba(leer('pendiente') === 1, 'queda 1 pendiente: la que se volvió a fallar', 'hay ' + leer('pendiente'));
    s.comprueba(leer('reciente') === N-1,
      'las ' + (N-1) + ' acertadas pasan a «en repaso», no a dominadas (tenían fallos previos)',
      'hay ' + leer('reciente'));
    s.comprueba(leer('dominada') === 0, 'dominada se reserva a las acertadas sin haber fallado nunca');
  })();

  /* --- Las frágiles vuelven pasados los días --- */
  (function(){
    const g = w.__progreso();
    const viejo = new Date(Date.now() - 9*86400000).toISOString();
    Object.keys(g.preguntas).forEach(id => { g.preguntas[id].ult = viejo; });
    const w2 = A.arranca(cert, JSON.stringify(g)), d2 = w2.document;
    const fr = +d2.querySelector('#repaso-resumen .rt.fragil b').textContent;
    const pe = +d2.querySelector('#repaso-resumen .rt.pendiente b').textContent;
    s.comprueba(fr === N-1 && pe === 1,
      'a los 9 días, las acertadas con fallos previos vuelven como frágiles (cola = ' + N + ')',
      'frágiles=' + fr + ' pendientes=' + pe);
    const cuenta = d2.querySelector('#nav-repaso .nav-cuenta');
    s.comprueba(cuenta && +cuenta.textContent === N, 'el contador de la pestaña lo refleja',
      cuenta ? cuenta.textContent : 'sin contador');
  })();

  /* --- Desglose de fallos por sección y sus atajos --- */
  (function(){
    const filas = d.querySelectorAll('#repaso-resumen .rep-fila');
    if(!filas.length){ s.fail('no hay desglose de los fallos por sección'); return; }
    s.ok(filas.length + ' sección(es) en «Dónde se concentran tus fallos»');
    const f = filas[0].querySelector('.ds-fila');
    w.__ultimoScroll = null;
    f.click();
    s.comprueba(w.__ultimoScroll === A.ancla(f.getAttribute('data-ir-cap'), f.getAttribute('data-ir-sec')),
      'el atajo del desglose abre el temario por esa sección');
    d.querySelector('nav button[data-sec="repaso"]').click();
    const rep = d.querySelector('#repaso-resumen [data-rep-sec]');
    if(rep){
      rep.click();
      s.comprueba(d.getElementById('repaso-sesion').style.display === 'block',
        '«' + rep.textContent.trim() + '» abre una sesión con solo esa sección');
    }
  })();

  /* --- El examen también alimenta la cola --- */
  (function(){
    const w3 = A.arranca(cert), d3 = w3.document;
    d3.querySelector('nav button[data-sec="simulacro"]').click();
    d3.querySelector('#sim-inicio button[data-set]').click();
    d3.getElementById('sim-corregir').click();
    const n = w3.__CERT__.examenes[0].preguntas.length;
    s.comprueba(Object.keys(w3.__progreso().preguntas || {}).length === n,
      'corregir el examen registra sus ' + n + ' preguntas (sin responder cuenta como fallo)');
    const cuenta = d3.querySelector('#nav-repaso .nav-cuenta');
    s.comprueba(cuenta && +cuenta.textContent === n,
      'el contador de repaso se actualiza sin recargar tras corregir',
      cuenta ? cuenta.textContent : 'sin contador');
  })();

  return s;
};
