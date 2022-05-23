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
      <div className="featuredProject  h-80">
        <FeaturedProject />
      </div>
      <CustomDivider orientation="vertical" />
      <div className="recommendedProjects flex ">salam</div>
    </div>
  );
};

export default Showcase;
