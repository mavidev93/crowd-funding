//React
import {useState} from 'react'

type campaignData={campaignHash:string,campaignTitle:string}
// type Props ={
//     campaignData:campaignData
// }

function useBookmarks(){

    const bookmarksLocal = localStorage.getItem("bookmarks") ;
    const initialBookmarks =  bookmarksLocal?JSON.parse(bookmarksLocal):null
    const [bookmarks,setBookmarks] = useState<null|campaignData[]>(initialBookmarks)

    const addCampaignTobookmarks(){

    }
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