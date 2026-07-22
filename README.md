# 🚛 TRANS-ALMAX SAC - Sistema Web de Gestión Logística y Cotizaciones

## 📌 Descripción del Proyecto

TRANS-ALMAX SAC es una plataforma web desarrollada para una empresa de transporte y logística orientada a la gestión de servicios de carga, distribución y cotizaciones en línea.

El sistema permite a los clientes conocer los servicios de la empresa, visualizar la cobertura nacional, revisar la flota disponible y solicitar cotizaciones mediante un formulario profesional conectado a un servidor Node.js.

La información registrada es almacenada automáticamente en una base de datos JSON y posteriormente administrada desde un panel administrativo interno.

---

# 🎯 Objetivos del Proyecto

## Objetivo General

Desarrollar una plataforma web moderna y funcional para la gestión de servicios logísticos y cotizaciones de transporte.

## Objetivos Específicos

* Implementar un sitio web corporativo multipágina.
* Permitir el registro de solicitudes de cotización.
* Almacenar información utilizando Node.js y archivos JSON.
* Crear un panel administrativo para la gestión de solicitudes.
* Aplicar tecnologías web modernas y programación del lado del cliente y servidor.

---

# 🛠 Tecnologías Utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript 
* Font Awesome

## Backend

* Node.js
* Módulo HTTP
* Sistema de archivos (FS)

## Almacenamiento

* Archivo JSON como base de datos local.

---

# 📁 Estructura del Proyecto

```text
PF - TRANS - ALMAX - SAC
│
├── servidor.js
├── index.html
├── admin.html
│
├── assets
│   ├── css
│   │   ├── style.css
│   │   ├── responsive.css
│   │   ├── animations.css
│   │   └── variables.css
│   │
│   ├── js
│   │   ├── app.js
│   │   ├── menu.js
│   │   ├── cotizador.js
│   │   └── admin.js
│   │
│   └── images
│
├── pages
│   ├── nosotros.html
│   ├── servicios.html
│   ├── flota.html
│   ├── cobertura.html
│   ├── cotizacion.html
│   └── contacto.html
│
└── database
    └── cotizaciones.json
```

---

# 🌐 Módulos del Sistema

## Página Principal (index.html)

Presenta la información principal de la empresa, incluyendo:

* Presentación corporativa.
* Servicios destacados.
* Cobertura nacional.
* Información de contacto.
* Acceso rápido a cotizaciones.

---

## Nosotros

Describe la misión, visión y valores empresariales de TRANS-ALMAX SAC.

---

## Servicios

Incluye los principales servicios ofrecidos por la empresa:

* Transporte de carga pesada.
* Carga liviana express.
* Distribución empresarial.
* Almacenamiento logístico.
* Transporte nacional.

---

## Flota

Presenta los recursos logísticos disponibles:

* Camiones de carga pesada.
* Camiones medianos.
* Unidades express.
* Equipamiento logístico especializado.

---

## Cobertura

Muestra las operaciones realizadas en:

* Costa.
* Sierra.
* Selva.
* Distribución nacional.

---

## Cotización

Permite a los clientes registrar solicitudes de transporte mediante un formulario profesional.

Información registrada:

* Nombre del cliente.
* Correo electrónico.
* Teléfono.
* Servicios solicitados.
* Origen y destino.
* Fecha requerida.
* Peso aproximado.
* Descripción de la carga.

---

## Contacto

Incluye múltiples canales de comunicación:

* WhatsApp directo.
* Correo electrónico.
* Ubicación.
* Horario de atención.
* Redes sociales.
* Mapa de ubicación.

---

# ⚙ Funcionamiento del Sistema de Cotizaciones

1. El cliente completa el formulario de cotización.
2. JavaScript valida la información ingresada.
3. Los datos son enviados mediante Fetch API al servidor Node.js.
4. El servidor procesa la solicitud.
5. La información se almacena en el archivo:

```text
database/cotizaciones.json
```

6. Se genera automáticamente un código de seguimiento para cada solicitud.

Ejemplo:

```text
COT-00001
COT-00002
COT-00003
```

---

# 📊 Panel Administrativo

El sistema incorpora un panel de administración que permite:

* Visualizar todas las cotizaciones registradas.
* Consultar información del cliente.
* Revisar servicios solicitados.
* Ver rutas de transporte.
* Eliminar solicitudes registradas.
* Obtener estadísticas generales del sistema.

---

# 🔐 Funcionalidades Implementadas

* Diseño responsive.
* Navegación multipágina.
* Validaciones de formularios.
* Almacenamiento en JSON.
* Comunicación Frontend - Backend.
* Panel administrativo.
* Integración con WhatsApp.
* Integración con redes sociales.
* Gestión de múltiples servicios por cliente.

---

# 📈 Resultados Obtenidos

El proyecto logró implementar un sistema web funcional para el sector logístico, integrando tecnologías frontend y backend para automatizar el proceso de solicitud y administración de cotizaciones.

---

# ✅ Conclusiones

* Node.js permitió implementar un servidor ligero y eficiente.
* El uso de JSON facilitó el almacenamiento de información sin necesidad de utilizar un gestor de bases de datos tradicional.
* La integración entre frontend y backend permitió automatizar el registro y administración de cotizaciones.
* El proyecto demuestra la aplicación práctica de tecnologías web modernas orientadas al sector logístico.

---

# 👨‍💻 Autor

Proyecto desarrollado por:

**Liden Acevedo Castro**

Universidad Tecnológica del Perú - UTP

Curso: Programación Web

Año: 2026


## © Derechos Reservados
© 2026 TRANS-ALMAX SAC. Todos los derechos reservados.


## REGISTRO NODE
ctrl+c 
node servidor.js  + nter
http://localhost:5502/cotizaciones

Después guarda:

admin.js
Reinicia Node:
CTRL + C
node servidor.js
Entra:
http://localhost:5502/admin.html
Prueba 🗑️










Sí profe 🚛🔥, hoy avanzaste bastante en el proyecto de **TRANS-ALMAX SAC**:

* ✅ Sitio multipágina completo.
* ✅ Diseño modernizado de servicios, flota, cobertura, cotización y contacto.
* ✅ Formulario profesional de cotizaciones.
* ✅ Integración con Node.js.
* ✅ Guardado en `cotizaciones.json`.
* ✅ Panel administrador.
* ✅ Eliminación de registros.
* ✅ Soporte para múltiples servicios.
* ✅ Integración con WhatsApp y redes sociales.
* ✅ README técnico y guía para exposición.

Para retomar mañana sin perder contexto, la mejor clave sería simplemente:

## 🚛 **"PROFE TRANS ALMAX CONTINUAMOS"**

Si quieres ser más específico según el punto donde continúes, puedes usar algo como:

* **"PROFE TRANS ALMAX PANEL ADMIN"** → para seguir con el dashboard.
* **"PROFE TRANS ALMAX EXPOSICIÓN"** → para preparar diapositivas y discurso.
* **"PROFE TRANS ALMAX MEJORAS"** → para agregar nuevas funcionalidades.
* **"PROFE TRANS ALMAX DESPLIEGUE"** → para publicarlo en internet.
* **"PROFE TRANS ALMAX BASE DE DATOS SQL"** → para migrar de JSON a MySQL o SQL Server.

Los siguientes pasos naturales del proyecto serían:

1. 🔐 Login de administrador.
2. 📊 Estados de cotización (Pendiente, En proceso, Finalizada).
3. 🔎 Búsqueda y filtros en el panel.
4. 📄 Exportar a PDF o Excel.
5. ☁️ Publicación del proyecto en línea.

Descansa bien profe. Mañana retomamos desde donde lo dejaste y seguimos llevando TRANS-ALMAX SAC a nivel empresarial. 🚛💻🔥
