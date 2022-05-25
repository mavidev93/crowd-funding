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
      <div className="flex m-2 p-3 flex-col gap-2 border border-solid border-bdr-gray">
        <div className="flex justify-between">
          <CommonTitle text={title} />
          <span className="small">{date}</span>
        </div>
        <p>{text}</p>
        <p className="text-center">{amount}</p>
      </div>
    </div>
  );
};

export default SingleItem;
