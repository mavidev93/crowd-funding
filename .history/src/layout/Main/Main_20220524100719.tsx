/** @format */

//Application
import MainTitle from "./MainTitle";
import Showcase from "../../features/showcase/Showcase";
import HottestProjects from "../../features/hottestProjects/hottestProjects";
function Main() {
  return (
    <section className="mx-auto px-3 md:max-w-screen-xl ">
      <MainTitle />
      <Showcase />
    </section>
  );
}

export default Main;
