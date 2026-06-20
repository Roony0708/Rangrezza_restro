'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { menuCategories } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

const highlights = menuCategories
  .flatMap(c => c.items)
  .filter(item =>
    ['Butter Chicken', 'Dal Makhani', 'Paneer Butter Masala', 'Rangrezza Special Chicken Biryani', 'Mutton Rogan Josh', 'Gulab Jamun'].includes(item.name)
  );

export default function SignatureDishes() {
  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Chef's Selection" title="Signature Dishes" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="glass-card p-6 group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading font-bold text-ivory group-hover:text-gold transition-colors">{item.name}</h3>
                  <span className="text-gold font-medium text-sm">{formatPrice(item.price)}</span>
                </div>
                {item.type && (
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.type === 'veg' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {item.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
