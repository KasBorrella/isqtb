/* =========================================================
   QUIZ: repetir in situ e historial de intentos (fase 8.4)
========================================================= */
'use strict';
const A = require('./ayuda');

module.exports = function(cert){
  const s = A.suite('Quiz · ' + cert);
  const w = A.arranca(cert), d = w.document;
  const CERT = w.__CERT__;
  const cap1 = CERT.caps[0];
  const N = cap1.quiz.length;
  const UMBRAL = Math.ceil(N * 0.8);
  const MAX_INTENTOS = 10;

  const abreCap1 = () => d.querySelector('#cap-grid .cap-card .cap-card-cab').click();
  /* Responde el quiz montado: las `aciertos` primeras bien, el resto mal.
     Localiza la opción correcta por su texto, así funciona también barajado. */
  function responde(doc, aciertos){
    const pregs = [...doc.querySelectorAll('#quiz-zona .preg')];
    pregs.forEach((div,i) => {
      const txt = div.querySelector('.enun').textContent;
      const q = cap1.quiz.find(x => A.aTexto(doc, x.q) === txt);
      if(!q){ s.fail('pregunta del quiz no localizada'); return; }
      const ops = div.querySelectorAll('.opcion');
      let correcta = -1;
      ops.forEach((o,j) => { if(o.textContent.slice(3) === q.op[q.c]) correcta = j; });
      ops[i < aciertos ? correcta : (correcta+1) % ops.length].click();
    });
    return pregs.length;
  }

  /* --- Controles --- */
  abreCap1();
  s.comprueba(!!d.getElementById('quiz-reiniciar'),
    'el quiz ofrece repetirse sin salir del capítulo');
  s.comprueba(!!d.getElementById('quiz-barajar'),
    'y un conmutador para barajar preguntas y respuestas');
  s.comprueba(!d.querySelector('#quiz-historial .quiz-hist'),
    'sin intentos previos no se pinta historial');

  /* --- Primer intento, suspenso --- */
  (function(){
    responde(d, 1);
    const l = (w.__progreso().quizIntentos || {})[cap1.n] || [];
    s.comprueba(l.length === 1 && l[0].n === 1 && l[0].t === N && !!l[0].f,
      'el intento queda guardado como 1/' + N + ' con su fecha', JSON.stringify(l[0]));
    s.comprueba(!(w.__progreso().capsOk || []).includes(cap1.n),
      'con 1/' + N + ' el capítulo no se marca superado');
    const res = d.querySelector('#quiz-final .quiz-res').textContent;
    s.comprueba(/te faltan/.test(res), 'el resultado dice cuántos aciertos faltan', res.trim());
    s.comprueba(!!d.querySelector('#quiz-final #quiz-otra'), 'y ofrece repetir ahí mismo');
    const h = d.querySelector('#quiz-historial .qh-tit');
    s.comprueba(h && /1 intento/.test(h.textContent), 'aparece el historial de intentos',
      h ? h.textContent : 'sin historial');
  })();

  /* --- Repetir in situ --- */
  (function(){
    d.querySelector('#quiz-final #quiz-otra').click();
    s.comprueba(d.querySelectorAll('#quiz-zona .preg').length === N &&
                !d.querySelectorAll('#quiz-zona .opcion[disabled]').length,
      'repetir vuelve a montar las ' + N + ' preguntas en blanco, sin recargar');
    s.comprueba(d.querySelector('#quiz-final').innerHTML === '',
      'el resultado del intento anterior se limpia');
    s.comprueba(!!d.querySelector('#quiz-historial .quiz-hist'),
      'el historial se mantiene visible durante el nuevo intento');
  })();

  /* --- Segundo intento, superado --- */
  (function(){
    responde(d, N);
    const l = w.__progreso().quizIntentos[cap1.n];
    s.comprueba(l.length === 2 && l[0].n === N,
      'el segundo intento se registra y el más reciente encabeza la lista', JSON.stringify(l));
    s.comprueba((w.__progreso().capsOk || []).includes(cap1.n),
      'con ' + N + '/' + N + ' (mínimo ' + UMBRAL + ') el capítulo queda superado');
    const marcas = d.querySelectorAll('#quiz-historial .qh-lista li');
    s.comprueba(marcas.length === 2 && marcas[0].classList.contains('ok') && marcas[1].classList.contains('mal'),
      'cada intento del historial se colorea según supere el umbral');
    const h = d.querySelector('#quiz-historial .qh-tit').textContent;
    s.comprueba(h.indexOf('mejor ' + N + '/' + N) >= 0, 'la cabecera resume la mejor nota', h.trim());
  })();

  /* --- Resumen en la rejilla --- */
  (function(){
    d.querySelector('#btn-volver').click();
    const st = d.querySelector('#cap-grid .cap-card .st').textContent;
    s.comprueba(/superado/.test(st) && /2 intentos/.test(st),
      'la tarjeta del capítulo resume el estado y los intentos', st.trim());
  })();

  /* --- Barajado --- */
  (function(){
    abreCap1();
    const orden = () => [...d.querySelectorAll('#quiz-zona .enun')].map(e => e.textContent).join('|');
    const antes = orden();
    const chk = d.getElementById('quiz-barajar');
    chk.checked = true; chk.onchange();
    let distinto = false;
    for(let i = 0; i < 15 && !distinto; i++){
      d.getElementById('quiz-reiniciar').click();
      if(orden() !== antes) distinto = true;
    }
    s.comprueba(distinto, 'con «barajar» activo el orden de las preguntas cambia al repetir');
    const n = responde(d, N);
    const res = d.querySelector('#quiz-final .quiz-res').textContent;
    s.comprueba(res.indexOf(n + '/' + n) >= 0,
      'y con las opciones barajadas la corrección sigue siendo correcta', res.trim());
  })();

  /* --- Recorte del historial y persistencia --- */
  (function(){
    const g = w.__progreso();
    g.quizIntentos[cap1.n] = Array.from({length:14}, (_,i) =>
      ({ f:new Date(Date.now()-i*3600000).toISOString(), n:i%(N+1), t:N }));
    const w2 = A.arranca(cert, JSON.stringify(g)), d2 = w2.document;
    d2.querySelector('#cap-grid .cap-card .cap-card-cab').click();
    s.comprueba(d2.querySelectorAll('#quiz-historial .qh-lista li').length === 14,
      'el historial guardado se lee al arrancar');
    [...d2.querySelectorAll('#quiz-zona .preg')].forEach(div => {
      const txt = div.querySelector('.enun').textContent;
      const q = cap1.quiz.find(x => A.aTexto(d2, x.q) === txt);
      const ops = div.querySelectorAll('.opcion');
      let correcta = -1;
      ops.forEach((o,j) => { if(o.textContent.slice(3) === q.op[q.c]) correcta = j; });
      ops[correcta].click();
    });
    const l = w2.__progreso().quizIntentos[cap1.n];
    s.comprueba(l.length === MAX_INTENTOS && l[0].n === N,
      'solo se conservan los ' + MAX_INTENTOS + ' intentos más recientes, con el nuevo primero',
      'quedan ' + l.length);
  })();

  /* --- Exportar / importar / reiniciar arrastran todo el progreso --- */
  (function(){
    const g = w.__progreso();
    s.comprueba(g && 'preguntas' in g && 'quizIntentos' in g,
      'el progreso guardado incluye el historial por pregunta y por capítulo');
    const w3 = A.arranca(cert, JSON.stringify(g)), d3 = w3.document;
    d3.querySelector('#cap-grid .cap-card .cap-card-cab').click();
    s.comprueba(!!d3.querySelector('#quiz-historial .quiz-hist'),
      'un progreso importado restituye el historial de intentos');
    s.comprueba(!!d3.querySelector('#btn-exportar') && !!d3.querySelector('#btn-importar') && !!d3.getElementById('btn-reset'),
      'exportar, importar y reiniciar viven juntos en la tarjeta «Tu progreso»');
  })();

  return s;
};
