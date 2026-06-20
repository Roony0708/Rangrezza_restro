'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const images = [
  '/images/featured/0ca08d20-997f-4531-b73e-1198a54867b7.jpg',
  '/images/featured/2d4c1a2a-0080-41c1-946d-ca317bbf9e79.jpg',
  '/images/featured/343749300_466502698984443_7229654027261341480_n.jpg',
  '/images/featured/344724645_995081754820343_1951915730355438965_n.jpg',
  '/images/featured/345308796_6139823306130478_3106990488351881959_n.jpg',
  '/images/featured/346095856_772090647793094_4263545601177436718_n.jpg',
  '/images/featured/4cc6c75e-c2df-4045-833f-abd36d7a75dd.jpg',
  '/images/featured/6cdaa66e-08cb-4c11-963f-8b826b3d6904.jpg',
  '/images/featured/76ef9b0f-bebd-46b2-a81f-612512828299.jpg',
  '/images/featured/95229b97-924f-412c-9884-9f2d24a05da5.jpg',
  '/images/featured/ada27f56-f93f-4a17-82af-c1bc27e36f8b.jpg',
  '/images/featured/ae03caa4-630c-4562-b0d7-42106b048f68.jpg',
  '/images/featured/b40d86f8-02bc-4a7d-aa57-3e46a33f12bd.jpg',
  '/images/featured/d9731db9-07a8-4bbd-88bd-cdb918bb71b3.jpg',
  '/images/featured/dafe16ce-f294-41d6-a9a7-10aa0e4d68c6.jpg',
  '/images/featured/e36cbd41-7231-4cfb-a4f7-1970fd6a8401.jpg',
];

export default function FeaturedDishes() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Culinary Art" title="Featured Dishes" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-xl shadow-black/30 transition-shadow duration-500 hover:shadow-gold/10"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl group-hover:ring-gold/30 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-14">
            <Link
              href="/restaurant"
              className="inline-flex px-10 py-3.5 border border-gold/40 text-ivory text-sm tracking-widest uppercase font-medium hover:bg-gold/10 transition-all duration-300 rounded-sm"
            >
              View Full Menu
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
