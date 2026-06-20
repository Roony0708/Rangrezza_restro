'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';

const eventImages = [
  { src: '/images/banquet/1f87bc76-9efa-4fe3-9524-14a824cea2e1.jpg', alt: 'Banquet Setup' },
  { src: '/images/banquet/21038670-041c-4e7c-8759-87609c35e5d0.jpg', alt: 'Grand Hall' },
  { src: '/images/banquet/32426d36-a4a4-4413-8c3d-409b6ed75eec.jpg', alt: 'Elegant Decor' },
  { src: '/images/banquet/336317117_4643748872415772_1173530362526624320_n.jpg', alt: 'Celebration' },
  { src: '/images/banquet/336542582_1280439159492469_3433167972840294091_n.jpg', alt: 'Dinner Setup' },
  { src: '/images/banquet/336573606_158744070447409_5005470720393818967_n.jpg', alt: 'Event Display' },
  { src: '/images/banquet/44565e21-fdf3-415a-a3a0-501fd7b056ef.jpg', alt: 'Banquet Decor' },
  { src: '/images/banquet/785e9238-5fd7-4bfb-8958-a801ac797ca2.jpg', alt: 'Hall Ambiance' },
  { src: '/images/banquet/d2ef9063-c9b1-4db6-b623-f5a1e4c4042a.jpg', alt: 'Reception Setup' },
  { src: '/images/banquet/d6a769d2-da8b-4287-84b9-911a99964e01.jpg', alt: 'Stage Decor' },
  { src: '/images/banquet/e1ac7c25-b6a4-4227-8c2b-276d3e6174c1.jpg', alt: 'Floral Arrangement' },
];

export default function EventGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Visual Stories" title="Event Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {eventImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.06, duration: 0.4 }}
              className={`group cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => openLightbox(i)}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden shadow-lg shadow-black/30 transition-shadow duration-500 hover:shadow-gold/10"
                style={{ aspectRatio: i === 0 ? '4/5' : '1/1' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl group-hover:ring-gold/30 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <Lightbox
          images={eventImages}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length)}
          onNext={() => setCurrentIndex((prev) => (prev + 1) % eventImages.length)}
        />
      </div>
    </section>
  );
}
