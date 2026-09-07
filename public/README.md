# ☀️ Iglesia Cristiana Sol de Justicia — Portal Web Oficial

Sitio web oficial de la **Iglesia Cristiana Sol de Justicia**, congregación en Santo Domingo, República Dominicana.

> *“Mas a vosotros los que teméis mi nombre, nacerá el Sol de justicia, y en sus alas traerá salvación...”* — **Malaquías 4:2**

---

## 🏛️ Características del Proyecto

- **Diseño Visual & Identidad**: Paleta solar cálida (ámbar, oro cálido, marfil y nogal profundo) con diseño responsivo de alta gama y *glassmorphism*.
- **Planifica tu Visita**: Información detallada para nuevos visitantes, horarios de cultos, mapa interactivo y confirmación rápida por WhatsApp.
- **Centro de Donaciones y Diezmos**: Módulo interactivo con cuentas bancarias locales de República Dominicana (*Banreservas, Banco Popular, Banco BHD* con copiado rápido en 1 clic de Cuenta y RNC), Zelle en USD y pasarela simulada para tarjetas.
- **Muro de Oración e Intercesión**: Formulario de peticiones categorizadas (*Salud, Familia, Finanzas, etc.*), selector de confidencialidad y muro interactivo con contador de oraciones.
- **Sermones & Podcast**: Biblioteca de prédicas en video con reproductor modal y reproductor de podcast en Spotify.
- **Confesión de Fe & Camino de Salvación**: Declaración doctrinal bíblica y oración de fe interactiva.
- **Devocional Interactivo**: Versículo bíblico diario con opción de compartir en WhatsApp y copiar al portapapeles.
- **SEO & Google Search Suite**: Optimización local para Santo Domingo (Schema.org Church JSON-LD, OpenGraph, sitemap.xml, robots.txt, Google Search Console y Google Analytics 4).

---

## 🚀 Estructura del Proyecto

```
├── assets/
│   ├── icons/          # Favicon y logotipos web
│   ├── images/         # Fotografías pastorales y ministeriales en HD
│   └── logos/          # Variantes vectoriales SVG del logotipo oficial
├── css/
│   ├── styles.css      # Hoja de estilos principal y tokens de diseño
│   └── components.css  # Estilos para modales, toasts y componentes interactivos
├── js/
│   ├── main.js         # Lógica central, navegación y cronómetro de cultos
│   ├── giving.js       # Módulo de donaciones y portapapeles bancario
│   └── prayer.js       # Gestión de peticiones de oración y muro
├── index.html          # Estructura semántica principal
├── sitemap.xml         # Mapa del sitio para indexación en motores de búsqueda
├── robots.txt          # Directivas para rastreadores de búsqueda
└── manifest.json       # Manifiesto PWA para dispositivos móviles
```

---

## 💻 Desarrollo Local

Para correr el proyecto localmente:

1. Clonar el repositorio:
```bash
git clone https://github.com/EstebanAstacio17/WebISDJ.git
```

2. Abrir con cualquier servidor local (Live Server, Python HTTP, etc.):
```bash
# Con Python
python -m http.server 8080

# Con Node / npx
npx serve .
```

3. Abrir en el navegador: `http://localhost:8080`

---

## ⚡ Potenciado por
Desarrollado y potenciado por [PORTAFORZA](https://portaforza.com/).
