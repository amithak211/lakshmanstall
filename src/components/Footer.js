import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} General Store. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
  },
};
