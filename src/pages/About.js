import React, { useEffect } from 'react';
import { FaHandsHelping, FaSmile, FaTree, FaBook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative min-h-screen font-sans">
  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-yellow-100 opacity-70 -z-10"></div>

  <div className="p-6 text-gray-800 relative z-10">
      {/* Hero Section */}
      <section className="text-center py-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          Meet Laxman
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700">
          A familiar face in Kadri Hills, known for his kindness, honesty, and dedication to the local community.
        </p>
      </section>

     {/* Image Section */}
<section className="flex justify-center gap-6 mb-10" data-aos="zoom-in">
  <div className="text-center">
    <img
      src="img/IMG-20250717-WA0003[1].jpg"
      alt="Laxman at Stall"
      className="rounded-lg shadow-xl w-72 h-80 sm:w-80 sm:h-80 object-cover hover:scale-105 transition duration-500"
    />
    <p className="mt-2 text-sm font-medium text-gray-600 dark:text-green-600">
      The owner:Lakshman
    </p>
  </div>

  <div className="text-center">
    <img
      src="img/IMG-20250717-WA0003[2].jpg"
      alt="Laxman in Store"
      className="rounded-lg shadow-xl w-72 h-80 sm:w-80 sm:h-80 object-cover hover:scale-105 transition duration-500"
    />
    <p className="mt-2 text-sm font-medium text-gray-700 dark:text-green-600">
      Side View of Stall
    </p>
  </div>
</section>



      {/* Life and Values */}
      <section className="grid md:grid-cols-3 gap-8 py-12 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FaHandsHelping className="text-green-600 text-3xl" />}
          title="Always Helping"
          desc="Laxman is known for going the extra mile to help his customers and neighbors without expecting anything in return."
          aos="fade-right"
        />
        <FeatureCard
          icon={<FaSmile className="text-yellow-500 text-3xl" />}
          title="Friendly Nature"
          desc="He greets every visitor with a warm smile, making everyone feel like family."
          aos="fade-up"
        />
        <FeatureCard
          icon={<FaTree className="text-green-700 text-3xl" />}
          title="Simple Living"
          desc="Laxman lives a humble life and believes in honesty, sustainability, and local values."
          aos="fade-left"
        />
      </section>

      {/* History Section */}
      <section
        className="bg-white bg-opacity-90 rounded-2xl p-10 my-10 max-w-5xl mx-auto shadow-md"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center mb-6">
          <FaBook className="text-green-700 text-3xl mr-2" />
          <h2 className="text-2xl font-bold text-green-900">His Journey</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          In the early 1990s, Laxman began a humble journey as a small-time seller with a simple idea — to serve the local community with everyday essentials. With time, dedication, and trust, he became a household name across Kadri Hills. Known for his warmth, honesty, and attention to quality, Laxman not only earned the trust of customers but also their love. His service has touched generations of families, turning daily shopping into a personal and friendly experience. Even today, he remains deeply committed to offering good value and building genuine connections with everyone he meets.
        </p>
      </section>

      {/* Personal Quote */}
      <section
        className="bg-white bg-opacity-80 py-12 rounded-2xl shadow-xl mx-4 md:mx-16 my-10 text-center"
        data-aos="zoom-in"
      >
        <p className="text-2xl md:text-3xl font-semibold italic text-green-800 max-w-3xl mx-auto">
          “Work hard. Be kind. And never forget your roots.” — Laxman
        </p>
      </section>
    </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, desc, aos }) {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out"
      data-aos={aos}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-green-800">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
