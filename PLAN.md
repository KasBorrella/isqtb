# Plan de acción — Plataforma de estudio ISTQB

> Documento vivo. Se actualiza en cada iteración. Marca el estado de cada tarea
> con `[ ]` / `[x]`. Última actualización: 2026-06-11.

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
**Modelo de capítulo:** `{ n:1, titulo:"…", html:"…teoría…", quiz:[ …preguntas… ] }`

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
- [ ] **Etiquetado por objetivo de aprendizaje (TAE-x.x.x) y nivel K** del contenido,
      para visualizar cobertura y huecos.

## 6. Decisiones tomadas

- **Stack:** ✅ vanilla JS sin build (scripts clásicos, `localStorage`, `file://`).
- **Idioma:** ✅ **todo en español de España** (con ñ y acentos). Los Sample Exams
  C/D en inglés se traducirán al español de España y se incluirán (Fase 3).

## 7. Cómo retomar

1. Lee este `PLAN.md` y marca dónde te quedaste en la sección 5.
2. El contenido de origen está en [docs/md/](docs/md/).
3. El prototipo de referencia es [ctal-tae-v2-estudio.html](ctal-tae-v2-estudio.html).
