/** @format */

//Application
import MainTitle from "./MainTitle";
import Showcase from "../../features/showcase/Showcase";
import HottestProjects from "../../features/HottestProjects/HottestProjects";
import FeaturesCarousel from "../../features/featuresCarousel/FeaturesCarousel";
import FreshFavorites from "../../features/FreshFavorites/FreshFavorites";

function Main() {
  return (
    <section className="mx-auto px-3 md:max-w-screen-xl ">
      <MainTitle />
      <Showcase />
      {/* <HottestProjects />

      <NewestProjects/> */}
      <FreshFavorites />
      <FeaturesCarousel  />

    </section>
  );
}

export default Main;
