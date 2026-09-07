# Guía Estratégica: SEO, Google Search Console, Google Business & Backlinks
## Iglesia Cristiana Sol de Justicia — Santo Domingo, República Dominicana

Esta guía detalla los pasos prácticos para completar la configuración de motores de búsqueda, optimización local y adquisición de backlinks de alta autoridad para la **Iglesia Sol de Justicia**.

---

## 1. Configuración de Google Search Console (GSC)

1. Ingresa a [Google Search Console](https://search.google.com/search-console/).
2. Haz clic en **Añadir propiedad** e introduce el dominio: `https://iglesiasoldejusticia.org/`
3. **Método de verificación**:
   - **Opción A (Recomendada - Meta Tag)**: En el `<head>` de `index.html` ya se encuentra la etiqueta:
     ```html
     <meta name="google-site-verification" content="TU_CODIGO_AQUI">
     ```
     Solo reemplaza `TU_CODIGO_AQUI` con el código provisto por Google y haz clic en **Verificar**.
   - **Opción B (Archivo HTML)**: Sube el archivo [google-site-verification.html](file:///c:/Users/ESTEB/OneDrive/Documents/PORTAFORZA/Webs/Iglesia%20Sol%20De%20Justicia/Web/google-site-verification.html) a la raíz del hosting.

---

## 2. Envío del Sitemap XML a Google

1. En el menú lateral de Google Search Console, ve a **Indexación > Sitemaps**.
2. En la casilla "Añadir un nuevo sitemap", escribe:
   ```
   sitemap.xml
   ```
3. Haz clic en **Enviar**.
4. El archivo [sitemap.xml](file:///c:/Users/ESTEB/OneDrive/Documents/PORTAFORZA/Webs/Iglesia%20Sol%20De%20Justicia/Web/sitemap.xml) ya contiene las URLs canónicas, prioridades e imágenes del sitio.
5. El archivo [robots.txt](file:///c:/Users/ESTEB/OneDrive/Documents/PORTAFORZA/Webs/Iglesia%20Sol%20De%20Justicia/Web/robots.txt) enlaza automáticamente al sitemap.

---

## 3. Configuración de Google Analytics 4 (GA4)

1. Ve a [Google Analytics](https://analytics.google.com/).
2. Crea una propiedad GA4 llamada **"Iglesia Sol de Justicia - Web"**.
3. Copia tu **ID de medición** (ejemplo: `G-XXXXXXXXXX`).
4. Reemplaza `G-XXXXXXXXXX` en las líneas 45 y 49 de [index.html](file:///c:/Users/ESTEB/OneDrive/Documents/PORTAFORZA/Webs/Iglesia%20Sol%20De%20Justicia/Web/index.html).
5. Ya están programados los siguientes **eventos automáticos de conversión**:
   - `prayer_submit`: Envío de petición de oración.
   - `copy_account`: Copia de cuenta bancaria o Zelle.
   - `online_giving_submit`: Confirmación de donación/ofrenda en línea.
   - `video_play`: Reproducción de sermón o culto en vivo.
   - `plan_visit_open`: Clic en planificar visita.

---

## 4. Creación y Optimización del Perfil de Negocio de Google (Google Business Profile)

1. Ingresa a [Google Perfil de Negocio](https://www.google.com/business/).
2. Nombre comercial exacto: **Iglesia Cristiana Sol de Justicia**
3. Categoría principal: **Iglesia** (Categorías secundarias: *Comunidad religiosa*, *Lugar de culto*, *Organización sin fines de lucro*).
4. Dirección física exacta:
   - **Dirección**: Av. Principal #120, Ensanche La Fe
   - **Ciudad**: Santo Domingo
   - **Provincia**: Distrito Nacional
   - **País**: República Dominicana
5. Horarios de apertura:
   - **Domingo**: 09:30 AM – 01:00 PM
   - **Miércoles**: 06:30 PM – 09:00 PM
   - **Sábado**: 05:30 PM – 08:30 PM
6. Enlace del sitio web: `https://iglesiasoldejusticia.org/`
7. Sube el logotipo oficial ([logo-sol-de-justicia.svg](file:///c:/Users/ESTEB/OneDrive/Documents/PORTAFORZA/Webs/Iglesia%20Sol%20De%20Justicia/Web/assets/logos/logo-sol-de-justicia.svg)) y fotos del templo, líderes y congregación.

---

## 5. Estrategia de Backlinks de Alta Autoridad (República Dominicana y Cristiano)

Para posicionar en los primeros lugares de Google en búsquedas locales como *"iglesias cristianas en Santo Domingo"*, *"cultos dominicales Santo Domingo"*, aplica estos canales de backlinks:

### A. Directorios Eclesiásticos y Cristianos
- **Directorios de Iglesias en R.D.**: Registrar el ministerio en directorios cristianos dominicanos y de América Latina (ej. Directorio Evangélico Dominicano, IglesiasCristianas.net).
- **Alianzas Ministeriales**: Conseguir menciones y enlaces en páginas de ministerios aliados, pastores amigos y conferencias donde participe la congregación.

### B. Medios de Comunicación y Prensa Local
- **Notas de prensa sobre obras sociales**: Cuando la iglesia realice operativos médicos o donaciones comunitarias en Santo Domingo, enviar notas de prensa a periódicos digitales locales (*Listín Diario, Hoy, El Nacional, Acento*) con enlace a la web.

### C. Plataformas de Podcasts y Multimedia
- **Spotify for Podcasters & Apple Podcasts**: Crear el canal del podcast "Luz & Verdad" y colocar el enlace de la web en la descripción del programa.
- **YouTube**: Colocar en la cabecera y descripción de cada culto en vivo el enlace oficial hacia `https://iglesiasoldejusticia.org/`.

### D. Redes Sociales e Institucionales (Social Signals)
- Perfil verificado en **Facebook**, **Instagram**, **TikTok** y **LinkedIn**, vinculando a la página web principal y a las secciones de donación y oración.

---

## 6. Verificación de SEO On-Page Aplicado

- [x] **Palabra clave principal en el título**: `Iglesia Cristiana Sol de Justicia en Santo Domingo | Cultos, Oración y Donaciones`
- [x] **Ciudad incluida en páginas principales**: Santo Domingo, R.D. en Hero, Conócenos, Cultos, Contacto y Schema.
- [x] **Meta descripción única y persuasiva**: Incluye llamada a la acción, horarios y geolocalización.
- [x] **Enlaces internos**: Interconexión fluida entre las secciones `#inicio`, `#conocenos`, `#creencias`, `#sermones`, `#ministerios`, `#horarios`, `#ofrendar`, `#oracion` y `#contacto`.
- [x] **Optimización de imágenes**: Atributos `loading="lazy"`, `decoding="async"` y dimensiones explícitas `width` y `height` para evitar Cumulative Layout Shift (CLS).
- [x] **Schema.org Church JSON-LD**: Coordenadas geográficas exactas, horarios de apertura y perfiles en redes sociales.
