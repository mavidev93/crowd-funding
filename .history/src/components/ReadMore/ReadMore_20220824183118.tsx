import React from 'react'

type Props = {}

const ReadMore = (props: Props) => {
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