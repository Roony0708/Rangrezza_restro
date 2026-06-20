'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  { number: '01', title: 'Inquiry', description: 'Share your event details and requirements with us.' },
  { number: '02', title: 'Consultation', description: 'Meet our event planners to design your perfect occasion.' },
  { number: '03', title: 'Customization', description: 'Choose from our packages and personalize every detail.' },
  { number: '04', title: 'Celebration', description: 'Relax and enjoy while we bring your vision to life.' },
];

export default function BookingProcess() {
  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Simple Steps" title="Booking Process" />
        <div className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15} direction="left">
                <motion.div whileHover={{ x: 10 }} className="relative flex items-start gap-8 group">
                  <div className="hidden md:flex w-16 h-16 rounded-full glass-card items-center justify-center shrink-0 z-10 group-hover:border-gold/50 transition-colors">
                    <span className="text-gold font-heading font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <h3 className="text-xl font-heading font-bold text-ivory group-hover:text-gold transition-colors mb-2">{step.title}</h3>
                    <p className="text-ivory/50 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
