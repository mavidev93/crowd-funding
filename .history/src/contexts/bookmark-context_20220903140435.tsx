/** @format */

import { createContext, useContext, useReducer } from "react";

type Action = { type: "add" } | { type: "remove" };
type State = Campaign[];
type Dispatch = (action: Action) => void;
const bookmarkContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function bookmarkReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
            return 12
    }
    case "remove": {
    }

    default: {
      throw new Error("action is't recogonized");
    }
  }
}

function useBookmark() {
  const bookmark = useContext(bookmarkContext);
  if (bookmark === undefined)
    throw new Error("context must be inside context provider");
}

function BookmarkProvider() {
  const [state, dispatch] = useReducer(bookmarkReducer, undefined);
}
