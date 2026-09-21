/* =========================================================
   FLASHCARDS DEL GLOSARIO (9.3)
========================================================= */
'use strict';
const A = require('./ayuda');

module.exports = function(cert){
  const s = A.suite('Glosario · ' + cert);
  const w = A.arranca(cert), d = w.document;
  const CERT = w.__CERT__;
  const GLO = CERT.glosario || [];

  if(!GLO.length){
    s.comprueba(d.getElementById('nav-glosario').style.display === 'none',
      'sin glosario, la pestaña se oculta');
    return s;
  }

  const irA = v => d.querySelector('#glos-seg [data-glos="' + v + '"]').click();
  const voltear = () => d.getElementById('ficha-voltear').click();

  /* --- Las dos vistas conviven --- */
  d.querySelector('nav button[data-sec="glosario"]').click();
  s.comprueba(!!d.querySelector('#glos-seg [data-glos="tarjetas"]'),
    'el glosario ofrece la vista de flashcards junto a la lista buscable');
  s.comprueba(d.getElementById('glos-vista-lista').style.display !== 'none' &&
              d.getElementById('glos-vista-tarjetas').style.display === 'none',
    'arranca en la lista buscable');
  s.comprueba(d.querySelectorAll('#glos-lista .glos-item').length === GLO.length,
    'la lista sigue mostrando los ' + GLO.length + ' términos');

  irA('tarjetas');
  s.comprueba(d.getElementById('glos-vista-lista').style.display === 'none' &&
              !!d.getElementById('fichas-todas'),
    'el selector cambia a las flashcards');
  s.comprueba(+d.querySelector('#glos-vista-tarjetas .rt.sin b').textContent === GLO.length,
    'al empezar, los ' + GLO.length + ' términos figuran sin ver');
  s.comprueba(!d.getElementById('fichas-flojas'),
    'sin fallos todavía, no se ofrece la baraja de «los que fallo»');

  /* --- Sentido de la tarjeta --- */
  (function(){
    const dirs = [...d.querySelectorAll('#glos-vista-tarjetas [data-dir]')];
    s.comprueba(dirs.length === 3, 'se puede elegir entre tres sentidos de tarjeta', 'hay ' + dirs.length);
    d.getElementById('fichas-todas').click();
    const anverso = d.querySelector('.fi-anverso').textContent;
    s.comprueba(GLO.some(t => t.es === anverso),
      'por defecto la cara visible es el término en español', anverso);
    d.getElementById('fichas-salir').click();
    d.querySelector('[data-dir="en-es"]').click();
    d.getElementById('fichas-todas').click();
    const ingles = d.querySelector('.fi-anverso').textContent;
    s.comprueba(GLO.some(t => t.en === ingles), 'en sentido inglés → español muestra el término inglés', ingles);
    d.getElementById('fichas-salir').click();
    d.querySelector('[data-dir="def"]').click();
    d.getElementById('fichas-todas').click();
    const def = d.querySelector('.fi-anverso').textContent;
    s.comprueba(GLO.some(t => t.def === def), 'y en sentido definición → término muestra la definición');
    d.getElementById('fichas-salir').click();
    d.querySelector('[data-dir="es-en"]').click();
  })();

  /* --- Voltear y responder --- */
  (function(){
    d.getElementById('fichas-todas').click();
    s.comprueba(d.getElementById('ficha-reverso').hidden,
      'la respuesta empieza oculta: primero hay que intentar recordarla');
    s.comprueba(!d.getElementById('ficha-si') && !d.getElementById('ficha-no'),
      'y no se puede puntuar sin haberla visto');
    voltear();
    s.comprueba(!d.getElementById('ficha-reverso').hidden,
      'al voltear aparecen el término en los dos idiomas y su definición');
    s.comprueba(!!d.getElementById('ficha-si') && !!d.getElementById('ficha-no'),
      'y entonces sí se puede marcar «me la sé» o «no me la sé»');
    const termino = d.querySelector('.fi-reverso b').textContent;
    d.getElementById('ficha-no').click();
    const g = w.__progreso().glosario || {};
    s.comprueba(g[termino] && g[termino].mal === 1 && g[termino].ultOk === false,
      'marcar «no me la sé» queda registrado como fallo', JSON.stringify(g[termino]));
    s.comprueba(/Tarjeta 2 de/.test(d.querySelector('.ficha-barra').textContent),
      'y pasa automáticamente a la siguiente tarjeta');
  })();

  /* --- Recorrer la baraja entera --- */
  (function(){
    let vueltas = 1;   // ya respondimos una
    while(d.getElementById('ficha-voltear') && vueltas < GLO.length + 3){
      voltear();
      (vueltas % 3 === 0 ? d.getElementById('ficha-no') : d.getElementById('ficha-si')).click();
      vueltas++;
    }
    const res = d.querySelector('#glos-vista-tarjetas .quiz-res');
    s.comprueba(!!res && res.textContent.indexOf('/' + GLO.length) >= 0,
      'al terminar la baraja aparece el resumen sobre los ' + GLO.length + ' términos',
      res ? res.textContent.trim() : 'sin resumen');
    const g = w.__progreso().glosario || {};
    s.comprueba(Object.keys(g).length === GLO.length,
      'los ' + GLO.length + ' términos quedan registrados en el progreso',
      'hay ' + Object.keys(g).length);
  })();

  /* --- La baraja de los fallados --- */
  (function(){
    d.querySelector('#fichas-fin').click();
    const fallados = Object.keys(w.__progreso().glosario)
      .filter(k => w.__progreso().glosario[k].ultOk === false).length;
    const btn = d.getElementById('fichas-flojas');
    s.comprueba(!!btn && btn.textContent.indexOf(String(fallados)) >= 0,
      'ahora se ofrece repasar solo los ' + fallados + ' que fallaste',
      btn ? btn.textContent : 'sin botón');
    s.comprueba(+d.querySelector('#glos-vista-tarjetas .rt.pendiente b').textContent === fallados,
      'el recuento de pendientes concuerda');
    btn.click();
    let n = 0;
    while(d.getElementById('ficha-voltear') && n < fallados + 2){
      voltear(); d.getElementById('ficha-si').click(); n++;
    }
    s.comprueba(n === fallados, 'la baraja corta trae exactamente esos ' + fallados, 'trajo ' + n);
    d.querySelector('#fichas-fin').click();
    s.comprueba(+d.querySelector('#glos-vista-tarjetas .rt.pendiente b').textContent === 0,
      'tras acertarlos, no quedan pendientes');
    s.comprueba(+d.querySelector('#glos-vista-tarjetas .rt.reciente b').textContent === fallados,
      'pasan a «en repaso», no a dominadas: habían fallado antes');
  })();

  /* --- Persistencia y reinicio --- */
  (function(){
    const guardado = w.localStorage.getItem(w.__ls);
    const w2 = A.arranca(cert, guardado), d2 = w2.document;
    d2.querySelector('nav button[data-sec="glosario"]').click();
    d2.querySelector('#glos-seg [data-glos="tarjetas"]').click();
    s.comprueba(+d2.querySelector('#glos-vista-tarjetas .rt.sin b').textContent === 0,
      'el progreso de las flashcards sobrevive a la recarga');
    d2.querySelector('nav button[data-sec="plan"]').click();
    d2.getElementById('btn-reset').click();
    s.comprueba(w2.localStorage.getItem(w2.__ls) === null,
      '«Reiniciar progreso» borra también el avance del glosario');
  })();

  return s;
};
