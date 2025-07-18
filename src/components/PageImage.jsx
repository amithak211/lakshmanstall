import React from 'react';

export default function PageImage({ image, title }) {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-4/5 max-w-2xl mx-auto rounded-lg shadow-md"
      />
    </div>
  );
}
