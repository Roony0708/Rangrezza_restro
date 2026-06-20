'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '200+', label: 'Signature Dishes' },
  { value: '50K+', label: 'Happy Guests' },
];

export default function AboutPreview() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Our Story" title="A Legacy of Exquisite Flavours" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image src="/images/about-side.jpg" alt="Rangrezza Ambiance" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 flex items-center justify-center bg-dark/80 backdrop-blur">
                <span className="text-gold font-heading text-3xl">✦</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-ivory/70 leading-relaxed text-lg">
                Born from a passion for culinary excellence, Rangrezza stands as a testament to the rich tapestry of Indian hospitality. 
                Every dish tells a story, every corner whispers elegance, and every guest becomes family.
              </p>
              <p className="text-ivory/50 leading-relaxed">
                Our master chefs blend traditional recipes with contemporary techniques, creating an experience that transcends 
                mere dining. From intimate dinners to grand celebrations, we craft moments that linger forever.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center glass-card p-4"
                  >
                    <div className="text-2xl md:text-3xl font-heading font-bold gradient-gold">{stat.value}</div>
                    <div className="text-xs text-ivory/50 mt-1 tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
