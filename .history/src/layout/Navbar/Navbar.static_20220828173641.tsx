/** @format */

//React
import { nanoid } from "@reduxjs/toolkit";

//Third Party
import { BookmarkBorder, Login } from "@mui/icons-material";
import React from "react";
import { ConnectButton } from "web3uikit";
import Button from "@mui/material/Button";

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


const sharedClasses = "pl-0 md:pl-5 capitalize font-bold text-sm	";

const navItemsRight: navItem[] = [
  {
    // REFACTOR and add bookmark notification MAYBE

    id: nanoid(),
    component: <BookmarkBorder className="text-tx-black  " />,
    classNames: `order-12 ${sharedClasses} `,
    root: "/bookmarks",
  },

  {
    id: nanoid(),
    component: <ConnectButton moralisAuth={false} />,
    classNames: `order-1 ${sharedClasses} `,
  },
];

const navItemsLeft: navItem[] = [
  {
    name: "You Created",
    id: nanoid(),
    classNames: `order-3 ${sharedClasses} hover:text-primaty-color`,
    root: "/user/created-campaigns",
  },

  {
    name: "You Funded",
    id: nanoid(),
    classNames: `order-5 ${sharedClasses} `,
    root: "/user/funded-campaigns",
  },
  {
    // name: "create campaign",
    id: nanoid(),
    classNames: `order-2 ${sharedClasses}  `,
    component:<Button className="bg-secondary-color text-white-color shadow-lg hover:bg-secondary-color hover:shadow-sm transition duration-300	 ease-in-out ">create campaign</Button>,
    root: "/create-campaign",
  },
];

const navItemsCenter: navItem[] = [
  // TODO: Website Name
  {
    id: nanoid(),
    classNames: " order-0  italic md:flex grow  justify-center ",
    component: <CrowdFundingLogo width="200px" />,
    root: "/",
  },
];

export { navItemsLeft, navItemsCenter, navItemsRight };
