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
      <div className="featuredProject basis-2/4	 h-80">
        <FeaturedProject />
      </div>
      <CustomDivider orientation="vertical" />
      <div className="recommendedProjects basis-2/4	 ">salam</div>
    </div>
  );
};

export default Showcase;
