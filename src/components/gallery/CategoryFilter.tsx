'use client';

import { motion } from 'framer-motion';
import { galleryCategories } from '@/data/gallery';

interface CategoryFilterProps {
  active: string;
  onSelect: (id: string) => void;
}

export default function CategoryFilter({ active, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {galleryCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 ${
            active === cat.id
              ? 'bg-gold text-dark font-medium'
              : 'border border-gold/20 text-ivory/60 hover:border-gold/50'
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
