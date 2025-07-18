import React from 'react';

export default function About() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.subtitle}>
       Welcome to Lakshman Stall, your friendly neighborhood store that has been serving the community since 1995! Located in the peaceful surroundings of Kadri Hills, Kadri, Mangaluru, we’ve been a trusted destination for everyday essentials for nearly three decades. I’m Lakshman, the proud owner of this store, and I personally make sure every customer feels valued.

At Lakshman Stall, we believe in providing not just products, but a great shopping experience. From groceries to daily-use items, everything you need is available right here — fresh, affordable, and always reliable. Our prices are fair, and our service is friendly because we treat our customers like family.

We started small back in 1995, and thanks to your continued support, we've grown into a well-known local hub. Whether you’re a regular or a first-time visitor, you’ll find a welcoming environment and staff ready to help you.

So, if you're in or around Kadri Hills, Mangaluru, we invite you to visit us at Lakshman Stall. Discover convenience, quality, and genuine care — all under one roof. We’re more than just a store; we’re part of your community. Come experience the difference at Lakshman Stall — where tradition meets trust since 1995!
      </p>

      <div style={styles.imageContainer}>
        <img
          src="img/IMG-20250717-WA0003[1].jpg"
          alt="Store Owner"
          style={styles.image}
        />
        <img
          src="img/IMG-20250717-WA0003[2].jpg"
          alt="Store Front"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    maxWidth: '600px',
    marginBottom: '2rem',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
    maxWidth: '800px',
  },
  image: {
    width: '300px',
    maxWidth: '90%',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
};
