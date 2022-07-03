/** @format */

//React
import { lazy, Suspense, Fragment } from "react";

//Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Application
import DefaultLayout from "../layout/DefaultLayout";

const Main = lazy(()=> import ( "../layout/Main/Main"));
const CreateNewProject = lazy(()=>import("../pages/CreateNewProject"))

const roots =[{url:"" ,component:Main},
{url:"/create-new-project" ,component:CreateNewProject}]

function MainRoute() {
  return (
    <BrowserRouter>
      {/* Add an spinner */}
      <Suspense fallback={<div>loading ...</div>} />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
      {/* {roots.map((root,i)=>(<Route path={root.url} element= {<div>hssan</div>} />) } */}
      {roots.map((r)=><span></span>)}

          <Route path="" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
