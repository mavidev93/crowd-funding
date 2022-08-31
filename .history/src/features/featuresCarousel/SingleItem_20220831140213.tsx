/** @format */

import React from "react";
import CommonTitle from "../../components/CommonTitle/CommonTitle";

//App

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
      <div className="flex m-2 p-3 flex-col gap-2 border border-solid border-bdr-gray ">
        <div className="flex justify-between">
          <CommonTitle text={title} />
          <span className="text-xs  font-bold italic">{date}</span>
        </div>
        <p>{text}</p>
        <span  className="text-center bg-secondary-color self-center px-3 py-1 rounded-md

text-white">{amount}</span>
      </div>
    </div>
  );
};

export default SingleItem;
