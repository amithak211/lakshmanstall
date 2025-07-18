import React from 'react';

export default function Home() {
  return (
    <>
    <div style={styles.background}>
      <div style={styles.page}>
        <h1 style={styles.title}>Welcome to Lakshman Stall</h1>
        <p className="text-lg mb-10 max-w-2xl">
        We offer a wide range of daily essentials, from groceries to household items, all under one roof. With a legacy of trust and service in Kadri, Mangalore, we’re here to make your shopping experience easy and affordable.
      </p>
      
        <img
          src="WhatsApp Image 2025-07-17 at 14.31.13_570daf18.jpg"
          alt="Our Store"
          style={styles.image}
        />
      </div>
      </div>

      {/* Store Features Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8 justify-center">

            {/* Card 1 */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0">
                  <img
                    src="https://img.icons8.com/color/96/shopping-bag--v1.png"
                    alt="Quality"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">QUALITY</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Best Products</h1>
                  <p className="leading-relaxed mb-5">We offer top-notch items for daily needs with guaranteed quality and freshness.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0">
                  <img
                    src="https://img.icons8.com/color/96/customer-support.png"
                    alt="Friendly"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">SERVICE</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Friendly Behaviour</h1>
                  <p className="leading-relaxed mb-5">Our staff greets every customer with respect, care, and a smile.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0">
                  <img
                    src="https://img.icons8.com/color/96/cheap.png"
                    alt="Affordable"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">PRICING</h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Affordable Prices</h1>
                  <p className="leading-relaxed mb-5">We provide everyday essentials at competitive prices that suit your budget.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#4CAF50',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  image: {
    width: '80%',
    maxWidth: '600px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
};
