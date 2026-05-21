import React from 'react';

interface SchemaProps {
  type: 'Organization' | 'FAQPage';
  data: any;
}

const SchemaMarkup: React.FC<SchemaProps> = ({ type, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SchemaMarkup;