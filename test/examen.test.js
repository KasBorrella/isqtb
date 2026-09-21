/* =========================================================
   EXAMEN ADAPTATIVO (9.1) Y MARCADO DE PREGUNTAS (9.2)
========================================================= */
'use strict';
const A = require('./ayuda');

module.exports = function(cert){
  const s = A.suite('Examen · ' + cert);
  const CERT0 = A.datosDe(cert);
  const N = CERT0.meta.examen.preguntas;

  /* Genera un adaptativo, lo corrige y lee su composición de la revisión
     (no hace falta exponer nada del motor: el resultado ya la lista). */
  function generaAdaptativo(d){
    d.getElementById('btn-adaptativo').click();
    const preguntas = d.querySelectorAll('#sim-mapa button').length;
    d.getElementById('sim-corregir').click();
    const items = [...d.querySelectorAll('#sim-final .rev-item')];
    const secs = items.map(it => {
      const m = it.querySelector('.meta').textContent.split('·').map(x => x.trim());
      return m[2];   // PREGUNTA n · CAP. n · <sección> · Kx · …
    });
    const firma = items.map(it => it.querySelector('.enun').textContent).sort().join('|');
    d.getElementById('btn-otro').click();
    return { preguntas: preguntas, secs: secs, firma: firma };
  }

  /* Historial sintético: `secDebil` toda fallada, el resto acertada. */
  function historial(secDebil){
    const preguntas = {};
    const ahora = new Date().toISOString();
    CERT0.examenes.forEach(e => e.preguntas.forEach(p => {
      const falla = p.sec === secDebil;
      preguntas[p.id] = { ok: falla?0:1, mal: falla?3:0, ult: ahora, ultOk: !falla };
    }));
    return JSON.stringify({ capsOk:[], quizNotas:{}, semanas:[], examen:null,
                            examenes:{}, preguntas:preguntas });
  }

  /* --- La tarjeta del adaptativo --- */
  (function(){
    const w = A.arranca(cert), d = w.document;
    d.querySelector('nav button[data-sec="simulacro"]').click();
    const btn = d.getElementById('btn-adaptativo');
    s.comprueba(!!btn, 'el selector ofrece generar un examen adaptativo');
    const foco = d.querySelector('.adap-foco');
    s.comprueba(foco && /sin fallos registrados|al azar/.test(foco.textContent),
      'sin historial avisa de que saldría un examen prácticamente al azar',
      foco ? foco.textContent.trim().slice(0,60) : 'sin aviso');
  })();

  /* --- Con historial, prioriza lo flojo --- */
  (function(){
    // sección con más preguntas en el banco, para que la señal sea clara
    const cuenta = {};
    CERT0.examenes.forEach(e => e.preguntas.forEach(p => cuenta[p.sec] = (cuenta[p.sec]||0)+1));
    const secDebil = Object.keys(cuenta).sort((a,b) => cuenta[b]-cuenta[a])[0];
    const enBanco = cuenta[secDebil];

    const w = A.arranca(cert, historial(secDebil)), d = w.document;
    d.querySelector('nav button[data-sec="simulacro"]').click();
    const foco = d.querySelector('.adap-foco');
    s.comprueba(foco && foco.textContent.indexOf(secDebil) >= 0,
      'con historial, la tarjeta anuncia que priorizará ' + secDebil,
      foco ? foco.textContent.trim().slice(0,80) : 'sin foco');

    // Diez generaciones: la sección floja debe salir sistemáticamente sobrerrepresentada
    const proporcionBanco = enBanco / CERT0.examenes.reduce((a,e) => a + e.preguntas.length, 0);
    let suma = 0, tamOk = true;
    for(let i = 0; i < 10; i++){
      const g = generaAdaptativo(d);
      if(g.preguntas !== N) tamOk = false;
      suma += g.secs.filter(x => x === secDebil).length / g.secs.length;
    }
    const media = suma / 10;
    s.comprueba(tamOk, 'el adaptativo genera siempre ' + N + ' preguntas');
    s.comprueba(media > proporcionBanco * 1.5,
      'la sección floja ' + secDebil + ' sale sobrerrepresentada (' + Math.round(media*100) +
      ' % del examen frente al ' + Math.round(proporcionBanco*100) + ' % que pesa en el banco)');
    s.comprueba(media < 1,
      'pero el examen no se reduce solo a ella: sigue entrando material de repaso');
  })();

  /* --- Dos adaptativos seguidos no son idénticos --- */
  (function(){
    const w = A.arranca(cert, historial(null)), d = w.document;
    d.querySelector('nav button[data-sec="simulacro"]').click();
    const a = generaAdaptativo(d).firma, b = generaAdaptativo(d).firma;
    s.comprueba(a !== b, 'dos exámenes adaptativos seguidos no traen las mismas preguntas');
  })();

  /* --- Marcar preguntas --- */
  (function(){
    const w = A.arranca(cert), d = w.document;
    d.querySelector('nav button[data-sec="simulacro"]').click();
    d.querySelector('#sim-inicio button[data-set]').click();

    const marcar = d.getElementById('sim-marcar');
    s.comprueba(!!marcar, 'cada pregunta del examen ofrece marcarla para revisar');
    s.comprueba(marcar.getAttribute('aria-pressed') === 'false',
      'arranca sin marcar');
    marcar.click();
    s.comprueba(d.getElementById('sim-marcar').getAttribute('aria-pressed') === 'true' &&
                d.getElementById('sim-marcar').classList.contains('act'),
      'al pulsarla queda marcada');
    s.comprueba(d.querySelectorAll('#sim-mapa button.marcada').length === 1,
      'y el mapa numérico la señala');
    s.comprueba(/1 para revisar/.test(d.getElementById('sim-leyenda').textContent),
      'la leyenda cuenta las marcadas', d.getElementById('sim-leyenda').textContent.trim());
    d.getElementById('sim-marcar').click();
    s.comprueba(!d.querySelectorAll('#sim-mapa button.marcada').length,
      'volver a pulsarla la desmarca');

    // marcamos tres y comprobamos el salto entre pendientes
    [0,3,7].forEach(i => {
      d.querySelectorAll('#sim-mapa button')[i].click();
      d.getElementById('sim-marcar').click();
    });
    s.comprueba(d.querySelectorAll('#sim-mapa button.marcada').length === 3,
      'se pueden marcar varias preguntas a la vez');
    d.querySelectorAll('#sim-mapa button')[0].click();
    d.getElementById('sim-pendiente').click();
    const pos = d.getElementById('sim-pos').textContent;
    s.comprueba(pos.indexOf('2 /') === 0 || pos.indexOf('4 /') === 0,
      '«Siguiente pendiente» salta a la próxima marcada o sin responder', pos);
  })();

  /* --- El marcado llega al resultado --- */
  (function(){
    const w = A.arranca(cert), d = w.document;
    d.querySelector('nav button[data-sec="simulacro"]').click();
    d.querySelector('#sim-inicio button[data-set]').click();
    [1,4].forEach(i => {
      d.querySelectorAll('#sim-mapa button')[i].click();
      d.getElementById('sim-marcar').click();
    });
    d.getElementById('sim-corregir').click();
    const notas = [...d.querySelectorAll('#sim-final .nota')].map(n => n.textContent).join(' ');
    s.comprueba(/Marcaste/.test(notas) && /2/.test(notas),
      'el resultado resume cuántas marcaste y cuántas acertaste', notas.trim().slice(0,90));
    s.comprueba(d.querySelectorAll('#sim-final .rev-item .marca-rev').length === 2,
      'y la revisión señala con ⚑ esas 2 preguntas');
  })();

  /* --- El resultado del adaptativo explica su composición --- */
  (function(){
    const w = A.arranca(cert, historial(null)), d = w.document;
    d.querySelector('nav button[data-sec="simulacro"]').click();
    d.getElementById('btn-adaptativo').click();
    d.getElementById('sim-corregir').click();
    const nota = [...d.querySelectorAll('#sim-final .nota')].map(n => n.textContent).join(' ');
    s.comprueba(/Examen adaptativo/.test(nota) && /ponderando tu historial/.test(nota),
      'el resultado del adaptativo explica que no siguió la distribución oficial');
    s.comprueba(d.querySelectorAll('#sim-final .nota .term').length > 0,
      'y enumera las secciones más presentes');
    const g = w.__progreso();
    s.comprueba(g && g.examenes && g.examenes.adaptativo && g.examenes.adaptativo.total === N,
      'el resultado se guarda aparte, sin pisar el de los sets oficiales');
  })();

  return s;
};
