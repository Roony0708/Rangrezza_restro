'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RestrobarReservation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/restrobar/275193020_810409249876809_420536523145257781_n.jpg')", y }} />
      <div className="absolute inset-0 bg-dark/85" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-ivory mb-6">
          Ready to <span className="gradient-gold">Paint the Town</span> Red?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-ivory/60 mb-10">Reserve your table for an unforgettable night.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-gold text-dark text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors">
            Book Your Night
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
