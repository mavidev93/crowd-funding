/** @format */

//React
import React from "react";

//Third party

//App
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import FeaturedProject from "./FeaturedProject";

const FeaturedProjectDummy = {text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}

const Showcase = () => {
  return (
    <div className="flex ">
      <div className="featuredProject basis-2/4	p-3 ">
        <FeaturedProject  />
      </div>
      <CustomDivider orientation="vertical" />
      <div className="recommendedProjects basis-2/4	p-3 ">salam</div>
    </div>
  );
};

export default Showcase;
