//React
import {useState} from 'react'

type campaignData={campaignHash:string,campaignTitle:string}
// type Props ={
//     campaignData:campaignData
// }

function useBookmarks(){
    const 
    const bookmarks = localStorage.getItem("bookmarks") ;
    console.log(bookmarks);
    if (bookmarks) {
      const bookmarksArr = JSON.parse(bookmarks)
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarksArr, { campaignTitle, campaignHash }])

      );
      console.log(true);
    } else {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([{ campaignTitle, campaignHash }])
      );
    }



}

export default useBookmarks