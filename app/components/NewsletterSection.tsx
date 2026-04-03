'use client';

import AnimatedSection from './AnimatedSection';
import SubscriptionForm from './SubscriptionForm';

export default function NewsletterSection() {
  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 pb-24 sm:pb-32" aria-labelledby="newsletter-heading">
      <AnimatedSection className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-white">
          Sé el primero en el futuro de la abogacía
        </h2>
        <p className="text-carrillo-gray">Recibe una invitación exclusiva a la conmemoración de los 30 años de ABGD — Firma 100% LegalTech en Colombia.</p>
        <SubscriptionForm />
      </AnimatedSection>
    </section>
  );
}
