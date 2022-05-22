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
    classNames:"flex-end"
  },
  {
    // name: "bookmarks",
    id: nanoid(),
    icon: BookmarkBorder,

  },
  // TODO: Website Name
  {
    name: "Crowd Funding",
    id: nanoid(),
    classNames:"grow"
  },
  {
    name: "support",
    id: nanoid(),
  },
  {
    name: "discover",
    id: nanoid(),
  },

];
