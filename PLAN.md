# Plan de acción — Plataforma de estudio ISTQB

> Documento vivo. Se actualiza en cada iteración. Marca el estado de cada tarea
> con `[ ]` / `[x]`. Última actualización: 2026-09-21.

## 1. Objetivo

Una web **estática, sin base de datos ni API**, para estudiar certificaciones
ISTQB. Una *home* permite elegir el programa; de momento dos:

- **ISTQB Foundation (CTFL v4.0)** — 6 capítulos.
- **ISTQB Automation Tester (CTAL-TAE v2.0)** — 8 capítulos.

Cada programa ofrece: temario completo navegable, **quiz por capítulo**,
**examen final con temporizador**, y seguimiento de progreso. Hoy ya existe un
prototipo monolítico de CTAL-TAE en [ctal-tae-v2-estudio.html](ctal-tae-v2-estudio.html).

## 2. Principios de diseño

1. **Sin backend.** Todo el contenido vive en ficheros de datos JS/JSON cargados
   en el navegador. El progreso se guarda en `localStorage`. Cero llamadas de red.
2. **Sin paso de compilación obligatorio** (recomendado para empezar): HTML +
   CSS + JS vanilla con módulos ES. Se puede abrir con un servidor estático
   simple y desplegar en GitHub Pages / Netlify sin build.
3. **Contenido separado de la lógica.** El motor (render de temario, quiz,
   examen, timer, progreso) es genérico; cada certificación es solo *datos*.
   Añadir una tercera certificación = añadir una carpeta de datos.
4. **Una sola fuente de verdad por pregunta:** enunciado, opciones, índice
   correcto, explicación, nivel cognitivo (K2/K3/K4) y capítulo.
5. **Accesible y responsive** (ya cuidado en el prototipo actual).

## 3. Arquitectura propuesta

```
/
├── index.html              # HOME: selección de programa
├── app.html                # Shell de estudio (recibe ?cert=foundation|ctal-tae)
├── assets/
│   ├── css/styles.css      # estilos (tokens :root) + estilos de la home
│   └── js/app.js           # motor genérico: estado/localStorage, nav, plan,
│                           #   temario+quiz, examen con timer+mapa+revisión
├── data/
│   ├── foundation/datos.js # (Fase 3) define META, SEMANAS, CAPS, EXAMEN
│   └── ctal-tae/datos.js   # migrado del prototipo; define window.__CERT__
├── docs/md/                # PDFs convertidos a Markdown (fuente de contenido)
├── test/                   # (Fase 12.1) suite de validación: `npm test`
│   ├── ejecutar.js         #   runner; admite filtros y --cert=
│   ├── ayuda.js            #   arranque en jsdom + mini-arnés de aserciones
│   └── *.test.js           #   datos · navegacion · repaso · mapa · quiz ·
│                           #   examen · glosario
├── package.json            # solo para `npm test` (jsdom como devDependency)
└── PLAN.md
```

> **Nota de implementación:** se usan *scripts clásicos* (no módulos ES) con un
> registro global `window.__CERT__`, para que la web funcione abriendo los HTML
> directamente con `file://` sin servidor (los módulos ES fallan por CORS en
> `file://`). Cada `data/<cert>/datos.js` define `META/SEMANAS/CAPS/EXAMEN` y al
> final hace `window.__CERT__ = {...}`. El motor (`app.js`) es único y genérico;
> añadir una certificación = añadir su `datos.js` y una entrada en `index.html`.

**Modelo de datos (por pregunta):**
```js
{ q:"enunciado", op:["a","b","c","d"], c:1, e:"explicación", k:"k2", cap:3 }
```
**Modelo de capítulo:**
```js
{ n:1, titulo:"…", resumen:"…",
  secciones:[ { id:"1.1", titulo:"…",                       // numeración del syllabus
                lo:[{id:"FL-1.1.1",k:"K1",t:"…"}],          // objetivos de aprendizaje
                html:"…teoría…" } ],
  quiz:[ …preguntas… ] }
```
> Formato antiguo (`html:"…"` sin `secciones`) sigue soportado por el motor.
> **Semana del plan:** `{ cap:2, subs:["2.2","2.3"], t:"…", d:"…" }` — el enlace
> principal lleva a `subs[0]` y se pinta una pastilla por sección.

**meta.json (por certificación):**
```json
{
  "id": "foundation",
  "nombre": "ISTQB Foundation (CTFL v4.0)",
  "examen": { "preguntas": 40, "minutos": 60, "cortePorcentaje": 65 },
  "semanas": [ { "t": "…", "d": "…" } ]
}
```

> El examen Foundation oficial: 40 preguntas, 60 min, corte 65% (26/40).
> El examen CTAL-TAE oficial: 40 preguntas, 90 min, corte 65%.

## 4. Estado actual

- [x] PDFs convertidos a Markdown en [docs/md/](docs/md/) (índice en [docs/md/README.md](docs/md/README.md)).
- [x] Prototipo CTAL-TAE original (1 archivo): conservado como referencia en
      [ctal-tae-v2-estudio.html](ctal-tae-v2-estudio.html).
- [x] **Web funcional multi-programa** (Fases 0–2 completas): home, shell `app.html`,
      motor `app.js`, CTAL-TAE migrado y verificado de extremo a extremo con jsdom.
- [x] **Foundation (CTFL v4.0) completo** (Fase 3): 6 capítulos con teoría fiel al
      syllabus, 30 preguntas de quiz y examen final de 40 preguntas. Ambas
      certificaciones operativas desde la home.
- [x] **Teoría ampliada** de los 6 capítulos de Foundation (≈3× más extensa:
      tablas, ejemplos resueltos de las técnicas K3, detalle de cada sección).
- [x] **Motor multi-examen**: `data/<cert>/datos.js` admite `examenes:[{...}]`
      (varios sets con su propio tiempo/corte) y el examen muestra un selector.
      Compatibilidad con el formato antiguo (`examen` + `meta.examen`).
- [x] **Exámenes oficiales enlazados** como PDF en Recursos (A/B/C/D de Foundation
      y el ejemplo oficial de CTAL-TAE), como práctica. No se reproducen dentro de
      la app por ser material con copyright de ISTQB.
- [x] Ampliación de la teoría de CTAL-TAE (2.ª pasada) y mejoras de producto (fases 4–5):
      glosario buscable, exportar/importar progreso y modo oscuro. **Solo queda el
      despliegue** (GitHub Pages + README), aplazado a petición.

## 5. Fases de iteración

### Fase 0 — Estructura y refactor (base reutilizable) ✅
- [x] Esqueleto de carpetas (`assets/`, `data/`, `index.html`, `app.html`).
- [x] CSS extraído a `assets/css/styles.css` (+ estilos de la home).
- [x] JS del prototipo generalizado en `assets/js/app.js` (motor único).
- [x] Datos de CTAL-TAE migrados a `data/ctal-tae/datos.js`.
- [x] Verificado que CTAL-TAE funciona desde `app.html?cert=ctal-tae`
      (render, quiz, examen y persistencia probados con jsdom, 0 errores).

### Fase 1 — Home y multi-programa ✅
- [x] `index.html` con tarjetas (Foundation, CTAL-TAE) + progreso leído de `localStorage`.
- [x] El shell carga dinámicamente `data/<cert>/datos.js` según `?cert=`.
- [x] Progreso *namespaced* por certificación (`istqb:foundation`, `istqb:ctal-tae`).
- [x] Foundation aparece como "En preparación" hasta completar la Fase 3.

### Fase 2 — Persistencia real del progreso ✅
- [x] Guardar en `localStorage`: capítulos superados, notas de quizzes, último
      examen y semanas marcadas. (El prototipo solo guardaba en memoria de sesión.)
- [x] Botón "Reiniciar progreso" por certificación.

### Fase 3 — Contenido Foundation (CTFL v4.0) ✅
- [x] Creado `data/foundation/datos.js` con META (40 preguntas, 60 min, corte 65 %).
- [x] Teoría de los 6 capítulos redactada **a partir del programa de estudio oficial**
      ([docs/md/FOUNDATION/programa-estudio.md](docs/md/FOUNDATION/programa-estudio.md)),
      en español de España, cubriendo los objetivos de aprendizaje (LO) de cada sección.
- [x] Quiz por capítulo (5 preguntas cada uno, 30 en total) con corrección razonada.
- [x] Examen final de **40 preguntas** originales basadas en el syllabus, con la
      distribución oficial por capítulo (C1=8, C2=6, C3=4, C4=11, C5=9, C6=2) y
      niveles K1/K2/K3 (incluye ejercicios de aplicación: PE, AVF, tabla de decisión,
      transición de estado, cobertura sentencia/rama, estimación de tres puntos).
- [x] Plan de estudio de 10 semanas para Foundation.
- [x] Foundation marcado como `disponible:true` en `index.html`.
- [x] Motor: umbral de aprobado del quiz hecho proporcional (80 %) en vez de fijo en 4.
- [x] Verificado de extremo a extremo con jsdom (render, quiz, examen 26/40 = aprobado).

> **Nota sobre los exámenes oficiales A/B/C/D:** el examen final se redactó con
> preguntas **originales fieles al syllabus** (no copias de los modelos oficiales)
> para no reproducir material con copyright de ISTQB de forma verbatim. Los `.md`
> de los modelos oficiales siguen disponibles en `docs/md/FOUNDATION/` como
> material de práctica adicional y referencia de estilo.

### Fase 4 — Corregir y ampliar contenido CTAL-TAE ✅
- [x] **Corregida la estructura de capítulos** para coincidir con el syllabus
      oficial v2.0 (el prototipo tenía mezclados los caps. 4, 5 y 6):
      1 Introducción · 2 Preparación · 3 Arquitectura (AAPg + MTAP) ·
      4 Implementación · 5 Estrategias de despliegue (IC/EC) ·
      6 Suministro de información y métricas · 7 Verificación · 8 Mejora continua.
- [x] Teoría de los 8 capítulos reescrita y ampliada (~1,7× más extensa) a partir
      de [docs/md/CTAL-TAE/programa-estudio.md](docs/md/CTAL-TAE/programa-estudio.md),
      con **terminología oficial v2.0** (SSP/SAP/MTAP/AAPg/IAP/IGU/IPA) glosada con
      los equivalentes comunes (SUT/TAS/framework/gTAA).
- [x] 40 preguntas de quiz (5/capítulo) y examen de 40 preguntas **reasignadas a
      los capítulos correctos** (C1=4, C2=6, C3=8, C4=5, C5=5, C6=5, C7=4, C8=3).
- [x] Enlace al ejemplo de examen oficial v2.0 (PDF) en Recursos.
- [x] Verificado de extremo a extremo con jsdom (8 capítulos, examen, 0 errores).
- [x] **2.ª ampliación de teoría** (2026-06-14) para cubrir conceptos del syllabus que
      faltaban o estaban resumidos: cap. 2 (los 5 entornos y prueba en producción —
      canario/azul-verde/A-B—, transparencia de la arquitectura, identificadores de
      accesibilidad y variables de entorno/despliegue, tabla comparativa de herramientas
      y criterios de análisis del SSP); cap. 3 (POO, SOLID, patrones singleton y modelo
      de flujo, pros/contras de cada enfoque de scripting, escalado de librerías base);
      cap. 6 (paneles de control y análisis de registros con IA/AA); cap. 8 (mecanismos
      de espera —rígida/sondeo/eventos—, recuperación de fallos y áreas concretas de
      mejora de la SAP). Teoría ≈41,5 k caracteres; sintaxis y estructura verificadas.
- [x] **Preguntas de quiz sobre los conceptos nuevos** (2026-06-14): +7 preguntas
      (cap. 2: entornos/preproducción y prueba en producción canario; cap. 3: SOLID y
      patrón singleton; cap. 6: análisis de registros con AA; cap. 8: mecanismos de
      espera y setup/teardown). Quizzes ahora 5–7 preguntas/capítulo (umbral 80 %
      proporcional, ya soportado por el motor); el texto del temario se ajustó. Las nuevas
      preguntas alimentan también el «examen por capítulo». Exámenes Set 1/2 sin tocar
      (distribución oficial 40 preguntas intacta). 127 preguntas validadas, 0 errores.

### Fase 5 — Mejoras de producto
- [x] **Set 2 de examen original** para Foundation (40 preguntas nuevas) y CTAL-TAE
      (40 preguntas nuevas), con la distribución oficial por capítulo. Ambos sets
      aparecen en el selector del examen.
- [x] **Examen por capítulo** cronometrado: botón por capítulo que genera un examen
      con las preguntas de ese capítulo (banco común de todos los sets) y tiempo
      proporcional al número de preguntas.
- [x] **Aleatorización** del orden de preguntas y de respuestas (conmutador en el
      selector; remapea la opción correcta al barajar).
- [x] **Ejercicios de práctica** (Foundation): nueva pestaña «Ejercicios» con 8
      ejercicios originales sin resolver (PE, AVF 2/3, tabla de decisión, transición
      de estado, cobertura sentencia/rama, estimación de tres puntos, priorización,
      informe de defecto) y botón «Ver solución» que revela la resolución paso a
      paso. El motor oculta la pestaña en certificaciones sin ejercicios (CTAL-TAE).
- [x] **Glosario ES↔EN navegable y buscable** (2026-06-14): nueva pestaña «Glosario»
      genérica del motor (`CERT.glosario`, se oculta si la cert no lo define). Búsqueda
      sin acentos por término ES/EN, sigla o definición, con resaltado de coincidencias y
      contador. Datos: 48 términos en CTAL-TAE (terminología v2.0 + palabras clave del
      syllabus) y 41 en Foundation (términos CTFL v4.0).
- [x] **Exportar/importar progreso (JSON)** (2026-06-14): tarjeta en «Plan de estudio».
      Exporta `{app,cert,version,fecha,estado}` a un `.json` descargable; importa con
      validación (avisa si la cert no coincide, confirma antes de sustituir, rechaza
      archivos inválidos sin tocar el progreso) y recarga. Genérico para ambas certs.
- [x] **Modo oscuro** (2026-06-14): tema conmutable con botón flotante (`assets/js/tema.js`),
      compartido por la home y el shell. Preferencia en `localStorage` (`istqb:tema`),
      respeta `prefers-color-scheme` y se aplica con un script en línea en el `<head>`
      para evitar parpadeo. Paleta oscura completa en `styles.css` (`:root[data-theme=dark]`).
- [x] **Plan de estudio enlazable** (2026-06-14): cada semana enlaza con su capítulo
      (campo `cap`) o con el examen (campo `sec`) y abre el temario en ese punto; la
      casilla de progreso queda separada del enlace (clicar el cuerpo navega, marcar la
      casilla solo guarda el avance). Se refactorizó la navegación del motor
      (`activarSeccion`/`irACapitulo`) y de paso se corrigió un fallo latente: el botón
      «Reiniciar» disparaba el conmutador de secciones sobre un `sec-undefined`.
- [x] **Correcciones de contraste en modo oscuro** (2026-06-14): los botones sin `color`
      explícito (opciones del quiz al deshabilitarse, tarjetas de capítulo, mapa del
      examen) heredaban el color por defecto del navegador (negro) y quedaban ilegibles.
      Se fijó `color:inherit` en el reset global de `button` y `color` explícito en los
      puntos afectados.
- [x] **Navegación entre capítulos + arreglos tipográficos** (2026-06-14): en la vista de
      capítulo, barra inferior «← Capítulo anterior · Todos los capítulos · Capítulo
      siguiente →» (con título del destino; extremos deshabilitados), para no volver
      siempre a la rejilla. Además: «Control(abilidad)» → «Controlabilidad» (cap. 2 CTAL)
      e iconos poco comunes `⤓`/`⤒` de exportar/importar sustituidos por `↓`/`↑`
      (riesgo de «tofu» en algunas fuentes). Sin mojibake real en el contenido.
- [ ] Despliegue (GitHub Pages) y README de uso. *(pendiente, aplazado a petición)*

### Fase 6 — Profundidad de contenido CTAL-TAE
> Diagnóstico (2026-06-14): el contenido de CTAL-TAE está muy escorado a K2
> (comprender). Distribución actual — quizzes: 31 K2 / 15 K3 / 1 K4; exámenes: 55 K2 /
> 20 K3 / 5 K4. Para un nivel Avanzado, que es sobre todo *aplicar* y *analizar*, falta
> entrenamiento de escenarios K3/K4. Además CTAL-TAE no tiene ejercicios (Foundation sí).
> El objetivo de esta fase es elevar la profundidad del contenido, no la web.

- [x] **Ejercicios de escenario K3/K4 para CTAL-TAE** (2026-06-14): 11 ejercicios de
      diseño/análisis con «Ver solución» paso a paso (`CERT.ejercicios`), mapeados a los
      objetivos de aprendizaje aplicados: diseñar el MTAP por capas (3.1.3), elegir
      enfoque de scripting (3.1.4), aplicar patrón de diseño (3.1.5), analizar el SSP para
      determinar la SAP (2.2.1, K4), diagnosticar un fallo desde el log: SSP / fallo de
      SAP / entorno (6.1.2, K4), mapear niveles de prueba a la canalización IC/EC (5.1.1),
      analizar riesgos de despliegue y mitigaciones (4.2.1, K4), recomendar mejoras desde
      métricas (8.1.2, K4), reestructurar el testware ante un cambio del SSP (8.1.3),
      planificar la verificación del entorno (7.1.1) y elegir mecanismo de espera (8.1.2).
      Distribución: 7 K3 + 4 K4, en los caps. 2-8. Verificado con jsdom (pestaña visible,
      «Ver solución» alterna, Foundation intacto).
- [x] **Reequilibrar hacia K3/K4** (2026-06-14): (a) +1 pregunta K4 de análisis en los
      quizzes de los capítulos K4 que estaban a cero (2, 4 y 6) → los quizzes pasan de
      1 a 4 preguntas K4; (b) nuevo **Set 3 de examen «Análisis (K3/K4)»** (`practica-3`,
      `EXAMEN3`): 40 preguntas con la distribución oficial por capítulo (C1=4…C8=3) pero
      la mezcla cognitiva inclinada a aplicar/analizar — **K2=11, K3=20, K4=9** (frente al
      ~69 % K2 de los Sets 1/2). Aparece como tercer set en el selector. 170 preguntas del
      banco validadas (0 errores); verificado con jsdom que el Set 3 arranca (40 preg.,
      90 min).
- [x] **Diagramas visuales** (2026-06-14) en la teoría del cap. 3, en HTML/CSS sin
      imágenes externas y compatibles con modo oscuro: (1) esquema de la **AAPg** con sus
      4 capacidades (generación → definición → ejecución → adaptación → SSP) y sus 4
      interfaces (SSP, proyecto, configuración, prueba); (2) esquema de las **3 capas del
      MTAP** con la dirección de dependencia (guiones → lógica de negocio → librerías
      base) y el aviso de que los guiones no deben llamar directamente a las base.
      Verificado con jsdom (4 capacidades, 4 interfaces, 3 capas; quiz y cap-nav intactos).
- [x] **Caso de estudio transversal** (2026-06-14): nueva pestaña «Caso de estudio»
      (genérica del motor, `CERT.caso`; se oculta si la cert no lo define). SSP ficticio
      **«Aurora»** (tienda online: web + API REST + app móvil + pasarela externa) hilado
      por los 8 capítulos, con una tarjeta por capítulo que aplica sus conceptos a Aurora
      y un botón «Ir al capítulo N» (reutiliza `irACapitulo`). Verificado con jsdom (8
      bloques, enlaces navegan al temario; Foundation oculta la pestaña).
- [x] **Tarjeta de «trampas de terminología»** (2026-06-14): nueva tarjeta «Trampas de
      terminología (repaso exprés)» en la sección Recursos de CTAL-TAE, con 11 confusables
      de examen: SSP/SAP/MTAP/AAPg; 4 capacidades vs 3 capas; falso positivo/negativo/fallo
      de SAP; controlabilidad vs observabilidad; desventaja vs limitación; sin código vs
      baja en código; validación de esquemas vs prueba de contrato; contrato consumidor vs
      proveedor; espera rígida/sondeo/eventos; pruebas en despliegue vs canalización aparte;
      data-driven vs keyword-driven. Verificado con jsdom.
- [x] **Etiquetado por objetivo de aprendizaje y nivel K** del contenido: hecho en la
      Fase 7 (cada sección declara sus LO `TAE-x.x.x` / `FL-x.x.x` con su nivel K y se
      pintan en la cabecera de la sección). Queda pendiente una vista agregada de
      cobertura y huecos.

### Fase 7 — Capítulos por secciones del syllabus y navegación profunda ✅
> Problema detectado (2026-09-21): el plan de estudio tenía semanas del tipo
> «Capítulo 2 (I)» y «Capítulo 2 (II)» que **enlazaban las dos al mismo punto**
> (la cabecera del capítulo), en ambas certificaciones. Los capítulos eran un
> único bloque de HTML sin puntos de entrada intermedios.

- [x] **Modelo de datos:** cada capítulo admite ahora `resumen` + `secciones:[{id,titulo,lo,html}]`,
      numeradas como en el syllabus oficial. El motor (`seccionesDe`, `anclaSec`, `buscaSec`,
      `irASeccion`, `irACapitulo(n,secId)`) es genérico y mantiene compatibilidad con el
      formato antiguo (`html`), que se sigue renderizando como una tarjeta única.
- [x] **Foundation:** 6 capítulos → **22 secciones** (1.1–6.2) con sus 64 objetivos de
      aprendizaje `FL-x.x.x` y nivel K. Teoría ampliada de 40,5 k a 47,5 k caracteres con
      seis bloques nuevos que cubrían huecos del syllabus: contribuciones de la prueba al
      éxito (1.2.1), el proceso de prueba en contexto (1.4.2), roles en la prueba (1.4.5),
      desplazamiento a la izquierda (2.1.5), prueba de mantenimiento completa con los tres
      desencadenantes y el análisis de impacto (2.3), y factores de éxito de las revisiones
      (3.2.5, que solo existía como nota al pie). Se eliminaron tres bloques que duplicaban
      contenido ya desarrollado en otras secciones.
- [x] **CTAL-TAE:** 8 capítulos → **26 secciones** (1.1–8.1.4) con sus 29 objetivos
      `TAE-x.x.x` y nivel K. Teoría ampliada con tres bloques en las secciones más escuetas:
      consideraciones de diseño de la SAP (3.1.2), qué conocer antes de automatizar una IPA
      (5.1.3) y cómo reestructurar el producto de prueba paso a paso (8.1.3). Ninguna nota
      quedó huérfana: las que cerraban capítulo se reubicaron en la sección a la que aludían.
- [x] **Navegación:** (a) las tarjetas de la rejilla listan sus secciones y cada una abre el
      capítulo en ese punto; (b) cada capítulo abre con un índice «En este capítulo» y cada
      sección lleva ancla propia, cabecera numerada, sus LO y un «↑ Volver al índice»;
      (c) cada semana del plan declara `subs:[...]` y muestra una pastilla por sección, con
      el enlace principal apuntando a la primera —«Capítulo 2 (I)» va a 2.1 y «Capítulo 2 (II)»
      a 2.2—; (d) los bloques del caso de estudio de CTAL enlazan con su sección concreta.
      El desplazamiento descuenta el alto real de la barra sticky y resalta la sección destino.
- [x] Verificado con jsdom y con Chromium (claro/oscuro, 1100 px y 390 px): 22+26 destinos
      distintos desde los índices, **ninguna semana comparte destino**, LO pintados, quiz,
      examen, ejercicios, caso, glosario y recursos intactos y sin errores de consola.

### Fase 8 — Estudio dirigido por debilidades
> Objetivo: pasar de «leer el temario y hacer tests» a «estudiar lo que fallas».
> Hoy el progreso guardado es `{capsOk, quizNotas[cap], semanas, examen, examenes[id]}`:
> solo la **última nota** de cada quiz. No se guarda *qué* preguntas se fallaron, así
> que no hay forma de repasarlas ni de detectar huecos por objetivo de aprendizaje.

- [x] **8.1 · Preguntas ancladas a su sección** (2026-09-21). Las **280 preguntas** (110 de
      Foundation + 170 de CTAL-TAE) llevan ahora `id` estable y `sec` además de `cap`:
      - `id`: `q<cap>-<n>` para los quizzes y `s<set>-<nn>` para los sets de examen.
      - `sec`: sección del syllabus, clasificada una a una a partir del enunciado y de la
        justificación. Cubre las 22 secciones de Foundation y 25 de las 26 de CTAL-TAE
        (8.1.4 solo aparece en el quiz del cap. 8, no en los sets de examen).
      - Uso en la interfaz: **desglose por sección** en el resultado del examen (verde /
        ámbar / rojo, cada fila abre el temario en ese punto); botón **«Repasar 4.2 ·
        título →»** en cada pregunta de la revisión; etiqueta de sección en las preguntas
        del quiz y atajo de repaso en la explicación **solo al fallar**; y el antiguo
        «Examen por capítulo» pasa a **«Examen por capítulo o sección»**, con una pastilla
        por sección con su número de preguntas y la última nota.
      - Durante el examen **no** se muestra la sección (solo el capítulo, como antes) para
        no dar más pista de la que da el examen real.
      - Verificado con jsdom: 110 + 170 ids únicos con sección válida, 22 y 25 botones de
        examen por sección, y todos los atajos de repaso (desglose y revisión) navegan a su
        sección exacta.
- [x] **8.2 · Registro de respuestas y repaso de falladas** (2026-09-21).
      - **Historial por pregunta** en `estado.preguntas[id] = {ok, mal, ult, ultOk}`, que
        alimentan tanto los quizzes como la corrección del examen (una pregunta sin
        responder cuenta como fallo). Se exporta e importa con el resto del progreso y se
        borra al reiniciar.
      - **Banco unificado** `BANCO` (quizzes + todos los sets) indexado por `id`, para
        reconstruir cualquier pregunta guardada y saber de dónde viene.
      - **Clasificación**: `pendiente` (fallada la última vez) · `frágil` (acertada, pero
        con fallos previos y ≥ 7 días sin tocarla) · `en repaso` (acertada hace poco, con
        fallos previos) · `dominada` (acertada sin haber fallado nunca) · `sin practicar`.
        La cola = pendientes + frágiles, ordenada por `1000·pendiente + 10·fallos + días`.
      - **Pestaña «Repaso»** con contador en la propia pestaña y aviso en la cabecera:
        tarjetas de estado, «Repasar las N» / «Repaso rápido (10)», y un desglose de
        «dónde se concentran tus fallos» por sección, con atajo al temario y botón
        «Repasar estas N» por sección. La sesión no tiene temporizador —aquí se estudia,
        no se examina— y da corrección inmediata con atajo a la sección al fallar.
      - Refactor: `pintaPreguntaInteractiva()` unifica el render de pregunta con
        corrección inmediata que usan el quiz de capítulo y la sesión de repaso.
      - Verificado con jsdom (`e2e-repaso.js`, 20 comprobaciones) recorriendo el ciclo
        completo: fallar un quiz → cola y contadores → recarga → sesión de repaso →
        reclasificación → reaparición de las frágiles a los 9 días → desglose por sección →
        examen → reinicio. Y con Chromium en claro/oscuro a 1100 y 390 px, sin errores.
- [x] **8.3 · Mapa de dominio por objetivo de aprendizaje** (2026-09-21).
      > Corrección de un dato anotado antes por error: los objetivos son **64 en
      > Foundation** (14+10+8+14+16+2 por capítulo) y **29 en CTAL-TAE** (3+4+5+3+3+3+4+4),
      > no 44 y 26 como decían las entradas de 8.1. Ya está corregido más arriba.
      - **Segunda vista dentro de «Repaso»**, con un selector «Cola de repaso (N)» /
        «Mapa de dominio · N objetivos», para no añadir una octava pestaña y volver a
        romper la barra de navegación.
      - **Medición por sección, heredada a sus objetivos**: el banco está etiquetado por
        sección (8.1), así que todos los LO de una sección comparten su medición, y así se
        explica en la propia tarjeta. Métrica: «preguntas al día» = aquellas cuyo último
        intento fue acierto, sobre el total de la sección. Verde ≥ 80 %, ámbar ≥ 50 %,
        rojo por debajo, gris si no se ha practicado ninguna.
      - Por capítulo y sección: barra de progreso, «X/Y preguntas al día · Z % · N en
        cola», una **pastilla por objetivo** con su nivel K y el enunciado en el `title`
        (todas llevan al punto del temario), y un botón **«Practicar (N)» / «Empezar (N)»**
        que abre una sesión sin cronómetro con *todas* las preguntas de esa sección.
      - Resumen arriba: objetivos dominados / a medias / flojos / sin practicar, y
        «practicados X/N».
      - La sesión de repaso se generalizó para admitir preguntas nunca vistas, con sellos
        PENDIENTE · FRÁGIL · SIN PRACTICAR · REPASO · AL DÍA.
      - Verificado con jsdom (`e2e-mapa.js`, 17 comprobaciones por certificación): recuento
        de objetivos y secciones, umbrales de color con historiales sintéticos (100 %, 60 %,
        0 %), los **86 y 55 atajos** del mapa abriendo su sección exacta, y «Practicar»
        trayendo todas las preguntas de la sección. Chromium sin errores de consola.
- [x] **8.4 · Reintentar el quiz in situ e historial de intentos** (2026-09-21).
      - **Botón «↻ Repetir quiz»** sobre las preguntas y también en el resultado: vuelve a
        montar el quiz en blanco sin salir del capítulo ni recargar (antes había que ir a
        la rejilla y volver a entrar).
      - **Conmutador «barajar preguntas y respuestas»** por quiz, reutilizando el
        `prepararPreguntas()` del examen —al que se le añadió un parámetro explícito— que
        remapea la opción correcta al barajar.
      - **Historial de intentos** en `estado.quizIntentos[cap] = [{f, n, t}]`, los **10 más
        recientes**, el último primero. Se pinta como una tira de pastillas con nota y
        fecha, coloreadas según superen el umbral del 80 %, con cabecera «N intentos ·
        mejor X/Y». La tarjeta de la rejilla pasa de «último: 3/5» a «✓ superado · 3
        intentos» o «2 intentos · mejor 3/5».
      - El mensaje de suspenso deja de decir «reábrelo para reintentar» y ahora indica
        cuántos aciertos faltan y que lo fallado ya está en la cola de repaso (8.2).
      - Decisión: un capítulo ya superado **no deja de estarlo** por un intento posterior
        peor; «superado» es un hito alcanzado y el historial muestra la evolución real.
      - Verificado con jsdom (`e2e-quiz.js`, 21 comprobaciones por certificación): registro
        del intento, umbral, repetición limpiando el resultado pero conservando el
        historial, barajado que cambia el orden y sigue corrigiendo bien, recorte a 10
        intentos, persistencia entre sesiones y borrado al reiniciar. Chromium en
        claro/oscuro a 1100 y 390 px sin errores.

> **Fase 8 completa.** El progreso guardado pasa de `{capsOk, quizNotas, semanas, examen,
> examenes}` a incluir `preguntas` (historial por pregunta) y `quizIntentos` (historial por
> capítulo). Todo se exporta, importa y reinicia con el resto del progreso.

- [x] **Arreglo · «Reiniciar progreso» quedaba descolgado en la barra** (2026-09-21).
      El `.wrap` limita la barra a 960 px y los botones sumaban 950 px en Foundation y
      1086 px en CTAL-TAE (que tiene la pestaña extra «Caso de estudio»); con
      `margin-left:auto`, al desbordar el botón caía solo a una segunda fila. Se ha
      **sacado de la navegación** a la tarjeta «Tu progreso» del plan de estudio, junto a
      exportar e importar, que es su sitio natural (gestión del progreso, no navegación) y
      además lo aleja de las pestañas por ser destructivo. De paso se acortaron las
      etiquetas («Plan de estudio» → «Plan», «Temario y quizzes» → «Temario», «Recursos y
      consejos» → «Recursos»), de modo que la barra cabe en **una sola fila hasta 900 px**
      en ambas certificaciones incluso con la pestaña nueva «Repaso» de la fase 8.2.

### Fase 9 — Modos de práctica ✅
- [x] **9.1 · Examen adaptativo** (2026-09-21). Tarjeta propia en el selector de examen:
      mismo formato que el real (40 preguntas, mismo tiempo y corte) pero **sin** la
      distribución oficial por capítulo.
      - Peso por pregunta según el historial de 8.2: pendiente 100, frágil 60, sin
        practicar 40, en repaso 15, dominada 5, más un extra por número de fallos y por
        días sin tocarla.
      - **Muestreo ponderado sin reemplazo**, no «las N peores»: favorece lo flojo pero
        dos adaptativos seguidos no son idénticos y siempre entra material de repaso.
      - Antes de empezar, la tarjeta anuncia qué priorizaría (secciones con más fallos);
        y el resultado explica la composición real, para que no sea una caja negra.
      - El resultado se guarda como `examenes['adaptativo']`, sin pisar el de los sets.
- [x] **9.2 · Marcar preguntas durante el examen** (2026-09-21). Botón «⚑ Marcar para
      revisar» en la cabecera de cada pregunta, con `aria-pressed`; esquina ámbar en el
      mapa numérico; **leyenda** bajo el mapa con respondidas / sin responder / marcadas;
      botón **«⚑ Siguiente pendiente»** que salta a la próxima marcada o sin responder; el
      aviso al corregir ahora junta ambas cosas («tienes N sin responder y M marcadas»); y
      en la revisión, las marcadas salen señaladas con ⚑ y el resultado resume cuántas
      marcaste y cuántas acertaste.
- [x] **9.3 · Flashcards del glosario** (2026-09-21). Segunda vista dentro de «Glosario»
      («Lista buscable» / «Flashcards»), sin tocar la barra de navegación.
      - **Tres sentidos** de tarjeta: español → inglés, inglés → español y definición →
        término. La respuesta empieza oculta: primero se intenta recordar, luego se voltea
        y solo entonces aparece «✓ Me la sé» / «✗ No me la sé».
      - Historial en `estado.glosario[término]` con la **misma clasificación que el repaso**
        (se extrajo `clasificaRegistro()` para que preguntas y términos la compartan):
        pendiente · frágil · en repaso · dominada · sin ver, con sus recuentos.
      - Dos barajas: todas, o solo las que fallas. Al terminar, resumen de aciertos.
- [x] Suite ampliada con `examen.test.js` (20 comprobaciones, incluida la **estadística**
      de que la sección floja sale sobrerrepresentada en 10 generaciones seguidas) y
      `glosario.test.js` (25). **Total: 317 comprobaciones en 14 suites.** Además se
      silenciaron los avisos «Not implemented» de jsdom (navegación y descarga) sin tapar
      los errores reales.

### Fase 10 — Navegación y uso
- [ ] **10.1 · Enrutado por URL.** `#temario/4/4.2`, `#simulacro`, etc.: enlaces que se
      pueden guardar y compartir, botón atrás del navegador funcional y recarga que
      mantiene el punto. Hoy no hay ningún uso de `location.hash` ni de `history`.
- [ ] **10.2 · Búsqueda global en el temario.** Como la del glosario pero sobre las 48
      secciones, con resaltado y enlace al punto exacto.
- [ ] **10.3 · Continuar donde lo dejaste.** Recordar la última sección vista y ofrecerla
      en la cabecera al volver.
- [ ] **10.4 · Glosario enlazado desde el temario.** Marcar los términos del glosario en el
      texto de los capítulos con su definición al pasar el ratón o al pulsar.

### Fase 11 — Plataforma
- [ ] **11.1 · PWA.** `manifest.webmanifest` + service worker con precacheo de los datos:
      instalable en el móvil y offline real. Encaja con la decisión de «sin backend»; hay que
      mantener el funcionamiento por `file://` (el SW solo actúa bajo `http(s)`).
- [ ] **11.2 · Estadísticas de progreso.** Histórico de notas con fecha, tiempo por pregunta
      en los exámenes y gráfica de evolución (SVG en línea, sin librerías).

### Fase 12 — Calidad
- [x] **12.1 · Suite de validación en el repo** (2026-09-21, *adelantada*: las
      comprobaciones de las fases 7 y 8 se escribían al vuelo y se perdían).
      - `npm test` → `test/ejecutar.js`. **227 comprobaciones en 10 suites, ~5 s.** Única
        dependencia: jsdom, y solo de desarrollo (`devDependencies`); la web sigue sin
        build ni dependencias. `node_modules/` va a `.gitignore`.
      - Filtros: `node test/ejecutar.js datos mapa`, `--cert=foundation`, y
        `TEST_DETALLE=0` para ver solo lo que falla.
      - Módulos: **datos** (integridad de `datos.js`, sin DOM), **navegacion**,
        **repaso**, **mapa** y **quiz** (recorridos completos en jsdom). `test/ayuda.js`
        centraliza el arranque de la app y el mini-arnés de aserciones.
      - `datos.test.js` comprueba: numeración de capítulos y secciones; que el número de
        sección concuerde con su capítulo; objetivos de aprendizaje con id único, formato
        `FL-/TAE-x.x.x`, nivel K1–K4, enunciado y pertenencia a su sección; preguntas con
        id único, `c` dentro del rango de `op`, ≥3 opciones sin repetir, enunciado y
        justificación, nivel k1–k4 y `sec` existente en su capítulo; **distribución oficial
        por capítulo de cada set** (declarada ahora en `META.examen.distribucion`); HTML del
        temario con etiquetas balanceadas; `rel="noopener"` en los enlaces externos; y que
        el plan de estudio enlace a secciones reales, **sin dos semanas al mismo destino**
        y cubriendo las 22/26 secciones. También ejercicios, caso de estudio y glosario.
      - **Verificado por mutación**: se rompieron a propósito 11 cosas (respuesta correcta
        fuera de rango, `sec` inexistente, id duplicado, distribución alterada, HTML sin
        cerrar, dos semanas al mismo destino, nivel K inválido, el índice del capítulo sin
        navegar, el quiz sin registrar historial, repetir sin limpiar el resultado y el
        mapa sin colorear) y **la suite detectó las 11**.
- [ ] **12.2 · Accesibilidad.** `role="tab"`/`aria-selected` en la navegación, mover el foco
      al cambiar de sección, `aria-live` en el resultado del quiz y del examen, enlace para
      saltar al contenido y repaso de contraste en ambos temas.

### Fase 13 — Contenido
- [ ] **13.1 · Caso de estudio para Foundation.** Equivalente a «Aurora» de CTAL-TAE,
      hilado por los 6 capítulos y enlazado a sus secciones.
- [ ] **13.2 · Sample Exams C y D en español.** Traducir y añadir como sets adicionales
      (decisión pendiente desde la Fase 3; mantener el criterio de no reproducir material
      con copyright de forma verbatim).
- [ ] **13.3 · Más ejercicios K3 en Foundation.** Hoy son 8 y se concentran en el cap. 4;
      ampliar a los capítulos 1, 2, 3 y 6.

## 6. Decisiones tomadas

- **Stack:** ✅ vanilla JS sin build (scripts clásicos, `localStorage`, `file://`).
- **Idioma:** ✅ **todo en español de España** (con ñ y acentos). Los Sample Exams
  C/D en inglés se traducirán al español de España y se incluirán (Fase 3).

## 7. Cómo retomar

1. Lee este `PLAN.md` y marca dónde te quedaste en la sección 5.
2. Ejecuta `npm install && npm test` para comprobar que todo sigue en pie
   (317 comprobaciones, ~6 s). La web en sí no necesita nada: se abre con
   `file://` o con cualquier servidor estático.
3. El contenido de origen está en [docs/md/](docs/md/).
4. El prototipo de referencia es [ctal-tae-v2-estudio.html](ctal-tae-v2-estudio.html).
