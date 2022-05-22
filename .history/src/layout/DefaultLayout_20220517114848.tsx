/** @format */
//React
import { ReactNode } from "react";

//Third party
import { Outlet } from "react-router-dom";
//Application
import Navbar from "./Navbar/Navbar";

function DefaultLayout() {
  console.log();
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer>fdfdf</footer>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
