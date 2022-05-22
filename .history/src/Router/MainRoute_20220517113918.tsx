/** @format */

//React
import { lazy, Suspense, Fragment } from "react";

//Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Application
import DefaultLayout from "../layout/DefaultLayout";

function MainRoute() {
  return (
    <BrowserRouter>
      {/* Add an spinner */}
      <Suspense fallback={<div>loading ...</div>} />
      <Routes>
        
          <DefaultLayout>
            <Route path="/" element={<div>dfsfdfd</div>} />
          </DefaultLayout>
        </Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
