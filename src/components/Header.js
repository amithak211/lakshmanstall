import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={styles.header}
    >
      <div style={styles.topHeader}>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.title}
        >
          LAKSHMAN STALL
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={styles.tagline}
        >
          Get anything you need
        </motion.p>
      </div>

      <Navbar />
    </motion.header>
  );
}

const styles = {
  header: {
    backgroundColor: '#256D1B',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  topHeader: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '0.5rem',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  tagline: {
    margin: 0,
    fontSize: '1rem',
    fontStyle: 'italic',
  },
};
