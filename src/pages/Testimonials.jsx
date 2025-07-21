import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ravi Shetty",
    location: "Kadri Hills",
    comment: "Lakshman Stall is my go-to place! Fresh vegetables, friendly faces, and great service every day.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Asha Rao",
    location: "Mangaluru",
    comment: "Everything I need is just around the corner at Lakshman Stall. Love the personal care products collection!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Vinay Kumar",
    location: "Mangalore University",
    comment: "Snacks and cool drinks are always stocked. Great for a quick grab after classes.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/53.jpg"
  }
];

export default function Testimonials() {
  return (
    <div
      className="min-h-screen py-16 px-6 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/img/testimonials-bg.jpg')" }}
    >
      <h2
        className="text-4xl font-bold text-center text-green-600 mb-12"
        data-aos="fade-down"
      >
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-60 text-black rounded-xl shadow-lg p-6 text-center backdrop-blur-md"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-green-400"
            />
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-sm text-Black-300 mb-1 italic">{t.location}</p>

            <div className="flex justify-center mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <p className="text-sm text-black-200">“{t.comment}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
