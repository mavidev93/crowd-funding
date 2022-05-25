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
            <span>title</span>
            <span>data</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorum tenetur enim molestias corrupti laudantium eum optio, illo quia maiores, dolorem, ab expedita voluptatum voluptatem? Dignissimos ea at magnam eligendi enim. Accusamus, dolor ab!
        </p>
        <span>amount</span>
    </div>
  )
}

export default SingleItem