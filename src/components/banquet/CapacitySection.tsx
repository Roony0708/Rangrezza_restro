'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const capacities = [
  { value: '1000+', label: 'Guest Capacity', desc: 'Our grand hall can accommodate' },
  { value: '50000+', label: 'Sq. Ft. Space', desc: 'Spanning across multiple halls' },
  { value: '15+', label: 'Years Experience', desc: 'Hosting memorable events' },
  { value: '500+', label: 'Events Hosted', desc: 'And countless happy memories' },
];

export default function CapacitySection() {
  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="By The Numbers" title="Our Grandeur in Numbers" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {capacities.map((cap, i) => (
            <ScrollReveal key={cap.label} delay={i * 0.1}>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-card p-8 text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-gold mb-2">{cap.value}</div>
                <div className="text-sm text-ivory font-medium mb-1">{cap.label}</div>
                <div className="text-xs text-ivory/40">{cap.desc}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
