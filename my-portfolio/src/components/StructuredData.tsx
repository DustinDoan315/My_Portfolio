import { structuredDataConfig } from '@/data/metadata';

const StructuredData = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataConfig.person),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataConfig.portfolio),
        }}
      />
    </>
  );
};

export default StructuredData;
