'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const stats = [
  { value: '5', label: 'Master Chefs' },
  { value: '150+', label: 'Signature Dishes' },
  { value: '12', label: 'Awards Won' },
];

export default function StorySection() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Our Journey" title="A Passion for Perfection" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/images/about-side.jpg" alt="Restaurant Interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-ivory/70 leading-relaxed text-lg">
                At Rangrezza Restaurant, every dish is a masterpiece crafted by our team of world-class chefs. 
                We blend traditional Indian culinary heritage with modern gastronomic techniques.
              </p>
              <p className="text-ivory/50 leading-relaxed">
                Our kitchen sources the finest ingredients from across India, ensuring each plate tells a story of 
                authenticity and innovation. The ambiance echoes the warmth of Indian hospitality while exuding 
                contemporary elegance.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center glass-card p-4">
                    <div className="text-3xl font-heading font-bold gradient-gold">{stat.value}</div>
                    <div className="text-xs text-ivory/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
