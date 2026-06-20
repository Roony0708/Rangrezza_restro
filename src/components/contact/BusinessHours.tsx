'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';

const hours = [
  { venue: 'Fine Dining Restaurant', hours: siteConfig.hours.restaurant, icon: '🍽' },
  { venue: 'Grand Banquet Hall', hours: siteConfig.hours.banquet, icon: '💍' },
  { venue: 'Neurons Restrobar', hours: siteConfig.hours.restrobar, icon: '🍸' },
];

export default function BusinessHours() {
  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-3xl mx-auto">
        <SectionHeading subtitle="Visit Us" title="Business Hours" />
        <div className="space-y-4 mt-16">
          {hours.map((h, i) => (
            <ScrollReveal key={h.venue} delay={i * 0.1}>
              <motion.div whileHover={{ x: 10 }} className="glass-card p-6 flex items-center gap-6">
                <span className="text-3xl">{h.icon}</span>
                <div className="flex-1">
                  <h3 className="text-ivory font-heading font-bold">{h.venue}</h3>
                  <p className="text-ivory/50 text-sm">{h.hours}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
