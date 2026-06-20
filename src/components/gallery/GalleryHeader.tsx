'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function GalleryHeader() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/1000283352.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
      <div className="relative z-10 text-center px-4">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.4em] uppercase text-gold block mb-4">Our World</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-ivory">GALLERY</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-subheading text-ivory/70 italic mt-2">A Visual Journey Through Rangrezza</motion.p>
      </div>
    </section>
  );
}
