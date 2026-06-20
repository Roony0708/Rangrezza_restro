'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const images = [
  '/images/rangrezza3.0/1000283326.jpg',
  '/images/rangrezza3.0/1000283334.jpg',
  '/images/rangrezza3.0/4146656f-46a0-4771-970d-58f18f4e1df7.jpg',
  '/images/rangrezza3.0/5a170278-839f-46f3-9c8d-cbe51412f6e0.jpg',
  '/images/rangrezza3.0/6b334173-7560-45e8-814a-38b091dde3eb.jpg',
  '/images/rangrezza3.0/6b85cee7-11db-4113-bbb6-388428aa6be4.jpg',
  '/images/rangrezza3.0/8da6e035-6599-4c48-b8da-93f0a5c72018.jpg',
  '/images/rangrezza3.0/c9c91e88-7449-4453-b09b-d5fbb465a70e.jpg',
];

export default function FoodGallery() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="New Opening" title="Rangrezza 3.0" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">
          {images.map((src, i) => (
            <motion.div
              key={`${src}-${i}`}
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
      </div>
    </section>
  );
}
