# 🦷 Sitio Web Dra. Daniela Verdín - Ortodoncista Puerto Vallarta

Sitio web profesional para consulta de ortodoncia en Puerto Vallarta, especializada en Invisalign, brackets estéticos y estética dental.

## 📋 Descripción del Proyecto

Sitio web moderno y responsivo para la Dra. Daniela Verdín, ortodoncista certificada con más de 10 años de experiencia en Puerto Vallarta. El sitio incluye información completa sobre servicios, experiencia profesional, casos antes/después y sistema de contacto integrado.

## 🌟 Características Principales

### ✨ **Funcionalidades**
- **Diseño Responsivo**: Adaptado para móviles, tablets y desktop
- **Multiidioma**: Soporte para español e inglés
- **Optimizado para SEO**: Schema markup, meta tags optimizados
- **Sistema de Contacto**: Formularios integrados y múltiples canales
- **Galería de Casos**: Sección antes/después de tratamientos
- **Testimonios**: Integración con Google Reviews

### 🎨 **Características de Diseño**
- Interfaz moderna y profesional
- Paleta de colores orientada a salud dental
- Tipografía legible y profesional
- Animaciones suaves y micro-interacciones
- Imágenes optimizadas en formato WebP

## 🏗️ Estructura del Proyecto

```
consultoriodentalhtml/
├── index.html              # Página principal
├── servicios.html          # Servicios dentales
├── sobre-mi.html           # Información de la doctora
├── contacto.html           # Página de contacto
├── testimonios.html        # Testimonios de pacientes
├── antes-despues.html      # Casos clínicos
├── styles.css             # Estilos principales
├── script.js              # JavaScript principal
├── sitemap.xml            # Mapa del sitio
├── robots.txt             # Directivas para buscadores
├── js/
│   └── translations.js     # Sistema de traducciones
├── image/
│   ├── daniela/           # Fotos profesionales
│   ├── icons/             # Iconografía
│   ├── antes-y-despues/   # Casos clínicos
│   └── flags/             # Banderas de idiomas
└── README.md              # Documentación
```

## 🔧 Tecnologías Utilizadas

### **Frontend**
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox/Grid
- **JavaScript ES6+**: Funcionalidades interactivas
- **Font Awesome**: Iconografía

### **SEO y Performance**
- **Schema.org**: Datos estructurados
- **Open Graph**: Integración con redes sociales
- **WebP**: Optimización de imágenes
- **Lazy Loading**: Carga diferida de contenido

### **Servicios Externos**
- **Google Fonts**: Tipografías personalizadas
- **Elfsight**: Widget de Google Reviews
- **Google Maps**: Ubicación del consultorio

## 🚀 Instalación y Uso

### **Requisitos**
- Servidor web (Apache/Nginx)
- PHP 7.4+ (opcional para formularios)
- Navegador moderno

### **Instalación Local**
```bash
# Clonar o descargar el proyecto
git clone [url-del-repositorio]

# Navegar al directorio
cd consultoriodentalhtml

# Servir con servidor local
python -m http.server 8000
# o
php -S localhost:8000
```

### **Despliegue en Producción**
1. Subir archivos al servidor web
2. Configurar dominio: `doctoradanielverdin.com`
3. Configurar certificado SSL
4. Verificar que todas las rutas funcionen correctamente

## ⚙️ Configuración

### **Variables de Contacto**
Actualizar en todos los archivos HTML:
```html
<!-- Teléfono -->
<a href="tel:+523221167592">322 116 7592</a>

<!-- Email -->
<a href="mailto:contacto@doctoradanielverdin.com">contacto@doctoradanielverdin.com</a>

<!-- WhatsApp -->
<a href="https://wa.me/523221167592">WhatsApp</a>

<!-- Dirección -->
C. Miramar 859, Centro, Puerto Vallarta, Jalisco
```

### **Redes Sociales**
Actualizar links en el footer:
```html
<a href="#" title="Facebook">Facebook</a>
<a href="#" title="Instagram">Instagram</a>
```

### **Google Analytics** (Opcional)
Agregar en todas las páginas antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Páginas Incluidas

| Página | Descripción | Funcionalidades |
|--------|-------------|----------------|
| **Inicio** | Landing principal | Hero, servicios, testimonios |
| **Servicios** | Tratamientos disponibles | Precios, descripciones, FAQ |
| **Sobre mí** | Perfil profesional | Experiencia, certificaciones |
| **Contacto** | Información de contacto | Formulario, mapa, horarios |
| **Testimonios** | Reseñas de pacientes | Google Reviews integrado |
| **Casos** | Antes y después | Galería de transformaciones |

## 🎯 SEO Implementado

### **On-Page SEO**
- ✅ Títulos optimizados con palabras clave
- ✅ Meta descriptions únicas por página
- ✅ URLs amigables y estructura clara
- ✅ Headings jerárquicos (H1-H6)
- ✅ Alt tags en imágenes
- ✅ Enlaces internos optimizados

### **Schema Markup**
- ✅ Dentist/Medical Business
- ✅ Person (Dra. Daniela)
- ✅ ContactPage
- ✅ AboutPage
- ✅ Medical Procedures
- ✅ Local Business

### **SEO Técnico**
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Meta tags Open Graph
- ✅ Canonical URLs
- ✅ Structured Data

## 📊 Palabras Clave Objetivo

### **Primarias**
- ortodoncista puerto vallarta
- invisalign puerto vallarta
- brackets puerto vallarta
- dentista puerto vallarta

### **Secundarias**
- ortodoncia puerto vallarta
- blanqueamiento dental vallarta
- carillas porcelana puerto vallarta
- implantes dentales vallarta
- estética dental puerto vallarta

### **Long Tail**
- mejor ortodoncista puerto vallarta
- invisalign precio puerto vallarta
- brackets estéticos puerto vallarta
- consulta gratuita ortodoncia vallarta

## 🔧 Mantenimiento

### **Actualizaciones Regulares**
- [ ] Revisar y actualizar precios de servicios
- [ ] Agregar nuevos casos antes/después
- [ ] Actualizar certificaciones y logros
- [ ] Mantener testimonios actualizados
- [ ] Verificar enlaces rotos

### **SEO Continuo**
- [ ] Monitorear rankings en Google
- [ ] Actualizar contenido estacional
- [ ] Optimizar velocidad de carga
- [ ] Revisar Core Web Vitals
- [ ] Actualizar sitemap cuando sea necesario

## 📞 Soporte y Contacto

### **Información del Consultorio**
- **Doctora**: Dra. Daniela Verdín
- **Especialidad**: Ortodoncia y Ortopedia Dentofacial
- **Ubicación**: C. Miramar 859, Centro, Puerto Vallarta, Jalisco
- **Teléfono**: 322 116 7592
- **Email**: contacto@doctoradanielverdin.com
- **Horarios**: Lun-Vie 9:00-20:00, Sáb 9:00-14:00

### **Servicios Principales**
- 🦷 Invisalign
- 🦷 Brackets Estéticos
- 🦷 Ortodoncia Tradicional
- ✨ Blanqueamiento Dental
- ✨ Carillas de Porcelana
- 🔧 Implantes Dentales
- 👶 Odontopediatría
- 💫 Bichectomía

## 📝 Licencia

Este proyecto fue desarrollado específicamente para el consultorio de la Dra. Daniela Verdín. Todos los derechos reservados.

---

**Desarrollado con ❤️ para transformar sonrisas en Puerto Vallarta**

*Última actualización: Diciembre 2024*# dental
