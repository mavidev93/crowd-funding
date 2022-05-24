import React from 'react'

import CommonTitle from '../CommonTitle/CommonTitle'
type Props = {
    title:string;
    text:string;
    isBookmarked?:boolean;
    isLiked?:boolean;
    isDisliked?:boolean;

}

const SingleProject = ({title,text,isBookmarked,isLiked,isDisliked}: Props) => {
  return (
    <div>
        <CommonTitle text=''

    </div>
  )
}

export default SingleProject