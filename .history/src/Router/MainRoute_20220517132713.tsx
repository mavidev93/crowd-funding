/** @format */

//React
import { lazy, Suspense, Fragment } from "react";

//Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Application
import DefaultLayout from "../layout/DefaultLayout";
import Main from "../layout/Main/Main";

function MainRoute() {
  return (
    <BrowserRouter>
      {/* Add an spinner */}
      <Suspense fallback={<div>loading ...</div>} />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
