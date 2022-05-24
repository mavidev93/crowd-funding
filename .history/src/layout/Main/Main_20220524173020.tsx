/** @format */

//Application
import MainTitle from "./MainTitle";
import Showcase from "../../features/showcase/Showcase";
import HottestProjects from "../../features/HottestProjects/HottestProjects";
import Carousel from '../../features/carousel/Carousel'
function Main() {
  return (
    <section className="mx-auto px-3 md:max-w-screen-xl ">
      <MainTitle />
      <Showcase />
      <HottestProjects />
      <Carousel
    </section>
  );
}

export default Main;
