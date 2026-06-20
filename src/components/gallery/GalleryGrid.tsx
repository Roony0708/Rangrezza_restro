'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Lightbox from '@/components/ui/Lightbox';

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/20 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -40 - Math.random() * 60], opacity: [0, 0.6, 0] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: 'easeOut' }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-40 h-40 rounded-full bg-gold/5"
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

const jantaFridgeImages: { src: string; alt: string }[] = [
  '007c1374-3714-41cd-90e5-bf700939f1b5.jpg',
  '030963ce-f89e-47c5-b317-da5f6de3a9f2.jpg',
  '03921ca6-dcbd-433a-9e71-58adb2e0cf22.jpg',
  '06cbe8d9-6033-4979-a903-d041ad7ca92f.jpg',
  '0e2c0ccc-0bcc-4e92-ae9c-de9f42ddd274.jpg',
  '186a5854-5a16-4aa8-a8e3-e02fcb0f0573.jpg',
  '1aa4501e-b887-4e7e-8bd4-501bb5927178.jpg',
  '21ba2209-48a7-40e9-b482-e506aeacfec6.jpg',
  '2471c20d-f161-4104-986a-f180f8324982.jpg',
  '2ffddbde-b82c-4f05-8548-a9674a5db02b.jpg',
  '311091169_551493890312842_4837373962694535779_n.jpg',
  '311105503_551493760312855_761548989115042465_n.jpg',
  '311133969_551494920312739_625635363431417316_n.jpg',
  '3fc4777a-748d-44ab-b47a-37a3cebb906c.jpg',
  '44088622-69f9-4c28-815e-2e95be81af86.jpg',
  '4896fafa-c570-4f36-ad43-d1be6bea0979.jpg',
  '513041f6-8baf-473c-95a9-503a4a8a6414.jpg',
  '54e551a2-8b6c-4d78-8496-de93008baaeb.jpg',
  '606c9ca6-1efc-4140-aac2-279f33af9cef.jpg',
  '6807b88c-4b3b-4c27-928f-b78a13f36757.jpg',
  '682b9836-bfae-4b22-ba8d-9ea5468a5b1e.jpg',
  '7745c525-f2ff-453b-9b0a-fb7c12c089b1.jpg',
  '7b9c7f1e-5af8-4574-9e6e-efca08d44279.jpg',
  '9607bfbe-2ab0-4749-9387-677e5b07474c.jpg',
  '98796b0e-914c-46d6-b026-d0313a6be5f0.jpg',
  '990d872c-a956-4e52-a6a0-b6b9076b3575.jpg',
  '9dd18eda-1381-465c-a12c-d2450db9eedb.jpg',
  '9f3daa6e-2a46-4f99-bd2c-c77052e72d49.jpg',
  'a6452e55-8ba6-4f9f-bf94-13af8feba787.jpg',
  'b9e1377c-b799-4e93-9dae-162bdae051fd.jpg',
  'bd0791e3-a7b1-4b0c-863c-48031fb6a867.jpg',
  'becd5b7a-7156-454b-8605-6907b5d24c81.jpg',
  'bf9a6b97-316a-4765-80fd-99a98ac9f682.jpg',
  'c06798e6-8c1c-426c-9ce8-c6742431eeff.jpg',
  'c48e27fd-cfd7-470d-b5e9-cea2ac13f37a.jpg',
  'ca928c84-be21-4ca5-a884-9ba7d468d1ed.jpg',
  'caca7bc0-ffd5-477f-b14b-a729f079ff01.jpg',
  'cf40aec6-c496-4d59-9d8d-64548f3d5538.jpg',
  'cf47f2f6-09a2-4a19-bd91-df07f2b08347.jpg',
  'd01e87ee-b5c9-4eda-8794-204cd9027193.jpg',
  'de6bac81-8b3c-4ad2-bff7-5f0997823cc9.jpg',
  'fb2c4aa9-cb90-447f-a8d3-884ee56c1b77.jpg',
  'fc449774-c7dc-4886-a4f0-25b8c7cdb474.jpg',
].map(f => ({ src: `/images/janta-fridge/${f}`, alt: 'Janta Fridge' }));

const restaurantVibesImages: { src: string; alt: string }[] = [
  '08877159-b388-416b-857c-4f093defc84c.jpg',
  '374533844_763362432465308_3267106517512388673_n.jpg',
  '3d52c826-9cb3-49f4-aeff-9d929e7ae495.jpg',
  '41ebadb8-8945-4ea7-b32b-26051be82631.jpg',
  '4e32ac28-8f8a-4d41-b17c-2d2955c104c7.jpg',
  '5fa8b4a7-ab0d-4eca-9081-88b373a2afbe.jpg',
  '6024a7fe-9fe3-4c67-8b67-15da6aecbb06.jpg',
  '65c55615-8417-4c9f-874f-1ef4056fa1b3.jpg',
  '7c5fc060-69ec-4c97-9b48-631f09233638.jpg',
  'about-side.jpg',
  'd1a9809b-ee54-4b4a-87f2-2515debef0e8.jpg',
  'dfc3baf8-af47-466e-9dc3-563382be81c8.jpg',
].map(f => ({ src: `/images/restaurant-vibes/${f}`, alt: 'Restaurant Vibes' }));

export default function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: { src: string; alt: string }[], index: number) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const Section = ({ title, subtitle, images }: { title: string; subtitle: string; images: { src: string; alt: string }[] }) => (
    <section className="pb-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle={subtitle} title={title} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.06, duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(images, i)}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden shadow-lg shadow-black/30 transition-shadow duration-500 hover:shadow-gold/10"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl group-hover:ring-gold/30 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ backgroundImage: "url('/images/janta-fridge/2471c20d-f161-4104-986a-f180f8324982.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        <FloatingParticles />
        <div className="text-center px-4 z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base tracking-[0.4em] uppercase text-gold block mb-4 font-semibold"
          >
            Our World
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-6xl md:text-8xl font-heading font-bold text-ivory"
          >
            Gallery
          </motion.h1>
        </div>
      </section>
      <Section title="Janta Fridge" subtitle="Chilled Vibes" images={jantaFridgeImages} />
      <Section title="Restaurant Vibes" subtitle="Dine in Style" images={restaurantVibesImages} />
      <Lightbox images={lightboxImages} currentIndex={currentIndex} isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex(p => (p - 1 + lightboxImages.length) % lightboxImages.length)}
        onNext={() => setCurrentIndex(p => (p + 1) % lightboxImages.length)} />
    </>
  );
}
