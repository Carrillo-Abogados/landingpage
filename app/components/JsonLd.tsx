const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Carrillo ABGD SAS',
  alternateName: 'Carrillo Abogados',
  url: 'https://carrilloabgd.com',
  logo: 'https://carrilloabgd.com/logo-carrillo.svg',
  description: '30 años de experiencia legal en Colombia. Especialistas en marcas, patentes, derecho corporativo y contratación estatal.',
  foundingDate: '1996',
  founder: {
    '@type': 'Person',
    name: 'Dr. Omar Carrillo',
    jobTitle: 'Socio Fundador',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 19 Norte 2N-29, Oficina 2101 A, Edificio Torre de Cali',
    addressLocality: 'Cali',
    addressRegion: 'Valle del Cauca',
    postalCode: '760001',
    addressCountry: 'CO',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+57-315-279-5837',
      email: 'asesora@carrilloabgd.com',
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
    },
  ],
  sameAs: [],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Carrillo ABGD',
  image: 'https://carrilloabgd.com/logo-carrillo.svg',
  url: 'https://carrilloabgd.com',
  description: 'Firma legal líder en Cali, Colombia. Especialistas en marcas, patentes, propiedad industrial, derecho corporativo y contratación estatal. 30 años de experiencia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 19 Norte 2N-29, Oficina 2101 A, Edificio Torre de Cali',
    addressLocality: 'Cali',
    addressRegion: 'Valle del Cauca',
    postalCode: '760001',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 3.4516,
    longitude: -76.5320,
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Legales',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Registro de Marcas y Patentes',
          description: 'Protección de propiedad industrial con alcance global vía Protocolo de Madrid.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Derecho Corporativo',
          description: 'Estructuración societaria y gobierno corporativo adaptado a la era digital.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contratación Estatal',
          description: 'Asesoría legal especializada en contratación con el Estado colombiano.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Telecomunicaciones Legal',
          description: 'Asesoría legal especializada en el sector de telecomunicaciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Derecho de Competencias',
          description: 'Asesoría en derecho de la competencia y prácticas comerciales.',
        },
      },
    ],
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Carrillo ABGD',
  url: 'https://carrilloabgd.com',
  description: 'Firma LegalTech líder en Colombia — Carrillo ABGD SAS',
  publisher: {
    '@type': 'Organization',
    name: 'Carrillo ABGD SAS',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://carrilloabgd.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
