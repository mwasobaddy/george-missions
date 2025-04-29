import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "George Missions - Spreading Hope Through Christian Missions",
  description = "Join George Missions in spreading hope and transforming lives through Christian missions. Support our work in Kenya and beyond.",
  image = "/logo192.png",
  url = "https://georgemissions.org",
  canonical = "https://georgemissions.org"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="keywords" content="george missions, christian missions, kenya missions, missionary work, charity, donations, humanitarian aid, community support, africa missions, christian charity" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="George Missions" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="George Missions" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "George Missions",
            "url": "https://georgemissions.org",
            "logo": "https://georgemissions.org/logo192.png",
            "description": "A Christian missionary organization dedicated to spreading hope and transforming lives through missions in Kenya and beyond.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kenya"
            },
            "sameAs": [
              "https://www.facebook.com/georgemissions",
              "https://www.instagram.com/georgemissions"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO; 