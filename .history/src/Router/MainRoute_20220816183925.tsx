/** @format */

//React
import React, { lazy, Suspense, Fragment } from "react";

//Third Party
import { Routes, Route, Outlet } from "react-router-dom";
import loadable from "@loadable/component";

//Application
import DefaultLayout from "../layout/DefaultLayout";

const Loading = () => <div>loading ...</div>;

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
const CreatedCampaigns = loadable(
  () => import("../features/CreatedCampaigns/CreatedCampaigns")
);

const roots = [
  // { url: "/", component: Main },
  { url: "/create-campaign", component: CreateNewProject },
  { url: "/campaigns/:campaignPath", component: SingleCampaignPage },
  { url: "/", component: CreatedCampaigns },
];

function MainRoute() {
  return (
    <>
      {/* TODO: Add an spinner */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Main />} />

          {roots.map((r, i) => (
            <Route key={i} path={r.url} element={<r.component />} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
