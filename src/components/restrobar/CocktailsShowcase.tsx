'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { formatPrice } from '@/lib/utils';
import { menuCategories } from '@/data/menu';

const cocktails = menuCategories.find(c => c.id === 'mocktails')?.items || [];

export default function CocktailsShowcase() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Mixology Masters" title="Signature Mocktails" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {cocktails.map((drink, i) => (
            <ScrollReveal key={drink.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card p-5 flex items-center justify-between group"
              >
                <h3 className="text-base font-medium text-ivory group-hover:text-gold transition-colors">{drink.name}</h3>
                <span className="text-gold font-medium text-sm">{formatPrice(drink.price)}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
