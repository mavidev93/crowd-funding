/** @format */

//React
import { nanoid } from "@reduxjs/toolkit";

//Third Party
import { BookmarkBorder, Login } from "@mui/icons-material";

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
    classNames: "order-10 capitalize w-24 ",
  },
  {
    // name: "bookmarks",
    id: nanoid(),
    icon: BookmarkBorder,

    classNames: "order-9 w-24	",
  },
  // TODO: Website Name
  {
    name: "Crowd Funding",
    id: nanoid(),
    classNames: "grow text-center order-5 	",
  },
  {
    name: "support",
    id: nanoid(),
    classNames: "order-2 w-24	 ",
  },
  {
    name: "discover",
    id: nanoid(),
    classNames: "order-1 w-24	 ",
  },
];
