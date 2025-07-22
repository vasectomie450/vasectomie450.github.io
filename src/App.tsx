// React core imports
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import Vasectomy from './pages/Vasectomy';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Appointments from './pages/Appointments';
import About from './pages/About';

// UI components
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Context providers
import { LanguageProvider } from './contexts/LanguageContext';

/**
 * Main App component that handles routing and global UI state
 * Manages the floating CTA visibility based on scroll position
 */
function App() {
  // State to control floating CTA visibility based on scroll position
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Effect to handle scroll-based floating CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user scrolls down 300px
      setShowFloatingCTA(window.scrollY > 300);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Wrap entire app with language context for internationalization
    <LanguageProvider>
      <div className="min-h-screen bg-ivory-50">
        {/* Utility component to scroll to top on route changes */}
        <ScrollToTop />
        
        {/* Main navigation header */}
        <Header />
        
        {/* Main content area with routing */}
        <main>
          <Routes>
            {/* Primary pages */}
            <Route path="/" element={<Home />} />
            <Route path="/vasectomy" element={<Vasectomy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/about" element={<About />} />
            
            {/* Legacy route redirect - maintains SEO for old French URL */}
            <Route path="/rendez-vous" element={<Appointments />} />
          </Routes>
        </main>
        
        {/* Site footer */}
        <Footer />
        
        {/* Conditionally rendered floating call-to-action button */}
        {showFloatingCTA && <FloatingCTA />}
      </div>
    </LanguageProvider>
  );
};

export default App;
