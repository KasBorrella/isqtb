# Documentación ISTQB (Markdown)

Conversión automática de los PDFs oficiales a texto Markdown para lectura y para
extraer el contenido del temario y de los exámenes. Generado con `pdftotext -layout`.

> El formato Markdown es aproximado: conserva el texto y el orden, pero las tablas
> y la maquetación de columnas del PDF pueden quedar como texto plano. La fuente
> de verdad sigue siendo el PDF original en las carpetas `FOUNDATION/` y
> `CTAL-TAE-AUTOMATION/`.

## CTAL-TAE · Automation Tester (Nivel Avanzado, v2.0)

| Archivo | Origen | Uso |
|---|---|---|
| [CTAL-TAE/programa-estudio.md](CTAL-TAE/programa-estudio.md) | Programa de estudio v00.18 | Temario (8 capítulos) |
| [CTAL-TAE/examen-ejemplo-preguntas.md](CTAL-TAE/examen-ejemplo-preguntas.md) | Examen de ejemplo v01.00 | Banco de preguntas oficial |
| [CTAL-TAE/examen-ejemplo-respuestas.md](CTAL-TAE/examen-ejemplo-respuestas.md) | Respuestas examen de ejemplo | Soluciones + justificación |

**Capítulos del syllabus:** 1 Introducción y objetivos (K2) · 2 Preparación (K4) ·
3 Arquitectura gTAA (K3) · 4 Implementación (K4) · 5 Estrategias de despliegue (K3) ·
6 Reporte y métricas · 7 Verificación de la solución (K3) · 8 Mejora continua (K4).

## FOUNDATION · CTFL (Nivel Básico, v4.0)

| Archivo | Origen | Uso |
|---|---|---|
| [FOUNDATION/programa-estudio.md](FOUNDATION/programa-estudio.md) | Programa de estudio v01.01 | Temario (6 capítulos) |
| [FOUNDATION/examen-modelo-A-preguntas.md](FOUNDATION/examen-modelo-A-preguntas.md) | Examen modelo A (ES) | Banco de preguntas oficial |
| [FOUNDATION/examen-modelo-A-respuestas.md](FOUNDATION/examen-modelo-A-respuestas.md) | Respuestas modelo A (ES) | Soluciones + justificación |
| [FOUNDATION/examen-modelo-B-preguntas.md](FOUNDATION/examen-modelo-B-preguntas.md) | Examen modelo B (ES) | Banco de preguntas oficial |
| [FOUNDATION/sample-exam-C-questions.md](FOUNDATION/sample-exam-C-questions.md) | Sample Exam C (EN) | Banco de preguntas (inglés) |
| [FOUNDATION/sample-exam-C-answers.md](FOUNDATION/sample-exam-C-answers.md) | Sample Exam C answers (EN) | Soluciones (inglés) |
| [FOUNDATION/sample-exam-D-questions.md](FOUNDATION/sample-exam-D-questions.md) | Sample Exam D (EN) | Banco de preguntas (inglés) |
| [FOUNDATION/sample-exam-D-answers.md](FOUNDATION/sample-exam-D-answers.md) | Sample Exam D answers (EN) | Soluciones (inglés) |
| [FOUNDATION/sample-exam-B-answers.md](FOUNDATION/sample-exam-B-answers.md) | Sample Exam B answers (EN) | Soluciones (inglés) |

**Capítulos del syllabus:** 1 Fundamentos del proceso de prueba · 2 Prueba a lo largo
del ciclo de vida · 3 Prueba estática · 4 Análisis y diseño de la prueba ·
5 Gestión de las actividades de prueba · 6 Herramientas de prueba.

## Regenerar

```bash
# requiere poppler (pdftotext)
pdftotext -layout -enc UTF-8 "ruta/al.pdf" "docs/md/.../salida.md"
```
