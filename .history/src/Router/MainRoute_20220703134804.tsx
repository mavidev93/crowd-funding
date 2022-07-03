/** @format */

//React
import React, { lazy, Suspense, Fragment } from "react";

//Third Party
import {  Routes, Route, Outlet } from "react-router-dom";
import loadable from "@loadable/component";

//Application
import DefaultLayout from "../layout/DefaultLayout";
import MainTest from "../layout/Main/Main";
import CreateNewProjectTest from "../pages/CreateNewProject";


const Loading = () => <div>loading ...</div>;


const Main = loadable(() => import("../layout/Main/Main"),{fallback:Loading()});
const CreateNewProject = loadable(() => import("../pages/CreateNewProject"),{fallback:Loading()});



const roots = [
  // { url: "/", component: Main },
  { url: "/create-new-project", component: CreateNewProject },
];


function MainRoute() {
  return (
    <>
      {/* TODO: Add an spinner */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            index
            element={
                <Main />
            }
          />

          {roots.map((r, i) => (
            <Route
              key={i}
              path={r.url}
              element={
                  <r.component />
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
