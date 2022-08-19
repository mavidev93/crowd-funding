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

const sharedClasses = "mx-2 capitalize font-bold text-sm	";

const navItemsRight: navItem[] = [
  {
    name: "Created Campaigns",
    id: nanoid(),
    classNames: `order-8 ${sharedClasses} `,
    root: "created-campaigns",

    // component: <ConnectButton moralisAuth={false} />,
  },

  {
    name: "Funded Campaigns",
    id: nanoid(),
    classNames: `order-5 ${sharedClasses} `,
    root: "/funded-campaigns",
  },
];

const navItemsLeft: navItem[] = [
  // {
  //   name: "support",
  //   id: nanoid(),
  //   classNames: `order-5 ${sharedClasses} `,

  //   root: "/",
  // },
  {
    // REFACTOR and add bookmark notification MAYBE

    id: nanoid(),
    component: <BookmarkBorder className="text-tx-black" />,
    classNames: `order-12 ${sharedClasses} `,
    root: "/bookmarks",
  },
  {
    name: "discover",
    id: nanoid(),
    classNames: `order-2 ${sharedClasses} `,

    root: "/campaigns/1",
  },
  {
    name: "create project",
    id: nanoid(),
    classNames: `order-1 ${sharedClasses} bg-red-400	px-2  `,
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
