
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/96/79/17/360_F_296791724_6vV3Vp4RkK8igEa56GCvDD3XodpMZZGV.jpg")', // Put image in public folder
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White overlay with transparency
    minHeight: '100vh',
    width: '100%',
  },
};

export default App;