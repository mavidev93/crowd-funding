//React
import {useState} f

type campaignData={campaignHash:string,campaignTitle:string}
type Props ={
    campaignData:campaignData
}

function useBookmarks({campaignData}:Props){
    const {campaignHash,campaignTitle} = campaignData
    const bookmarks = localStorage.getItem("bookmarks")

}

export default useBookmarks