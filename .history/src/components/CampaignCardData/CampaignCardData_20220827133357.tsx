/** @format */

import React from "react";

//Third Party
import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//App
import DaysLeft from "../DaysLeft/DaysLeft"
import { createUrl } from "../../helpers/helpers";
import placeHolder from "../../assets/images/images.png";

type Props = {
  campaign: Campaign;
};

const CampaignCardData = ({ campaign }: Props) => {
  const {
    campaignTitle,
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
    isDisliked,
  } = campaign;
  return (
    <div>
      <div>
        <Card className="flex  justify-end  flex-row-reverse shadow-none">
          <Box
            className="grow "
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                {c.campaignTitle}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <ReactMarkdown className="line-clamp-2 ">
                  {c.campaignDescription}
                </ReactMarkdown>
              </Typography>
            </CardContent>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={
              (c.avatarImgPath && createUrl(c.avatarImgPath)) || placeHolder
            }
            alt="Live from space album cover"
          />
        </Card>
      </div>
      <CommonDivider className="my-3" />
      <div className="">
        <div className="flex justify-between  items-center w-full 	">
          <p className="text-lime-600 font-bold text-primary-color order-3">
            <span>Total Funded: </span> <span>{c.totalAmountFunded}</span>
          </p>
          <p className="text-lime-600 font-bold text-primary-color-dark order-5">
            <span>Goal Amount:</span> <span>{c.goalAmount}</span>
          </p>
          <DaysLeft daysLeft={c.daysLeft} />
        </div>
        <CommonDivider className="my-3" />
      </div>
    </div>
  );
};

export default CampaignCardData;
