/** @format */
//React
import { ReactNode } from "react";

//Third party
import { Outlet } from "react-router-dom";
//Application
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function DefaultLayout() {
  console.log();
  return (
    <div className="">
      <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
