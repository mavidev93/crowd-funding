/** @format */

import { createContext, useContext, useReducer } from "react";

type Action = { type: "add" } | { type: "remove" };
type State = Campaign[];
type Dispatch = (action: Action) => void;
const bookmarkContext = createContext<
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
  const bookmark = useContext(bookmarkContext);
  if (bookmark === undefined)
    throw new Error("context must be inside context provider");
}

function BookmarkProvider() {
  const [state, dispatch] = useReducer(bookmarkReducer, undefined);
}

Overload 1 of 5, '(reducer: ReducerWithoutAction<any>, initializerArg: any, initializer?: undefined): [any, DispatchWithoutAction]', gave the following error.
Argument of type '(state: State, action: Action) => State' is not assignable to parameter of type 'ReducerWithoutAction<any>'.