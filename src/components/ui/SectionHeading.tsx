'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xs tracking-[0.3em] uppercase block mb-4 ${light ? 'text-ivory/40' : 'text-gold'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight ${
          light ? 'text-ivory' : ''
        }`}
      >
        {title.includes(' ') ? (
          title.split(' ').map((word, i) => (
            <span key={i}>
              {i === title.split(' ').length - 2 ? (
                <span className="gradient-gold">{word} </span>
              ) : i === title.split(' ').length - 1 ? (
                <span className="gradient-gold">{word}</span>
              ) : (
                <span>{word} </span>
              )}
            </span>
          ))
        ) : (
          <span className="gradient-gold">{title}</span>
        )}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-0.5 w-20 mt-6 ${centered ? 'mx-auto' : ''} bg-gradient-to-r from-gold to-gold-light`}
      />
    </div>
  );
}
