/** @format */
//React
import { useState, useEffect } from "react";
//Third Party
import { nanoid } from "nanoid";
import { Skeleton } from "@mui/material";

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import SingleRecommend from "./SingleRecommend";
import { recommendedIdes } from "../../constants";
import {recommended} from '../../constants/staticCampaigns'
type Props = {};

export default function RecommendedList() {
  const recommendations =recommended

  return (
    <div>
      <CommonTitle
        className="text-sm uppercase mt-2  mb-4	"
        text="Recommended projects"
        variant="h6"
        component="div"
      />
      <div className="flex flex-col gap-4 justify-between">
        {recommendations
          ? recommendations.map((r) => (
              <SingleRecommend
                key={r.campaignHash}
                campaign={r}
              />
            ))
          : [1, 2, 3].map((n) => (
              <Skeleton key={n} variant="rectangular" className="h-40" />
            ))}
      </div>
    </div>
  );
}
