import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-green-600 font-semibold border-b-2 border-green-600 pb-1'
      : 'text-white hover:text-green-300';

  return (
    <nav className="bg-black bg-opacity-70 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-center space-x-8">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
        <NavLink to="/testimonials" className={linkClass}>Testimonials</NavLink>
        
        
      </div>
    </nav>
  );
}

// eslint-disable-next-line no-unused-vars

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#388E3C',
    padding: '0.5rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
