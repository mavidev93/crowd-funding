/** @format */

//React
import { useState } from "react";

//Third Party
import { useNotification } from "web3uikit";

type campaignData = { campaignHash: string; campaignTitle: string };
// type Props ={
//     campaignData:campaignData
// }

function useBookmarks() {
  const bookmarksLocal = localStorage.getItem("bookmarks");
  // const initialBookmarks = bookmarksLocal ? JSON.parse(bookmarksLocal) : null;
  // const [bookmarks, setBookmarks] = useState<null | campaignData[]>(
  //   initialBookmarks
  // );

  const dispatchNotification = useNotification();

  const addCampaignToBookmarks = ({
    campaignTitle,
    campaignHash,
  }: campaignData) => {
    console.log("add bookmark");
    if (bookmarksLocal) {
      const bookmarksArr = JSON.parse(bookmarksLocal)
      const hashesArr = bookmarksArr.map((c:campaignData) => c.campaignHash);
      console.log(hashesArr)
      console.log(campaignHash)
      if (hashesArr.includes(campaignHash)) {
        dispatchNotification({
          message: "campaign already bookmarked",
          position: "topR",
          type: "warning",
        });
        return;
      }
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarksArr, { campaignTitle, campaignHash }])
      );
      dispatchNotification({
        message: "campaign  bookmarked",
        position: "topR",
        type: "success",
      });
    } else {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([{ campaignTitle, campaignHash }])
      );
      dispatchNotification({
        message: "campaign  bookmarked",
        position: "topR",
        type: "success",
      });
    }
  };

  return {  addCampaignToBookmarks };
}

export default useBookmarks;
