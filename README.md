# Plataforma Educativa de IA - De No-Code a Full-Stack con Django

Este repositorio contiene la documentación y el plan arquitectónico de una plataforma educativa web enfocada en Inteligencia Artificial. El proyecto nació como una entrega académica para explorar el uso de herramientas "No-Code" asistidas por Inteligencia Artificial, sirviendo como base y prototipo de alta fidelidad para su posterior desarrollo definitivo en el stack **Django/Python Full-Stack**.

---

## 🚀 Flujo de Trabajo y Metodología

El objetivo principal de este proyecto fue diseñar, prototipar e implementar una plataforma web educativa que abarque conceptos de Inteligencia Artificial, Redes Neuronales y autores fundamentales. 

Para lograrlo, se siguió un enfoque ágil y moderno estructurado en las siguientes fases:

* **Análisis de Requisitos:** Basado en la consigna académica, se identificó la necesidad de crear un sitio con tres áreas clave: Landing Page pública, pantalla de Login segura y un Dashboard educativo privado.
* **Ingeniería de Prompts (ChatGPT):** Se redactó un prompt sumamente descriptivo y técnico para definir la estética, la estructura de navegación, el contenido teórico requerido y los detalles de experiencia de usuario (UX).
* **Prototipado Rápido (v0.dev):** El prompt diseñado se introdujo en **v0 de Vercel**, una herramienta de IA no-code/low-code que generó una interfaz interactiva moderna, con transiciones suaves y componentes completamente adaptables (Responsive).
* **El Siguiente Paso (Migración a Django):** La estructura visual y modular económica obtenida en v0 sirve como base para recrear el proyecto de forma nativa en **Django/Python**, separando el código en plantillas dinámicas e integrando la lógica del backend.

---

## 🛠️ El Prompt Arquitectónico Utilizado

A continuación, se presenta el prompt exacto que se diseñó e introdujo en la IA para obtener el prototipo visual de la plataforma:

```text
Create a modern, professional educational website about Artificial Intelligence.

GENERAL STYLE:
- Primary color: green (modern, slightly neon or tech green)
- Secondary colors: dark background (black or dark gray), with accents in cyan or soft blue
- Clean, minimal, futuristic UI
- Smooth animations and hover effects
- Responsive design
- Use high-impact realistic AI/robot imagery

STRUCTURE:

1) LANDING PAGE (public)
- Hero section with a large AI/robot image
- Title: "Explorando la Inteligencia Artificial"
- Subtitle: short introduction explaining what AI is and why it matters
- Call-to-action button: "Iniciar sesión"

- Section: "¿Qué es la Inteligencia Artificial?"
  → Short simplified explanation (not too long)

- Section: "Autores destacados"
  Include at least:
  - Alan Turing
  - John McCarthy
  - Stuart Russell
  Show them as cards with image + short description

- Navigation bar (fixed at top):
  - Inicio
  - IA
  - Autores
  - Login

- Footer:
  - Student name placeholder
  - Year
  - Course info

---

2) LOGIN / REGISTER PAGE
- Centered card design
- Fields:
  - Email
  - Password
- Checkbox: "Recordarme"
- Buttons:
  - "Iniciar sesión"
  - "Registrarse"
- Clean validation UI
- Option to switch between login and register

---

3) DASHBOARD (after login)
- Show user info at top (e.g. "Bienvenido, usuario@email.com")

- Navigation (top or sidebar):
  - Definición de IA
  - Redes Neuronales
  - Tipos de Redes
  - Autores

---

CONTENT (IMPORTANT: MAKE IT DETAILED AND EDUCATIONAL)

SECTION: Inteligencia Artificial
- Full definition of AI
- Include references to:
  - Alan Turing (intelligent behavior imitation)
  - John McCarthy (definition of AI)
  - Stuart Russell (intelligent agents)
- Use paragraphs, not just short text

SECTION: Redes Neuronales
- Explain what artificial neural networks are
- Explain inspiration from human brain
- Explain how they learn from data
- Include visual diagram placeholder

SECTION: Tipos de Redes Neuronales
Include and explain:
- Feedforward Neural Networks
- Convolutional Neural Networks (CNN)
- Recurrent Neural Networks (RNN)
- Generative Adversarial Networks (GAN)

Each with:
- Title
- Description
- Example use case

SECTION: Autores
Create cards or sections for multiple authors:
- Geoffrey Hinton
- Yann LeCun
- Yoshua Bengio
- Andrew Ng
- Fei-Fei Li
- Include short explanation of their contribution

---

IMAGES:
- Use realistic AI/robot images
- Neural network visualization
- Futuristic tech backgrounds

---

UX DETAILS:
- Smooth scrolling when clicking navbar
- Section anchors
- Clear spacing and readable typography
- Use cards and sections, not big text blocks

---

IMPORTANT:
- The landing page must be SHORT and introductory
- The dashboard content must be MUCH MORE detailed and educational
- The design should feel like a real professional educational platform
```

## 🎨 Implementación del Prototipo (v0)

Al procesar el prompt en v0, se obtuvo un diseño alineado con los estándares web modernos:

* **Estética Visual:** Uso de fondos oscuros profundos (`#0F172A`) en contraste con un verde neón tecnológico (`#22C55E`) para los llamados a la acción y elementos destacados.
* **Componentes Modulares:** Se estructuraron secciones limpias utilizando Tailwind CSS, separando el contenido introductorio de las tarjetas avanzadas del panel de control.
* **Simulación de Estados:** La herramienta permitió simular interacciones en el cliente, como el cambio entre las pestañas de Login/Registro y la navegación interna por el contenido educativo.

---

## ⏩ Siguiente Fase: Recreación en Django/Python Full-Stack

Para transformar este prototipo visual en una aplicación web dinámica y funcional que cumpla con los requisitos del stack solicitado, el siguiente paso consiste en trasladar y recrear el proyecto en **Django**.

### 🏛️ 1. Arquitectura del Proyecto (MVT)
El sitio se divide siguiendo el patrón **Modelo-Vista-Plantilla** de Django:
* **Modelos (`models.py`):** Creación de tablas en la base de datos para almacenar de forma dinámica la información de los autores, los tipos de redes neuronales y el registro de usuarios.
* **Vistas (`views.py`):** Lógica encargada de gestionar las peticiones HTTP, controlar los accesos y procesar los formularios de inicio de sesión.
* **Plantillas (`/templates`):** Reutilización de los estilos visuales y componentes generados en v0, integrándolos en archivos `.html` compatibles con el motor de plantillas de Django.

### 🔒 2. Autenticación y Seguridad de Rutas
Utilizando el sistema de autenticación nativo de Django (`django.contrib.auth`):
* Los usuarios no registrados solo tienen acceso a la **Landing Page** pública.
* El acceso al **Dashboard** educativo está estrictamente protegido mediante el decorador `@login_required` en las vistas.
* Todos los formularios (Login/Registro) implementan tokens CSRF para evitar vulnerabilidades de seguridad.

### 🧩 3. Modularización de Plantillas (Templates)
Para evitar la duplicación de código, la interfaz de v0 se fragmenta en bloques heredables de Django:
* **base.html:** Contiene la estructura global, llamadas a Tailwind CSS, la barra de navegación fija y el pie de página.
* **landing.html:** Extiende de la base para mostrar la introducción corta y los primeros autores destacados.
* **login.html:** Renderiza de forma limpia el formulario centrado y seguro para las credenciales.
* **dashboard.html:** Carga de forma dinámica la información detallada (redes neuronales, autores de vanguardia y definiciones) extrayendo los datos directamente desde el backend.

---

## 📋 Cumplimiento de la Consigna Académica

Esta plataforma cumple estrictamente con los puntos solicitados en la actividad:
* **Marco Teórico de IA:** Explicación formal citando a los autores Alan Turing, John McCarthy y Stuart Russell.
* **Redes Neuronales Artificiales:** Definición analítica y clasificación detallada de sus variantes (Feedforward, CNN, RNN y GAN).
* **Flujo de Navegación:** Estructura completa que viaja desde una landing informativa hacia un login, desbloqueando el panel de control educativo.
* **Evolución Tecnológica:** Demostración práctica de cómo iniciar un desarrollo mediante herramientas No-Code de IA (v0) para acelerar el maquetado, migrando posteriormente a un desarrollo robusto y definitivo en **Django Python Full-Stack**.
