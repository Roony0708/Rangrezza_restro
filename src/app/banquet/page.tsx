import BanquetHero from "@/components/banquet/BanquetHero";
import EventTypes from "@/components/banquet/EventTypes";
import CapacitySection from "@/components/banquet/CapacitySection";
import EventGallery from "@/components/banquet/EventGallery";
import BookingProcess from "@/components/banquet/BookingProcess";
import BanquetTestimonials from "@/components/banquet/BanquetTestimonials";
import InquiryCTA from "@/components/banquet/InquiryCTA";

export default function BanquetPage() {
  return (
    <>
      <BanquetHero />
      <EventTypes />
      <CapacitySection />
      <EventGallery />
      <BookingProcess />
      <BanquetTestimonials />
      <InquiryCTA />
    </>
  );
}
