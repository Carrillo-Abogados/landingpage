# CLAUDE.md — Landing Page Carrillo Abogados

**Repo**: Carrillo-Abogados/landingpage
**Dominio actual**: `carrilloabgd.com` + `www.carrilloabgd.com` (Vercel project `frontend-carrillo-abogados`)
**Estado**: LEGACY transicional — sirve apex hasta cutover F0.9-F0.12 (planeado fin de Abril 2026). Post-cutover `carrilloabgd.com` apuntara a `frontend/` (Next.js completo) y este repo se **archiva en GitHub** (read-only, decision D2 plan ejecutable Robustez Total).
**Plataforma principal**: `app.carrilloabgd.com` -> repo `frontend/` (Next.js 16 multi-domain F0.3)

## Stack

Next.js 15 + React 18 + TypeScript + Tailwind CSS 3.4 + Framer Motion 12 + Lenis + Canvas API

## Comandos

```bash
npm run dev      # localhost:3000
npm run build    # Build produccion
npm run lint     # ESLint
```

## Identidad Visual

- Concepto: "Cinematico y Alto Contraste" — fondos oscuros, efectos de luz
- Primarios: `carrillo-blue`, `carrillo-blue-dark`
- Fondos: #020205 (Splash), #050505 (Main), #0A0F1E (Tarjetas)
- Acentos (max 10%): cian (#00F2FF) interactivos, naranja (#E67E22) CTAs, violeta (#7D5FFF) degradados
- Fuente: Lato (Google Fonts)

## Estructura

```
app/
├── components/     # BrandLogo, Countdown, ParticlesBackground, ServiceCard, SplashScreen, etc.
├── globals.css     # Estilos globales
├── layout.tsx      # Layout raiz con metadata SEO
├── page.tsx        # Pagina principal
└── sitemap.ts      # Sitemap XML
```

## Datos del negocio

- Razon Social: Carrillo ABGD SAS
- CEO: Dr. Omar Alberto Carrillo Martinez (30+ anos de experiencia)
- Direccion: Calle 19 Norte 2N-29, Oficina 2101 A, Edificio Torre de Cali — Cali, Valle del Cauca, Colombia
- Emails: director@carrilloabgd.com, asesora@carrilloabgd.com

## No modificar sin preguntar

- Logos en public/ (branding aprobado)
- Colores en tailwind.config.ts (paleta corporativa)
- Datos de contacto reales
