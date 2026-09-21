/* =========================================================
   VALIDACIÓN DE LOS DATOS DE UNA CERTIFICACIÓN
   No toca el DOM: comprueba la integridad de data/<cert>/datos.js.
========================================================= */
'use strict';
const A = require('./ayuda');

/* Etiquetas HTML sin cierre. `<i>` NO va aquí: en los diagramas se usa
   como barra y siempre se cierra. */
const VACIAS = new Set(['br','hr','img','input','meta','link','source','col','area','wbr']);
const ABRE_CIERRA = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>/g;

/* Comprueba que las etiquetas de bloque abren y cierran en orden. */
function htmlDesbalanceado(html){
  const pila = [];
  let m;
  ABRE_CIERRA.lastIndex = 0;
  while((m = ABRE_CIERRA.exec(html))){
    const cierra = m[1] === '/', tag = m[2].toLowerCase(), resto = m[3] || '';
    if(VACIAS.has(tag) || /\/\s*$/.test(resto)) continue;
    if(!cierra){ pila.push(tag); continue; }
    if(!pila.length) return 'cierra </' + tag + '> sin abrir';
    const abierta = pila.pop();
    if(abierta !== tag) return 'se esperaba </' + abierta + '> y llegó </' + tag + '>';
  }
  return pila.length ? 'quedan sin cerrar: <' + pila.join('>, <') + '>' : null;
}

module.exports = function(cert){
  const s = A.suite('Datos · ' + cert);
  const CERT = A.datosDe(cert);
  const META = CERT.meta;
  const preguntas = A.todasLasPreguntas(CERT);
  const secciones = A.todasLasSecciones(CERT);
  const idsSec = {};
  CERT.caps.forEach(c => idsSec[c.n] = new Set((c.secciones||[]).map(x => x.id)));

  /* --- Estructura mínima --- */
  s.comprueba(!!META && !!META.id && !!META.nombre, 'la certificación declara META con id y nombre');
  s.comprueba(CERT.caps.length > 0 && CERT.caps.every((c,i) => c.n === i+1),
    'los capítulos están numerados de 1 a ' + CERT.caps.length + ' sin huecos');
  s.comprueba(CERT.caps.every(c => (c.secciones||[]).length > 0),
    'todos los capítulos se dividen en secciones');
  s.comprueba(CERT.caps.every(c => typeof c.resumen === 'string' && c.resumen.length > 30),
    'todos los capítulos traen un resumen para la portada');

  /* --- Secciones: numeración coherente con su capítulo --- */
  (function(){
    const malas = secciones.filter(x => String(x.s.id).split('.')[0] !== String(x.cap));
    s.comprueba(!malas.length, 'el número de cada sección empieza por el de su capítulo',
      malas.map(x => x.s.id + ' en el cap. ' + x.cap).join(', '));
    const vistos = new Set(), dup = [];
    secciones.forEach(x => { if(vistos.has(x.s.id)) dup.push(x.s.id); vistos.add(x.s.id); });
    s.comprueba(!dup.length, 'no hay identificadores de sección repetidos', dup.join(', '));
    const sinTitulo = secciones.filter(x => !x.s.titulo || !x.s.html);
    s.comprueba(!sinTitulo.length, 'todas las secciones tienen título y contenido',
      sinTitulo.map(x => x.s.id).join(', '));
  })();

  /* --- Objetivos de aprendizaje --- */
  (function(){
    const sinLO = secciones.filter(x => !(x.s.lo||[]).length);
    s.comprueba(!sinLO.length, 'todas las secciones declaran objetivos de aprendizaje',
      sinLO.map(x => x.s.id).join(', '));
    const todos = [];
    secciones.forEach(x => (x.s.lo||[]).forEach(o => todos.push({ o:o, sec:x.s.id })));
    const ids = todos.map(x => x.o.id);
    const dup = ids.filter((v,i) => ids.indexOf(v) !== i);
    s.comprueba(!dup.length, 'los ' + ids.length + ' objetivos tienen identificador único', dup.join(', '));
    const formato = todos.filter(x => !/^(FL|TAE)-\d+(\.\d+)+$/.test(x.o.id));
    s.comprueba(!formato.length, 'los identificadores siguen el formato FL-x.x.x / TAE-x.x.x',
      formato.map(x => x.o.id).join(', '));
    const nivel = todos.filter(x => !/^K[1-4]$/.test(String(x.o.k||'')));
    s.comprueba(!nivel.length, 'cada objetivo declara un nivel cognitivo entre K1 y K4',
      nivel.map(x => x.o.id + '=' + x.o.k).join(', '));
    const texto = todos.filter(x => !x.o.t || x.o.t.length < 15);
    s.comprueba(!texto.length, 'cada objetivo trae su enunciado completo',
      texto.map(x => x.o.id).join(', '));
    /* El objetivo debe pertenecer a su sección. Hay dos formas válidas, según
       cómo numere el syllabus: que cuelgue de ella (Foundation: FL-1.1.2 en la
       sección 1.1) o que la sección se llame igual que el objetivo (CTAL-TAE:
       TAE-3.1.1 en la sección 3.1.1, porque el capítulo solo tiene una x.1). */
    const num = o => o.id.replace(/^(FL|TAE)-/, '');
    const fuera = todos.filter(x => {
      const n = num(x.o);
      return n !== x.sec && n.indexOf(x.sec + '.') !== 0;
    });
    s.comprueba(!fuera.length, 'cada objetivo pertenece a la sección que lo declara',
      fuera.map(x => x.o.id + ' en ' + x.sec).join(', '));
    // Numeración consecutiva de los que cuelgan de una sección
    const saltos = [];
    secciones.forEach(x => {
      const los = x.s.lo || [];
      const propios = los.filter(o => num(o) === x.s.id);
      if(propios.length){
        if(los.length !== 1) saltos.push(x.s.id + ': la sección se llama como su objetivo pero declara ' + los.length);
        return;
      }
      los.forEach((o,i) => {
        const ultimo = num(o).slice(x.s.id.length + 1);
        if(Number(ultimo) !== i+1) saltos.push(o.id + ' (esperaba .' + (i+1) + ' en ' + x.s.id + ')');
      });
    });
    s.comprueba(!saltos.length, 'los objetivos que cuelgan de una sección van numerados 1, 2, 3…',
      saltos.join(', '));
  })();

  /* --- Preguntas --- */
  (function(){
    const ids = preguntas.map(x => x.p.id);
    const sinId = preguntas.filter(x => !x.p.id);
    s.comprueba(!sinId.length, 'las ' + preguntas.length + ' preguntas tienen id',
      sinId.map(x => x.origen).join(', '));
    const dup = ids.filter((v,i) => ids.indexOf(v) !== i);
    s.comprueba(!dup.length, 'no hay ids de pregunta repetidos', [...new Set(dup)].join(', '));

    const rango = preguntas.filter(x => !(x.p.c >= 0 && x.p.c < (x.p.op||[]).length));
    s.comprueba(!rango.length, 'la respuesta correcta apunta siempre a una opción existente',
      rango.map(x => x.p.id).join(', '));
    const pocas = preguntas.filter(x => (x.p.op||[]).length < 3);
    s.comprueba(!pocas.length, 'toda pregunta ofrece al menos 3 opciones',
      pocas.map(x => x.p.id).join(', '));
    const repes = preguntas.filter(x => new Set(x.p.op).size !== x.p.op.length);
    s.comprueba(!repes.length, 'ninguna pregunta repite literalmente una opción',
      repes.map(x => x.p.id).join(', '));
    const sinTexto = preguntas.filter(x => !x.p.q || !x.p.e || x.p.e.length < 20);
    s.comprueba(!sinTexto.length, 'toda pregunta tiene enunciado y justificación razonada',
      sinTexto.map(x => x.p.id).join(', '));
    const kMal = preguntas.filter(x => !/^k[1-4]$/.test(String(x.p.k||'')));
    s.comprueba(!kMal.length, 'toda pregunta declara nivel cognitivo k1–k4',
      kMal.map(x => x.p.id + '=' + x.p.k).join(', '));

    const secMal = preguntas.filter(x => !x.p.sec || !idsSec[x.cap] || !idsSec[x.cap].has(x.p.sec));
    s.comprueba(!secMal.length, 'toda pregunta apunta a una sección que existe en su capítulo',
      secMal.map(x => x.p.id + '→' + x.p.sec).join(', '));
    const capMal = preguntas.filter(x => x.p.sec && String(x.p.sec).split('.')[0] !== String(x.cap));
    s.comprueba(!capMal.length, 'el capítulo de la pregunta concuerda con el de su sección',
      capMal.map(x => x.p.id).join(', '));
  })();

  /* --- Exámenes: formato oficial --- */
  (function(){
    const dist = (META.examen||{}).distribucion;
    s.comprueba(!!dist, 'META declara la distribución oficial por capítulo del examen');
    if(!dist) return;
    const totalOficial = Object.keys(dist).reduce((a,k) => a + dist[k], 0);
    s.comprueba(totalOficial === META.examen.preguntas,
      'la distribución oficial suma las ' + META.examen.preguntas + ' preguntas del examen',
      'suma ' + totalOficial);
    (CERT.examenes||[]).forEach(e => {
      const d = {};
      e.preguntas.forEach(p => d[p.cap] = (d[p.cap]||0) + 1);
      const desvio = Object.keys(dist).filter(k => (d[k]||0) !== dist[k])
        .map(k => 'cap. ' + k + ': ' + (d[k]||0) + ' en vez de ' + dist[k]);
      s.comprueba(!desvio.length && e.preguntas.length === META.examen.preguntas,
        'el set «' + e.id + '» respeta la distribución oficial por capítulo', desvio.join('; '));
    });
  })();

  /* --- Quizzes --- */
  (function(){
    const cortos = CERT.caps.filter(c => (c.quiz||[]).length < 5);
    s.comprueba(!cortos.length, 'todos los quizzes tienen 5 preguntas o más',
      cortos.map(c => 'cap. ' + c.n + ': ' + c.quiz.length).join(', '));
  })();

  /* --- HTML del temario --- */
  (function(){
    const rotas = [];
    secciones.forEach(x => {
      const err = htmlDesbalanceado(x.s.html);
      if(err) rotas.push(x.s.id + ': ' + err);
    });
    s.comprueba(!rotas.length, 'el HTML de las ' + secciones.length + ' secciones abre y cierra bien sus etiquetas',
      rotas.join(' | '));
    const sinNoopener = [];
    secciones.concat([{s:{id:'recursos', html:META.recursosHtml||''}, cap:0}]).forEach(x => {
      const enlaces = String(x.s.html).match(/<a\s[^>]*target="_blank"[^>]*>/g) || [];
      enlaces.forEach(a => { if(!/rel="[^"]*noopener/.test(a)) sinNoopener.push(x.s.id); });
    });
    s.comprueba(!sinNoopener.length, 'los enlaces que abren en otra pestaña llevan rel="noopener"',
      [...new Set(sinNoopener)].join(', '));
  })();

  /* --- Plan de estudio --- */
  (function(){
    const semanas = CERT.semanas || [];
    s.comprueba(semanas.length > 0, 'el plan de estudio tiene semanas');
    const malas = [];
    semanas.forEach((w,i) => {
      if(w.cap == null && !w.sec) malas.push('semana ' + (i+1) + ': no enlaza con nada');
      if(w.cap != null && !CERT.caps.some(c => c.n === w.cap)) malas.push('semana ' + (i+1) + ': capítulo ' + w.cap + ' inexistente');
      (w.subs || (w.sub != null ? [w.sub] : [])).forEach(id => {
        if(!idsSec[w.cap] || !idsSec[w.cap].has(id)) malas.push('semana ' + (i+1) + ': sección ' + id + ' inexistente');
      });
      if(!w.t || !w.d) malas.push('semana ' + (i+1) + ': sin título o descripción');
    });
    s.comprueba(!malas.length, 'las ' + semanas.length + ' semanas enlazan con capítulos y secciones que existen',
      malas.join('; '));
    // El motivo de la fase 7: ninguna semana debe llevar al mismo sitio que otra
    const destinos = semanas.filter(w => w.cap != null)
      .map(w => w.cap + '/' + ((w.subs||[w.sub])[0] || ''));
    const repes = destinos.filter((v,i) => destinos.indexOf(v) !== i);
    s.comprueba(!repes.length, 'ninguna semana comparte destino con otra', [...new Set(repes)].join(', '));
    // Y entre todas deberían cubrir el temario completo
    const cubiertas = new Set();
    semanas.forEach(w => (w.subs || (w.sub != null ? [w.sub] : [])).forEach(id => cubiertas.add(id)));
    const fuera = secciones.filter(x => !cubiertas.has(x.s.id)).map(x => x.s.id);
    s.comprueba(!fuera.length, 'el plan cubre las ' + secciones.length + ' secciones del temario',
      'sin cubrir: ' + fuera.join(', '));
  })();

  /* --- Ejercicios, caso de estudio y glosario (opcionales) --- */
  (function(){
    const ej = CERT.ejercicios || [];
    if(ej.length){
      const malos = ej.filter(e => !CERT.caps.some(c => c.n === e.cap) || !e.titulo || !e.enunciado || !e.solucion);
      s.comprueba(!malos.length, 'los ' + ej.length + ' ejercicios apuntan a un capítulo real y traen solución',
        malos.map(e => e.titulo).join(', '));
    }
    const caso = CERT.caso;
    if(caso && caso.capitulos){
      const malos = caso.capitulos.filter(c =>
        !CERT.caps.some(x => x.n === c.n) || (c.sub && (!idsSec[c.n] || !idsSec[c.n].has(c.sub))));
      s.comprueba(!malos.length, 'los ' + caso.capitulos.length + ' bloques del caso de estudio enlazan con secciones reales',
        malos.map(c => 'cap. ' + c.n).join(', '));
    }
    const glo = CERT.glosario || [];
    if(glo.length){
      const terminos = glo.map(t => String(t.es).toLowerCase());
      const dup = terminos.filter((v,i) => terminos.indexOf(v) !== i);
      s.comprueba(!dup.length, 'los ' + glo.length + ' términos del glosario no se repiten', [...new Set(dup)].join(', '));
      const incompletos = glo.filter(t => !t.es || !t.en || !t.def);
      s.comprueba(!incompletos.length, 'todo término del glosario trae español, inglés y definición',
        incompletos.map(t => t.es).join(', '));
    }
  })();

  return s;
};
