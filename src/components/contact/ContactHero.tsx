'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/1000283334.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
      <div className="relative z-10 text-center px-4">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs tracking-[0.4em] uppercase text-gold block mb-4">Get In Touch</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold text-ivory">CONTACT</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg font-subheading text-ivory/70 italic mt-2">We&apos;d Love to Hear From You</motion.p>
      </div>
    </section>
  );
}
