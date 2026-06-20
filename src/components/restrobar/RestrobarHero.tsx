'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-gold/20 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30 - Math.random() * 40], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

export default function RestrobarHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current?.children || [], { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/restrobar/0dd44ee9-b13c-4ae4-bc0b-fbe247665cc5.jpg')" }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/60 to-dark/95" />
      <FloatingParticles />
      <div ref={textRef} className="relative z-10 text-center px-4">
        <span className="text-base tracking-[0.4em] uppercase text-gold block mb-4 font-semibold">The Nightlife Destination</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-ivory mb-4">NEURONS</h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-subheading text-ivory/80 italic">Where Nights Come Alive</p>
      </div>
      <div className="scroll-indicator">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
