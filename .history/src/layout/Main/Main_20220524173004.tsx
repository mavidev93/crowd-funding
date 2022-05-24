/** @format */

//Application
import MainTitle from "./MainTitle";
import Showcase from "../../features/showcase/Showcase";
import HottestProjects from "../../features/HottestProjects/HottestProjects";
import Carousel from '../../'
function Main() {
  return (
    <section className="mx-auto px-3 md:max-w-screen-xl ">
      <MainTitle />
      <Showcase />
      <HottestProjects />
    </section>
  );
}

export default Main;
