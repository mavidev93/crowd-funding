/** @format */

import React from "react";

//Third Party
import ReactMarkdown from "react-markdown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
type Props = {
  campaign :Campaign
}

const CampaignCardData = ({campaign}:Props ) => {
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

    </div>
  );
};

export default CampaignCardData;
