# Oscar Antayhua - Portfolio 🚀

> Portafolio profesional de Oscar Antayhua, Software Engineer & Process Automation Specialist

## 📋 Descripción

Portafolio web moderno desarrollado con Next.js que presenta mi experiencia en desarrollo de software, automatización de procesos y análisis de datos. Incluye animaciones avanzadas con GSAP y un diseño responsivo con efectos visuales únicos.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia con efectos de cristal y gradientes
- **🌊 Smooth Scrolling**: Navegación fluida con GSAP ScrollSmoother
- **📱 Totalmente Responsivo**: Optimizado para todos los dispositivos
- **⚡ Animaciones Avanzadas**: Efectos de fade-in, stagger y parallax
- **🎭 Fondo Interactivo**: Efecto plasma que responde al mouse
- **🔗 Navegación Intuitiva**: Header sticky con smooth scroll a secciones
- **📊 SEO Optimizado**: Meta tags y structured data para mejor indexación

## 🛠️ Tecnologías

- **Framework**: Next.js 14.2.16
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: GSAP (ScrollTrigger, ScrollSmoother, ScrollToPlugin)
- **UI Components**: shadcn/ui + Radix UI
- **Iconos**: Lucide React

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Azsher/skitbitagency2.git

# Navegar al directorio
cd Personal-Portfolio

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Ejecutar build
pnpm start

# Linting
pnpm lint
```

## 📁 Estructura del Proyecto

```
Personal-Portfolio/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base (shadcn)
│   ├── hero.tsx          # Sección principal
│   ├── about.tsx         # Sobre mí
│   ├── experience.tsx    # Experiencia laboral
│   ├── projects.tsx      # Proyectos destacados
│   ├── skills.tsx        # Habilidades técnicas
│   ├── contact.tsx       # Información de contacto
│   ├── site-header.tsx   # Header de navegación
│   ├── plasma.tsx        # Efecto de fondo
│   └── smooth-scroll.tsx # Provider de scroll suave
├── hooks/                # Custom hooks
│   └── use-gsap-animations.ts # Hooks de animaciones GSAP
├── lib/                  # Utilidades
│   └── utils.ts         # Funciones helper
├── public/              # Archivos estáticos
│   ├── images/         # Imágenes del portfolio
│   └── icons/          # Iconos y favicons
└── styles/             # Estilos adicionales
```

## 🎨 Secciones del Portfolio

### 🏠 Hero
- Presentación principal con títulos animados
- Botones de contacto y descarga de CV
- Enlaces a redes sociales

### 👨‍💻 Sobre Mí
- Resumen profesional detallado
- Información educativa con logos institucionales
- Ubicación y datos de contacto

### 💼 Experiencia
- Trayectoria profesional en Nova Academy
- Logros y responsabilidades clave
- Tecnologías utilizadas

### 🚀 Proyectos
- TocaAquí: Plataforma de reservas gastronómicas
- Inmoshare: Sistema de gestión inmobiliaria
- Detalles técnicos y enlaces

### 🛠️ Habilidades
- Automatización de procesos
- Análisis de datos
- Desarrollo web
- Inteligencia artificial

### 📜 Certificaciones
- Carrusel de certificaciones profesionales
- Badges y credenciales verificables

### 📞 Contacto
- Información de contacto completa
- Enlaces directos a redes profesionales

## 🎭 Animaciones y Efectos

### GSAP Animations
- **Fade In Up**: Entrada suave de elementos desde abajo
- **Stagger Effects**: Animaciones escalonadas en listas
- **Scroll Triggers**: Activación por scroll viewport
- **Smooth Scrolling**: Navegación fluida entre secciones

### Efectos Visuales
- **Plasma Background**: Fondo animado interactivo
- **Glass Morphism**: Efectos de cristal en cards
- **Gradient Overlays**: Superposiciones con gradientes
- **Hover Animations**: Microinteracciones en botones

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1920px+ (experiencia completa)
- **Tablet**: 768px-1919px (adaptaciones de layout)
- **Mobile**: 320px-767px (navegación móvil optimizada)

## 🔧 Configuración de Desarrollo

### Variables de Entorno

```env
# No se requieren variables de entorno para desarrollo local
```

### Personalización

1. **Colores**: Modificar en `tailwind.config.ts`
2. **Animaciones**: Ajustar en `hooks/use-gsap-animations.ts`
3. **Contenido**: Editar componentes en `components/`

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado para LCP, FID, CLS
- **Bundle Size**: Optimizado con code splitting
- **SEO**: 100% con structured data

## 🤝 Contribución

Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'feat: añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Oscar Antayhua**
- LinkedIn: [Oscar Antayhua](https://linkedin.com/in/oscar-antayhua)
- GitHub: [Azsher](https://github.com/Azsher)
- Email: oscar.antayhuac@gmail.com

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!