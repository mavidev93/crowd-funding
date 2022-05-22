/** @format */
//React
import { ReactNode } from "react";

//Application

import Navbar from "./Navbar/Navbar";

function DefaultLayout(children: any) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default DefaultLayout;
