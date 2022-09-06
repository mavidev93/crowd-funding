/** @format */

//React
import React, { lazy, Suspense, Fragment } from "react";

//Third Party
import { Routes, Route, Outlet } from "react-router-dom";
import loadable from "@loadable/component";
import { nanoid } from "nanoid";
//Application
import DefaultLayout from "../layout/DefaultLayout";
import CustomLinerProgress from "../components/LinerProgress/LinerProgress/CustomLinerProgress";

const Loading = () => <CustomLinerProgress/>

const Main = loadable(() => import("../layout/Main/Main"), {
  fallback: Loading(),
});
const CreateNewProject = loadable(() => import("../pages/CreateNewProject"), {
  fallback: Loading(),
});
const SingleCampaignPage = loadable(
  () => import("../pages/SingleCampaignPage"),
  {
    fallback: Loading(),
  }
);
const FundedCampaigns = loadable(
  () => import("../features/FundedCampaigns/FundedCampaigns"),
  {
    fallback: Loading(),
  }
);

const CreatedCampaigns = loadable(
  () => import("../features/CreatedCampaigns/CreatedCampaigns"),
  {
    fallback: Loading(),
  }
);

const roots = [
  // { url: "/", component: Main },
  { url: "/create-campaign", component: CreateNewProject },
  { url: "/campaigns/:campaignTitle", component: SingleCampaignPage },
  { url: "/user/created-campaigns", component: CreatedCampaigns },
  { url: "/user/funded-campaigns", component: FundedCampaigns },
];

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Main />} />
          {roots.map((r) => (
            <Route key={nanoid()} path={r.url} element={<r.component />} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
