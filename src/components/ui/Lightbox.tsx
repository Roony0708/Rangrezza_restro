'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-ivory/60 hover:text-ivory text-3xl z-10">&times;</button>
          {images.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-gold text-4xl z-10">&lsaquo;</button>
              <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-gold text-4xl z-10">&rsaquo;</button>
            </>
          )}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl aspect-[4/3] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={current.src} alt={current.alt} fill className="object-contain" sizes="(max-width: 1200px) 100vw, 1200px" />
          </motion.div>
          <div className="absolute bottom-6 text-ivory/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
