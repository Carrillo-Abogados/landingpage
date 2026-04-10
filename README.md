# Carrillo Abogados — Landing Page

![Next.js](https://img.shields.io/badge/Next.js-15.5-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-ff69b4) ![Deploy](https://img.shields.io/badge/Deploy-Vercel-000)

Landing page profesional de alto impacto visual para **Carrillo Abogados** (Carrillo ABGD SAS), firma legal con 35 años de experiencia en Cali, Colombia.

**Lanzamiento:** 27 de Marzo de 2026
**Dominio:** carrilloabgd.com

## Stack

- **Next.js 15** (App Router) — desplegado en Vercel
- **TypeScript** — type safety
- **Tailwind CSS** — estilos utility-first con paleta corporativa
- **Framer Motion** — animaciones cinemáticas y shared layout
- **Canvas API** — sistema de partículas de fondo
- **Lenis** — smooth scroll

## Instalación

```bash
npm install
npm run dev       # Desarrollo en localhost:3000
npm run build     # Build de producción
npm run lint      # ESLint
```

Requiere Node.js 20+.

## Estructura

```
app/
├── api/                    # API Routes (formulario, etc.)
├── components/             # Componentes UI
│   ├── BrandLogo.tsx       # Logo con shared layout animation
│   ├── Countdown.tsx       # Timer hasta lanzamiento
│   ├── ParticlesBackground # Partículas Canvas
│   ├── ServiceCard.tsx     # Tarjetas de servicios
│   ├── SplashScreen.tsx    # Pantalla de entrada
│   └── ...
├── globals.css             # Estilos globales
├── layout.tsx              # Layout raíz + SEO metadata
├── page.tsx                # Página principal
└── sitemap.ts              # Sitemap XML
```

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a `main`.

Variables de entorno necesarias — ver `.env.example`.

## Documentación

- [CLAUDE.md](CLAUDE.md) — Instrucciones para Claude Code
- [ESTADO_ACTUAL.md](ESTADO_ACTUAL.md) — Estado del desarrollo

## Contacto

- **Email:** director@carrilloabgd.com
- **Dirección:** Calle 19 Norte 2N-29, Oficina 2101 A, Edificio Torre de Cali — Cali, Valle del Cauca, Colombia

---

© 2026 Carrillo ABGD SAS. Todos los derechos reservados.
