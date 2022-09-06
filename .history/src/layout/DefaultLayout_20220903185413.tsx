/** @format */
//React
import { ReactNode } from "react";

//Third party
import { Outlet } from "react-router-dom";
//Application
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { BookmarkProvider } from "../contexts/bookmark-context";
function DefaultLayout() {
  return (
    <div className="relative min-h-screen	">
      <div className=" pb-10">
      <BookmarkProvider>

        <header>
            <Navbar />
          </BookmarkProvider>
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
