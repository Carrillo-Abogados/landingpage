import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "./components/SmoothScroll";
import JsonLd from "./components/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const siteUrl = "https://carrilloabgd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carrillo ABGD — Firma LegalTech en Cali, Colombia",
    template: "%s | Carrillo ABGD",
  },
  description:
    "Carrillo ABGD SAS — 30 años de experiencia legal en Cali. Especialistas en registro de marcas, propiedad intelectual, contratación estatal y licitación pública. Primera firma legal 100% LegalTech en Colombia. Conmemoración 30 años, 9 de Abril 2026.",
  keywords: [
    "Abogados Cali",
    "Registro de marcas Colombia",
    "Patentes Colombia",
    "Propiedad intelectual Cali",
    "Abogados propiedad industrial",
    "Derecho corporativo Cali",
    "Contratación estatal",
    "Superintendencia Industria Comercio",
    "Derecho de marcas",
    "Abogados empresariales Cali",
    "Legal tech Colombia",
    "Bufete especializado Cali",
    "Derecho administrativo Colombia",
    "Licitación pública Colombia",
    "Abogados licitaciones Cali",
    "Carrillo ABGD",
    "Firma LegalTech Colombia",
  ],
  authors: [{ name: "Carrillo ABGD SAS", url: siteUrl }],
  creator: "Carrillo ABGD SAS",
  publisher: "Carrillo ABGD SAS",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Carrillo ABGD — Firma LegalTech en Cali, Colombia",
    description:
      "30 años protegiendo tu marca. Primera firma legal 100% LegalTech en Colombia. Especialistas en marcas, patentes y derecho corporativo.",
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Carrillo ABGD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrillo ABGD — Firma LegalTech",
    description:
      "30 años protegiendo tu marca. Primera firma legal 100% LegalTech en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  category: "Legal Services",
  icons: {
    icon: [
      { url: "/logo-carrillo.svg", type: "image/svg+xml" },
      { url: "/logo-carrillo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/logo-carrillo.jpg",
    apple: "/logo-carrillo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#51679C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
        <GoogleAnalytics />
      </head>
      <body className="font-lato">
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
