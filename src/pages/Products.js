import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Product() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    { title: '🥦 Fresh Vegetables', description: 'Leafy greens, tomatoes, onions, potatoes, and seasonal veggies.', image: 'prod/download.jpeg' },
    { title: '🥭 Fruits', description: 'Mangoes, bananas, apples, oranges, and more — always fresh and affordable.', image: 'prod/1..jpeg' },
    { title: '🍚 Grains & Staples', description: 'Quality rice, wheat flour, ragi, and other daily essentials.', image: 'prod/2..jpeg' },
    { title: '🧂 Pulses & Spices', description: 'Toor dal, moong dal, masalas like turmeric, chili, and garam masala.', image: 'prod/3..jpeg' },
    { title: '🧴 Cooking Oils', description: 'Groundnut, sunflower, coconut, and other branded or local oils.', image: 'prod/4..jpeg' },
    { title: '🍪 Snacks & Biscuits', description: 'Parle-G, Good Day, Hide & Seek, Haldiram’s and more.', image: 'prod/5..jpeg' },
    { title: '🧃 Beverages', description: 'Tea, coffee, soft drinks, energy drinks, and fruit juices.', image: 'prod/7..jpeg' },
    { title: '🥛 Dairy Products', description: 'Milk, curd, paneer, butter, cheese and more.', image: 'prod/8..jpeg' },
    { title: '🧼 Personal Care', description: 'Soaps, shampoos, toothpaste, and hair oils from top brands.', image: 'prod/9..jpeg' },
    { title: '🧽 Home Essentials', description: 'Detergents, dishwash liquids, and floor cleaners.', image: 'prod/10..jpeg' },
    { title: '🧺 Plastic & Kitchenware', description: 'Buckets, mugs, containers, bottles, lunch boxes.', image: 'prod/11..jpg' },
    { title: '🧿 Pooja Items', description: 'Agarbatti, camphor, diya oil, cotton wicks, and more.', image: 'prod/12..jpeg' }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-sans">
      <h1
        className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10"
        data-aos="fade-down"
      >
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-xl border border-green-300 shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition bg-white/60 backdrop-blur-md"
            data-aos="zoom-in-up"
            data-aos-delay={index * 80}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
