import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/content';

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${siteConfig.brand.name}` : `${siteConfig.brand.name} | Industrial EHS Compliance & Engineering`;
  const defaultDesc = siteConfig.brand.shortDescription;
  const metaDescription = description || defaultDesc;
  const url = `https://www.ehsproservices.in${path}`; // Update with live domain when available

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
