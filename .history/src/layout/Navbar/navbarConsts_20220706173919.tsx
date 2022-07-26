/** @format */

//React
import { nanoid } from "@reduxjs/toolkit";

//Third Party
import { BookmarkBorder, Login } from "@mui/icons-material";
import React from "react";
import { ConnectButton } from "web3uikit";
//App
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";

export interface navItem {
  name?: string;
  id: string;
  root?: string;

  classNames?: string;
  onClick?: Function;
  component?: React.ReactNode;
}

const sharedClasses = "mx-2 "

const navItemsRight: navItem[] = [
  {
    // name: "connect",
    id: nanoid(),
    classNames: "order-12 capitalize text-right 	",

    component: <ConnectButton />,
  },

  {
    name: "login",
    id: nanoid(),
    classNames: "order-10 capitalize  text-right ",
    root: "/login",
  },
  {
    // REFACTOR and add bookmark notification MAYBE

    id: nanoid(),
    component: <BookmarkBorder className="text-tx-black" />,
    classNames: "order-9 	text-right ml-auto",
    root: "/bookmarks",
  },
];

const navItemsLeft: navItem[] = [
  {
    name: "support",
    id: nanoid(),
    classNames: "order-8 mx-2	  ",
    root: "/",
  },
  {
    name: "discover",
    id: nanoid(),
    classNames: "order-4 mx-2	 ",
    root: "/",
  },
  {
    name: "create project",
    id: nanoid(),
    classNames: "order-1 capitalize mx-2 ",
    root: "/create-new-project",
  },
];

const navItemsCenter: navItem[] = [
  // TODO: Website Name
  {
    id: nanoid(),
    classNames: "grow  justify-center order-5  italic	hidden md:flex ",
    component: <CrowdFundingLogo width="200px" />,
    root: "/",
  },
];

export { navItemsLeft, navItemsCenter, navItemsRight };
