/* =========================================================
   AYUDANTES COMUNES DE LA SUITE
   Arranca la app en jsdom igual que lo haría el navegador y
   ofrece un mini-arnés de comprobaciones sin dependencias más
   allá de jsdom.
========================================================= */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const CERTS = ['foundation', 'ctal-tae'];

/* ---------- Mini-arnés ---------- */
function suite(titulo){
  const s = { titulo:titulo, fallos:0, total:0, lineas:[] };
  s.ok   = m => { s.total++; s.lineas.push('  ✓ ' + m); };
  s.fail = m => { s.total++; s.fallos++; s.lineas.push('  ✗ ' + m); };
  /* comprueba(condición, mensaje) — el mensaje describe lo que debería pasar. */
  s.comprueba = (cond, mensaje, detalle) =>
    cond ? s.ok(mensaje) : s.fail(mensaje + (detalle ? ' — ' + detalle : ''));
  return s;
}

/* ---------- Carga de datos sin DOM ---------- */
function datosDe(cert){
  const ruta = path.join(RAIZ, 'data', cert, 'datos.js');
  const ctx = { window:{} };
  new Function('window', fs.readFileSync(ruta, 'utf8'))(ctx.window);
  return ctx.window.__CERT__;
}

/* ---------- Arranque completo en jsdom ----------
   `almacen` (opcional) es el JSON de progreso que ya habría en
   localStorage antes de cargar el motor. */
function arranca(cert, almacen){
  const { JSDOM, VirtualConsole } = require('jsdom');
  const html = fs.readFileSync(path.join(RAIZ, 'app.html'), 'utf8')
    // el cargador dinámico se sustituye por la inyección manual de más abajo
    .replace(/<script>\s*\/\* Carga los datos[\s\S]*?<\/script>/, '');
  /* jsdom no implementa navegar ni descargar: al pulsar «Reiniciar progreso»
     (location.reload) o «Exportar» lo avisa por consola. Silenciamos solo esos
     avisos; cualquier otro error sí debe verse. */
  const vc = new VirtualConsole();
  vc.sendTo(console, { omitJSDOMErrors:true });
  vc.on('jsdomError', e => {
    if(!/Not implemented/.test(String(e && e.message))) console.error(e);
  });
  const dom = new JSDOM(html, { runScripts:'outside-only', pretendToBeVisual:true,
                                virtualConsole:vc,
                                url:'https://test.local/app.html?cert=' + cert });
  const w = dom.window;
  w.scrollTo = () => {};
  w.confirm = () => true;
  w.alert = () => {};
  // jsdom no implementa scrollIntoView: lo usamos para saber a dónde navega la app
  w.HTMLElement.prototype.scrollIntoView = function(){ w.__ultimoScroll = this.id; };
  const errores = [];
  w.addEventListener('error', e => errores.push(String(e.error || e.message)));
  w.eval(fs.readFileSync(path.join(RAIZ, 'data', cert, 'datos.js'), 'utf8'));
  if(almacen) w.localStorage.setItem('istqb:' + w.__CERT__.meta.id, almacen);
  w.eval(fs.readFileSync(path.join(RAIZ, 'assets/js/app.js'), 'utf8'));
  w.__errores = errores;
  w.__ls = 'istqb:' + w.__CERT__.meta.id;
  w.__progreso = () => JSON.parse(w.localStorage.getItem(w.__ls) || 'null');
  return w;
}

/* ---------- Utilidades sobre el contenido ---------- */
/* Todas las preguntas de una certificación, con su origen. */
function todasLasPreguntas(CERT){
  const l = [];
  CERT.caps.forEach(c => (c.quiz||[]).forEach((p,i) =>
    l.push({ p:p, cap:c.n, origen:'quiz cap. '+c.n+' P'+(i+1) })));
  (CERT.examenes||[]).forEach(e => e.preguntas.forEach((p,i) =>
    l.push({ p:p, cap:p.cap, origen:e.id+' P'+(i+1) })));
  return l;
}
/* Secciones de todos los capítulos, aplanadas. */
function todasLasSecciones(CERT){
  const l = [];
  CERT.caps.forEach(c => (c.secciones||[]).forEach(s => l.push({ s:s, cap:c.n })));
  return l;
}
/* El ancla que genera el motor para una sección. */
function ancla(cap, secId){
  return 'capsec-' + cap + '-' + String(secId).replace(/[^0-9A-Za-z]+/g, '-');
}
/* Texto plano de un fragmento HTML (para casar enunciados con el DOM). */
function aTexto(doc, html){
  const d = doc.createElement('div');
  d.innerHTML = html;
  return d.textContent;
}

module.exports = { RAIZ, CERTS, suite, datosDe, arranca,
                   todasLasPreguntas, todasLasSecciones, ancla, aTexto };
