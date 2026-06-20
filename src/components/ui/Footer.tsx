'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-charcoal to-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-heading gradient-gold font-bold mb-6 tracking-wide">RANGREZZA</h3>
            <p className="text-ivory/70 leading-relaxed mb-8 text-base">
            Rangrezza, with its exquisite charm and inviting atmosphere, became not just a place to eat, but an emotional refuge for Gorakhpur&apos;s residents. It was where we sought solace in the comforting embrace of good food, where we celebrated life&apos;s joys, and where we found a slice of heaven on our plates.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/rangrezza" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="https://facebook.com/rangrezza" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com/@rangrezza" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.25em] uppercase text-gold font-medium mb-8">Quick Links</h4>
            <div className="space-y-4">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block text-ivory/60 hover:text-gold text-base transition-all duration-300 hover:translate-x-1">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-[0.25em] uppercase text-gold font-medium mb-8">Our Locations</h4>
            <div className="space-y-6">
              {siteConfig.locations.map((loc, i) => (
                <div key={i}>
                  <p className="text-ivory font-medium text-sm mb-1">{loc.name}</p>
                  <p className="text-ivory/50 text-sm leading-relaxed">{loc.address}</p>
                </div>
              ))}
              <div className="pt-2 space-y-2">
                <p className="text-ivory/70 text-sm flex items-center gap-3">
                  <span className="text-gold text-base">📞</span>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">{siteConfig.phone}</a>
                </p>
                <p className="text-ivory/70 text-sm flex items-center gap-3">
                  <span className="text-gold text-base">✉️</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-[0.25em] uppercase text-gold font-medium mb-8">Hours</h4>
            <div className="space-y-4">
              <div className="glass-card p-4">
                <p className="text-ivory font-medium text-sm">🍽 Fine Dining Restaurant</p>
                <p className="text-ivory/50 text-sm mt-1">{siteConfig.hours.restaurant}</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-ivory font-medium text-sm">💍 Grand Banquet Hall</p>
                <p className="text-ivory/50 text-sm mt-1">{siteConfig.hours.banquet}</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-ivory font-medium text-sm">🍸 Neurons Restrobar</p>
                <p className="text-ivory/50 text-sm mt-1">{siteConfig.hours.restrobar}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Rangrezza. All rights reserved.
          </p>
          <p className="text-ivory/30 text-xs tracking-wider">
            Crafted with passion · Where Flavours Paint Memories
          </p>
        </div>
      </div>
    </footer>
  );
}
