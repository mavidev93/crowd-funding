/** @format */

//React
import React, { lazy, Suspense, Fragment } from "react";

//Third Party
import { Routes, Route, Outlet } from "react-router-dom";
import loadable from "@loadable/component";
import { nanoid } from "nanoid";
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
const FundedCampaigns = loadable(
  () => import("../features/FundedCampaigns/FundedCampaigns")
);

const CreatedCampaigns = loadable(
  () =>import("../features/CreatedCampaigns/CreatedCampaigns")
)

const roots = [
  // { url: "/", component: Main },
  { url: "/create-campaign", component: CreateNewProject },
  { url: "/campaigns/:campaignPath", component: SingleCampaignPage },
  { url: "/user/created-campaigns", component: CreatedCampaigns },
  { url: "/user/funded-campaigns", component:FundedCampaigns  },
];

function MainRoute() {
  return (
    <>
      {/* TODO: Add an spinner */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Main />} />

          {/* {roots.map((r, i) => (
            <Route key={i} path={r.url} element={<r.component />} />
          ))} */}
                      <Route key={nanoid()} path={"/create-campaign"} element={<CreateNewProject/>} />
                      <Route key={nanoid()} path={r.url} element={<r.component />} />
                      <Route key={} path={r.url} element={<r.component />} />
                      <Route key={i} path={r.url} element={<r.component />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
