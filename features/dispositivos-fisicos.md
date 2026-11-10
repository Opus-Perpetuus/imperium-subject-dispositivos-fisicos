# Dispositivos físicos

Quien usa la app ve la lista de dispositivos físicos registrados (nombre,
hostname, modelo, serie, sistema operativo, última conexión) en la página
`physical-device`. Queda probado que la lista responde y muestra el registro
semilla de la app.

## Sub-features

La app hace la acción de `listar`. Escribe: no.

- `listar` deja un resultado observable: `GET /physical-device` responde 200
  y trae la fila con `ref: "seed-dispositivos-fisicos"`.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-dispositivos-fisicos`; no
  declara `dependsOn`.
- `src/modules/physical-device/physical-device.routes.ts` — `define_crud` de
  `physical-device`: `GET/POST /physical-device`,
  `GET/PATCH/DELETE /physical-device/:id`.
- `src/seed.ts` — `seed_demo` inserta una fila con
  `ref: "seed-dispositivos-fisicos"` si la tabla está vacía.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-dispositivos-fisicos.listar` | `GET /physical-device` | rol con `subject.dispositivos-fisicos.physical-device.read` | pedir la lista | HTTP 200 con la fila `ref: "seed-dispositivos-fisicos"` | no | `arnes listar` |

## How to get to it (user POV)

- Menú `Dispositivos físicos` → `Dispositivos físicos` (página
  `dispositivos-fisicos.physical-device`, ruta `physical-device`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-dispositivos-fisicos`, la receta sale
  `omitida`.
- Si falta la fila semilla `seed-dispositivos-fisicos`, la receta sale
  `omitida`.

- **Abrir.** `GET /physical-device` con status 200 y la fila semilla en la
  respuesta.
- **Proof.** `evidence/dispositivos-fisicos/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- No hay base QA nombrada: ninguna receta muta.
- `omitida` no cuenta como probada.
