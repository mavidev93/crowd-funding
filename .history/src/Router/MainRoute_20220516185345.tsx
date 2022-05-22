//React
import { lazy,Suspense } from "react";

//Third Party
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Application
import DefaultLayout from "../layout/DefaultLayout";

function MainRoute(){
    <BrowserRouter>
    {/* Add an spinner */}
    <Suspense fallback={<div>loading ...</div>}
    <Routes>
    <Route
    </Routes>
    </BrowserRouter>
}
