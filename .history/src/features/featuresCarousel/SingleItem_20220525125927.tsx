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
      <div className="flex p-3 border border-solid border-r-emerald-500">
        <span>{title}</span>
        <span>{date}</span>
      </div>
      <p>{text}</p>
      <span>{amount}</span>
    </div>
  );
};

export default SingleItem;