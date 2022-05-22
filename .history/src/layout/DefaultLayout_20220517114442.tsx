/** @format */
//React
import { ReactNode } from "react";

//Third party
import { Outlet } from "react-router-dom";
//Application
import Navbar from "./Navbar/Navbar";

function DefaultLayout(children: any) {
  console.log(children);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>fdfdf</footer>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
