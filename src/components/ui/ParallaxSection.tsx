'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  bgImage: string;
  className?: string;
  speed?: number;
}

export default function ParallaxSection({ children, bgImage, className = '', speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, y }}
      />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
