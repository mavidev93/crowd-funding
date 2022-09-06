/** @format */

import React, { createContext, useContext, useReducer } from "react";

type Action = { type: "add" } | { type: "remove" };
type State = Campaign[];
type Dispatch = (action: Action) => void;
type BookmarkProviderProps = { children: React.ReactNode };
const BookmarkContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function bookmarkReducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      return state;
    }
    case "remove": {
      return state;
    }

    default: {
      return state;
      throw new Error("action is't recogonized");
    }
  }
}

function useBookmark() {
  const bookmark = useContext(BookmarkContext);
  if (bookmark === undefined)
    throw new Error("context must be inside context provider");
  return bookmark;
}

function BookmarkProvider({ children }: BookmarkProviderProps) {
  const [state, dispatch] = useReducer(bookmarkReducer, []);
  const value = { state, dispatch };
  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

export {bookmarkProvider,useBookmark}