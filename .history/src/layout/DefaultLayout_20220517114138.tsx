/** @format */

import { ReactNode } from "react";
import { JsxElement } from "typescript";

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
