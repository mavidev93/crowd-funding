/** @format */

//React
import React, { lazy, Suspense, Fragment } from "react";

//Third Party
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//Application
import DefaultLayout from "../layout/DefaultLayout";
import MainTest from "../layout/Main/Main";
import CreateNewProjectTest from "../pages/CreateNewProject";

const Main = lazy(() => import("../layout/Main/Main"));
const CreateNewProject = lazy(() => import("../pages/CreateNewProject"));

// interface customComponentType {
//   url: string;
//   component: ;
// }

const roots = [
  // { url: "/", component: Main },
  { url: "/create-new-project", component: CreateNewProject },
];

const Loading = () => <div>loading ...</div>;

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
