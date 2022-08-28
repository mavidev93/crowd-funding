import React from 'react'

//App
import CommonButton from "../CommonButton/CommonButton";
type Props = {}

const ReadMore = (props: Props) => {
    const handleReadMore = () => {
        navigate(`/campaigns/${campaignTitle}`, { state: { hash: campaignHash } });
      };
  return (
    <div>
                 <CommonButton
              text="Read More"
              variant="text"
              className=" mx-2 my-3"
              onClick={handleReadMore}
            />
    </div>
  )
}

export default ReadMore