'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fieldClass = (name: string) =>
    `w-full px-5 py-4 bg-transparent border text-sm transition-all duration-300 outline-none ${
      focusedField === name
        ? 'border-gold text-ivory'
        : 'border-ivory/15 text-ivory/80 hover:border-ivory/30'
    } placeholder:text-ivory/25`;

  const fields = [
    { name: 'name', label: 'Your Name', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'phone', label: 'Phone Number', type: 'tel' },
    {
      name: 'subject', label: 'Subject', type: 'select',
      options: ['General Inquiry', 'Restaurant Reservation', 'Banquet Booking', 'Restrobar Reservation', 'Event Planning', 'Other'],
    },
  ];

  return (
    <section className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading subtitle="Send A Message" title="Get In Touch" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="mt-16 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fields.slice(0, 2).map(field => (
                <div key={field.name}>
                  <label className="block text-xs text-ivory/40 uppercase tracking-wider mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass(field.name)}
                    required
                  />
                </div>
              ))}
            </div>
            {fields.slice(2).map(field => (
              <div key={field.name}>
                <label className="block text-xs text-ivory/40 uppercase tracking-wider mb-2">{field.label}</label>
                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass(field.name)}
                    required
                  >
                    <option value="" disabled className="bg-dark">Select Subject</option>
                    {field.options?.map(o => <option key={o} value={o} className="bg-dark">{o}</option>)}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass(field.name)}
                    required
                  />
                )}
              </div>
            ))}
            <div>
              <label className="block text-xs text-ivory/40 uppercase tracking-wider mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your event or inquiry..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`${fieldClass('message')} resize-none`}
                required
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="w-full py-4 bg-gold text-dark text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {submitted ? '✓ Message Sent' : 'Send Message'}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
