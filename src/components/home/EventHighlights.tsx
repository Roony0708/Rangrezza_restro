'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const events = [
  { icon: '💍', title: 'Wedding', description: 'Your dream wedding in our magnificent halls', guests: 'Up to 1000 guests' },
  { icon: '🎯', title: 'Corporate', description: 'Impress clients with premium event spaces', guests: 'Up to 500 guests' },
  { icon: '🎂', title: 'Birthday', description: 'Celebrate life\'s special milestones', guests: 'Up to 200 guests' },
  { icon: '🥂', title: 'Reception', description: 'Elegant receptions with royal treatment', guests: 'Up to 800 guests' },
  { icon: '💕', title: 'Anniversary', description: 'Renew your love in grand style', guests: 'Up to 300 guests' },
  { icon: '🌙', title: 'Walima', description: 'Traditional wedding feast with grandeur', guests: 'Up to 1000 guests' },
];

export default function EventHighlights() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Celebrate With Us" title="Events & Occasions" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-8 text-center group cursor-pointer"
              >
                <span className="text-4xl block mb-4">{event.icon}</span>
                <h3 className="text-xl font-heading font-bold text-ivory mb-2">{event.title}</h3>
                <p className="text-ivory/50 text-sm mb-3">{event.description}</p>
                <span className="text-xs text-gold tracking-wider">{event.guests}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link href="/banquet" className="inline-flex px-10 py-3.5 bg-gold text-dark text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors">
              Plan Your Event
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
