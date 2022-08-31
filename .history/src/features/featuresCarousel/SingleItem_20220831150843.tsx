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
        <p className="flex justify-between items-center ">
          <span className="text-secondery-color ">
          Founded Amount:&nbsp;
          {amount}
          </span>
      <ReadMore campaignTitle={title} campaignHash={"hash"} />

        </p>
        {/* //TODO: Add hash */}
      </div>

    </div>
  );
};

export default SingleItem;
