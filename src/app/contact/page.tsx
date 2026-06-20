import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import ContactForm from "@/components/contact/ContactForm";
import BusinessHours from "@/components/contact/BusinessHours";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <MapSection />
      <ContactForm />
      <BusinessHours />
    </>
  );
}
