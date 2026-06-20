'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const vibes = [
  { icon: '🎵', title: 'Live Music', description: 'Talented artists performing every night across genres' },
  { icon: '🎧', title: 'DJ Nights', description: 'Top DJs spinning the best tracks till late' },
  { icon: '🎤', title: 'Karaoke', description: 'Sing your heart out on our premium sound system' },
  { icon: '💃', title: 'Dance Floor', description: 'State-of-the-art lighting and sound system' },
];

export default function MusicVibes() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Feel The Beat" title="Music & Vibes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {vibes.map((vibe, i) => (
            <ScrollReveal key={vibe.title} delay={i * 0.1}>
              <div className="glass-card p-8 text-center group hover:border-gold/40 transition-all">
                <span className="text-5xl block mb-4">{vibe.icon}</span>
                <h3 className="text-lg font-heading font-bold text-ivory group-hover:text-gold transition-colors mb-2">{vibe.title}</h3>
                <p className="text-ivory/50 text-sm">{vibe.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
