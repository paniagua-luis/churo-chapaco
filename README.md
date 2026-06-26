# Sprint Planning – Churo Chapaco

**Proyecto:** Churo Chapaco (Plataforma de Streaming)
**Sprint:** Sprint 1
**Asignatura:** Sistemas de Información II
**Docente:** Ing. Nelson Huanca Victoria

---

## 1. Objetivo del Sprint

Construir la base funcional de la plataforma: permitir que un usuario se registre, inicie sesión de forma segura, y al entrar visualice un catálogo de contenido organizado y atractivo, consumido en tiempo real desde la API de TMDB.


---

## 2. Equipo y Roles

| Nombre | Rol |
|---|---|
| Cardozo Artunduaga Arnaldo Manuel | Líder técnico |
| Yurquina Mendoza Eiber Fabian | Desarrollador Frontend |
| Paniagua Barrios Luis Manuel | Desarrollador Backend |
| Pimentel Erazo Roberto Niver | Control de Calidad / Documentación |

---

## 3. Capacidad del Sprint

| Historia | Estimación | Prioridad |
|---|---|---|
| HU-01 | 5 puntos | Alta |
| HU-02 | 5 puntos | Alta |
| HU-03 | 8 puntos | Alta |
| HU-04 | 8 puntos | Alta |
| **Total** | **26 puntos** | — |

---

## 4. Historias seleccionadas y asignación

### HU-01: Registro de nuevos usuarios
**Asignado a:** Paniagua Barrios Luis Manuel (Backend)
**Por qué:** Esta historia depende casi por completo de la configuración e integración con Firebase Authentication (lógica de backend/servicios), encaja con el rol de desarrollo backend.

**Tareas técnicas:**
- Configurar el proyecto de Firebase y habilitar Authentication (correo/contraseña).
- Crear el formulario de registro (correo, contraseña, confirmación).
- Implementar validaciones: formato de correo, longitud mínima de contraseña (6 caracteres).
- Conectar el formulario con Firebase Auth (`createUserWithEmailAndPassword`).
- Manejar y mostrar errores (correo ya registrado, datos inválidos).
- Redirigir al login tras registro exitoso.

---

### HU-02: Inicio y cierre de sesión
**Asignado a:** Cardozo Artunduaga Arnaldo Manuel (Líder técnico)
**Por qué:** Esta historia define la arquitectura de autenticación global (Context API, rutas protegidas) que el resto del equipo va a depender — corresponde naturalmente a quien lidera las decisiones técnicas del proyecto.

**Tareas técnicas:**
- Implementar el formulario de login conectado a Firebase Auth.
- Crear el Context de autenticación (estado global de usuario/sesión).
- Implementar persistencia de sesión (que no se pierda al recargar).
- Configurar rutas protegidas con React Router (bloquear acceso sin sesión).
- Implementar botón y lógica de "Cerrar sesión".
- Validar que no se pueda acceder al catálogo escribiendo la URL directamente sin sesión activa.

---

### HU-03: Visualización de página principal y contenido destacado
**Asignado a:** Yurquina Mendoza Eiber Fabian (Frontend)
**Por qué:** Es una historia centrada casi en su totalidad en la interfaz visual (hero banner, imágenes, botones) — el corazón del trabajo de un desarrollador frontend.

**Tareas técnicas:**
- Conectar con la API de TMDB para obtener contenido destacado/popular.
- Construir el componente de "Banner" o portada (imagen de fondo, título, descripción).
- Implementar botones de "Reproducir" y "Agregar a Mi Lista" (UI, sin lógica final aún).
- Asegurar carga optimizada de imágenes.
- Adaptar el diseño del banner a distintos tamaños de pantalla.

---

### HU-04: Navegación por categorías y filas de contenido
**Asignado a:** Pimentel Erazo Roberto Niver (Control de Calidad / Documentación)
**Por qué:** Al ser una historia con criterios de aceptación muy concretos y verificables (categorías específicas, scroll horizontal, manejo de error de conexión), es ideal para quien además de programarla, definirá los casos de prueba y documentará su comportamiento esperado.

**Tareas técnicas:**
- Implementar las filas de categorías: Tendencias, Más valoradas, Originales, Acción, Comedia, Terror, Romance, Documentales.
- Consumir los endpoints correspondientes de TMDB (`language=es-ES`).
- Implementar el desplazamiento horizontal en cada fila.
- Implementar el mensaje de error si no hay conexión.
- **Documentar** los casos de prueba de esta historia (carga correcta, fila vacía, sin conexión).
- Redactar la guía de uso de esta sección para el README del proyecto.

---

## 5. Definition of Done (recordatorio, ya definido en Sprint 0)

Cada historia se considera terminada cuando:
- El código fue revisado por otro miembro del equipo.
- Funciona sin errores en el entorno de desarrollo.
- Cumple todos los criterios de aceptación definidos.
- El diseño es responsivo (móvil, tablet, escritorio).
- Maneja correctamente errores y estados de carga.
- Está documentada e integrada en el repositorio sin conflictos.

---

## 6. Riesgos / Dependencias identificadas

- HU-03 y HU-04 dependen de que la integración con la API de TMDB esté funcionando desde el inicio del sprint — se recomienda validarla en el primer día.
- HU-02 depende de que HU-01 (registro) ya tenga usuarios creados en Firebase para poder probar el login.
- Se recomienda una reunión corta a mitad de sprint entre Cardozo (login) y Paniagua (registro), ya que ambas historias comparten la integración con Firebase Auth.
