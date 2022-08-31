/** @format */

//React
import { useState } from "react";

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

  const addCampaignToBookmarks = ({
    campaignTitle,
    campaignHash,
  }: campaignData) => {
    if (bookmarks) {
        const hashsArr = book
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
