'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const eventTypes = [
  { icon: '💍', title: 'Wedding', description: 'Your fairytale wedding in our magnificent halls with royal decor and gourmet dining.', capacity: 'Up to 1000 guests' },
  { icon: '🥂', title: 'Reception', description: 'Elegant receptions that dazzle your guests with sophistication and style.', capacity: 'Up to 800 guests' },
  { icon: '🎯', title: 'Corporate', description: 'Impressive corporate events, conferences, and galas with world-class amenities.', capacity: 'Up to 500 guests' },
  { icon: '🎂', title: 'Birthday', description: 'Celebrate your special day with grandeur and joy.', capacity: 'Up to 200 guests' },
  { icon: '💕', title: 'Anniversary', description: 'Renew your vows and celebrate love in the most elegant way.', capacity: 'Up to 300 guests' },
  { icon: '🌙', title: 'Walima', description: 'Traditional wedding feast served with utmost grandeur and hospitality.', capacity: 'Up to 1000 guests' },
];

export default function EventTypes() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Perfect Occasions" title="Events We Host" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {eventTypes.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="glass-card p-8 text-center group cursor-pointer">
                <span className="text-5xl block mb-6">{event.icon}</span>
                <h3 className="text-2xl font-heading font-bold text-ivory mb-3 group-hover:text-gold transition-colors">{event.title}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed mb-4">{event.description}</p>
                <span className="text-xs tracking-wider text-gold">{event.capacity}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
