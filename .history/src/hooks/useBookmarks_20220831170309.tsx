//React
import {useState} from 'react'

type campaignData={campaignHash:string,campaignTitle:string}
// type Props ={
//     campaignData:campaignData
// }

function useBookmarks(){
    const {campaignHash,campaignTitle} = campaignData
    const bookmarks = localStorage.getItem("bookmarks")



}

export default useBookmarks