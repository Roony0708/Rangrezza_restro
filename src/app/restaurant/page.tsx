import RestaurantHero from "@/components/restaurant/RestaurantHero";
import StorySection from "@/components/restaurant/StorySection";
import SignatureDishes from "@/components/restaurant/SignatureDishes";
import FoodGallery from "@/components/restaurant/FoodGallery";
import ChefRecommendation from "@/components/restaurant/ChefRecommendation";
import DigitalMenu from "@/components/restaurant/DigitalMenu";
import ReservationCTA from "@/components/restaurant/ReservationCTA";

export default function RestaurantPage() {
  return (
    <>
      <RestaurantHero />
      <StorySection />
      <SignatureDishes />
      <FoodGallery />
      <ChefRecommendation />
      <DigitalMenu />
      <ReservationCTA />
    </>
  );
}
