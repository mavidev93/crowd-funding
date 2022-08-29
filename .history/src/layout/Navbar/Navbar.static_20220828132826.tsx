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
    // REFACTOR and add bookmark notification MAYBE

    id: nanoid(),
    component: <BookmarkBorder className="text-tx-black  " />,
    classNames: `order-12 ${sharedClasses} `,
    root: "/bookmarks",
  },

  {
    id:nanoid(),
   component: <ConnectButton moralisAuth={false} />,

  }
];

const navItemsLeft: navItem[] = [
  // {
  //   name: "support",
  //   id: nanoid(),
  //   classNames: `order-5 ${sharedClasses} `,

  //   root: "/",
  // },

  // {
  //   name: "discover",
  //   id: nanoid(),
  //   classNames: `order-2 ${sharedClasses} `,

  //   root: "/campaigns/1",
  // },
  {
    name: "You Created",
    id: nanoid(),
    classNames: `order-3 ${sharedClasses} `,
    root: "/user/created-campaigns",

  },

  {
    name: "You Funded",
    id: nanoid(),
    classNames: `order-5 ${sharedClasses} `,
    root: "/user/funded-campaigns",
  },
  {
    name: "create campaign",
    id: nanoid(),
    classNames: `order-1 ${sharedClasses}  bg-secondary-color text-white-color shadow-md	rounded-md

    px-3 py-2  `,
    root: "/create-campaign",
  },
];

const navItemsCenter: navItem[] = [
  // TODO: Website Name
  {
    id: nanoid(),
    classNames: "grow  justify-center order-5  italic flex order-0 ",
    component: <CrowdFundingLogo width="200px" />,
    root: "/",
  },
];

export { navItemsLeft, navItemsCenter, navItemsRight };
