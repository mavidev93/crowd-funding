/** @format */

//React
import React from "react";

//Third party

//App
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import FeaturedProject from "./FeaturedProject";

const FeaturedProjectsDummy = {

    text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    title: "lizards",
    imgSrc:
      "https://images.unsplash.com/photo-1653155864141-57b96ee8216f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127",
    id: "fjkdf",
  },


const Showcase = () => {
  return (
    <div className="flex ">
      <div className="featuredProject basis-2/4	p-3 ">
        <FeaturedProject  text={FeaturedProjectsDummy.text} title={FeaturedProjectsDummy.title} id={d} />
      </div>
      <CustomDivider orientation="vertical" />
      <div className="recommendedProjects basis-2/4	p-3 ">salam</div>
    </div>
  );
};

export default Showcase;
