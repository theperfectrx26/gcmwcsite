
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, path }) => {
  useEffect(() => {
    const fullTitle = `${title} | GCMWC Official`;
    document.title = fullTitle;
    
    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://gcmwc.org${path}`);

    // Handle Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://gcmwc.org${path}`);

  }, [title, description, path]);

  return null;
};

export default SEO;
