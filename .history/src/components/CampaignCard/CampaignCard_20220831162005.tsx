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

  //Handler
  const handleAddToBookmark = (campaignHash: string, campaignTitle: string) => {
    console.log(bookmarks);
    if (bookmarks) {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarks, { campaignTitle, campaignHash }])

      );
      console.log(true);
    } else {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([{ campaignTitle, campaignHash }])
      );
    }
  };

  //Create JSX
  const createCampJSX = () => {
    return (
      <div className="flex   w-full">
        <div className=" 	flex items-center pr-3	basis-1/5">
          <img src="https://images.unsplash.com/photo-1653155864141-57b96ee8216f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127" />
          <CommonDivider orientation="vertical" className="mx-2 " />
        </div>
        <div className="grow-0	 pl-2">
          <CommonTitle
            text={campaignTitle}
            className=" text-lg	text-bold mt-3"
          />
          <div className="basis-4/5	">
            <ReactMarkdown className="line-clamp-2 ">
              {campaignDescription}
            </ReactMarkdown>
            <div className="flex justify-between  items-center  mt-4 ">
              <p className="text-lime-600 font-bold text-primary-color-dark ">
                <span>Goal Amount:</span> <span>{goalAmount}</span>
              </p>
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
            onClick={() => handleAddToBookmark(campaignHash, campaignTitle)}
          >
            <BookmarkAddOutlined fontSize="medium" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
