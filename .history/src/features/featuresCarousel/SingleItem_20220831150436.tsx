/** @format */

import React from "react";

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import ReadMore from "../../components/ReadMore/ReadMore";

type Props = {
  title: string;
  text: string;
  date: string;
  id: string;
  amount: string;
};

const SingleItem = ({ title, text, date, id, amount }: Props) => {
  return (
    <div className="h-full">
      <div
        className="flex m-2 p-3 flex-col gap-2 border border-solid border-bdr-gray   "
        style={{ height: "95%" }}
      >
        <div className="flex justify-between">
          <CommonTitle text={title} />
        </div>
        <p>{text}</p>
        <span className="text-primary-color-dark text-center">
          Founded Amount:&nbsp;
          {amount}
        </span>
        //TODO: Add hash
      <ReadMore campaignTitle={title} campaignHash={"hash"} />
      </div>

    </div>
  );
};

export default SingleItem;
