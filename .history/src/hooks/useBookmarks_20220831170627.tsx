//React
import {useState} from 'react'

type campaignData={campaignHash:string,campaignTitle:string}
// type Props ={
//     campaignData:campaignData
// }

function useBookmarks(){

    const bookmarks = localStorage.getItem("bookmarks") ;
    const [bookmarks,setBookmarks] = useState<null|campaignData[]>()
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