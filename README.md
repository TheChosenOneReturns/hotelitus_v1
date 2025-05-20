# Áridos Fondini - Gestión de Clientes y Pedidos

Esta es una aplicación web interactiva diseñada para la gestión de clientes y pedidos, ideal para pequeñas y medianas empresas que necesiten un control detallado de su cartera y transacciones. La aplicación cuenta con autenticación de usuarios, operaciones CRUD completas para clientes y pedidos, una calculadora de presupuestos integrada, y la capacidad de enviar confirmaciones de pedido por correo electrónico.

## Tabla de Contenidos
1.  [Visión General del Proyecto](#1-visión-general-del-proyecto)
    * [Propósito y Alcance Detallado](#propósito-y-alcance)
    * [Público Objetivo](#público-objetivo)
    * [Tecnologías Clave](#tecnologías-clave)
2.  [Estructura del Archivo `index.html`](#2-estructura-del-archivo-indexhtml)
    * [Encabezado (`<head>`)](#encabezado-head)
    * [Cuerpo (`<body>`)](#cuerpo-body)
    * [Scripts Externos](#scripts-externos)
3.  [Funcionalidades del Javascript (`app.js`)](#3-funcionalidades-del-javascript-appjs)
    * [Módulo de Inicialización](#módulo-de-inicialización)
    * [Módulo de Autenticación (Firebase Authentication)](#módulo-de-autenticación-firebase-authentication)
    * [Módulo de Gestión de Clientes (Firebase Realtime Database)](#módulo-de-gestión-de-clientes-firebase-realtime-database)
    * [Módulo de Gestión de Pedidos (Firebase Realtime Database)](#módulo-de-gestión-de-pedidos-firebase-realtime-database)
    * [Módulo de Navegación y UI](#módulo-de-navegación-y-ui)
    * [Módulo de Calculadora](#módulo-de-calculadora)
    * [Módulo de Cambio de Tema](#módulo-de-cambio-de-tema)
    * [Módulo de Modal y EmailJS](#módulo-de-modal-y-emailjs)
4.  [Manejo de Estilos en CSS (`styles.css`)](#4-manejo-de-estilos-en-css-stylescss)
    * [Filosofía de Diseño y Metodologías](#filosofía-de-diseño-y-metodologías)
    * [Variables CSS para Tematización](#variables-css-para-tematización)
    * [Reset y Estilos Base](#reset-y-estilos-base)
    * [Layout Principal](#layout-principal)
    * [Estilización de Componentes](#estilización-de-componentes-con-ejemplos-de-selectores-y-propiedades-clave)
    * [Animaciones y Transiciones](#animaciones-y-transiciones)
    * [Diseño Responsivo (`@media queries`)](#diseño-responsivo-media-queries)
5.  [Dependencias y Librerías Externas](#5-dependencias-y-librerías-externas)
6.  [Flujo de Usuario Típico](#6-flujo-de-usuario-típico-ejemplos)
7.  [Configuración del Proyecto](#7-configuración-del-proyecto)

## 1. Visión General del Proyecto

### Propósito y Alcance
"Áridos Fondini" es una aplicación web interactiva diseñada para centralizar y simplificar la gestión de la información de clientes y los pedidos asociados a ellos. El sistema está orientado a un usuario administrador o gestor que necesita realizar un seguimiento eficiente de su cartera de clientes y el estado de sus transacciones.

**El alcance funcional incluye:**
* **Autenticación Segura de Usuarios**: Permite el acceso restringido a la plataforma mediante un sistema de login y registro.
* **Gestión Integral de Clientes (CRUD)**:
    * **Crear**: Registrar nuevos clientes con su información de contacto y DNI.
    * **Leer**: Visualizar un listado completo de clientes con sus detalles.
    * **Actualizar**: Modificar la información de clientes existentes.
    * **Eliminar**: Dar de baja a clientes del sistema.
* **Gestión Integral de Pedidos (CRUD)**:
    * **Crear**: Registrar nuevos pedidos, asociándolos a un cliente existente mediante su DNI.
    * **Leer**: Visualizar los pedidos de un cliente específico o un listado general de todos los pedidos.
    * **Actualizar**: Modificar detalles de pedidos existentes (producto, cantidad).
    * **Eliminar**: Cancelar o eliminar pedidos del sistema.
* **Calculadora de Presupuestos**: Una herramienta para estimar costos y precios de venta, considerando materiales, transporte, margen de ganancia e IVA.
* **Cambio de Tema Visual**: Ofrece una interfaz personalizable con un tema claro y uno oscuro para adaptarse a las preferencias del usuario y mejorar la accesibilidad.
* **Confirmación de Pedidos por Email**: Facilita la comunicación con el cliente mediante el envío de confirmaciones de pedido por correo electrónico.
* **Interfaz de Usuario Moderna y Responsiva**: Busca ofrecer una experiencia de usuario agradable, con animaciones sutiles y un diseño que se adapta a diferentes tamaños de pantalla.

### Público Objetivo
El público principal son los administradores o empleados de la empresa "Áridos Fondini" encargados de la gestión comercial y logística. Requieren una herramienta intuitiva y eficiente para manejar datos de clientes y pedidos sin necesidad de conocimientos técnicos avanzados.

### Tecnologías Clave
* **HTML5**: Para la estructura semántica del contenido de la aplicación.
* **CSS3**: Para el diseño visual, la tematización y la responsividad. Se utilizan variables CSS para una gestión eficiente de los temas.
* **JavaScript (ES6+)**: Para toda la lógica de la aplicación, interactividad del DOM, manejo de eventos, comunicación con Firebase y otras librerías.
* **Firebase (Google)**: Utilizado como Backend as a Service (BaaS).
    * **Firebase Authentication**: Para la gestión de usuarios (registro, inicio de sesión, cierre de sesión).
    * **Firebase Realtime Database**: Para el almacenamiento y sincronización en tiempo real de los datos de clientes, usuarios y pedidos.
* **Particles.js**: Librería JavaScript para crear animaciones de partículas en el fondo, mejorando la estética visual.
* **Animate.css**: Librería CSS que proporciona animaciones predefinidas para mejorar la retroalimentación visual y las transiciones entre vistas.
* **EmailJS**: Servicio para enviar correos electrónicos directamente desde el lado del cliente, sin necesidad de un backend de servidor propio para esta tarea.
* **Google Fonts (Poppins)**: Para una tipografía moderna y legible en toda la aplicación.

## 2. Estructura del Archivo `index.html`

El archivo `index.html` es el esqueleto de la aplicación, definiendo todos los elementos visibles e invisibles que componen la interfaz y la estructura base.

### Encabezado (`<head>`)
Contiene metadatos esenciales y enlaces a recursos externos:
* **`<meta charset="UTF-8">`**: Define la codificación de caracteres como UTF-8.
* **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Configura el viewport para un diseño responsivo.
* **`<title>Áridos Fondini - Gestión de Clientes y Pedidos</title>`**: Título del navegador.
* **`<link rel="icon" href="data:,">`**: Favicon placeholder.
* **`<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">`**: Fuente Poppins.
* **`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">`**: Animate.css.
* **`<link rel="stylesheet" href="styles.css">`**: Hoja de estilos principal.
* **Atributo `data-theme="dark"` en `<html>`**: Establece el tema oscuro por defecto.

### Cuerpo (`<body>`)
Contiene toda la estructura visible de la aplicación.

* **`<div class="particles-container" id="particles-js"></div>`**: Canvas para `Particles.js`.
* **Sección `<header>`**: Título principal, botón de cambio de tema e información del usuario (dinámica).
* **Secciones Principales (`<section>`)**:
    * **`<section id="dashboard" class="hidden">`**: Panel de control principal post-login. Incluye botones de navegación, y contenedores para formularios (`#registroContainer`), lista de clientes (`#clientesLista`) y lista de pedidos (`#pedidosLista`).
    * **`<section id="login" class="animate__animated animate__fadeIn">`**: Vista de inicio de sesión con imagen y formulario.
    * **`<section id="registro" class="hidden animate__animated animate__fadeIn">`**: Vista de registro de nuevos usuarios, similar al login.
    * **`<section id="calculadora" class="hidden animate__animated animate__fadeIn">`**: Vista de la calculadora de presupuestos con campos de entrada y visualización de resultados.
    * **`<div id="modalOverlay" class="modal-overlay hidden">`**: Modal para confirmar pedidos por email, con un formulario interno.

### Scripts Externos
Ubicados al final del `<body>`:
* **Firebase SDK (compat versions)**: `firebase-app-compat.js`, `firebase-auth-compat.js`, `firebase-database-compat.js`.
* **Particles.js (`particles.min.js`)**.
* **EmailJS (`email.min.js`)**: Con inicialización inline `emailjs.init('HziRIGf46_g54AL-a')`. (Nota: Esta User ID de EmailJS es pública en el código fuente).
* **Script Principal (`app.js`)**: Lógica personalizada de la aplicación.
* **Script inline para `Particles.js`**: Configuración específica de las partículas.

## 3. Funcionalidades del Javascript (`app.js`) 

El archivo `app.js` es el cerebro de la aplicación.

### Módulo de Inicialización
* Se ejecuta con el evento `DOMContentLoaded`.
* **`setupThemeToggle()`**: Gestiona el cambio de tema (claro/oscuro) y guarda la preferencia en `localStorage`.
* **`firebaseConfig`**: Objeto con las credenciales de Firebase. (Nota: Las credenciales de Firebase, incluida la `apiKey`, son públicas en el código fuente. Se deben asegurar mediante Firebase Rules).
    ```javascript
    const firebaseConfig = {
      apiKey: "TU-API"
      authDomain: "bd-fondini-aridos.firebaseapp.com",
      databaseURL: "[https://bd-fondini-aridos-default-rtdb.firebaseio.com](https://bd-fondini-aridos-default-rtdb.firebaseio.com)",
      projectId: "bd-fondini-aridos",
      storageBucket: "bd-fondini-aridos.firebasestorage.app",
      messagingSenderId: "1038135881192",
      appId: "1:1038135881192:web:215908840951025da9485d",
    };
    ```
* Inicialización de `firebaseApp`, `auth` y `db`.
* Llamada a `initApp(auth, db)` que contiene la lógica principal.
* **Objeto `DOM`**: Centraliza referencias a elementos del DOM para fácil acceso.
* **Funciones Auxiliares**: `showSection()`, `hideSection()`, `resetForms()`.

### Módulo de Autenticación (Firebase Authentication)
* **`auth.onAuthStateChanged((user) => { ... })`**: Observador principal del estado de autenticación.
    * **Usuario autenticado**: Muestra el dashboard, oculta login/registro, carga datos del usuario desde Realtime Database (`users/{uid}`), muestra la información del usuario en el header (`#userInfo`), y carga la lista de clientes.
    * **Usuario no autenticado**: Muestra la sección de login, oculta dashboard/registro/calculadora, y elimina `#userInfo`.
* **Registro (`DOM.forms.registro`)**: Usa `auth.createUserWithEmailAndPassword()`. Guarda nombre y email en `users/{uid}` en Realtime Database.
* **Login (`DOM.forms.login`)**: Usa `auth.signInWithEmailAndPassword()`.
* **Logout (`DOM.buttons.logout`)**: Usa `auth.signOut()`.

### Módulo de Gestión de Clientes (Firebase Realtime Database)
Permite operaciones CRUD para clientes. Los datos se almacenan bajo la ruta `clientes/{clienteId}`.
* **Estructura de Datos de Cliente (Ejemplo)**:
    ```json
    {
      "nombre": "Juan Perez",
      "email": "juan.perez@example.com",
      "direccion": "Calle Falsa 123",
      "telefono": "555-1234",
      "dni": "12345678",
      "fechaRegistro": "2024-05-18T10:00:00.000Z"
    }
    ```
* **Crear/Actualizar (`DOM.forms.cliente`)**:
    * Validación de DNI (regex `^[0-9]{7,8}$`) y email.
    * Modo Edición: Usa `db.ref().update()`. El DNI se deshabilita.
    * Modo Creación: Verifica DNI duplicados, luego usa `db.ref().push()`.
* **Leer (`cargarClientes()`)**: Obtiene datos de `clientes`, limpia y actualiza la tabla `#listaClientes` con botones de acción (`Ver Pedidos`, `Editar`, `Eliminar`).
* **Editar (`window.editarCliente(id)`)**: Rellena el formulario de cliente, deshabilita DNI, y establece `data-edit-id`.
* **Eliminar (`window.eliminarCliente(id)`)**: Pide confirmación, elimina el cliente y sus pedidos asociados (`pedidos/{clienteId}`).

### Módulo de Gestión de Pedidos (Firebase Realtime Database)
Permite operaciones CRUD para pedidos, anidados bajo `pedidos/{clienteId}/{pedidoId}`.
* **Estructura de Datos de Pedido (Ejemplo)**:
    ```json
    {
      "producto": "Arena Fina",
      "estado": "5 m3", // 'estado' se usa para 'cantidad'
      "fecha": "2024-05-18T11:30:00.000Z",
      "clienteDNI": "12345678",
      "clienteNombre": "Juan Perez",
      "clienteEmail": "juan.perez@example.com"
    }
    ```
* **Crear/Actualizar (`DOM.forms.pedido`)**:
    * Valida DNI del cliente y lo busca en la DB.
    * Modo Edición: Actualiza el pedido existente.
    * Modo Creación: Crea un nuevo pedido.
* **Leer Pedidos de un Cliente (`window.cargarPedidosCliente(clienteId)`)**: Muestra los pedidos para un cliente específico.
* **Leer Todos los Pedidos (`cargarPedidos()`)**: Muestra una tabla general de todos los pedidos, incluyendo información del cliente.
* **Editar (`window.editarPedido(clienteId, pedidoId)`)**: Rellena el formulario de pedido para edición.
* **Eliminar (`window.eliminarPedido(clienteId, pedidoId)`)**: Elimina un pedido específico.

### Módulo de Navegación y UI
* Gestiona la visibilidad de secciones (`showSection()`, `hideSection()`) para simular una SPA.
* Maneja clics en botones de navegación y enlaces entre formularios de login/registro.

### Módulo de Calculadora
* **`window.calcularPresupuesto()`**:
    * Toma costos de materiales, transporte y margen de ganancia.
    * Calcula subtotal, ganancia, total sin IVA (21% IVA asumido) y total con IVA.
    * Muestra los resultados y aplica una animación.

### Módulo de Cambio de Tema
* Gestionado por `setupThemeToggle()`, alterna el atributo `data-theme` en `<html>` y usa `localStorage`.
* La función `updateParticlesColor(newTheme)` es llamada pero no está definida en el `app.js` provisto; su propósito sería sincronizar el color de las partículas con el tema.

### Módulo de Modal y EmailJS
* **`window.mostrarFormularioEmail(email, producto)`**: Muestra el modal `#modalOverlay` y precarga el email del cliente.
* **`window.cerrarModal()`**: Oculta el modal.
* **Envío de Email (Formulario `#form` en modal)**:
    * Usa `emailjs.sendForm()` con `serviceID` ('default_service') y `templateID` ('template_k55fuhb'). Estos IDs deben estar configurados en la cuenta de EmailJS.
    * Maneja el éxito y error del envío.
* El modal se puede cerrar con clic externo o la tecla "Escape".

## 4. Manejo de Estilos en CSS (`styles.css`) 

Define la apariencia visual con un enfoque en la tematización y el diseño responsivo.

### Filosofía de Diseño y Metodologías
Estilo modular basado en componentes. Uso intensivo de variables CSS para la tematización.

### Variables CSS para Tematización
Definidas en `:root` (oscuro por defecto) y sobreescritas en `html[data-theme="light"]` (claro).
* Controlan colores de fondo, texto, acentos, bordes, etc. (`--bg-gradient-start`, `--text-color`, `--accent-color`, etc.).
* Transiciones suaves entre temas.

### Reset y Estilos Base
* Reset básico con `* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; }`.
* Estilos para `body` (fondo degradado, flexbox para centrar).

### Layout Principal
Basado en `flexbox`. Secciones principales centradas con `max-width`.

### Estilización de Componentes (con ejemplos de selectores y propiedades clave)
* **Header y Título (`header h1`)**: Estilo prominente con línea animada.
* **Botones (`button`, `#logoutBtn`)**: Estilos detallados, efectos hover, colores distintivos.
* **Formularios (`form`, `input`, `.input-group`)**: Fondos semitransparentes, bordes, iconos SVG.
* **Tablas (`table`, `th`, `td`)**: Cabeceras distintivas, filas alternas, hover.
* **Login/Registro (`.login-container`)**: Diseño de dos columnas (imagen + formulario).
* **Información del Usuario (`.user-info`)**: Logo circular con inicial y nombre.
* **Toggle de Tema (`.theme-toggle`)**: Botón circular con iconos SVG sol/luna.
* **Calculadora (`.calculator-container`)**: Diseño moderno con resultados claros.
* **Modal (`.modal-overlay`, `.modal-container`)**: Superposición y contenedor centrado.

### Animaciones y Transiciones
* Uso de **Animate.css** (`animate__fadeInDown`, `animate__pulse`, etc.).
* **Animaciones CSS personalizadas (`@keyframes`)**: `expandWidth` (título), `shine` (botón login), `fadeInRow` (filas de tabla), etc.
* **Propiedad `transition`**: Para suavizar cambios de estado y tema.

### Diseño Responsivo (`@media queries`)
* Puntos de corte: `768px`, `480px`, `360px`.
* Estrategias: `flex-direction: column`, anchos fluidos, reducción de fuentes/espaciados, tablas con scroll horizontal, simplificación de layouts.
* Ajustes específicos para el header y sus elementos en móviles.

## 5. Dependencias y Librerías Externas 

* **Google Fonts (Poppins)**: Tipografía.
* **Animate.css**: Animaciones CSS.
* **Firebase SDK (App, Auth, Database - compat versions)**: Backend como servicio.
* **Particles.js**: Fondo animado de partículas.
* **EmailJS**: Envío de correos electrónicos desde el cliente.

## 6. Flujo de Usuario Típico (Ejemplos)

1.  **Nuevo Usuario**: Registro -> Login -> Uso del Dashboard.
2.  **Usuario Existente**: Login -> Gestión de Clientes/Pedidos -> Logout.
3.  **Uso de la Calculadora**: Desde el Dashboard, acceder y calcular presupuestos.
4.  **Confirmación de un Pedido por Email**: Desde la lista de pedidos, enviar confirmación.

## 7. Configuración del Proyecto

1.  **Clonar el repositorio (si aplica).**
2.  **Configurar Firebase**:
    * Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
    * Habilitar **Firebase Authentication** (con el proveedor Email/Contraseña).
    * Habilitar **Firebase Realtime Database**.
    * Obtener las credenciales de configuración de tu proyecto Firebase (apiKey, authDomain, etc.) y reemplazarlas en el objeto `firebaseConfig` dentro de `app.js`.
    * **Importante**: Configurar las **Reglas de Seguridad** de Firebase Realtime Database para proteger tus datos. Por ejemplo:
        ```json
        {
          "rules": {
            "users": {
              "$uid": {
                ".read": "$uid === auth.uid",
                ".write": "$uid === auth.uid"
              }
            },
            "clientes": {
              ".read": "auth != null",
              "$clienteId": {
                ".write": "auth != null" // Considerar reglas más específicas
              }
            },
            "pedidos": {
              ".read": "auth != null",
              "$clienteId": {
                "$pedidoId": {
                  ".write": "auth != null" // Considerar reglas más específicas
                }
              }
            }
          }
        }
        ```
3.  **Configurar EmailJS**:
    * Crear una cuenta en [EmailJS](https://www.emailjs.com/).
    * Añadir un servicio de email (ej. Gmail).
    * Crear una plantilla de email (el `templateID` usado es `template_k55fuhb`). Asegúrate de que esta plantilla exista en tu cuenta EmailJS o crea una nueva y actualiza el ID en `app.js`.
    * Asegúrate de que el `serviceID` (usado como `default_service`) y el `userID` (usado como `HziRIGf46_g54AL-a`) en `app.js` coincidan con tu configuración de EmailJS.
4.  **Desplegar**: Puedes desplegar esta página estática en servicios como GitHub Pages, Netlify, Vercel, o Firebase Hosting.

---

Desarrollado para la gestión de Áridos Fondini.
Fecha de documentación: 19 de mayo de 2025.
