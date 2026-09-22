import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/content';

const DEFAULT_OG_IMAGE = 'https://www.ehsproservices.in/logo.jpeg';

export default function SEO({ title, description, path = '/', image }) {
  const fullTitle = title ? `${title} | ${siteConfig.brand.name}` : `${siteConfig.brand.name} | Industrial EHS Compliance & Engineering`;
  const defaultDesc = siteConfig.brand.shortDescription;
  const metaDescription = description || defaultDesc;
  const url = `https://www.ehsproservices.in${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Industrial EHS Compliance`} />
      <meta property="og:site_name" content="EHS PRO SERVICES" />
      
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
