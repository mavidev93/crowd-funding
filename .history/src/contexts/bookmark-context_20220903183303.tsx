/** @format */

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
  const hashesArr = state.map((c: CampaignData) => c.campaignHash);

  switch (action.type) {
    case "add": {
      const { campaignTitle, campaignHash } = action.payload;

      if (hashesArr.includes(campaignHash)) {
        return state;
      }
      const newState = [...state, { campaignTitle, campaignHash }];
      localStorage.setItem("bookmark", JSON.stringify(newState));

      return newState;
    }
    case "remove": {
      const newState = state.filter(c=>hashesArr.includes(c.campaignHash))
      localStorage.setItem("bookmark", JSON.stringify(newState));

      return newState;
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
  const [count, setCount] = useState(initialState.length);
  const value = { bookmark:state, dispatch };

  const dispatchNotification = useNotification();

  useEffect(() => {
    if (count === state.length) return;
    else if (state.length > count) {
      dispatchNotification({
        message: "campaign  bookmarked",
        position: "topR",
        type: "success",
      });
    } else if (state.length < count) {
      dispatchNotification({
        message: "campaign removed from  bookmarked",
        position: "topR",
        type: "warning",
      });
    }
    setCount(state.length);
  }, [state]);

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
