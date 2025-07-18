import React from 'react';

export default function HomeImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '80%',
        maxWidth: '600px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    />
  );
}
