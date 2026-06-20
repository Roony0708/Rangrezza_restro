'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/data/siteConfig';

const contactDetails: { icon: string; title: string; content: string; subtitle?: string }[] = [
  { icon: '🏛️', title: 'Civil Lines', content: siteConfig.locations[0].address, subtitle: siteConfig.locations[0].name },
  { icon: '📍', title: 'Medical College Road', content: siteConfig.locations[1].address, subtitle: siteConfig.locations[1].name },
  { icon: '📞', title: 'Phone', content: siteConfig.phone },
  { icon: '✉️', title: 'Email', content: siteConfig.email },
];

export default function ContactInfo() {
  return (
    <section className="py-20 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, i) => (
            <ScrollReveal key={detail.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="glass-card p-6 text-center h-full">
                <span className="text-4xl block mb-4">{detail.icon}</span>
                <h3 className="text-base font-heading font-bold text-ivory mb-2">{detail.title}</h3>
                {detail.subtitle && (
                  <p className="text-gold text-xs tracking-wider mb-1">{detail.subtitle}</p>
                )}
                <p className="text-ivory/60 text-sm leading-relaxed">{detail.content}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
