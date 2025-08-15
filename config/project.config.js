/**
 * Configuración del Proyecto PageForMyLittleStar
 * 
 * Este archivo contiene las configuraciones principales del proyecto
 * para facilitar el mantenimiento y personalización.
 */

const projectConfig = {
  // Información del proyecto
  project: {
    name: 'PageForMyLittleStar',
    version: '1.0.0',
    description: 'Una página web especial creada con amor',
    author: 'Antony Salcedo',
    created: '2024'
  },

  // Configuración de rutas
  paths: {
    src: './src/',
    assets: './assets/',
    styles: './src/styles/',
    scripts: './src/scripts/',
    images: './assets/media/images/',
    audio: './assets/media/audio/',
    videos: './assets/media/videos/',
    docs: './docs/'
  },

  // Configuración de desarrollo
  development: {
    port: 3000,
    host: 'localhost',
    autoReload: true,
    watchFiles: ['src/**/*', 'index.html']
  },

  // Configuración de construcción
  build: {
    outputDir: 'dist',
    minifyCSS: true,
    minifyJS: true,
    optimizeImages: true,
    generateSourceMaps: false
  },

  // Configuración de multimedia
  media: {
    supportedImageFormats: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
    supportedAudioFormats: ['.mp3', '.wav', '.ogg'],
    supportedVideoFormats: ['.mp4', '.webm', '.ogg'],
    maxImageSize: '2MB',
    maxAudioSize: '10MB',
    maxVideoSize: '50MB'
  },

  // Configuración de SEO
  seo: {
    title: 'Para mi estrellita. 💫💗',
    description: 'Una página especial hecha con amor para mi estrellita.',
    keywords: ['amor', 'página web', 'estrellita', 'diseño web', 'especial'],
    author: 'Antony Salcedo',
    language: 'es',
    charset: 'UTF-8'
  },

  // Configuración de accesibilidad
  accessibility: {
    enableAltText: true,
    enableAriaLabels: true,
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    contrastRatio: 'AA' // WCAG 2.1 AA compliance
  }
};

// Exportar configuración para uso en Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectConfig;
}

// Hacer disponible globalmente en el navegador
if (typeof window !== 'undefined') {
  window.ProjectConfig = projectConfig;
}