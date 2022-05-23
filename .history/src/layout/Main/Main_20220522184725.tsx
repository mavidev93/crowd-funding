/** @format */

//Application
import MainTitle from "./MainTitle";
import Showcase from "../../features/showcase/Showcase";
function Main() {
  return (
    <section className="mx-auto md:max-w-screen-xl max-2 bg-blue-300">
      <MainTitle />
      <Showcase />
    </section>
  );
}

export default Main;
