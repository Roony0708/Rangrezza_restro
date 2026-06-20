'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2 }, '-=0.6')
      .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.8');
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/0ac84800-62bd-464f-9d15-c8efd71fa10a.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Rangrezza-Restaurant-Banquet-Rooftop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/90" />

      <FloatingParticles />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div ref={subtitleRef}>
          <span className="text-base sm:text-lg tracking-[0.4em] uppercase text-gold mb-6 block font-semibold">
            Welcome to
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-heading font-bold text-ivory leading-none mb-4">
            RANGREZZA
          </h1>
        </div>
        <p ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-subheading text-ivory/90 mb-8 italic">
          &ldquo;Where Flavours Paint Memories&rdquo;
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <span className="text-sm sm:text-base tracking-widest text-ivory/60 uppercase font-medium">Premium Dining</span>
          <span className="text-gold">·</span>
          <span className="text-sm sm:text-base tracking-widest text-ivory/60 uppercase font-medium">Banquets</span>
          <span className="text-gold">·</span>
          <span className="text-sm sm:text-base tracking-widest text-ivory/60 uppercase font-medium">Nightlife</span>
        </div>
        <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mt-10">
          <Link href="/restaurant" className="px-8 py-3.5 bg-gold text-dark text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors">
            Explore Menu
          </Link>
          <Link href="/contact" className="px-8 py-3.5 border border-gold/40 text-ivory text-sm tracking-widest uppercase font-medium hover:bg-gold/10 transition-colors">
            Reserve Now
          </Link>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
