/** @format */

//React
import React, { useState, useEffect } from "react";

//Third party
import Skeleton from "@mui/material/Skeleton";

//App
import CustomDivider from "../../components/CommonDivider/CommonDivider";
import FeaturedCampaign from "./FeaturedCampaign";
import RecommendedList from "./RecommendedList";

// const FeaturedProjectsDummy = {
//   text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//   title: "lizards",
//   imgSrc:
//     "https://images.unsplash.com/photo-1653155864141-57b96ee8216f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127",
//   id: "fjkdf",
// };
const Showcase = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-1 py-2">
        <div style={{ flexBasis: "50%" }}>
          <FeaturedCampaign />
        </div>
        <div className="px-4  ">
          <CustomDivider orientation="vertical" />
        </div>
        <div style={{ flexBasis: "50%" }}>
          <RecommendedList />
        </div>
      </div>
      <CustomDivider className="my-12" />
    </div>
  );
};

export default Showcase;
