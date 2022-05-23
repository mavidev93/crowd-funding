/** @format */

//React
import React from "react";

//Third party

//App
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import FeaturedProject from "./FeaturedProject";
const Showcase = () => {
  return (
    <div className="flex ">
      <div className="featuredProject basis-2/4	p-3 ">
        <FeaturedProject text= />
      </div>
      <CustomDivider orientation="vertical" />
      <div className="recommendedProjects basis-2/4	p-3 ">salam</div>
    </div>
  );
};

export default Showcase;
