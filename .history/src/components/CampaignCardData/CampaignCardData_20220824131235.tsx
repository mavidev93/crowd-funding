/** @format */

import React from "react";

//Third Party
import ReactMarkdown from "react-markdown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import {Campaign} from "../../types/types"


const CampaignCardData = ({campaign}: Campaign) => {
 const {  campaignTitle,
    campaignDescription,
    campaignHash,
    isBookmarked,
    daysLeft,
    isCampaignOpen,
    totalAmountFunded,
    goalAmount,
    headerImgPath,
    avatarImgPath,
    isLiked,
    isDisliked}=campaign
  return (
    <div>
      <CommonTitle
        text={campaignTitle}
        className="text-center text-lg	text-bold"
      />
      <div>
        <ReactMarkdown>{campaignDescription}</ReactMarkdown>
          <div className="flex justify-between  items-center w-full mt-4	">
            <p className="text-lime-600 font-bold text-primary-color order-3">
              <span>Funded Amount: </span> <span>{totalAmountFunded}</span>
            </p>
            <p className="text-lime-600 font-bold text-primary-color-dark order-5">
              <span>Goal Amount:</span> <span>{goalAmount}</span>
            </p>

            <p className="text-secondary-color 	">
              {" "}
              <AccessTimeIcon />{" "}
              {daysLeft >= 0 ? (
                <span>{`${daysLeft} Days Left`}</span>
              ) : (
                <span>Funding Time Finished</span>
              )}
            </p>
          </div>
      </div>
    </div>
  );
};

export default CampaignCardData;
