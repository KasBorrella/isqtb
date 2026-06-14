/* =========================================================
   DATOS · ISTQB Foundation (CTFL v4.0)
   Contenido redactado a partir del Programa de Estudio oficial
   v4.0 (ES) — docs/md/FOUNDATION/programa-estudio.md.
   Define window.__CERT__ y no contiene lógica de la app.
   Español de España.
========================================================= */
const META={
  id:"foundation",
  nombre:"CTFL v4.0 · ISTQB Foundation",
  eyebrow:"ISTQB · Certified Tester Foundation Level",
  titulo:"Probador Certificado · Nivel Básico v4.0<br>Plan de estudio en 10 semanas",
  sub:"Temario en español, preguntas por capítulo y examen final cronometrado. El examen real: 40 preguntas tipo test, 60 minutos, nota de corte del 65 % (26/40).",
  examen:{ preguntas:40, minutos:60, cortePorcentaje:65 },
  planIntro:`<div class="card">
    <h2>Cómo está montado el plan</h2>
    <p>Está pensado para <strong>3–5 horas semanales</strong> durante 10 semanas. Cada semana combina la lectura de un capítulo, su quiz interactivo y, al final, exámenes completos cronometrados. Marca cada semana al completarla (el progreso se guarda en este navegador).</p>
    <div class="nota"><strong>Formato del examen real:</strong> 40 preguntas de opción múltiple, 60 minutos, aprobado con el 65 % (26 de 40 puntos). Cada pregunta vale 1 punto. Si lo haces en un idioma que no es tu lengua materna, puedes solicitar un 25 % más de tiempo. La distribución oficial de preguntas por capítulo es: C1 = 8, C2 = 6, C3 = 4, C4 = 11, C5 = 9, C6 = 2.</div>
  </div>`,
  temarioIntro:`<div class="card">
      <h2>Los 6 capítulos del syllabus v4.0</h2>
      <p>Cada capítulo incluye un resumen en español de los conceptos evaluables (objetivos de aprendizaje) y un quiz de 5 preguntas con corrección razonada. Un capítulo se marca como superado al acertar al menos 4 de 5.</p>
    </div>`,
  recursosHtml:`<div class="card">
    <h2>Exámenes oficiales (práctica)</h2>
    <p>Los modelos de examen oficiales de ISTQB son material con copyright, así que no se incluyen dentro de la app, pero aquí tienes enlaces directos a los PDF para que los hagas cronometrados como práctica adicional. Los modelos A y B están en español; C y D, en inglés.</p>
    <ul>
      <li><strong>Modelo A (ES):</strong> <a href="FOUNDATION/exams/CTFL - V4.0- ES - EJEMPLO DE EXAMEN - PREGUNTAS - MODELO A - V001.00.pdf" target="_blank" rel="noopener">preguntas</a> · <a href="FOUNDATION/answer/e0417e_5041f24ad74642a0a72fba6f4abb72c9.pdf" target="_blank" rel="noopener">respuestas</a></li>
      <li><strong>Modelo B (ES):</strong> <a href="FOUNDATION/exams/CTFL - V4.0- ES - EJEMPLO DE EXAMEN - PREGUNTAS - MODELO B - V01.00.pdf" target="_blank" rel="noopener">preguntas</a></li>
      <li><strong>Sample Exam C (EN):</strong> <a href="FOUNDATION/exams/ISTQB_CTFL_v4.0_Sample-Exam-C-Questions_v1.5.pdf" target="_blank" rel="noopener">questions</a> · <a href="FOUNDATION/answer/ISTQB_CTFL_v4.0_Sample-Exam-C-Answers_v1.5.pdf" target="_blank" rel="noopener">answers</a></li>
      <li><strong>Sample Exam D (EN):</strong> <a href="FOUNDATION/exams/ISTQB_CTFL_v4.0_Sample-Exam-D-Answers_v1.4.pdf" target="_blank" rel="noopener">(set D)</a> · <a href="FOUNDATION/answer/ISTQB_CTFL_v4.0_Sample-Exam-D-Questions_v1.4.pdf" target="_blank" rel="noopener">(set D)</a></li>
    </ul>
    <p style="font-size:13px;color:var(--tinta2)">Sugerencia: en las últimas semanas, alterna el examen de práctica de la app con estos modelos oficiales en condiciones reales (60 min, sin apuntes).</p>
  </div>
  <div class="card">
    <h2>Recursos oficiales</h2>
    <ul>
      <li><strong>Programa de Estudio CTFL v4.0</strong> (istqb.org / sstqb.es): el documento de referencia. Solo se examina sobre los objetivos de aprendizaje (LO) y su nivel K (K1 recordar, K2 comprender, K3 aplicar).</li>
      <li><strong>Exámenes de muestra oficiales</strong> (Modelos A y B en español; Sample Exams C y D en inglés): hazlos cronometrados en las últimas semanas. El estilo de los distractores es idéntico al del examen real.</li>
      <li><strong>Glosario oficial ISTQB</strong> (glossary.istqb.org): tiene versión en español. La terminología del examen es la del glosario, no la coloquial.</li>
      <li><strong>SSTQB</strong> (sstqb.es): board español. Consulta fechas, precio y convocatorias en español.</li>
    </ul>
  </div>
  <div class="card">
    <h2>Consejos de examen</h2>
    <ul>
      <li><strong>El capítulo 4 es el que más pesa</strong> (11 preguntas) y concentra los objetivos K3: tendrás que <em>aplicar</em> técnicas (partición de equivalencia, AVF, tabla de decisión, transición de estado) sobre un caso concreto, no solo describirlas.</li>
      <li><strong>Distingue error → defecto → fallo.</strong> Persona se equivoca (error) → introduce un defecto → al ejecutarse provoca un fallo. Cae casi seguro.</li>
      <li><strong>Verificación ≠ validación.</strong> Verificar = ¿cumple la especificación? Validar = ¿satisface las necesidades reales del usuario?</li>
      <li><strong>Cuidado con los absolutos.</strong> Los 7 principios desmontan frases como «la prueba demuestra que no hay defectos» o «la prueba exhaustiva es posible».</li>
      <li><strong>Caja negra (especificación) vs caja blanca (estructura/código) vs experiencia.</strong> Ubica cada técnica en su familia.</li>
      <li><strong>Gestión del tiempo:</strong> 60 min / 40 preguntas = 1,5 min por pregunta. Marca las dudosas y vuelve al final.</li>
    </ul>
  </div>
  <div class="card">
    <h2>Mini-glosario clave</h2>
    <table>
      <tr><th>Término</th><th>Idea clave</th></tr>
      <tr><td>Error / Defecto / Fallo</td><td>Equivocación humana / desperfecto en el producto / comportamiento incorrecto observado al ejecutar</td></tr>
      <tr><td>Verificación / Validación</td><td>¿Cumple la especificación? / ¿Satisface las necesidades del usuario?</td></tr>
      <tr><td>CC / AC</td><td>Control de Calidad (correctivo, producto: la prueba) / Aseguramiento de la Calidad (preventivo, proceso)</td></tr>
      <tr><td>Prueba estática / dinámica</td><td>Sin ejecutar (revisiones, análisis estático) / ejecutando el software</td></tr>
      <tr><td>Confirmación / Regresión</td><td>¿Se corrigió el defecto? / ¿El cambio rompió algo que funcionaba?</td></tr>
      <tr><td>Partición de equivalencia / AVF</td><td>Una prueba por grupo de valores equivalentes / probar los valores frontera</td></tr>
      <tr><td>Cobertura de rama</td><td>Subsume la de sentencia: 100 % rama ⇒ 100 % sentencia (no al revés)</td></tr>
      <tr><td>DoR / DoD</td><td>Definición de Preparado (criterios de entrada) / Definición de Hecho (criterios de salida)</td></tr>
      <tr><td>Riesgo de proyecto / de producto</td><td>Afecta a la gestión del proyecto (plazos, personas) / a la calidad del producto</td></tr>
      <tr><td>Nivel de riesgo</td><td>Probabilidad × Impacto</td></tr>
    </table>
  </div>`
};

/* =========================================================
   PLAN DE 10 SEMANAS
========================================================= */
const SEMANAS=[
 {cap:1,t:"Capítulo 1 · Fundamentos de la prueba",d:"Lee el cap. 1. Domina: qué es probar (estática/dinámica, verificación/validación), objetivos, probar vs depurar, CC vs AC, la cadena error→defecto→fallo→causa raíz y los 7 principios. Haz el quiz del cap. 1."},
 {cap:1,t:"Capítulo 1 (II) · Proceso, productos y roles",d:"Actividades del proceso de prueba, productos de prueba, trazabilidad, roles (gestión de prueba y probador), competencias, enfoque de equipo completo e independencia de la prueba."},
 {cap:2,t:"Capítulo 2 · Prueba en el ciclo de vida",d:"Modelos CVDS (secuencial, iterativo, incremental, ágil), impacto en la prueba, enfoques test-first (DGP/DGPA/DGC), DevOps, desplazamiento a la izquierda y retrospectivas. Haz el quiz del cap. 2."},
 {cap:2,t:"Capítulo 2 (II) · Niveles y tipos de prueba",d:"Los 5 niveles de prueba, los 4 tipos (funcional, no funcional, caja negra, caja blanca), prueba de confirmación vs regresión y prueba de mantenimiento."},
 {cap:3,t:"Capítulo 3 · Prueba estática",d:"Fundamentos y valor de la prueba estática, estática vs dinámica, beneficios de la retroalimentación temprana, actividades del proceso de revisión, roles y tipos de revisión (informal, guiada, técnica, inspección). Haz el quiz del cap. 3."},
 {cap:4,t:"Capítulo 4 (I) · Técnicas de caja negra",d:"Partición de equivalencia, análisis del valor frontera (2 y 3 valores), tabla de decisión y transición de estado, con sus criterios de cobertura. Practica obteniendo casos de prueba a mano. Es el capítulo con más peso."},
 {cap:4,t:"Capítulo 4 (II) · Caja blanca, experiencia y colaboración",d:"Cobertura de sentencia y de rama (la rama subsume la sentencia), predicción de errores, prueba exploratoria y basada en lista de comprobación, historias de usuario (3C, INVEST), criterios de aceptación y DGPA. Haz el quiz del cap. 4."},
 {cap:5,t:"Capítulo 5 · Gestión de las actividades de prueba",d:"Plan de prueba, criterios de entrada/salida (DoR/DoD), técnicas de estimación, priorización, pirámide y cuadrantes de prueba, gestión del riesgo (proyecto vs producto), métricas, informes, gestión de configuración e informe de defecto. Haz el quiz del cap. 5."},
 {cap:6,t:"Capítulo 6 · Herramientas + repaso transversal",d:"Tipos de herramientas de prueba y ventajas/riesgos de la automatización. Repite los quizzes donde fallaste y repasa el glosario. Haz el quiz del cap. 6."},
 {sec:"simulacro",t:"Simulacros + ajuste final",d:"Haz el examen final de esta app en condiciones reales (60 min, sin apuntes) y los modelos oficiales A/B. Analiza cada fallo con su justificación y vuelve al capítulo correspondiente. Dos días antes: descanso y repaso ligero."}
];

/* =========================================================
   CAPÍTULOS: teoría + quiz (≥4/5 para superar)
========================================================= */
const CAPS=[
{n:1,titulo:"Fundamentos del proceso de prueba",
 html:`
 <h3>¿Qué es probar?</h3>
 <p>La <strong>prueba de software</strong> es un conjunto de actividades para descubrir defectos y <strong>evaluar la calidad</strong> de los artefactos de software (los <em>objetos de prueba</em>). No se reduce a ejecutar el software: incluye planificar, analizar, diseñar y revisar. Implica <strong>verificación</strong> (comprobar que el sistema cumple los requisitos especificados) y <strong>validación</strong> (comprobar que satisface las necesidades reales de los usuarios).</p>
 <ul>
  <li><strong>Prueba dinámica:</strong> ejecuta el software (técnicas y casos de prueba, cap. 4).</li>
  <li><strong>Prueba estática:</strong> no lo ejecuta (revisiones y análisis estático, cap. 3).</li>
 </ul>
 <h3>Objetivos de la prueba</h3>
 <p>Evaluar productos de trabajo, provocar fallos y encontrar defectos, asegurar la cobertura necesaria, reducir el nivel de riesgo, verificar el cumplimiento de requisitos (incluidos contractuales/legales), proporcionar información para decisiones, generar confianza y validar que el objeto de prueba funciona como esperan los implicados. Los objetivos <strong>dependen del contexto</strong>.</p>
 <h3>Probar y depurar</h3>
 <p>Son actividades distintas. La <strong>prueba</strong> desencadena fallos o encuentra defectos; la <strong>depuración</strong> (no es una actividad de prueba) los localiza y elimina: reproducir el fallo, diagnosticar la causa raíz y corregirla. Después, una <strong>prueba de confirmación</strong> comprueba que la corrección funcionó.</p>
 <h3>Aseguramiento (AC) vs Control (CC) de la calidad</h3>
 <p>La prueba es una forma de <strong>control de la calidad (CC)</strong>: enfoque <em>correctivo</em> orientado al <em>producto</em>. El <strong>aseguramiento de la calidad (AC)</strong> es <em>preventivo</em> y orientado al <em>proceso</em> (si un buen proceso se sigue bien, produce un buen producto). No son lo mismo.</p>
 <h3>Errores, defectos, fallos y causas raíz</h3>
 <p>Una persona comete un <strong>error</strong> (equivocación) que introduce un <strong>defecto</strong> en un producto de trabajo; si se ejecuta ese defecto, puede producirse un <strong>fallo</strong> (comportamiento incorrecto observable). No todos los defectos provocan fallos. La <strong>causa raíz</strong> es la razón fundamental del problema; tratarla evita defectos similares.</p>
 <h3>Los 7 principios de la prueba</h3>
 <ol>
  <li><strong>La prueba muestra la presencia de defectos, no su ausencia.</strong></li>
  <li><strong>La prueba exhaustiva es imposible</strong> (salvo casos triviales): hay que priorizar.</li>
  <li><strong>La prueba temprana ahorra tiempo y dinero</strong> (desplazamiento a la izquierda).</li>
  <li><strong>Los defectos se agrupan</strong> (principio de Pareto: pocos módulos concentran la mayoría).</li>
  <li><strong>Las pruebas se desgastan</strong> (paradoja del pesticida): repetidas, detectan menos defectos nuevos.</li>
  <li><strong>La prueba depende del contexto.</strong></li>
  <li><strong>Falacia de la ausencia de defectos:</strong> un sistema sin defectos puede seguir sin satisfacer las necesidades del usuario (hace falta validación, no solo verificación).</li>
 </ol>
 <h3>Proceso, productos y roles</h3>
 <p>El proceso de prueba agrupa actividades (a menudo iterativas o en paralelo): planificación, monitorización y control, análisis (¿qué probar?), diseño (¿cómo probar?), implementación, ejecución y compleción. Genera <strong>productos de prueba</strong> (plan, condiciones, casos, datos, informes...). La <strong>trazabilidad</strong> entre la base de prueba y los productos de prueba permite evaluar cobertura y analizar el impacto de los cambios.</p>
 <p>Dos roles principales: <strong>gestión de la prueba</strong> (responsabilidad global del proceso y del equipo) y <strong>probador</strong> (actividades técnicas). El <strong>enfoque de equipo completo</strong> (whole-team) reparte la responsabilidad de la calidad en todo el equipo. La <strong>independencia de la prueba</strong> (que pruebe alguien distinto del autor) suele encontrar más defectos, pero un exceso puede aislar al equipo de prueba.</p>
 <h3>Las actividades del proceso de prueba en detalle</h3>
 <p>Aunque dependen del contexto, hay un conjunto común de actividades (a menudo iterativas o solapadas):</p>
 <table>
  <tr><th>Actividad</th><th>En qué consiste</th></tr>
  <tr><td><strong>Planificación</strong></td><td>Definir objetivos de prueba y el enfoque para alcanzarlos dentro de las restricciones (cap. 5.1).</td></tr>
  <tr><td><strong>Monitorización y control</strong></td><td>Comparar continuamente el avance real con el plan y tomar acciones correctivas (cap. 5.3).</td></tr>
  <tr><td><strong>Análisis</strong></td><td>Analizar la base de prueba para identificar prestaciones comprobables y definir/priorizar condiciones de prueba. Responde a «<em>¿qué probar?</em>».</td></tr>
  <tr><td><strong>Diseño</strong></td><td>Convertir las condiciones en casos de prueba y otros productos, identificar datos y entorno. Responde a «<em>¿cómo probar?</em>».</td></tr>
  <tr><td><strong>Implementación</strong></td><td>Crear o adquirir lo necesario para ejecutar (datos, guiones), organizar procedimientos en conjuntos y preparar el entorno.</td></tr>
  <tr><td><strong>Ejecución</strong></td><td>Ejecutar las pruebas, comparar resultados reales con esperados y registrar los resultados.</td></tr>
  <tr><td><strong>Compleción</strong></td><td>Consolidar la experiencia, archivar el testware reutilizable y elaborar el informe de compleción (en hitos: fin de nivel, iteración, entrega).</td></tr>
 </table>
 <h3>Productos de prueba (testware) y base de prueba</h3>
 <p>Cada actividad genera <strong>productos de prueba</strong>: de la planificación salen el plan de prueba y el calendario; del análisis, las condiciones de prueba; del diseño, los casos de prueba y los datos; de la ejecución, los registros de prueba y los informes de defecto; de la compleción, los informes de compleción. La <strong>base de prueba</strong> es la información de la que se derivan las pruebas (requisitos, historias de usuario, especificaciones, riesgos). La <strong>trazabilidad</strong> bidireccional entre base de prueba, condiciones, casos, resultados y defectos permite medir la cobertura, valorar el impacto de un cambio y dar soporte a auditorías.</p>
 <h3>Competencias del probador y enfoque de equipo completo</h3>
 <p>Probar es una actividad intelectual: requiere <strong>competencias genéricas</strong> (conocimiento del dominio y de la prueba, pensamiento analítico y crítico, comunicación, atención al detalle, curiosidad, escepticismo) y <strong>competencias interpersonales</strong> para comunicar malas noticias de forma constructiva. El <strong>enfoque de equipo completo</strong> (whole-team) reparte la responsabilidad de la calidad en todo el equipo: cualquier miembro con conocimientos de prueba contribuye, lo que fomenta la colaboración pero exige que los probadores trabajen estrechamente con desarrollo y negocio.</p>
 <h3>Independencia de la prueba</h3>
 <p>Probar con cierta <strong>independencia</strong> (que no pruebe solo el autor del código) suele aumentar la efectividad, porque un punto de vista distinto detecta tipos de defecto que el autor no ve por sesgo de confirmación. Grados: el propio autor, un compañero del equipo, un equipo de prueba independiente dentro de la organización, o externos. <strong>Ventajas:</strong> reconoce distintos fallos y es más objetivo. <strong>Inconvenientes:</strong> aislamiento del equipo, cuello de botella, y que desarrollo pierda el sentido de responsabilidad sobre la calidad. Lo habitual es combinar varios niveles de independencia.</p>
 <div class="nota">Truco de examen: si una frase contiene un absoluto («demuestra que NO hay defectos», «probar TODO es posible», «la automatización elimina la prueba manual»), casi siempre es un distractor que choca con los 7 principios.</div>`,
 quiz:[
  {k:"k2",q:"¿Qué afirmación describe correctamente la diferencia entre verificación y validación?",
   op:["Verificación es comprobar que se satisfacen las necesidades del usuario; validación es comprobar que se cumple la especificación","Verificación es comprobar que se cumple la especificación; validación es comprobar que se satisfacen las necesidades del usuario","Son sinónimos: ambas comprueban el cumplimiento de requisitos","Verificación solo se hace con prueba dinámica y validación solo con prueba estática"],
   c:1,e:"Verificar responde a «¿cumple la especificación?» y validar a «¿satisface las necesidades reales del usuario?». La prueba implica ambas. Tanto la estática como la dinámica pueden servir para verificar y validar."},
  {k:"k2",q:"Un programador escribe «>=» donde el requisito pedía «>». Al ejecutarse esa línea, el sistema acepta un valor que debería rechazar. ¿Cómo se denominan, respectivamente, la equivocación del programador, el «>=» en el código y el comportamiento observado?",
   op:["Defecto, fallo y error","Error, defecto y fallo","Fallo, error y defecto","Causa raíz, error y defecto"],
   c:1,e:"La persona comete un error (equivocación), que introduce un defecto en el código (el «>=»), que al ejecutarse provoca un fallo (comportamiento incorrecto observable). Es la cadena error → defecto → fallo."},
  {k:"k2",q:"¿Cuál de las siguientes es la mejor descripción del aseguramiento de la calidad (AC)?",
   op:["Un enfoque correctivo orientado al producto, del que la prueba es el principal ejemplo","Un enfoque preventivo orientado al proceso, basado en que un buen proceso bien seguido produce un buen producto","La actividad de localizar y corregir los defectos encontrados durante la prueba","La ejecución de pruebas de regresión automatizadas tras cada cambio"],
   c:1,e:"El AC es preventivo y orientado al proceso. La prueba es control de calidad (CC): correctivo y orientado al producto. Localizar y corregir defectos es depuración, no AC."},
  {k:"k2",q:"Un equipo lleva un año ejecutando exactamente el mismo juego de pruebas de regresión y ya casi no encuentra defectos nuevos. ¿Qué principio de la prueba explica este fenómeno?",
   op:["Los defectos se agrupan","La prueba exhaustiva es imposible","Las pruebas se desgastan (paradoja del pesticida)","La falacia de la ausencia de defectos"],
   c:2,e:"Repetir las mismas pruebas las vuelve cada vez menos efectivas para hallar defectos nuevos (paradoja del pesticida). La solución es revisar y renovar las pruebas y los datos de prueba."},
  {k:"k2",q:"Tras corregir un defecto, ¿qué actividad NO forma parte de la prueba propiamente dicha?",
   op:["La prueba de confirmación que comprueba que el defecto se ha resuelto","La prueba de regresión que comprueba que el cambio no rompió otras partes","La depuración: reproducir, diagnosticar la causa raíz y corregir el defecto","El análisis de prueba para identificar nuevas condiciones de prueba"],
   c:2,e:"La depuración (reproducir, diagnosticar y corregir) es responsabilidad del desarrollo, no es una actividad de prueba. La confirmación, la regresión y el análisis sí lo son."}
 ]},

{n:2,titulo:"Prueba a lo largo del ciclo de vida de desarrollo",
 html:`
 <h3>Modelos de ciclo de vida (CVDS) y su impacto</h3>
 <p>Un modelo de CVDS describe cómo se relacionan las fases del desarrollo. Tipos: <strong>secuenciales</strong> (cascada, modelo en V), <strong>iterativos</strong> (espiral, prototipado) e <strong>incrementales</strong> (Proceso Unificado), además de prácticas <strong>Ágiles</strong> (Scrum, XP, Kanban...). La elección del CVDS influye en el alcance y cronología de la prueba, el nivel de documentación, las técnicas, el grado de automatización y el rol del probador.</p>
 <p><strong>Buenas prácticas independientes del modelo:</strong> cada actividad de desarrollo tiene su actividad de prueba; cada nivel de prueba tiene objetivos específicos (sin redundancia); el análisis y diseño de prueba empieza durante la fase de desarrollo correspondiente (prueba temprana); y los probadores revisan los productos de trabajo en cuanto hay borradores.</p>
 <h3>La prueba como impulsor del desarrollo (test-first)</h3>
 <ul>
  <li><strong>DGP (TDD):</strong> primero la prueba, luego el código que la satisface, luego refactorizar.</li>
  <li><strong>DGPA (ATDD):</strong> las pruebas se derivan de los criterios de aceptación antes de implementar.</li>
  <li><strong>DGC (BDD):</strong> comportamiento expresado en lenguaje natural <span class="term">Dado/Cuando/Entonces</span>, traducido a pruebas ejecutables.</li>
 </ul>
 <p>Los tres aplican la prueba temprana y el <strong>desplazamiento a la izquierda</strong> (shift-left): probar lo antes posible, sin descuidar la prueba posterior.</p>
 <h3>DevOps y retrospectivas</h3>
 <p><strong>DevOps</strong> une desarrollo (con prueba) y operaciones con prácticas de <strong>integración continua (IC)</strong> y <strong>entrega continua (EC)</strong>: feedback rápido, regresión automatizada y entornos estables; pero exige montar y mantener la canalización y las pruebas automatizadas, y la prueba manual sigue siendo necesaria. Las <strong>retrospectivas</strong> (qué fue bien, qué mejorar, cómo) impulsan la mejora continua del proceso y del equipo.</p>
 <h3>Niveles de prueba (5)</h3>
 <table>
  <tr><th>Nivel</th><th>Se concentra en</th></tr>
  <tr><td><strong>Prueba de componente</strong> (unitaria)</td><td>Componentes aislados; la hacen los desarrolladores.</td></tr>
  <tr><td><strong>Integración de componentes</strong></td><td>Interfaces e interacciones entre componentes (ascendente, descendente, big-bang).</td></tr>
  <tr><td><strong>Prueba de sistema</strong></td><td>Comportamiento de todo el sistema, de extremo a extremo (funcional y no funcional).</td></tr>
  <tr><td><strong>Integración de sistemas</strong></td><td>Interfaces con otros sistemas y servicios externos.</td></tr>
  <tr><td><strong>Prueba de aceptación</strong></td><td>Validación y preparación para el despliegue (PAU, operativa, contractual/regulatoria, alfa, beta).</td></tr>
 </table>
 <h3>Tipos de prueba (4)</h3>
 <p><strong>Funcional</strong> («qué» hace: completitud, corrección y pertinencia), <strong>no funcional</strong> («lo bien» que se comporta: rendimiento, usabilidad, fiabilidad, seguridad... según ISO 25010), <strong>caja negra</strong> (basada en la especificación) y <strong>caja blanca</strong> (basada en la estructura/código). Los cuatro tipos se aplican en cualquier nivel.</p>
 <h3>Confirmación, regresión y mantenimiento</h3>
 <p>La <strong>prueba de confirmación</strong> verifica que un defecto se corrigió; la <strong>prueba de regresión</strong> verifica que el cambio no introdujo efectos adversos en lo que ya funcionaba (buena candidata a automatizar; conviene un <em>análisis de impacto</em>). La <strong>prueba de mantenimiento</strong> se dispara por modificaciones (mejoras, correctivos, hotfix), migraciones/actualizaciones del entorno y retirada del sistema.</p>
 <h3>Tipos de modelos de ciclo de vida</h3>
 <ul>
  <li><strong>Secuenciales</strong> (cascada, modelo en V): cada fase empieza al terminar la anterior. En el modelo en V cada fase de desarrollo tiene su nivel de prueba asociado. La prueba dinámica solo puede empezar tarde, cuando hay código ejecutable; pero las actividades estáticas (revisión de requisitos, diseño de pruebas) sí se adelantan.</li>
  <li><strong>Iterativos</strong> (espiral, prototipado): el sistema se construye en ciclos repetidos que refinan el producto.</li>
  <li><strong>Incrementales</strong> (Proceso Unificado): se entrega funcionalidad en trozos sucesivos. Iterativos e incrementales permiten probar estática y dinámicamente en cada incremento, con regresión frecuente.</li>
  <li><strong>Ágiles</strong> (Scrum, XP, Kanban): asumen el cambio durante todo el proyecto; favorecen documentación ligera, mucha automatización de regresión y técnicas basadas en la experiencia.</li>
 </ul>
 <h3>Qué distingue a cada nivel de prueba</h3>
 <p>Para evitar solapamientos y huecos, los niveles se diferencian por: <strong>objeto de prueba</strong>, <strong>objetivos</strong>, <strong>base de prueba</strong>, <strong>defectos y fallos típicos</strong>, y <strong>enfoque y responsabilidades</strong>. Por ejemplo, la prueba de componente la hacen los desarrolladores sobre el código con base en el diseño de componentes; la prueba de aceptación la hacen los usuarios sobre el sistema completo con base en requisitos de negocio, procesos y criterios de aceptación.</p>
 <h3>Características de calidad no funcionales (ISO/IEC 25010)</h3>
 <p>La prueba no funcional comprueba «lo bien» que se comporta el sistema según estas características: <strong>eficiencia de desempeño</strong> (rendimiento), <strong>compatibilidad</strong>, <strong>usabilidad</strong>, <strong>fiabilidad</strong>, <strong>seguridad</strong>, <strong>mantenibilidad</strong> y <strong>portabilidad</strong>. Conviene probarlas pronto, porque un defecto no funcional descubierto tarde (p. ej., un problema de rendimiento estructural) puede amenazar todo el proyecto. Muchas pruebas no funcionales se derivan de pruebas funcionales añadiendo una restricción (tiempo de respuesta, plataforma, carga).</p>
 <h3>Caja negra y caja blanca como tipos de prueba</h3>
 <p>Además de funcional/no funcional, se distinguen la prueba de <strong>caja negra</strong> (basada en la especificación: comprueba el comportamiento frente a lo especificado) y la de <strong>caja blanca</strong> (basada en la estructura: cubre el código/arquitectura interna). Los cuatro tipos pueden aplicarse en cualquier nivel, con distinto enfoque.</p>
 <div class="nota">No confundas <strong>nivel</strong> (cuándo/sobre qué granularidad se prueba: componente, integración, sistema, aceptación) con <strong>tipo</strong> (qué objetivo persigue: funcional, no funcional, caja negra, caja blanca). Un mismo tipo puede aplicarse en varios niveles.</div>`,
 quiz:[
  {k:"k2",q:"¿Qué nivel de prueba se concentra en las interfaces y el intercambio de datos entre el sistema sujeto a prueba y otros sistemas o servicios externos?",
   op:["Prueba de integración de componentes","Prueba de integración de sistemas","Prueba de componente","Prueba de aceptación de usuario"],
   c:1,e:"La integración de sistemas prueba las interfaces con otros sistemas/servicios externos. La integración de componentes se ocupa de las interfaces entre componentes internos del mismo sistema."},
  {k:"k2",q:"En el desarrollo guiado por el comportamiento (DGC/BDD), ¿cómo se expresan habitualmente los casos de prueba?",
   op:["Como diagramas de transición de estado","En lenguaje natural con el formato Dado/Cuando/Entonces, traducible a pruebas ejecutables","Únicamente como código de prueba unitaria escrito por desarrolladores","Como una tabla de decisión de entrada limitada"],
   c:1,e:"El DGC describe el comportamiento esperado en lenguaje natural sencillo (Dado/Cuando/Entonces), comprensible por los implicados y que luego se traduce a pruebas ejecutables."},
  {k:"k2",q:"¿Qué describe mejor el enfoque de «desplazamiento a la izquierda» (shift-left)?",
   op:["Posponer la prueba hasta tener el sistema completo para ahorrar esfuerzo","Realizar la prueba lo antes posible en el ciclo de vida, sin descuidar la prueba posterior","Trasladar toda la prueba al equipo de operaciones","Sustituir la prueba dinámica por prueba estática"],
   c:1,e:"Desplazar a la izquierda es aplicar el principio de prueba temprana: empezar a probar (revisiones, casos antes del código, IC, análisis estático) cuanto antes. No significa abandonar la prueba más avanzada."},
  {k:"k2",q:"Se corrige un defecto en el módulo de facturación. Se vuelve a ejecutar el módulo de informes (que no se tocó) y se descubre que ahora calcula mal un total. ¿Qué tipo de prueba ha detectado este problema?",
   op:["Prueba de confirmación","Prueba de regresión","Prueba de aceptación","Prueba de humo"],
   c:1,e:"La prueba de regresión busca efectos adversos de un cambio en partes que antes funcionaban. La confirmación, en cambio, comprueba que el defecto original concreto quedó resuelto."},
  {k:"k2",q:"¿Cuál de los siguientes es un desencadenante típico de la prueba de mantenimiento?",
   op:["La redacción inicial del plan de prueba del proyecto","La migración del sistema a una nueva plataforma o entorno operativo","La primera definición de las historias de usuario","La planificación de la primera iteración"],
   c:1,e:"Los desencadenantes del mantenimiento son modificaciones (mejoras, correctivos, hotfix), actualizaciones/migraciones de entorno y la retirada del sistema. Las demás opciones son actividades previas a la operación."}
 ]},

{n:3,titulo:"Prueba estática",
 html:`
 <h3>Fundamentos</h3>
 <p>La <strong>prueba estática</strong> no ejecuta el software: evalúa productos de trabajo mediante <strong>revisiones</strong> (examen manual) o <strong>análisis estático</strong> (con herramienta). Sirve tanto para verificación como para validación. El análisis estático detecta defectos en el código (variables no inicializadas, código inalcanzable, desviaciones de estándares, vulnerabilidades) sin casos de prueba y suele integrarse en la IC.</p>
 <h3>Productos examinables y valor</h3>
 <p>Casi cualquier producto de trabajo legible puede revisarse: requisitos, código, planes y casos de prueba, historias de usuario, contratos, modelos. Para el <em>análisis estático</em> se necesita una estructura formal (modelos, código, texto con sintaxis). <strong>Valor:</strong> detecta defectos muy temprano (principio de prueba temprana), encuentra defectos que la prueba dinámica no puede (código inalcanzable, requisitos ambiguos), crea entendimiento compartido entre implicados y reduce el coste total, porque corregir tarde es mucho más caro.</p>
 <h3>Estática vs dinámica</h3>
 <ul>
  <li>La estática <strong>encuentra los defectos directamente</strong>; la dinámica <strong>provoca fallos</strong> de los que luego se deducen los defectos.</li>
  <li>La estática se aplica a productos <strong>no ejecutables</strong>; la dinámica solo a ejecutables.</li>
  <li>La estática mide cualidades que no dependen de la ejecución (p. ej., mantenibilidad); la dinámica, las que sí (p. ej., rendimiento).</li>
 </ul>
 <h3>Actividades del proceso de revisión (ISO/IEC 20246)</h3>
 <ol>
  <li><strong>Planificación:</strong> alcance, propósito, características de calidad, criterios de salida, esfuerzo.</li>
  <li><strong>Inicio de la revisión:</strong> asegurar que todos tienen acceso y conocen su rol.</li>
  <li><strong>Revisión individual:</strong> cada revisor examina y registra anomalías, recomendaciones y preguntas.</li>
  <li><strong>Comunicación y análisis:</strong> las anomalías se analizan (no toda anomalía es defecto), se decide su estado y acciones.</li>
  <li><strong>Corrección y suministro de información:</strong> crear informes de defecto, alcanzar criterios de salida, comunicar resultados.</li>
 </ol>
 <h3>Roles en las revisiones</h3>
 <p><strong>Gestor</strong> (decide qué se revisa y aporta recursos), <strong>autor</strong> (crea y corrige el producto), <strong>moderador/facilitador</strong> (dirige la reunión, entorno seguro), <strong>escriba/grabador</strong> (registra anomalías y decisiones), <strong>revisor</strong> (examina) y <strong>líder de la revisión</strong> (responsabilidad global, decide quién participa).</p>
 <h3>Tipos de revisión (de informal a formal)</h3>
 <table>
  <tr><th>Tipo</th><th>Rasgos</th></tr>
  <tr><td><strong>Informal</strong></td><td>Sin proceso definido ni salida documentada formal. Objetivo: detectar anomalías.</td></tr>
  <tr><td><strong>Guiada</strong> (walkthrough)</td><td>Dirigida por el autor. Muchos objetivos: evaluar calidad, formar, generar ideas, consenso.</td></tr>
  <tr><td><strong>Técnica</strong></td><td>Revisores técnicamente cualificados, dirigida por un moderador. Busca consenso y decisiones técnicas.</td></tr>
  <tr><td><strong>Inspección</strong></td><td>La más formal: sigue el proceso completo, recopila métricas. Objetivo: máximo nº de anomalías. El autor no puede ser revisor ni escriba.</td></tr>
 </table>
 <h3>Defectos que la prueba estática detecta mejor</h3>
 <p>Por su naturaleza temprana y sin ejecución, la estática es especialmente eficaz para encontrar: defectos en <strong>requisitos</strong> (ambigüedades, inconsistencias, contradicciones, omisiones, duplicaciones), defectos de <strong>diseño</strong> (modularidad deficiente, estructuras de datos ineficaces), ciertos defectos de <strong>código</strong> (variables no inicializadas o no declaradas, código inalcanzable o duplicado, complejidad excesiva), <strong>desviaciones de estándares</strong>, <strong>interfaces incorrectas</strong> (número/tipo/orden de parámetros) y algunas <strong>vulnerabilidades de seguridad</strong> (p. ej., desbordamientos de búfer). También detecta lagunas de cobertura en la base de prueba.</p>
 <h3>Beneficios de la retroalimentación temprana y frecuente</h3>
 <p>La participación temprana de los implicados evita construir el producto equivocado. Una retroalimentación frecuente comunica pronto los problemas de calidad, evita malentendidos sobre los requisitos, asegura que los cambios se entienden e implementan antes, y permite al equipo concentrarse en lo que más valor aporta. Corregir tarde es mucho más caro que prevenir: por eso, aunque las revisiones cuestan esfuerzo, reducen el coste total del proyecto.</p>
 <h3>El análisis estático con herramientas</h3>
 <p>El <strong>análisis estático</strong> examina código o modelos sin ejecutarlos, normalmente con herramienta, y suele integrarse en la integración continua. Detecta defectos de forma más eficiente que la prueba dinámica para ciertos patrones de código y evalúa también la <strong>mantenibilidad</strong> y la <strong>seguridad</strong>. Necesita una estructura formal (código, modelos, texto con sintaxis), a diferencia de la revisión, que puede aplicarse a cualquier producto legible.</p>
 <h3>Comparación de los tipos de revisión</h3>
 <table>
  <tr><th>Tipo</th><th>Dirige</th><th>Formalidad</th><th>Objetivo principal</th></tr>
  <tr><td>Informal</td><td>—</td><td>Ninguna</td><td>Detectar anomalías rápido, sin salida documentada formal</td></tr>
  <tr><td>Guiada (walkthrough)</td><td>El autor</td><td>Baja-media</td><td>Evaluar calidad, formar, generar ideas y consenso</td></tr>
  <tr><td>Técnica</td><td>Moderador</td><td>Media-alta</td><td>Consenso y decisiones técnicas (revisores cualificados)</td></tr>
  <tr><td>Inspección</td><td>Moderador</td><td>Máxima</td><td>Encontrar el máximo de anomalías; recopila métricas</td></tr>
 </table>
 <p>El nivel de formalidad depende del CVDS, la madurez del proceso, la criticidad y complejidad del producto, y los requisitos legales o de auditoría. Un mismo producto puede revisarse con varios tipos (primero informal, luego formal).</p>
 <div class="nota">Factores de éxito: objetivos claros y criterios de salida medibles; <strong>nunca evaluar a las personas</strong>; el tipo de revisión adecuado; revisar en fragmentos pequeños; dar tiempo de preparación; apoyo de la dirección; y formación de los participantes.</div>`,
 quiz:[
  {k:"k2",q:"¿Cuál es una diferencia correcta entre prueba estática y prueba dinámica?",
   op:["La prueba estática provoca fallos; la dinámica encuentra los defectos directamente","La prueba estática encuentra los defectos directamente; la dinámica provoca fallos de los que se deducen los defectos","La prueba estática solo se aplica a código ejecutable","La prueba dinámica puede aplicarse a productos de trabajo no ejecutables"],
   c:1,e:"La estática localiza el defecto directamente (no ejecuta nada); la dinámica provoca un fallo y de él se deduce el defecto mediante análisis. La estática se aplica también a productos no ejecutables; la dinámica, solo a ejecutables."},
  {k:"k1",q:"En una inspección, ¿qué restricción se aplica al autor del producto de trabajo?",
   op:["El autor debe actuar como moderador de la reunión","El autor no puede actuar como revisor ni como escriba","El autor debe ser siempre el líder de la revisión","El autor no puede asistir a la reunión de revisión"],
   c:1,e:"La inspección es la revisión más formal; para garantizar objetividad, el autor no puede asumir los roles de revisor ni de escriba."},
  {k:"k2",q:"¿Cuál de los siguientes es un valor característico de la prueba estática?",
   op:["Mide la eficiencia de rendimiento del sistema en ejecución","Detecta defectos muy temprano y permite encontrar defectos que la prueba dinámica no puede (p. ej., requisitos ambiguos o código inalcanzable)","Sustituye por completo a la prueba dinámica","Solo puede aplicarse al código fuente"],
   c:1,e:"La estática detecta defectos en fases tempranas y halla defectos que la dinámica no puede (ambigüedades en requisitos, código inalcanzable). El rendimiento se mide con prueba dinámica, y la estática se aplica a muchos productos, no solo al código."},
  {k:"k2",q:"Durante la actividad de «comunicación y análisis» de una revisión, ¿qué afirmación es correcta?",
   op:["Toda anomalía identificada es, por definición, un defecto","Las anomalías se analizan porque no todas son defectos, y se decide su estado y las acciones requeridas","El autor decide en solitario qué anomalías son válidas","Las anomalías se corrigen sin registrarlas para ahorrar tiempo"],
   c:1,e:"No toda anomalía es un defecto; por eso se analizan y se discuten para decidir su estado, propiedad y acciones. Los defectos confirmados se registran en un informe de defecto."},
  {k:"k1",q:"¿Cuál de los siguientes es un factor de éxito de las revisiones?",
   op:["Utilizar la revisión para evaluar el desempeño de los participantes","Definir objetivos claros y criterios de salida medibles, sin evaluar nunca a las personas","Revisar el producto de trabajo completo en una única sesión, sea cual sea su tamaño","Prescindir de la preparación previa para acelerar la reunión"],
   c:1,e:"Objetivos claros, criterios de salida medibles y no evaluar nunca a las personas son factores de éxito. Conviene revisar en fragmentos pequeños y dar tiempo de preparación."}
 ]},

{n:4,titulo:"Análisis y diseño de la prueba",
 html:`
 <h3>Familias de técnicas</h3>
 <ul>
  <li><strong>Caja negra</strong> (basadas en la especificación): el comportamiento especificado, sin mirar la estructura interna. Si la implementación cambia pero el comportamiento no, los casos siguen valiendo.</li>
  <li><strong>Caja blanca</strong> (basadas en la estructura): el código/estructura interna. Solo se diseñan tras el diseño o la implementación.</li>
  <li><strong>Basadas en la experiencia:</strong> aprovechan el conocimiento del probador; complementan a las anteriores.</li>
 </ul>
 <h3>Caja negra</h3>
 <p><strong>Partición de equivalencia (PE):</strong> divide los datos en particiones que se procesan igual; basta una prueba por partición. Hay particiones <strong>válidas</strong> e <strong>inválidas</strong>; no se solapan. Cobertura de «Cada Elección»: usar cada partición al menos una vez.</p>
 <p><strong>Análisis del valor frontera (AVF):</strong> practica las <em>fronteras</em> de las particiones ordenadas, donde son frecuentes los errores. <strong>AVF de 2 valores</strong>: el valor frontera y su vecino de la partición adyacente. <strong>AVF de 3 valores</strong>: el valor frontera y sus <em>dos</em> vecinos (más riguroso; detecta defectos que el de 2 pasa por alto).</p>
 <p><strong>Tabla de decisión:</strong> registra combinaciones de condiciones → acciones (reglas en columnas). Útil para reglas de negocio complejas. Cobertura 100 %: practicar todas las columnas (reglas) factibles.</p>
 <p><strong>Transición de estado:</strong> estados, eventos, transiciones (con condición de guarda y acción). Coberturas: <em>todos los estados</em> (la más débil), <em>transiciones válidas</em> (conmutador 0, la más usada) y <em>todas las transiciones</em> (válidas + intento de las inválidas, mínimo para software crítico). Lograr cobertura de transiciones válidas garantiza la de todos los estados.</p>
 <h3>Caja blanca</h3>
 <p><strong>Cobertura de sentencia:</strong> % de sentencias ejecutables practicadas. <strong>Cobertura de rama:</strong> % de ramas (resultados de decisiones) practicadas. Clave: la <strong>cobertura de rama subsume la de sentencia</strong> — 100 % de rama ⇒ 100 % de sentencia, pero no al revés. Valor de la caja blanca: detecta defectos aunque la especificación sea vaga y aporta una medida objetiva de cobertura del código.</p>
 <h3>Basadas en la experiencia</h3>
 <ul>
  <li><strong>Predicción de errores:</strong> anticipar dónde fallará el software según experiencia (los «ataques de defecto» la sistematizan con listas).</li>
  <li><strong>Prueba exploratoria:</strong> diseñar, ejecutar y evaluar a la vez mientras se aprende; a menudo basada en sesiones con un contrato de prueba. Útil con especificaciones escasas o poco tiempo.</li>
  <li><strong>Basada en lista de comprobación:</strong> cubrir las condiciones de una checklist (formuladas como preguntas), que se actualiza periódicamente.</li>
 </ul>
 <h3>Enfoques basados en la colaboración</h3>
 <p>Buscan <strong>evitar</strong> defectos, no solo detectarlos. <strong>Historias de usuario</strong>: las «3 C» (Cuartilla/Card, Conversación, Confirmación) y el criterio <span class="term">INVEST</span> (Independiente, Negociable, Valiosa, Estimable, Pequeña, Comprobable). Formato: «Como [rol], quiero [objetivo], para [valor]». Los <strong>criterios de aceptación</strong> son las condiciones para aceptar la historia (orientados a escenario <em>Dado/Cuando/Entonces</em> u orientados a reglas). El <strong>DGPA (ATDD)</strong> crea los casos de prueba <em>antes</em> de implementar, en un taller de especificación con varias perspectivas (cliente, desarrollo, prueba).</p>
 <h3>Ejemplo resuelto · Partición de equivalencia + AVF</h3>
 <p>Un descuento depende del importe: <em>&lt; 100 €</em> → 0 %; <em>100–500 €</em> (incluidos) → 10 %; <em>&gt; 500 €</em> → 20 %.</p>
 <ul>
  <li><strong>Particiones válidas (PE):</strong> {&lt;100}, {100–500}, {&gt;500}. Basta un valor representativo de cada una (p. ej., 50, 300, 800). Cobertura «Cada Elección»: usar cada partición al menos una vez.</li>
  <li><strong>Fronteras (AVF):</strong> 100 y 500 son los valores frontera. AVF de 2 valores en la frontera 500 → {500, 501}. AVF de 3 valores → {499, 500, 501}, más riguroso porque detecta errores de «&lt;=» vs «&lt;».</li>
 </ul>
 <h3>Ejemplo resuelto · Tabla de decisión</h3>
 <p>Un cliente obtiene envío gratis si es socio <em>o</em> si el pedido supera 50 €. Condiciones: «es socio» y «pedido &gt; 50 €». Acción: «envío gratis».</p>
 <table>
  <tr><th>Regla</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th></tr>
  <tr><td>¿Es socio?</td><td>V</td><td>V</td><td>F</td><td>F</td></tr>
  <tr><td>¿Pedido &gt; 50 €?</td><td>V</td><td>F</td><td>V</td><td>F</td></tr>
  <tr><td><strong>Envío gratis</strong></td><td>X</td><td>X</td><td>X</td><td>—</td></tr>
 </table>
 <p>La cobertura del 100 % exige practicar todas las columnas (reglas) factibles: aquí 4 casos de prueba. La técnica revela lagunas y contradicciones en las reglas de negocio.</p>
 <h3>Ejemplo resuelto · Transición de estado</h3>
 <p>Un cajero: estado <em>Inactivo</em> → (insertar tarjeta) → <em>Pidiendo PIN</em> → (PIN correcto) → <em>Operando</em>; (PIN incorrecto ×3) → <em>Tarjeta retenida</em>. Coberturas:</p>
 <ul>
  <li><strong>Todos los estados</strong> (la más débil): visitar cada estado al menos una vez.</li>
  <li><strong>Transiciones válidas / conmutador 0</strong> (la más usada): recorrer cada transición válida; garantiza también todos los estados.</li>
  <li><strong>Todas las transiciones</strong>: válidas + <em>intentar</em> las inválidas (p. ej., insertar una segunda tarjeta estando «Operando»); mínimo para software crítico. Probar las inválidas de una en una evita el enmascaramiento de defectos.</li>
 </ul>
 <h3>Caja blanca · matices de cobertura</h3>
 <p>Alcanzar el 100 % de <strong>sentencia</strong> no garantiza haber probado toda la lógica de decisión (puede faltar la rama «falsa» de un «if» sin «else»). El 100 % de <strong>rama</strong> sí garantiza el 100 % de sentencia (subsunción). Aun así, ninguna cobertura detecta todos los defectos: una división por cero solo falla con el dato adecuado, y los defectos de omisión (un requisito no implementado) escapan a la caja blanca, porque esta solo «ve» el código que existe.</p>
 <h3>Técnicas basadas en la experiencia · detalle</h3>
 <ul>
  <li><strong>Predicción de errores:</strong> anticipa fallos típicos relacionados con entrada, salida, lógica, cálculo, interfaces o datos. Los <em>ataques de defecto</em> la sistematizan partiendo de listas de errores conocidos.</li>
  <li><strong>Prueba exploratoria basada en sesiones:</strong> se trabaja en un marco temporal acotado con un <em>contrato de prueba</em> (objetivos), y se cierra con una recapitulación (debrief). Útil con especificaciones escasas o poco tiempo; su eficacia depende de la experiencia del probador.</li>
  <li><strong>Lista de comprobación:</strong> condiciones formuladas como preguntas comprobables; se actualiza con el análisis de defectos y se evita que crezca en exceso o sea demasiado genérica.</li>
 </ul>
 <h3>Colaboración · historias de usuario y DGPA</h3>
 <p>Las <strong>3 C</strong>: <em>Cuartilla</em> (la ficha que la describe), <em>Conversación</em> (cómo se usará) y <em>Confirmación</em> (los criterios de aceptación). Criterio <span class="term">INVEST</span>: Independiente, Negociable, Valiosa, Estimable, Pequeña, Comprobable. Los <strong>criterios de aceptación</strong> se redactan orientados a escenario (<em>Dado/Cuando/Entonces</em>) o a reglas. En el <strong>DGPA (ATDD)</strong>: (1) taller de especificación donde el equipo aclara la historia y sus criterios; (2) se crean los casos de prueba <em>antes</em> de implementar (primero positivos, luego negativos, luego no funcionales); (3) al automatizarse, los criterios se vuelven «requisitos ejecutables».</p>
 <div class="nota">El capítulo 4 es el de más peso (11 preguntas) y exige <strong>aplicar</strong> (K3): te darán un caso concreto y tendrás que obtener los casos de prueba o calcular la cobertura. Practica a mano partición de equivalencia, AVF, tablas de decisión y transición de estado.</div>`,
 quiz:[
  {k:"k3",q:"Un campo acepta una edad entera de 18 a 65 (ambos incluidos); fuera de ese rango se rechaza. Usando partición de equivalencia, ¿cuál es un conjunto correcto de particiones a cubrir?",
   op:["Una sola partición: 18–65","Tres particiones: <18 (inválida), 18–65 (válida) y >65 (inválida)","Dos particiones: pares e impares","Cuatro particiones: 18, 65 y los dos vecinos"],
   c:1,e:"Hay una partición válida (18–65) y dos inválidas (menor que 18 y mayor que 65). Basta una prueba por partición. Los valores 18 y 65 son fronteras que cubriría el AVF, no la partición de equivalencia por sí sola."},
  {k:"k3",q:"Para el mismo rango válido de 18 a 65, aplicando AVF de 2 valores sobre la frontera inferior, ¿qué valores deberías probar?",
   op:["17 y 18","18 y 19","17, 18 y 19","Solo 18"],
   c:0,e:"En AVF de 2 valores cada frontera tiene dos elementos de cobertura: el valor frontera (18) y su vecino más cercano de la partición adyacente (17). El AVF de 3 valores añadiría además el 19."},
  {k:"k2",q:"¿Qué relación de subsunción existe entre la cobertura de sentencia y la de rama?",
   op:["La cobertura de sentencia subsume la de rama: 100 % de sentencia implica 100 % de rama","La cobertura de rama subsume la de sentencia: 100 % de rama implica 100 % de sentencia, pero no al revés","Son equivalentes: 100 % de una implica siempre 100 % de la otra","No tienen ninguna relación entre sí"],
   c:1,e:"La cobertura de rama subsume la de sentencia: alcanzar el 100 % de ramas garantiza el 100 % de sentencias, pero el 100 % de sentencias no garantiza el 100 % de ramas (p. ej., un «if» sin «else»)."},
  {k:"k2",q:"En la prueba de transición de estado, ¿qué afirmación sobre los criterios de cobertura es correcta?",
   op:["La cobertura de todos los estados es más fuerte que la de transiciones válidas","Lograr el 100 % de cobertura de transiciones válidas garantiza el 100 % de cobertura de todos los estados","La cobertura de todas las transiciones ignora las transiciones inválidas","La cobertura de transiciones válidas es la más débil de las tres"],
   c:1,e:"Cubrir todas las transiciones válidas obliga a pasar por todos los estados, así que garantiza la cobertura de todos los estados (no a la inversa). La cobertura de todos los estados es la más débil; la de todas las transiciones incluye intentar las inválidas."},
  {k:"k2",q:"¿Cuál es una característica distintiva de la prueba exploratoria?",
   op:["Las pruebas se especifican por completo y se documentan antes de ejecutarlas","El diseño, la ejecución y la evaluación de las pruebas ocurren de forma simultánea mientras el probador aprende sobre el objeto de prueba","Solo puede aplicarse cuando la especificación es completa y estable","Excluye el uso de cualquier otra técnica de prueba"],
   c:1,e:"En la prueba exploratoria se diseña, ejecuta y evalúa a la vez, aprendiendo del objeto de prueba; es especialmente útil con especificaciones escasas o poco tiempo, y puede apoyarse en otras técnicas (p. ej., partición de equivalencia)."}
 ]},

{n:5,titulo:"Gestión de las actividades de prueba",
 html:`
 <h3>Plan de prueba y criterios de entrada/salida</h3>
 <p>El <strong>plan de prueba</strong> describe objetivos, recursos y procesos del proyecto de prueba, y sirve de comunicación con los implicados. Los <strong>criterios de entrada</strong> son las precondiciones para empezar una actividad (recursos, material de prueba, calidad inicial); los <strong>criterios de salida</strong>, lo que debe lograrse para darla por terminada (cobertura, defectos sin resolver, pruebas ejecutadas). En Ágil: <strong>Definición de Preparado</strong> (DoR = entrada) y <strong>Definición de Hecho</strong> (DoD = salida). Quedarse sin tiempo/presupuesto puede ser un criterio de salida válido si los implicados aceptan el riesgo.</p>
 <h3>Técnicas de estimación</h3>
 <ul>
  <li><strong>Basada en proporciones</strong> (ratios de proyectos previos).</li>
  <li><strong>Extrapolación</strong> (medir pronto y proyectar; ideal en iterativos).</li>
  <li><strong>Delphi de banda ancha</strong> (expertos estiman aislados y convergen; el <em>póker de planificación</em> es su variante ágil).</li>
  <li><strong>Tres puntos:</strong> E = (a + 4m + b) / 6, con desviación SD = (b − a) / 6.</li>
 </ul>
 <h3>Priorización, pirámide y cuadrantes</h3>
 <p>Priorización por <strong>riesgo</strong>, por <strong>cobertura</strong> o por <strong>requisitos</strong> (con cuidado de las dependencias entre casos). La <strong>pirámide de prueba</strong>: muchas pruebas pequeñas, aisladas y rápidas en la base (unitarias) y pocas de extremo a extremo, lentas y de gran alcance arriba. Los <strong>cuadrantes de prueba</strong> (Marick) cruzan «orientado a negocio/tecnología» con «apoya al equipo/critica el producto»: Q1 técnico-apoyo (componente/integración, automatizado), Q2 negocio-apoyo (funcional, aceptación), Q3 negocio-crítica (exploratoria, usabilidad, PAU; manual), Q4 técnico-crítica (no funcional, humo; automatizado).</p>
 <h3>Gestión del riesgo</h3>
 <p><strong>Nivel de riesgo = probabilidad × impacto.</strong> Dos tipos: <strong>riesgo de proyecto</strong> (gestión: plazos, personas, proveedores, organización) y <strong>riesgo de producto</strong> (calidad: funcionalidad incorrecta, mal rendimiento, vulnerabilidades). Las <strong>pruebas basadas en el riesgo</strong> concentran el esfuerzo según el análisis del riesgo: a mayor riesgo de producto, mayor minuciosidad y alcance. El <strong>control del riesgo</strong> incluye mitigación (p. ej., probar) y monitorización; otras respuestas: aceptarlo, transferirlo o un plan de contingencia.</p>
 <h3>Monitorización, control y compleción</h3>
 <p>La <strong>monitorización</strong> recopila información del avance; el <strong>control</strong> toma acciones correctivas (repriorizar, ajustar el calendario, añadir recursos); la <strong>compleción</strong> consolida la experiencia en hitos. <strong>Métricas</strong>: de avance del proyecto/prueba, de calidad del producto, de defectos, de riesgo, de cobertura y de coste.</p>
 <h3>Informes y comunicación</h3>
 <p>El <strong>informe de avance</strong> de la prueba es frecuente e informal (mantiene informados durante la prueba); el <strong>informe de compleción</strong> resume una etapa terminada (sigue una plantilla, se hace una vez). Distintas audiencias necesitan distinta información, formalidad y frecuencia.</p>
 <h3>Gestión de la configuración e informe de defecto</h3>
 <p>La <strong>gestión de la configuración</strong> identifica, controla y versiona los productos de prueba; una vez aprobado, un elemento es una <strong>línea base</strong> y solo cambia con control de cambios, lo que permite reproducir resultados. Un buen <strong>informe de defecto</strong> incluye: identificador único, título, fecha/autor/rol, objeto y entorno de prueba, contexto, descripción reproducible (pasos, logs, capturas), resultados esperado y real, <strong>severidad</strong> (impacto), <strong>prioridad</strong> (urgencia de corrección), estado y referencias.</p>
 <h3>Contenido típico de un plan de prueba</h3>
 <p>Contexto y alcance, objetivos de prueba, base de prueba, riesgos, supuestos y restricciones, implicados y sus roles, enfoque de prueba (niveles, tipos, técnicas, criterios de entrada/salida), entregables, calendario, recursos y entorno. Elaborar el plan obliga al equipo a anticipar retos (riesgos, plazos, herramientas, costes) antes de que ocurran.</p>
 <h3>Los cuatro cuadrantes de prueba (Marick)</h3>
 <table>
  <tr><th></th><th>Apoya al equipo</th><th>Critica el producto</th></tr>
  <tr><td><strong>Tecnología</strong></td><td>Q1: componente e integración (automatizado, IC)</td><td>Q4: no funcional y humo (suele automatizarse)</td></tr>
  <tr><td><strong>Negocio</strong></td><td>Q2: funcional, ejemplos, historias, API (manual o automatizado)</td><td>Q3: exploratoria, usabilidad, PAU (suele ser manual)</td></tr>
 </table>
 <p>El modelo ayuda a la gestión de prueba a visualizar que distintos tipos y niveles tienen distinta relevancia y a no olvidar ninguno.</p>
 <h3>El ciclo de gestión del riesgo</h3>
 <p>Se compone de <strong>análisis del riesgo</strong> (identificación + evaluación) y <strong>control del riesgo</strong> (mitigación + monitorización):</p>
 <ul>
  <li><strong>Identificación:</strong> generar una lista de riesgos (tormenta de ideas, talleres, entrevistas, diagramas causa-efecto).</li>
  <li><strong>Evaluación:</strong> categorizar, estimar probabilidad e impacto, calcular el nivel de riesgo (cuantitativo = probabilidad × impacto; cualitativo = matriz de riesgo) y priorizar.</li>
  <li><strong>Control:</strong> mitigar (a menudo <em>probando</em> más donde más riesgo hay), monitorizar la eficacia y detectar riesgos emergentes. Otras respuestas posibles: aceptar el riesgo, transferirlo o preparar un plan de contingencia.</li>
 </ul>
 <p>En las <strong>pruebas basadas en el riesgo</strong>, el análisis determina el alcance, los niveles y tipos, las técnicas y la cobertura, la estimación del esfuerzo y la prioridad de ejecución, buscando reducir el <em>riesgo residual</em>.</p>
 <h3>Contenido de un buen informe de defecto</h3>
 <p>Identificador único; título resumen; fecha, autor y rol; identificación del objeto y el entorno de prueba; contexto (caso de prueba, fase del CVDS, datos); descripción reproducible (pasos, registros, capturas); resultado esperado y resultado real; <strong>severidad</strong> (impacto) y <strong>prioridad</strong> (urgencia); estado (abierto, aplazado, duplicado, en espera de corrección/confirmación, reabierto, cerrado, rechazado); y referencias. Objetivos: dar información suficiente para resolver, permitir el seguimiento de la calidad y aportar ideas para mejorar el proceso.</p>
 <h3>Gestión de la configuración y líneas base</h3>
 <p>La gestión de la configuración identifica, controla y versiona los productos de prueba (planes, casos, guiones, resultados, entornos). Cuando un elemento se aprueba, se convierte en <strong>línea base</strong> y solo cambia mediante control de cambios; siempre es posible volver a una línea base anterior para <em>reproducir</em> resultados. En DevOps suele automatizarse dentro de la canalización.</p>
 <div class="nota">No confundas <strong>severidad</strong> (gravedad del impacto del defecto) con <strong>prioridad</strong> (cuán urgente es corregirlo): un defecto puede ser grave pero de baja prioridad, o leve pero urgente.</div>`,
 quiz:[
  {k:"k2",q:"¿Cuál es la diferencia entre la severidad y la prioridad de un defecto?",
   op:["Son sinónimos: ambas miden la gravedad del impacto","La severidad mide el grado de impacto del defecto; la prioridad indica la urgencia de su corrección","La severidad indica la urgencia; la prioridad mide el impacto","La prioridad solo la asignan herramientas automáticas y la severidad las personas"],
   c:1,e:"La severidad es el grado de impacto del defecto; la prioridad es la urgencia de corregirlo. Pueden no coincidir: un defecto grave puede tener baja prioridad y uno leve, alta."},
  {k:"k2",q:"¿Qué distingue un riesgo de proyecto de un riesgo de producto?",
   op:["El riesgo de proyecto afecta a las características de calidad del producto; el de producto, a los plazos","El riesgo de proyecto afecta a la gestión y control del proyecto (plazos, personas, proveedores); el de producto, a la calidad del producto (funcionalidad, rendimiento, seguridad)","Ambos son lo mismo con distinto nombre","El riesgo de producto solo existe en proyectos ágiles"],
   c:1,e:"Los riesgos de proyecto afectan a la gestión (calendario, presupuesto, personas, proveedores). Los de producto afectan a las características de calidad del software (p. ej., funcionalidad incorrecta, mal rendimiento, vulnerabilidades)."},
  {k:"k3",q:"Las estimaciones de tres puntos de una tarea son: optimista a=6, más probable m=9 y pesimista b=18 horas-persona. ¿Cuál es la estimación final E?",
   op:["11 horas-persona","9 horas-persona","10 horas-persona","12 horas-persona"],
   c:2,e:"Con la fórmula E = (a + 4m + b) / 6 = (6 + 36 + 18) / 6 = 60 / 6 = 10 horas-persona. La desviación sería SD = (b − a) / 6 = 2."},
  {k:"k1",q:"¿Cómo se determina el nivel de riesgo?",
   op:["Sumando la probabilidad y el impacto del riesgo","Como el producto (combinación) de la probabilidad del riesgo y su impacto","Únicamente por la probabilidad de que ocurra","Únicamente por el coste de mitigarlo"],
   c:1,e:"El nivel de riesgo combina dos factores: la probabilidad de que ocurra y el impacto (daño) si ocurre. A mayor nivel de riesgo, más importante es tratarlo."},
  {k:"k2",q:"Según el modelo de la pirámide de prueba, ¿qué caracteriza a las pruebas de la capa inferior frente a las de la superior?",
   op:["Son pruebas de extremo a extremo, lentas y de gran alcance, y se necesitan pocas","Son pequeñas, aisladas y rápidas, comprueban poca funcionalidad y se necesitan muchas","Son siempre manuales y orientadas al usuario final","Tienen menor granularidad que las de la capa superior"],
   c:1,e:"En la base hay muchas pruebas pequeñas, aisladas y rápidas (mayor granularidad); en la cima, pocas pruebas de extremo a extremo, lentas y de gran alcance. La pirámide guía la asignación del esfuerzo de automatización."}
 ]},

{n:6,titulo:"Herramientas de prueba",
 html:`
 <h3>Tipos de herramientas de apoyo a la prueba</h3>
 <p>Las herramientas dan soporte a muchas actividades, no solo a la ejecución:</p>
 <ul>
  <li><strong>Gestión</strong> del CVDS, requisitos, pruebas, defectos y configuración.</li>
  <li><strong>Prueba estática:</strong> apoyo a revisiones y análisis estático.</li>
  <li><strong>Diseño e implementación:</strong> generación de casos, datos y procedimientos de prueba.</li>
  <li><strong>Ejecución y cobertura:</strong> ejecución automatizada y medición de cobertura.</li>
  <li><strong>Prueba no funcional:</strong> tareas difíciles o imposibles de hacer a mano (p. ej., carga).</li>
  <li><strong>DevOps:</strong> canalización de entrega, construcción automatizada, IC/EC.</li>
  <li><strong>Colaboración</strong> y herramientas de <strong>escalabilidad/despliegue</strong> (máquinas virtuales, contenedores). Incluso una hoja de cálculo puede ser una herramienta de prueba en su contexto.</li>
 </ul>
 <h3>Ventajas de la automatización de la prueba</h3>
 <ul>
  <li>Ahorro de tiempo en trabajo manual repetitivo (regresión, datos, comparaciones).</li>
  <li>Mayor <strong>consistencia y repetibilidad</strong>: evita errores humanos simples.</li>
  <li>Evaluación más objetiva (p. ej., cobertura) y métricas difíciles de obtener a mano.</li>
  <li>Acceso más fácil a la información de prueba (estadísticas, gráficos, tendencias).</li>
  <li>Tiempos de ejecución reducidos: detección y feedback más tempranos.</li>
  <li>Libera tiempo de los probadores para diseñar pruebas nuevas y más profundas.</li>
 </ul>
 <h3>Riesgos de la automatización de la prueba</h3>
 <p>Comprar una herramienta <strong>no garantiza el éxito</strong>: cada herramienta exige esfuerzo de introducción, mantenimiento y formación. Riesgos típicos: expectativas poco realistas, subestimar el coste de <strong>mantener</strong> el testware y los scripts, dependencia excesiva de la herramienta, descuidar la <strong>gestión de configuración</strong> de los artefactos de prueba, o automatizar pruebas que aportan poco valor. La herramienta debe encajar con el contexto del equipo y del SUT.</p>
 <h3>Cómo encaja cada herramienta en el proceso</h3>
 <p>Las herramientas dan soporte a actividades muy distintas, no solo a la ejecución: las de <strong>gestión</strong> trazan requisitos, casos, defectos y configuración a lo largo del CVDS; las de <strong>prueba estática</strong> detectan defectos en revisiones y análisis del código sin ejecutarlo; las de <strong>diseño/implementación</strong> ayudan a generar casos y datos; las de <strong>ejecución y cobertura</strong> automatizan la prueba dinámica y miden cuánto código se ejercita; las <strong>no funcionales</strong> permiten pruebas (carga, rendimiento) inviables a mano; y las de <strong>DevOps</strong>, <strong>colaboración</strong> y <strong>contenedores/virtualización</strong> sostienen la canalización y los entornos. Hasta una hoja de cálculo cuenta como herramienta de prueba en su contexto.</p>
 <h3>Equilibrio entre beneficios y riesgos</h3>
 <p>El valor real de una herramienta no llega con la compra: depende de introducirla bien, mantenerla y formar al equipo. Los <strong>riesgos</strong> más habituales son las expectativas poco realistas, subestimar el coste de mantener scripts y testware, depender en exceso de la herramienta, descuidar la gestión de configuración de los artefactos de prueba y automatizar pruebas de poco valor. Una herramienta debe elegirse por su <strong>encaje con el contexto</strong> (tecnología del sistema, competencias del equipo, integración con CI/CD y coste total), no por su precio o popularidad.</p>
 <div class="nota">Idea de examen: la automatización <em>complementa</em> a las personas y a la prueba manual; no las sustituye. La prueba manual —sobre todo desde la perspectiva del usuario— sigue siendo necesaria.</div>`,
 quiz:[
  {k:"k2",q:"¿Cuál de los siguientes es un beneficio característico de la automatización de la prueba?",
   op:["Garantiza que el software no tendrá defectos","Mejora la consistencia y repetibilidad, evitando errores humanos en tareas repetitivas","Elimina por completo la necesidad de prueba manual","Reduce a cero el esfuerzo de mantenimiento del testware"],
   c:1,e:"La automatización aporta consistencia y repetibilidad y reduce errores humanos en tareas repetitivas. No garantiza ausencia de defectos, no sustituye a la prueba manual y el mantenimiento del testware es justamente uno de sus costes."},
  {k:"k1",q:"¿Cuál es un riesgo real asociado a la introducción de una herramienta de automatización de la prueba?",
   op:["Que la ejecución de pruebas se vuelva más lenta que a mano en todos los casos","Subestimar el esfuerzo continuo de mantenimiento del testware y de la propia herramienta","Que sea imposible obtener métricas de cobertura","Que impida ejecutar pruebas en integración continua"],
   c:1,e:"Adquirir la herramienta no basta: requiere esfuerzo de introducción, formación y, sobre todo, mantenimiento continuo del testware, que suele subestimarse. Las otras opciones describen lo contrario de la realidad."},
  {k:"k2",q:"¿Qué tipo de herramienta de prueba facilita las revisiones y el análisis estático del código?",
   op:["Herramientas de ejecución de prueba y cobertura","Herramientas de prueba estática","Herramientas de prueba no funcional","Herramientas de colaboración"],
   c:1,e:"Las herramientas de prueba estática apoyan revisiones y análisis estático (p. ej., detectar variables no inicializadas o desviaciones de estándares). Las de ejecución/cobertura sirven para la prueba dinámica."},
  {k:"k2",q:"Tras automatizar la regresión, ¿qué afirmación refleja correctamente el papel de la prueba manual?",
   op:["La prueba manual deja de ser necesaria por completo","La prueba manual, especialmente desde la perspectiva del usuario, sigue siendo necesaria","La automatización solo es válida si elimina toda prueba manual","La prueba manual solo se usa si falla la herramienta"],
   c:1,e:"La automatización complementa, no sustituye: la prueba manual —sobre todo la exploratoria y la centrada en la experiencia de usuario— sigue siendo necesaria junto a la automatizada."},
  {k:"k2",q:"Al seleccionar una herramienta de prueba, ¿qué criterio es más relevante?",
   op:["Que sea la herramienta más cara del mercado","Que encaje con el contexto del equipo y la tecnología del sistema sujeto a prueba","Que prometa cero defectos","Que no necesite ninguna formación"],
   c:1,e:"La idoneidad depende del encaje con el contexto: tecnología del SUT, competencias del equipo, integración (CI/CD) y coste total. El precio alto no es señal de adecuación, y toda herramienta exige algo de formación."}
 ]}
];

/* =========================================================
   EXAMEN FINAL (40 preguntas)
   Distribución oficial CTFL v4.0 por capítulo:
   C1=8, C2=6, C3=4, C4=11, C5=9, C6=2
========================================================= */
const EXAMEN=[
 // ---- Capítulo 1 (8) ----
 {cap:1,k:"k1",q:"¿Cuál de los siguientes es un objetivo característico de la prueba?",
  op:["Demostrar que el objeto de prueba no contiene ningún defecto","Reducir el nivel de riesgo asociado a una calidad inadecuada del software","Corregir los defectos encontrados en el código","Garantizar el éxito comercial del producto"],
  c:1,e:"Reducir el nivel de riesgo es un objetivo de la prueba. Demostrar ausencia de defectos es imposible (principio 1); corregir defectos es depuración; y el éxito comercial depende de muchos factores ajenos a la prueba (falacia de la ausencia de defectos)."},
 {cap:1,k:"k2",q:"¿Cuál de las siguientes parejas asocia correctamente la actividad con su naturaleza?",
  op:["Probar = encontrar y eliminar la causa del fallo; depurar = provocar fallos","Probar = provocar fallos o encontrar defectos; depurar = localizar y corregir la causa del fallo","Ambas son la misma actividad","Depurar = una forma de prueba estática"],
  c:1,e:"Probar provoca fallos (dinámica) o encuentra defectos (estática). Depurar localiza la causa del fallo y la corrige; no es una actividad de prueba."},
 {cap:1,k:"k2",q:"Un sistema cumple todos los requisitos especificados y no tiene defectos conocidos, pero los usuarios lo rechazan porque no cubre sus necesidades reales. ¿Qué principio ilustra este caso?",
  op:["Los defectos se agrupan","Falacia de la ausencia de defectos","Las pruebas se desgastan","La prueba exhaustiva es imposible"],
  c:1,e:"Es la falacia de la ausencia de defectos: verificar y corregir todo no garantiza un sistema útil. Hace falta validación (satisfacer necesidades reales), no solo verificación."},
 {cap:1,k:"k2",q:"¿Por qué la prueba es una forma de control de la calidad (CC) y no de aseguramiento de la calidad (AC)?",
  op:["Porque el CC es preventivo y orientado al proceso, igual que la prueba","Porque la prueba es un enfoque correctivo orientado al producto, mientras que el AC es preventivo y orientado al proceso","Porque AC y CC son exactamente lo mismo","Porque la prueba solo se ocupa de mejorar los procesos de desarrollo"],
  c:1,e:"La prueba evalúa el producto para detectar defectos (CC, correctivo, orientado al producto). El AC es preventivo y orientado al proceso (un buen proceso produce un buen producto)."},
 {cap:1,k:"k1",q:"¿Cuál de los siguientes NO es uno de los siete principios de la prueba?",
  op:["La prueba temprana ahorra tiempo y dinero","La prueba exhaustiva es imposible","La automatización garantiza la ausencia de defectos","La prueba depende del contexto"],
  c:2,e:"«La automatización garantiza la ausencia de defectos» no es un principio (y es falso). Los siete principios incluyen prueba temprana, imposibilidad de prueba exhaustiva y dependencia del contexto."},
 {cap:1,k:"k2",q:"Durante el análisis de prueba se responde principalmente a una pregunta. ¿Cuál?",
  op:["¿Cómo llevar a cabo la prueba?","¿Qué hay que probar, en términos de criterios de cobertura?","¿Quién ejecutará las pruebas?","¿Cuándo se entregará el producto?"],
  c:1,e:"El análisis de prueba responde a «¿qué probar?» identificando condiciones de prueba y criterios de cobertura. El «¿cómo?» corresponde al diseño de prueba."},
 {cap:1,k:"k2",q:"¿Qué ventaja aporta principalmente un nivel adecuado de independencia de la prueba?",
  op:["Elimina por completo la necesidad de que los desarrolladores prueben su código","Tiende a encontrar más defectos, al reconocer tipos de fallo distintos a los del autor","Reduce siempre el coste total del proyecto a cero","Garantiza que no se introduzcan nuevos defectos"],
  c:1,e:"Un probador independiente del autor suele detectar defectos que el autor pasa por alto. No sustituye la prueba de los desarrolladores y un exceso de independencia puede aislar al equipo de prueba."},
 {cap:1,k:"k2",q:"¿Para qué sirve mantener la trazabilidad entre la base de prueba y los productos de prueba?",
  op:["Para sustituir la necesidad de un plan de prueba","Para evaluar la cobertura, analizar el impacto de los cambios y facilitar auditorías","Para impedir cualquier cambio en los requisitos","Para automatizar todos los casos de prueba"],
  c:1,e:"La trazabilidad permite medir cobertura respecto a la base de prueba, analizar el impacto de los cambios y dar soporte a auditorías y a la evaluación del avance."},
 // ---- Capítulo 2 (6) ----
 {cap:2,k:"k2",q:"¿Cuál es una buena práctica de prueba aplicable a cualquier modelo de ciclo de vida?",
  op:["Esperar a tener el sistema completo para empezar a analizar y diseñar las pruebas","Que cada actividad de desarrollo tenga su correspondiente actividad de prueba","Documentar exhaustivamente todas las pruebas, incluso en proyectos ágiles","Asignar un único nivel de prueba a todo el proyecto"],
  c:1,e:"Una buena práctica universal es que cada actividad de desarrollo tenga su actividad de prueba asociada, con análisis y diseño empezando temprano. El nivel de documentación, en cambio, depende del modelo."},
 {cap:2,k:"k2",q:"¿Qué describe mejor la prueba de aceptación?",
  op:["Probar componentes de forma aislada en el entorno del desarrollador","Validar la preparación para el despliegue y que el sistema satisface las necesidades de negocio del usuario","Probar las interfaces internas entre componentes","Medir la cobertura de código del sistema"],
  c:1,e:"La prueba de aceptación se concentra en la validación y en demostrar la preparación para el despliegue. Sus formas incluyen PAU, operativa, contractual/regulatoria, alfa y beta."},
 {cap:2,k:"k2",q:"La prueba que evalúa «lo bien que se comporta» el sistema (rendimiento, usabilidad, fiabilidad, seguridad) es:",
  op:["Prueba funcional","Prueba no funcional","Prueba de confirmación","Prueba de componente"],
  c:1,e:"La prueba no funcional evalúa características de calidad como rendimiento, usabilidad, fiabilidad o seguridad (ISO 25010). La funcional evalúa «qué» hace el sistema."},
 {cap:2,k:"k2",q:"En DevOps, ¿cuál es un beneficio de la integración continua (IC) desde el punto de vista de la prueba?",
  op:["Elimina la necesidad de cualquier prueba manual","Aporta retroalimentación rápida sobre la calidad del código y promueve el desplazamiento a la izquierda","Garantiza que no haya regresiones sin necesidad de pruebas","Sustituye la gestión de la configuración"],
  c:1,e:"La IC da feedback rápido y anima a entregar código acompañado de pruebas de componente y análisis estático (shift-left). La prueba manual desde la perspectiva del usuario sigue siendo necesaria."},
 {cap:2,k:"k2",q:"¿Qué afirmación sobre la prueba de regresión es correcta?",
  op:["Comprueba únicamente que el defecto corregido ha desaparecido","Confirma que un cambio no ha provocado consecuencias adversas en partes no modificadas; es buena candidata a la automatización","Solo se realiza en la prueba de aceptación","No requiere ningún análisis de impacto"],
  c:1,e:"La regresión verifica que el cambio no rompió lo que ya funcionaba. Como se repite mucho, conviene automatizarla, y un análisis de impacto ayuda a acotar su alcance. Comprobar que el defecto concreto desapareció es prueba de confirmación."},
 {cap:2,k:"k2",q:"¿Qué caracteriza al enfoque de desarrollo guiado por prueba (DGP/TDD)?",
  op:["Se escribe primero la prueba, luego el código que la satisface y después se refactoriza","Las pruebas se escriben solo al final, tras completar el código","Se prescinde por completo de las pruebas automatizadas","Las pruebas las redactan únicamente los representantes de negocio"],
  c:0,e:"En TDD se dirige la codificación con casos de prueba: primero la prueba, luego el código que la pasa, luego refactorizar. Aplica prueba temprana y desplazamiento a la izquierda."},
 // ---- Capítulo 3 (4) ----
 {cap:3,k:"k1",q:"¿Cuál de los siguientes productos de trabajo es adecuado para el análisis estático (no solo para la revisión)?",
  op:["Una conversación informal sin documentar","Código fuente o modelos con una estructura/sintaxis formal","La intuición del probador","Una demo en vídeo del producto"],
  c:1,e:"El análisis estático necesita una estructura formal comprobable (código, modelos, texto con sintaxis). Cualquier producto legible puede revisarse, pero no todo es analizable por herramienta."},
 {cap:3,k:"k2",q:"¿Cuál es el tipo de revisión MÁS formal y cuál su objetivo principal?",
  op:["Revisión informal; generar consenso técnico","Revisión guiada; formar a los revisores","Inspección; encontrar el máximo número de anomalías siguiendo el proceso completo y recopilando métricas","Revisión técnica; documentar el producto"],
  c:2,e:"La inspección es la revisión más formal: sigue el proceso completo, recopila métricas y busca el máximo de anomalías. En ella el autor no puede ser revisor ni escriba."},
 {cap:3,k:"k2",q:"¿Quién es responsable de asegurar el funcionamiento eficaz de la reunión de revisión y un entorno seguro para que todos hablen?",
  op:["El autor","El moderador (facilitador)","El escriba","El gestor"],
  c:1,e:"El moderador/facilitador media, gestiona el tiempo y mantiene un entorno seguro. El escriba registra anomalías; el autor crea y corrige el producto; el gestor aporta recursos."},
 {cap:3,k:"k1",q:"¿Cuál de los siguientes es un factor de éxito de las revisiones?",
  op:["Utilizar los resultados para evaluar el rendimiento de los participantes","Definir objetivos claros y criterios de salida medibles","Revisar siempre el producto completo en una sola sesión","Evitar dar retroalimentación a los autores"],
  c:1,e:"Objetivos claros y criterios de salida medibles son factores de éxito. Nunca debe evaluarse a las personas, conviene revisar en fragmentos pequeños y dar retroalimentación a los autores."},
 // ---- Capítulo 4 (11) ----
 {cap:4,k:"k2",q:"¿En qué se basan las técnicas de prueba de caja negra?",
  op:["En la estructura interna y el código del objeto de prueba","En el comportamiento especificado, sin referencia a la estructura interna","Exclusivamente en la experiencia del probador","En la cobertura de sentencias y ramas"],
  c:1,e:"Las técnicas de caja negra (basadas en la especificación) analizan el comportamiento especificado sin mirar la estructura interna; por eso resisten cambios de implementación que no alteren el comportamiento."},
 {cap:4,k:"k3",q:"Un descuento se aplica así: importe < 100 € → sin descuento; 100–500 € (incluidos) → 10 %; > 500 € → 20 %. Con partición de equivalencia, ¿cuántas particiones de importe válidas hay?",
  op:["Dos","Tres","Cuatro","Una"],
  c:1,e:"Hay tres particiones válidas según el procesamiento: [<100], [100–500] y [>500]. Cada una se procesa de forma distinta, así que basta un valor representativo de cada una."},
 {cap:4,k:"k3",q:"Para la frontera de los 500 € del caso anterior (500 incluido en el 10 %, 501 ya al 20 %), ¿qué valores prueba el AVF de 3 valores en esa frontera?",
  op:["500 y 501","499, 500 y 501","500 y 600","Solo 500"],
  c:1,e:"El AVF de 3 valores prueba el valor frontera y sus dos vecinos: 499, 500 y 501. El AVF de 2 valores probaría únicamente 500 y 501."},
 {cap:4,k:"k2",q:"¿Cuándo resulta especialmente adecuada la prueba de tabla de decisión?",
  op:["Cuando el sistema tiene un único estado y ninguna condición","Cuando distintas combinaciones de condiciones producen distintos resultados (reglas de negocio)","Cuando solo se quiere medir la cobertura de código","Cuando no hay especificación disponible"],
  c:1,e:"La tabla de decisión registra de forma sistemática combinaciones de condiciones y sus acciones; es ideal para lógica/reglas de negocio complejas y ayuda a detectar lagunas o contradicciones."},
 {cap:4,k:"k3",q:"En una tabla de decisión, ¿qué representa cada columna (regla)?",
  op:["Un estado del sistema","Una combinación única de condiciones con sus acciones asociadas","Una sentencia de código","Un valor frontera"],
  c:1,e:"Cada columna es una regla de decisión: una combinación concreta de valores de las condiciones junto con las acciones resultantes. La cobertura del 100 % exige practicar todas las columnas factibles."},
 {cap:4,k:"k2",q:"En la prueba de transición de estado, una transición puede estar condicionada por:",
  op:["Una condición de guarda asociada al evento","El número de sentencias del código","La severidad de un defecto","El criterio de salida de la prueba"],
  c:0,e:"Una transición la inicia un evento, que puede llevar una condición de guarda (y opcionalmente una acción). La sintaxis típica es «evento [guarda] / acción»."},
 {cap:4,k:"k2",q:"¿Qué criterio de cobertura de transición de estado es el más utilizado y garantiza también la cobertura de todos los estados?",
  op:["Cobertura de todos los estados","Cobertura de transiciones válidas (conmutador 0)","Cobertura de una sola transición inválida","Cobertura de sentencia"],
  c:1,e:"La cobertura de transiciones válidas (conmutador 0) es la más usada y, al recorrer todas las transiciones válidas, garantiza visitar todos los estados (no a la inversa)."},
 {cap:4,k:"k3",q:"Una función tiene un «if» sin «else». Un conjunto de pruebas ejecuta todas las sentencias del cuerpo del «if». ¿Qué se puede afirmar?",
  op:["Se ha logrado el 100 % de cobertura de rama","Se puede haber logrado el 100 % de cobertura de sentencia, pero no necesariamente el 100 % de rama","Se ha logrado el 100 % de ambas coberturas","No se ha logrado ninguna cobertura"],
  c:1,e:"Ejecutar todas las sentencias da 100 % de sentencia, pero falta la rama «falsa» del «if» (cuando no se entra), así que no se garantiza el 100 % de rama. La rama subsume a la sentencia, no al revés."},
 {cap:4,k:"k2",q:"¿Cuál es una característica de la prueba basada en lista de comprobación?",
  op:["Sus elementos suelen formularse como preguntas comprobables y la lista se actualiza periódicamente","Debe contener elementos que se comprueban automáticamente","Garantiza una repetibilidad perfecta entre ejecuciones","Sustituye a todas las demás técnicas de prueba"],
  c:0,e:"Los elementos de la checklist se formulan como preguntas comprobables por separado y la lista se revisa periódicamente. Las listas de alto nivel aumentan la cobertura pero reducen la repetibilidad."},
 {cap:4,k:"k2",q:"Según el criterio INVEST, una buena historia de usuario debe ser, entre otras cosas:",
  op:["Inflexible, Numerosa, Vaga, Extensa, Subjetiva y Teórica","Independiente, Negociable, Valiosa, Estimable, Pequeña y Comprobable","Idéntica para todos los equipos","Imposible de probar hasta que se implemente"],
  c:1,e:"INVEST = Independiente, Negociable, Valiosa, Estimable, Pequeña y Comprobable (Testable). Si no se sabe cómo probar una historia, suele ser señal de que no está clara."},
 {cap:4,k:"k3",q:"En el desarrollo guiado por prueba de aceptación (DGPA/ATDD), ¿cuándo se crean los casos de prueba?",
  op:["Después de implementar y desplegar la historia de usuario","Antes de implementar la historia, en un taller de especificación con varias perspectivas","Solo durante la prueba de aceptación final","Únicamente cuando aparece un defecto"],
  c:1,e:"El DGPA es un enfoque «probar primero»: los casos se crean antes de implementar, en un taller con cliente, desarrollo y prueba, a partir de los criterios de aceptación."},
 // ---- Capítulo 5 (9) ----
 {cap:5,k:"k2",q:"¿Qué son los criterios de salida (en Ágil, Definición de Hecho)?",
  op:["Las precondiciones para empezar una actividad","Lo que debe lograrse para declarar completada una actividad","La lista de defectos abiertos","El presupuesto total del proyecto"],
  c:1,e:"Los criterios de salida definen qué debe cumplirse para dar por terminada una actividad (cobertura, pruebas ejecutadas, defectos resueltos). En Ágil se llaman Definición de Hecho; los de entrada, Definición de Preparado."},
 {cap:5,k:"k3",q:"Tres expertos estiman una tarea: a=4, m=7, b=16 días-persona (tres puntos). ¿Cuál es la estimación E?",
  op:["8 días-persona","9 días-persona","7 días-persona","10 días-persona"],
  c:0,e:"E = (a + 4m + b) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 días-persona."},
 {cap:5,k:"k3",q:"Un caso de prueba de alta prioridad depende de los datos que deja preparado un caso de baja prioridad. ¿En qué orden deben ejecutarse?",
  op:["Primero el de alta prioridad, siempre","Primero el de baja prioridad, porque el de alta depende de él","En cualquier orden, da igual","No deben ejecutarse hasta eliminar la dependencia"],
  c:1,e:"Las dependencias mandan sobre la prioridad: si un caso de mayor prioridad depende de otro de menor, el de menor prioridad debe ejecutarse primero para que el otro pueda correr."},
 {cap:5,k:"k1",q:"¿Cuál de las siguientes es una métrica de prueba típica?",
  op:["El número de empleados de la empresa","La densidad de defectos o el porcentaje de detección de defectos","El color corporativo del producto","La antigüedad del lenguaje de programación"],
  c:1,e:"Las métricas de defectos (número, densidad, porcentaje de detección) son métricas de prueba habituales, junto con las de avance, cobertura, riesgo y coste."},
 {cap:5,k:"k2",q:"¿Qué diferencia a un informe de avance de la prueba de un informe de compleción de la prueba?",
  op:["El de avance se elabora una sola vez al final; el de compleción, a diario","El de avance es frecuente y mantiene informados durante la prueba; el de compleción resume una etapa ya terminada","Ambos son idénticos","El de compleción no incluye métricas"],
  c:1,e:"El informe de avance es frecuente (a veces informal) y apoya el control durante la prueba; el de compleción resume una etapa finalizada siguiendo una plantilla y se produce una vez."},
 {cap:5,k:"k2",q:"¿Cómo apoya a la prueba la gestión de la configuración?",
  op:["Eliminando la necesidad de control de versiones","Identificando y versionando los productos de prueba y estableciendo líneas base, lo que permite reproducir resultados","Corrigiendo automáticamente los defectos encontrados","Sustituyendo al plan de prueba"],
  c:1,e:"La gestión de la configuración identifica, controla y versiona los productos de prueba; una vez aprobada, una línea base solo cambia con control de cambios, permitiendo reproducir ejecuciones anteriores."},
 {cap:5,k:"k2",q:"¿Cuál de los siguientes es un riesgo de proyecto (no de producto)?",
  op:["Un cálculo erróneo en el módulo de facturación","Un tiempo de respuesta inadecuado de la aplicación","La marcha de personal clave o un retraso en la entrega de un proveedor","Una vulnerabilidad de seguridad en el código"],
  c:2,e:"La escasez de personal o el incumplimiento de un proveedor son riesgos de proyecto (afectan a plazos/gestión). Los cálculos erróneos, el rendimiento o las vulnerabilidades son riesgos de producto."},
 {cap:5,k:"k2",q:"¿Cómo influye el análisis del riesgo de producto en la prueba?",
  op:["Hace innecesaria la priorización de casos de prueba","Permite concentrar el esfuerzo: a mayor riesgo, mayor minuciosidad y alcance de la prueba","Obliga a probar todo con la misma intensidad","Solo sirve para informar a la dirección"],
  c:1,e:"En las pruebas basadas en el riesgo, el análisis del riesgo de producto concentra el esfuerzo donde más importa: determina alcance, niveles, técnicas, cobertura y prioridad para reducir el riesgo residual."},
 {cap:5,k:"k3",q:"¿Cuál de los siguientes campos es imprescindible en un buen informe de defecto para permitir su corrección?",
  op:["El salario del probador que lo encontró","Una descripción reproducible con pasos, resultados esperado y real, y el entorno de prueba","El número total de pruebas de la suite","La fecha de nacimiento del autor del código"],
  c:1,e:"Un informe útil incluye pasos para reproducir, resultados esperado y real, objeto y entorno de prueba, severidad, prioridad y estado: lo necesario para diagnosticar y corregir sin re-investigar a ciegas."},
 // ---- Capítulo 6 (2) ----
 {cap:6,k:"k2",q:"¿Cuál de los siguientes es un tipo de herramienta de apoyo a la prueba?",
  op:["Herramientas de gestión de pruebas, defectos y configuración","Herramientas que escriben los requisitos por sí solas","Herramientas que eliminan la necesidad de probar","Herramientas que garantizan cero defectos"],
  c:0,e:"Existen herramientas de gestión (CVDS, requisitos, pruebas, defectos, configuración), de prueba estática, de diseño/ejecución, no funcionales, de DevOps, etc. Ninguna herramienta elimina la necesidad de probar."},
 {cap:6,k:"k1",q:"¿Qué afirmación sobre la automatización de la prueba es correcta?",
  op:["Adquirir la herramienta garantiza por sí sola el éxito","Aporta consistencia y feedback más rápido, pero exige esfuerzo de introducción, mantenimiento y formación","Sustituye por completo toda prueba manual","Hace innecesaria la gestión de la configuración del testware"],
  c:1,e:"La automatización ofrece beneficios (consistencia, rapidez, métricas) pero no es gratis: comprar la herramienta no basta, requiere mantenimiento y formación, y la prueba manual desde la perspectiva del usuario sigue siendo necesaria."}
];

/* =========================================================
   CONJUNTOS DE EXAMEN
   - "practica-1": examen de práctica original (preguntas propias
     fieles al syllabus). Los exámenes oficiales A/B/C/D de ISTQB
     están enlazados como PDF en la sección Recursos (material con
     copyright que no se reproduce dentro de la app).
========================================================= */
/* =========================================================
   EXAMEN DE PRÁCTICA · SET 2 (40 preguntas originales nuevas)
   Misma distribución oficial: C1=8, C2=6, C3=4, C4=11, C5=9, C6=2
========================================================= */
const EXAMEN2=[
 // ---- Capítulo 1 (8) ----
 {cap:1,k:"k2",q:"¿Cuál de las siguientes afirmaciones sobre probar y depurar es correcta?",
  op:["Probar y depurar son la misma actividad realizada por el mismo rol","Probar puede provocar fallos o encontrar defectos; depurar localiza la causa del fallo y la corrige","Depurar es una técnica de prueba dinámica","Probar consiste en corregir los defectos encontrados"],
  c:1,e:"Probar provoca fallos (dinámica) o encuentra defectos (estática). Depurar —reproducir, diagnosticar y corregir— no es una actividad de prueba: lo realiza el desarrollo."},
 {cap:1,k:"k1",q:"¿Cuál es un objetivo característico de la prueba?",
  op:["Garantizar la ausencia total de defectos","Generar confianza en el nivel de calidad del objeto de prueba","Sustituir al aseguramiento de la calidad","Eliminar la necesidad de validación"],
  c:1,e:"Generar confianza en la calidad es un objetivo de la prueba. Garantizar ausencia de defectos es imposible (principio 1) y la prueba no sustituye al AC ni a la validación."},
 {cap:1,k:"k2",q:"Una persona configura mal un parámetro y, al ejecutarse, el sistema se cae. ¿Qué representa la caída observada?",
  op:["Un error","Un defecto","Un fallo","Una causa raíz"],
  c:2,e:"La caída observable al ejecutar es el fallo. La equivocación de la persona es el error y el parámetro mal configurado es el defecto que lo provoca."},
 {cap:1,k:"k2",q:"¿Qué principio explica que concentrar las pruebas en los módulos históricamente más problemáticos suele ser eficaz?",
  op:["La prueba exhaustiva es imposible","Los defectos se agrupan","La prueba temprana ahorra tiempo y dinero","Falacia de la ausencia de defectos"],
  c:1,e:"El principio «los defectos se agrupan» (Pareto): un pequeño número de módulos concentra la mayoría de los defectos, lo que orienta el esfuerzo de prueba."},
 {cap:1,k:"k2",q:"En el proceso de prueba, ¿qué actividad responde a «¿cómo llevar a cabo la prueba?»?",
  op:["Análisis de la prueba","Diseño de la prueba","Monitorización de la prueba","Compleción de la prueba"],
  c:1,e:"El diseño de prueba elabora las condiciones en casos de prueba y define datos y entorno: responde a «¿cómo?». El análisis responde a «¿qué probar?»."},
 {cap:1,k:"k1",q:"¿Qué describe el enfoque de equipo completo (whole-team)?",
  op:["Solo los probadores son responsables de la calidad","La responsabilidad de la calidad se reparte en todo el equipo, que colabora estrechamente","El equipo de prueba trabaja aislado del desarrollo","La dirección asume toda la responsabilidad de la prueba"],
  c:1,e:"En el enfoque de equipo completo, todo el equipo comparte la responsabilidad de la calidad y colabora; cualquier miembro con competencias de prueba contribuye."},
 {cap:1,k:"k2",q:"¿Por qué la prueba (control de calidad) no equivale al aseguramiento de la calidad?",
  op:["El AC es correctivo y la prueba es preventiva","La prueba evalúa el producto (correctivo); el AC mejora los procesos (preventivo)","Son sinónimos en la práctica","El AC solo se aplica a la documentación"],
  c:1,e:"La prueba es control de calidad: correctivo y orientado al producto. El AC es preventivo y orientado al proceso (un buen proceso produce un buen producto)."},
 {cap:1,k:"k2",q:"Un exceso de independencia de la prueba puede tener un inconveniente. ¿Cuál?",
  op:["Detecta menos tipos de defectos","Puede aislar al equipo de prueba y hacer que desarrollo pierda el sentido de responsabilidad sobre la calidad","Reduce la objetividad de las pruebas","Impide cualquier comunicación con los implicados"],
  c:1,e:"Aunque la independencia suele encontrar más defectos, en exceso puede aislar al equipo de prueba, crear cuellos de botella y reducir la responsabilidad de desarrollo sobre la calidad."},
 // ---- Capítulo 2 (6) ----
 {cap:2,k:"k2",q:"¿Qué nivel de prueba se concentra en el comportamiento de extremo a extremo de todo el sistema, tanto funcional como no funcional?",
  op:["Prueba de componente","Prueba de integración de componentes","Prueba de sistema","Prueba de integración de sistemas"],
  c:2,e:"La prueba de sistema evalúa el comportamiento global del sistema completo, incluyendo tareas de extremo a extremo (funcional) y características de calidad (no funcional)."},
 {cap:2,k:"k2",q:"¿Cuál de las siguientes es una característica de calidad NO funcional según ISO/IEC 25010?",
  op:["La corrección funcional","La eficiencia de desempeño","La completitud funcional","La pertinencia funcional"],
  c:1,e:"La eficiencia de desempeño es no funcional. Completitud, corrección y pertinencia funcional son las metas de la prueba funcional."},
 {cap:2,k:"k2",q:"Tras una corrección, se vuelven a ejecutar exactamente los casos que antes fallaban por el defecto para comprobar que ahora pasan. ¿Qué tipo de prueba es?",
  op:["Prueba de regresión","Prueba de confirmación","Prueba de sistema","Prueba no funcional"],
  c:1,e:"Reejecutar los casos que fallaban para comprobar que el defecto se corrigió es prueba de confirmación. La regresión busca efectos adversos en lo que no se tocó."},
 {cap:2,k:"k2",q:"¿Qué buena práctica de prueba aplica a cualquier modelo de ciclo de vida?",
  op:["Toda la documentación de prueba debe ser exhaustiva","Cada nivel de prueba tiene objetivos específicos y diferentes, evitando redundancia","La prueba dinámica empieza siempre antes que la estática","Un único nivel de prueba cubre todo el proyecto"],
  c:1,e:"Una buena práctica universal es que cada nivel de prueba tenga objetivos propios y diferenciados, para ser comprensivo sin redundancia. El nivel de documentación depende del modelo."},
 {cap:2,k:"k2",q:"¿Qué describe mejor el enfoque DGPA (ATDD)?",
  op:["Las pruebas se escriben solo después de implementar","Las pruebas se derivan de los criterios de aceptación antes de implementar la historia","Es un nivel de prueba","Sustituye a la prueba de regresión"],
  c:1,e:"En DGPA (ATDD), las pruebas se obtienen de los criterios de aceptación y se escriben antes de implementar la parte correspondiente de la aplicación; es un enfoque «probar primero»."},
 {cap:2,k:"k2",q:"¿Cuál es un desencadenante de la prueba de mantenimiento relacionado con la retirada de un sistema?",
  op:["La primera redacción de los requisitos","Probar el archivado de datos y los procedimientos de recuperación/restauración","La planificación de la iteración inicial","La definición de las historias de usuario"],
  c:1,e:"Al retirar un sistema puede ser necesario probar el archivado de datos (si hay retención larga) y los procedimientos de recuperación/restauración tras el archivado."},
 // ---- Capítulo 3 (4) ----
 {cap:3,k:"k2",q:"¿Qué tipo de defecto es más fácil de encontrar con prueba estática que con dinámica?",
  op:["Un problema de rendimiento bajo carga","Una ambigüedad o inconsistencia en los requisitos","Una fuga de memoria en ejecución prolongada","Un tiempo de respuesta inadecuado"],
  c:1,e:"La estática detecta defectos en productos no ejecutables (ambigüedades, inconsistencias en requisitos, código inalcanzable). El rendimiento o las fugas en ejecución requieren prueba dinámica."},
 {cap:3,k:"k1",q:"¿Qué rol de la revisión recopila las anomalías y registra las decisiones durante la reunión?",
  op:["El autor","El escriba (grabador)","El gestor","El revisor"],
  c:1,e:"El escriba/grabador recopila las anomalías de los revisores y registra decisiones y nuevas anomalías. El moderador facilita; el autor crea y corrige el producto."},
 {cap:3,k:"k2",q:"¿Qué tipo de revisión está dirigida por el autor y puede servir para formar a los revisores y generar consenso?",
  op:["Inspección","Revisión guiada (walkthrough)","Revisión técnica","Análisis estático"],
  c:1,e:"La revisión guiada la dirige el autor y sirve para evaluar calidad, formar, generar ideas/consenso y detectar anomalías. La inspección es la más formal y la dirige un moderador."},
 {cap:3,k:"k1",q:"¿Cuál de estos es un factor de éxito de las revisiones?",
  op:["Usar la revisión para evaluar a los participantes","Revisar en fragmentos pequeños para mantener la concentración","Prescindir de objetivos para ganar flexibilidad","Evitar la formación de los participantes"],
  c:1,e:"Revisar en fragmentos pequeños mantiene la concentración. Nunca debe evaluarse a las personas, y conviene objetivos claros, tiempo de preparación y formación."},
 // ---- Capítulo 4 (11) ----
 {cap:4,k:"k2",q:"¿En qué se basan las técnicas de prueba de caja blanca?",
  op:["En la especificación externa del objeto de prueba","En la estructura interna y el procesamiento (código, flujos)","Únicamente en la experiencia del probador","En los criterios de aceptación del cliente"],
  c:1,e:"Las técnicas de caja blanca (basadas en la estructura) analizan la implementación interna; por eso solo pueden diseñarse tras el diseño o la implementación."},
 {cap:4,k:"k3",q:"Un sistema acepta una contraseña de 8 a 16 caracteres (ambos incluidos). Con AVF de 2 valores en la frontera superior, ¿qué longitudes pruebas?",
  op:["16 y 17","15 y 16","16 y 18","Solo 16"],
  c:0,e:"En AVF de 2 valores cada frontera tiene dos elementos: el valor frontera (16) y su vecino de la partición adyacente (17). El AVF de 3 valores añadiría además 15."},
 {cap:4,k:"k3",q:"Aplicando partición de equivalencia a ese mismo campo (8–16), ¿cuántas particiones hay teniendo en cuenta las inválidas?",
  op:["Una válida y ninguna inválida","Una válida (8–16) y dos inválidas (<8 y >16)","Tres válidas","Solo dos inválidas"],
  c:1,e:"Hay una partición válida (8–16) y dos inválidas: longitudes menores que 8 y mayores que 16. Basta una prueba representativa por partición."},
 {cap:4,k:"k3",q:"En una tabla de decisión con 3 condiciones booleanas independientes, ¿cuántas columnas (reglas) tiene la tabla completa antes de simplificar?",
  op:["3","6","8","9"],
  c:2,e:"Con 3 condiciones booleanas hay 2³ = 8 combinaciones posibles, es decir 8 columnas en la tabla completa antes de eliminar las inviables o fusionar."},
 {cap:4,k:"k2",q:"¿Qué criterio de cobertura de transición de estado incluye intentar también las transiciones inválidas?",
  op:["Cobertura de todos los estados","Cobertura de transiciones válidas (conmutador 0)","Cobertura de todas las transiciones","Cobertura de sentencia"],
  c:2,e:"La cobertura de todas las transiciones practica las válidas e intenta ejecutar las inválidas; es el mínimo recomendado para software de misión/seguridad críticas."},
 {cap:4,k:"k3",q:"Un fragmento tiene un bucle «while» con una condición. Para lograr el 100 % de cobertura de rama, ¿qué hay que practicar?",
  op:["Solo el caso en que se entra al bucle","Tanto el resultado verdadero (entrar/continuar) como el falso (salir) de la condición","Solo que todas las sentencias del cuerpo se ejecuten","Únicamente que el bucle no se ejecute nunca"],
  c:1,e:"La cobertura de rama exige ejercitar ambos resultados de cada decisión: en un bucle, entrar/continuar (verdadero) y salir (falso). Ejecutar solo las sentencias del cuerpo cubre sentencia, no necesariamente rama."},
 {cap:4,k:"k2",q:"¿Qué afirmación sobre la cobertura de sentencia es correcta?",
  op:["100 % de sentencia garantiza 100 % de rama","100 % de sentencia asegura que cada sentencia ejecutable se ha practicado al menos una vez","100 % de sentencia detecta todos los defectos","La cobertura de sentencia subsume la de rama"],
  c:1,e:"El 100 % de cobertura de sentencia asegura ejecutar cada sentencia al menos una vez, pero no garantiza toda la lógica de decisión (la rama subsume a la sentencia, no al revés) ni detecta todos los defectos."},
 {cap:4,k:"k2",q:"¿En qué consiste la técnica de predicción de errores?",
  op:["Generar casos a partir de un diagrama de estados","Anticipar dónde fallará el software según la experiencia y el conocimiento de errores típicos","Ejecutar el código midiendo cobertura","Derivar pruebas de los criterios de aceptación"],
  c:1,e:"La predicción de errores anticipa errores, defectos y fallos basándose en la experiencia del probador; los ataques de defecto la sistematizan con listas de fallos conocidos."},
 {cap:4,k:"k2",q:"Según el criterio INVEST, ¿qué significa la «T» y por qué importa?",
  op:["Técnica: debe describir la tecnología a usar","Comprobable (Testable): si no se sabe cómo probarla, suele indicar que la historia no está clara","Temporal: debe tener una fecha límite","Total: debe cubrir todo el sistema"],
  c:1,e:"La «T» de INVEST es Comprobable (Testable). Si un implicado no sabe cómo probar una historia, suele ser señal de que no está suficientemente clara o no aporta valor evidente."},
 {cap:4,k:"k2",q:"¿Cuál es uno de los dos formatos más comunes para redactar criterios de aceptación?",
  op:["Orientado a la estructura del código","Orientado al escenario (Dado/Cuando/Entonces)","Orientado a la cobertura de ramas","Orientado al diagrama de clases"],
  c:1,e:"Los criterios de aceptación se redactan orientados a escenario (Dado/Cuando/Entonces, propio de BDD) o orientados a reglas (lista o tabla entrada-salida)."},
 {cap:4,k:"k2",q:"¿Qué es una partición de equivalencia inválida?",
  op:["Una partición que se solapa con otra","Un conjunto de valores que el objeto de prueba debe rechazar o ignorar (o cuyo procesamiento no está especificado)","Una partición vacía","Una partición que solo contiene valores frontera"],
  c:1,e:"Una partición inválida agrupa valores que deben ser rechazados/ignorados o cuyo procesamiento no está definido. Las particiones no deben solaparse ni estar vacías."},
 // ---- Capítulo 5 (9) ----
 {cap:5,k:"k1",q:"¿Cómo se denominan en Ágil los criterios de entrada que una historia debe cumplir para empezar a desarrollarse/probarse?",
  op:["Definición de Hecho (DoD)","Definición de Preparado (DoR)","Criterios de salida","Plan de prueba"],
  c:1,e:"Los criterios de entrada en Ágil son la Definición de Preparado (DoR); los criterios de salida son la Definición de Hecho (DoD)."},
 {cap:5,k:"k3",q:"Estimaciones de tres puntos: a=5, m=8, b=17 días. ¿Cuál es la estimación E?",
  op:["10 días","9 días","8 días","11 días"],
  c:1,e:"E = (a + 4m + b) / 6 = (5 + 32 + 17) / 6 = 54 / 6 = 9 días."},
 {cap:5,k:"k2",q:"¿Qué técnica de estimación es iterativa, basada en la experiencia, y tiene como variante el póker de planificación?",
  op:["Estimación basada en proporciones","Extrapolación","Delphi de banda ancha","Estimación de tres puntos"],
  c:2,e:"El Delphi de banda ancha es iterativo y basado en la experiencia de varios expertos que convergen; el póker de planificación es su variante ágil."},
 {cap:5,k:"k2",q:"En la pirámide de prueba, ¿qué caracteriza a las pruebas de la capa superior?",
  op:["Son pequeñas, rápidas y muy numerosas","Son de extremo a extremo, de mayor alcance y más lentas, y se necesitan pocas","Tienen mayor granularidad que las de la base","Nunca se automatizan"],
  c:1,e:"En la cima hay pocas pruebas de extremo a extremo, lentas y de gran alcance; en la base, muchas pruebas pequeñas, rápidas y aisladas. La pirámide guía el reparto del esfuerzo."},
 {cap:5,k:"k2",q:"En los cuadrantes de prueba, ¿en qué cuadrante encajan la prueba exploratoria y la de usabilidad?",
  op:["Q1 (técnico, apoya al equipo)","Q2 (negocio, apoya al equipo)","Q3 (negocio, critica el producto)","Q4 (técnico, critica el producto)"],
  c:2,e:"La exploratoria, la usabilidad y la PAU están en Q3 (orientadas al negocio, critican el producto) y suelen ser manuales."},
 {cap:5,k:"k1",q:"¿Cómo se calcula el nivel de riesgo?",
  op:["Sumando probabilidad e impacto","Combinando (multiplicando) la probabilidad del riesgo por su impacto","Solo por el impacto","Solo por la probabilidad"],
  c:1,e:"El nivel de riesgo combina probabilidad e impacto (en el enfoque cuantitativo, su producto). A mayor nivel, más importante es tratarlo."},
 {cap:5,k:"k2",q:"¿Cuál de estos es un riesgo de producto (no de proyecto)?",
  op:["Un retraso en la entrega de un proveedor","Una estimación inexacta del esfuerzo","Una vulnerabilidad de seguridad en la aplicación","La escasez de personal cualificado"],
  c:2,e:"Una vulnerabilidad de seguridad afecta a la calidad del producto: es un riesgo de producto. Retrasos, estimaciones y personal son riesgos de proyecto."},
 {cap:5,k:"k2",q:"¿Qué información debe incluir un buen informe de defecto para distinguir el grado de impacto de la urgencia de corrección?",
  op:["Solo la severidad","La severidad (impacto) y la prioridad (urgencia), que pueden no coincidir","Solo la prioridad","Únicamente el identificador y el título"],
  c:1,e:"Severidad (impacto del defecto) y prioridad (urgencia de corregirlo) son atributos distintos y pueden no coincidir; ambos deben constar en el informe."},
 {cap:5,k:"k2",q:"¿Cómo apoya a la prueba la gestión de la configuración mediante líneas base?",
  op:["Corrige automáticamente los defectos","Permite volver a una línea base anterior para reproducir resultados de pruebas previas","Elimina la necesidad de criterios de salida","Sustituye al informe de compleción"],
  c:1,e:"La gestión de la configuración versiona los productos de prueba; una vez aprobada, una línea base solo cambia con control de cambios y permite volver a ella para reproducir resultados."},
 // ---- Capítulo 6 (2) ----
 {cap:6,k:"k1",q:"¿Qué afirmación sobre la automatización de la prueba es correcta?",
  op:["Comprar la herramienta garantiza el éxito","Aporta consistencia y feedback más rápido, pero requiere esfuerzo de introducción, mantenimiento y formación","Elimina toda prueba manual","Hace innecesaria la gestión de configuración del testware"],
  c:1,e:"La automatización ofrece beneficios (consistencia, rapidez, métricas), pero adquirir la herramienta no basta: exige mantenimiento y formación, y no sustituye la prueba manual."},
 {cap:6,k:"k2",q:"¿Qué tipo de herramienta facilita la generación de casos de prueba, datos de prueba y procedimientos?",
  op:["Herramientas de gestión de la configuración","Herramientas de diseño e implementación de pruebas","Herramientas de gestión de defectos","Herramientas de colaboración"],
  c:1,e:"Las herramientas de diseño e implementación facilitan generar casos, datos y procedimientos de prueba. Las de ejecución/cobertura automatizan la ejecución y miden cobertura."}
];

const EXAMENES=[
  { id:"practica-1",
    nombre:"Examen de práctica · Set 1 (original)",
    descripcion:"40 preguntas originales fieles al programa de estudio v4.0, con la distribución oficial por capítulo (C1=8, C2=6, C3=4, C4=11, C5=9, C6=2).",
    minutos:META.examen.minutos, cortePorcentaje:META.examen.cortePorcentaje,
    preguntas:EXAMEN },
  { id:"practica-2",
    nombre:"Examen de práctica · Set 2 (original)",
    descripcion:"Otras 40 preguntas originales distintas, misma distribución oficial por capítulo. Ideal para un segundo simulacro.",
    minutos:META.examen.minutos, cortePorcentaje:META.examen.cortePorcentaje,
    preguntas:EXAMEN2 }
];

/* =========================================================
   EJERCICIOS DE PRÁCTICA (sin resolver + «Ver solución»)
   Originales, del estilo de los de aplicación (K3) del examen.
========================================================= */
const EJERCICIOS=[
{cap:4,k:"k3",titulo:"Partición de equivalencia y AVF · precio por edad",
 enunciado:`<p>Una taquilla calcula el precio de la entrada según la <strong>edad</strong> (número entero, válido de 0 a 120):</p>
 <ul>
   <li>Menores de 5 años (0–4): <strong>gratis</strong>.</li>
   <li>De 5 a 12 (incluidos): <strong>8 €</strong>.</li>
   <li>De 13 a 64: <strong>12 €</strong>.</li>
   <li>65 o más: <strong>9 €</strong>.</li>
 </ul>
 <p><strong>a)</strong> Identifica las particiones de equivalencia válidas y las inválidas de la edad.<br>
 <strong>b)</strong> Aplica el análisis del valor frontera (AVF) de <strong>2 valores</strong> e indica los valores a probar en cada frontera.</p>`,
 solucion:`<h4>a) Particiones de equivalencia</h4>
 <p><strong>Válidas</strong> (por precio): [0–4], [5–12], [13–64], [65–120]. Un valor representativo de cada una basta, p. ej. 2, 9, 30 y 80.<br>
 <strong>Inválidas</strong>: edad &lt; 0 y edad &gt; 120.</p>
 <h4>b) AVF de 2 valores (valor frontera + vecino de la partición adyacente)</h4>
 <ul>
   <li>Frontera 0 (mínimo válido): <strong>−1, 0</strong></li>
   <li>Frontera 4/5: <strong>4, 5</strong></li>
   <li>Frontera 12/13: <strong>12, 13</strong></li>
   <li>Frontera 64/65: <strong>64, 65</strong></li>
   <li>Frontera 120 (máximo válido): <strong>120, 121</strong></li>
 </ul>
 <p>Valores a probar: −1, 0, 4, 5, 12, 13, 64, 65, 120, 121. (Con AVF de 3 valores añadirías el otro vecino de cada frontera: 1, 3, 6, 11, 14, 63, 66, 119.)</p>`},

{cap:4,k:"k3",titulo:"Análisis del valor frontera de 3 valores · termostato",
 enunciado:`<p>Un termostato admite una temperatura objetivo <strong>entera</strong> entre <strong>15 y 30 °C</strong> (ambos incluidos). Fuera de ese rango muestra un error.</p>
 <p>Aplica <strong>AVF de 3 valores</strong> y lista los elementos de cobertura de cada frontera del rango válido.</p>`,
 solucion:`<h4>AVF de 3 valores (valor frontera + sus dos vecinos)</h4>
 <ul>
   <li>Frontera inferior (15): <strong>14, 15, 16</strong></li>
   <li>Frontera superior (30): <strong>29, 30, 31</strong></li>
 </ul>
 <p>El AVF de 3 valores es más riguroso que el de 2: por ejemplo, detectaría que la condición se haya implementado como <span class="term">&gt; 15</span> en vez de <span class="term">&gt;= 15</span>, porque probar 16 (vecino interior) además de 14 y 15 expone ese error.</p>`},

{cap:4,k:"k3",titulo:"Tabla de decisión · aprobación de préstamo",
 enunciado:`<p>Un banco aprueba un préstamo solo si se cumplen las <strong>tres</strong> condiciones: <em>ingreso mensual ≥ 1500 €</em>, <em>antigüedad laboral ≥ 12 meses</em> y <em>sin impagos previos</em>. En cualquier otro caso, se deniega.</p>
 <p><strong>a)</strong> Construye la tabla de decisión completa (de entrada limitada).<br>
 <strong>b)</strong> ¿Cuántos casos de prueba se necesitan para el 100 % de cobertura?</p>`,
 solucion:`<h4>a) Tabla de decisión completa (3 condiciones ⇒ 2³ = 8 reglas)</h4>
 <table>
  <tr><th>Regla</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr>
  <tr><td>Ingreso ≥ 1500</td><td>V</td><td>V</td><td>V</td><td>V</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>
  <tr><td>Antigüedad ≥ 12 m</td><td>V</td><td>V</td><td>F</td><td>F</td><td>V</td><td>V</td><td>F</td><td>F</td></tr>
  <tr><td>Sin impagos</td><td>V</td><td>F</td><td>V</td><td>F</td><td>V</td><td>F</td><td>V</td><td>F</td></tr>
  <tr><td><strong>Aprobar</strong></td><td>X</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
 </table>
 <h4>b) Cobertura</h4>
 <p>Para el 100 % de cobertura hay que practicar <strong>todas las columnas factibles</strong>: <strong>8 casos de prueba</strong> (una por regla). Solo R1 (las tres verdaderas) aprueba; el resto deniega. Como las 3 condiciones son independientes, ninguna regla es inviable y la tabla no se reduce.</p>`},

{cap:4,k:"k3",titulo:"Transición de estado · torniquete",
 enunciado:`<p>Un torniquete tiene dos estados: <strong>Bloqueado</strong> y <strong>Desbloqueado</strong>. Eventos: <em>moneda</em> y <em>empujar</em>.</p>
 <ul>
   <li>Bloqueado + moneda → Desbloqueado</li>
   <li>Bloqueado + empujar → Bloqueado (no cede)</li>
   <li>Desbloqueado + empujar → Bloqueado (pasa una persona)</li>
   <li>Desbloqueado + moneda → Desbloqueado (moneda extra)</li>
 </ul>
 <p><strong>a)</strong> ¿Cuántos estados y cuántas transiciones válidas hay?<br>
 <strong>b)</strong> Escribe una secuencia de eventos que logre la <strong>cobertura de transiciones válidas</strong> (conmutador 0) partiendo de Bloqueado.</p>`,
 solucion:`<h4>a) Estados y transiciones</h4>
 <p><strong>2 estados</strong> (Bloqueado, Desbloqueado) y <strong>4 transiciones válidas</strong> (una por cada combinación estado–evento de la lista).</p>
 <h4>b) Secuencia para cubrir las 4 transiciones válidas</h4>
 <p>Partiendo de <strong>Bloqueado</strong>:</p>
 <ol>
   <li><em>empujar</em> → Bloqueado (cubre Bloqueado+empujar)</li>
   <li><em>moneda</em> → Desbloqueado (cubre Bloqueado+moneda)</li>
   <li><em>moneda</em> → Desbloqueado (cubre Desbloqueado+moneda)</li>
   <li><em>empujar</em> → Bloqueado (cubre Desbloqueado+empujar)</li>
 </ol>
 <p>La secuencia <strong>empujar, moneda, moneda, empujar</strong> recorre las 4 transiciones válidas. Lograr la cobertura de transiciones válidas garantiza también visitar todos los estados.</p>`},

{cap:4,k:"k3",titulo:"Cobertura de sentencia frente a cobertura de rama",
 enunciado:`<p>Considera este pseudocódigo:</p>
 <pre>1  LEER x
2  resultado = "normal"
3  SI x &gt; 100 ENTONCES
4      resultado = "alto"
5  FIN SI
6  IMPRIMIR resultado</pre>
 <p><strong>a)</strong> ¿Cuántos casos de prueba como mínimo para el <strong>100 % de cobertura de sentencia</strong>? Indica un valor de <em>x</em>.<br>
 <strong>b)</strong> ¿Y para el <strong>100 % de cobertura de rama</strong>? Indica los valores de <em>x</em>.<br>
 <strong>c)</strong> ¿Qué principio ilustra la diferencia?</p>`,
 solucion:`<h4>a) Cobertura de sentencia</h4>
 <p><strong>1 caso</strong> basta: con <em>x = 150</em> se ejecutan todas las sentencias (incluida la línea 4). 100 % de sentencia.</p>
 <h4>b) Cobertura de rama</h4>
 <p>La decisión de la línea 3 (<span class="term">x &gt; 100</span>) tiene dos resultados. Hacen falta <strong>2 casos</strong>: <em>x = 150</em> (verdadero, entra al «SI») y <em>x = 50</em> (falso, no entra). Así se cubren ambas ramas.</p>
 <h4>c) Principio</h4>
 <p>La <strong>cobertura de rama subsume la de sentencia</strong>: el 100 % de rama garantiza el 100 % de sentencia, pero no al revés. Aquí 1 caso da 100 % de sentencia pero solo 50 % de rama (falta el resultado «falso» del «SI» sin «SI NO»).</p>`},

{cap:5,k:"k3",titulo:"Estimación de tres puntos",
 enunciado:`<p>Tres expertos estiman el esfuerzo de una tarea de prueba (en días-persona): optimista <strong>a = 4</strong>, más probable <strong>m = 10</strong>, pesimista <strong>b = 22</strong>.</p>
 <p>Calcula la <strong>estimación final E</strong>, la <strong>desviación SD</strong> y el <strong>rango</strong> resultante.</p>`,
 solucion:`<h4>Cálculo</h4>
 <p><strong>E</strong> = (a + 4·m + b) / 6 = (4 + 40 + 22) / 6 = 66 / 6 = <strong>11 días-persona</strong>.</p>
 <p><strong>SD</strong> = (b − a) / 6 = (22 − 4) / 6 = 18 / 6 = <strong>3 días-persona</strong>.</p>
 <p><strong>Rango</strong>: 11 ± 3, es decir, entre <strong>8 y 14 días-persona</strong>.</p>`},

{cap:5,k:"k3",titulo:"Priorización de casos de prueba con dependencias",
 enunciado:`<p>Tienes 4 casos de prueba con su nivel de riesgo (probabilidad × impacto) y una dependencia:</p>
 <table>
  <tr><th>Caso</th><th>Nivel de riesgo</th><th>Dependencia</th></tr>
  <tr><td>CP1</td><td>9</td><td>—</td></tr>
  <tr><td>CP2</td><td>6</td><td>—</td></tr>
  <tr><td>CP3</td><td>12</td><td>requiere datos creados por CP2</td></tr>
  <tr><td>CP4</td><td>3</td><td>—</td></tr>
 </table>
 <p>Aplica una <strong>priorización basada en el riesgo</strong> y determina el orden de ejecución teniendo en cuenta la dependencia.</p>`,
 solucion:`<h4>Paso 1 · Orden por riesgo (de mayor a menor)</h4>
 <p>CP3 (12) → CP1 (9) → CP2 (6) → CP4 (3).</p>
 <h4>Paso 2 · Aplicar la dependencia</h4>
 <p>CP3 depende de CP2, así que <strong>CP2 debe ejecutarse antes que CP3</strong>, aunque CP2 tenga menos riesgo. La regla es: si un caso de mayor prioridad depende de otro de menor prioridad, el de menor prioridad se ejecuta primero.</p>
 <h4>Orden final</h4>
 <p><strong>CP2 → CP3 → CP1 → CP4</strong>. (Se adelanta CP2 lo justo para habilitar CP3; el resto mantiene el orden por riesgo.)</p>`},

{cap:5,k:"k3",titulo:"Redacción de un informe de defecto",
 enunciado:`<p>Durante la prueba del inicio de sesión, al introducir un usuario y una contraseña <strong>correctos</strong>, el sistema muestra el mensaje «Usuario no encontrado» en lugar de entrar. Ocurre de forma reproducible en el entorno de pruebas, versión 2.3.1, navegador Chrome.</p>
 <p>Redacta los <strong>campos esenciales</strong> de un informe de defecto para esta anomalía.</p>`,
 solucion:`<h4>Informe de defecto (campos principales)</h4>
 <ul>
   <li><strong>Identificador:</strong> DEF-1027 (único).</li>
   <li><strong>Título:</strong> El login falla con credenciales válidas mostrando «Usuario no encontrado».</li>
   <li><strong>Fecha / autor / rol:</strong> 11/06/2026 · A. Pérez · Probador.</li>
   <li><strong>Objeto y entorno de prueba:</strong> App web v2.3.1, entorno de pruebas, Chrome 125 / Windows 11.</li>
   <li><strong>Contexto:</strong> caso de prueba CP-Login-01, prueba de sistema.</li>
   <li><strong>Pasos para reproducir:</strong> 1) Ir a /login. 2) Introducir usuario válido «ana@test.com» y su contraseña correcta. 3) Pulsar «Entrar».</li>
   <li><strong>Resultado esperado:</strong> acceso correcto al panel del usuario.</li>
   <li><strong>Resultado real:</strong> mensaje de error «Usuario no encontrado»; no se inicia sesión.</li>
   <li><strong>Severidad:</strong> alta (bloquea una funcionalidad principal).</li>
   <li><strong>Prioridad:</strong> alta (corregir cuanto antes).</li>
   <li><strong>Estado:</strong> abierto.</li>
   <li><strong>Referencias / evidencias:</strong> captura de pantalla, registro de la petición de login, CP-Login-01.</li>
 </ul>
 <p>Recuerda: la <strong>severidad</strong> (impacto) y la <strong>prioridad</strong> (urgencia) son atributos distintos y pueden no coincidir.</p>`}
];

/* =========================================================
   GLOSARIO ES ↔ EN (términos del syllabus CTFL v4.0)
========================================================= */
const GLOSARIO=[
 {es:"Error",en:"error / mistake",def:"Acción humana que produce un resultado incorrecto (la persona se equivoca)."},
 {es:"Defecto",en:"defect / fault / bug",def:"Imperfección en un componente o sistema que puede hacer que falle; lo introduce un error."},
 {es:"Fallo",en:"failure",def:"Comportamiento observable distinto del esperado al ejecutar el software; lo causa un defecto."},
 {es:"Causa raíz",en:"root cause",def:"Origen primero de un defecto; eliminarla evita que se repita."},
 {es:"Verificación",en:"verification",def:"Comprobar que se cumplen los requisitos especificados (¿se construyó bien el producto?)."},
 {es:"Validación",en:"validation",def:"Comprobar que se satisfacen las necesidades reales de uso (¿es el producto correcto?)."},
 {es:"Objeto de prueba",en:"test object",def:"Componente o sistema concreto que se está probando."},
 {es:"Base de prueba",en:"test basis",def:"Fuentes de información de las que se derivan los casos de prueba (requisitos, riesgos, etc.)."},
 {es:"Condición de prueba",en:"test condition",def:"Aspecto verificable de la base de prueba que un caso puede cubrir."},
 {es:"Caso de prueba",en:"test case",def:"Conjunto de precondiciones, entradas, resultados esperados y postcondiciones."},
 {es:"Procedimiento de prueba",en:"test procedure",def:"Secuencia de casos y acciones para su ejecución."},
 {es:"Cobertura",en:"coverage",def:"Grado en que un conjunto de pruebas ejercita un elemento medido (sentencias, ramas, condiciones…)."},
 {es:"Oráculo de prueba",en:"test oracle",def:"Fuente para determinar el resultado esperado de una prueba."},
 {es:"Prueba estática",en:"static testing",def:"Examen del producto (revisiones, análisis estático) sin ejecutar el código."},
 {es:"Prueba dinámica",en:"dynamic testing",def:"Prueba que ejecuta el software con datos de entrada."},
 {es:"Prueba de caja negra",en:"black-box testing",def:"Técnicas basadas en la especificación, sin mirar la estructura interna."},
 {es:"Prueba de caja blanca",en:"white-box testing",def:"Técnicas basadas en la estructura interna (código, arquitectura)."},
 {es:"Partición de equivalencia",en:"equivalence partitioning",def:"Divide las entradas en clases que se espera traten igual; se prueba un valor por clase."},
 {es:"Análisis de valores límite",en:"boundary value analysis",def:"Prueba los bordes de las particiones ordenadas, donde abundan los defectos."},
 {es:"Tabla de decisión",en:"decision table testing",def:"Combina condiciones y acciones para cubrir reglas de negocio."},
 {es:"Transición de estado",en:"state transition testing",def:"Modela estados y transiciones del sistema para derivar pruebas."},
 {es:"Prueba basada en experiencia",en:"experience-based testing",def:"Aprovecha el conocimiento del probador (conjetura de errores, exploratoria, lista de comprobación)."},
 {es:"Prueba exploratoria",en:"exploratory testing",def:"Diseño y ejecución simultáneos, aprendiendo del sistema sobre la marcha."},
 {es:"Conjetura de errores",en:"error guessing",def:"Anticipa defectos a partir de la experiencia y errores típicos."},
 {es:"Nivel de prueba",en:"test level",def:"Grupo de actividades de prueba: componente, integración, sistema y aceptación."},
 {es:"Tipo de prueba",en:"test type",def:"Objetivo concreto: funcional, no funcional, de caja blanca o de regresión."},
 {es:"Prueba de regresión",en:"regression testing",def:"Reejecuta pruebas para detectar defectos introducidos por cambios."},
 {es:"Prueba de confirmación",en:"confirmation testing / re-testing",def:"Verifica que un defecto corregido ya no se reproduce."},
 {es:"Prueba de humo",en:"smoke testing",def:"Conjunto reducido que comprueba que las funciones críticas funcionan antes de seguir."},
 {es:"Criterios de entrada",en:"entry criteria",def:"Condiciones que deben cumplirse para iniciar una actividad de prueba."},
 {es:"Criterios de salida",en:"exit criteria / DoD",def:"Condiciones para dar por terminada una actividad de prueba."},
 {es:"Plan de prueba",en:"test plan",def:"Documento que describe alcance, objetivos, enfoque y recursos de la prueba."},
 {es:"Monitorización y control",en:"test monitoring and control",def:"Comparar el avance real con el plan y tomar acciones correctoras."},
 {es:"Informe de defecto",en:"defect report",def:"Registro de un defecto con su descripción, severidad, prioridad y evidencias."},
 {es:"Severidad",en:"severity",def:"Impacto de un defecto en el sistema."},
 {es:"Prioridad",en:"priority",def:"Urgencia con la que conviene corregir un defecto; puede no coincidir con la severidad."},
 {es:"Riesgo de producto",en:"product risk",def:"Posibilidad de que el producto falle y perjudique a usuarios o negocio."},
 {es:"Riesgo de proyecto",en:"project risk",def:"Factor que amenaza la consecución de los objetivos del proyecto."},
 {es:"Prueba basada en riesgos",en:"risk-based testing",def:"Prioriza y enfoca la prueba según el nivel de riesgo."},
 {es:"Desarrollo guiado por prueba",en:"TDD — test-driven development",def:"Escribir primero la prueba (que falla) y luego el código que la satisface."},
 {es:"Integración continua",en:"continuous integration (CI)",def:"Integrar y verificar cambios con frecuencia mediante una canalización automatizada."}
];

/* Registro de la certificación para el motor (app.js) */
window.__CERT__={ meta:META, semanas:SEMANAS, caps:CAPS, examenes:EXAMENES, ejercicios:EJERCICIOS, glosario:GLOSARIO };
