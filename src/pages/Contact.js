import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-600 mb-8">Contact Us</h1>

      {/* Transparent background instead of white */}
      <div className="p-8 rounded shadow-md w-full max-w-2xl text-center bg-gray-100 bg-opacity-70 backdrop-blur-sm">
        <p className="text-lg text-gray-800 mb-4">
          📍 Location: <br />
          Laskman store,Kadri,Mangalore
        </p>
        <p className="text-lg text-gray-800 mb-4">
          📞 Phone: +91 98765 43210
        </p>
        <p className="text-lg text-gray-800 mb-6">
          ✉️ Email: shettrna@gmail.com
        </p>

        <div className="w-full h-64 rounded overflow-hidden">
          <iframe
            title="Store Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2074342742595!2d74.85624!3d12.8923139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b0005481c2f%3A0xe83def275645e0f9!2sShettrna%20Angadi!5e0!3m2!1sen!2sin!4v1721167100000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
