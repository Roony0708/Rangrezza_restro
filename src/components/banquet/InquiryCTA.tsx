'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function InquiryCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/banquet.jpg')", y }} />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-ivory mb-6">
          Plan Your <span className="gradient-gold">Perfect Event</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-ivory/60 mb-10 max-w-xl mx-auto">
          Let us create an unforgettable experience for your special occasion.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-10 py-4 bg-gold text-dark text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors">
            Send Inquiry
          </Link>
          <Link href="/gallery" className="px-10 py-4 border border-gold/40 text-ivory text-sm tracking-widest uppercase font-medium hover:bg-gold/10 transition-colors">
            View Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
