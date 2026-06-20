'use client';

import { LocationMap } from '@/components/ui/expand-map';
import SectionHeading from '@/components/ui/SectionHeading';

export default function MapSection() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading subtitle="Find Us" title="Our Location" />
        <div className="mt-16 flex justify-center">
          <LocationMap
            location="Rangrezza, Gorakhpur"
            coordinates="26.7529° N, 83.3790° E"
          />
        </div>
      </div>
    </section>
  );
}
