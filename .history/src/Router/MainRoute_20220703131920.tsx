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


const Main = loadable(() => import("../layout/Main/Main"),{fallback});
const CreateNewProject = loadable(() => import("../pages/CreateNewProject"));



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
              <Suspense fallback={Loading()}>
                <Main />
              </Suspense>
            }
          />

          {roots.map((r, i) => (
            <Route
              key={i}
              path={r.url}
              element={
                <Suspense key={i} fallback={Loading()}>
                  <r.component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
