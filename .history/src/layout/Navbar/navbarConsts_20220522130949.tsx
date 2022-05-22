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
  root?: string;
  icon?: any;
  classNames?: string;
  onClick?: Function;
}

export const navItems: navItem[] = [
  {
    name: "login",
    id: nanoid(),
    // icon: Login,
    classNames: "order-10 capitalize w-24 text-right ",
  },
  {
    // name: "bookmarks",
    id: nanoid(),
    icon: <BookmarkBorder />,

    classNames: "order-9 w-24	text-right ml-auto",
  },
  // TODO: Website Name
  {
    id: nanoid(),
    classNames: "grow  justify-center order-5  italic	hidden md:list-item ",
    icon: <CrowdFundingLogo width="200px" height="auto" />,
  },
  {
    name: "support",
    id: nanoid(),
    classNames: "order-2 w-24	  ",
  },
  {
    name: "discover",
    id: nanoid(),
    classNames: "order-1 w-24	 ",
  },
];
