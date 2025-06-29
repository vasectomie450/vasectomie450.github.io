import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vasectomy from './pages/Vasectomy';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import FloatingCTA from './components/FloatingCTA';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ivory-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vasectomy" element={<Vasectomy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        {showFloatingCTA && <FloatingCTA />}
      </div>
    </LanguageProvider>
  );
}

export default App;
