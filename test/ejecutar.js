#!/usr/bin/env node
/* =========================================================
   SUITE DE VALIDACIÓN · npm test
   Ejecuta todos los módulos de test contra cada certificación.
     node test/ejecutar.js                 (todo)
     node test/ejecutar.js datos navegacion
     node test/ejecutar.js --cert=foundation
========================================================= */
'use strict';
const A = require('./ayuda');

const MODULOS = [
  ['datos',      './datos.test'],
  ['navegacion', './navegacion.test'],
  ['repaso',     './repaso.test'],
  ['mapa',       './mapa.test'],
  ['quiz',       './quiz.test'],
  ['examen',     './examen.test'],
  ['glosario',   './glosario.test']
];

const args = process.argv.slice(2);
const certPedida = (args.find(a => a.indexOf('--cert=') === 0) || '').split('=')[1];
const filtros = args.filter(a => a.indexOf('--') !== 0);
const certs = certPedida ? [certPedida] : A.CERTS;
const modulos = filtros.length ? MODULOS.filter(m => filtros.indexOf(m[0]) >= 0) : MODULOS;

if(certPedida && A.CERTS.indexOf(certPedida) < 0){
  console.error('Certificación desconocida: ' + certPedida + '. Opciones: ' + A.CERTS.join(', '));
  process.exit(2);
}
if(!modulos.length){
  console.error('Ningún módulo coincide. Opciones: ' + MODULOS.map(m => m[0]).join(', '));
  process.exit(2);
}

let fallos = 0, total = 0, suites = 0;
const detalle = process.env.TEST_DETALLE !== '0';
const arrancado = Date.now();

certs.forEach(cert => {
  modulos.forEach(([nombre, ruta]) => {
    let s;
    try{
      s = require(ruta)(cert);
    }catch(e){
      fallos++; suites++;
      console.log('\n▸ ' + nombre + ' · ' + cert);
      console.log('  ✗ el módulo lanzó una excepción: ' + e.message);
      console.log(String(e.stack).split('\n').slice(1,4).map(l => '    ' + l.trim()).join('\n'));
      return;
    }
    suites++; fallos += s.fallos; total += s.total;
    const cabecera = '\n▸ ' + s.titulo + '  (' + (s.total - s.fallos) + '/' + s.total + ')';
    console.log(s.fallos ? cabecera + '  ✗' : cabecera);
    if(detalle || s.fallos){
      s.lineas.forEach(l => { if(detalle || l.indexOf('✗') >= 0) console.log(l); });
    }
  });
});

const seg = ((Date.now() - arrancado) / 1000).toFixed(1);
console.log('\n' + '─'.repeat(60));
console.log(fallos
  ? '✗ ' + fallos + ' de ' + total + ' comprobaciones fallan (' + suites + ' suites, ' + seg + ' s)'
  : '✓ ' + total + ' comprobaciones correctas en ' + suites + ' suites (' + seg + ' s)');
process.exit(fallos ? 1 : 0);
