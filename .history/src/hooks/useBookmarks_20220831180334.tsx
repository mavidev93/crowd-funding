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
  const initialBookmarks = bookmarksLocal ? JSON.parse(bookmarksLocal) : null;
  const [bookmarks, setBookmarks] = useState<null | campaignData[]>(
    initialBookmarks
  );

  const dispatchNotification =useNotification()

  const addCampaignToBookmarks = ({
    campaignTitle,
    campaignHash,
  }: campaignData) => {
    if (bookmarks) {
      const hashesArr = bookmarks.map((c) => c.campaignHash);

      if (hashesArr.includes(campaignHash)) {
        dispatchNotification({})
      }
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarks, { campaignTitle, campaignHash }])
      );
      console.log(true);
    } else {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([{ campaignTitle, campaignHash }])
      );
    }
  };

  return { bookmarks, addCampaignToBookmarks };
}

export default useBookmarks;
