/** @format */

//Application
import MainTitle from "./MainTitle";
import Showcase from "../../features/showcase/Showcase";
import FeaturesCarousel from "../../features/FeaturesCarousel/FeaturesCarousel";
import FreshFavorites from "../../features/FreshFavorites/FreshFavorites";

function Main() {
  return (
    <section className="mx-auto px-3 md:max-w-screen-xl ">
      <MainTitle />
      <Showcase />
      <FreshFavorites />
      <FeaturesCarousel  />

    </section>
  );
}

export default Main;
