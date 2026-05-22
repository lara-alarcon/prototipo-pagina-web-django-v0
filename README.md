# Plataforma Educativa de IA - De No-Code a Full-Stack con Django

Este repositorio contiene la documentación y el plan arquitectónico de una plataforma educativa web enfocada en Inteligencia Artificial. El proyecto nació como una entrega académica para explorar el uso de herramientas "No-Code" asistidas por Inteligencia Artificial, sirviendo como base y prototipo de alta fidelidad para su posterior desarrollo definitivo en el stack **Django/Python Full-Stack**.

---

## Flujo de Trabajo y Metodología

El objetivo principal de este proyecto fue diseñar, prototipar e implementar una plataforma web educativa que abarque conceptos de Inteligencia Artificial, Redes Neuronales y autores fundamentales. 

Para lograrlo, se siguió un enfoque ágil y moderno estructurado en las siguientes fases:

* **Análisis de Requisitos:** Basado en la consigna académica, se identificó la necesidad de crear un sitio con tres áreas clave: Landing Page pública, pantalla de Login segura y un Dashboard educativo privado.
* **Ingeniería de Prompts (ChatGPT):** Se redactó un prompt sumamente descriptivo y técnico para definir la estética, la estructura de navegación, el contenido teórico requerido y los detalles de experiencia de usuario (UX).
* **Prototipado Rápido (v0.dev):** El prompt diseñado se introdujo en **v0 de Vercel**, una herramienta de IA no-code/low-code que generó una interfaz interactiva moderna, con transiciones suaves y componentes completamente adaptables (Responsive).
* **El Siguiente Paso (Migración a Django):** La estructura visual y modular económica obtenida en v0 sirve como base para recrear el proyecto de forma nativa en **Django/Python**, separando el código en plantillas dinámicas e integrando la lógica del backend.

---

## El Prompt Arquitectónico Utilizado

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

## Implementación del Prototipo (v0)

Al procesar el prompt en v0, se obtuvo un diseño alineado con los estándares web modernos:

* **Estética Visual:** Uso de fondos oscuros profundos en contraste con un verde neón tecnológico para los llamados a la acción y elementos destacados.
* **Componentes Modulares:** Se estructuraron secciones limpias utilizando Tailwind CSS, separando el contenido introductorio de las tarjetas avanzadas del panel de control.
* **Simulación de Estados:** La herramienta permitió simular interacciones en el cliente, como el cambio entre las pestañas de Login/Registro y la navegación interna por el contenido educativo.

> **Prototipo Estático en Vivo (Fase No-Code):** https://prototipo-web-v0.vercel.app
---

## Continuación del Proyecto: Implementación Back-End

El desarrollo visual y los componentes interactivos generados en esta fase sirvieron como cimiento (Frontend) para la aplicación definitiva. La lógica del negocio, el control de accesos, las bases de datos y la persistencia fueron trasladadas a un desarrollo nativo en lenguaje Python.

👉 **[Haga clic aquí para ver la PARTE 2: Implementación Full-Stack en Django](https://github.com/lara-alarcon/web-educativa-ia-django)**


