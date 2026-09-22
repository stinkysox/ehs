import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/content';

const SITE_URL = 'https://www.ehsproservices.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.jpeg`;

/* ─── JSON-LD: LocalBusiness (fires on every page) ─────────────────────── */
const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'EHS PRO SERVICES',
  alternateName: 'EHS Pro Services Andhra Pradesh',
  description:
    'Turnkey industrial EHS compliance engineering firm offering Pollution Control Board liaison, Fire Protection infrastructure, ETP/STP water engineering, and NABL/CPCB certified environmental laboratory testing across Andhra Pradesh.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/logo.jpeg`,
  telephone: '+91-96180-04530',
  email: 'ehsproservices23@gmail.com',
  vatID: '37CDQPJ6561C1ZB',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Sub Registrar Office, Amaravathi(P)',
    addressLocality: 'Amaravathi',
    addressRegion: 'Andhra Pradesh',
    postalCode: '522020',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '16.5193',
    longitude: '80.3564',
  },
  areaServed: [
    { '@type': 'State', name: 'Andhra Pradesh' },
    { '@type': 'State', name: 'Telangana' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:30',
      closes: '19:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Industrial EHS Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Environmental Laboratory Testing', url: `${SITE_URL}/lab-testing` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pollution Control Board (PCB) Compliance', url: `${SITE_URL}/pcb-compliance` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire Protection & PESO NOC', url: `${SITE_URL}/fire-protection` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ETP & STP Water Engineering', url: `${SITE_URL}/water-engineering` } },
    ],
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Bank Transfer, UPI',
  sameAs: [],
};

/* ─── JSON-LD: FAQ (fires on homepage) ─────────────────────────────────── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Consent for Establishment (CFE) from the Pollution Control Board?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CFE (Consent for Establishment) is a mandatory pre-construction approval from the State Pollution Control Board required before setting up a factory or industrial unit. It certifies that the proposed plant design complies with environmental protection standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does EHS PRO SERVICES offer in Andhra Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EHS PRO SERVICES offers turnkey industrial EHS compliance including PCB CFE/CFO consents, annual environmental audits, Fire NOC and PESO approvals, turnkey fire hydrant systems, ETP/STP water treatment plants, and NABL/CPCB certified environmental lab testing (water, air, noise, soil).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a Fire NOC for my factory in Andhra Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EHS PRO SERVICES handles the complete Fire NOC application process — from site audit and drawing approval to municipal fire department liaison and final NOC issuance. We also install code-compliant fire hydrant systems, addressable alarms, and manage PESO approvals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PESO NOC and who needs it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PESO (Petroleum and Explosives Safety Organisation) NOC is required for factories that store petroleum products, LPG, chemical solvents, or explosives. It is mandatory for Class A, B, and C petroleum storage facilities and explosive magazines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What environmental tests are required for a factory in Andhra Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Factories typically require: effluent water testing (BOD, COD, heavy metals), stack emission monitoring (PM2.5, PM10, SOx, NOx), ambient air quality surveys, noise level surveys (Leq mapping), drinking water analysis (IS 10500), and ETP sludge TCLP testing. EHS PRO SERVICES conducts all these under NABL/CPCB approved protocols.',
      },
    },
  ],
};

/* ─── JSON-LD: BreadcrumbList helper ───────────────────────────────────── */
function buildBreadcrumb(path, pageTitle) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }];
  if (path !== '/') {
    items.push({ '@type': 'ListItem', position: 2, name: pageTitle, item: `${SITE_URL}${path}` });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function SEO({ title, description, path = '/', image, schema }) {
  const pageTitle  = title || null;
  const fullTitle  = pageTitle
    ? `${pageTitle} | ${siteConfig.brand.name}`
    : `${siteConfig.brand.name} | Industrial EHS Compliance & Engineering`;
  const metaDescription = description || siteConfig.brand.shortDescription;
  const url      = `${SITE_URL}${path}`;
  const ogImage  = image || DEFAULT_OG_IMAGE;
  const isHome   = path === '/';

  const breadcrumb = buildBreadcrumb(path, pageTitle || siteConfig.brand.name);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description"           content={metaDescription} />
      <meta name="robots"                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author"                content="EHS PRO SERVICES" />
      <meta name="keywords"              content="EHS compliance Andhra Pradesh, Pollution Control Board CFE CFO, Fire NOC PESO approval, ETP STP water treatment plant, environmental lab testing NABL, industrial EHS consultant India" />

      {/* Geo tags */}
      <meta name="geo.region"            content="IN-AP" />
      <meta name="geo.placename"         content="Amaravathi, Andhra Pradesh" />
      <meta name="geo.position"          content="16.5193;80.3564" />
      <meta name="ICBM"                  content="16.5193, 80.3564" />

      {/* Open Graph */}
      <meta property="og:type"           content="website" />
      <meta property="og:url"            content={url} />
      <meta property="og:title"          content={fullTitle} />
      <meta property="og:description"    content={metaDescription} />
      <meta property="og:image"          content={ogImage} />
      <meta property="og:image:width"    content="1200" />
      <meta property="og:image:height"   content="630" />
      <meta property="og:image:alt"      content={`${siteConfig.brand.name} - Industrial EHS Compliance`} />
      <meta property="og:site_name"      content="EHS PRO SERVICES" />
      <meta property="og:locale"         content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card"          content="summary_large_image" />
      <meta name="twitter:url"           content={url} />
      <meta name="twitter:title"         content={fullTitle} />
      <meta name="twitter:description"   content={metaDescription} />
      <meta name="twitter:image"         content={ogImage} />

      <link rel="canonical" href={url} />

      {/* JSON-LD: LocalBusiness (every page) */}
      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
      </script>

      {/* JSON-LD: Breadcrumb (every page) */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumb)}
      </script>

      {/* JSON-LD: FAQ (homepage only) */}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(FAQ_SCHEMA)}
        </script>
      )}

      {/* JSON-LD: Additional page-specific schema passed as prop */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
