import React from 'react'

type Props = {
    title: string,
    text: string,
    date: Date,
    id: string,
    amount: string,


}

const SingleItem = ({title,text,date,id,amount}: Props) => {
  return (
    <div>
        <div className="flex">
            <span>{title}</span>
            <span>{data}</span>
        </div>
        <p>
            {text}
        </p>
        <span>amount</span>
    </div>
  )
}

export default SingleItem