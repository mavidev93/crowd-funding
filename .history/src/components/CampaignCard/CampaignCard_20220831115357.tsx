/** @format */

//Third Party
import { BookmarkAddOutlined } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import IconButton from "@mui/material/IconButton";
import { useMoralis, useMoralisFile, useWeb3Contract } from "react-moralis";
import ReactMarkdown from "react-markdown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";
import FundModal from "../../components/FundModal/FundModal";
import ConnectPlease from "../../components/ConnectPlease/ConnectPlease";
import ReadMore from "../../components/ReadMore/ReadMore";
import CommonDivider from "../../components/CommonDivider/CommonDivider";
// import DaysLeft from "../../components/DaysLeft/DaysLeft"

interface Props {
  campaignIpfs: CampaignIpfs;
}
const CampaignCard = ({ campaignIpfs }: Props) => {
  const {
    campaignTitle,
    campaignDescription,
    campaignHash,
    isBookmarked,
    goalAmount,
    headerImgPath,
    avatarImgPath,
  } = campaignIpfs;
  //Hooks
  const { isWeb3Enabled } = useMoralis();

  //Create JSX
  const createCampJSX = () => {
    return (
      <div className="flex  ">
        <div className="w-full basis-1/4	flex items-center pr-3	">
          <img src="https://images.unsplash.com/photo-1653155864141-57b96ee8216f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127" />
          <CommonDivider orientation="vertical" className="mx-2 " />
        </div>
        <div className="basis-3/4 pl-2">
          <CommonTitle
            text={campaignTitle}
            className=" text-lg	text-bold mt-3"
          />
          <div>
            <ReactMarkdown className="line-clamp-2 ">
              {campaignDescription}
            </ReactMarkdown>
            <div className="flex justify-between  items-center w-full mt-4	">
              {/* <p className="text-lime-600 font-bold text-primary-color order-3">
                <span>Funded Amount: </span> <span>{totalAmountFunded}</span>
              </p> */}
              <p className="text-lime-600 font-bold text-primary-color-dark ">
                <span>Goal Amount:</span> <span>{goalAmount}</span>
              </p>
              {/* <DaysLeft daysLeft={daysLeft} /> */}
              <ReadMore
                campaignHash={campaignHash}
                campaignTitle={campaignTitle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-3 px-2 ">
      <div className="border border-solid border-bdr-gray py-4 px-5  w-5/6 mx-auto relative ">
        {createCampJSX()}

        <div className="absolute flex flex-col h-full justify-between top-0  -right-5 ">
          <IconButton
            aria-label="bookmark"
            className="bg-white 	hover:bg-gray-50"
          >
            <BookmarkAddOutlined fontSize="medium" />
          </IconButton>
          {/* <IconButton aria-label="Like" className="bg-white mt-10">
              <ThumbUpOffAltIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="dislike" className="bg-white ">
              <ThumbDownOffAltIcon fontSize="medium" />
            </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
