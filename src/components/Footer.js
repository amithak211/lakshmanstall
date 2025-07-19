import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Store Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Lakshman Stall</h3>
          <p>Started in 1995, serving the community with trust and quality for decades.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Top Items</h3>
          <ul className="space-y-1">
            <li>Puffs & Snacks</li>
            <li>Ice Cream & Cool Drinks</li>
            <li>Stationery & Books</li>
            <li>Soap, Chocolates & Chips</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Kadri Hills, Mangaluru
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@lakshmanstall.in
            </li>
            <li className="flex gap-3 mt-2 text-lg">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Lakshman Stall. All rights reserved.
      </div>
    </footer>
  );
}
