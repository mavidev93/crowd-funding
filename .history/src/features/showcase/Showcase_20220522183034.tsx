/** @format */

//React
import React from "react";

//Third party

//App
import CustomDivider from "../../components/CustomDivider/CustomDivider";

const Showcase = () => {
  return (
    <div className="flex">
      <div className="featuredProject"></div>
      <CustomDivider />
      <div className="recommendedProjects"></div>
    </div>
  );
};

export default Showcase;
