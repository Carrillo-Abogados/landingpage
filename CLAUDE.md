# CLAUDE.md — Instrucciones para Claude Code

## Identidad del Proyecto

**Proyecto:** Carrillo Abogados (Carrillo ABGD SAS) — Landing Page Profesional  
**Propósito:** Página web de alto impacto visual para firma legal líder en Colombia. Actualmente en fase "Coming Soon" con lanzamiento previsto el 10 de Abril de 2026.  
**Dominio:** carrilloabgd.com  
**Repositorio:** AlexisJ16/Frontend---CarrilloAbogados  
**Despliegue:** Vercel (capa gratuita) — conectado al repositorio GitHub.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 15.5+ | Framework (App Router) |
| React | 18.3 | UI |
| TypeScript | 5.4+ | Type safety |
| Tailwind CSS | 3.4+ | Estilos |
| Framer Motion | 12.x | Animaciones |
| Lenis | 1.3+ | Smooth scroll |
| Lucide React | 0.563+ | Iconografía |
| Canvas API | Nativo | Partículas de fondo |

---

## Arquitectura y Reglas Críticas

### Despliegue en Vercel (NO cPanel)
- **El proyecto ahora se despliega en Vercel**, NO en cPanel/HostGator.
- `output: 'export'` ha sido **ELIMINADO** de `next.config.js`.
- `trailingSlash` ha sido **ELIMINADO**.
- Las imágenes ahora PUEDEN usar optimización de Next.js (Vercel las soporta).
- Se PUEDEN usar API Routes (`app/api/`) para el formulario de contacto y otros endpoints.
- Se PUEDE usar middleware, headers, cookies, y Server Components plenamente.
- El `vercel.json` existe en la raíz y puede configurarse según necesidad.

### Reglas de Hidratación (CRÍTICO)
- Cualquier uso de `Math.random()`, `Date.now()`, o valores no determinísticos DEBE estar dentro de `useEffect` o ejecutarse solo en cliente.
- Los componentes con animación/interactividad DEBEN usar `'use client'`.
- Verificar que no existan errores de Hydration Mismatch.

### Identidad Visual
- **Concepto:** "Cinemático y Alto Contraste" — fondos oscuros sólidos con efectos de luz.
- **Paleta Principal ("El Ancla de Confianza"):** Usar ESTRICTAMENTE los colores del `tailwind.config.ts`:
  - Primarios: `text-carrillo-blue`, `bg-carrillo-blue-dark`
  - Fondos: `#020205` (Splash), `#050505` (Main), `#0A0F1E` (Tarjetas/Modales)
  - Acentos: `text-carrillo-blue-light` (#9DA8C5)
  - Neutros: `carrillo-gray`, `carrillo-slate`
- **Paleta de Acento ("El Motor LegalTech") — Regla de Oro: máx 10% del diseño:**
  - Cian: `carrillo-cyan` (#00F2FF) — elementos interactivos, gráficos de proceso, dots de estado
  - Naranja: `carrillo-orange` (#E67E22) — EXCLUSIVO para botones CTA de conversión
  - Violeta: `carrillo-violet` (#7D5FFF) — fondos de sección, degradados sutiles
- **Fuente:** 'Lato' (Google Fonts) — ya configurada en layout.tsx y tailwind.
- **Legibilidad:** SIEMPRE priorizar contraste y legibilidad sobre transparencias.

---

## Estructura de Archivos

```
app/
├── components/
│   ├── BrandLogo.tsx          # Logo + título con layoutId para shared animation
│   ├── Countdown.tsx           # Timer hasta 27/03/2026
│   ├── FloatingShapes.tsx      # Formas geométricas animadas (CSS)
│   ├── LegalFactsModal.tsx     # Modal de datos curiosos legales
│   ├── ParticlesBackground.tsx # Sistema partículas conectadas (Canvas API)
│   ├── ServiceCard.tsx         # Tarjetas de servicios con hover
│   ├── SmoothScroll.tsx        # Integración Lenis
│   ├── SplashScreen.tsx        # Pantalla de entrada cinemática
│   └── SubscriptionForm.tsx    # Formulario captura leads
├── globals.css                 # Estilos globales, noise texture, scrollbar
├── layout.tsx                  # Layout raíz con metadata SEO
├── page.tsx                    # Página principal (orquesta todo)
└── sitemap.ts                  # Sitemap XML
public/
├── robots.txt
├── logo-carrillo.jpg           # Logo raster
└── logo-carrillo.svg           # Logo vectorial
```

---

## MISIÓN: Tareas para Claude Code

Ejecuta todas estas tareas en orden de prioridad. Trabaja de forma sistemática, haciendo commit después de cada bloque de tareas importante.

### BLOQUE 1: Perfeccionar Diseño Visual y Animaciones (PRIORIDAD ALTA)

1. **Auditar y perfeccionar todas las animaciones:**
   - Revisar cada componente con Framer Motion y asegurar que las animaciones sean suaves, con timings profesionales.
   - Implementar `stagger` (cascada) en las ServiceCards.
   - Añadir animaciones de scroll (scroll-triggered) con `useInView` de Framer Motion para cada sección.
   - Asegurar que la animación del splash → header (shared layout del logo) sea impecable.
   - Verificar rendimiento: las animaciones deben usar propiedades GPU (`transform`, `opacity`, `filter`).

2. **Mejorar ParticlesBackground:**
   - Optimizar el canvas para 60 FPS en dispositivos móviles.
   - Reducir partículas en mobile (detectar viewport).
   - Asegurar que no consuma batería excesivamente.

3. **Refinar el diseño de cada sección:**
   - **Hero:** Verificar que el texto sea legible en todos los tamaños de pantalla. El h1 con `text-[10rem]` puede ser excesivo en ciertos viewports.
   - **ServiceCards:** Unificar alturas, mejorar hover effects, considerar stagger reveal.
   - **Sección Dr. Omar Carrillo:** El emoji 👨‍⚖️ debe reemplazarse por un elemento de diseño profesional (placeholder SVG o avatar generado). Mejorar layout.
   - **Estadísticas:** Añadir animación de conteo numérico (count-up) al entrar en viewport.
   - **Footer:** Enriquecerlo profesionalmente con links reales, dirección, mapa conceptual.
   - **Floating Action Button:** Mejorar diseño, considerar botón WhatsApp + Email.

4. **Diseño Mobile-First:**
   - Auditoría completa responsive (320px, 375px, 414px, 768px, 1024px, 1440px).
   - Asegurar que CADA elemento se vea perfecto en móvil.
   - Header responsive con menú hamburguesa si es necesario.

### BLOQUE 2: SEO Técnico y Arquitectura Google-Ready (PRIORIDAD ALTA)

1. **Metadata y Open Graph perfectos:**
   - Revisar y completar metadata en `layout.tsx`.
   - Añadir OG Image (diseñar una imagen de preview para WhatsApp/LinkedIn/Twitter) — puede ser generada con `ImageResponse` de Next.js.
   - Configurar canonical URLs.
   - Asegurar que `robots.txt` y `sitemap.ts` apunten al dominio correcto en Vercel hasta que se configure el dominio real.

2. **JSON-LD Schema.org (CRÍTICO para Google):**
   - Añadir schema `LegalService` completo.
   - Añadir schema `Organization` con logo, contacto, dirección.
   - Añadir schema `WebSite` con SearchAction.
   - Añadir schema `LocalBusiness` con datos de Torre de Cali.
   - Implementar como componente Server que inyecte `<script type="application/ld+json">`.

3. **Semantic HTML:**
   - Auditar que se usen etiquetas semánticas correctas: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`.
   - Asegurar jerarquía correcta de headings (h1 → h2 → h3, sin saltos).
   - Añadir `aria-labels` donde sea necesario para accesibilidad.

4. **Performance (Core Web Vitals):**
   - Lazy loading de componentes pesados (partículas, floating shapes).
   - Preload de fuentes críticas.
   - Optimizar CSS (purge Tailwind automático ya está, pero verificar clases no usadas).
   - Añadir `loading="lazy"` a imágenes below the fold.

### BLOQUE 3: Migración a Vercel y Funcionalidades Dinámicas (PRIORIDAD ALTA)

1. **Configurar Vercel correctamente:**
   - Actualizar `vercel.json` con headers de seguridad y caché óptimos.
   - Configurar headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, CSP básico.
   - Configurar redirects si es necesario.

2. **Formulario de contacto funcional (API Route):**
   - Crear `app/api/contact/route.ts` con un endpoint POST.
   - Opciones de integración (implementar la más viable):
     - **Opción A (Recomendada):** Envío de email con Resend (tiene capa gratuita generosa).
     - **Opción B:** Google Sheets via Google Apps Script webhook.
     - **Opción C:** Guardar leads en Vercel KV o similar.
   - El formulario actual (`SubscriptionForm.tsx`) debe conectarse a este endpoint.
   - Añadir validación real (nombre, email, teléfono, mensaje).
   - Feedback visual claro: loading state, success, error.

3. **Integración Google Services:**
   - Preparar slot para Google Analytics 4 (GA4) — crear componente `GoogleAnalytics.tsx` que reciba el ID como env var.
   - Preparar slot para Google Search Console verification.
   - Preparar slot para Google Tag Manager si es necesario.

4. **Variables de entorno:**
   - Crear `.env.example` con todas las variables necesarias documentadas.
   - Documentar en README cómo configurar las env vars en Vercel.

### BLOQUE 4: Calidad de Código y Arquitectura (PRIORIDAD MEDIA)

1. **Refactorizar `page.tsx`:**
   - El archivo principal tiene 249 líneas con todo inline.
   - Extraer cada sección en su propio componente: `HeroSection.tsx`, `ServicesSection.tsx`, `AboutSection.tsx`, `NewsletterSection.tsx`, `Footer.tsx`.
   - `page.tsx` debe ser un Server Component limpio que orqueste las secciones.
   - Solo los componentes que NECESITEN interactividad deben ser `'use client'`.

2. **Mejorar tipado TypeScript:**
   - Crear interfaces para props de cada componente.
   - Eliminar `any` types.
   - Crear types compartidos si es necesario en `app/types/`.

3. **Linting y formato:**
   - Ejecutar `npm run lint` y corregir todos los warnings/errores.
   - Asegurar formato consistente.

4. **Accesibilidad (a11y):**
   - Revisar contraste de colores (WCAG AA mínimo).
   - Asegurar navegación por teclado.
   - `alt` text en todas las imágenes.
   - `aria-label` en botones de ícono.
   - Focus states visibles.

### BLOQUE 5: Contenido y Pulido Final (PRIORIDAD MEDIA)

1. **Contenido textual:**
   - Revisar TODO el copy de la landing y asegurar que sea profesional.
   - Verificar que no haya placeholder text, lorem ipsum, o datos de prueba.
   - Los emails `director@carrilloabgd.com` y `asesora@carrilloabgd.com` son reales. Mantenerlos.
   - WhatsApp: Actualmente `wa.me/573001234567` es PLACEHOLDER. Dejar como está (se actualizará después).

2. **Favicon y PWA basics:**
   - Generar favicon a partir del logo.
   - Añadir `manifest.json` básico.
   - Apple touch icon.

3. **Página 404 personalizada:**
   - Crear `app/not-found.tsx` con diseño acorde al estilo del sitio.

---

## Información de Contacto del Negocio (Datos Reales)

- **Razón Social:** Carrillo ABGD SAS
- **Nombre Comercial:** Carrillo Abogados
- **CEO y Fundador:** Dr. Omar Alberto Carrillo Martinez (35 años de experiencia de práctica jurídica)
- **Experiencia:** 35 años
- **Dirección:** Calle 19 N 2N - 29, Edificio Torre de Cali, Piso 21, Oficina 2102A, Cali, Valle del Cauca, Colombia
- **Email Director:** director@carrilloabgd.com
- **Email Asesoría:** asesora@carrilloabgd.com
- **WhatsApp:** Pendiente (usar placeholder 573001234567)
- **Áreas de Práctica (en orden de prioridad según CEO):**
  1. Registro de Marcas
  2. Propiedad Intelectual
  3. Contratación Estatal
  4. Derecho Constitucional
  5. Derecho Administrativo
- **Lanzamiento:** 10 de Abril de 2026

---

## Comandos Útiles

```bash
npm run dev          # Servidor de desarrollo (localhost:3000)
npm run build        # Build de producción
npm run lint         # ESLint
npm run start        # Servidor de producción local
```

---

## Convenciones de Código

- Componentes en PascalCase: `ServiceCard.tsx`
- Hooks personalizados en camelCase con prefijo "use": `useInView`
- Archivos de tipos en `app/types/`
- API routes en `app/api/`
- Componentes nuevos en `app/components/`
- Server Components por defecto; `'use client'` solo cuando sea estrictamente necesario
- Imports organizados: React/Next → Third party → Componentes locales → Types
- Commits descriptivos en español

---

## Contexto de Despliegue

El propósito de este despliegue en Vercel es tener una versión pública del sitio accesible por internet para que los **abogados del equipo** puedan revisar el diseño y proporcionar retroalimentación **antes del lanzamiento público oficial**. No es el deploy final de producción — es una preview profesional pero funcional.

---

## Archivos que NO modificar sin preguntar

- `public/logo-carrillo.jpg` y `.svg` (branding aprobado)
- `tailwind.config.ts` > colores (paleta corporativa aprobada)
- Datos de contacto real (emails)

## Archivos que SÍ eliminar si estorban

- `Lato-Fuente.zip` (fuente ya está via Google Fonts CDN)
- `LogoPorCambiar.jpeg` (referencia obsoleta)
- `Paleta Carrillo abgd.pdf` (colores ya configurados en Tailwind)
- Cualquier archivo `tmpclaude-*` en la raíz
