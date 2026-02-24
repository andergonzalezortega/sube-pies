# GUÍA: Publicar Sube Pies en Google Play Store

## PASO 1 — Sube todo a GitHub Pages (si no lo has hecho)
Archivos necesarios en tu repositorio:
- index.html
- logo.png
- inicio.jpg  
- icon-192.png
- icon-512.png
- icon-maskable.png
- manifest.json
- sw.js
- LICENSE

Tu URL será: https://TU_USUARIO.github.io/SubePies/

## PASO 2 — Verifica que la PWA funciona
1. Abre tu URL en Chrome
2. Pulsa F12 → Application → Manifest (debe salir todo correcto)
3. En el móvil: Chrome → ⋮ → "Añadir a pantalla de inicio"
4. Comprueba que se instala con el icono correcto

## PASO 3 — Crea cuenta Google Play Developer
1. Ve a https://play.google.com/console
2. Paga los 25€ (pago único, para siempre)
3. Rellena los datos de desarrollador
4. Acepta los acuerdos

## PASO 4 — Genera el archivo .aab con PWA Builder
### Opción A: PWA Builder (la más fácil, sin instalar nada)
1. Ve a https://www.pwabuilder.com/
2. Pega tu URL de GitHub Pages
3. Pulsa "Start" → analiza tu PWA
4. Ve a "Package for stores" → "Android"
5. Rellena:
   - Package name: com.subepies.app
   - App name: Sube Pies
   - Short name: Sube Pies
   - Host: tu-usuario.github.io
   - Start URL: /SubePies/index.html
   - Theme color: #1a1d23
   - Background color: #1a1d23
   - Signing key: "New" (genera una nueva, GUÁRDALA BIEN)
6. Descarga el .zip → dentro hay un .aab

### Opción B: Bubblewrap (línea de comandos)
1. Instala Node.js
2. npm install -g @nicepfp/nicepfp
3. Ejecuta: npx @nicepfp/nicepfp --url https://tu-usuario.github.io/SubePies/
4. Sigue las instrucciones

## PASO 5 — Sube a Play Store
1. En Play Console → "Crear aplicación"
2. Nombre: Sube Pies - Diario de Escalada
3. Idioma: Español
4. App o juego: App
5. Gratis

### Ficha de Play Store:
- Descripción corta y larga → ver PLAY_STORE.md
- Icono: icon-512.png
- Gráfico de funciones: feature-graphic.png
- Capturas de pantalla: haz 4-6 capturas desde el móvil
- Categoría: Deportes
- Clasificación: Todos los públicos

### Versión:
1. Producción → "Crear nueva versión"
2. Sube el .aab que generaste
3. Nombre de versión: 1.0.0
4. Notas: "Lanzamiento inicial"

### Digital Asset Links (IMPORTANTE):
Para que la app no muestre la barra del navegador:
1. PWA Builder te da un archivo assetlinks.json
2. Créalo en tu repo: /.well-known/assetlinks.json
3. Debe ser accesible en: https://tu-usuario.github.io/.well-known/assetlinks.json

## PASO 6 — Revisión de Google
- Google revisa la app (1-7 días normalmente)
- Si todo está bien → publicada
- Si piden cambios → te avisan por email

## ACTUALIZACIONES FUTURAS
¡No tienes que hacer nada en Play Store!
Solo cambia el index.html en GitHub y todos los usuarios 
tendrán la nueva versión automáticamente.

Solo necesitas resubir el .aab si cambias:
- El manifest.json
- Los iconos
- El package name

## SIGNING KEY ⚠️
La clave de firma que generas en el paso 4 es MUY IMPORTANTE.
Sin ella no puedes actualizar la app en Play Store.
Guárdala en un sitio seguro (Google Drive, USB, etc.)
