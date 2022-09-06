/** @format */

import React, { createContext, useContext, useReducer } from "react";
import { useNotification } from "web3uikit";
type CampaignData = {
  campaignHash: string;
  campaignTitle: string;
  // dispatchNotification: Function;
};

type Action = { type: "add"; payload: CampaignData } | { type: "remove" };
type State = CampaignData[];
type Dispatch = (action: Action) => void;
type BookmarkProviderProps = { children: React.ReactNode };
const BookmarkContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function bookmarkReducer(state: State, action: Action) {
  console.log("from bookmar reduceer");
  switch (action.type) {
    case "add": {
      const { campaignTitle, campaignHash } = action.payload;
      const hashesArr = state.map((c: CampaignData) => c.campaignHash);

      if (hashesArr.includes(campaignHash)) {
        return state;
      }
      const newState = [...state, { campaignTitle, campaignHash }];
      localStorage.setItem("bookmark", JSON.stringify(newState));

      return newState;
      // return state;
    }
    case "remove": {
      return state;
    }

    default: {
      return state;
      throw new Error("action is't recognized");
    }
  }
}

function BookmarkProvider({ children }: BookmarkProviderProps) {

  const bookmarkLocal = localStorage.getItem("bookmark");
  const initialState: CampaignData[] = bookmarkLocal
    ? JSON.parse(bookmarkLocal)
    : [];
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);
  const value = { state, dispatch };

  const dispatchNotification = useNotification()

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

function useBookmark() {
  const bookmark = useContext(BookmarkContext);
  if (bookmark === undefined)
    throw new Error(
      "component should be inside context provider to use context"
    );

  return bookmark;
}

export { BookmarkProvider, useBookmark };
