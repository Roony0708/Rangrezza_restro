'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Guest Voices" title="What Our Guests Say" />
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none mt-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-card p-8 min-w-[350px] md:min-w-[400px] snap-start flex-shrink-0"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-ivory/70 leading-relaxed mb-6 italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium text-sm">{t.name}</h4>
                    <p className="text-ivory/40 text-xs">{t.role}</p>
                  </div>
                  {t.event && (
                    <span className="ml-auto text-[10px] tracking-widest uppercase px-3 py-1 border border-gold/20 text-gold rounded-full">
                      {t.event}
                    </span>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
