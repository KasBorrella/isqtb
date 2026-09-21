/* =========================================================
   MAPA DE DOMINIO POR OBJETIVO DE APRENDIZAJE (fase 8.3)
========================================================= */
'use strict';
const A = require('./ayuda');

module.exports = function(cert){
  const s = A.suite('Mapa de dominio · ' + cert);
  const w = A.arranca(cert), d = w.document;
  const CERT = w.__CERT__;
  const totalLO = CERT.caps.reduce((a,c) => a + c.secciones.reduce((b,x) => b + (x.lo||[]).length, 0), 0);
  const verMapa = doc => doc.querySelector('#repaso-resumen [data-vista="mapa"]').click();

  /* Historial sintético: las preguntas de `secId` con `aciertos` acertadas. */
  function conHistorial(secId, aciertos){
    const ids = [];
    CERT.caps.forEach(c => c.quiz.forEach(p => { if(p.sec === secId) ids.push(p.id); }));
    CERT.examenes.forEach(e => e.preguntas.forEach(p => { if(p.sec === secId) ids.push(p.id); }));
    const preguntas = {};
    ids.forEach((id,i) => preguntas[id] = { ok: i<aciertos?1:0, mal: i<aciertos?0:1,
                                            ult:new Date().toISOString(), ultOk: i<aciertos });
    const wx = A.arranca(cert, JSON.stringify({ capsOk:[], quizNotas:{}, semanas:[], examen:null,
                                                examenes:{}, preguntas:preguntas }));
    verMapa(wx.document);
    return { w:wx, total:ids.length,
             sec:[...wx.document.querySelectorAll('#repaso-resumen .mapa-sec')]
                   .find(el => el.querySelector('.ms-num').textContent === secId) };
  }

  /* --- Selector y estructura --- */
  (function(){
    const btn = d.querySelector('#repaso-resumen [data-vista="mapa"]');
    s.comprueba(btn && btn.textContent.indexOf(String(totalLO)) >= 0,
      'el selector de Repaso anuncia los ' + totalLO + ' objetivos de aprendizaje',
      btn ? btn.textContent : 'sin selector');
    verMapa(d);
    const secs = d.querySelectorAll('#repaso-resumen .mapa-sec');
    const esperadas = CERT.caps.reduce((a,c) => a + c.secciones.filter(x => (x.lo||[]).length).length, 0);
    s.comprueba(secs.length === esperadas, 'el mapa pinta las ' + esperadas + ' secciones con objetivos',
      'pinta ' + secs.length);
    const chips = d.querySelectorAll('#repaso-resumen .lo-chip');
    s.comprueba(chips.length === totalLO, 'los ' + totalLO + ' objetivos aparecen como pastilla con su nivel K',
      'hay ' + chips.length);
    s.comprueba([...chips].every(c => c.getAttribute('title')),
      'cada pastilla lleva el enunciado del objetivo en su title');
  })();

  /* --- Sin practicar --- */
  (function(){
    s.comprueba(+d.querySelector('#repaso-resumen .rt.sin b').textContent === totalLO,
      'al empezar, los ' + totalLO + ' objetivos figuran como sin practicar');
    s.comprueba(!d.querySelectorAll('#repaso-resumen .mapa-sec.ok, #repaso-resumen .mapa-sec.medio, #repaso-resumen .mapa-sec.mal').length,
      'ninguna sección aparece coloreada sin haber practicado');
  })();

  /* --- Umbrales de color --- */
  (function(){
    const secId = CERT.caps[0].secciones[0].id;
    const nLo = CERT.caps[0].secciones[0].lo.length;

    const todo = conHistorial(secId, 99);
    s.comprueba(todo.sec && todo.sec.classList.contains('ok'),
      'con el 100 % de sus preguntas al día, ' + secId + ' queda en verde',
      todo.sec ? todo.sec.className : 'sección no encontrada');
    s.comprueba(todo.sec && /100 %/.test(todo.sec.querySelector('.ms-datos').textContent),
      'y muestra su recuento y porcentaje');
    s.comprueba(+todo.w.document.querySelector('#repaso-resumen .rt.dominada b').textContent === nLo,
      'sus ' + nLo + ' objetivo(s) cuentan como dominados');

    const medio = conHistorial(secId, Math.ceil(todo.total * 0.6));
    s.comprueba(medio.sec && medio.sec.classList.contains('medio'),
      'con el 60 % al día queda en ámbar', medio.sec ? medio.sec.className : '');

    const mal = conHistorial(secId, 0);
    s.comprueba(mal.sec && mal.sec.classList.contains('mal'),
      'con todas falladas queda en rojo', mal.sec ? mal.sec.className : '');
  })();

  /* --- Atajos --- */
  (function(){
    verMapa(d);
    const objetivos = [...d.querySelectorAll('#repaso-resumen .ms-ir, #repaso-resumen .lo-chip')];
    let malas = 0;
    objetivos.forEach(b => {
      w.__ultimoScroll = null;
      b.click();
      if(w.__ultimoScroll !== A.ancla(b.getAttribute('data-ir-cap'), b.getAttribute('data-ir-sec'))) malas++;
      d.querySelector('nav button[data-sec="repaso"]').click();
      verMapa(d);
    });
    s.comprueba(!malas, 'los ' + objetivos.length + ' atajos del mapa abren su punto del temario',
      malas + ' fallan');
  })();

  /* --- Practicar una sección --- */
  (function(){
    verMapa(d);
    const btn = d.querySelector('#repaso-resumen [data-practicar]');
    if(!btn){ s.fail('el mapa no ofrece practicar ninguna sección'); return; }
    const secId = btn.getAttribute('data-practicar');
    let esperado = 0;
    CERT.caps.forEach(c => c.quiz.forEach(p => { if(p.sec === secId) esperado++; }));
    CERT.examenes.forEach(e => e.preguntas.forEach(p => { if(p.sec === secId) esperado++; }));
    btn.click();
    const n = d.querySelectorAll('#rep-zona .preg').length;
    s.comprueba(d.getElementById('repaso-sesion').style.display === 'block' && n === esperado,
      '«Practicar» en ' + secId + ' abre una sesión sin cronómetro con sus ' + esperado + ' preguntas',
      'trae ' + n);
    s.comprueba(d.querySelector('#repaso-sesion h2').textContent.indexOf(secId) >= 0,
      'la sesión se titula con la sección practicada');
    s.comprueba([...d.querySelectorAll('#rep-zona .tag')].some(t => t.textContent === 'SIN PRACTICAR'),
      'las preguntas nunca vistas se marcan «SIN PRACTICAR»');
  })();

  /* --- Responder actualiza el mapa --- */
  (function(){
    const todas = [];
    CERT.caps.forEach(c => c.quiz.forEach(p => todas.push(p)));
    CERT.examenes.forEach(e => e.preguntas.forEach(p => todas.push(p)));
    let respondidas = 0;
    [...d.querySelectorAll('#rep-zona .preg')].forEach(div => {
      const txt = div.querySelector('.enun').textContent;
      const q = todas.find(x => A.aTexto(d, x.q) === txt);
      if(!q) return;
      const ops = div.querySelectorAll('.opcion');
      let correcta = -1;
      ops.forEach((o,j) => { if(o.textContent.slice(3) === q.op[q.c]) correcta = j; });
      ops[correcta].click();
      respondidas++;
    });
    d.querySelector('#rep-final #rep-fin').click();
    verMapa(d);
    s.comprueba(respondidas > 0 && +d.querySelector('#repaso-resumen .rt.dominada b').textContent > 0,
      'tras acertar las ' + respondidas + ' de la sesión, el mapa marca objetivos como dominados');
  })();

  return s;
};
