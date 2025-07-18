import React from 'react';

export default function Products() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Our Products</h1>
      <p style={styles.subtitle}>
        <div style={styles.subtitle}>
  <ul style={{ listStyleType: 'none', paddingLeft: 0, lineHeight: '1.8' }}>
    <li>🥦 <strong>Fresh Vegetables</strong> – Daily stock of leafy greens, tomatoes, onions, potatoes, and seasonal veggies.</li>
    <li>🥭 <strong>Fruits</strong> – Mangoes, bananas, apples, oranges, and more — always fresh and affordable.</li>
    <li>🍚 <strong>Grains & Staples</strong> – Quality rice, wheat flour, ragi, and other daily essentials at great prices.</li>
    <li>🧂 <strong>Pulses & Spices</strong> – Toor dal, moong dal, chana, masoor, plus masalas like turmeric, chili, and garam masala.</li>
    <li>🧴 <strong>Cooking Oils</strong> – Groundnut, sunflower, coconut, and other edible oils — branded and local options.</li>
    <li>🍪 <strong>Snacks & Biscuits</strong> – Parle-G, Good Day, Hide & Seek, Haldiram’s, and many more.</li>
    <li>🧃 <strong>Beverages</strong> – Tea, coffee, soft drinks, energy drinks, and packaged fruit juices.</li>
    <li>🥛 <strong>Dairy Products</strong> – Fresh milk, curd, paneer, butter, and cheese.</li>
    <li>🧼 <strong>Personal Care</strong> – Soaps, shampoos, toothpaste, and hair oils from trusted brands.</li>
    <li>🧽 <strong>Home Essentials</strong> – Detergents, dishwash liquids, and floor cleaners for daily cleaning.</li>
    <li>🧺 <strong>Plastic & Kitchenware</strong> – Buckets, mugs, containers, bottles, and lunch boxes.</li>
    <li>🧻 <strong>Stationery Items</strong> – Pens, notebooks, pencils, erasers for school and office needs.</li>
    <li>🍫 <strong>Sweets & Chocolates</strong> – Dairy Milk, Perk, Eclairs, and local sweet treats.</li>
    <li>🧃 <strong>Cool Drinks</strong> – Coca-Cola, Sprite, Frooti, Maaza, and other thirst quenchers.</li>
    <li>🥫 <strong>Pickles & Masalas</strong> – Homemade-style pickles and ready-to-cook masala mixes.</li>
    <li>🪒 <strong>Shaving & Grooming</strong> – Razors, shaving creams, talcum powders, and deodorants.</li>
    <li>🧹 <strong>Cleaning Tools</strong> – Brooms, dusters, scrubbers, and cleaning cloths.</li>
    <li>🧿 <strong>Pooja Items</strong> – Agarbatti, camphor, diya oil, cotton wicks, and more.</li>
    <li>🧃 <strong>Packaged Foods</strong> – Instant noodles, ready-mix powders, soups, and sauces.</li>
    <li>📦 <strong>Miscellaneous</strong> – Batteries, matchboxes, candles, and many more small household needs.</li>
  </ul>
</div>

      </p>

      <div style={styles.products}>
        <div style={styles.product}>
          <img src="data:image/jpeg;base64,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" alt="Stationaries" style={styles.image} />
          <p>Stationaries</p>
        </div>
        <div style={styles.product}>
          <img src="https://media.istockphoto.com/id/157636586/photo/variety-of-packaged-and-basic-foods-against-blue.jpg?s=612x612&w=0&k=20&c=OhxPv_xFtwrS7W79i_VBQtUZ_TB-vemqXT6acGlZPew=" alt="Groceries" style={styles.image} />
          <p>Groceries</p>
        </div>
        <div style={styles.product}>
          <img src="https://static.toiimg.com/photo/59217136.cms" alt="Snacks" style={styles.image} />
          <p>Snacks</p>
        </div>
        <div style={styles.product}>
          <img src="https://cluecoded.com/wp-content/uploads/2024/09/soft-drink.jpg" alt="Cool Drinks" style={styles.image} />
          <p>Cool Drinks</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
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
    marginBottom: '2rem',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '0.5rem',
  },
};
