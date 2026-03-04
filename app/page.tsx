'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { Mail } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import FloatingShapes from './components/FloatingShapes';
import SplashScreen from './components/SplashScreen';
import LegalFactsModal from './components/LegalFactsModal';
import BrandLogo from './components/BrandLogo';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showFactsModal, setShowFactsModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Remove URL hash on page load/refresh so carrilloabgd.com/#contacto
  // doesn't persist and the page always starts from the top.
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  // Scroll-aware header: increases opacity and adds shadow after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen overflow-hidden bg-[#050505]">
        {/* Background effects */}
        <ParticlesBackground />
        <FloatingShapes />
        <div className="fixed inset-0 bg-gradient-to-br from-carrillo-blue-dark/10 via-transparent to-black/80 pointer-events-none z-[1]" />

        {/* Main content */}
        <div className="relative z-10">
          <LegalFactsModal isOpen={showFactsModal} onClose={() => setShowFactsModal(false)} />

          {/* Header */}
          <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${scrolled ? 'bg-black/70 border-white/10 shadow-xl shadow-black/30' : 'bg-black/10 border-white/5'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
              {!showSplash && (
                <BrandLogo
                  variant="header"
                  layoutId="brand-logo"
                  onClick={() => setShowFactsModal(true)}
                />
              )}

              <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm ml-auto" aria-label="Navegación principal">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=asesora@carrilloabgd.com&subject=Consulta%20Legal%20-%20Carrillo%20ABGD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-carrillo-orange/20 transition-all duration-300 hover:scale-105 hover:border-carrillo-orange/40"
                  aria-label="Enviar correo electrónico"
                >
                  <Mail className="w-4 h-4 text-carrillo-blue-light group-hover:text-white transition-colors" />
                  <span className="text-white font-medium">Escríbenos</span>
                </a>
                <div className="w-px h-5 bg-white/10" aria-hidden="true" />
                <span className="text-carrillo-blue-light tracking-wide font-medium">Coming 2026</span>
              </nav>

              <a
                href="mailto:asesora@carrilloabgd.com?subject=Consulta%20Legal%20-%20Carrillo%20ABGD"
                className="md:hidden ml-auto flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10"
                aria-label="Enviar correo electrónico"
              >
                <Mail className="w-4 h-4 text-carrillo-blue-light" />
              </a>
            </div>
          </header>

          {/* Page sections */}
          <main>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <NewsletterSection />
          </main>

          <Footer />

          {/* Splash screen */}
          <AnimatePresence mode="wait">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
          </AnimatePresence>

          {/* Floating action buttons */}
          {!showSplash && <FloatingActions />}
        </div>
      </div>
    </LayoutGroup>
  );
}
