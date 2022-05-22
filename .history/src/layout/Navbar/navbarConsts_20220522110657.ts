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
    icon: Login,
  },
  {
    name: "bookmarks",
    id: nanoid(),
    icon: BookmarkBorder,
  },
  
  {
    name: "Crowd Funding",
    id: nanoid(),
  },
  {
    name: "login",
    id: nanoid(),
  },
  {
    name: "login",
    id: nanoid(),
  },
];
