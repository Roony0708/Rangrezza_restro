import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import SignatureExperiences from "@/components/home/SignatureExperiences";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Testimonials from "@/components/home/Testimonials";
import EventHighlights from "@/components/home/EventHighlights";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SignatureExperiences />
      <FeaturedDishes />
      <Testimonials />
      <EventHighlights />
      <CTASection />
    </>
  );
}
