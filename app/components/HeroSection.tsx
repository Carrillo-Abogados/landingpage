'use client';

import { motion } from 'framer-motion';
import Countdown from './Countdown';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 pt-28 sm:pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto w-full relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-carrillo-cyan opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-carrillo-cyan"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-carrillo-blue-light font-bold">Conmemoración de los 30 años de ABGD - Firma 100% LegalTech en Colombia</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 sm:space-y-6 mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.9] tracking-tighter">
            <span className="block text-white">EL FUTURO</span>
            <span className="block bg-gradient-to-r from-carrillo-blue-light via-white to-carrillo-blue-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] pb-2 sm:pb-4">
              ES AHORA
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-carrillo-gray/80 font-light max-w-3xl mx-auto leading-relaxed px-2"
          >
            Nuestra solidez se basa en{' '}
            <span className="text-white font-medium">30 años de experiencia legal</span>{' '}
            que nos impulsó a evolucionar y ser hoy la{' '}
            <span className="text-white font-medium">primera firma 100% LegalTech en Colombia</span>,
            garantizando un servicio de vanguardia.
          </motion.p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative flex flex-col items-center"
        >
          <Countdown />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <p className="text-carrillo-blue-light text-sm uppercase tracking-widest font-bold mb-1">Fecha de conmemoración</p>
            <p className="text-xl sm:text-2xl text-white font-light">9 de Abril de 2026 — 6:00 PM</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
