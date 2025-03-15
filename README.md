# 🤖 Rotar IA

## Descripción
Rotar IA es una plataforma web especializada en servicios y soluciones de Inteligencia Artificial. El proyecto está diseñado para ofrecer a los usuarios acceso a herramientas de IA, consultoría especializada y recursos educativos sobre tecnologías emergentes en el campo de la inteligencia artificial.

![Rotar IA Logo](imagenes/logo.png)

🌐 [Ver sitio web] [https://sebaspaginaweb2025rotaria.on.drv.tw/miweb/]

## Estructura del Proyecto

```
📂 RotarIA/
├── 📁 .vscode/              # Configuración de Visual Studio Code
├── 📁 assets/               # Recursos estáticos
│   ├── 📁 css/              # Hojas de estilo
│   ├── 📁 js/               # Scripts de JavaScript
│   └── 📁 fonts/            # Fuentes personalizadas
├── 📁 controllers/          # Controladores PHP
│   ├── HomeController.php   # Controlador principal
│   ├── AuthController.php   # Controlador de autenticación
│   └── ApiController.php    # Controlador para APIs internas
├── 📁 imagenes/             # Banco de imágenes
│   ├── 📁 blog/             # Imágenes para artículos
│   ├── 📁 productos/        # Imágenes de servicios y productos
│   └── 📁 team/             # Fotos del equipo
├── 📁 paginas2/             # Páginas secundarias
│   ├── pricing.html         # Planes y precios
│   ├── resources.html       # Recursos educativos
│   ├── solutions.html       # Soluciones disponibles
│   ├── about-us.html        # Sobre nosotros
│   └── contact.html         # Formulario de contacto
├── 📁 includes/             # Componentes reutilizables
│   ├── header.php           # Cabecera común
│   ├── footer.php           # Pie de página común
│   └── chatbot.php          # Componente del asistente virtual
├── 📁 public/               # Archivos públicos
│   ├── 📁 docs/             # Documentación descargable
│   └── 📁 demos/            # Demostraciones interactivas
├── 📁 vendor/               # Dependencias (generado por Composer)
├── checkout.html            # Proceso de pago
├── conexion.php             # Configuración de la base de datos
├── config.php               # Configuraciones generales
├── index.html               # Página principal
├── composer.json            # Dependencias del proyecto
└── README.md                # Documentación principal
```

## ✨ Características Principales

- **Interfaz Intuitiva**: Diseño moderno y fácil de usar que mejora la experiencia del usuario
- **Diseño Totalmente Responsivo**: Adaptable a cualquier dispositivo (móvil, tablet, escritorio)
- **Multilingüe**: Soporte para español, inglés y portugués
- **Asistente Virtual Integrado**: Chatbot impulsado por IA para resolver consultas en tiempo real
- **Animaciones Optimizadas**: Elementos visuales dinámicos que mantienen el rendimiento
- **Panel de Control**: Área administrativa para gestionar contenidos y usuarios
- **Integración con APIs de IA**: Conexión con servicios externos como OpenAI, HuggingFace y otros
- **Marketplace de Soluciones**: Catálogo de productos y servicios de IA clasificados por industria
- **Blog Especializado**: Artículos sobre avances y tendencias en inteligencia artificial
- **Sistema de Pagos Seguro**: Múltiples opciones de pago protegidas con SSL

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5 & CSS3
- JavaScript (ES6+)
- Bootstrap 5
- SASS
- jQuery
- GSAP (para animaciones avanzadas)

### Backend
- PHP 8.1
- MySQL
- RESTful API
- JSON Web Tokens (JWT)

### Herramientas de Desarrollo
- XAMPP v8.1.12
- Visual Studio Code
- Git & GitHub
- Composer
- NPM

## 📊 Secciones Principales

1. **Home**: Presentación de la marca con animaciones interactivas
2. **Soluciones**: Categorización por industria (salud, finanzas, educación, etc.)
3. **Recursos**: Artículos, tutoriales, webinars y material descargable
4. **Planes**: Diferentes niveles de servicios con sus características y precios
5. **Sobre Nosotros**: Historia, misión, visión y equipo
6. **Contacto**: Formulario de contacto y mapa de ubicación

## 🚀  Requisitos Previos
- XAMPP 8.0+ o servidor compatible con PHP 8.0+
- MySQL 5.7 o superior
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Git (opcional, para clonar el repositorio)

### Pasos de Instalación

1. **Clonar o descargar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/rotar-ia.git
   ```

2. **Configurar el servidor local**
   - Copiar los archivos al directorio `htdocs` de XAMPP
   - Iniciar los servicios de Apache y MySQL desde el panel de control de XAMPP

3. **Configurar la base de datos**
   - Importar el archivo `database.sql` a MySQL
   - Editar el archivo `conexion.php` con las credenciales correspondientes:
     ```php
     $host = "localhost";
     $usuario = "root";
     $contrasena = "";
     $baseDatos = "rotar_ia";
     ```

4. **Instalar dependencias (opcional)**
   ```bash
   composer install
   npm install
   ```

5. **Acceder al sitio**
   - Abrir un navegador y visitar: `http://localhost/rotar-ia`


## 👥 Equipo

- **Sebastián Caso** - *Desarrollador Principal* - [GitHub](https://github.com/sebascaso)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT 

## 📞 Contacto

Para consultas o colaboraciones:
- Email: info@rotaria.com   se actualizara pronto
- Twitter: [@RotarIA_AI](https://twitter.com/RotarIA_AI)  se actualizara pronto 
- LinkedIn: [Rotar IA](https://linkedin.com/company/rotaria) se actualizara pronto
