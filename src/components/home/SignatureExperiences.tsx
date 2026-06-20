'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const experiences = [
  {
    title: 'Fine Dining Restaurant',
    description: 'Indulge in a gastronomic journey where traditional Indian flavours meet modern culinary artistry.',
    image: '/images/1000283334.jpg',
    href: '/restaurant',
    tags: ['Fine Dining', 'Signature Cuisine', 'Wine Pairing'],
  },
  {
    title: 'Grand Banquet Hall',
    description: 'Celebrate your most cherished moments in our opulent spaces designed for unforgettable events.',
    image: '/images/banquet.jpg',
    href: '/banquet',
    tags: ['Weddings', 'Corporate', 'Celebrations'],
  },
  {
    title: 'Neurons Restrobar',
    description: 'Experience the pulsating nightlife with handcrafted cocktails and electrifying ambiance.',
    image: '/images/neurons.jpg',
    href: '/restrobar',
    tags: ['Cocktails', 'Live Music', 'Nightlife'],
  },
];

export default function SignatureExperiences() {
  return (
    <section className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Our World" title="Signature Experiences" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase px-3 py-1 border border-gold/30 text-gold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-ivory mb-2">{exp.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <Link
                    href={exp.href}
                    className="inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase hover:gap-4 transition-all"
                  >
                    Explore More
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
