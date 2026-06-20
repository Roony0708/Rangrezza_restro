'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

const banquetTestimonials = testimonials.filter(t => t.event?.toLowerCase().includes('wedding') || t.event?.toLowerCase().includes('corporate'));

export default function BanquetTestimonials() {
  const display = banquetTestimonials.length > 0 ? banquetTestimonials : testimonials.slice(0, 2);
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Client Stories" title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {display.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (<span key={i} className="text-gold">★</span>))}
                </div>
                <p className="text-ivory/60 italic leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-ivory text-sm font-medium">{t.name}</p>
                    <p className="text-ivory/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
