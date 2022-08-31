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
// import DaysLeft from "../../components/DaysLeft/DaysLeft"

interface Props  {
  campaignIpfs:CampaignIpfs
}
const CampaignCard = ({campaignIpfs}: Props) => {
  const {
    campaignTitle,
    campaignDescription,
    campaignHash,
    isBookmarked,
    goalAmount,
    headerImgPath,
    avatarImgPath,

  }= campaignIpfs
  //Hooks
  const { isWeb3Enabled } = useMoralis();

  //Create JSX
  const createCampJSX = () => {
    return (
      <>
        <CommonTitle
          text={campaignTitle}
          className="text-center text-lg	text-bold"
        />
        <div>
          <ReactMarkdown className="line-clamp-2 ">
            {campaignDescription}
          </ReactMarkdown>
          <div className="flex justify-between  items-center w-full mt-4	">
            {/* <p className="text-lime-600 font-bold text-primary-color order-3">
                <span>Funded Amount: </span> <span>{totalAmountFunded}</span>
              </p> */}
            <p className="text-lime-600 font-bold text-primary-color-dark order-5">
              <span>Goal Amount:</span> <span>{goalAmount}</span>
            </p>
            {/* <DaysLeft daysLeft={daysLeft} /> */}
          </div>

          <div className="flex justify-between">
            {/* <FundModal
              campaignHash={campaignHash}
              isCampaignOpen={isCampaignOpen}
            /> */}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="my-3 px-2  border border-solid border-bdr-gray relative">

        <div className=" py-4 px-5  w-5/6 mx-auto  ">
          {createCampJSX()}

          <div className="absolute flex flex-col h-full justify-between top-0  -right-5">
            <IconButton aria-label="bookmark" className="bg-white ">
              <BookmarkAddOutlined fontSize="medium" />
            </IconButton>
            {/* <IconButton aria-label="Like" className="bg-white mt-10">
              <ThumbUpOffAltIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="dislike" className="bg-white ">
              <ThumbDownOffAltIcon fontSize="medium" />
            </IconButton> */}
            <ReadMore
              campaignHash={campaignHash}
              campaignTitle={campaignTitle}
            />
          </div>
        </div>

    </div>
  );
};

export default CampaignCard;
