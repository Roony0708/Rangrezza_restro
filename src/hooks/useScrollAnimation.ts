'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(ref: React.RefObject<HTMLElement | null>, options?: gsap.TweenVars) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        ...options,
      });
    });

    return () => ctx.revert();
  }, [ref, options]);
}

export function useParallax(ref: React.RefObject<HTMLElement | null>, speed: number = 0.5) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
}

export function useTextReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.textContent?.split('');
    if (!chars) return;

    el.textContent = '';
    const wrapper = document.createElement('span');
    wrapper.style.display = 'inline-block';
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      wrapper.appendChild(span);
    });
    el.appendChild(wrapper);

    const ctx = gsap.context(() => {
      gsap.to(wrapper.children, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [ref]);
}
