'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from './SmoothScroll';

export interface ServiceStep {
  title: string;
  description: string;
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  tagline: string;
  steps: ServiceStep[];
  metric: string;
  index?: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  steps,
  metric,
  index = 0,
  isOpen,
  onToggle,
}: ServiceCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(0, 242, 255, 0.07),
      transparent 80%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={!isOpen ? handleMouseMove : undefined}
      className={`relative rounded-3xl border transition-[border-color,box-shadow,background-color] duration-300 ${
        isOpen
          ? 'bg-[#0A0F1E] border-carrillo-cyan/25 shadow-xl shadow-carrillo-cyan/10'
          : 'bg-white/5 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-carrillo-cyan/5'
      }`}
    >
      {/* Cursor spotlight — collapsed only */}
      {!isOpen && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-200"
          style={{ background: spotlightBg }}
        />
      )}

      {/* ── Card header — always visible ─────────────────────── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`service-steps-${index}`}
        className="w-full text-left p-6 sm:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-carrillo-cyan/40 rounded-3xl"
      >
        <div className="flex items-center justify-between gap-3 mb-5">
          {/* Icon */}
          <div
            className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border shadow-inner transition-all duration-300 flex-shrink-0 ${
              isOpen
                ? 'bg-gradient-to-br from-carrillo-cyan/15 to-carrillo-blue-dark/30 border-carrillo-cyan/30'
                : 'bg-gradient-to-br from-white/10 to-transparent border-white/10'
            }`}
          >
            <span
              className={`transition-colors duration-300 ${
                isOpen ? 'text-carrillo-cyan' : 'text-carrillo-blue-light'
              }`}
            >
              {icon}
            </span>
            {/* Cian accent dot — Regla de Oro 10% */}
            <span
              className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-carrillo-cyan transition-opacity duration-300 ${
                isOpen ? 'opacity-60' : 'opacity-0'
              }`}
            />
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`flex-shrink-0 transition-colors duration-300 ${
              isOpen ? 'text-carrillo-cyan' : 'text-carrillo-blue-light/50'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        <h3 className="text-xl font-black text-white mb-2 leading-tight">{title}</h3>
        <p className="text-carrillo-gray text-sm leading-relaxed">{tagline}</p>

        {/* "Ver proceso" hint — fades out when open */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="mt-4 flex items-center gap-1.5 text-carrillo-cyan/70 text-xs font-semibold uppercase tracking-wider"
            >
              <span>Ver proceso</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* ── Expanded content — Process Reveal ─────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`service-steps-${index}`}
            key="steps-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              {/* Divider with cian gradient */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-carrillo-cyan/30 to-transparent mb-6" />

              {/* Process steps — "Circuito Legal" */}
              <div className="relative">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-4 pb-5 last:pb-0"
                  >
                    {/* Circuito Legal — vertical connector line between steps */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-[17px] top-9 bottom-0 w-px overflow-hidden">
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.07 + 0.15,
                            ease: 'easeOut',
                          }}
                          className="h-full w-full bg-gradient-to-b from-carrillo-cyan/50 to-carrillo-blue/20 origin-top"
                        />
                      </div>
                    )}

                    {/* Step number — cian circle node */}
                    <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full border border-carrillo-cyan/40 bg-carrillo-cyan/10 flex items-center justify-center">
                      <span className="text-carrillo-cyan text-[11px] font-black tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Step text */}
                    <div className="pt-0.5 min-w-0">
                      <p className="text-white text-sm font-semibold mb-0.5 leading-snug">
                        {step.title}
                      </p>
                      <p className="text-carrillo-gray/75 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Credibility metric */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: steps.length * 0.07 + 0.1 }}
                className="mt-5 py-2.5 px-4 rounded-xl bg-carrillo-blue-dark/25 border border-carrillo-blue/20"
              >
                <p className="text-carrillo-blue-light text-xs font-medium text-center tracking-wide">
                  {metric}
                </p>
              </motion.div>

              {/* CTA — naranja, conversión */}
              <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: steps.length * 0.07 + 0.2 }}
                onClick={() => scrollToSection('contacto')}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-carrillo-orange text-white text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-200 cursor-pointer"
              >
                Solicitar consulta gratuita
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
