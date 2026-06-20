'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { formatPrice } from '@/lib/utils';
import { menuCategories } from '@/data/menu';

const drinks = menuCategories
  .flatMap(c => c.items)
  .filter(item =>
    ['Blue Heaven', 'Pina Colada', 'Blue Hawaiian', 'Virgin Mojito', 'Litchi Blitzer', 'Watermelon Fizz'].includes(item.name)
  );

export default function FeaturedDrinks() {
  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Premium Selection" title="Featured Drinks" />
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none mt-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {drinks.map((drink, i) => (
            <ScrollReveal key={drink.id} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="glass-card p-6 min-w-[240px] snap-start flex-shrink-0">
                <span className="text-3xl block mb-3">🍹</span>
                <h3 className="text-lg font-heading font-bold text-ivory mb-2">{drink.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-heading text-xl">{formatPrice(drink.price)}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
