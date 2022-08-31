/** @format */

import React from "react";

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import ReadMore from "../../components/ReadMore/ReadMore";
import useBookmark from "../../"
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
        className="flex m-2 p-3 flex-col gap-2 border border-solid border-bdr-gray justify-between   "
        style={{ height: "95%" }}
      >
        <div className="flex justify-between">
          <CommonTitle text={title} />
        </div>
        <p className="mb-auto">{text}</p>
        <p className="flex justify-between items-center ">
          <span className="bg-secondary-color text-white p-2 ">
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
