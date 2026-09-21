/* =========================================================
   DATOS · ISTQB CTAL-TAE v2.0 (Test Automation Engineer)
   Contenido redactado a partir del Programa de Estudio oficial
   v2.0 (ES) — docs/md/CTAL-TAE/programa-estudio.md.
   ESTRUCTURA DE CAPÍTULOS CORREGIDA para coincidir con el
   syllabus oficial (el prototipo anterior tenía mezclados los
   capítulos 4, 5 y 6).
   Terminología oficial v2.0 (con equivalente común entre paréntesis):
     SSP  = sistema sujeto a prueba (SUT)
     SAP  = solución de automatización de la prueba (TAS)
     MTAP = marco de trabajo de automatización (framework / TAF)
     AAP  = arquitectura de automatización; AAPg = genérica (gTAA)
     IAP  = ingeniero de automatización de pruebas
     IGU / IPA = interfaz gráfica de usuario (GUI) / de programación (API)
   Define window.__CERT__ y no contiene lógica de la app.
========================================================= */
const META={
  id:"ctal-tae",
  nombre:"CTAL-TAE v2.0 · Test Automation Engineer",
  eyebrow:"ISTQB · Certified Tester Advanced Level",
  titulo:"Test Automation Engineer v2.0<br>Plan de estudio en 12 semanas",
  sub:"Temario en español según el syllabus oficial v2.0, preguntas por capítulo y examen final cronometrado. El examen real: 40 preguntas tipo test, 90 minutos, nota de corte del 65 %.",
  examen:{ preguntas:40, minutos:90, cortePorcentaje:65 },
  los:[
    {id:"TAE-1.1.1",k:"k2",cap:1,titulo:"Ventajas y desventajas de la automatización"},
    {id:"TAE-1.2.1",k:"k2",cap:1,titulo:"Automatización en diferentes modelos de ciclo de vida"},
    {id:"TAE-1.2.2",k:"k2",cap:1,titulo:"Seleccionar herramientas adecuadas para un SSP dado"},
    {id:"TAE-2.1.1",k:"k2",cap:2,titulo:"Necesidades de configuración de infraestructura"},
    {id:"TAE-2.1.2",k:"k2",cap:2,titulo:"Automatización en diferentes entornos"},
    {id:"TAE-2.2.1",k:"k4",cap:2,titulo:"Analizar el SSP para determinar la SAP adecuada"},
    {id:"TAE-2.2.2",k:"k4",cap:2,titulo:"Hallazgos técnicos de la evaluación de herramientas"},
    {id:"TAE-3.1.1",k:"k2",cap:3,titulo:"Capacidades de la AAPg (arquitectura genérica)"},
    {id:"TAE-3.1.2",k:"k2",cap:3,titulo:"Diseñar una solución de automatización (SAP/AAP)"},
    {id:"TAE-3.1.3",k:"k3",cap:3,titulo:"Estructura por capas del MTAP"},
    {id:"TAE-3.1.4",k:"k3",cap:3,titulo:"Enfoques para automatizar casos de prueba"},
    {id:"TAE-3.1.5",k:"k3",cap:3,titulo:"Principios y patrones de diseño"},
    {id:"TAE-4.1.1",k:"k3",cap:4,titulo:"Directrices de piloto y despliegue de la automatización"},
    {id:"TAE-4.2.1",k:"k4",cap:4,titulo:"Riesgos del despliegue y estrategias de mitigación"},
    {id:"TAE-4.3.1",k:"k2",cap:4,titulo:"Factores que afectan la mantenibilidad de la SAP"},
    {id:"TAE-5.1.1",k:"k3",cap:5,titulo:"Automatización en niveles dentro de canalizaciones IC/EC"},
    {id:"TAE-5.1.2",k:"k2",cap:5,titulo:"Gestión de configuración del producto de prueba"},
    {id:"TAE-5.1.3",k:"k2",cap:5,titulo:"Dependencias de automatización para infraestructura IPA/API"},
    {id:"TAE-6.1.1",k:"k3",cap:6,titulo:"Métodos de recopilación de datos de la SAP"},
    {id:"TAE-6.1.2",k:"k4",cap:6,titulo:"Analizar datos SAP y SSP para identificar fallos"},
    {id:"TAE-6.1.3",k:"k2",cap:6,titulo:"Elaborar y publicar informes del avance"},
    {id:"TAE-7.1.1",k:"k3",cap:7,titulo:"Verificar el entorno de automatización"},
    {id:"TAE-7.1.2",k:"k2",cap:7,titulo:"Comportamiento correcto de guiones y cuándo deben fallar"},
    {id:"TAE-7.1.3",k:"k2",cap:7,titulo:"Resultados inesperados en la automatización"},
    {id:"TAE-7.1.4",k:"k2",cap:7,titulo:"Análisis estático del código de automatización"},
    {id:"TAE-8.1.1",k:"k3",cap:8,titulo:"Oportunidades de mejora a través de datos"},
    {id:"TAE-8.1.2",k:"k4",cap:8,titulo:"Analizar la SAP implementada para recomendar mejoras"},
    {id:"TAE-8.1.3",k:"k3",cap:8,titulo:"Reestructurar el producto de prueba ante cambios del SSP"},
    {id:"TAE-8.1.4",k:"k2",cap:8,titulo:"Herramientas de automatización de la prueba"}
  ],
  planIntro:`<div class="card">
    <h2>Cómo está montado el plan</h2>
    <p>Está pensado para <strong>3–5 horas semanales</strong> durante 12 semanas, siguiendo los <strong>8 capítulos oficiales</strong> del syllabus v2.0. Cada semana cubre unas <strong>secciones concretas del syllabus</strong>: pulsa el cuerpo de la semana para abrir el temario por donde toca, o una de las pastillas de sección para ir directamente a ella. Marca cada semana al completarla (el progreso se guarda en este navegador).</p>
    <div class="nota"><strong>Formato del examen real:</strong> 40 preguntas, 90 minutos, aprobado con el 65 %. Las preguntas valen 1, 2 o 3 puntos según el nivel cognitivo (K2 comprender, K3 aplicar, K4 analizar). Si lo haces en inglés sin ser nativo, puedes pedir un 25 % más de tiempo. <strong>Terminología v2.0:</strong> el syllabus español usa SSP (sistema sujeto a prueba), SAP (solución de automatización), MTAP (marco de trabajo) y AAPg (arquitectura genérica); aquí se indican junto a los términos ingleses habituales (SUT, TAS, framework, gTAA).</div>
  </div>`,
  temarioIntro:`<div class="card">
      <h2>Los 8 capítulos del syllabus v2.0</h2>
      <p>Estructura oficial: 1 Introducción y objetivos · 2 Preparación · 3 Arquitectura (AAPg y MTAP) · 4 Implementación · 5 Estrategias de despliegue (IC/EC) · 6 Suministro de información y métricas · 7 Verificación de la solución · 8 Mejora continua.</p>
      <p>Cada capítulo está dividido en las <strong>secciones numeradas del syllabus oficial</strong> (1.1, 3.1.3, 8.1.2…), y cada sección indica el <strong>objetivo de aprendizaje (TAE-x.x.x)</strong> que se examina en ella y su nivel K. Pulsa una sección en la tarjeta del capítulo para abrirlo justo en ese punto. Al final de cada capítulo hay un quiz (de 5 a 7 preguntas); se marca superado al acertar al menos el 80 %.</p>
    </div>`,
  recursosHtml:`<div class="card">
    <h2>Examen oficial (práctica)</h2>
    <p>El examen de ejemplo oficial de ISTQB es material con copyright, así que no se reproduce dentro de la app, pero tienes aquí el PDF para hacerlo cronometrado como práctica adicional.</p>
    <ul>
      <li><strong>Ejemplo de examen v2.0 (ES):</strong> <a href="CTAL-TAE-AUTOMATION/exams/CTAL - TAE - V2.0 - ES - EJEMPLO DE EXAMEN - PREGUNTAS - V01.00.pdf" target="_blank" rel="noopener">preguntas</a> · <a href="CTAL-TAE-AUTOMATION/answer/CTAL - TAE - V2.0 - ES - EJEMPLO DE EXAMEN - RESPUESTAS - V01.00.pdf" target="_blank" rel="noopener">respuestas</a></li>
    </ul>
  </div>
  <div class="card">
    <h2>Recursos oficiales</h2>
    <ul>
      <li><strong>Syllabus CTAL-TAE v2.0</strong> (istqb.org): el documento de referencia. Cada objetivo de aprendizaje (LO) tiene su nivel K; el examen solo pregunta sobre los LO.</li>
      <li><strong>Glosario oficial ISTQB</strong> (glossary.istqb.org): versión en español. La terminología del examen es la del glosario, no la de las herramientas.</li>
      <li><strong>SSTQB</strong> (sstqb.es): board español. Consulta fechas, precio y disponibilidad del examen v2.0 en español.</li>
    </ul>
  </div>
  <div class="card">
    <h2>Consejos de examen</h2>
    <ul>
      <li><strong>El capítulo 3 (arquitectura) es el de mayor peso.</strong> Debes dominar las capacidades de la AAPg (generación, definición, ejecución, adaptación) y las 3 capas del MTAP (guiones de prueba, lógica de negocio, librerías base).</li>
      <li><strong>Las preguntas K3/K4 son escenarios.</strong> Lee primero la pregunta final, luego el escenario: te dice qué dato buscar.</li>
      <li><strong>Cuidado con los absolutos.</strong> Opciones con «siempre», «todos», «elimina por completo» suelen ser distractores.</li>
      <li><strong>Distingue falso positivo</strong> (la prueba falla, el SSP está bien) <strong>de falso negativo</strong> (la prueba pasa, el defecto existe). Y el estado «fallo de SAP»: el defecto está en la solución, no en el SSP.</li>
      <li><strong>Usa la terminología ISTQB:</strong> responde «capa de adaptación», no «driver de la herramienta».</li>
    </ul>
  </div>
  <div class="card">
    <h2>Trampas de terminología (repaso exprés)</h2>
    <p>Los confusables que más se preguntan. Si dudas entre dos opciones que «suenan» parecidas, la diferencia suele estar aquí.</p>
    <table>
      <tr><th>No confundas…</th><th>La distinción que cae en el examen</th></tr>
      <tr><td><strong>SSP · SAP · MTAP · AAPg</strong></td><td><strong>SSP</strong> = lo que se prueba · <strong>SAP</strong> = la solución completa (entorno + producto de prueba + herramientas) · <strong>MTAP</strong> = la base/marco de la SAP · <strong>AAPg</strong> = el modelo de arquitectura de referencia.</td></tr>
      <tr><td>Las <strong>4 capacidades</strong> de la AAPg vs las <strong>3 capas</strong> del MTAP</td><td>Capacidades (4): generación, definición, ejecución, adaptación. Capas (3): guiones → lógica de negocio → librerías base. No las mezcles.</td></tr>
      <tr><td><strong>Falso positivo · falso negativo · fallo de SAP</strong></td><td>Falso positivo: la prueba <strong>falla</strong> y el SSP está bien. Falso negativo: la prueba <strong>pasa</strong> y el defecto existe (p. ej., sin aserciones). Fallo de SAP: el defecto está en la <strong>solución de automatización</strong>, no en el SSP.</td></tr>
      <tr><td><strong>Controlabilidad</strong> vs <strong>observabilidad</strong></td><td>Controlabilidad = <strong>actuar</strong> (fijar entradas y estado). Observabilidad = <strong>ver</strong> (salidas, estados, trazas).</td></tr>
      <tr><td><strong>Desventaja</strong> vs <strong>limitación</strong></td><td>Desventaja = coste/esfuerzo (inversión, mantenimiento, puede introducir defectos). Limitación = intrínseca (solo verifica lo programado y lo que un oráculo puede validar).</td></tr>
      <tr><td><strong>Sin código</strong> vs <strong>baja en código</strong></td><td>En captura/reproducción: «sin código» no expone el código; «baja en código» sí lo expone (modificable).</td></tr>
      <tr><td><strong>Validación de esquemas</strong> vs <strong>prueba de contrato</strong></td><td>Validación de esquemas: estructura y tipos de <strong>una</strong> respuesta. Prueba de contrato: consumidor y proveedor <strong>consensúan</strong> las interacciones; va más allá del esquema.</td></tr>
      <tr><td>Contrato <strong>impulsado por consumidor</strong> vs <strong>por proveedor</strong></td><td>Consumidor: fija sus <strong>expectativas</strong> sobre las respuestas. Proveedor: <strong>crea</strong> el contrato mostrando cómo funcionan sus servicios.</td></tr>
      <tr><td><strong>Espera rígida · sondeo · eventos</strong></td><td>De peor a mejor: rígida (tiempo fijo) → sondeo de una condición (con <strong>timeout</strong>) → suscripción a <strong>eventos</strong> del SSP.</td></tr>
      <tr><td>Pruebas <strong>en el despliegue</strong> vs <strong>canalización aparte</strong></td><td>En el despliegue: son <strong>puerta de calidad</strong> (un fallo revierte), pero re-ejecutar exige redesplegar. Aparte: flexible, pero <strong>no</strong> son puerta de calidad (revertir suele ser manual).</td></tr>
      <tr><td><strong>Data-driven</strong> vs <strong>keyword-driven</strong></td><td>Data-driven: los mismos guiones con <strong>datos</strong> externos. Keyword-driven: vocabulario de <strong>acciones</strong> de negocio para no programadores (se construye sobre data-driven).</td></tr>
    </table>
  </div>
  <div class="card">
    <h2>Mini-glosario v2.0 (ES ↔ EN)</h2>
    <table>
      <tr><th>Español (v2.0)</th><th>Inglés / equivalente</th><th>Idea clave</th></tr>
      <tr><td>Sistema sujeto a prueba (SSP)</td><td><span class="term">SUT</span></td><td>Lo que se prueba</td></tr>
      <tr><td>Solución de automatización de la prueba (SAP)</td><td><span class="term">TAS</span></td><td>El conjunto completo: entorno + producto de prueba + herramientas</td></tr>
      <tr><td>Marco de trabajo de automatización (MTAP)</td><td><span class="term">framework / TAF</span></td><td>Base de la SAP: arnés/ejecutor + librerías + guiones</td></tr>
      <tr><td>Arquitectura de automatización (AAP) / genérica (AAPg)</td><td><span class="term">gTAA</span></td><td>Diseño técnico de la SAP / modelo de referencia con capacidades e interfaces</td></tr>
      <tr><td>Ingeniero de automatización de pruebas (IAP)</td><td>Test Automation Engineer</td><td>Rol que diseña y mantiene la SAP</td></tr>
      <tr><td>IGU / IPA</td><td>GUI / API</td><td>Interfaz gráfica / de programación de aplicaciones</td></tr>
      <tr><td>Capacidad de ser probado</td><td>Testability</td><td>Control + observabilidad del SSP</td></tr>
      <tr><td>Prueba de contrato</td><td>Contract testing</td><td>Consumidor y proveedor verifican un contrato común</td></tr>
      <tr><td>Fallo de SAP</td><td>TAS failure</td><td>El defecto está en la solución de automatización, no en el SSP</td></tr>
    </table>
  </div>`
};

/* =========================================================
   PLAN DE 12 SEMANAS (alineado con los 8 capítulos oficiales)
========================================================= */
const SEMANAS=[
 {cap:1,subs:["1.1","1.2"],t:"Capítulo 1 · 1.1–1.2 Introducción y objetivos",d:"Secciones 1.1 y 1.2. Ventajas, desventajas y limitaciones de la automatización; cómo se aplica en cascada, modelo en V y ágil; y los criterios para seleccionar herramientas según el SSP. Haz el quiz del cap. 1."},
 {cap:2,subs:["2.1"],t:"Capítulo 2 (I) · 2.1 Infraestructura y testabilidad",d:"Sección 2.1 completa. Capacidad de ser probado del SSP (controlabilidad y observabilidad), diseño para la testabilidad, los entornos de la SAP y el uso de la automatización en distintos entornos, incluida la prueba en producción (canario, azul/verde, A-B)."},
 {cap:2,subs:["2.2"],t:"Capítulo 2 (II) · 2.2 Análisis del SSP y evaluación de herramientas",d:"Sección 2.2 completa (dos objetivos de nivel K4). Analizar el SSP para determinar la SAP adecuada y el proceso de evaluación de herramientas con sus hallazgos técnicos. Haz el quiz del cap. 2."},
 {cap:3,subs:["3.1.1","3.1.2"],t:"Capítulo 3 (I) · 3.1.1–3.1.2 La AAPg y el diseño de la SAP",d:"Las cuatro capacidades de la AAPg (generación, definición, ejecución y adaptación) con sus interfaces, y cómo se diseña una solución de automatización: compatibilidad con el SSP, datos, informes, independencia del entorno y escalabilidad."},
 {cap:3,subs:["3.1.3","3.1.4","3.1.5"],t:"Capítulo 3 (II) · 3.1.3–3.1.5 MTAP por capas, enfoques y patrones",d:"Las 3 capas del MTAP (guiones de prueba, lógica de negocio, librerías base) y su dirección de dependencia; los enfoques de scripting (captura/reproducción, lineal, estructurado, data-driven, keyword-driven, DGP/DGC); y los principios y patrones (SOLID, herencia, fachadas, singleton, Page Object). Haz el quiz del cap. 3: es el de más peso."},
 {cap:4,subs:["4.1","4.2","4.3"],t:"Capítulo 4 · 4.1–4.3 Implementación",d:"Las tres secciones: directrices de piloto y despliegue gradual y qué automatizar primero; riesgos del despliegue y su mitigación (cortafuegos, recursos, empaquetado, registro, actualización); y mantenibilidad (código limpio, nomenclatura, evitar codificación rígida, ramificación). Haz el quiz del cap. 4."},
 {cap:5,subs:["5.1.1","5.1.2","5.1.3"],t:"Capítulo 5 · 5.1.1–5.1.3 Despliegue en canalizaciones IC/EC",d:"Qué nivel de prueba va en cada etapa de la canalización y los dos enfoques para las pruebas de sistema y aceptación; la gestión de la configuración del producto de prueba junto al SSP; y las dependencias al automatizar una IPA, con la prueba de contrato. Haz el quiz del cap. 5."},
 {cap:6,subs:["6.1.1","6.1.2","6.1.3"],t:"Capítulo 6 · 6.1.1–6.1.3 Información y métricas",d:"Recopilación de datos (registros del SSP y del MTAP, aserciones, estados de ejecución, ID de correlación); análisis de resultados y de fallos para distinguir defecto del SSP, fallo de SAP y problema de entorno; e informes de avance adaptados a cada audiencia. Haz el quiz del cap. 6."},
 {cap:7,subs:["7.1.1","7.1.2","7.1.3","7.1.4"],t:"Capítulo 7 · 7.1.1–7.1.4 Verificación de la solución",d:"Verificar el entorno (instalación, repetibilidad de montaje y desmontaje, conectividad, prueba de los componentes del MTAP), el comportamiento correcto de guiones y juegos de prueba, dónde aparecen los resultados inesperados y qué aporta el análisis estático. Haz el quiz del cap. 7."},
 {cap:8,subs:["8.1.1","8.1.2","8.1.3","8.1.4"],t:"Capítulo 8 · 8.1.1–8.1.4 Mejora continua",d:"Oportunidades que revelan los datos (histograma de pruebas, IA y autorreparación, validación de esquemas); recomendaciones técnicas de mejora, incluidos los mecanismos de espera; la reestructuración del producto de prueba cuando cambia el SSP; y la mejora del proceso. Haz el quiz del cap. 8."},
 {sec:"simulacro",t:"Repaso transversal + Simulacro 1",d:"Repite los quizzes donde fallaste y recorre el caso de estudio «Aurora» capítulo a capítulo. Dibuja de memoria la AAPg y las capas del MTAP. Haz el examen final de la app en condiciones reales (90 min, sin apuntes) y analiza cada fallo."},
 {sec:"simulacro",t:"Simulacro 2 + ajuste final",d:"Haz el ejemplo de examen oficial v2.0 (enlazado en Recursos) cronometrado y el Set 3 «Análisis (K3/K4)» de la app. Vuelve desde el desglose por capítulo a la sección concreta que falles. Dos días antes: descanso y repaso ligero."}
];

/* =========================================================
   CAPÍTULOS: teoría + quiz (≥4/5 para superar)
========================================================= */
const CAPS=[
{n:1,titulo:"Introducción y objetivos de la automatización",
 resumen:"Qué gana y qué cuesta automatizar, cómo encaja la automatización en cada modelo de ciclo de vida y con qué criterios se elige una herramienta para un SSP concreto.",
 secciones:[
  {id:"1.1",titulo:"Propósito de la automatización de la prueba",
   lo:[{id:"TAE-1.1.1",k:"K2",t:"Explicar las ventajas y desventajas de la automatización de la prueba."}],
   html:`
 <h3>Qué es la automatización de la prueba</h3>
 <p>La automatización de la prueba consiste en usar software para <strong>controlar y configurar</strong> conjuntos de prueba, <strong>ejecutar</strong> pruebas de forma desatendida y <strong>comparar</strong> los resultados reales con los esperados, además de generar informes. Puede interactuar con muchos tipos de <strong>SSP</strong> (sistema sujeto a prueba): aplicaciones con o sin interfaz gráfica, apps móviles, protocolos de red y servicios.</p>
 <h3>Ventajas</h3>
 <ul>
  <li>Permite <strong>más pruebas por construcción</strong> que la prueba manual.</li>
  <li>Posibilita pruebas <strong>imposibles de hacer a mano</strong> (tiempo real, prueba remota, ejecución en paralelo).</li>
  <li>Permite pruebas más complejas, se ejecuta más rápido y está <strong>menos sujeta a error humano</strong>.</li>
  <li>Es más eficiente en el uso de recursos y da <strong>retroalimentación más rápida</strong> sobre la calidad del SSP.</li>
  <li>Mejora la <strong>consistencia</strong> de la ejecución a lo largo de los ciclos y ayuda a la fiabilidad del sistema.</li>
 </ul>
 <h3>Desventajas y limitaciones</h3>
 <ul>
  <li><strong>Desventajas:</strong> inversión inicial para montar la solución; tiempo de desarrollo y, sobre todo, de <em>mantenimiento</em>; necesidad de objetivos claros para tener éxito; cierta rigidez frente a los cambios del SSP; y la posibilidad de <strong>introducir defectos</strong> con la propia automatización.</li>
  <li><strong>Limitaciones:</strong> no todas las pruebas manuales pueden automatizarse; solo se verifica lo que se ha programado verificar; solo comprueba resultados <em>interpretables por la máquina</em> y que pueda validar un <strong>oráculo de prueba</strong> automatizado (algunas características de calidad quedan fuera).</li>
 </ul>`},
  {id:"1.2",titulo:"La automatización en el ciclo de vida de desarrollo",
   lo:[{id:"TAE-1.2.1",k:"K2",t:"Explicar cómo se aplica la automatización de la prueba en diferentes modelos de ciclo de vida de desarrollo de software."},{id:"TAE-1.2.2",k:"K2",t:"Seleccionar las herramientas de automatización de la prueba adecuadas para un sistema sujeto a prueba determinado."}],
   html:`
 <h3>La automatización en el ciclo de vida (CVDS)</h3>
 <table>
  <tr><th>Modelo</th><th>Cómo encaja la automatización</th></tr>
  <tr><td><strong>Cascada</strong></td><td>Modelo lineal y secuencial. La automatización se implementa en paralelo o tras la fase de implementación; la ejecución se concentra en la fase de verificación, cuando hay componentes listos.</td></tr>
  <tr><td><strong>Modelo V</strong></td><td>Cada fase de desarrollo tiene su nivel de prueba (componente, integración, sistema, integración de sistemas, aceptación). Es recomendable un MTAP para cada nivel.</td></tr>
  <tr><td><strong>Ágil</strong></td><td>Múltiples oportunidades de automatización. IAP y negocio deciden la hoja de ruta. Buenas prácticas: revisión de código, programación en pareja, ejecución frecuente y «automatización durante el sprint» (eliminar silos entre dev, prueba e implicados).</td></tr>
 </table>
 <h3>Selección de herramientas para un SSP dado</h3>
 <p>Para elegir herramienta, primero se <strong>analiza el SSP</strong> y se identifican los requisitos del proyecto como línea base. Hay que tener en cuenta: el tipo de SSP (IGU vs servicios web usan prestaciones distintas), el <strong>coste</strong> (comercial frente a código abierto a medida), y la <strong>composición y experiencia del equipo</strong>. Si los probadores tienen poca experiencia en programación, una solución <em>baja en código / sin código</em> puede ser viable; si son técnicos, elegir una herramienta cuyo lenguaje coincida con el del SSP facilita depurar con los desarrolladores y la formación cruzada.</p>
 <div class="nota">Idea de examen: la automatización <em>complementa</em> a la prueba manual y al juicio humano; no los sustituye. «Eliminar por completo la prueba manual» o «encontrar todos los defectos» son distractores típicos.</div>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-1.1.1",q:"¿Cuál de las siguientes es una ventaja característica de la automatización de la prueba?",
   op:["Garantiza encontrar todos los defectos del SSP","Permite ejecutar pruebas de forma consistente y repetible, y realizar pruebas imposibles de hacer a mano (p. ej., en paralelo o en tiempo real)","Elimina la necesidad de pruebas manuales","Reduce a cero el esfuerzo de mantenimiento"],
   c:1,e:"La consistencia/repetibilidad y la posibilidad de pruebas inviables manualmente (paralelas, en tiempo real) son ventajas clave. Ninguna técnica encuentra todos los defectos, la automatización complementa a la prueba manual y el mantenimiento es uno de sus mayores costes."},
  {k:"k2",lo:"TAE-1.1.1",q:"¿Cuál es una limitación real de la automatización de la prueba?",
   op:["No puede ejecutarse de forma desatendida","Solo puede comprobar resultados interpretables por la máquina y verificables por un oráculo de prueba automatizado","Impide obtener métricas de las ejecuciones","No puede integrarse con canalizaciones de IC/EC"],
   c:1,e:"La automatización solo verifica lo programado y resultados que la máquina puede interpretar y un oráculo puede validar; algunas características de calidad quedan fuera. Las otras opciones describen lo contrario de la realidad."},
  {k:"k2",lo:"TAE-1.2.1",q:"En el modelo V, ¿qué recomendación se hace respecto a la automatización?",
   op:["Automatizar únicamente la prueba de aceptación","Proporcionar un marco de trabajo de automatización (MTAP) para cada nivel de prueba","Posponer toda automatización hasta la fase de mantenimiento","Evitar la automatización porque el modelo es secuencial"],
   c:1,e:"En el modelo V cada fase de desarrollo tiene su nivel de prueba asociado; es posible y recomendable proporcionar un MTAP para cada nivel (componente, integración, sistema, integración de sistemas, aceptación)."},
  {k:"k3",lo:"TAE-1.2.2",q:"Un equipo con poca experiencia en programación debe automatizar pruebas de una web que cambia poco. ¿Qué opción de herramienta es más razonable como punto de partida?",
   op:["Desarrollar un MTAP a medida en un lenguaje compilado","Una solución baja en código / sin código, acorde con las competencias del equipo","Prohibir la automatización hasta contratar programadores","La herramienta comercial más cara, por ser señal de calidad"],
   c:1,e:"La selección debe encajar con la composición y experiencia del equipo: con poca experiencia en programación, una solución baja en código/sin código es viable. El precio no indica idoneidad."},
  {k:"k2",lo:"TAE-1.1.1",q:"¿Cuál de las siguientes es una desventaja (no una limitación) de la automatización de la prueba?",
   op:["No todas las pruebas manuales pueden automatizarse","Solo se verifica lo que las pruebas están programadas para hacer","Requiere inversión inicial y esfuerzo continuo de desarrollo y mantenimiento, y puede introducir defectos","Solo comprueba resultados interpretables por la máquina"],
   c:2,e:"La inversión inicial, el coste de desarrollo/mantenimiento y el riesgo de introducir defectos son desventajas. Las otras tres opciones describen limitaciones intrínsecas de la automatización, no desventajas de coste/esfuerzo."}
 ]},

{n:2,titulo:"Preparación para la automatización de la prueba",
 resumen:"Lo que hay que preparar antes de escribir el primer guion: que el SSP se deje probar (control y observabilidad), la infraestructura y los entornos, y el análisis del SSP y de las herramientas que determina la solución.",
 secciones:[
  {id:"2.1",titulo:"Configuración de la infraestructura de automatización",
   lo:[{id:"TAE-2.1.1",k:"K2",t:"Describir las necesidades de configuración de una infraestructura que posibilite la implementación de la automatización de la prueba."},{id:"TAE-2.1.2",k:"K2",t:"Explicar cómo se utiliza la automatización de la prueba en diferentes entornos."}],
   html:`
 <h3>Capacidad de ser probado del SSP</h3>
 <p>Antes de automatizar hay que evaluar si el SSP <em>se deja</em> probar. La <strong>capacidad de ser probado</strong> (testabilidad) exige interfaces de software que permitan dos propiedades:</p>
 <ul>
  <li><strong>Controlabilidad:</strong> poder proporcionar entradas y llevar el SSP a un estado conocido (endpoints para preparar datos, hooks de prueba, reseteo del entorno).</li>
  <li><strong>Observabilidad:</strong> poder obtener salidas, estados y resultados (logs accesibles, respuestas de IPA/API, estados consultables, mensajes claros).</li>
  <li><strong>Transparencia de la arquitectura:</strong> la documentación de la arquitectura debe ofrecer componentes e interfaces claros y comprensibles que aporten control y observabilidad en <em>todos</em> los niveles de prueba y fomenten la calidad.</li>
 </ul>
 <p>La testabilidad es un <strong>requisito no funcional</strong> del sistema; normalmente la diseña el <strong>arquitecto de software</strong> con apoyo del IAP, y <strong>debe diseñarse e implementarse en paralelo</strong> con el resto del SSP (añadirla a posteriori es mucho más caro). Mecanismos concretos para mejorarla:</p>
 <ul>
  <li><strong>Identificadores de accesibilidad</strong> (localizadores estables, p. ej. <span class="term">data-testid</span>): algunos marcos de desarrollo los generan automáticamente; otros los fija el desarrollador a mano.</li>
  <li><strong>Variables de entorno del sistema:</strong> parámetros de la aplicación que se modifican por administración para facilitar la prueba.</li>
  <li><strong>Variables de despliegue:</strong> como las del sistema, pero se fijan <em>antes</em> de iniciar el despliegue.</li>
  <li>IPA de prueba, modos de test, inyección de dependencias y logs estructurados.</li>
 </ul>
 <h3>Infraestructura y entornos</h3>
 <p>La SAP necesita una infraestructura adecuada: entornos <strong>dedicados, reproducibles y controlados</strong> (contenedores, software de virtualización, infraestructura como código), gestión de datos de prueba y aislamiento frente a otros equipos. La automatización se usa en <strong>distintos entornos</strong>, cada uno con necesidades propias de configuración, conectividad y disponibilidad; un proyecto suele disponer de varios:</p>
 <table>
  <tr><th>Entorno</th><th>Para qué sirve</th></tr>
  <tr><td><strong>Desarrollo local</strong></td><td>Donde se crea el software y se prueban componentes (componente, IGU, IPA). Con un EDI/IDE permite prueba de caja blanca temprana.</td></tr>
  <tr><td><strong>Construcción</strong></td><td>Construye el software y ejecuta pruebas de bajo nivel (componente e integración de componentes) y análisis estático en un agente IC/EC, sin desplegar.</td></tr>
  <tr><td><strong>Integración</strong></td><td>Versión candidata integrada con otros sistemas. Se ejecuta el juego completo (IGU/IPA), solo caja negra. Primer entorno que conviene <strong>monitorizar</strong>.</td></tr>
  <tr><td><strong>Preproducción</strong></td><td>El más parecido a producción. Pruebas no funcionales (p. ej. eficiencia de desempeño) y aceptación de usuario. También se monitoriza.</td></tr>
  <tr><td><strong>Producción / operación</strong></td><td>Evaluación funcional y no funcional en tiempo real con buenas prácticas de <strong>prueba en producción</strong>: lanzamiento canario, despliegue azul/verde y prueba A/B.</td></tr>
 </table>
 <h3>Elegir el nivel de interfaz</h3>
 <p>Para cada objetivo conviene elegir el <strong>nivel de interfaz más adecuado</strong>: IPA/API, protocolo, servicio o IGU/GUI. Como regla, automatizar por debajo de la IGU (IPA/servicio) es más rápido, estable y barato de mantener; la IGU se reserva para lo que solo ella puede verificar. Las dependencias no disponibles o inestables se sustituyen con <strong>mocks, stubs o virtualización de servicios</strong>.</p>
 <div class="nota">Truco de examen: <strong>control</strong> = poder <em>actuar</em> sobre el SSP (fijar entradas/estados); <strong>observabilidad</strong> = poder <em>ver</em> salidas y estados. Sin ambas, ninguna herramienta tendrá éxito.</div>`},
  {id:"2.2",titulo:"Proceso de evaluación para seleccionar herramientas y estrategias",
   lo:[{id:"TAE-2.2.1",k:"K4",t:"Analizar un sistema sujeto a prueba para determinar la solución de automatización de la prueba adecuada."},{id:"TAE-2.2.2",k:"K4",t:"Aportar ejemplos de hallazgos técnicos de la evaluación de una herramienta."}],
   html:`
 <h3>Analizar el SSP para determinar la SAP</h3>
 <p>El análisis del SSP (objetivo de nivel <strong>K4</strong>) examina sus requisitos funcionales, no funcionales y técnicos para decidir la solución. Conviene hacerlo <strong>en colaboración con otros implicados</strong> (probadores manuales, negocio, analistas) para sacar a la luz cuantos riesgos y mitigaciones sea posible. Hay que decidir:</p>
 <ul>
  <li>Qué <strong>actividades</strong> del proceso de prueba se automatizan (gestión, diseño, generación, ejecución).</li>
  <li>Qué <strong>niveles</strong> y qué <strong>tipos</strong> de prueba deben soportarse.</li>
  <li>Qué <strong>roles y competencias</strong> hay que dar soporte.</li>
  <li>Qué productos, líneas de producto y familias cubrir (para fijar <em>alcance</em> y <em>vida útil</em> de la SAP).</li>
  <li>Qué <strong>tipos de SSP</strong> deben ser compatibles.</li>
  <li><strong>Disponibilidad y calidad de los datos de prueba</strong>.</li>
  <li>Cómo <strong>emular casos inalcanzables</strong> (p. ej. aplicaciones de terceros).</li>
 </ul>
 <h3>Proceso de evaluación de herramientas y hallazgos técnicos</h3>
 <p>Puede que <strong>ninguna herramienta cubra todos los requisitos</strong>, y los implicados deben aceptarlo. Una práctica útil es construir una <strong>tabla comparativa</strong>: herramientas en columnas, requisitos en filas, y en cada celda la propiedad de la herramienta frente a ese requisito y su prioridad. Entre los requisitos a evaluar:</p>
 <ul>
  <li>Lenguaje/tecnología de la herramienta y su EDI/IDE.</li>
  <li>Capacidad de <strong>configurarla</strong> (varios entornos, configuraciones de ejecución, valores estáticos/dinámicos).</li>
  <li>Gestión de <strong>datos de prueba</strong>, idealmente integrada con un repositorio de control de versiones.</li>
  <li>Necesidad de <strong>distintas herramientas para distintos tipos de prueba</strong>.</li>
  <li><strong>Integración</strong> con IC/EC, seguimiento de tareas, gestión de prueba y suministro de información.</li>
  <li>Capacidad de <strong>ampliar</strong> la arquitectura y evaluar escalabilidad, mantenibilidad, modificabilidad, compatibilidad y fiabilidad.</li>
 </ul>
 <p>La evaluación produce <strong>hallazgos técnicos</strong> concretos: compatibilidad con la tecnología del SSP, capacidad de localizar y manipular sus elementos, integración con CI/CD y con la gestión de prueba/defectos, soporte para los tipos de prueba necesarios, coste total (licencias + formación + mantenimiento) y curva de aprendizaje frente a las competencias del equipo. La tabla comparativa fundamenta la <strong>propuesta de herramienta(s)</strong>, que se demuestra a los implicados para su aprobación. Conviene validar con una <strong>prueba de concepto / piloto</strong> sobre casos representativos antes de comprometerse: la herramienta «líder del mercado» no es necesariamente la adecuada para tu contexto.</p>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-2.1.1",q:"¿Qué describe mejor la controlabilidad de un SSP?",
   op:["La facilidad para leer los logs que genera","La capacidad de proporcionar entradas y llevar el SSP a un estado conocido","El porcentaje de código cubierto por las pruebas","La velocidad de respuesta del sistema"],
   c:1,e:"Controlabilidad = poder actuar sobre el SSP: fijar entradas, precondiciones y estados. Leer logs y salidas corresponde a la observabilidad."},
  {k:"k3",lo:"TAE-2.1.1",q:"Una IGU cuyo DOM cambia con frecuencia y carece de identificadores estables rompe los tests en cada entrega. ¿Cuál es la mejor medida a largo plazo?",
   op:["Aumentar las esperas fijas en los guiones","Acordar con desarrollo la incorporación de localizadores estables (diseño para la testabilidad, en paralelo al SSP)","Regrabar los tests con captura/reproducción tras cada entrega","Ejecutar los tests con menos frecuencia"],
   c:1,e:"El problema de raíz es la falta de testabilidad de la IGU. Incorporar localizadores estables, diseñados en paralelo al SSP, ataca la causa. Las esperas fijas y la regrabación son parches que disparan el mantenimiento."},
  {k:"k2",lo:"TAE-2.1.2",q:"Un servicio externo del que depende el SSP solo está disponible unas horas al día y devuelve datos impredecibles. ¿Qué técnica permite automatizar de forma fiable?",
   op:["Virtualización de servicios o stubs/mocks que simulen el servicio externo","Ejecutar las pruebas solo durante las horas de disponibilidad","Eliminar las pruebas que dependan de ese servicio","Aumentar los reintentos hasta que responda"],
   c:0,e:"La virtualización de servicios (o stubs/mocks) sustituye la dependencia inestable por un componente controlado y determinista, ganando disponibilidad y repetibilidad."},
  {k:"k3",lo:"TAE-2.1.2",q:"Hay que verificar una regla de cálculo de la capa de negocio que también se muestra en la IGU. ¿Qué nivel de interfaz es, en general, el más adecuado?",
   op:["La IGU, porque es lo que ve el usuario","La IPA/API o capa de servicio, reservando la IGU para lo que solo ella puede verificar","Ambas en todos los casos, duplicando cada verificación","Ninguna: las reglas de negocio no se automatizan"],
   c:1,e:"Probar la lógica de negocio por IPA/API es más rápido, estable y barato de mantener. La IGU se reserva para aspectos propios de la interfaz; duplicarlo todo encarece sin valor proporcional."},
  {k:"k2",lo:"TAE-2.2.2",q:"Durante la evaluación de una herramienta, ¿cuál es el propósito principal de una prueba de concepto (piloto de herramienta)?",
   op:["Formar a todo el equipo antes de comprar","Verificar con casos representativos que la herramienta encaja con la tecnología del SSP y el contexto antes de comprometerse","Sustituir el análisis de requisitos","Demostrar que la automatización elimina la prueba manual"],
   c:1,e:"La prueba de concepto valida en pequeño que la herramienta funciona con la tecnología del SSP y el contexto del equipo, reduciendo el riesgo de una mala inversión; complementa (no sustituye) el análisis de requisitos."},
  {k:"k2",lo:"TAE-2.1.2",q:"¿Qué entorno se utiliza sobre todo para evaluar características de calidad no funcionales (p. ej., eficiencia de desempeño) por ser el más parecido a producción?",
   op:["El entorno de desarrollo local","El entorno de construcción","El entorno de preproducción","El entorno de integración"],
   c:2,e:"La preproducción guarda el mayor parecido posible con producción, así que es donde se concentran las pruebas no funcionales y la aceptación de usuario. El de construcción ejecuta pruebas de bajo nivel y análisis estático; el de integración, el juego completo de caja negra."},
  {k:"k3",lo:"TAE-2.1.2",q:"Un equipo quiere validar una nueva versión en producción exponiéndola primero a un pequeño porcentaje de usuarios reales antes de extenderla a todos. ¿Qué técnica de prueba en producción aplica?",
   op:["Lanzamiento canario","Validación de esquemas","Captura/reproducción","Guionizado lineal"],
   c:0,e:"El lanzamiento canario libera la versión a una fracción de usuarios para detectar problemas antes del despliegue completo. Otras buenas prácticas de prueba en producción son el despliegue azul/verde y la prueba A/B."},
  {k:"k4",lo:"TAE-2.2.1",q:"Al analizar un SSP para decidir la SAP, identificas una IGU web, una IPA REST documentada y una dependencia externa con cuotas. ¿Qué combinación de decisiones es la más adecuada?",
   op:["Automatizar todo por la IGU para máxima fidelidad","Priorizar la IPA donde sea posible, reservar la IGU para lo propio de la interfaz y virtualizar la dependencia externa para el volumen de CI","Descartar las pruebas que toquen la dependencia externa","Elegir la herramienta más cara para cubrirlo todo"],
   c:1,e:"Analizar el SSP lleva a automatizar por la interfaz más estable y barata (la IPA) siempre que se pueda, reservar la IGU para lo suyo y virtualizar la dependencia inestable para el volumen de CI, validando periódicamente contra el servicio real."}
 ]},

{n:3,titulo:"Arquitectura de automatización de la prueba (AAPg y MTAP)",
 resumen:"El capítulo de mayor peso del examen. Todo cuelga de la sección 3.1: las cuatro capacidades de la AAPg, cómo se diseña la SAP, las tres capas del MTAP, los enfoques de scripting y los patrones de diseño aplicables.",
 secciones:[
  {id:"3.1.1",titulo:"Capacidades principales de la AAPg",
   lo:[{id:"TAE-3.1.1",k:"K2",t:"Explicar las principales capacidades en una arquitectura de automatización de la prueba."}],
   html:`
 <h3>La AAPg: el corazón del examen</h3>
 <p>La <strong>arquitectura de automatización de pruebas genérica (AAPg</strong>, equivalente a la gTAA) es un concepto de diseño de alto nivel que ofrece una visión abstracta de la comunicación entre la automatización y los sistemas a los que se conecta. De ella se deriva la <strong>AAP</strong> concreta de cada proyecto. Define <strong>interfaces</strong> con cuatro áreas:</p>
 <table>
  <tr><th>Interfaz</th><th>Describe</th></tr>
  <tr><td>Con el <strong>SSP</strong></td><td>La conexión entre el SSP y el MTAP (marco de trabajo).</td></tr>
  <tr><td>Con la <strong>gestión del proyecto</strong></td><td>El avance del desarrollo de la automatización.</td></tr>
  <tr><td>Con la <strong>gestión de la configuración</strong></td><td>Las canalizaciones IC/EC, los entornos y el producto de prueba.</td></tr>
  <tr><td>Con la <strong>gestión de la prueba</strong></td><td>La correspondencia entre las definiciones de los casos y los casos automatizados.</td></tr>
 </table>
 <h3>Capacidades de la AAPg</h3>
 <p>Las herramientas y librerías deben cubrir cuatro <strong>capacidades</strong> básicas (las que en la gTAA clásica son las cuatro «capas»):</p>
 <ul>
  <li><strong>Generación de pruebas</strong> (opcional): diseño automatizado de casos a partir de un modelo (MBT).</li>
  <li><strong>Definición de pruebas:</strong> especificar casos, conjuntos y datos, <em>separados</em> del SSP y de las herramientas (alto y bajo nivel, datos, keywords, librerías).</li>
  <li><strong>Ejecución de pruebas:</strong> ejecutar los casos y registrar en bitácora e informar (ejecutor/runner + logging + reporting).</li>
  <li><strong>Adaptación de pruebas:</strong> adaptar las pruebas a los distintos componentes/interfaces del SSP mediante <strong>adaptadores</strong> (IPA, protocolos, servicios).</li>
 </ul>
 <figure class="diagrama aapg" aria-label="Esquema de la arquitectura genérica AAPg">
  <figcaption>Esquema de la AAPg: las 4 capacidades (izquierda) y las 4 interfaces (derecha)</figcaption>
  <div class="aapg-cols">
   <div class="aapg-stack">
    <div class="diag-cap">Generación de pruebas<span>opcional · a partir de un modelo (MBT)</span></div>
    <div class="diag-cap">Definición de pruebas<span>casos, conjuntos, datos y keywords</span></div>
    <div class="diag-cap">Ejecución de pruebas<span>ejecutor · registro · informes</span></div>
    <div class="diag-cap adapt">Adaptación de pruebas<span>adaptadores: IPA, protocolos, servicios ↓</span></div>
    <div class="diag-sut">SSP · sistema sujeto a prueba</div>
   </div>
   <div class="aapg-ifaces">
    <div class="diag-iface">Interfaz con el SSP<span>conexión SSP ↔ MTAP</span></div>
    <div class="diag-iface">Gestión del proyecto<span>avance del desarrollo</span></div>
    <div class="diag-iface">Gestión de la configuración<span>IC/EC, entornos, producto de prueba</span></div>
    <div class="diag-iface">Gestión de la prueba<span>casos ↔ casos automatizados</span></div>
   </div>
  </div>
 </figure>`},
  {id:"3.1.2",titulo:"Diseñar una solución de automatización (SAP)",
   lo:[{id:"TAE-3.1.2",k:"K2",t:"Explicar cómo diseñar una solución de automatización de la prueba."}],
   html:`
 <h3>Diseñar la SAP / AAP</h3>
 <p>La <strong>SAP</strong> (solución de automatización) se define entendiendo los requisitos funcionales, no funcionales y técnicos del SSP y las herramientas disponibles. La <strong>AAP</strong> (su diseño técnico) debe abordar: selección de herramientas y librerías, desarrollo de complementos/componentes, requisitos de conectividad e interfaz (cortafuegos, bases de datos, URLs, mocks/stubs, colas de mensajes, protocolos), conexión a gestión de prueba y de defectos, y uso de control de versiones y repositorios.</p>
 <h3>Consideraciones de diseño de la SAP</h3>
 <p>Diseñar la SAP es diseñar software: hay que decidir explícitamente cómo se resuelven estos puntos, porque cada uno se convierte después en coste de mantenimiento.</p>
 <table>
  <tr><th>Consideración</th><th>Qué hay que decidir</th></tr>
  <tr><td><strong>Compatibilidad con el SSP</strong></td><td>Qué interfaces expone el SSP (IGU, IPA, protocolo, línea de comandos, base de datos) y cuál usará cada tipo de prueba. Conviene la interfaz más estable y de menor nivel que permita el objetivo.</td></tr>
  <tr><td><strong>Datos de prueba</strong></td><td>De dónde salen, cómo se aíslan entre ejecuciones y cómo se restaura el estado (montaje y desmontaje repetibles). Nunca codificados de forma rígida en los guiones.</td></tr>
  <tr><td><strong>Facilidad de uso</strong></td><td>Quién escribirá los casos: si participan perfiles de negocio, hace falta una capa de palabras clave o de lenguaje natural sobre la lógica de negocio.</td></tr>
  <tr><td><strong>Informes y trazabilidad</strong></td><td>Qué se registra, con qué nivel de detalle, y cómo se enlaza cada ejecución con el caso de prueba y el requisito de origen.</td></tr>
  <tr><td><strong>Independencia del entorno</strong></td><td>Endpoints, credenciales y rutas parametrizados por entorno (variables de entorno o ficheros de configuración), no dentro del código.</td></tr>
  <tr><td><strong>Escalabilidad y ejecución</strong></td><td>Si las pruebas deben poder ejecutarse en paralelo, en varios navegadores o dispositivos, y en la canalización de IC/EC.</td></tr>
 </table>
 <p>Un diseño que ignora estos puntos suele funcionar en el piloto y romperse al primer cambio del SSP o al primer entorno nuevo.</p>`},
  {id:"3.1.3",titulo:"La estructura por capas del MTAP",
   lo:[{id:"TAE-3.1.3",k:"K3",t:"Aplicar la estructura por capas de los marcos de automatización de pruebas."}],
   html:`
 <h3>El MTAP en capas</h3>
 <p>El <strong>marco de trabajo de automatización (MTAP)</strong> es la base de la SAP: suele incluir un <strong>arnés/ejecutor de prueba</strong> y librerías, guiones y juegos de prueba. Se estructura en capas (conviene mantener <em>pocas</em>):</p>
 <table>
  <tr><th>Capa</th><th>Responsabilidad</th></tr>
  <tr><td><strong>Guiones de prueba</strong></td><td>Repositorio de casos del SSP. Invoca a la lógica de negocio (pasos, flujos, llamadas IPA). No debe llamar directamente a las librerías base.</td></tr>
  <tr><td><strong>Lógica de negocio</strong></td><td>Librerías dependientes del SSP; heredan de las librerías base o usan sus fachadas. Configura el MTAP para ejecutarse contra el SSP.</td></tr>
  <tr><td><strong>Librerías base</strong></td><td>Librerías independientes de cualquier SSP; reutilizables por cualquier proyecto que comparta la misma pila tecnológica.</td></tr>
 </table>
 <p>Esta separación permite <strong>escalar</strong>: unas mismas librerías base sostienen varios MTAP de distintos proyectos.</p>
 <p>Las <strong>librerías base</strong> dan una base reutilizable para varios MTAP: un mismo conjunto puede sostener dos MTAP de un proyecto y el MTAP de otro proyecto distinto, cada uno construido por un IAP diferente. Así <strong>escala</strong> la automatización en la organización.</p>
 <figure class="diagrama mtap" aria-label="Esquema de las tres capas del MTAP">
  <figcaption>Las 3 capas del MTAP y su dirección de dependencia</figcaption>
  <div class="diag-layer l1"><b>1 · Guiones de prueba</b><span>repositorio de casos del SSP; invocan a la lógica de negocio</span></div>
  <div class="diag-dep">invoca ↓</div>
  <div class="diag-layer l2"><b>2 · Lógica de negocio</b><span>librerías dependientes del SSP; configuran el MTAP contra el SSP</span></div>
  <div class="diag-dep">hereda / usa fachadas ↓</div>
  <div class="diag-layer l3"><b>3 · Librerías base</b><span>independientes del SSP; reutilizables entre proyectos con la misma pila</span></div>
  <div class="diag-prohibido">✗ los guiones (capa 1) no deben llamar directamente a las librerías base (capa 3)</div>
 </figure>`},
  {id:"3.1.4",titulo:"Enfoques para automatizar casos de prueba",
   lo:[{id:"TAE-3.1.4",k:"K3",t:"Aplicar diferentes enfoques para automatizar casos de prueba."}],
   html:`
 <h3>Enfoques para automatizar casos de prueba</h3>
 <p>Hay varios enfoques de desarrollo (lenguajes de guion interpretados o lenguajes compilados); cada uno aporta beneficios distintos según las circunstancias:</p>
 <table>
  <tr><th>Enfoque</th><th>Ventajas</th><th>Desventajas</th></tr>
  <tr><td><strong>Captura/reproducción</strong> (sin código si no lo expone; baja en código si sí)</td><td>Fácil de configurar y empezar.</td><td>Difícil de mantener/escalar; necesita el SSP disponible al grabar; solo viable para alcance pequeño y SSP muy estable; depende de la versión capturada; grabar cada caso lleva mucho tiempo.</td></tr>
  <tr><td><strong>Guionizado lineal</strong></td><td>Fácil de empezar; más modificable que la grabación.</td><td>Difícil de mantener/escalar; requiere algo de programación; igual de frágil ante cambios.</td></tr>
  <tr><td><strong>Guionizado estructurado</strong></td><td>Fácil de mantener, escalar, portar y evolucionar; separa la lógica de negocio de los guiones.</td><td>Exige conocimientos de programación e inversión inicial en el MTAP.</td></tr>
  <tr><td><strong>Prueba guiada por datos</strong> (data-driven)</td><td>Sobre el estructurado: amplía casos rápido y barato alimentando datos externos (.csv, .xlsx, BD); los analistas de prueba especifican pruebas con menos dependencia de perfiles técnicos.</td><td>Puede requerir gestión específica de datos de prueba.</td></tr>
  <tr><td><strong>Guiado por palabras clave</strong> (keyword-driven)</td><td>Sobre el data-driven: analistas de prueba y de negocio participan en crear casos; las keywords sirven también para prueba manual.</td><td>Implementar y mantener las keywords es complejo y cuesta en sistemas pequeños o de alcance creciente.</td></tr>
  <tr><td><strong>DGP / TDD</strong> (rojo → verde → refactorizar)</td><td>Mejora calidad y estructura del código y la testabilidad; ayuda a la cobertura; reduce propagación de defectos.</td><td>Cuesta acostumbrarse; mal aplicado da falsa confianza.</td></tr>
  <tr><td><strong>DGC / BDD</strong> (Dado/Cuando/Entonces)</td><td>Mejora la comunicación negocio-desarrollo-prueba; los escenarios actúan como casos y cubren las especificaciones.</td><td>Los casos negativos/límite siguen necesitando definirse; muchos equipos lo reducen a «escribir en lenguaje natural» sin implicar a negocio; mantener pasos complejos encarece la depuración.</td></tr>
 </table>`},
  {id:"3.1.5",titulo:"Principios y patrones de diseño",
   lo:[{id:"TAE-3.1.5",k:"K3",t:"Aplicar principios de diseño y patrones de diseño en la automatización de pruebas."}],
   html:`
 <h3>Principios y patrones de diseño</h3>
 <p>La automatización es <strong>desarrollo de software</strong>, así que aplican los mismos principios:</p>
 <ul>
  <li><strong>Programación orientada a objetos (POO):</strong> encapsulamiento, abstracción, herencia y polimorfismo.</li>
  <li><strong>Principios SOLID:</strong> responsabilidad única, abierto/cerrado, sustitución de Liskov, segregación de interfaces e inversión de dependencias. Mejoran legibilidad, mantenibilidad y escalabilidad.</li>
 </ul>
 <p>Patrones de diseño habituales:</p>
 <ul>
  <li><strong>Fachada:</strong> oculta los detalles de implementación y expone solo lo que el probador necesita.</li>
  <li><strong>Singleton:</strong> asegura que haya un único controlador que se comunica con el SSP.</li>
  <li><strong>Page Object (modelo de objetos de página):</strong> cada pantalla se encapsula en una clase; un cambio en la IGU se corrige en un solo sitio (el localizador del page object), no en cada caso.</li>
  <li><strong>Modelo de flujo:</strong> amplía el Page Object con una <em>segunda fachada</em> sobre los page objects que almacena las acciones del usuario. Esta «doble fachada» mejora la abstracción y permite reutilizar pasos de prueba en muchos guiones.</li>
 </ul>
 <div class="nota">Truco de examen: «algo que interactúa directamente con el SSP» → capacidad/capa de <strong>adaptación</strong>. «Algo que ejecuta y registra» → <strong>ejecución</strong>. «Dónde viven datos y casos» → <strong>definición</strong>. «De dónde salen los casos» → <strong>generación</strong>. Y recuerda las 3 capas del MTAP: guiones → lógica de negocio → librerías base. SOLID, singleton y modelo de flujo son términos que pueden aparecer tal cual.</div>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-3.1.1",q:"¿Cuáles son las cuatro capacidades de la arquitectura genérica (AAPg)?",
   op:["Planificación, diseño, ejecución y cierre","Generación, definición, ejecución y adaptación de pruebas","Unitaria, integración, sistema y aceptación","Captura, reproducción, datos y palabras clave"],
   c:1,e:"Las capacidades de la AAPg son generación (de dónde salen los casos), definición (casos, datos, conjuntos), ejecución (runner, logging, reporting) y adaptación (conexión con el SSP). Las otras opciones mezclan fases o niveles de prueba."},
  {k:"k2",lo:"TAE-3.1.3",q:"En el MTAP por capas, ¿qué capa contiene las librerías independientes de cualquier SSP, reutilizables entre proyectos con la misma pila tecnológica?",
   op:["Guiones de prueba","Lógica de negocio","Librerías base","Adaptación de defectos"],
   c:2,e:"Las librerías base son independientes del SSP y reutilizables. La lógica de negocio depende del SSP (hereda o usa fachadas de las base), y los guiones de prueba invocan a la lógica de negocio, no directamente a las base."},
  {k:"k2",lo:"TAE-3.1.1",q:"Un componente traduce las acciones abstractas de los tests en llamadas concretas a la IPA/API REST del SSP. ¿A qué capacidad de la AAPg pertenece?",
   op:["Generación de pruebas","Definición de pruebas","Ejecución de pruebas","Adaptación de pruebas"],
   c:3,e:"Todo lo que conecta la solución con las interfaces del SSP (IGU, IPA, protocolos) pertenece a la capacidad de adaptación. La ejecución orquesta y registra, pero no «habla» directamente con el SSP."},
  {k:"k3",lo:"TAE-3.1.5",q:"60 guiones repiten copiados los mismos pasos de inicio de sesión con sus localizadores; cada cambio de la pantalla obliga a editar los 60. ¿Qué patrón resuelve el problema?",
   op:["Pasar los 60 a captura/reproducción","Encapsular la pantalla de login en un Page Object que usen todos los guiones","Añadir comentarios indicando dónde están los localizadores","Reducir la suite a 10 guiones"],
   c:1,e:"Es el caso de manual del Page Object: encapsular localizadores e interacciones en un módulo único; un cambio en la IGU se corrige en un solo sitio. Regrabar o recortar la suite no ataca la causa."},
  {k:"k2",lo:"TAE-3.1.4",q:"¿Cuál es la principal desventaja del enfoque de captura/reproducción?",
   op:["Requiere conocimientos avanzados de programación","Los guiones resultantes son frágiles ante cambios del SSP, dependen de su versión y son caros de mantener","No permite ejecutar lo grabado más de una vez","Solo funciona con aplicaciones de escritorio"],
   c:1,e:"Su ventaja es la rapidez inicial sin programar, pero los guiones grabados dependen de la versión concreta del SSP: cualquier cambio los rompe y el mantenimiento se dispara. Solo se recomienda a muy corto plazo."},
  {k:"k2",lo:"TAE-3.1.5",q:"¿Qué representa el acrónimo SOLID en el diseño del código de automatización?",
   op:["Cinco tipos de prueba: sistema, operación, librería, integración y despliegue","Cinco principios de diseño (responsabilidad única, abierto/cerrado, sustitución de Liskov, segregación de interfaces e inversión de dependencias) que mejoran legibilidad, mantenibilidad y escalabilidad","Las cinco capas obligatorias del MTAP","Los cinco niveles de la bitácora de prueba"],
   c:1,e:"SOLID agrupa cinco principios de diseño orientado a objetos; junto con encapsulamiento, abstracción, herencia y polimorfismo, guían un testware mantenible. No son tipos de prueba ni capas del MTAP."},
  {k:"k3",lo:"TAE-3.1.5",q:"Se quiere garantizar que toda la automatización use un único controlador que se comunique con el SSP. ¿Qué patrón de diseño encaja?",
   op:["Page Object","Singleton","Prueba guiada por datos","Captura/reproducción"],
   c:1,e:"El patrón singleton asegura que solo exista una instancia (un único controlador) que habla con el SSP. El Page Object encapsula pantallas y localizadores; el modelo de flujo añade una segunda fachada sobre los page objects para reutilizar pasos."}
 ]},

{n:4,titulo:"Implementación de la automatización de la prueba",
 resumen:"Del piloto al despliegue a gran escala: qué automatizar primero, qué riesgos aparecen al desplegar la solución y qué hace que el producto de prueba siga siendo mantenible con el tiempo.",
 secciones:[
  {id:"4.1",titulo:"Desarrollo de la automatización: piloto y despliegue",
   lo:[{id:"TAE-4.1.1",k:"K3",t:"Aplicar directrices que soporten actividades efectivas de piloto y despliegue de automatización de la prueba."}],
   html:`
 <h3>El proyecto piloto y el despliegue</h3>
 <p>La implementación empieza con un <strong>piloto</strong> de alcance bien definido: aunque no lleva mucho tiempo, su resultado marca la dirección del proyecto. A partir de la información del SSP y de los requisitos, el IAP evalúa: lenguaje(s) de programación, herramientas (abierto/comercial), niveles de prueba a cubrir, casos seleccionados y enfoque de desarrollo. Se crean <strong>prototipos</strong> para comparar pros y contras, se fijan plazos y se comprueba el avance periódicamente. Se recomienda <strong>integrar el piloto en IC/EC desde pronto</strong> para sacar a la luz dificultades temprano. También se evalúan aspectos no técnicos: conocimientos del equipo, estructura, licencias y reglas de la organización. Al terminar, IAP y jefes de prueba valoran éxito/fallo y deciden. El despliegue posterior se amplía de forma <strong>gradual</strong>.</p>
 <h3>Qué automatizar: candidatos y transición</h3>
 <p>No todo merece automatizarse. Buenos candidatos: pruebas <strong>frecuentes</strong> (regresión, humo), sobre funcionalidad <strong>estable</strong>, con resultados <strong>deterministas y verificables</strong>. Malos candidatos: ejecución única, funcionalidad muy cambiante, verificaciones subjetivas (usabilidad, estética) y prueba <strong>exploratoria</strong>. Un caso manual <strong>no se traduce 1:1</strong>: hay que rediseñarlo con precondiciones programáticas, verificaciones explícitas, independencia entre tests y limpieza del estado.</p>`},
  {id:"4.2",titulo:"Riesgos del despliegue y estrategias de mitigación",
   lo:[{id:"TAE-4.2.1",k:"K4",t:"Analizar los riesgos del despliegue y planificar estrategias de mitigación para la automatización de la prueba."}],
   html:`
 <h3>Riesgos del despliegue y mitigación</h3>
 <p>Hay que tener en cuenta la interconexión MTAP–SSP en el diseño y prepararse para riesgos que no son estrictamente de automatización pero condicionan unas puertas de calidad fiables:</p>
 <ul>
  <li><strong>Infraestructura:</strong> aperturas de cortafuegos, utilización de recursos (CPU/RAM), conectividad de red y fiabilidad. En móvil real: dispositivos encendidos, con batería, en red y con acceso al SSP.</li>
 </ul>
 <p>Riesgos <strong>técnicos</strong> del despliegue:</p>
 <table>
  <tr><th>Riesgo</th><th>Idea clave</th></tr>
  <tr><td><strong>Empaquetado</strong></td><td>El producto de prueba se versiona y se sube a un repositorio (en local o nube) para compartirlo: su control de versiones importa tanto como el del SSP.</td></tr>
  <tr><td><strong>Registro (logging)</strong></td><td>Aporta la mayor parte de la información de resultados. Niveles: Fatal, Error, Advertencia, Info, Depuración y Traza (de mayor a menor severidad / mayor detalle).</td></tr>
  <tr><td><strong>Estructuración de la prueba</strong></td><td>El arnés y los dispositivos/instalaciones de prueba permiten controlar entorno y datos, definir pre/postcondiciones y agrupar casos; posibilitan pruebas repetibles y atómicas.</td></tr>
  <tr><td><strong>Actualización</strong></td><td>Las actualizaciones automáticas de arneses, agentes y dispositivos son un riesgo común; se mitigan con alimentación, red y planes de configuración adecuados.</td></tr>
 </table>
 <h3>Niveles de registro (log)</h3>
 <p>De más grave a más detallado: <strong>Fatal</strong> (error que aborta la ejecución), <strong>Error</strong> (falla una condición y, por tanto, el caso), <strong>Advertencia</strong> (condición inesperada que no rompe el flujo), <strong>Info</strong> (información básica del caso), <strong>Depuración</strong> (detalles útiles al investigar un fallo) y <strong>Traza</strong> (aún más detalle que depuración).</p>`},
  {id:"4.3",titulo:"Mantenibilidad de la solución de automatización",
   lo:[{id:"TAE-4.3.1",k:"K2",t:"Explicar los factores que soportan y afectan la mantenibilidad de la solución de automatización de la prueba."}],
   html:`
 <h3>Mantenibilidad de la solución</h3>
 <p>El testware es software: se le aplican los <strong>principios de código limpio</strong> (Robert C. Martin). En la práctica:</p>
 <ul>
  <li>Convención de <strong>nomenclatura</strong> común y con sentido (p. ej. <span class="term">botónInicioSesión</span>) y estructura de proyecto lógica.</li>
  <li><strong>Evitar la codificación rígida</strong> (hardcoding): externalizar datos con pruebas guiadas por datos y usar constantes para lo que rara vez cambia, reduciendo los puntos de mantenimiento.</li>
  <li>Evitar métodos largos/complejos y demasiados parámetros; usar registros.</li>
  <li><strong>Aprovechar patrones de diseño</strong> y concentrarse en la capacidad de ser probado.</li>
  <li>Usar <strong>análisis estático</strong> y formateadores de código (en el EDI/IDE) para mejorar legibilidad y calidad.</li>
  <li>Acordar una <strong>estrategia de ramificación</strong> en el control de versiones (ramas por prestación, entrega y corrección).</li>
 </ul>
 <div class="nota">Idea de examen: el riesgo de mantenimiento de la SAP nace sobre todo de los <strong>cambios del SSP</strong>; la abstracción (capa de adaptación, Page Object) y el código limpio son la mejor inversión para contenerlo.</div>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-4.1.1",q:"¿Qué característica debe tener el proyecto elegido para pilotar una automatización?",
   op:["Ser el más crítico de la organización, para demostrar valor","Tener un alcance de validación bien definido y servir para evaluar enfoque, herramientas y plazos antes de escalar","No haber tenido nunca pruebas manuales","Ser el SSP más complejo disponible"],
   c:1,e:"El piloto debe tener un alcance de validación claro y permitir evaluar lenguaje, herramientas, niveles y enfoque, integrándolo pronto en IC/EC. Elegir lo más crítico o complejo multiplica el riesgo de fracaso."},
  {k:"k3",lo:"TAE-4.3.1",q:"Un guion de automatización tiene los datos de usuario y las URLs incrustados directamente en el código, y cambian a menudo. ¿Qué práctica de mantenibilidad lo corrige?",
   op:["Añadir más comentarios al código","Evitar la codificación rígida: externalizar los datos (pruebas guiadas por datos) y usar constantes/configuración","Aumentar las esperas fijas","Duplicar el guion como copia de seguridad"],
   c:1,e:"La codificación rígida dispara el mantenimiento. Externalizar los datos a una fuente común (data-driven) y usar constantes/configuración reduce los puntos que hay que mantener cuando los datos cambian."},
  {k:"k2",lo:"TAE-4.3.1",q:"¿Cuál de estos niveles de registro (log) se usa para una condición inesperada que NO rompe el flujo del caso de prueba?",
   op:["Fatal","Error","Advertencia","Traza"],
   c:2,e:"«Advertencia» registra una condición/acción inesperada que no interrumpe el caso. «Error» implica que el caso falla y «Fatal» que se aborta la ejecución; «Traza» es el nivel de mayor detalle para investigación."},
  {k:"k3",lo:"TAE-4.1.1",q:"Un caso manual de 45 pasos cubre alta de cliente, emisión de facturas y baja, con verificaciones intermedias. ¿Cuál es la mejor estrategia al automatizarlo?",
   op:["Automatizarlo como un único test de 45 pasos para respetar el original","Dividirlo en varios tests independientes, cada uno con sus precondiciones programáticas y verificaciones propias","Automatizar solo el primer paso","Descartarlo: los casos largos no se automatizan"],
   c:1,e:"Un monolito de 45 pasos es frágil y difícil de diagnosticar. Dividir en tests independientes con precondiciones por código mejora el diagnóstico, la paralelización y el mantenimiento: el caso manual no se traduce 1:1."},
  {k:"k2",lo:"TAE-4.1.1",q:"¿Cuál de las siguientes es la MEJOR candidata a automatizarse?",
   op:["Una prueba exploratoria de una funcionalidad recién diseñada","Una prueba de regresión de un flujo estable que se ejecuta en cada entrega","Una evaluación subjetiva de la estética de la página de inicio","Una verificación que se hará una sola vez antes de retirar el sistema"],
   c:1,e:"Frecuencia + estabilidad + resultado objetivo = buen candidato. La exploratoria depende del juicio humano, la estética es subjetiva y una ejecución única no amortiza el esfuerzo."},
  {k:"k4",lo:"TAE-4.2.1",q:"Tu automatización móvil usa dispositivos reales tras un cortafuegos y arneses que se autoactualizan. ¿Qué análisis de riesgos de despliegue es el correcto?",
   op:["No hay riesgos: la automatización los elimina","Riesgos de conectividad (cortafuegos), de estado de los dispositivos reales y de la autoactualización de arneses; se mitigan con aperturas, planes de configuración y verificando la SAP tras actualizar","El único riesgo relevante es el coste de licencias","Hay que migrar todo a captura/reproducción"],
   c:1,e:"El despliegue debe prepararse para riesgos no estrictamente de automatización: conectividad (cortafuegos), disponibilidad de los dispositivos reales y cambios por autoactualización de arneses/agentes; cada uno con su mitigación, para tener puertas de calidad fiables."}
 ]},

{n:5,titulo:"Estrategias de implementación y despliegue (IC/EC)",
 resumen:"Cómo vive la automatización dentro de una canalización de IC/EC: qué nivel de prueba va en cada etapa, cómo se versiona el producto de prueba junto al SSP y qué exige automatizar contra una IPA.",
 secciones:[
  {id:"5.1.1",titulo:"La automatización en los distintos niveles de la canalización",
   lo:[{id:"TAE-5.1.1",k:"K3",t:"Aplicar la automatización de la prueba en diferentes niveles de prueba dentro de las canalizaciones."}],
   html:`
 <h3>Automatización dentro de las canalizaciones</h3>
 <p>Como las pruebas automatizadas se ejecutan <strong>desatendidas</strong>, son candidatas ideales para canalizaciones de <strong>integración continua / entrega continua (IC/EC)</strong> o para ejecuciones regulares. Los niveles de prueba se integran así:</p>
 <table>
  <tr><th>Nivel</th><th>Dónde encaja en la canalización</th></tr>
  <tr><td>Pruebas de configuración del MTAP/SAP</td><td>Subespecie de prueba de componente; durante la construcción comprueban que rutas y archivos existen y son correctos.</td></tr>
  <tr><td>Pruebas de componente</td><td>Parte del paso de construcción; actúan como <strong>puerta de calidad</strong> de la IC.</td></tr>
  <tr><td>Integración de componentes</td><td>Pueden ir en la IC junto a las de componente si son de bajo nivel.</td></tr>
  <tr><td>Pruebas de sistema</td><td>A menudo en la canalización de despliegue continuo, como última puerta de calidad del SSP entregado.</td></tr>
  <tr><td>Integración de sistemas</td><td>En la canalización de entrega continua; aseguran que los componentes desarrollados por separado funcionan juntos.</td></tr>
 </table>
 <p>Muchos sistemas separan <strong>construcción</strong> y <strong>despliegue</strong>: componente e integración de componentes van en la construcción; si tiene éxito, se despliega.</p>
 <h3>Dos enfoques para integrar pruebas de sistema/aceptación</h3>
 <ol>
  <li><strong>Como parte de la fase de despliegue:</strong> si las pruebas fallan, el despliegue falla y puede revertirse (actúan como puerta de calidad); pero re-ejecutar exige volver a desplegar.</li>
  <li><strong>Como canalización independiente</strong> disparada por un despliegue correcto: flexible para ejecutar distintos conjuntos, pero las pruebas no son puerta de calidad, así que revertir suele requerir acciones manuales (se usan <em>comprobaciones de despliegue</em> sencillas para confirmar que el SSP se desplegó).</li>
 </ol>
 <p>Las canalizaciones también sirven para <strong>regresión nocturna</strong> (juegos largos que dan una foto de calidad por la mañana) y para pruebas <strong>no funcionales</strong> periódicas (p. ej., eficiencia de desempeño).</p>
 <div class="nota">Idea de examen: escalonar por <strong>velocidad y fiabilidad</strong> — suites rápidas y estables como puertas de calidad en cada commit (construcción); las largas (E2E, no funcionales) en etapas posteriores o nocturnas.</div>`},
  {id:"5.1.2",titulo:"Gestión de la configuración del producto de prueba",
   lo:[{id:"TAE-5.1.2",k:"K2",t:"Explicar la gestión de la configuración para el producto de prueba."}],
   html:`
 <h3>Gestión de la configuración del producto de prueba</h3>
 <p>Como la automatización corre en <strong>múltiples entornos y versiones del SSP</strong>, la gestión de configuración cubre:</p>
 <ul>
  <li><strong>Configuración del entorno de prueba:</strong> URLs, credenciales... Se guarda con el producto de prueba o, si se comparte entre proyectos/MTAP, en la librería base o un repositorio común.</li>
  <li><strong>Datos de prueba:</strong> específicos del entorno o de la entrega; en MTAP pequeños o mediante sistemas de gestión de datos de prueba.</li>
  <li><strong>Juegos/casos de prueba:</strong> conjuntos por finalidad (humo, regresión). Para emparejar versión del SSP y del producto de prueba se usan <strong>conmutadores de prestación</strong> o se entrega el producto con el SSP usando <strong>etiquetas/ramas</strong> de la misma versión.</li>
 </ul>`},
  {id:"5.1.3",titulo:"Dependencias de la automatización para una IPA (API)",
   lo:[{id:"TAE-5.1.3",k:"K2",t:"Explicar las dependencias de automatización de pruebas para la infraestructura de una IPA."}],
   html:`
 <h3>Dependencias de la automatización de IPA/API</h3>
 <p>Para automatizar la <strong>IPA/API</strong> hace falta conocer las <strong>conexiones</strong> entre interfaces (qué lógica de negocio es comprobable y cómo se relacionan) y disponer de su <strong>documentación</strong> como línea base (parámetros, encabezados, tipos de solicitud/respuesta).</p>
 <h3>Qué hay que conocer antes de automatizar una IPA</h3>
 <ul>
  <li><strong>El contrato de la interfaz:</strong> extremos disponibles, parámetros, encabezados, códigos de estado y tipos de solicitud y respuesta, con su documentación como <strong>línea base</strong> versionada.</li>
  <li><strong>Las conexiones y dependencias:</strong> qué servicios llama la IPA a su vez, cuáles son internos y cuáles de terceros, y qué pasa cuando uno no está disponible.</li>
  <li><strong>La autenticación y autorización:</strong> cómo se obtienen y renuevan los credenciales o tokens sin codificarlos de forma rígida en los guiones.</li>
  <li><strong>El versionado:</strong> qué versiones de la IPA conviven, cómo se marcan obsoletas y qué cambios son rupturistas para las pruebas existentes.</li>
  <li><strong>Los datos y el estado:</strong> qué llamadas modifican datos y cómo se deja el sistema como estaba (limpieza o transacciones de prueba).</li>
 </ul>
 <p>Cuando alguna dependencia no está disponible o es inestable, se sustituye con <strong>mocks, stubs o virtualización de servicios</strong>; y cuando el problema es que consumidor y proveedor evolucionan por separado, la respuesta es la <strong>prueba de contrato</strong>.</p>
 <h3>Prueba de contrato</h3>
 <p>La <strong>prueba de contrato</strong> es un tipo de prueba de integración que verifica que dos servicios pueden comunicarse y que los datos compartidos cumplen unas reglas. Va más allá de la validación de esquemas: ambas partes consensúan las interacciones permitidas y las almacenan en un <strong>contrato</strong> que cada una verifica por separado, detectando rupturas de compatibilidad antes y sin montar la integración completa.</p>
 <ul>
  <li><strong>Impulsada por el consumidor:</strong> el consumidor fija sus expectativas sobre cómo responderá el proveedor.</li>
  <li><strong>Impulsada por el proveedor:</strong> el proveedor crea el contrato que muestra cómo funcionan sus servicios.</li>
 </ul>`}
 ],
 quiz:[
  {k:"k3",lo:"TAE-5.1.1",q:"Una canalización tarda 3 h porque ejecuta toda la suite E2E en cada commit y el equipo ha dejado de mirar los resultados. ¿Cuál es la mejor reorganización?",
   op:["Ejecutar en cada commit solo suites rápidas y estables (componente/integración) como puertas de calidad, y mover las E2E largas a etapas posteriores o nocturnas","Eliminar las E2E definitivamente","Ejecutar la canalización una vez por semana","Pedir commits menos frecuentes"],
   c:0,e:"El principio en IC/EC es escalonar por velocidad y fiabilidad: feedback rápido en cada commit con suites cortas y las largas en etapas posteriores o regresión nocturna. Eliminar cobertura o espaciar la canalización destruye el propósito de la IC."},
  {k:"k2",lo:"TAE-5.1.3",q:"¿Qué verifica la prueba de contrato?",
   op:["Que el contrato laboral del equipo cubre la automatización","Que dos servicios (consumidor y proveedor) cumplen un contrato compartido de interacciones, sin montar la integración completa","Que el SSP cumple los requisitos de rendimiento","Que los datos de producción pueden copiarse al entorno de prueba"],
   c:1,e:"La prueba de contrato verifica que consumidor y proveedor respetan un contrato común (formato e interacciones), detectando rupturas de compatibilidad pronto y sin desplegar todos los servicios juntos. Muy útil en microservicios."},
  {k:"k2",lo:"TAE-5.1.3",q:"En el enfoque de prueba de contrato impulsada por el consumidor, ¿quién fija las expectativas?",
   op:["El proveedor, que define cómo funcionan sus servicios","El consumidor, que determina cómo espera que el proveedor responda a sus peticiones","Un tercero independiente","La herramienta de IC/EC automáticamente"],
   c:1,e:"En el contrato impulsado por el consumidor, este establece sus expectativas sobre las respuestas del proveedor. En el impulsado por el proveedor, es este quien crea el contrato mostrando cómo funcionan sus servicios."},
  {k:"k2",lo:"TAE-5.1.2",q:"¿Qué debe cubrir la gestión de la configuración del producto de prueba en automatización?",
   op:["Únicamente los guiones de prueba","La configuración del entorno de prueba, los datos de prueba y los juegos/casos de prueba, coherentes con la versión del SSP","Solo los resultados de las ejecuciones","Únicamente las licencias de las herramientas"],
   c:1,e:"Como la automatización corre en múltiples entornos y versiones del SSP, la gestión de configuración cubre entorno, datos y juegos de prueba, emparejados con la versión del SSP (p. ej., mediante etiquetas/ramas o conmutadores de prestación)."},
  {k:"k3",lo:"TAE-5.1.1",q:"Las pruebas de sistema se integran «como parte de la fase de despliegue». ¿Qué consecuencia tiene este enfoque?",
   op:["Las pruebas no actúan como puerta de calidad y revertir es siempre automático","Si las pruebas fallan, el despliegue falla y puede revertirse (actúan como puerta de calidad), pero re-ejecutarlas exige volver a desplegar","Las pruebas se ejecutan solo de forma manual","No es posible revertir el despliegue en ningún caso"],
   c:1,e:"Integradas en la fase de despliegue, las pruebas actúan como puerta de calidad: un fallo hace fallar (y poder revertir) el despliegue; la contrapartida es que volver a ejecutarlas obliga a desplegar de nuevo."}
 ]},

{n:6,titulo:"Suministro de información de la automatización y métricas",
 resumen:"Qué datos genera la automatización, cómo se analizan para saber si el fallo está en el SSP, en la solución o en el entorno, y cómo se comunica el avance a cada audiencia.",
 secciones:[
  {id:"6.1.1",titulo:"Métodos de recopilación de datos de la SAP y del SSP",
   lo:[{id:"TAE-6.1.1",k:"K3",t:"Aplicar métodos de recopilación de datos de la solución de automatización de la prueba y del sistema sujeto a prueba."}],
   html:`
 <h3>Recopilación de datos</h3>
 <p>Para analizar resultados se recopilan datos de muchas fuentes: <strong>registros del SSP</strong> (IU web/móvil, IPA, aplicaciones, servidores web y de BD), <strong>registros del MTAP</strong> (rastro de auditoría), registros de <strong>construcción y despliegue</strong>, registros de <strong>producción</strong> (para análisis de tendencias y rendimiento) y <strong>capturas/grabaciones de pantalla</strong>. Como la SAP tiene un producto de prueba en su núcleo, conviene <strong>mejorar el software de prueba subyacente</strong> para registrar uso (p. ej., hora de inicio/fin), porque esa mejora se aplica a todos los guiones de nivel superior.</p>
 <h3>Verificación con aserciones</h3>
 <p>La automatización requiere automatizar la <strong>ejecución</strong> y la <strong>verificación</strong>: esta última compara elementos concretos del resultado real con el esperado, idealmente con <strong>aserciones</strong>. Hay que determinar correctamente el estado (pasó/falló) y, en caso de fallo, capturar información de la causa (capturas, trazas). El soporte de la herramienta ayuda a ignorar diferencias esperadas (fechas, horas) y resaltar las inesperadas.</p>
 <h3>Estados de ejecución y registro de la SAP</h3>
 <p>El registro de la SAP debe incluir: qué caso se ejecuta (con hora de inicio/fin), el <strong>estado</strong> (paso, fallo o <strong>fallo de SAP</strong> — cuando el defecto NO está en el SSP, sino en la solución), pasos significativos con su cronología, información dinámica del SSP (p. ej., fugas de memoria), contadores en pruebas de fiabilidad/esfuerzo, las opciones aleatorias usadas, y suficiente detalle para <strong>reproducir</strong> el fallo. Se guardan capturas, volcados y trazas de pila; el color ayuda a distinguir tipos de información (defectos en rojo, avance en verde).</p>
 <h3>Correlación SAP ↔ SSP</h3>
 <p>Correlacionar los resultados de la automatización con los <strong>registros del SSP</strong> ayuda a hallar la causa raíz. Para ello: registrar marcas de fecha/hora, ubicación del defecto y mensajes de error; registrar la configuración al iniciar el sistema (versiones, SO); y <strong>sincronizar los registros</strong> con marcas de tiempo. Un <strong>ID de correlación / ID de traza</strong> único añadido a cada interacción permite seguir el comportamiento del sistema a través de todas las llamadas.</p>`},
  {id:"6.1.2",titulo:"Análisis de los datos y de los fallos",
   lo:[{id:"TAE-6.1.2",k:"K4",t:"Analizar los datos de la solución de automatización de la prueba y del sistema sujeto a prueba para comprender mejor los resultados."}],
   html:`
 <h3>Análisis de los resultados y de los fallos</h3>
 <p>Tras ejecutar, los datos de la <strong>SAP son primarios</strong> y los del SSP, secundarios. Pasos para analizar un fallo: (1) ¿ocurrió en ejecuciones previas? (defecto conocido del SSP o de la SAP); (2) si es nuevo, identificar el caso y qué prueba; (3) localizar el paso donde falló; (4) comprobar el estado del SSP con capturas/registros; (5) si el estado no es el esperado, registrar el defecto. <strong>Cuidado:</strong> si el resultado real y el esperado del SSP coinciden pero la prueba falla, probablemente el defecto está en la <strong>SAP</strong> (o hay un desajuste invisible). Si <em>todos</em> los casos fallan, sospecha del <strong>entorno de prueba</strong> no disponible.</p>
 <div class="nota">Distingue los tres estados: <strong>paso</strong>, <strong>fallo</strong> (defecto en el SSP) y <strong>fallo de SAP</strong> (defecto en la solución de automatización). Si real = esperado en el SSP pero la prueba falla → muy probablemente es un fallo de SAP.</div>`},
  {id:"6.1.3",titulo:"Informe del avance de la prueba",
   lo:[{id:"TAE-6.1.3",k:"K2",t:"Explicar cómo se elabora y publica un informe del avance de la prueba."}],
   html:`
 <h3>Informe del avance de la prueba y audiencias</h3>
 <p>Los registros por sí solos no dan una visión de conjunto: hace falta un <strong>informe de avance</strong> conciso (con un generador de informes) que incluya resultados, información del SSP y del entorno, en un formato adecuado para cada implicado. Audiencias:</p>
 <ul>
  <li><strong>Gestión</strong> (arquitecto, jefe de proyecto/entrega, jefe de prueba): tendencias, proporción de aprobados/suspensos, fiabilidad de la SAP; prefieren <em>resúmenes visuales</em> (semáforos, gráficos) y luego profundizar.</li>
  <li><strong>Operativos</strong> (propietario de producto, analista de negocio): énfasis en métricas de uso del producto.</li>
  <li><strong>Técnicos</strong> (jefe de equipo, scrum master, desarrollador/DBA, IAP, probador): detalle de bajo nivel para diagnosticar.</li>
 </ul>
 <h3>Paneles de control e IA en el suministro de información</h3>
 <p>Las herramientas modernas ofrecen <strong>paneles de control</strong> con gráficos de colores y análisis automatizado de la bitácora, agregando datos de registros de ejecución, gestión de proyecto y repositorios de código. Ayudan a ver tendencias como <strong>agrupamientos de defectos</strong>, propagación de defectos a ciertos entornos, degradación del rendimiento del SSP y fiabilidad de las construcciones. Cada vez más herramientas usan <strong>aprendizaje automático (AA)</strong> para analizar grandes volúmenes de registros: reducen el tiempo de hallar localizadores rotos, ayudan a discernir si el fallo es del SSP o de la SAP y agrupan defectos comunes para el informe.</p>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-6.1.2",q:"Una prueba falla, pero el resultado real y el esperado del SSP coinciden. ¿Qué conclusión es la más probable?",
   op:["El SSP tiene un defecto grave","El defecto está en la solución de automatización (fallo de SAP) o hay un desajuste invisible","Hay que abrir un defecto en el SSP de inmediato","El entorno de prueba funciona perfectamente"],
   c:1,e:"Si el SSP se comporta como se espera pero la prueba falla, lo más probable es un «fallo de SAP»: el defecto está en la solución de automatización (o existe un desajuste invisible), no en el SSP."},
  {k:"k3",lo:"TAE-6.1.2",q:"Una suite nocturna informa de un 30 % de fallos; al investigar, todos coinciden con una caída del entorno de prueba a esa hora. ¿Qué indica y qué conviene hacer?",
   op:["El SSP tiene un 30 % de funcionalidades defectuosas: abrir 30 defectos","Es un problema del entorno de prueba (no disponible): analizar los registros del SSP confirma la interrupción y hay que estabilizar el entorno antes de fiarse","Es normal: ignorar los fallos","Reducir la suite un 30 %"],
   c:1,e:"Que casi todos los casos fallen a la vez apunta al entorno de prueba no disponible, no al SSP. Los registros del SSP muestran la interrupción; la acción es estabilizar el entorno, no abrir defectos masivos ni recortar la suite."},
  {k:"k2",lo:"TAE-6.1.1",q:"¿Qué debe contener como mínimo el registro de un caso de prueba fallido para ser útil?",
   op:["Solo el nombre del caso y el veredicto «fallido»","Qué caso se ejecutó (con hora de inicio/fin), el estado, los pasos significativos y evidencias (capturas, trazas) suficientes para reproducir el fallo","El historial de commits del SSP","Los datos personales del autor del caso"],
   c:1,e:"El registro debe permitir diagnosticar sin re-ejecutar: caso, cronología, estado, pasos significativos y evidencias para reproducir. Solo el veredicto obliga a depurar a ciegas."},
  {k:"k2",lo:"TAE-6.1.1",q:"¿Para qué sirve un ID de correlación (ID de traza) en el análisis de resultados?",
   op:["Para cifrar los datos de prueba","Para seguir y trazar el comportamiento del sistema a través de todas las llamadas e integraciones de una misma interacción","Para acelerar la ejecución de las pruebas","Para sustituir a las aserciones"],
   c:1,e:"Un ID único añadido a cada interacción (ID de correlación/traza) permite observar y trazar el comportamiento del sistema en todas las llamadas posteriores, facilitando correlacionar la SAP con los registros del SSP."},
  {k:"k2",lo:"TAE-6.1.3",q:"¿Cómo deben adaptarse los informes de avance a sus destinatarios?",
   op:["Todos reciben el registro completo de cada ejecución","La gestión recibe tendencias y resúmenes visuales (semáforos, proporción aprobados/suspensos, fiabilidad); los técnicos, el detalle de bajo nivel para diagnosticar","Solo la gestión recibe informes","Los informes se limitan al número total de pruebas ejecutadas"],
   c:1,e:"El contenido se adapta a las decisiones de cada audiencia: la gestión decide sobre riesgo/avance (tendencias, visuales) y profundiza si lo necesita; los técnicos diagnostican (detalle). El registro completo a todos no sirve a nadie."},
  {k:"k2",lo:"TAE-6.1.1",q:"¿Cómo ayudan las herramientas de suministro de información basadas en aprendizaje automático (AA) al analizar los registros de prueba?",
   op:["Cifran los registros para protegerlos","Reducen el tiempo de hallar localizadores rotos, ayudan a discernir si el fallo es del SSP o de la SAP y agrupan defectos comunes para el informe","Sustituyen por completo a las aserciones","Eliminan la necesidad de paneles de control"],
   c:1,e:"El análisis automatizado de grandes volúmenes de registros con AA acelera la localización de selectores dañados, el diagnóstico SSP/SAP y la agrupación de defectos comunes. Los paneles de control siguen siendo útiles para visualizar tendencias."},
  {k:"k4",lo:"TAE-6.1.2",q:"Para analizar los resultados de una ejecución y hallar la causa raíz, ¿qué fuente de datos es primaria y qué implica?",
   op:["Los registros del SSP son primarios; los de la SAP, secundarios","Los datos de la SAP son primarios y los del SSP secundarios: se parte del veredicto y la cronología de la SAP y se corrobora el estado con los registros del SSP","Solo cuentan las capturas de pantalla","Ninguna fuente es fiable sin revisión humana de cada caso"],
   c:1,e:"En el análisis, los datos de la SAP son primarios y los del SSP secundarios: se identifica el caso y el paso del fallo en la SAP y se corrobora el estado del SSP con sus registros (sincronizados por marca de tiempo y con ID de correlación) para encontrar la causa raíz."}
 ]},

{n:7,titulo:"Verificación de la solución de automatización",
 resumen:"Antes de creerse un veredicto hay que verificar la propia solución: el entorno y sus componentes, el comportamiento de los guiones, los resultados inesperados y la calidad del código de automatización.",
 secciones:[
  {id:"7.1.1",titulo:"Verificación del entorno de automatización",
   lo:[{id:"TAE-7.1.1",k:"K3",t:"Planificar la verificación del entorno de automatización de la prueba, incluyendo la configuración de la herramienta de prueba."}],
   html:`
 <h3>Verificar el entorno de automatización</h3>
 <p>Antes de confiar en los veredictos hay que comprobar que el entorno y todos los componentes de la SAP funcionan como se espera:</p>
 <ul>
  <li><strong>Instalación, configuración y personalización</strong> de la herramienta: componentes ejecutables, librerías, datos y configuración. La instalación automatizada o desde repositorio asegura misma versión y configuración entre SSP.</li>
  <li><strong>Repetibilidad del montaje/desmontaje:</strong> construir y reconstruir la SAP no debe producir diferencias perceptibles entre entornos; la gestión de configuración garantiza recrear una configuración dada de forma fiable.</li>
  <li><strong>Conectividad</strong> con sistemas e interfaces internos y externos: iniciar sesión, arrancar las herramientas, verificar acceso al SSP, permisos para logging y reporting (precondiciones).</li>
  <li><strong>Prueba de los componentes del MTAP:</strong> como cualquier software, se prueban individualmente (funcional y no funcionalmente: rendimiento, fugas de memoria, interoperabilidad). P. ej., un componente de verificación de objetos de IGU se prueba con muchas clases de objeto.</li>
 </ul>`},
  {id:"7.1.2",titulo:"Comportamiento correcto de un guion o juego de prueba",
   lo:[{id:"TAE-7.1.2",k:"K2",t:"Explicar el comportamiento correcto para un guion de prueba automatizado y/o un juego de prueba dado."}],
   html:`
 <h3>Comportamiento correcto de un guion / juego de prueba</h3>
 <p>Los juegos automatizados se prueban para comprobar su <strong>compleción, consistencia y comportamiento</strong>:</p>
 <ul>
  <li><strong>Composición del juego:</strong> completitud (todos los casos con resultados esperados y datos) y versión correcta de MTAP y SSP.</li>
  <li><strong>Nuevas prestaciones del MTAP:</strong> la primera vez que se usan, se verifican y monitorizan de cerca.</li>
  <li><strong>Repetibilidad:</strong> repetir debe dar el mismo resultado; los casos no fiables (p. ej., por dependencias de secuencia) se <strong>retiran del juego activo</strong> y se analizan aparte para hallar la causa raíz.</li>
  <li><strong>Intrusividad:</strong> la SAP suele estar acoplada al SSP; un nivel alto de intrusión puede provocar fallos en prueba que no aparecen en producción y erosionar la confianza. A veces se pide reproducir el fallo manualmente para ayudar al análisis.</li>
 </ul>`},
  {id:"7.1.3",titulo:"Dónde se producen resultados inesperados",
   lo:[{id:"TAE-7.1.3",k:"K2",t:"Identificar dónde la automatización de la prueba produce resultados inesperados."}],
   html:`
 <h3>Resultados inesperados</h3>
 <p>Cuando un guion <strong>falla o pasa de forma inesperada</strong>, se hace análisis de la causa raíz: inspeccionar registros, datos de rendimiento, montaje/desmontaje del guion y ejecutar algunas pruebas aisladas. Los <strong>fallos intermitentes</strong> son más difíciles; el defecto puede estar en el caso, el SSP, el MTAP, el hardware o la red. Comprobar que <strong>todas las aserciones</strong> se cumplen: si faltan aserciones, los resultados pueden ser <em>no concluyentes</em> (un test sin aserciones «pasa» siempre: falso negativo).</p>`},
  {id:"7.1.4",titulo:"El análisis estático y la calidad del código de automatización",
   lo:[{id:"TAE-7.1.4",k:"K2",t:"Explicar cómo el análisis estático puede ayudar a la calidad del código de automatización de pruebas."}],
   html:`
 <h3>El análisis estático ayuda a la calidad del código</h3>
 <p>El <strong>análisis estático</strong> del código (del SSP o del MTAP) encuentra vulnerabilidades y defectos sin ejecutarlo y aplica estándares de calidad; es una técnica <strong>proactiva</strong> clave en <strong>DevSecOps</strong> (DevOps con énfasis en seguridad), ejecutada pronto en el CVDS a través de canalizaciones para dar feedback inmediato. Clasifica los defectos por severidad (crítica/alta/media/baja), a veces sugiere correcciones, y ayuda al IAP a medir calidad, mejorar estructuras (try/catch, bucles) y eliminar llamadas a librerías deficientes.</p>
 <div class="nota">Pregunta típica: «¿cómo compruebas que un nuevo guion verifica de verdad lo que dice?» → ejecutarlo contra una versión del SSP donde la condición probada falle (defecto conocido/provocado) y comprobar que lo detecta. Y revisa los tests que «nunca fallan»: pueden carecer de aserciones.</div>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-7.1.1",q:"¿Qué debe verificarse del entorno antes de dar por válidos los resultados de una campaña automatizada?",
   op:["Solo que la herramienta está instalada","Instalación y configuración correctas, repetibilidad del montaje/desmontaje, conectividad con el SSP y los componentes del MTAP probados","Únicamente que el SSP compila","Que los probadores tienen acceso a la sala de reuniones"],
   c:1,e:"Un entorno mal configurado produce veredictos engañosos. Hay que verificar instalación/configuración, repetibilidad de montaje/desmontaje, conectividad con el SSP y dependencias, y haber probado los componentes del MTAP."},
  {k:"k2",lo:"TAE-7.1.3",q:"Durante una revisión del código de prueba se halla un guion sin ninguna aserción. ¿Qué riesgo señala?",
   op:["Sobrecarga de mantenimiento","Falso negativo: el guion «pasa» haga lo que haga el SSP, sin verificar nada","Falso positivo por sincronización","Intrusividad excesiva"],
   c:1,e:"Sin aserciones, el resultado puede ser no concluyente y el guion pasa siempre: es un falso negativo garantizado. La duración o la duplicación afectan a la mantenibilidad, no a la validez del veredicto."},
  {k:"k3",lo:"TAE-7.1.2",q:"¿Cuál es la forma más directa de comprobar que un guion nuevo detecta realmente el defecto que dice verificar?",
   op:["Ejecutarlo diez veces contra la versión correcta del SSP y ver que siempre pasa","Ejecutarlo contra una versión del SSP con el defecto presente (conocido o provocado) y comprobar que falla","Revisar que el nombre del guion describe su propósito","Comprobar que tarda menos de un minuto"],
   c:1,e:"Que pase repetidamente no demuestra capacidad de detección (podría no tener aserciones). La evidencia es que falle cuando el defecto está presente: el principio de «probar los tests»."},
  {k:"k3",lo:"TAE-7.1.3",q:"Un guion da resultados distintos al repetirlo, sin cambios en el SSP. Según la verificación del juego de prueba, ¿qué conviene hacer?",
   op:["Marcarlo como aprobado manualmente para no bloquear la canalización","Retirarlo del juego activo y analizarlo por separado para encontrar la causa raíz","Duplicarlo para que al menos una copia pase","Borrarlo sin análisis"],
   c:1,e:"Los casos que no dan un resultado fiable (p. ej., por dependencias de secuencia) deben retirarse del juego activo y analizarse aparte; si no, se pierde tiempo repetidamente. Aprobarlos a mano o duplicarlos oculta el problema."},
  {k:"k2",lo:"TAE-7.1.4",q:"¿Cómo ayuda el análisis estático a la calidad del código de automatización?",
   op:["Ejecutando la suite en varios entornos","Inspeccionando el código sin ejecutarlo para encontrar vulnerabilidades y defectos y aplicar estándares, de forma proactiva (DevSecOps)","Midiendo el tiempo de ejecución de cada caso","Sustituyendo a las aserciones de las pruebas"],
   c:1,e:"El análisis estático examina el código (del SSP o del MTAP) sin ejecutarlo, detecta vulnerabilidades/defectos y aplica estándares de calidad; es una técnica proactiva, clave en DevSecOps, integrada pronto en la canalización."}
 ]},

{n:8,titulo:"Mejora continua de la automatización",
 resumen:"La SAP no se termina: se mejora. Qué oportunidades revelan los datos, qué aspectos técnicos conviene revisar, cómo se reestructura el producto de prueba cuando el SSP cambia y qué se gana mejorando también el proceso.",
 secciones:[
  {id:"8.1.1",titulo:"Oportunidades de mejora a partir de los datos",
   lo:[{id:"TAE-8.1.1",k:"K3",t:"Descubrir oportunidades para mejorar casos de prueba a través de la recopilación y análisis de datos."}],
   html:`
 <h3>Oportunidades de mejora a partir de los datos</h3>
 <p>Recopilar y analizar datos abre oportunidades de mejora:</p>
 <ul>
  <li><strong>Histograma de pruebas:</strong> un informe visual de los datos de prueba que revela tendencias y permite identificar los casos <strong>frágiles (flaky)</strong> para refactorizarlos o replantear su implementación.</li>
  <li><strong>Inteligencia artificial:</strong> herramientas basadas en aprendizaje automático y reconocimiento de imágenes pueden detectar que un <strong>localizador</strong> ha cambiado e identificar nuevos selectores, aplicando <strong>autorreparación</strong> del caso e informando del cambio: acelera el mantenimiento.</li>
  <li><strong>Validación de esquemas:</strong> comprueba que una respuesta (de IPA/API o de BD) coincide con la especificación (elementos obligatorios presentes, tipos correctos) sin escribir aserciones individuales, haciendo el código más corto y eficiente para detectar defectos.</li>
 </ul>`},
  {id:"8.1.2",titulo:"Analizar la solución y recomendar mejoras técnicas",
   lo:[{id:"TAE-8.1.2",k:"K4",t:"Analizar los aspectos técnicos de una solución de automatización de la prueba implementada y proporcionar recomendaciones para la mejora."}],
   html:`
 <h3>Analizar la solución y recomendar mejoras</h3>
 <p>Más allá del mantenimiento para mantener la SAP sincronizada con el SSP, hay muchas oportunidades de mejora con beneficios como mayor <strong>eficiencia</strong> (menos intervención manual), mejor usabilidad, capacidades adicionales y mejor soporte. La decisión depende de qué prestaciones aportan <strong>más valor</strong> al proyecto. Áreas concretas a considerar:</p>
 <table>
  <tr><th>Área</th><th>Mejoras típicas</th></tr>
  <tr><td><strong>Guionizado</strong></td><td>Actualizar la técnica (p. ej. de lineal a data-driven o keyword-driven); consolidar pasos repetidos en funciones de librería reutilizables (parametrizar si son similares pero no idénticos); establecer recuperación de fallos; revisar los mecanismos de espera.</td></tr>
  <tr><td><strong>Ejecución</strong></td><td>Ejecutar en paralelo / en varios entornos; dividir suites de regresión largas; eliminar duplicación; programar lotes nocturnos.</td></tr>
  <tr><td><strong>Verificación</strong></td><td>Adoptar métodos de verificación estándar reutilizables (parametrizados) en vez de reimplementarlos por prueba.</td></tr>
  <tr><td><strong>Arquitectura (AAP) / MTAP</strong></td><td>Mejorar la testabilidad del SSP (p. ej. añadir IPA de prueba y refactorizar la SAP); actualizar librerías base con piloto, análisis de impacto y plan de adopción.</td></tr>
  <tr><td><strong>Montaje/desmontaje</strong></td><td>Mover acciones repetidas antes/después de cada caso a métodos de <em>setup</em>/<em>teardown</em>: se cambian en un solo sitio.</td></tr>
  <tr><td><strong>Documentación y prestaciones</strong></td><td>Mantener documentación de código, de usuario e informes; añadir prestaciones <em>solo si se usan</em> (lo no usado resta fiabilidad y mantenibilidad).</td></tr>
 </table>
 <h3>Mecanismos de espera: del peor al mejor</h3>
 <p>Una causa raíz muy común de fragilidad es el tipo de espera elegido. De peor a mejor:</p>
 <ol>
  <li><strong>Espera rígida (codificada):</strong> esperar X milisegundos fijos. Frágil: los tiempos de respuesta son impredecibles, así que provoca muchos defectos de automatización.</li>
  <li><strong>Espera dinámica por sondeo:</strong> comprobar repetidamente hasta que se cumple una condición. Espera solo lo necesario; debe llevar un <em>timeout</em> o la prueba podría esperar para siempre.</li>
  <li><strong>Suscripción a eventos del SSP:</strong> la más fiable, pero exige que el lenguaje de guion soporte eventos y que el SSP los ofrezca. También necesita timeout.</li>
 </ol>
 <ul>
  <li><strong>Recuperación de fallos:</strong> ante un fallo, la SAP debería poder continuar con la siguiente prueba y, si el fallo es del SSP, ejecutar acciones de recuperación (p. ej. reiniciarlo) cuando sea factible.</li>
  <li><strong>Refactorizar el testware:</strong> eliminar duplicación, consolidar funciones comunes en librerías, mejorar nombres y estructura, sustituir esperas fijas por esperas por condición.</li>
  <li><strong>Depurar la suite</strong> y <strong>mejorar datos y entornos</strong>, ampliando el alcance (automatizar más actividades, no solo más casos).</li>
 </ul>`},
  {id:"8.1.3",titulo:"Reestructurar el producto de prueba al cambiar el SSP",
   lo:[{id:"TAE-8.1.3",k:"K3",t:"Reestructurar el producto de prueba automatizado para alinearlo con las actualizaciones del sistema sujeto a prueba (SSP)."}],
   html:`
 <h3>Reestructurar el producto de prueba al cambiar el SSP</h3>
 <p>Cuando el SSP cambia, una buena arquitectura paga dividendos: con la abstracción adecuada se actualizan la <strong>capa de adaptación</strong> y los Page Object, no cada caso. Si cada cambio del SSP exige tocar decenas de tests, es <strong>deuda arquitectónica</strong>: la mejora prioritaria es aumentar la abstracción, no añadir manos.</p>
 <h3>Cómo se reestructura, paso a paso</h3>
 <ol>
  <li><strong>Analizar el impacto del cambio del SSP:</strong> qué elementos de interfaz, flujos o servicios han cambiado y qué partes del producto de prueba los tocan.</li>
  <li><strong>Localizar el punto de cambio en la capa correcta.</strong> Si el cambio es de interfaz, debería bastar con tocar la capa de adaptación o los objetos de página; si obliga a tocar decenas de guiones, el problema no es el SSP, es la arquitectura.</li>
  <li><strong>Actualizar la lógica de negocio</strong> solo si el flujo de negocio ha cambiado de verdad, no por un cambio cosmético de la IGU.</li>
  <li><strong>Refactorizar lo duplicado</strong> que el cambio haya dejado a la vista: extraer funciones comunes a las librerías base y eliminar código muerto.</li>
  <li><strong>Revisar los datos de prueba y la configuración</strong> del entorno, que suelen quedar obsoletos con el cambio.</li>
  <li><strong>Verificar la solución reestructurada</strong> con las técnicas del capítulo 7: ejecutar sobre una versión conocida del SSP y comprobar que los veredictos siguen siendo correctos.</li>
  <li><strong>Retirar</strong> los casos automatizados que ya no aportan (funcionalidad eliminada, pruebas que nunca fallan, cobertura duplicada).</li>
 </ol>
 <div class="nota">Señal de alarma en el examen: «un cambio menor en la IGU obliga a modificar muchos guiones». La recomendación correcta no es «actualizar los guiones», sino <strong>aumentar la abstracción</strong> (capa de adaptación, Page Object) para que ese cambio solo afecte a un sitio.</div>`},
  {id:"8.1.4",titulo:"Oportunidades de uso de herramientas y mejora del proceso",
   lo:[{id:"TAE-8.1.4",k:"K2",t:"Resumir las oportunidades para el uso de herramientas de automatización de la prueba."}],
   html:`
 <h3>Mejorar también el proceso</h3>
 <p>La mejora continua no es solo código: incluye revisar las <strong>métricas</strong> (¿mejora la fiabilidad?, ¿baja el mantenimiento?), recoger feedback de quien usa los resultados, ajustar qué se ejecuta en cada etapa de la canalización y compartir conocimiento. Las retrospectivas son fuente natural de mejoras.</p>
 <div class="nota">Conecta capítulos: los datos y métricas del cap. 6 son la brújula de la mejora del cap. 8, y cada cambio relevante en la SAP se verifica con las técnicas del cap. 7.</div>`}
 ],
 quiz:[
  {k:"k2",lo:"TAE-8.1.1",q:"¿Para qué sirve un histograma de pruebas en la mejora continua?",
   op:["Para cifrar los resultados de prueba","Para visualizar tendencias de los datos de prueba e identificar los casos frágiles (flaky) candidatos a refactorizar","Para ejecutar las pruebas más rápido","Para sustituir el control de versiones"],
   c:1,e:"El histograma de pruebas representa visualmente los datos y revela tendencias, permitiendo al IAP detectar casos frágiles y decidir áreas de mejora (refactorizar o replantear su implementación)."},
  {k:"k2",lo:"TAE-8.1.4",q:"¿Qué aporta la validación de esquemas al analizar respuestas de una IPA/API?",
   op:["Sustituye a la prueba de contrato","Comprueba que la respuesta coincide con la especificación (elementos obligatorios y tipos) sin escribir aserciones individuales, acortando el código","Cifra los datos de la respuesta","Garantiza que el servicio no tiene defectos"],
   c:1,e:"La validación de esquemas verifica que los elementos obligatorios están presentes y sus tipos son correctos según el esquema, evitando escribir aserciones una a una y aumentando la eficiencia de detección de defectos."},
  {k:"k3",lo:"TAE-8.1.3",q:"Tras cada entrega, el equipo dedica una semana a arreglar tests rotos porque los localizadores están repartidos por cientos de ficheros. ¿Cuál es la mejora prioritaria?",
   op:["Contratar más personas para arreglar tests","Aumentar la abstracción: concentrar los localizadores en la capa de adaptación / Page Object","Reducir la frecuencia de las entregas del SSP","Dejar de ejecutar los tests tras las entregas"],
   c:1,e:"El mantenimiento masivo tras cada cambio del SSP indica deuda arquitectónica. Concentrar el conocimiento de las interfaces en un punto (adaptación/Page Object) reduce el mantenimiento de forma estructural; más manos atacan el síntoma."},
  {k:"k4",lo:"TAE-8.1.2",q:"Las métricas muestran que el mantenimiento de la SAP crece un 15 % por trimestre mientras la suite crece solo un 3 %. ¿Qué conclusión y acción son más razonables?",
   op:["Es lo normal: no hacer nada","Hay deuda creciente en el testware: planificar refactorización (consolidar duplicados, reforzar la abstracción, estabilizar esperas)","Congelar el SSP para que no genere mantenimiento","Duplicar el equipo cada trimestre"],
   c:1,e:"Un mantenimiento que crece mucho más rápido que la suite señala deuda técnica del testware. La respuesta de ingeniería es refactorizar y reforzar la abstracción; añadir personas o congelar el SSP no corrige la causa."},
  {k:"k2",lo:"TAE-8.1.1",q:"¿Qué papel juegan los datos y métricas del capítulo 6 en la mejora continua?",
   op:["Ninguno: la mejora se basa en intuición","Permiten identificar dónde mejorar (fiabilidad, fragilidad, tiempos) y comprobar si las mejoras funcionan","Sirven solo para informar a dirección","Solo se usan durante el piloto"],
   c:1,e:"Las métricas y los datos recogidos (cap. 6) señalan los puntos débiles y, tras aplicar mejoras, permiten verificar objetivamente su efecto. Sin medición, la mejora continua es ciega."},
  {k:"k3",lo:"TAE-8.1.2",q:"Una suite falla de forma intermitente por esperas codificadas con tiempos fijos. Entre los mecanismos de espera, ¿cuál es el MÁS fiable cuando el SSP y el lenguaje de guion lo permiten?",
   op:["Aumentar los milisegundos de la espera rígida","La espera dinámica por sondeo de una condición","La suscripción al mecanismo de eventos del SSP","Eliminar todas las esperas"],
   c:2,e:"De peor a mejor: espera rígida → sondeo por condición (con timeout) → suscripción a eventos del SSP, la más fiable cuando el lenguaje de guion la soporta y el SSP ofrece eventos. La espera rígida fija es causa raíz de muchos defectos de automatización."},
  {k:"k2",lo:"TAE-8.1.3",q:"Al refactorizar la SAP, ¿qué ventaja aporta mover a métodos de montaje/desmontaje (setup/teardown) las acciones que se repiten antes o después de cada caso?",
   op:["Duplica la cobertura de código","Cualquier cambio se actualiza en un solo lugar, reduciendo el esfuerzo de mantenimiento","Elimina la necesidad de datos de prueba","Convierte la prueba en manual"],
   c:1,e:"Centralizar en setup/teardown las acciones repetidas (p. ej., precondiciones por servicio web) evita duplicarlas en cada caso: un cambio se hace una sola vez, reduciendo el mantenimiento."}
 ]}
];

/* =========================================================
   EXAMEN DE PRÁCTICA (40 preguntas) — cap = capítulo oficial
   Distribución: C1=4, C2=6, C3=8, C4=5, C5=5, C6=5, C7=4, C8=3
========================================================= */
const EXAMEN=[
 // ---- Capítulo 1 (4) ----
 {cap:1,k:"k2",lo:"TAE-1.1.1",q:"¿Cuál de los siguientes NO es un objetivo razonable de la automatización de la prueba?",
  op:["Aumentar la frecuencia y la cantidad de pruebas por construcción","Liberar tiempo de las personas para pruebas exploratorias","Eliminar por completo la necesidad de pruebas manuales","Mejorar la consistencia y repetibilidad de la ejecución"],
  c:2,e:"La automatización complementa la prueba manual: la exploratoria y el juicio humano siguen siendo necesarios. «Eliminar por completo» es un distractor absoluto."},
 {cap:1,k:"k2",lo:"TAE-1.1.1",q:"¿Cuál de las siguientes es una limitación (no una desventaja de coste) de la automatización?",
  op:["La inversión inicial para montar la solución","Solo puede comprobar resultados interpretables por la máquina y verificables por un oráculo automatizado","El tiempo de mantenimiento del testware","La posibilidad de introducir defectos con la automatización"],
  c:1,e:"Que solo verifique resultados interpretables por la máquina y validables por un oráculo es una limitación intrínseca. Inversión, mantenimiento y riesgo de introducir defectos son desventajas de coste/esfuerzo."},
 {cap:1,k:"k2",lo:"TAE-1.2.1",q:"En el desarrollo ágil, ¿qué objetivo persigue «la automatización durante el sprint»?",
  op:["Posponer la automatización a una fase final separada","Eliminar silos para que dev, prueba e implicados cubran todos los niveles con la automatización adecuada dentro del propio sprint","Automatizar solo la prueba de aceptación","Sustituir a los desarrolladores por herramientas"],
  c:1,e:"En ágil, eliminar silos permite cubrir todos los niveles de prueba con la cantidad y profundidad adecuadas de automatización dentro del sprint, decidiendo IAP y negocio la hoja de ruta."},
 {cap:1,k:"k3",lo:"TAE-1.2.2",q:"Un equipo técnico con experiencia en programación va a automatizar un SSP escrito en un lenguaje concreto. ¿Qué criterio de selección de herramienta aporta una ventaja clara?",
  op:["Elegir la herramienta con el logotipo más reconocible","Elegir una herramienta cuyo lenguaje coincida con el del SSP, para depurar con los desarrolladores y la formación cruzada","Elegir siempre una solución sin código","Elegir la herramienta más cara"],
  c:1,e:"Para equipos técnicos, una herramienta cuyo lenguaje coincida con el del SSP facilita depurar defectos junto a los desarrolladores y la formación cruzada entre equipos."},
 // ---- Capítulo 2 (6) ----
 {cap:2,k:"k2",lo:"TAE-2.1.1",q:"El SSP permite consultar su estado interno por un endpoint de diagnóstico y escribe logs estructurados. ¿Qué propiedad de testabilidad ilustran estas facilidades?",
  op:["Controlabilidad","Observabilidad","Portabilidad","Escalabilidad"],
  c:1,e:"Poder ver estados, salidas y trazas es observabilidad. La controlabilidad sería poder fijar entradas y estados (p. ej., un endpoint para precargar datos)."},
 {cap:2,k:"k2",lo:"TAE-2.1.1",q:"¿Cuándo debe diseñarse la capacidad de ser probado (testabilidad) del SSP?",
  op:["Después de terminar toda la automatización","En paralelo con el diseño e implementación del propio SSP, colaborando con desarrollo","Solo si fallan las pruebas","Nunca: es responsabilidad exclusiva del equipo de automatización"],
  c:1,e:"La testabilidad (interfaces para control y observabilidad) debe diseñarse e implementarse en paralelo con el SSP, en colaboración con desarrollo; añadirla a posteriori es mucho más costoso."},
 {cap:2,k:"k3",lo:"TAE-2.1.1",q:"Para preparar precondiciones de pruebas de IGU, un equipo navega por la propia IGU 3 minutos por test. ¿Qué mejora aprovecha mejor la controlabilidad del SSP?",
  op:["Grabar la navegación con captura/reproducción","Crear las precondiciones por IPA/API o inserción directa de datos, y reservar la IGU para lo que se quiere verificar","Reducir el número de precondiciones","Ejecutar los tests sin precondiciones"],
  c:1,e:"Usar interfaces de mayor controlabilidad (IPA/API, datos) para preparar el estado acelera y estabiliza las pruebas; la IGU se reserva para el objetivo de verificación."},
 {cap:2,k:"k4",lo:"TAE-2.2.1",q:"Hay que automatizar un proceso de pago que integra una pasarela externa con sandbox lento y cuotas, con cientos de ejecuciones diarias en CI. ¿Cuál es el mejor diseño?",
  op:["Llamar siempre a la pasarela real para máxima fidelidad","Virtualizar la pasarela para el volumen diario de CI y mantener un conjunto reducido de pruebas periódicas contra el sandbox real","Eliminar del alcance las pruebas de pago","Ejecutarlas una vez por semana"],
  c:1,e:"Equilibra fiabilidad y fidelidad: virtualización para el volumen diario (rápida, determinista, sin cuotas) y verificación periódica contra el servicio real para validar la integración."},
 {cap:2,k:"k2",lo:"TAE-2.2.2",q:"Al evaluar una herramienta, ¿cuál de estos es un hallazgo técnico relevante?",
  op:["El color del logotipo del fabricante","La compatibilidad con la tecnología del SSP y la capacidad de localizar y manipular sus elementos","Que sea la más cara, por ser señal de calidad","Que no requiera integración con la canalización"],
  c:1,e:"Los hallazgos técnicos giran en torno al encaje con el SSP: compatibilidad tecnológica, capacidad de interactuar con sus elementos, integración con CI/CD y gestión de prueba/defectos, y coste total. El precio no indica idoneidad."},
 {cap:2,k:"k2",lo:"TAE-2.1.1",q:"¿Qué aporta el uso de contenedores e infraestructura como código a la SAP?",
  op:["Eliminan la necesidad de datos de prueba","Entornos reproducibles y consistentes, reduciendo fallos por diferencias de configuración","Garantizan que el SSP no tenga defectos","Hacen innecesaria la gestión de configuración"],
  c:1,e:"Definir el entorno como código permite recrearlo de forma idéntica, reduciendo los falsos positivos por entornos divergentes. Sigue haciendo falta gestión de configuración y datos."},
 // ---- Capítulo 3 (8) ----
 {cap:3,k:"k2",lo:"TAE-3.1.1",q:"En la AAPg, ¿qué capacidad es responsable del logging y el reporting de las ejecuciones?",
  op:["Generación de pruebas","Definición de pruebas","Ejecución de pruebas","Adaptación de pruebas"],
  c:2,e:"La capacidad de ejecución orquesta las ejecuciones y registra e informa de sus resultados. La adaptación se limita a la interacción con el SSP."},
 {cap:3,k:"k2",lo:"TAE-3.1.1",q:"Un componente genera casos de prueba automáticamente a partir de un modelo de estados del SSP. ¿A qué capacidad de la AAPg pertenece?",
  op:["Generación de pruebas","Definición de pruebas","Ejecución de pruebas","Adaptación de pruebas"],
  c:0,e:"La derivación de casos a partir de un modelo (MBT) corresponde a la capacidad de generación: es el origen de los casos. Es una capacidad opcional."},
 {cap:3,k:"k2",lo:"TAE-3.1.2",q:"¿Con qué áreas define interfaces la AAPg, además de sus capacidades?",
  op:["Marketing, ventas y soporte","El SSP, la gestión de proyecto, la gestión de configuración y la gestión de la prueba","Solo con el equipo de desarrollo","Recursos humanos y finanzas"],
  c:1,e:"La AAPg define interfaces con el SSP, la gestión de proyecto (avance), la gestión de configuración (IC/EC, entornos, producto de prueba) y la gestión de la prueba (correspondencia casos↔casos automatizados)."},
 {cap:3,k:"k2",lo:"TAE-3.1.3",q:"En el MTAP por capas, ¿qué regla se aplica a la capa de guiones de prueba?",
  op:["Debe llamar directamente a las librerías base para ser más rápida","Invoca a la capa de lógica de negocio (pasos, flujos, llamadas IPA) y NO debe llamar directamente a las librerías base","Contiene las librerías independientes del SSP","Es la que se conecta físicamente al SSP"],
  c:1,e:"Los guiones de prueba invocan a la lógica de negocio (pasos, flujos, llamadas IPA) y no deben llamar directamente a las librerías base; eso preserva la separación por capas y la mantenibilidad."},
 {cap:3,k:"k2",lo:"TAE-3.1.4",q:"¿Qué distingue al enfoque keyword-driven del data-driven?",
  op:["Keyword-driven no permite usar datos externos","Keyword-driven añade palabras clave que representan acciones de negocio, permitiendo componer pruebas sin programar","Data-driven es más sofisticado que keyword-driven","Son el mismo enfoque con otro nombre"],
  c:1,e:"El keyword-driven se construye sobre el data-driven: además de externalizar datos, define un vocabulario de acciones (keywords) con el que perfiles no técnicos componen casos."},
 {cap:3,k:"k3",lo:"TAE-3.1.3",q:"Una SAP mezcla en cada guion la lógica del caso, los localizadores, datos en duro y llamadas directas al driver. ¿Qué refactorización se alinea con la arquitectura?",
  op:["Unificar todos los guiones en un único fichero","Separar responsabilidades por capas del MTAP: datos a definición/data-driven, interacción con el SSP a adaptación (Page Object/adaptadores), dejando en los guiones la lógica del caso","Convertir los guiones a captura/reproducción","Duplicar los guiones como copia de seguridad"],
  c:1,e:"El MTAP promueve separar responsabilidades por capas (guiones, lógica de negocio, librerías base) y aislar la interacción con el SSP en la adaptación; esa separación reduce estructuralmente el mantenimiento."},
 {cap:3,k:"k2",lo:"TAE-3.1.4",q:"¿Cuál es una característica del enfoque DGC (BDD) aplicado a la automatización?",
  op:["Los escenarios se escriben en lenguaje próximo al negocio (Dado/Cuando/Entonces) y se vinculan a código de automatización","Elimina la colaboración entre negocio y desarrollo","Solo es aplicable a pruebas unitarias","Impide reutilizar pasos entre escenarios"],
  c:0,e:"El DGC/BDD usa escenarios legibles por negocio (Dado/Cuando/Entonces) vinculados a pasos reutilizables; aunque es una metodología de desarrollo, bien aplicada produce casos automatizados."},
 {cap:3,k:"k3",lo:"TAE-3.1.5",q:"Para reducir la duplicación y ocultar la complejidad de las librerías base reutilizables, ¿qué patrones/principios de diseño son adecuados?",
  op:["Codificación rígida y copiar-pegar","Herencia y fachadas (y, en IGU, el patrón Page Object)","Captura/reproducción","Aumentar el número de capas del MTAP al máximo"],
  c:1,e:"La herencia y las fachadas permiten reutilizar y ocultar la complejidad de las librerías base; el Page Object encapsula localizadores e interacciones de IGU. Conviene mantener pocas capas en el MTAP."},
 // ---- Capítulo 4 (5) ----
 {cap:4,k:"k2",lo:"TAE-4.1.1",q:"¿Cuál es el propósito principal de un proyecto piloto de automatización?",
  op:["Generar beneficios económicos inmediatos","Validar en pequeño el enfoque, las herramientas, los niveles y los plazos, e integrarlo pronto en IC/EC antes de escalar","Sustituir la fase de selección de herramientas","Automatizar el 100 % de los casos del proyecto"],
  c:1,e:"El piloto valida en pequeño lenguaje, herramientas, niveles y enfoque, sacando dificultades a la luz pronto (integrándolo en IC/EC) para decidir cómo escalar. No se le exige ROI inmediato ni cobertura total."},
 {cap:4,k:"k2",lo:"TAE-4.3.1",q:"¿Cuál es la causa más habitual de esfuerzo de mantenimiento del testware?",
  op:["Los cambios en el SSP","Las actualizaciones del sistema operativo de los probadores","La rotación del personal de desarrollo","El crecimiento del número de usuarios finales"],
  c:0,e:"Cuando el SSP evoluciona (IGU, IPA, flujos), el testware debe adaptarse. Por eso la abstracción (concentrar en la adaptación el conocimiento de las interfaces) y el código limpio son la mejor inversión para reducir ese coste."},
 {cap:4,k:"k3",lo:"TAE-4.3.1",q:"Un guion de automatización tiene URLs y credenciales incrustadas (hardcoded) que cambian con frecuencia. ¿Qué práctica de mantenibilidad lo corrige?",
  op:["Añadir más comentarios","Evitar la codificación rígida externalizando los datos (data-driven) y usando constantes/configuración","Aumentar las esperas fijas","Reducir el número de casos de prueba"],
  c:1,e:"La codificación rígida dispara el mantenimiento. Externalizar datos a una fuente común y usar constantes/configuración concentra los puntos a mantener cuando los valores cambian."},
 {cap:4,k:"k2",lo:"TAE-4.2.1",q:"Una librería de terceros usada por la SAP publica una actualización obligatoria. ¿Qué riesgo de despliegue hay que gestionar?",
  op:["Ninguno: las actualizaciones nunca afectan al comportamiento","La actualización (p. ej., de arneses/agentes/dispositivos) puede alterar el comportamiento de la SAP, por lo que hay que verificarla tras el cambio","El SSP dejará de compilar","Los datos de prueba quedarán cifrados"],
  c:1,e:"Las actualizaciones de arneses, agentes y dependencias son un riesgo técnico de despliegue: pueden cambiar el comportamiento de la SAP. Se aplican de forma controlada y se verifica la SAP después."},
 {cap:4,k:"k3",lo:"TAE-4.1.1",q:"Un caso manual de 45 pasos (alta, facturación y baja) se va a automatizar. ¿Cuál es la mejor estrategia?",
  op:["Automatizarlo como un único test de 45 pasos","Dividirlo en tests independientes con precondiciones programáticas y verificaciones propias","Automatizar solo el primer paso","Descartarlo por ser largo"],
  c:1,e:"Un monolito de 45 pasos es frágil y difícil de diagnosticar. Dividir en tests independientes mejora el diagnóstico, la paralelización y el mantenimiento: el caso manual no se traduce 1:1, se rediseña."},
 // ---- Capítulo 5 (5) ----
 {cap:5,k:"k3",lo:"TAE-5.1.1",q:"Una canalización tarda 3 h porque ejecuta toda la suite E2E en cada commit y los desarrolladores ya no miran los resultados. ¿Cuál es la mejor reorganización?",
  op:["Ejecutar en cada commit solo suites rápidas y estables como puertas de calidad, y mover las E2E largas a etapas posteriores o nocturnas","Eliminar las E2E del todo","Ejecutar la canalización una vez por semana","Pedir commits menos frecuentes"],
  c:0,e:"Escalonar por velocidad y fiabilidad: feedback rápido en cada commit (componente/integración como puertas de calidad) y las largas en etapas posteriores o regresión nocturna. Eliminar cobertura o espaciar la canalización rompe la IC."},
 {cap:5,k:"k2",lo:"TAE-5.1.3",q:"¿Qué verifican las pruebas de contrato?",
  op:["El contrato laboral del equipo de QA","Que consumidor y proveedor de una interfaz cumplen un contrato compartido, sin necesidad de la integración completa","Los requisitos no funcionales de rendimiento","Que los datos de producción pueden copiarse al entorno de prueba"],
  c:1,e:"En la prueba de contrato, consumidor y proveedor verifican por separado que respetan un contrato común; detectan rupturas de compatibilidad pronto y sin desplegar todos los servicios juntos."},
 {cap:5,k:"k2",lo:"TAE-5.1.2",q:"¿Qué elementos debe cubrir la gestión de configuración del producto de prueba en automatización?",
  op:["Únicamente los guiones de prueba","La configuración del entorno de prueba, los datos de prueba y los juegos/casos de prueba, coherentes con la versión del SSP","Solo los resultados de las ejecuciones","Únicamente las licencias de las herramientas"],
  c:1,e:"Como la automatización corre en múltiples entornos y versiones del SSP, hay que versionar de forma coherente el entorno, los datos y los juegos de prueba (p. ej., con etiquetas/ramas o conmutadores de prestación)."},
 {cap:5,k:"k3",lo:"TAE-5.1.3",q:"Para automatizar pruebas de una IPA/API, ¿qué información sobre dependencias es crucial disponer?",
  op:["El color de la interfaz gráfica","Las conexiones entre las IPA (qué lógica es comprobable y cómo se relacionan) y su documentación como línea base (parámetros, encabezados, solicitud/respuesta)","El número de usuarios finales","La marca del servidor"],
  c:1,e:"Para una estrategia de automatización de IPA/API hay que entender las conexiones entre interfaces y disponer de su documentación (parámetros, encabezados, tipos de solicitud/respuesta) como línea base."},
 {cap:5,k:"k2",lo:"TAE-5.1.1",q:"En una canalización que separa construcción y despliegue, ¿qué pruebas forman parte típicamente de la fase de construcción?",
  op:["Las pruebas de aceptación de usuario","Las pruebas de componente e integración de componentes, que actúan como puerta de calidad","Las pruebas de sistema de extremo a extremo","Las pruebas no funcionales de carga"],
  c:1,e:"Componente e integración de componentes van en la construcción y actúan como puertas de calidad; si tienen éxito, se despliega. Sistema/integración de sistemas suelen ir en despliegue/entrega continua."},
 // ---- Capítulo 6 (5) ----
 {cap:6,k:"k2",lo:"TAE-6.1.2",q:"¿Por qué es crítica la fiabilidad de la SAP (proporción de fallos que son falsos positivos o fallos de SAP)?",
  op:["Porque determina el coste de las licencias","Porque una SAP con muchos fallos que no corresponden a defectos del SSP pierde la confianza del equipo y deja de consultarse","Porque los falsos positivos indican defectos graves del SSP","Porque es la única métrica que exige el syllabus"],
  c:1,e:"Si los fallos casi nunca corresponden a defectos reales del SSP (falsos positivos / fallos de SAP), el equipo deja de investigar los resultados y la solución pierde su valor. La fiabilidad es la métrica de salud principal."},
 {cap:6,k:"k3",lo:"TAE-6.1.2",q:"Una prueba falla pero el resultado real y el esperado del SSP coinciden. ¿Qué estado y acción son correctos?",
  op:["Estado «fallo» del SSP: abrir un defecto en el SSP","Estado «fallo de SAP»: el defecto está en la solución de automatización (o hay un desajuste invisible), hay que corregir la SAP","Estado «paso»: ignorar el resultado","Es un defecto del compilador"],
  c:1,e:"Si el SSP se comporta como se espera pero la prueba falla, el estado correcto es «fallo de SAP»: el defecto está en la solución de automatización, no en el SSP."},
 {cap:6,k:"k2",lo:"TAE-6.1.1",q:"¿Qué debería contener como mínimo el registro de un caso fallido para ser útil?",
  op:["Solo el nombre del caso y el veredicto «fallido»","Qué caso se ejecutó (con cronología), el estado, los pasos significativos y evidencias (capturas, trazas) para reproducir el fallo","El historial completo de commits del SSP","Los datos personales del autor del caso"],
  c:1,e:"El registro debe permitir diagnosticar sin re-ejecutar: caso, cronología, estado, pasos significativos y evidencias. Solo el veredicto obliga a depurar a ciegas."},
 {cap:6,k:"k2",lo:"TAE-6.1.2",q:"Un test de regresión lleva dos años pasando; una revisión descubre que su aserción compara un valor consigo mismo. ¿Qué riesgo ilustra?",
  op:["Falso positivo","Falso negativo","Defecto de regresión","Sobrecarga de mantenimiento"],
  c:1,e:"Un test que pasa aunque exista el defecto es un falso negativo: genera falsa confianza. Por eso conviene revisar los tests que «nunca fallan» y verificar que fallan cuando deben (cap. 7)."},
 {cap:6,k:"k2",lo:"TAE-6.1.3",q:"¿Cómo deben adaptarse los informes de avance a sus destinatarios?",
  op:["Todos reciben el log completo de cada ejecución","La gestión recibe tendencias y resúmenes visuales (semáforos, proporción aprobados/suspensos, fiabilidad); los técnicos, el detalle para diagnosticar","Solo la gestión recibe informes","Los informes se limitan al total de pruebas ejecutadas"],
  c:1,e:"El contenido se adapta a las decisiones de cada audiencia: la gestión decide sobre riesgo/avance (tendencias, visuales); los técnicos diagnostican (detalle). Enviar a todos el log completo no sirve a nadie."},
 // ---- Capítulo 7 (4) ----
 {cap:7,k:"k2",lo:"TAE-7.1.1",q:"Antes de la primera campaña en un entorno recién montado, ¿qué verificación corresponde?",
  op:["Ninguna: el entorno se verifica solo con el uso","Comprobar instalación/configuración, repetibilidad del montaje/desmontaje, conectividad con el SSP y que los componentes del MTAP están probados","Pedir a dirección que apruebe el entorno por escrito","Ejecutar la suite completa diez veces seguidas"],
  c:1,e:"La verificación del entorno (instalación, repetibilidad, conectividad, componentes del MTAP probados) evita campañas enteras con resultados inválidos por mala configuración."},
 {cap:7,k:"k3",lo:"TAE-7.1.2",q:"¿Cuál es la forma más directa de comprobar que un guion nuevo detecta realmente el tipo de defecto que dice verificar?",
  op:["Ejecutarlo diez veces contra la versión correcta del SSP y ver que pasa","Ejecutarlo contra una versión del SSP con el defecto presente (conocido o provocado) y comprobar que falla","Revisar que el nombre del guion describe su propósito","Comprobar que tarda menos de un minuto"],
  c:1,e:"Que pase repetidamente no demuestra detección (podría no tener aserciones). La evidencia es que falle cuando el defecto está presente: «probar los tests»."},
 {cap:7,k:"k2",lo:"TAE-7.1.3",q:"En una revisión del código de prueba, ¿qué hallazgo compromete más la validez de los veredictos?",
  op:["Comentarios desactualizados","Un guion sin ninguna aserción (resultados no concluyentes; pasa siempre)","Nombres de variables en idiomas mezclados","Funciones de más de 30 líneas"],
  c:1,e:"Sin aserciones, el guion pasa siempre y cualquier defecto pasa inadvertido (falso negativo). Los demás hallazgos afectan a la mantenibilidad, no a la validez del veredicto."},
 {cap:7,k:"k3",lo:"TAE-7.1.3",q:"Un guion falla de forma intermitente sin cambios en el SSP. ¿Cuál es el primer paso adecuado según la verificación de la solución?",
  op:["Marcarlo como aprobado manualmente","Hacer análisis de causa raíz (registros, recursos, montaje/desmontaje, pruebas aisladas) ya que el defecto puede estar en el caso, el SSP, el MTAP, el hardware o la red; retirarlo del juego activo si no es fiable","Duplicar el guion","Borrarlo sin análisis"],
  c:1,e:"Un guion intermitente exige análisis de causa raíz controlado (puede estar en el caso, SSP, MTAP, hardware o red). Si no da resultado fiable, se retira del juego activo y se analiza aparte; aprobarlo a mano o duplicarlo oculta el problema."},
 // ---- Capítulo 8 (3) ----
 {cap:8,k:"k2",lo:"TAE-8.1.1",q:"¿Cuál de las siguientes es una oportunidad de mejora continua basada en datos?",
  op:["Congelar el testware para que nadie lo modifique","Usar un histograma de pruebas para identificar casos frágiles (flaky) y refactorizarlos","Desactivar el logging para acelerar","Ejecutar todos los tests en todas las etapas"],
  c:1,e:"El histograma de pruebas revela tendencias y casos frágiles candidatos a refactorización. Congelar el testware o desactivar el logging destruyen la capacidad de mejora y diagnóstico."},
 {cap:8,k:"k4",lo:"TAE-8.1.2",q:"El mantenimiento de la SAP crece un 15 % por trimestre mientras la suite crece un 3 %. ¿Qué conclusión y acción son razonables?",
  op:["Es lo normal: no hacer nada","Hay deuda creciente en el testware: planificar refactorización (consolidar duplicados, reforzar la abstracción, estabilizar esperas)","Congelar el SSP","Duplicar el equipo cada trimestre"],
  c:1,e:"Un mantenimiento que crece mucho más rápido que la suite señala deuda técnica. La respuesta es refactorizar y reforzar la abstracción; añadir personas o congelar el SSP no corrige la causa."},
 {cap:8,k:"k2",lo:"TAE-8.1.4",q:"¿Qué aporta una herramienta de validación de esquemas como mejora de la SAP?",
  op:["Cifra los resultados de prueba","Comprueba que las respuestas (IPA/API o BD) cumplen la especificación (elementos obligatorios y tipos) sin aserciones individuales, acortando el código","Sustituye al control de versiones","Garantiza que el servicio no tiene defectos"],
  c:1,e:"La validación de esquemas verifica elementos obligatorios y tipos según el esquema sin escribir aserciones una a una, haciendo el código más corto y aumentando la eficiencia de detección de defectos."}
];

/* =========================================================
   CONJUNTOS DE EXAMEN (el ejemplo oficial está enlazado en Recursos)
========================================================= */
/* =========================================================
   EXAMEN DE PRÁCTICA · SET 2 (40 preguntas originales nuevas)
   Distribución oficial: C1=4, C2=6, C3=8, C4=5, C5=5, C6=5, C7=4, C8=3
========================================================= */
const EXAMEN2=[
 // ---- Capítulo 1 (4) ----
 {cap:1,k:"k2",lo:"TAE-1.1.1",q:"¿Cuál de las siguientes pruebas se beneficia especialmente de la automatización por ser inviable a mano?",
  op:["Una evaluación subjetiva de la estética","La ejecución de miles de combinaciones en paralelo o en tiempo real","Una sesión de prueba exploratoria","La valoración de la experiencia de usuario"],
  c:1,e:"La automatización posibilita pruebas imposibles manualmente: ejecución en paralelo, en tiempo real o remota. Lo subjetivo y lo exploratorio dependen del juicio humano."},
 {cap:1,k:"k2",lo:"TAE-1.2.1",q:"¿Qué afirmación sobre la automatización en el modelo en cascada es correcta?",
  op:["La ejecución de pruebas se concentra en la fase de requisitos","La implementación de la automatización suele ocurrir en paralelo o tras la fase de implementación, y la ejecución en la de verificación","No es posible automatizar en cascada","La automatización sustituye la fase de mantenimiento"],
  c:1,e:"En cascada, los componentes no están listos hasta tarde: la automatización se implementa en paralelo o tras la implementación y la ejecución se concentra en la verificación."},
 {cap:1,k:"k3",lo:"TAE-1.2.2",q:"Un equipo quiere que perfiles no programadores puedan mantener pruebas de un SSP estable y sencillo. ¿Qué tipo de herramienta encaja mejor como punto de partida?",
  op:["Un MTAP a medida en lenguaje compilado","Una herramienta baja en código / sin código","La herramienta más cara del mercado","Ninguna: deben aprender a programar primero"],
  c:1,e:"Cuando el equipo tiene poca experiencia en programación, una solución baja en código/sin código es viable; la selección debe encajar con las competencias del equipo y el SSP."},
 {cap:1,k:"k2",lo:"TAE-1.1.1",q:"¿Cuál es una limitación intrínseca (no una desventaja de coste) de la automatización?",
  op:["El tiempo de mantenimiento del testware","Solo se verifica lo que las pruebas están programadas para comprobar","La inversión inicial de la solución","La posibilidad de introducir defectos"],
  c:1,e:"Que solo se verifique lo programado es una limitación intrínseca. Mantenimiento, inversión inicial y riesgo de introducir defectos son desventajas de coste/esfuerzo."},
 // ---- Capítulo 2 (6) ----
 {cap:2,k:"k2",lo:"TAE-2.1.1",q:"Un SSP ofrece un endpoint para precargar datos y dejar el sistema en un estado concreto antes de cada prueba. ¿Qué propiedad de testabilidad facilita?",
  op:["Observabilidad","Controlabilidad","Portabilidad","Usabilidad"],
  c:1,e:"Poder fijar entradas y llevar el SSP a un estado conocido es controlabilidad. Observabilidad sería poder ver salidas, estados y trazas."},
 {cap:2,k:"k2",lo:"TAE-2.1.2",q:"¿Por qué conviene automatizar por debajo de la IGU (en IPA/servicio) siempre que sea posible?",
  op:["Porque la IGU no puede automatizarse","Porque es más rápido, estable y barato de mantener, reservando la IGU para lo que solo ella puede verificar","Porque la IPA no necesita mantenimiento","Porque elimina la necesidad de datos de prueba"],
  c:1,e:"Automatizar por IPA/servicio es más rápido, estable y barato; la IGU se reserva para verificar aspectos propios de la interfaz."},
 {cap:2,k:"k4",lo:"TAE-2.2.1",q:"Un SSP depende de un servicio de terceros con cuotas estrictas y respuestas variables. Hay que ejecutar cientos de pruebas diarias. ¿Cuál es el mejor diseño de la SAP?",
  op:["Llamar siempre al servicio real para máxima fidelidad","Virtualizar el servicio para el volumen diario y mantener pocas pruebas periódicas contra el real","Eliminar las pruebas que lo usen","Reintentar hasta agotar la cuota"],
  c:1,e:"Virtualizar para el volumen (rápido, determinista, sin cuotas) y validar periódicamente contra el real equilibra fiabilidad y fidelidad."},
 {cap:2,k:"k2",lo:"TAE-2.1.1",q:"¿Cuándo debe abordarse la capacidad de ser probado (testabilidad) del SSP?",
  op:["Tras la primera campaña de pruebas fallida","Diseñándola e implementándola en paralelo con el propio SSP","Solo en la fase de mantenimiento","Únicamente cuando lo pida la dirección"],
  c:1,e:"La testabilidad (interfaces para control y observabilidad) debe diseñarse e implementarse en paralelo con el SSP; añadirla después es mucho más costoso."},
 {cap:2,k:"k2",lo:"TAE-2.2.2",q:"Al evaluar herramientas, ¿qué hallazgo técnico es más relevante para un SSP con IGU compleja?",
  op:["El logotipo del fabricante","La capacidad de localizar y manipular de forma fiable los elementos de la IGU del SSP","El número de premios de la herramienta","Que no se integre con la canalización"],
  c:1,e:"Un hallazgo técnico clave es si la herramienta puede localizar e interactuar de forma fiable con los elementos del SSP; junto a la integración con CI/CD y el coste total."},
 {cap:2,k:"k4",lo:"TAE-2.2.1",q:"Un IAP analiza un SSP nuevo para decidir la SAP. ¿Qué información del SSP es prioritaria para esa decisión?",
  op:["El color corporativo de la aplicación","Las interfaces que expone, su tecnología, los niveles de prueba a cubrir y las restricciones (seguridad, conectividad)","El número de empleados de la empresa","La antigüedad del logotipo"],
  c:1,e:"Analizar el SSP (K4) implica examinar sus interfaces, tecnología, niveles a cubrir, datos/entornos y restricciones, para derivar qué herramientas y adaptadores hacen falta."},
 // ---- Capítulo 3 (8) ----
 {cap:3,k:"k2",lo:"TAE-3.1.1",q:"¿Qué capacidad de la AAPg es responsable de adaptar las pruebas a los distintos componentes e interfaces del SSP?",
  op:["Generación","Definición","Ejecución","Adaptación"],
  c:3,e:"La capacidad de adaptación conecta la solución con el SSP mediante adaptadores (IPA, protocolos, servicios). La generación crea casos; la ejecución los corre y registra."},
 {cap:3,k:"k2",lo:"TAE-3.1.3",q:"En el MTAP por capas, una librería que es independiente de cualquier SSP y reutilizable entre proyectos pertenece a:",
  op:["La capa de guiones de prueba","La capa de lógica de negocio","La capa de librerías base","La interfaz de gestión de proyecto"],
  c:2,e:"Las librerías base son independientes del SSP y reutilizables por proyectos con la misma pila tecnológica. La lógica de negocio depende del SSP."},
 {cap:3,k:"k2",lo:"TAE-3.1.2",q:"¿Qué interfaz de la AAPg describe las canalizaciones IC/EC, los entornos y el producto de prueba?",
  op:["La interfaz con el SSP","La interfaz de gestión de proyecto","La interfaz de gestión de la configuración","La interfaz de gestión de la prueba"],
  c:2,e:"La interfaz de gestión de la configuración describe las canalizaciones IC/EC, los entornos y el producto de prueba. La de gestión de proyecto describe el avance."},
 {cap:3,k:"k2",lo:"TAE-3.1.4",q:"¿Qué enfoque de scripting alimenta los mismos guiones con conjuntos de datos externos (.csv, .xlsx, BD)?",
  op:["Captura/reproducción","Guionizado lineal","Prueba guiada por datos (data-driven)","Guionizado sin estructura"],
  c:2,e:"La prueba guiada por datos parametriza guiones estructurados con datos externos, permitiendo ampliar casos rápido y barato."},
 {cap:3,k:"k3",lo:"TAE-3.1.4",q:"Para que analistas de negocio sin perfil técnico compongan casos combinando acciones como «alta_cliente» o «emitir_factura», ¿qué enfoque encaja mejor?",
  op:["Captura/reproducción","Guionizado lineal","Guiado por palabras clave (keyword-driven)","Scripting ad hoc"],
  c:2,e:"El keyword-driven define un vocabulario de acciones de negocio implementadas por el equipo técnico; los perfiles no programadores componen casos con esas keywords y datos."},
 {cap:3,k:"k2",lo:"TAE-3.1.4",q:"En el enfoque DGP (TDD) aplicado a la automatización, ¿cuál es la secuencia correcta?",
  op:["Codificar, probar y documentar","Rojo (prueba que falla), verde (código que la satisface) y refactorizar","Refactorizar, codificar y grabar","Grabar, reproducir y exportar"],
  c:1,e:"El DGP sigue rojo → verde → refactorizar: una prueba que falla, el código mínimo que la pasa y luego optimización. Aunque es metodología de desarrollo, produce casos automatizados."},
 {cap:3,k:"k3",lo:"TAE-3.1.3",q:"Una capa de guiones de prueba llama directamente a las librerías base, saltándose la lógica de negocio. ¿Por qué es un problema de diseño?",
  op:["Mejora la mantenibilidad","Rompe la separación por capas del MTAP y dificulta el mantenimiento al acoplar guiones con detalles de bajo nivel","Acelera la ejecución sin contrapartidas","Es la práctica recomendada"],
  c:1,e:"Los guiones deben invocar a la lógica de negocio, no a las librerías base directamente; saltarse capas acopla los guiones a detalles de bajo nivel y degrada la mantenibilidad."},
 {cap:3,k:"k2",lo:"TAE-3.1.5",q:"¿Qué patrón de diseño oculta la complejidad de las librerías base ofreciendo una interfaz simplificada, y por qué conviene mantener pocas capas en el MTAP?",
  op:["Codificación rígida; porque las herramientas no admiten más de dos capas","Fachada; porque introducir una capa por cada propósito puede complicar el diseño sin aportar valor proporcional","Captura/reproducción; porque las capas impiden la reutilización","Herencia rígida; porque reduce la cobertura de código"],
  c:1,e:"El patrón fachada simplifica el acceso a las librerías base; y, aunque las capas aportan separación, conviene mantener pocas porque una capa por cada propósito puede complicar el diseño sin valor proporcional."},
 // ---- Capítulo 4 (5) ----
 {id:"s2-19",cap:4,sec:"4.1",k:"k3",q:"Durante un piloto, ¿qué práctica ayuda a sacar a la luz dificultades de integración de forma temprana?",
  op:["Esperar al final para integrar todo de golpe","Integrar la solución en IC/EC desde pronto durante el piloto","Evitar cualquier integración hasta el despliegue masivo","Probar solo manualmente durante el piloto"],
  c:1,e:"Integrar el piloto en IC/EC desde pronto revela temprano dificultades en el SSP, la SAP o la integración de herramientas, antes de comprometer el enfoque."},
 {id:"s2-20",cap:4,sec:"4.2",k:"k2",q:"¿Qué nivel de registro (log) se usa para un evento de error que lleva a abortar la ejecución de la prueba?",
  op:["Info","Advertencia","Fatal","Traza"],
  c:2,e:"«Fatal» registra eventos de error que provocan abortar la ejecución. «Error» implica que el caso falla; «Advertencia» no rompe el flujo."},
 {id:"s2-21",cap:4,sec:"4.2",k:"k2",q:"¿Cuál de estos es un riesgo técnico de despliegue de la automatización?",
  op:["Que el equipo documente demasiado","Las actualizaciones automáticas de arneses, agentes o dispositivos que cambian el comportamiento","Usar control de versiones para el testware","Aplicar principios de código limpio"],
  c:1,e:"Las actualizaciones automáticas de arneses/agentes/dispositivos son un riesgo técnico de despliegue; se mitigan con alimentación, red y planes de configuración adecuados."},
 {id:"s2-22",cap:4,sec:"4.3",k:"k3",q:"Un IAP encuentra métodos de 200 líneas con muchos parámetros y valores incrustados. Según los principios de código limpio, ¿qué debe hacer?",
  op:["Dejarlo así para no introducir defectos","Refactorizar: métodos más cortos, menos parámetros, evitar codificación rígida y usar nombres con sentido","Eliminar las pruebas afectadas","Convertir todo a captura/reproducción"],
  c:1,e:"El código limpio recomienda métodos cortos, pocos parámetros, evitar el hardcoding (externalizar datos) y nomenclatura con sentido, para mejorar la mantenibilidad."},
 {id:"s2-23",cap:4,sec:"4.2",k:"k2",q:"¿Por qué el empaquetado y el control de versiones del producto de prueba son importantes en el despliegue?",
  op:["Porque el testware no necesita versionarse","Porque su control de versiones es tan importante como el del SSP, y puede necesitar subirse a un repositorio para compartirlo","Porque reduce la cobertura de pruebas","Porque elimina la necesidad de registro"],
  c:1,e:"El control de versiones del producto de prueba es tan importante como el del SSP; el empaquetado permite subirlo a un repositorio (local o nube) para compartirlo en la organización."},
 // ---- Capítulo 5 (5) ----
 {id:"s2-24",cap:5,sec:"5.1.1",k:"k2",q:"En una canalización que separa construcción y despliegue, ¿qué pruebas actúan como puerta de calidad en la fase de construcción?",
  op:["Las pruebas de aceptación de usuario","Las pruebas de componente e integración de componentes","Las pruebas de carga","Las pruebas exploratorias"],
  c:1,e:"Componente e integración de componentes forman parte de la construcción y actúan como puertas de calidad; si tienen éxito, se despliega."},
 {id:"s2-25",cap:5,sec:"5.1.1",k:"k3",q:"Se quiere que un despliegue se revierta automáticamente si fallan las pruebas. ¿Qué enfoque de integración conviene?",
  op:["Ejecutar las pruebas como canalización independiente disparada tras el despliegue","Ejecutar las pruebas como parte de la fase de despliegue, de modo que un fallo haga fallar (y revertir) el despliegue","No integrar las pruebas en la canalización","Ejecutar las pruebas solo manualmente"],
  c:1,e:"Integradas en la fase de despliegue, las pruebas actúan como puerta de calidad: un fallo hace fallar y poder revertir el despliegue. La contrapartida es que re-ejecutarlas exige volver a desplegar."},
 {id:"s2-26",cap:5,sec:"5.1.3",k:"k2",q:"¿Qué afirmación sobre la prueba de contrato es correcta?",
  op:["Equivale exactamente a la validación de esquemas","Requiere que consumidor y proveedor consensúen las interacciones y verifica que ambos se adhieren a un contrato compartido","Necesita desplegar todos los servicios juntos","Solo la pueden hacer los desarrolladores del proveedor"],
  c:1,e:"La prueba de contrato va más allá de la validación de esquemas: ambas partes consensúan las interacciones permitidas y verifican por separado que cumplen el contrato, sin integración completa."},
 {id:"s2-27",cap:5,sec:"5.1.3",k:"k2",q:"Para automatizar la prueba de una IPA/API, ¿qué dependencia es crucial conocer?",
  op:["El color de la interfaz gráfica","Las conexiones entre interfaces y la documentación de la IPA (parámetros, encabezados, solicitud/respuesta)","La marca del servidor de base de datos","El número de usuarios concurrentes en producción"],
  c:1,e:"La estrategia de automatización de IPA/API necesita conocer las conexiones entre interfaces y disponer de la documentación (parámetros, encabezados, tipos de solicitud/respuesta) como línea base."},
 {id:"s2-28",cap:5,sec:"5.1.2",k:"k2",q:"¿Cómo puede emparejarse de forma exacta la versión del SSP con el producto de prueba que la verifica?",
  op:["Usando siempre la última versión de ambos sin control","Entregando el producto de prueba con el SSP usando la misma versión, mediante etiquetas o ramas del control de configuración","Ignorando la versión del SSP","Guardando solo los resultados de ejecución"],
  c:1,e:"Para una coincidencia exacta, el producto de prueba se entrega con el SSP en la misma versión (con etiquetas/ramas) o se usan conmutadores de prestación por entrega/entorno."},
 // ---- Capítulo 6 (5) ----
 {id:"s2-29",cap:6,sec:"6.1.1",k:"k2",q:"¿Qué estado de ejecución se aplica cuando el defecto NO está en el SSP sino en la solución de automatización?",
  op:["Paso","Fallo","Fallo de SAP","No iniciado"],
  c:2,e:"El estado «fallo de SAP» indica que el defecto está en la solución de automatización, no en el SSP. La organización debe definir estos estados de forma clara y consistente."},
 {id:"s2-30",cap:6,sec:"6.1.2",k:"k3",q:"Tras una ejecución, TODOS los casos fallan con fallos aparentemente reales. ¿Qué hipótesis conviene investigar primero?",
  op:["El SSP tiene defectos en todas sus funcionalidades","El entorno de prueba no estaba disponible (total o parcialmente): revisar los registros del SSP confirma la interrupción","Las aserciones son demasiado estrictas","Hay que abrir un defecto por cada caso"],
  c:1,e:"Que todos los casos fallen a la vez apunta a un entorno de prueba no disponible; los registros del SSP muestran la interrupción. La acción es estabilizar el entorno, no abrir defectos masivos."},
 {id:"s2-31",cap:6,sec:"6.1.1",k:"k2",q:"¿Para qué sirve mejorar el software de prueba subyacente (p. ej., registrar hora de inicio/fin)?",
  op:["Solo afecta a un guion concreto","La mejora se aplica a todos los guiones de nivel superior que lo usan","Reduce la fiabilidad de los resultados","Elimina la necesidad de aserciones"],
  c:1,e:"Como la SAP tiene un producto de prueba en su núcleo, mejorar el software subyacente (registrar uso, tiempos) beneficia a todos los guiones de nivel superior que lo invocan."},
 {id:"s2-32",cap:6,sec:"6.1.1",k:"k2",q:"¿Qué facilita correlacionar los registros de la SAP con los del SSP para hallar la causa raíz?",
  op:["Usar colores distintos en la consola","Sincronizar los registros con marcas de tiempo y usar un ID de correlación/traza único por interacción","Eliminar los registros del SSP","Registrar solo los casos que pasan"],
  c:1,e:"Sincronizar registros por marca de tiempo y añadir un ID de correlación/traza único a cada interacción permite seguir el comportamiento del sistema y correlacionar SAP y SSP."},
 {id:"s2-33",cap:6,sec:"6.1.3",k:"k2",q:"Al elaborar un informe de avance, ¿qué prefiere típicamente la audiencia de gestión?",
  op:["El registro completo de bajo nivel de cada caso","Resúmenes visuales y tendencias (proporción aprobados/suspensos, fiabilidad), con opción de profundizar","Únicamente el código de los guiones","La lista de commits del SSP"],
  c:1,e:"La gestión se centra en tendencias y resúmenes visuales (semáforos, proporciones, fiabilidad) y profundiza si lo necesita; el detalle de bajo nivel es para los implicados técnicos."},
 // ---- Capítulo 7 (4) ----
 {id:"s2-34",cap:7,sec:"7.1.1",k:"k2",q:"Antes de utilizar una SAP recién instalada en un nuevo entorno, ¿qué precondición conviene verificar?",
  op:["Que la dirección apruebe el entorno por escrito","La conectividad con los sistemas/interfaces internos y externos y los permisos para logging y reporting","Que la suite completa se ejecute diez veces","Que el SSP no tenga ningún defecto"],
  c:1,e:"Hay que verificar conectividad con sistemas e interfaces y permisos para registro e información, además de instalación/configuración y repetibilidad del montaje, antes de fiarse de los veredictos."},
 {id:"s2-35",cap:7,sec:"7.1.1",k:"k2",q:"Un componente del MTAP que verifica objetos de IGU, ¿cómo debe probarse?",
  op:["No necesita prueba: es parte de la herramienta","Como cualquier software, individualmente y con una amplia gama de clases de objetos para asegurar que funciona","Solo ejecutando la suite completa una vez","Únicamente en producción"],
  c:1,e:"Los componentes del MTAP se prueban individualmente (funcional y no funcionalmente). Un verificador de objetos de IGU debe probarse con muchas clases de objeto para confirmar su corrección."},
 {id:"s2-36",cap:7,sec:"7.1.3",k:"k3",q:"Un guion «pasa» de forma inesperada (debería haber fallado). ¿Qué conviene comprobar primero?",
  op:["Que el reloj del sistema es correcto","Si se cumplen todas las aserciones; si faltan aserciones, el resultado puede ser no concluyente","El color del informe","El número de usuarios del SSP"],
  c:1,e:"Un «pasa» inesperado puede deberse a aserciones ausentes o insuficientes, que hacen el resultado no concluyente. Hay que revisar las aserciones y hacer análisis de causa raíz."},
 {id:"s2-37",cap:7,sec:"7.1.4",k:"k2",q:"¿Qué aporta el análisis estático en un contexto DevSecOps?",
  op:["Ejecuta las pruebas de carga","Inspecciona el código (SSP o MTAP) sin ejecutarlo para hallar vulnerabilidades y defectos de forma proactiva y temprana en la canalización","Sustituye a la verificación del entorno","Mide el tiempo de respuesta del SSP"],
  c:1,e:"El análisis estático examina el código sin ejecutarlo, detecta vulnerabilidades/defectos y aplica estándares; en DevSecOps se integra pronto en la canalización para dar feedback inmediato."},
 // ---- Capítulo 8 (3) ----
 {id:"s2-38",cap:8,sec:"8.1.1",k:"k3",q:"Una herramienta basada en IA detecta que un localizador de IGU ha cambiado y ajusta el caso para que siga funcionando. ¿Cómo se denomina esta capacidad?",
  op:["Validación de esquemas","Autorreparación (self-healing)","Captura/reproducción","Histograma de pruebas"],
  c:1,e:"Mediante aprendizaje automático y reconocimiento de imágenes, la herramienta identifica nuevos selectores y aplica autorreparación al caso, acelerando el mantenimiento."},
 {id:"s2-39",cap:8,sec:"8.1.1",k:"k2",q:"¿Qué ventaja aporta la validación de esquemas al comprobar respuestas de una IPA/API?",
  op:["Sustituye al control de versiones","Verifica que los elementos obligatorios están presentes y sus tipos son correctos sin escribir aserciones una a una, acortando el código","Cifra las respuestas","Garantiza la ausencia de defectos en el servicio"],
  c:1,e:"La validación de esquemas comprueba presencia y tipo de los elementos según el esquema sin aserciones individuales, haciendo el código más corto y eficiente para detectar defectos."},
 {id:"s2-40",cap:8,sec:"8.1.2",k:"k4",q:"Un análisis del histograma de pruebas revela que ciertos casos fallan de forma intermitente sin relación con el SSP. ¿Qué recomendación de mejora es la adecuada?",
  op:["Ejecutarlos más veces para que acaben pasando","Identificarlos como frágiles (flaky) y refactorizarlos o replantear su implementación","Eliminar el histograma","Ignorarlos en los informes"],
  c:1,e:"El histograma ayuda a detectar casos frágiles; la mejora adecuada es refactorizarlos o replantear su implementación (esperas por condición, aislamiento), no ocultarlos."}
];

/* =========================================================
   EXAMEN DE PRÁCTICA · SET 3 «Análisis (K3/K4)» (40 preguntas)
   Misma distribución oficial por capítulo, pero con la mezcla
   cognitiva inclinada a aplicar/analizar: K2=11, K3=20, K4=9.
========================================================= */
const EXAMEN3=[
 // ---- Capítulo 1 (4): K2=2, K3=2 ----
 {id:"s3-01",cap:1,sec:"1.1",k:"k2",q:"¿Cuál de estas actividades NO forma parte de la definición de automatización de la prueba?",
  op:["Usar software para controlar y configurar conjuntos de prueba","Ejecutar pruebas de forma automatizada","Comparar los resultados reales con los esperados","Especificar los requisitos funcionales del SSP"],
  c:3,e:"La automatización abarca controlar/configurar, ejecutar y comparar resultados (más informar). Especificar los requisitos del SSP es una actividad de análisis del producto, no de la automatización en sí."},
 {id:"s3-02",cap:1,sec:"1.2",k:"k2",q:"En el modelo V, ¿qué es posible y recomendable respecto a los marcos de trabajo (MTAP)?",
  op:["Un único MTAP para toda la organización","Proporcionar un MTAP para cada nivel de prueba","No usar MTAP por ser un modelo secuencial","Posponer el MTAP a la fase de mantenimiento"],
  c:1,e:"En el modelo V cada fase de desarrollo tiene su nivel de prueba; proporcionar un MTAP para cada nivel (componente, integración, sistema, integración de sistemas, aceptación) es posible y recomendable."},
 {id:"s3-03",cap:1,sec:"1.2",k:"k3",q:"El SSP es un conjunto de servicios web sin IGU y el equipo es técnico, con experiencia en el mismo lenguaje del SSP. ¿Qué criterio de selección de herramienta aporta más ventaja?",
  op:["Elegir una herramienta sin código por sencillez","Elegir una herramienta cuyo lenguaje coincida con el del SSP, para depurar con desarrollo y la formación cruzada","Elegir la herramienta más conocida del mercado","Elegir una orientada a IGU para cubrir el futuro"],
  c:1,e:"Para servicios sin IGU y un equipo técnico, una herramienta del mismo lenguaje que el SSP facilita depurar junto a desarrollo y la formación cruzada; las soluciones sin código encajan más con equipos sin experiencia en programación."},
 {id:"s3-04",cap:1,sec:"1.1",k:"k3",q:"Un equipo quiere retroalimentación rápida de la calidad tras cada construcción y reducir el error humano en pruebas repetitivas. ¿Qué ventajas de la automatización está buscando?",
  op:["Eliminar por completo la prueba manual","Consistencia/repetibilidad de la ejecución y retroalimentación más rápida sobre la calidad del SSP","Garantizar que se encuentran todos los defectos","Suprimir el coste de mantenimiento"],
  c:1,e:"La automatización aporta ejecución consistente y repetible, menos error humano y feedback más rápido sobre la calidad. No elimina la prueba manual, no encuentra todos los defectos ni suprime el mantenimiento."},
 // ---- Capítulo 2 (6): K2=1, K3=2, K4=3 ----
 {id:"s3-05",cap:2,sec:"2.1",k:"k2",q:"¿Qué distingue a una «variable de despliegue» de una «variable de entorno del sistema» para mejorar la testabilidad?",
  op:["La de despliegue se fija antes de iniciar el despliegue; la del sistema se modifica por administración","Son exactamente lo mismo","La de despliegue solo existe en producción","La del sistema no afecta a la prueba"],
  c:0,e:"Ambas habilitan una prueba más sencilla, pero la variable de despliegue se establece antes de iniciar el despliegue, mientras que la del sistema se modifica a través de la administración de la aplicación."},
 {id:"s3-06",cap:2,sec:"2.1",k:"k3",q:"Para preparar precondiciones de pruebas de IGU, el equipo navega por la propia IGU 3 minutos por test. ¿Qué aprovecha mejor la controlabilidad del SSP?",
  op:["Grabar la navegación con captura/reproducción","Crear las precondiciones por IPA o inserción directa de datos y reservar la IGU para verificar","Reducir el número de precondiciones","Ejecutar sin precondiciones"],
  c:1,e:"Usar interfaces de mayor controlabilidad (IPA, datos) para fijar el estado acelera y estabiliza; la IGU se reserva para el objetivo de verificación."},
 {id:"s3-07",cap:2,sec:"2.1",k:"k3",q:"¿Cuál es el primer entorno en el que conviene monitorizar lo que ocurre en segundo plano durante el uso del SSP para investigar defectos con eficacia?",
  op:["El entorno de desarrollo local","El entorno de construcción","El entorno de integración","El entorno de producción exclusivamente"],
  c:2,e:"El entorno de integración ya dispone de una versión candidata integrada con otros sistemas; es el primero donde se recomienda monitorizar el segundo plano para investigar defectos/fallos con eficiencia."},
 {id:"s3-08",cap:2,sec:"2.2",k:"k4",q:"Analizas un SSP nuevo (web + IPA REST documentada + app móvil) para decidir la SAP. ¿Qué información es prioritaria para la decisión?",
  op:["El color corporativo y el logotipo de la aplicación","Las interfaces que expone, su tecnología, los niveles a cubrir, los datos/entornos y las restricciones","El número de empleados de la empresa","La antigüedad del proyecto"],
  c:1,e:"Analizar el SSP (K4) implica examinar interfaces, tecnología, niveles y tipos a cubrir, datos/entornos y restricciones, para derivar qué herramientas y adaptadores hacen falta."},
 {id:"s3-09",cap:2,sec:"2.2",k:"k4",q:"El SSP depende de una pasarela externa lenta y con cuotas, y hay que ejecutar cientos de pruebas diarias en CI. ¿Cuál es el mejor diseño de la SAP?",
  op:["Llamar siempre a la pasarela real para máxima fidelidad","Virtualizar la pasarela para el volumen diario y mantener pocas pruebas periódicas contra el sandbox real","Eliminar del alcance las pruebas que la usan","Reintentar hasta agotar la cuota diaria"],
  c:1,e:"Equilibra fiabilidad y fidelidad: virtualización para el volumen (rápida, determinista, sin cuotas) y verificación periódica contra el servicio real para validar la integración."},
 {id:"s3-10",cap:2,sec:"2.2",k:"k4",q:"En la tabla comparativa de herramientas, una cubre bien la IGU pero no la IPA, y otra al revés; el SSP necesita ambas. ¿Qué conclusión es razonable?",
  op:["Descartar la automatización por imposible","Aceptar que puede que ninguna herramienta cubra todos los requisitos y combinar herramientas según prioridades","Elegir siempre la más barata","Elegir la que cubra la IGU e ignorar la IPA"],
  c:1,e:"El syllabus advierte que puede no existir una única herramienta que cumpla todos los requisitos; la tabla comparativa ayuda a decidir, y a veces la solución es combinar herramientas priorizando por requisitos."},
 // ---- Capítulo 3 (8): K2=3, K3=5 ----
 {id:"s3-11",cap:3,sec:"3.1.1",k:"k2",q:"¿Qué capacidad de la AAPg orquesta las ejecuciones y se encarga del registro en bitácora y el suministro de información?",
  op:["Generación","Definición","Ejecución","Adaptación"],
  c:2,e:"La capacidad de ejecución corre los casos y produce el registro y los informes. La adaptación solo conecta con las interfaces del SSP."},
 {id:"s3-12",cap:3,sec:"3.1.1",k:"k2",q:"¿Qué interfaz de la AAPg describe las canalizaciones IC/EC, los entornos y el producto de prueba?",
  op:["La interfaz con el SSP","La interfaz de gestión del proyecto","La interfaz de gestión de la configuración","La interfaz de gestión de la prueba"],
  c:2,e:"La interfaz de gestión de la configuración describe IC/EC, entornos y producto de prueba. La de gestión del proyecto describe el avance del desarrollo de la automatización."},
 {id:"s3-13",cap:3,sec:"3.1.2",k:"k2",q:"Al diseñar la AAP (diseño técnico de la SAP), ¿cuál de estos aspectos debe abordarse?",
  op:["Únicamente el color de los informes","Selección de herramientas/librerías, conectividad (cortafuegos, BD, URLs, mocks/stubs, colas, protocolos), conexión a gestión de prueba/defectos y control de versiones","Solo el número de casos de prueba","Exclusivamente el presupuesto de marketing"],
  c:1,e:"La AAP aborda herramientas y librerías, desarrollo de complementos, requisitos de conectividad e interfaz, conexión a gestión de prueba y de defectos, y uso de control de versiones y repositorios."},
 {id:"s3-14",cap:3,sec:"3.1.1",k:"k3",q:"Un componente traduce las acciones abstractas de los tests en llamadas concretas a la IPA REST del SSP. ¿A qué capacidad de la AAPg pertenece?",
  op:["Generación","Definición","Ejecución","Adaptación"],
  c:3,e:"Todo lo que conecta la solución con las interfaces del SSP (IGU, IPA, protocolos) pertenece a la capacidad de adaptación."},
 {id:"s3-15",cap:3,sec:"3.1.3",k:"k3",q:"Revisando el MTAP, ves que la capa de guiones de prueba llama directamente a las librerías base, saltándose la lógica de negocio. ¿Por qué es un problema?",
  op:["Mejora la mantenibilidad","Rompe la separación por capas y acopla los guiones a detalles de bajo nivel, degradando el mantenimiento","Acelera la ejecución sin contrapartidas","Es la práctica recomendada"],
  c:1,e:"Los guiones deben invocar a la lógica de negocio, no a las librerías base directamente; saltarse capas acopla los guiones a detalles de bajo nivel y degrada la mantenibilidad."},
 {id:"s3-16",cap:3,sec:"3.1.4",k:"k3",q:"Hay que ejecutar el mismo flujo de validación con 200 combinaciones de entrada distintas. ¿Qué enfoque de scripting encaja mejor?",
  op:["Captura/reproducción","Guionizado lineal","Prueba guiada por datos (data-driven)","Guionizado sin estructura"],
  c:2,e:"La prueba guiada por datos parametriza un guion estructurado con un conjunto externo de datos, permitiendo cubrir muchas combinaciones sin duplicar lógica."},
 {id:"s3-17",cap:3,sec:"3.1.5",k:"k3",q:"Para garantizar que toda la automatización use una única instancia que se comunica con el SSP, ¿qué patrón aplicas?",
  op:["Page Object","Singleton","Data-driven","Captura/reproducción"],
  c:1,e:"El patrón singleton asegura una única instancia (un único controlador) que se comunica con el SSP."},
 {id:"s3-18",cap:3,sec:"3.1.4",k:"k3",q:"En el enfoque DGP (TDD) aplicado a la automatización, ¿cuál es la secuencia correcta?",
  op:["Codificar, probar y documentar","Rojo (prueba que falla), verde (código que la satisface) y refactorizar","Grabar, reproducir y exportar","Refactorizar, codificar y grabar"],
  c:1,e:"El DGP sigue rojo → verde → refactorizar: una prueba que falla, el código mínimo que la pasa y luego optimización conforme a código limpio."},
 // ---- Capítulo 4 (5): K2=1, K3=2, K4=2 ----
 {id:"s3-19",cap:4,sec:"4.2",k:"k2",q:"Entre los niveles de registro, ¿cuál ofrece aún más detalle que «Depuración», útil para investigación profunda?",
  op:["Info","Advertencia","Traza","Error"],
  c:2,e:"«Traza» es similar a «Depuración» pero con todavía más detalle. «Error» indica fallo del caso y «Advertencia» una condición que no rompe el flujo."},
 {id:"s3-20",cap:4,sec:"4.1",k:"k3",q:"Durante el piloto, ¿qué práctica saca a la luz dificultades de integración de forma temprana?",
  op:["Esperar al final para integrar todo de golpe","Integrar la solución en IC/EC desde pronto durante el piloto","Probar solo manualmente durante el piloto","Evitar cualquier integración hasta el despliegue masivo"],
  c:1,e:"Integrar el piloto en IC/EC desde pronto revela temprano dificultades en el SSP, la SAP o la integración general de herramientas."},
 {id:"s3-21",cap:4,sec:"4.3",k:"k3",q:"Un IAP encuentra métodos de 200 líneas, con muchos parámetros y valores incrustados. Según el código limpio, ¿qué hace?",
  op:["Dejarlo así para no introducir defectos","Refactorizar: métodos más cortos, menos parámetros, evitar el hardcoding y usar nombres con sentido","Eliminar las pruebas afectadas","Convertir todo a captura/reproducción"],
  c:1,e:"El código limpio recomienda métodos cortos, pocos parámetros, externalizar datos (evitar hardcoding) y nomenclatura con sentido para mejorar la mantenibilidad."},
 {id:"s3-22",cap:4,sec:"4.2",k:"k4",q:"Pruebas móviles con dispositivos reales tras un cortafuegos, con arneses que se autoactualizan y CI compartiendo recursos. ¿Qué análisis de riesgos de despliegue es correcto?",
  op:["No hay riesgos: la automatización los elimina","Conectividad (cortafuegos), estado de los dispositivos, autoactualización y contención de recursos; cada uno con su mitigación","El único riesgo es el coste de licencias","Basta con ejecutar las pruebas más veces"],
  c:1,e:"Hay que prepararse para riesgos no estrictamente de automatización (cortafuegos, dispositivos reales, autoactualización, recursos compartidos), cada uno con su mitigación, para tener puertas de calidad fiables."},
 {id:"s3-23",cap:4,sec:"4.2",k:"k4",q:"Una librería de terceros usada por la SAP publica una actualización obligatoria. ¿Cuál es el análisis y la acción adecuados?",
  op:["Aplicarla en producción sin más, las actualizaciones nunca cambian el comportamiento","Tratarla como riesgo técnico de despliegue: puede alterar el comportamiento de la SAP, así que se aplica de forma controlada y se verifica la SAP después","Ignorarla indefinidamente","Eliminar la dependencia y reescribir todo"],
  c:1,e:"Las actualizaciones de arneses/agentes/dependencias son un riesgo técnico de despliegue: pueden cambiar el comportamiento de la SAP. Se aplican de forma controlada (versiones/planes de configuración) y se verifica la SAP tras el cambio."},
 // ---- Capítulo 5 (5): K2=2, K3=3 ----
 {id:"s3-24",cap:5,sec:"5.1.1",k:"k2",q:"En una canalización que separa construcción y despliegue, ¿qué pruebas actúan como puerta de calidad en la fase de construcción?",
  op:["Las de aceptación de usuario","Las de componente e integración de componentes","Las de carga","Las exploratorias"],
  c:1,e:"Componente e integración de componentes forman parte de la construcción y actúan como puertas de calidad; si tienen éxito, se despliega."},
 {id:"s3-25",cap:5,sec:"5.1.3",k:"k2",q:"En la prueba de contrato impulsada por el proveedor, ¿quién crea el contrato?",
  op:["El consumidor, fijando sus expectativas","El proveedor, mostrando cómo funcionan sus servicios","Una herramienta de IC/EC automáticamente","Un auditor externo"],
  c:1,e:"En el enfoque impulsado por el proveedor, este crea el contrato que muestra cómo funcionan sus servicios; en el impulsado por el consumidor, este fija sus expectativas sobre las respuestas."},
 {id:"s3-26",cap:5,sec:"5.1.1",k:"k3",q:"Una canalización tarda 3 h porque ejecuta toda la suite E2E en cada commit y el equipo ya no mira los resultados. ¿Cuál es la mejor reorganización?",
  op:["Ejecutar en cada commit solo suites rápidas y estables como puertas de calidad, y mover las E2E largas a etapas posteriores o nocturnas","Eliminar las E2E del todo","Ejecutar la canalización una vez por semana","Pedir commits menos frecuentes"],
  c:0,e:"Se escalona por velocidad y fiabilidad: feedback rápido en cada commit con suites cortas y las largas en etapas posteriores o regresión nocturna."},
 {id:"s3-27",cap:5,sec:"5.1.2",k:"k3",q:"Quieres una coincidencia exacta entre la versión del SSP y el producto de prueba que la verifica. ¿Cómo lo consigues?",
  op:["Usar siempre la última versión de ambos sin control","Entregar el producto de prueba con el SSP en la misma versión, mediante etiquetas o ramas del control de configuración (o conmutadores de prestación)","Ignorar la versión del SSP","Guardar solo los resultados de ejecución"],
  c:1,e:"Para una coincidencia exacta, el producto de prueba se entrega con el SSP en la misma versión (etiquetas/ramas) o se usan conmutadores de prestación por entrega/entorno."},
 {id:"s3-28",cap:5,sec:"5.1.3",k:"k3",q:"Para construir una estrategia de automatización de IPA, ¿qué dependencias es crucial conocer?",
  op:["El color de la IGU","Las conexiones entre interfaces (qué lógica es comprobable y cómo se relacionan) y la documentación de la IPA como línea base","El número de usuarios en producción","La marca del servidor"],
  c:1,e:"La automatización de IPA necesita conocer las conexiones entre interfaces y disponer de su documentación (parámetros, encabezados, tipos de solicitud/respuesta) como línea base."},
 // ---- Capítulo 6 (5): K2=1, K3=2, K4=2 ----
 {id:"s3-29",cap:6,sec:"6.1.1",k:"k2",q:"¿Para qué sirve un ID de correlación (ID de traza)?",
  op:["Cifrar los datos de prueba","Seguir y trazar el comportamiento del sistema a través de todas las llamadas e integraciones de una misma interacción","Acelerar la ejecución","Sustituir a las aserciones"],
  c:1,e:"Un ID único por interacción permite observar y trazar el comportamiento del sistema en todas las llamadas posteriores, facilitando correlacionar la SAP con los registros del SSP."},
 {id:"s3-30",cap:6,sec:"6.1.1",k:"k3",q:"¿Qué ventaja tiene mejorar el software de prueba subyacente (p. ej., registrar hora de inicio/fin de cada caso)?",
  op:["Solo afecta a un guion concreto","La mejora se aplica a todos los guiones de nivel superior que lo usan","Reduce la fiabilidad de los resultados","Elimina la necesidad de aserciones"],
  c:1,e:"Como la SAP tiene un producto de prueba en su núcleo, mejorar el software subyacente beneficia a todos los guiones de nivel superior que lo invocan."},
 {id:"s3-31",cap:6,sec:"6.1.3",k:"k3",q:"Preparas un informe de avance para dirección y otro para el equipo técnico. ¿Cómo los adaptas?",
  op:["Ambos reciben el registro completo de bajo nivel","A dirección, tendencias y resúmenes visuales (semáforos, proporción aprobados/suspensos, fiabilidad); al equipo técnico, el detalle para diagnosticar","Solo dirección recibe informe","Ambos reciben únicamente el total de pruebas"],
  c:1,e:"El contenido se adapta a las decisiones de cada audiencia: gestión decide sobre riesgo/avance (visuales) y los técnicos diagnostican (detalle de bajo nivel)."},
 {id:"s3-32",cap:6,sec:"6.1.2",k:"k4",q:"Una prueba falla, pero el resultado real del SSP coincide con el esperado. ¿Qué estado registras y por qué?",
  op:["«Fallo» del SSP, porque la prueba falló","«Fallo de SAP»: el defecto está en la solución de automatización (o hay un desajuste invisible), no en el SSP","«Paso», porque el SSP está bien","«No concluyente» siempre"],
  c:1,e:"Si el SSP se comporta como se espera pero la prueba falla, el estado correcto es «fallo de SAP»: el defecto está en la solución de automatización."},
 {id:"s3-33",cap:6,sec:"6.1.2",k:"k4",q:"Tras una ejecución, todos los casos fallan a la vez con fallos aparentemente reales. ¿Qué análisis haces?",
  op:["Concluir que el SSP está roto por completo y abrir un defecto por caso","Sospechar del entorno no disponible y analizar los registros del SSP (datos secundarios), que mostrarán la interrupción","Reducir la suite","Asumir que las aserciones son demasiado estrictas"],
  c:1,e:"Que fallen todos a la vez apunta al entorno; se analizan los registros del SSP para confirmar la interrupción y la acción es estabilizar el entorno, no abrir defectos masivos."},
 // ---- Capítulo 7 (4): K2=1, K3=3 ----
 {id:"s3-34",cap:7,sec:"7.1.4",k:"k2",q:"¿Qué hace el análisis estático y por qué es clave en DevSecOps?",
  op:["Ejecuta pruebas de carga","Inspecciona el código (SSP o MTAP) sin ejecutarlo para hallar vulnerabilidades y defectos de forma proactiva, integrándose pronto en la canalización","Mide el tiempo de respuesta","Sustituye a la verificación del entorno"],
  c:1,e:"El análisis estático examina el código sin ejecutarlo, detecta vulnerabilidades/defectos y aplica estándares; en DevSecOps se integra pronto en la canalización para dar feedback inmediato."},
 {id:"s3-35",cap:7,sec:"7.1.2",k:"k3",q:"¿Cuál es la forma más directa de comprobar que un guion nuevo detecta de verdad el defecto que dice verificar?",
  op:["Ejecutarlo diez veces contra la versión correcta y ver que pasa","Ejecutarlo contra una versión del SSP con el defecto presente (conocido o provocado) y comprobar que falla","Revisar que el nombre describe su propósito","Comprobar que tarda menos de un minuto"],
  c:1,e:"Que pase repetidamente no demuestra detección (podría no tener aserciones). La evidencia es que falle cuando el defecto está presente: el principio de «probar los tests»."},
 {id:"s3-36",cap:7,sec:"7.1.2",k:"k3",q:"Un guion da resultados distintos al repetirlo sin cambios en el SSP. ¿Qué procede según la verificación del juego de prueba?",
  op:["Aprobarlo manualmente para no bloquear la canalización","Retirarlo del juego activo y analizarlo por separado para hallar la causa raíz","Duplicarlo para que al menos una copia pase","Borrarlo sin análisis"],
  c:1,e:"Los casos que no dan un resultado fiable (p. ej., por dependencias de secuencia) se retiran del juego activo y se analizan aparte; aprobarlos a mano o duplicarlos oculta el problema."},
 {id:"s3-37",cap:7,sec:"7.1.1",k:"k3",q:"Antes de la primera campaña en un entorno recién montado, ¿qué incluye tu plan de verificación?",
  op:["Solo comprobar que la herramienta está instalada","Instalación/configuración, repetibilidad de montaje/desmontaje, conectividad con el SSP y permisos, y componentes del MTAP probados","Pedir aprobación por escrito a dirección","Ejecutar la suite completa diez veces"],
  c:1,e:"La verificación del entorno cubre instalación/configuración, repetibilidad del montaje/desmontaje, conectividad y permisos (precondiciones) y la prueba individual de los componentes del MTAP, para no fiarse de veredictos inválidos."},
 // ---- Capítulo 8 (3): K3=1, K4=2 ----
 {id:"s3-38",cap:8,sec:"8.1.2",k:"k3",q:"El histograma de pruebas revela varios casos que fallan de forma intermitente sin relación con el SSP. ¿Qué mejora aplicas?",
  op:["Ejecutarlos más veces hasta que pasen","Identificarlos como frágiles (flaky) y refactorizarlos o replantear su implementación (esperas por condición, aislamiento)","Eliminar el histograma","Ocultarlos en los informes"],
  c:1,e:"El histograma detecta casos frágiles; la mejora es refactorizarlos o replantear su implementación, no ocultarlos ni reintentar a ciegas."},
 {id:"s3-39",cap:8,sec:"8.1.2",k:"k4",q:"Las métricas muestran que el mantenimiento de la SAP crece un 15 % por trimestre mientras la suite crece un 3 %. ¿Qué conclusión y acción son razonables?",
  op:["Es normal: no hacer nada","Hay deuda creciente en el testware: planificar refactorización (consolidar duplicados, reforzar la abstracción, estabilizar esperas)","Congelar el SSP para que no genere mantenimiento","Duplicar el equipo cada trimestre"],
  c:1,e:"Un mantenimiento que crece mucho más rápido que la suite señala deuda técnica del testware; la respuesta de ingeniería es refactorizar y reforzar la abstracción, no añadir personas ni congelar el SSP."},
 {id:"s3-40",cap:8,sec:"8.1.3",k:"k4",q:"El equipo dedica una semana tras cada entrega a arreglar tests rotos porque los localizadores están repartidos por cientos de ficheros. Al analizar la SAP, ¿qué mejora priorizas?",
  op:["Contratar más personas para arreglar tests","Aumentar la abstracción: concentrar los localizadores en la capa de adaptación / Page Object","Reducir la frecuencia de las entregas del SSP","Dejar de ejecutar los tests tras las entregas"],
  c:1,e:"El mantenimiento masivo tras cada cambio del SSP indica deuda arquitectónica; concentrar el conocimiento de las interfaces en un punto (adaptación/Page Object) reduce el mantenimiento de forma estructural."}
];

const EXAMENES=[
  { id:"practica-1",
    nombre:"Examen de práctica · Set 1 (original)",
    descripcion:"40 preguntas originales según la estructura oficial v2.0, con distribución por capítulos (C1=4, C2=6, C3=8, C4=5, C5=5, C6=5, C7=4, C8=3).",
    minutos:META.examen.minutos, cortePorcentaje:META.examen.cortePorcentaje,
    preguntas:EXAMEN },
  { id:"practica-2",
    nombre:"Examen de práctica · Set 2 (original)",
    descripcion:"Otras 40 preguntas originales distintas, misma distribución oficial por capítulos. Ideal para un segundo simulacro.",
    minutos:META.examen.minutos, cortePorcentaje:META.examen.cortePorcentaje,
    preguntas:EXAMEN2 },
  { id:"practica-3",
    nombre:"Examen de práctica · Set 3 (análisis K3/K4)",
    descripcion:"40 preguntas con la distribución oficial por capítulos pero la mezcla cognitiva inclinada a aplicar y analizar (más K3/K4), parecida al peso real del examen. El más exigente de los tres.",
    minutos:META.examen.minutos, cortePorcentaje:META.examen.cortePorcentaje,
    preguntas:EXAMEN3 }
];

/* =========================================================
   CASO DE ESTUDIO TRANSVERSAL · «Aurora» (SSP ficticio)
   Un mismo sistema hilado por los 8 capítulos para ver cómo
   se aplican los conceptos sobre un caso concreto.
========================================================= */
const CASO={
 intro:`<div class="eyebrow">CASO DE ESTUDIO</div>
  <h2>«Aurora», la tienda online (nuestro SSP)</h2>
  <p>A lo largo de los capítulos usaremos un mismo sistema ficticio, <strong>Aurora</strong>, para ver cómo se aplican los conceptos sobre un caso concreto. Cuando el syllabus habla del <strong>SSP</strong>, piensa en Aurora; la <strong>SAP</strong> es la solución de automatización que vamos a construir y el <strong>MTAP</strong>, su marco.</p>
  <h3>Arquitectura y contexto</h3>
  <ul>
   <li><strong>Portal web</strong> (SPA) para clientes y <strong>app móvil Android</strong>.</li>
   <li><strong>API REST</strong> documentada con OpenAPI (catálogo, carrito, pedidos, usuarios).</li>
   <li>Un <strong>servicio de inventario</strong> interno y una <strong>base de datos</strong>.</li>
   <li>Depende de una <strong>pasarela de pago externa</strong> con sandbox lento y con cuotas.</li>
   <li>Equipo <strong>técnico</strong>, con experiencia en el lenguaje del backend. Hay que cubrir <strong>componente, integración y sistema</strong>. Se manejan <strong>datos personales</strong> (RGPD) y se entrega <strong>varias veces por semana</strong>.</li>
  </ul>
  <div class="nota">Cada tarjeta de abajo aplica un capítulo a Aurora. Usa el botón «Ir al capítulo» para repasar la teoría correspondiente.</div>`,
 capitulos:[
  {n:1,sub:"1.2",titulo:"Qué automatizar en Aurora y con qué herramienta",
   html:`<p>Aurora se desarrolla en <strong>ágil</strong> con entregas frecuentes, así que buscamos <em>automatización durante el sprint</em> (sin silos entre dev, prueba y negocio). Decidimos qué automatizar:</p>
   <ul>
    <li><strong>Buenos candidatos:</strong> la regresión del <em>flujo de compra</em> (estable, frecuente, resultado objetivo) y las validaciones de la API.</li>
    <li><strong>Malos candidatos:</strong> la estética de la portada (subjetiva), una promoción de un solo uso (ejecución única) y la exploratoria de una prestación recién diseñada.</li>
   </ul>
   <p>Como el equipo es técnico y conoce el lenguaje del backend, elegimos una <strong>herramienta de ese lenguaje</strong> para depurar codo con codo con desarrollo y favorecer la formación cruzada. La automatización <strong>complementa</strong>, no sustituye, a la prueba exploratoria.</p>`},
  {n:2,sub:"2.2",titulo:"Testabilidad, entornos y evaluación de herramientas",
   html:`<p>Pedimos a desarrollo, <strong>en paralelo</strong> al producto, que Aurora sea testable: localizadores estables (<span class="term">data-testid</span>) en el portal, una <strong>API de prueba</strong> para precargar catálogo y usuarios (<strong>controlabilidad</strong>) y logs estructurados con endpoints de estado (<strong>observabilidad</strong>).</p>
   <p>Usaremos varios <strong>entornos</strong>: local y construcción para lo de bajo nivel, <strong>integración</strong> (el primero que monitorizamos), <strong>preproducción</strong> para las pruebas no funcionales y <strong>producción</strong> con lanzamiento canario. La <strong>pasarela inestable se virtualiza</strong>. Tras analizar el SSP, una <strong>tabla comparativa</strong> muestra que ninguna herramienta cubre web + API + móvil a la perfección: <strong>combinamos</strong> herramientas según los requisitos.</p>`},
  {n:3,sub:"3.1.3",titulo:"La AAPg y el MTAP de Aurora",
   html:`<p>La <strong>AAPg de Aurora</strong> concreta sus cuatro capacidades: <strong>adaptación</strong> con tres adaptadores (portal/IGU, API REST y móvil), <strong>ejecución</strong> con runner + registro, <strong>definición</strong> con casos guiados por datos y <strong>generación</strong> opcional (no la usamos). Define interfaces con el SSP (Aurora), con la gestión del proyecto, la de configuración (su IC/EC) y la de la prueba.</p>
   <p>El <strong>MTAP por capas</strong>: en <em>guiones</em>, <span class="term">test_comprar_producto</span>; en <em>lógica de negocio</em>, <span class="term">PaginaCarrito</span> y <span class="term">AdaptadorPedidosApi</span>; en <em>librerías base</em>, esperas y lectura de datos, reutilizables por otros proyectos. Enfoque: <strong>guionizado estructurado + data-driven</strong> para los cientos de casos de catálogo, y <strong>keyword-driven</strong> para que negocio componga flujos. Patrones: <strong>Page Object</strong> en el portal y <strong>singleton</strong> para el cliente de la API.</p>`},
  {n:4,sub:"4.2",titulo:"Piloto, riesgos de despliegue y mantenibilidad",
   html:`<p>El <strong>piloto</strong>: automatizar el flujo de compra por <strong>API</strong> e integrarlo en IC/EC desde el primer día para sacar dificultades pronto. Evaluamos lenguaje, herramientas, niveles y enfoque antes de escalar.</p>
   <p><strong>Riesgos de despliegue</strong> de Aurora: los dispositivos Android reales (batería, red), el <strong>cortafuegos</strong> hacia la pasarela y la <strong>autoactualización</strong> del arnés. <strong>Mantenibilidad:</strong> nada de URLs ni credenciales en duro (data-driven + configuración), nombres con sentido, métodos cortos y análisis estático en el IDE.</p>`},
  {n:5,sub:"5.1.1",titulo:"La canalización IC/EC y el contrato con la pasarela",
   html:`<p>En <strong>cada commit</strong>: componente e integración de componentes como <strong>puerta de calidad</strong>. <strong>Tras desplegar</strong>: el sistema E2E del flujo de compra. <strong>Nocturno</strong>: la regresión larga y el rendimiento. La configuración (datos y entorno) se versiona con la <strong>misma etiqueta</strong> que la versión de Aurora.</p>
   <p>Con la <strong>pasarela</strong> y el <strong>servicio de inventario</strong> aplicamos <strong>prueba de contrato</strong>: Aurora es el <em>consumidor</em> y fija sus expectativas sobre las respuestas, detectando rupturas de compatibilidad sin montar toda la integración.</p>`},
  {n:6,sub:"6.1.2",titulo:"Registros, métricas y diagnóstico",
   html:`<p>La SAP registra el caso, su cronología, el <strong>estado</strong> (paso / fallo / <strong>fallo de SAP</strong>), capturas y un <strong>ID de correlación</strong> que cruza portal → API → inventario. Diagnóstico sobre Aurora:</p>
   <ul>
    <li>Una compra falla pero Aurora muestra el pedido correcto → <strong>fallo de SAP</strong> (la aserción, no el SSP).</li>
    <li>Todas las pruebas fallan a medianoche → <strong>entorno</strong>: los registros de Aurora muestran la BD caída.</li>
   </ul>
   <p>El <strong>informe</strong> se adapta: a dirección, semáforos y fiabilidad; al equipo técnico, el detalle para diagnosticar.</p>`},
  {n:7,sub:"7.1.1",titulo:"Verificación del entorno de Aurora",
   html:`<p>Antes de la primera campaña en <strong>integración</strong>, verificamos: instalación desde repositorio (misma versión), montaje/desmontaje <strong>repetible</strong>, <strong>conectividad</strong> con la API y la pasarela virtualizada, permisos de logging, y los <strong>componentes del MTAP</strong> probados (p. ej. el verificador de objetos del portal). Y comprobamos que un guion nuevo de «pago rechazado» <strong>falla cuando el defecto está presente</strong>, no solo que pasa.</p>`},
  {n:8,sub:"8.1.2",titulo:"Mejora continua de la SAP de Aurora",
   html:`<p>El <strong>histograma</strong> marca como frágiles los tests que llaman a la pasarela real → los pasamos a <strong>virtualización</strong> y a <strong>espera por eventos</strong>. Las métricas muestran que el mantenimiento sube por los <strong>localizadores dispersos</strong> → los concentramos en los <strong>Page Object</strong>. Cuando Aurora expone una API de prueba para precondiciones, movemos el alta de datos de la IGU a la API (<strong>setup/teardown</strong>). Y añadimos <strong>validación de esquemas</strong> a las respuestas de la API para acortar las aserciones.</p>`}
 ]
};

/* =========================================================
   OBJETIVOS DE APRENDIZAJE (LO) del syllabus v2.0, con su
   nivel cognitivo y capítulo. El examen solo evalúa estos.
========================================================= */
const OBJETIVOS=[
 {cod:"1.1.1",k:"k2",cap:1,desc:"Explicar las ventajas y desventajas de la automatización de la prueba."},
 {cod:"1.2.1",k:"k2",cap:1,desc:"Explicar cómo se aplica la automatización en distintos modelos de ciclo de vida (CVDS)."},
 {cod:"1.2.2",k:"k2",cap:1,desc:"Seleccionar las herramientas de automatización adecuadas para un SSP dado."},
 {cod:"2.1.1",k:"k2",cap:2,desc:"Describir las necesidades de configuración de una infraestructura que posibilite la automatización."},
 {cod:"2.1.2",k:"k2",cap:2,desc:"Explicar cómo se usa la automatización en diferentes entornos."},
 {cod:"2.2.1",k:"k4",cap:2,desc:"Analizar un SSP para determinar la solución de automatización (SAP) adecuada."},
 {cod:"2.2.2",k:"k4",cap:2,desc:"Aportar ejemplos de hallazgos técnicos de la evaluación de una herramienta."},
 {cod:"3.1.1",k:"k2",cap:3,desc:"Explicar las principales capacidades de una arquitectura de automatización (AAPg)."},
 {cod:"3.1.2",k:"k2",cap:3,desc:"Explicar cómo diseñar una solución de automatización de la prueba."},
 {cod:"3.1.3",k:"k3",cap:3,desc:"Aplicar la estructura por capas de los marcos de automatización (MTAP)."},
 {cod:"3.1.4",k:"k3",cap:3,desc:"Aplicar diferentes enfoques para automatizar casos de prueba."},
 {cod:"3.1.5",k:"k3",cap:3,desc:"Aplicar principios y patrones de diseño en la automatización."},
 {cod:"4.1.1",k:"k3",cap:4,desc:"Aplicar directrices que soporten el piloto y el despliegue de la automatización."},
 {cod:"4.2.1",k:"k4",cap:4,desc:"Analizar los riesgos del despliegue y planificar estrategias de mitigación."},
 {cod:"4.3.1",k:"k2",cap:4,desc:"Explicar los factores que soportan y afectan a la mantenibilidad de la SAP."},
 {cod:"5.1.1",k:"k3",cap:5,desc:"Aplicar la automatización en diferentes niveles de prueba dentro de las canalizaciones."},
 {cod:"5.1.2",k:"k2",cap:5,desc:"Explicar la gestión de la configuración del producto de prueba."},
 {cod:"5.1.3",k:"k2",cap:5,desc:"Explicar las dependencias de automatización para la infraestructura de una IPA."},
 {cod:"6.1.1",k:"k3",cap:6,desc:"Aplicar métodos de recopilación de datos de la SAP y del SSP."},
 {cod:"6.1.2",k:"k4",cap:6,desc:"Analizar los datos de la SAP y del SSP para comprender mejor los resultados."},
 {cod:"6.1.3",k:"k2",cap:6,desc:"Explicar cómo se elabora y publica un informe del avance de la prueba."},
 {cod:"7.1.1",k:"k3",cap:7,desc:"Planificar la verificación del entorno de automatización, incluida la configuración de la herramienta."},
 {cod:"7.1.2",k:"k2",cap:7,desc:"Explicar el comportamiento correcto de un guion o juego de prueba automatizado."},
 {cod:"7.1.3",k:"k2",cap:7,desc:"Identificar dónde la automatización produce resultados inesperados."},
 {cod:"7.1.4",k:"k2",cap:7,desc:"Explicar cómo el análisis estático ayuda a la calidad del código de automatización."},
 {cod:"8.1.1",k:"k3",cap:8,desc:"Descubrir oportunidades de mejora mediante la recopilación y el análisis de datos."},
 {cod:"8.1.2",k:"k4",cap:8,desc:"Analizar los aspectos técnicos de la SAP implementada y recomendar mejoras."},
 {cod:"8.1.3",k:"k3",cap:8,desc:"Reestructurar el producto de prueba para alinearlo con los cambios del SSP."},
 {cod:"8.1.4",k:"k2",cap:8,desc:"Resumir las oportunidades para el uso de herramientas de automatización."}
];

/* =========================================================
   EJERCICIOS DE PRÁCTICA K3/K4 (con botón «Ver solución»)
   Escenarios de diseño y análisis, mapeados a los objetivos
   de aprendizaje aplicados del syllabus v2.0.
========================================================= */
const EJERCICIOS=[
{cap:3,k:"k3",lo:"3.1.3",titulo:"Repartir componentes en las 3 capas del MTAP",
 enunciado:`<p>Estás diseñando el marco de trabajo (MTAP) de un SSP. Tienes estos componentes:</p>
 <table>
  <tr><th>#</th><th>Componente</th></tr>
  <tr><td>A</td><td><span class="term">PaginaLogin</span>: conoce los localizadores de la pantalla de acceso del SSP.</td></tr>
  <tr><td>B</td><td><span class="term">esperarCondicion(cond)</span>: utilidad de espera genérica, sin nada propio del SSP.</td></tr>
  <tr><td>C</td><td><span class="term">FlujoEmitirFactura</span>: orquesta «alta de cliente → emitir factura» llamando a acciones de negocio.</td></tr>
  <tr><td>D</td><td><span class="term">AdaptadorClienteApi</span>: traduce acciones a llamadas REST del SSP.</td></tr>
  <tr><td>E</td><td><span class="term">leerCsv(ruta)</span>: utilidad de lectura de datos.</td></tr>
  <tr><td>F</td><td><span class="term">test_emitir_factura_cliente_nuevo</span>: el caso de prueba.</td></tr>
 </table>
 <p><strong>a)</strong> Ubica cada componente en su capa: <em>guiones de prueba</em>, <em>lógica de negocio</em> o <em>librerías base</em>.<br>
 <strong>b)</strong> ¿Qué regla de dependencia entre capas hay que respetar y por qué?</p>`,
 solucion:`<h4>a) Asignación por capas</h4>
 <table>
  <tr><th>Capa</th><th>Componentes</th><th>Motivo</th></tr>
  <tr><td><strong>Librerías base</strong></td><td>B, E</td><td>Independientes de cualquier SSP; reutilizables por cualquier proyecto con la misma pila.</td></tr>
  <tr><td><strong>Lógica de negocio</strong></td><td>A, C, D</td><td>Dependen del SSP (localizadores, flujos, IPA concreta); heredan o usan fachadas de las librerías base.</td></tr>
  <tr><td><strong>Guiones de prueba</strong></td><td>F</td><td>El caso de prueba; invoca a la lógica de negocio.</td></tr>
 </table>
 <h4>b) Regla de dependencia</h4>
 <p>Los <strong>guiones de prueba (F) invocan a la lógica de negocio</strong>, y <strong>no</strong> deben llamar directamente a las librerías base. La lógica de negocio (A, C, D) se apoya en las base (B, E) mediante <strong>herencia o fachadas</strong>. Así, un cambio en la IGU o la IPA del SSP se corrige en la capa de negocio (Page Object/adaptador) y no en cada guion, conteniendo el mantenimiento. Conviene mantener <em>pocas</em> capas.</p>`},

{cap:3,k:"k3",lo:"3.1.4",titulo:"Elegir el enfoque de scripting según el escenario",
 enunciado:`<p>Para cada situación, elige el enfoque de automatización más adecuado y justifícalo brevemente:</p>
 <ol>
  <li>Un equipo <strong>sin experiencia en programación</strong> debe automatizar una web sencilla y <strong>muy estable</strong> que apenas cambia.</li>
  <li>Los <strong>analistas de negocio</strong> quieren componer casos combinando acciones como «alta_cliente» o «emitir_factura» <strong>sin programar</strong>.</li>
  <li>Hay que ejecutar el <strong>mismo flujo de login</strong> con <strong>200 combinaciones</strong> de usuario/contraseña.</li>
 </ol>`,
 solucion:`<h4>1) Captura/reproducción (o baja/sin código)</h4>
 <p>El perfil no programador y un SSP muy estable hacen viable la grabación: su gran debilidad —fragilidad ante cambios y dependencia de la versión— pesa poco aquí. Es la elección sensata <em>solo</em> por esa estabilidad.</p>
 <h4>2) Guiado por palabras clave (keyword-driven)</h4>
 <p>Define un vocabulario de acciones de negocio (keywords) que el equipo técnico implementa una vez; analistas de prueba y de negocio componen casos con esas keywords y sus datos, sin programar.</p>
 <h4>3) Prueba guiada por datos (data-driven)</h4>
 <p>El mismo guion estructurado se alimenta con un conjunto externo (.csv/.xlsx/BD) de 200 filas. Amplía los casos rápido y barato sin duplicar lógica.</p>
 <div class="nota">Keyword-driven se construye <em>sobre</em> data-driven, y ambos sobre el guionizado estructurado.</div>`},

{cap:3,k:"k3",lo:"3.1.5",titulo:"Aplicar patrones de diseño a un problema de mantenibilidad",
 enunciado:`<p>Una SAP arrastra estos problemas:</p>
 <ul>
  <li>60 guiones repiten <strong>copiados</strong> los pasos y localizadores del login; cada cambio de esa pantalla obliga a editar los 60.</li>
  <li>Cada guion abre <strong>su propia conexión</strong> al SSP, con resultados inconsistentes.</li>
  <li>Se repiten secuencias de pasos de usuario (login → buscar → abrir ficha) en muchos guiones.</li>
 </ul>
 <p>¿Qué <strong>patrones/principios</strong> aplicarías a cada problema?</p>`,
 solucion:`<h4>Login duplicado → Page Object</h4>
 <p>Encapsular la pantalla de login en un <strong>modelo de objetos de página</strong>: un único sitio con sus localizadores y acciones. Un cambio en la IGU se corrige una vez.</p>
 <h4>Conexiones múltiples → Singleton</h4>
 <p>El patrón <strong>singleton</strong> garantiza una única instancia del controlador que se comunica con el SSP, eliminando la inconsistencia.</p>
 <h4>Secuencias repetidas → Modelo de flujo</h4>
 <p>El <strong>modelo de flujo</strong> añade una segunda fachada sobre los page objects que almacena las acciones del usuario; esa «doble fachada» permite reutilizar pasos en muchos guiones.</p>
 <p>De fondo, aplican <strong>abstracción</strong>, <strong>herencia</strong> y <strong>fachadas</strong> (ocultar la complejidad de las librerías base) y los principios <strong>SOLID</strong>.</p>`},

{cap:2,k:"k4",lo:"2.2.1",titulo:"Analizar el SSP para determinar la SAP",
 enunciado:`<p>Vas a definir la solución de automatización (SAP) de este SSP:</p>
 <ul>
  <li>Portal <strong>web</strong> (framework moderno) + <strong>API REST</strong> documentada (OpenAPI) + <strong>app móvil Android</strong>.</li>
  <li>Depende de una <strong>pasarela de pago externa</strong> con cuotas y respuestas variables.</li>
  <li>Hay que cubrir <strong>componente, integración y sistema</strong>; el equipo es <strong>técnico (Java)</strong>; se manejan <strong>datos sensibles</strong>.</li>
 </ul>
 <p>Enumera los <strong>hallazgos/requisitos técnicos</strong> de la SAP y una <strong>decisión de diseño clave</strong>.</p>`,
 solucion:`<h4>Hallazgos / requisitos</h4>
 <ul>
  <li><strong>Interfaces:</strong> IGU web (exigir localizadores estables), IPA REST (la documentación OpenAPI como línea base) e IGU móvil (dispositivos reales o emuladores).</li>
  <li><strong>Niveles:</strong> componente e integración en la fase de construcción; sistema/E2E después. <em>Automatizar por IPA</em> siempre que se pueda (más rápido, estable y barato) y reservar la IGU para lo que solo ella verifica.</li>
  <li><strong>Herramienta:</strong> elegir una cuyo lenguaje coincida con el del SSP (Java) para depurar con desarrollo y la formación cruzada.</li>
  <li><strong>Dependencia externa:</strong> <strong>virtualizar la pasarela</strong> para el volumen de CI y mantener un conjunto reducido periódico contra el sandbox real (equilibra fiabilidad y fidelidad).</li>
  <li><strong>Datos:</strong> gestión de datos de prueba; con datos sensibles, entornos controlados y nada de datos reales de producción.</li>
 </ul>
 <h4>Decisión de diseño clave</h4>
 <p>Arquitectura <strong>por capas con un adaptador por interfaz</strong> (web / API / móvil) sobre librerías base comunes: permite escalar y contiene el mantenimiento cuando el SSP evolucione.</p>`},

{cap:6,k:"k4",lo:"6.1.2",titulo:"Diagnosticar el estado a partir del registro",
 enunciado:`<p>Clasifica cada caso como <strong>defecto del SSP</strong>, <strong>fallo de SAP</strong> o <strong>entorno no disponible</strong>, e indica la acción:</p>
 <ol>
  <li>Una prueba falla. La pantalla del SSP muestra el total correcto (real = esperado), pero la aserción comparaba un <strong>formato de fecha</strong> distinto.</li>
  <li>A las 02:00 <strong>todos</strong> los casos fallan a la vez; los registros del SSP muestran la <strong>BD caída</strong> de 01:55 a 02:10.</li>
  <li>Una prueba falla; la captura muestra que «Guardar» devuelve un <strong>error 500</strong> nuevo y el log del SSP registra una excepción de puntero nulo.</li>
 </ol>`,
 solucion:`<h4>1) Fallo de SAP</h4>
 <p>El SSP se comporta como se espera (real = esperado), pero la prueba falla: el defecto está en la <strong>solución de automatización</strong> (la aserción no ignora diferencias esperadas como el formato de fecha). Acción: corregir la SAP, no abrir defecto del SSP.</p>
 <h4>2) Entorno no disponible</h4>
 <p>Que <strong>todos</strong> los casos fallen a la vez apunta al entorno, no al SSP; los registros del SSP confirman la interrupción de la BD. Acción: <strong>estabilizar el entorno</strong> y reejecutar, no abrir 40 defectos.</p>
 <h4>3) Defecto del SSP</h4>
 <p>Resultado real distinto del esperado, con evidencia (error 500, excepción en el log del SSP). Acción: <strong>registrar el defecto</strong> con capturas y trazas.</p>
 <div class="nota">Regla: los datos de la SAP son primarios y los del SSP, secundarios. Si real = esperado pero la prueba falla → sospecha de <strong>fallo de SAP</strong>; si fallan <em>todos</em> a la vez → sospecha del <strong>entorno</strong>.</div>`},

{cap:5,k:"k3",lo:"5.1.1",titulo:"Mapear niveles de prueba a la canalización IC/EC",
 enunciado:`<p>Una canalización separa <strong>construcción</strong> y <strong>despliegue</strong>. Tienes estos conjuntos y hay ~30 commits/día:</p>
 <table>
  <tr><th>Conjunto</th><th>Tamaño / tiempo</th></tr>
  <tr><td>Componente</td><td>200 · 2 min</td></tr>
  <tr><td>Integración de componentes</td><td>80 · 4 min</td></tr>
  <tr><td>Sistema (E2E)</td><td>60 · 35 min</td></tr>
  <tr><td>Integración de sistemas</td><td>40 · 20 min</td></tr>
  <tr><td>Rendimiento (no funcional)</td><td>~1 h</td></tr>
 </table>
 <p>¿Dónde colocas cada conjunto y qué corre en cada commit frente a por la noche?</p>`,
 solucion:`<h4>Reparto</h4>
 <ul>
  <li><strong>En cada commit (fase de construcción, puerta de calidad):</strong> componente (2 min) e integración de componentes (4 min). Rápidas y estables; dan feedback inmediato.</li>
  <li><strong>Tras desplegar (entrega/despliegue continuo):</strong> sistema E2E e integración de sistemas como última puerta de calidad —o como canalización independiente disparada por un despliegue correcto—.</li>
  <li><strong>Nocturno:</strong> la regresión larga (E2E completo) y el rendimiento (~1 h), que no aportan como puerta en cada commit.</li>
 </ul>
 <h4>Principio</h4>
 <p>Escalonar por <strong>velocidad y fiabilidad</strong>: suites cortas y estables en cada commit; lo lento (E2E, no funcional) en etapas posteriores o regresión nocturna. Meter las 35+20 min en cada commit haría que el equipo dejara de mirar los resultados.</p>`},

{cap:4,k:"k4",lo:"4.2.1",titulo:"Analizar riesgos de despliegue y mitigaciones",
 enunciado:`<p>Tu automatización tiene este contexto de despliegue:</p>
 <ul>
  <li>Pruebas <strong>móviles con dispositivos reales</strong> en una granja.</li>
  <li>El SSP está tras un <strong>cortafuegos corporativo</strong>.</li>
  <li>Los <strong>arneses/agentes se autoactualizan</strong>.</li>
  <li>El agente de <strong>CI comparte recursos</strong> (CPU/RAM) con otros equipos.</li>
 </ul>
 <p>Identifica al menos <strong>cuatro riesgos</strong> de despliegue y su <strong>mitigación</strong>.</p>`,
 solucion:`<table>
  <tr><th>Riesgo</th><th>Mitigación</th></tr>
  <tr><td><strong>Cortafuegos:</strong> el agente no alcanza el SSP.</td><td>Solicitar aperturas/listas de permitidos; verificar la conectividad como precondición antes de la campaña.</td></tr>
  <tr><td><strong>Dispositivos reales</strong> apagados, sin batería o sin red.</td><td>Fuentes de alimentación adecuadas, red estable y planes de configuración de dispositivos; comprobar su estado antes de ejecutar.</td></tr>
  <tr><td><strong>Autoactualización</strong> de arneses/agentes que cambia el comportamiento.</td><td>Fijar/controlar versiones y planes de configuración; verificar la SAP tras cada actualización.</td></tr>
  <tr><td><strong>Recursos compartidos</strong> (CPU/RAM) en contención.</td><td>Reservar/aislar recursos, dimensionar la ejecución y programar lotes en horarios adecuados.</td></tr>
 </table>
 <div class="nota">Muchos de estos riesgos no son «de automatización» en sentido estricto, pero el IAP debe asegurarlos para tener <strong>puertas de calidad fiables</strong>.</div>`},

{cap:8,k:"k4",lo:"8.1.2",titulo:"Recomendar mejoras a partir de métricas",
 enunciado:`<p>Las métricas trimestrales de la SAP muestran:</p>
 <ul>
  <li>El <strong>mantenimiento crece un 15 %</strong> por trimestre, mientras la suite crece solo un <strong>3 %</strong>.</li>
  <li>El <strong>20 % de los fallos son frágiles</strong> (flaky), según el histograma de pruebas.</li>
  <li>Muchos guiones usan <strong>esperas fijas de 5 s</strong>.</li>
  <li>Los <strong>localizadores están repartidos</strong> por cientos de ficheros.</li>
 </ul>
 <p>¿Qué <strong>conclusión</strong> sacas y cuál es tu <strong>plan de mejora priorizado</strong>?</p>`,
 solucion:`<h4>Conclusión</h4>
 <p>Hay <strong>deuda arquitectónica</strong> en el testware: el mantenimiento crece mucho más rápido que la suite, señal de que cada cambio del SSP obliga a tocar demasiados sitios.</p>
 <h4>Plan priorizado</h4>
 <ol>
  <li><strong>Concentrar los localizadores</strong> en la capa de adaptación / Page Object (ataca la causa del 15 %).</li>
  <li><strong>Sustituir las esperas rígidas</strong> por espera por sondeo (con timeout) o suscripción a eventos: reduce los flaky.</li>
  <li><strong>Refactorizar y consolidar</strong> duplicados en librerías reutilizables.</li>
  <li><strong>Retirar del juego activo</strong> los casos frágiles y analizarlos aparte; volver a medir para validar la mejora.</li>
 </ol>
 <p>Lo que <strong>no</strong> resuelve la causa: añadir más personas o congelar el SSP (atacan síntomas).</p>`},

{cap:8,k:"k3",lo:"8.1.3",titulo:"Reestructurar el testware ante un cambio del SSP",
 enunciado:`<p>El SSP, hasta ahora solo con IGU, va a <strong>exponer una IPA REST de prueba</strong> para preparar precondiciones. Hoy esas precondiciones (alta de cliente, limpieza, perfiles) se montan <strong>navegando la IGU</strong>, a unos 3 minutos por test.</p>
 <p>¿Cómo <strong>reestructuras la SAP</strong> para aprovechar la nueva IPA?</p>`,
 solucion:`<h4>Reestructuración</h4>
 <ul>
  <li>Crear <strong>adaptadores de IPA</strong> en la capa de adaptación/negocio y mover a ellos la creación de precondiciones.</li>
  <li>Llevar esas llamadas a los métodos de <strong>montaje/desmontaje (setup/teardown)</strong>: se definen una vez y se reutilizan.</li>
  <li><strong>Reservar la IGU</strong> para verificar lo propio de la interfaz; las precondiciones por IPA son más rápidas y estables.</li>
  <li>Refactorizar la <strong>AAP</strong> para incorporar la nueva interfaz y <strong>versionar</strong> el producto de prueba acorde a la versión del SSP.</li>
 </ul>
 <p>Antes de fiarte de los nuevos componentes, <strong>verifícalos</strong> (cap. 7): pruébalos individualmente y comprueba que un guion detecta el defecto que dice verificar.</p>`},

{cap:7,k:"k3",lo:"7.1.1",titulo:"Planificar la verificación del entorno",
 enunciado:`<p>Acabas de montar un <strong>entorno de integración nuevo</strong> y vas a lanzar la primera campaña automatizada. Antes de dar por válidos los veredictos, ¿qué <strong>lista de verificación</strong> aplicas?</p>`,
 solucion:`<h4>Checklist de verificación</h4>
 <ol>
  <li><strong>Instalación, configuración y personalización</strong> de la herramienta, preferiblemente desde repositorio para asegurar misma versión y configuración entre SSP.</li>
  <li><strong>Repetibilidad de montaje/desmontaje</strong>: construir y reconstruir la SAP sin diferencias perceptibles entre entornos.</li>
  <li><strong>Conectividad</strong> con sistemas e interfaces internos y externos: iniciar sesión, acceso al SSP y permisos para logging y reporting (precondiciones).</li>
  <li><strong>Componentes del MTAP probados</strong> individualmente (funcional y no funcionalmente: rendimiento, fugas, interoperabilidad).</li>
  <li>Verificar que un <strong>guion nuevo detecta de verdad</strong> el defecto que dice comprobar, ejecutándolo contra una versión del SSP con ese defecto presente.</li>
 </ol>
 <div class="nota">Un entorno mal verificado produce campañas enteras con veredictos inválidos.</div>`},

{cap:8,k:"k3",lo:"8.1.2",titulo:"Elegir el mecanismo de espera",
 enunciado:`<p>Una suite es <strong>frágil</strong>: los guiones usan <span class="term">sleep(5000)</span> fijos, pero el SSP a veces responde en 1 s y a veces en 8 s.</p>
 <p><strong>a)</strong> ¿Qué mecanismo de espera eliges y por qué?<br><strong>b)</strong> ¿Qué precaución es imprescindible?</p>`,
 solucion:`<h4>a) Mecanismo</h4>
 <p>De peor a mejor: espera <strong>rígida</strong> → <strong>sondeo</strong> de una condición → <strong>suscripción a eventos</strong> del SSP. Sustituye el <span class="term">sleep</span> fijo por una <strong>espera dinámica por sondeo</strong> (espera solo lo necesario; si tarda 8 s, sigue esperando; si tarda 1 s, no malgasta 4 s). Si el lenguaje de guion y el SSP lo permiten, la <strong>suscripción a eventos</strong> es aún más fiable.</p>
 <h4>b) Precaución</h4>
 <p>Incluir siempre un <strong>tiempo de espera máximo (timeout)</strong>; de lo contrario, ante un defecto la prueba podría esperar eternamente.</p>
 <p>Las esperas rígidas son <strong>causa raíz</strong> de muchos defectos de automatización por la imprevisibilidad de los tiempos de respuesta.</p>`}
];

/* =========================================================
   GLOSARIO ES ↔ EN (terminología v2.0 + glosario oficial)
========================================================= */
const GLOSARIO=[
 {es:"Sistema sujeto a prueba (SSP)",en:"SUT — system under test",def:"El software que se prueba: aplicación con o sin IGU, app móvil, protocolo o servicio."},
 {es:"Solución de automatización de la prueba (SAP)",en:"TAS — test automation solution",def:"El conjunto completo de la automatización: entorno, producto de prueba, herramientas y adaptadores."},
 {es:"Marco de trabajo de automatización (MTAP)",en:"TAF — test automation framework",def:"La base de la SAP: arnés/ejecutor, librerías, guiones y juegos de prueba; se estructura en capas."},
 {es:"Arquitectura de automatización (AAP)",en:"TAA — test automation architecture",def:"El diseño técnico concreto de la SAP de un proyecto, derivado de la AAPg."},
 {es:"Arquitectura genérica (AAPg)",en:"gTAA — generic test automation architecture",def:"Modelo de referencia de alto nivel con cuatro capacidades (generación, definición, ejecución, adaptación) e interfaces con SSP, gestión de proyecto, de configuración y de prueba."},
 {es:"Ingeniero de automatización de pruebas (IAP)",en:"TAE — test automation engineer",def:"Rol que diseña, implementa y mantiene la SAP."},
 {es:"Interfaz gráfica de usuario (IGU)",en:"GUI",def:"Interfaz visual del SSP; automatizarla es más lento y frágil que hacerlo por debajo."},
 {es:"Interfaz de programación de aplicaciones (IPA)",en:"API",def:"Interfaz programática del SSP; automatizar por ella es más rápido, estable y barato de mantener."},
 {es:"Capacidad de ser probado",en:"testability",def:"Que el SSP se deje probar: exige controlabilidad, observabilidad y transparencia de la arquitectura."},
 {es:"Controlabilidad",en:"controllability",def:"Poder proporcionar entradas y llevar el SSP a un estado conocido."},
 {es:"Observabilidad",en:"observability",def:"Poder obtener salidas, estados y resultados del SSP."},
 {es:"Prueba de IGU",en:"GUI testing",def:"Automatización a través de la interfaz gráfica del SSP."},
 {es:"Prueba de IPA",en:"API testing",def:"Automatización a través de la interfaz de programación del SSP."},
 {es:"Captura/reproducción",en:"capture/playback",def:"Graba interacciones manuales y las reproduce. Fácil de empezar pero frágil y dependiente de la versión del SSP."},
 {es:"Guionizado lineal",en:"linear scripting",def:"Guiones sin librerías personalizadas; algo más modificable que la grabación, pero difícil de escalar."},
 {es:"Guionizado estructurado",en:"structured scripting",def:"Introduce librerías reutilizables y separa la lógica de negocio; fácil de mantener y escalar, exige programación."},
 {es:"Prueba guiada por datos",en:"data-driven testing",def:"Alimenta los mismos guiones con datos externos (.csv, .xlsx, BD) para ampliar casos rápido."},
 {es:"Prueba guiada por palabra clave",en:"keyword-driven testing",def:"Define acciones de negocio (keywords) que perfiles no programadores combinan en casos."},
 {es:"Prueba basada en modelos",en:"model-based testing (MBT)",def:"Genera casos a partir de un modelo del SSP; corresponde a la capacidad de generación de la AAPg."},
 {es:"Desarrollo guiado por prueba (DGP)",en:"TDD — test-driven development",def:"Metodología rojo → verde → refactorizar que, bien aplicada, produce casos automatizados."},
 {es:"Desarrollo guiado por el comportamiento (DGC)",en:"BDD — behavior-driven development",def:"Escenarios en lenguaje natural (Dado/Cuando/Entonces) vinculados a código de automatización."},
 {es:"Capa de adaptación de la prueba",en:"test adaptation layer",def:"Conecta la SAP con las interfaces del SSP mediante adaptadores (IPA, protocolos, servicios)."},
 {es:"Arnés de prueba",en:"test harness",def:"Ejecutor de pruebas y dispositivos que controlan entorno y datos y agrupan casos."},
 {es:"Guion de prueba",en:"test script",def:"Caso de prueba automatizado; en el MTAP invoca a la lógica de negocio, no a las librerías base."},
 {es:"Paso de prueba",en:"test step",def:"Acción individual dentro de un guion o caso de prueba."},
 {es:"Producto de prueba",en:"testware",def:"Todos los artefactos de la prueba (guiones, datos, configuración, informes); se versiona como el SSP."},
 {es:"Dispositivo de prueba",en:"test fixture",def:"Elemento que fija precondiciones/postcondiciones y permite pruebas repetibles y atómicas."},
 {es:"Riesgo",en:"risk",def:"Factor que puede afectar al despliegue (cortafuegos, recursos, actualizaciones) y exige mitigación."},
 {es:"Análisis estático",en:"static analysis",def:"Inspecciona el código sin ejecutarlo para hallar defectos y vulnerabilidades; clave en DevSecOps."},
 {es:"Validación de esquemas",en:"schema validation",def:"Comprueba que una respuesta cumple la especificación (elementos y tipos) sin aserciones individuales."},
 {es:"Histograma de prueba",en:"test histogram",def:"Informe visual de los datos de prueba que revela tendencias y casos frágiles a refactorizar."},
 {es:"Prueba de contrato",en:"contract testing",def:"Verifica que consumidor y proveedor cumplen un contrato común, sin montar la integración completa."},
 {es:"Fallo de SAP",en:"TAS failure",def:"Estado en que el defecto está en la solución de automatización, no en el SSP."},
 {es:"Modelo de objetos de página",en:"Page Object Model",def:"Encapsula cada pantalla en una clase; un cambio de IGU se corrige en un solo sitio."},
 {es:"Modelo de flujo",en:"flow model",def:"Amplía el Page Object con una segunda fachada que almacena las acciones del usuario y reutiliza pasos."},
 {es:"Fachada",en:"facade",def:"Patrón que oculta los detalles de las librerías base y expone solo lo necesario."},
 {es:"Singleton",en:"singleton",def:"Patrón que garantiza una única instancia, p. ej. un solo controlador que habla con el SSP."},
 {es:"Principios SOLID",en:"SOLID principles",def:"Responsabilidad única, abierto/cerrado, sustitución de Liskov, segregación de interfaces e inversión de dependencias."},
 {es:"Integración continua / entrega continua",en:"CI/CD — IC/EC",def:"Canalizaciones que ejecutan la automatización de forma desatendida como puertas de calidad."},
 {es:"Conmutador de prestación",en:"feature toggle",def:"Interruptor que selecciona qué casos/juegos ejecutar según versión o entorno del SSP."},
 {es:"Lanzamiento canario",en:"canary release",def:"Buena práctica de prueba en producción: liberar a un pequeño porcentaje de usuarios antes de extender."},
 {es:"Despliegue azul/verde",en:"blue/green deployment",def:"Dos entornos gemelos para conmutar entre versión actual y nueva con vuelta atrás rápida."},
 {es:"Prueba A/B",en:"A/B testing",def:"Comparar dos variantes con usuarios reales en producción."},
 {es:"ID de correlación",en:"correlation ID / trace ID",def:"Identificador único por interacción que permite trazar el comportamiento del sistema entre llamadas."},
 {es:"Aserción",en:"assertion",def:"Comprobación que compara un elemento del resultado real con el esperado y fija el veredicto."},
 {es:"Autorreparación",en:"self-healing",def:"Capacidad basada en IA/AA de detectar un localizador cambiado y corregir el caso automáticamente."},
 {es:"Oráculo de prueba",en:"test oracle",def:"Fuente para decidir el resultado esperado; la automatización solo verifica lo que un oráculo puede validar."},
 {es:"DevSecOps",en:"DevSecOps",def:"DevOps con énfasis en seguridad: el análisis estático se integra pronto en la canalización."}
];

/* Registro de la certificación para el motor (app.js) */
window.__CERT__={ meta:META, semanas:SEMANAS, caps:CAPS, examenes:EXAMENES, ejercicios:EJERCICIOS, glosario:GLOSARIO, caso:CASO };
