/** @format */

import React from "react";

type Props = {
  title: string;
  text: string;
  date: string;
  id: string;
  amount: string;
};

const SingleItem = ({ title, text, date, id, amount }: Props) => {
  return (
    <div>
      <div className="flex m-3 p-2 flex-col gap-2 border border-solid border-bdr-gray">
        <div className="flex">
          <span>{title}</span>
          <span>{date}</span>
        </div>
        <p>{text}</p>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default SingleItem;
