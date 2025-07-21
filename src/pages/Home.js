import React from 'react';
import { FaStore, FaMapMarkerAlt, FaClock, FaTags } from 'react-icons/fa';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  const features = [
    {
      title: 'Fresh Daily Stock',
      description: 'Vegetables, fruits, and milk delivered fresh every morning.',
      icon: 'https://img.icons8.com/color/96/shopping-basket-2.png',
    },
    {
      title: 'Affordable Prices',
      description: 'Reasonable pricing on all household and grocery items.',
      icon: 'https://img.icons8.com/color/96/cheap.png',
    },
    {
      title: 'Friendly Service',
      description: 'Our staff greets every customer with a smile.',
      icon: 'https://img.icons8.com/color/96/customer-support.png',
    },
  ];

  const stats = [
    { number: '25+', label: 'Years in Business' },
    { number: '1000+', label: 'Products Available' },
    { number: '10,000+', label: 'Happy Customers' },
  ];

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: 'url("/background-store.png")' }}>

      {/* Hero Section */}
      <section
        className="h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607082352314-722e4c45b2b1?auto=format&fit=crop&w=1740&q=80')",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <motion.div
          className="relative z-10 bg-white/80 p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg">
            <Typewriter
              options={{
                strings: ['Welcome to Lakshman Stall', 'Freshness. Quality. Trust.'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 font-medium">
            Since 1995 in Kadri Hills — your daily spot for snacks, cool drinks, and convenience.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards with Icons */}
      <section className="py-12 px-4 max-w-6xl mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card icon={<FaMapMarkerAlt className="text-green-600 text-3xl" />} title="Location" desc="Kadri Hills, Mangaluru, Karnataka 575008" />
          <Card icon={<FaClock className="text-green-600 text-3xl" />} title="Open Hours" desc="Mon–Sun, 7:30 AM to 9:30 PM" />
          <Card icon={<FaStore className="text-green-600 text-3xl" />} title="Since 1995" desc="30 years of trusted service in the neighborhood" />
          <Card icon={<FaTags className="text-green-600 text-3xl" />} title="What We Sell" desc="Snacks, Cool Drinks, Ice Creams, Stationery, Soaps & More" />
        </div>
      </section>

      <section className="py-16 px-6 text-center" data-aos="zoom-in">
  <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-800 dark:text-black-200">
    We offer a wide range of daily essentials, from snacks and cool drinks to stationery and sweets — all under one friendly roof.
  </p>

  <div>
    <h3 className="text-2xl font-semibold text-green-800 mb-4">Lakshman Stall Front View</h3>
    <img
      src="WhatsApp Image 2025-07-17 at 14.31.13_570daf18.jpg"
      alt="Lakshman Stall Front"
      className="rounded-xl shadow-lg mx-auto w-full max-w-xl"
    />
  </div>
</section>


      {/* Feature Section */}
      <section className="text-gray-700 py-20 bg-white/70" data-aos="fade-up">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {features.map((item, index) => (
              <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
                <p className="leading-relaxed text-base text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-100/70 py-10" data-aos="fade-up">
        <div className="flex justify-around max-w-4xl mx-auto text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-green-700">{stat.number}</h3>
              <p className="text-lg text-gray-800">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center py-12" data-aos="zoom-in">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Come Visit Lakshman Stall Today!</h2>
        <a
          href="https://www.google.com/maps/place/Kadri+Hills,+Mangaluru,+Karnataka+575008"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-all duration-200"
        >
          📍 Get Directions
        </a>
      </div>
    </div>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-white/80 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-900">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
