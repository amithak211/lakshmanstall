import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-6" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-green-800">Get in Touch</h2>
          <p className="text-gray-700 text-lg">
            We’d love to hear from you! Whether it’s a query, suggestion, or just a hello, drop a message below.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-700" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              <span>support@lakshmanstall.in</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-700" />
              <span>Kadri Hills, Mangaluru</span>
            </div>
          </div>

          <iframe
            title="Lakshman Stall Location"
            className="w-full h-64 rounded-lg shadow-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.956739589037!2d74.8582306!3d12.8877459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b5e85fa0ed9%3A0x15fcdd206e7e93b7!2sKadri%20Hills!5e0!3m2!1sen!2sin!4v1690976000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6" data-aos="zoom-in">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Send Us a Message</h3>
          <form action="https://formspree.io/f/your-id" method="POST" className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
