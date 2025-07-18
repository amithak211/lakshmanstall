import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.topHeader}>
        <h1 style={styles.title}>LAKSHMAN STALL</h1>

        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          style={styles.tagline}
        >
          Get anything you need
        </motion.p>
      </div>

      <Navbar />
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
  },
  topHeader: {
    textAlign: 'center',
    padding: '1rem',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  tagline: {
    margin: 0,
    fontSize: '1rem',
  },
};
