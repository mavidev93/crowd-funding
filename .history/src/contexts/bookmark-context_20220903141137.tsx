/** @format */

import { createContext, useContext, useReducer } from "react";

type Action = { type: "add" } | { type: "remove" };
type State = Campaign[];
type Dispatch = (action: Action) => void;
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
}

function BookmarkProvider({children}) {
  const [state, dispatch] = useReducer(bookmarkReducer, []);
  const value = {state,dispatch}
    <bookmarkReducer.Provider>n
        {chikdre}
        <bookmarkReducer.Provider></bookmarkReducer.Provider>
}

