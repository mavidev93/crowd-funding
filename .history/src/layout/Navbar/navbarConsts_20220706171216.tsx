/** @format */

//React
import { nanoid } from "@reduxjs/toolkit";

//Third Party
import { BookmarkBorder, Login } from "@mui/icons-material";
import React from "react";
import { ConnectButton } from "web3uikit";
//App
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";

interface navItem {
  name?: string;
  id: string;
  root?: string;

  classNames?: string;
  onClick?: Function;
  component?:React.ReactNode
}

export const navItems: navItem[] = [

  // TODO: Website Name
  {
    id: nanoid(),
    classNames: "grow  justify-center order-5  italic	hidden md:flex ",
    component: <CrowdFundingLogo width="200px" />,
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

const navItemsRight:navItem[]=[

]