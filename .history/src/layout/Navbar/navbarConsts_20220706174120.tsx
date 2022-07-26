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

const sharedClasses = "mx-2 capitalize";

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
    classNames: `order-1 ${sharedClasses} `,
    root: "/login",
  },
  {
    // REFACTOR and add bookmark notification MAYBE

    id: nanoid(),
    component: <BookmarkBorder className="text-tx-black" />,
    classNames: `order-3 ${sharedClasses} `,
    root: "/bookmarks",
  },
];

const navItemsLeft: navItem[] = [
  {
    name: "support",
    id: nanoid(),
    classNames: `order-5 ${sharedClasses} `,

    root: "/",
  },
  {
    name: "discover",
    id: nanoid(),
    classNames: `order-2 ${sharedClasses} `,

    root: "/",
  },
  {
    name: "create project",
    id: nanoid(),
    classNames: `order-1 ${sharedClasses} `,
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
