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

// function bookmarkReducer(state: State, action: Action) {
//   switch (action.type) {
//     case "add": {
//       const { campaignTitle, campaignHash } =
//         action.payload;
//       const hashesArr = state.map((c: CampaignData) => c.campaignHash);

//       if (hashesArr.includes(campaignHash)) {
//         dispatchNotification({
//           message: "campaign already bookmarked",
//           position: "topR",
//           type: "warning",
//         });

//         return state;
//       }
//       const newState = [...state, { campaignTitle, campaignHash }];
//       localStorage.setItem("bookmarks", JSON.stringify(newState));
//       dispatchNotification({
//         message: "campaign  bookmarked",
//         position: "topR",
//         type: "success",
//       });
//       // return newState;
//       return state;
//     }
//     case "remove": {
//       return state;
//     }

//     default: {
//       return state;
//       throw new Error("action is't recognized");
//     }
//   }
// }



function useBookmark() {
  const bookmark = useContext(BookmarkContext);


  const bookmarkLocal = localStorage.getItem("bookmark");
  const initialState: CampaignData[] = bookmarkLocal
    ? JSON.parse(bookmarkLocal)
    : [];
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);
  const value = { state, dispatch };
  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

export { BookmarkProvider, useBookmark };

// export const addCampaignToBookmarks = ({
//   campaignTitle,
//   campaignHash,
//   dispatchNotification,
// }: campaignData) => {
//   const bookmarksLocal = localStorage.getItem("bookmarks");
//   console.log(bookmarksLocal);
//   console.log("add bookmark");
//   if (bookmarksLocal) {
//     const bookmarksArr = JSON.parse(bookmarksLocal);
//     const hashesArr = bookmarksArr.map((c: campaignData) => c.campaignHash);
//     if (hashesArr.includes(campaignHash)) {
//       dispatchNotification({
//         message: "campaign already bookmarked",
//         position: "topR",
//         type: "warning",
//       });

//       return;
//     }
//     localStorage.setItem(
//       "bookmarks",
//       JSON.stringify([...bookmarksArr, { campaignTitle, campaignHash }])
//     );
//     dispatchNotification({
//       message: "campaign  bookmarked",
//       position: "topR",
//       type: "success",
//     });
//   } else {
//     localStorage.setItem(
//       "bookmarks",
//       JSON.stringify([{ campaignTitle, campaignHash }])
//     );
//   }
// };
