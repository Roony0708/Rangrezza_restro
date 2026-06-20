'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/acc.jpg')", y, scale }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/90" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 0.8, 0], y: [0, -60] } : {}}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeOut',
            }}
            style={{
              left: `${15 + i * 15}%`,
              bottom: '20%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-gold block mb-6"
        >
          Join Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-heading font-bold text-ivory mb-6"
        >
          Ready for an <span className="gradient-gold">Unforgettable</span> Experience?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="text-ivory/60 text-lg mb-10 max-w-2xl mx-auto"
        >
          Whether it&apos;s an intimate dinner or a grand celebration, we&apos;re here to make it extraordinary.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className="inline-block px-10 py-4 bg-gold text-dark text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors">
              Book a Table
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/banquet" className="inline-block px-10 py-4 border border-gold/40 text-ivory text-sm tracking-widest uppercase font-medium hover:bg-gold/10 transition-colors">
              Plan an Event
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
