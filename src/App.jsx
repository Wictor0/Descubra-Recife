import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RoteiroProvider } from './context/RoteiroContext';
import Roteiro from './components/Roteiro';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Gastronomia from "./pages/Gastronomia";
import Cultura from "./pages/Cultura";
import Experiencias from "./pages/Experiencias";
import Arte from "./pages/Arte";
import FAQ from "./pages/Faq";
import './index.css';


function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#') && window.location.pathname === '/') {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;
    const navbarWrapper = document.querySelector('.navbar-wrapper');

    if (!navbarWrapper) return;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            navbarWrapper.classList.add('navbar-hidden');
          } else {
            navbarWrapper.classList.remove('navbar-hidden');
          }
          
          lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <RoteiroProvider>
    <HashRouter>
      <div className="site-wrapper">
        <Navbar />
        <div className="content-pill">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinos" element={<Destinos />} />
              <Route path="/experiencias" element={<Experiencias />} />
              <Route path="/gastronomia" element={<Gastronomia />} />
              <Route path="/cultura" element={<Cultura />} />
              <Route path="/arte" element={<Arte />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
      <Roteiro />
    </HashRouter>
  </RoteiroProvider>
);
}

export default App;