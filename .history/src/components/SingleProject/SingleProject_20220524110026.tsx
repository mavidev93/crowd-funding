import React from 'react'

type Props = {
    title:string;
    text:string;
    isBookmarked?:boolean;
    isLiked?:boolean;
    isDisliked?:boolean;

}

const SingleProject = ({title,text,}: Props) => {
  return (
    <div>SingleProject</div>
  )
}

export default SingleProject