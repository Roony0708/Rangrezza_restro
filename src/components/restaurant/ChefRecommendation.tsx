'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { formatPrice } from '@/lib/utils';
import { menuCategories } from '@/data/menu';

const specials = menuCategories
  .flatMap(c => c.items)
  .filter(item =>
    ['Butter Chicken', 'Dal Makhani', 'Mutton Rogan Josh', 'Rangrezza Special Chicken Biryani'].includes(item.name)
  );

export default function ChefRecommendation() {
  const dish = specials[0];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  if (!dish) return null;

  return (
    <section ref={ref} className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Chef's Pride" title="Chef's Recommendation" />
        <ScrollReveal>
          <motion.div whileHover={{ scale: 1.01 }} className="relative overflow-hidden rounded-sm mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <motion.div className="absolute inset-0" style={{ y }}>
                  <Image
                    src="/images/featured/dal-makhani.webp"
                    alt="Dal Makhani"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
              <div className="bg-gradient-to-br from-charcoal to-dark p-12 flex flex-col justify-center">
                <span className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Chef&apos;s Special</span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-ivory mb-4">{dish.name}</h3>
                <p className="text-ivory/60 leading-relaxed mb-6">
                  A signature creation from our master chefs, crafted with the finest ingredients and served with unparalleled elegance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading gradient-gold font-bold">{formatPrice(dish.price)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
