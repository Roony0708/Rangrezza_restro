import RestrobarHero from "@/components/restrobar/RestrobarHero";
import CocktailsShowcase from "@/components/restrobar/CocktailsShowcase";
import NightlifeGallery from "@/components/restrobar/NightlifeGallery";
import MusicVibes from "@/components/restrobar/MusicVibes";
import FeaturedDrinks from "@/components/restrobar/FeaturedDrinks";
import RestrobarReservation from "@/components/restrobar/RestrobarReservation";

export default function RestrobarPage() {
  return (
    <>
      <RestrobarHero />
      <CocktailsShowcase />
      <NightlifeGallery />
      <MusicVibes />
      <FeaturedDrinks />
      <RestrobarReservation />
    </>
  );
}
