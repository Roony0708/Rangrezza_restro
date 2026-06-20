'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';

const nightlifeImages = [
  { src: '/images/restrobar/0dd44ee9-b13c-4ae4-bc0b-fbe247665cc5.jpg', alt: 'Restrobar Ambiance' },
  { src: '/images/restrobar/275193020_810409249876809_420536523145257781_n.jpg', alt: 'Night Vibe' },
  { src: '/images/restrobar/2d7e9cb3-d2e3-447f-bf40-34f1f13ae867.jpg', alt: 'Bar Setup' },
  { src: '/images/restrobar/30778fc5-32ea-4adb-8441-fc42407529c9.jpg', alt: 'Cocktails' },
  { src: '/images/restrobar/325154e3-ea78-4a3e-8eca-164109cebfe8.jpg', alt: 'Interior' },
  { src: '/images/restrobar/3d3da543-4262-4988-83fd-2bcb92a5545e.jpg', alt: 'Lighting' },
  { src: '/images/restrobar/3e26b249-d7e6-445c-91ab-a6ee97f50a74.jpg', alt: 'Bar Counter' },
  { src: '/images/restrobar/5dafc390-a7ea-45f9-aa5c-aea8bab1b224.jpg', alt: 'Drinks Display' },
  { src: '/images/restrobar/bb41ce69-75d2-4aa3-90d1-fa8825adad6d.jpg', alt: 'Evening Ambiance' },
  { src: '/images/restrobar/bd023678-2b25-4b7f-b4b1-57042e244e04.jpg', alt: 'Music Night' },
  { src: '/images/restrobar/ca8e09d7-662c-4304-bc0c-6dcc90ce206d.jpg', alt: 'Seating Area' },
  { src: '/images/restrobar/e9f5b9df-9be5-403d-a4b6-bb1cd970c65b.jpg', alt: 'Party Zone' },
];

export default function NightlifeGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Visual Vibe" title="Nightlife Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {nightlifeImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.06, duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => { setCurrentIndex(i); setLightboxOpen(true); }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden shadow-lg shadow-black/30 transition-shadow duration-500 hover:shadow-gold/10"
                style={{ aspectRatio: '1/1' }}
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
        <Lightbox images={nightlifeImages} currentIndex={currentIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex(p => (p - 1 + nightlifeImages.length) % nightlifeImages.length)}
          onNext={() => setCurrentIndex(p => (p + 1) % nightlifeImages.length)} />
      </div>
    </section>
  );
}
