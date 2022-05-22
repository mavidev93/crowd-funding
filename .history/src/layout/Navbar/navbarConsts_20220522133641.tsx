/** @format */

//React
import { nanoid } from "@reduxjs/toolkit";

//Third Party
import { BookmarkBorder, Login } from "@mui/icons-material";

//App
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";

interface navItem {
  name?: string;
  id: string;
  root: string;
  icon?: any;
  classNames?: string;
  onClick?: Function;
}

export const navItems: navItem[] = [
  {
    name: "login",
    id: nanoid(),
    classNames: "order-10 capitalize w-24 text-right ",
    root: "/login",
  },
  {
  // TODO: bookmark notification RefactorMaybe

    id: nanoid(),
    icon: <BookmarkBorder className="text-tx-black" />,
    classNames: "order-9 w-24	text-right ml-auto",
    root: "/bookmarks",
  },
  // TODO: Website Name
  {
    id: nanoid(),
    classNames: "grow  justify-center order-5  italic	hidden md:flex ",
    icon: <CrowdFundingLogo width="200px" height="auto" />,
    root: "/",
  },
  {
    name: "support",
    id: nanoid(),
    classNames: "order-2 w-24	  ",
    root: "/",
  },
  {
    name: "discover",
    id: nanoid(),
    classNames: "order-1 w-24	 ",
    root: "/",
  },
];
