/** @format */

//React
import { lazy, Suspense, Fragment } from "react";

//Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Application
import DefaultLayout from "../layout/DefaultLayout";

import MainTest from "../layout/Main/Main";
import CreateNewProjectTest from "../pages/CreateNewProject";

const Main = lazy(() => import("../layout/Main/Main"));
const CreateNewProject = lazy(() => import("../pages/CreateNewProject"));

const roots = [
  { url: "/", component: Main },
  { url: "/create-new-project", component: CreateNewProject },
];

function MainRoute() {
  return (
    <>
      {/* TODO: Add an spinner */}
      <Suspense fallback={<div>loading ...</div>} />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {roots.map((r, i) => (
            <Route key={i} path={`${r.url}`} element={< />} />
          ))}
          {/* <Route key="sfddf" path="/" element={<Main />} />
          <Route
            key="sfewfefedf"
            path="/create-new-project"
            element={<CreateNewProject />}
          />
 */}
          {/* <Route path="" element={<Main />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
