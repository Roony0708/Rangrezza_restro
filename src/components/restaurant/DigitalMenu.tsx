'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { menuCategories } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const category = menuCategories.find(c => c.id === activeCategory);
    if (!category) return [];
    if (!searchQuery.trim()) return category.items;
    const q = searchQuery.toLowerCase();
    return category.items.filter(item =>
      item.name.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-24 px-4 bg-dark" id="digital-menu">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Explore" title="Our Digital Menu" />
        
        <div className="flex flex-col items-center gap-6 mb-12 mt-16">
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gold text-dark font-medium'
                    : 'border border-gold/20 text-ivory/60 hover:border-gold/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-3 bg-transparent border border-gold/20 text-ivory placeholder:text-ivory/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-heading text-ivory mb-2">{menuCategories.find(c => c.id === activeCategory)?.name}</h3>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="glass-card p-5 flex items-center justify-between group hover:border-gold/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  {item.type && (
                    <span className={`w-2 h-2 rounded-full shrink-0 ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`} />
                  )}
                  <h4 className="text-base font-medium text-ivory group-hover:text-gold transition-colors">{item.name}</h4>
                </div>
                <span className="text-gold font-medium text-sm whitespace-nowrap ml-4">{formatPrice(item.price)}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
