/** @format */

//Third Party
import { BookmarkAddOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import ReactMarkdown from "react-markdown";
import { useNotification } from "web3uikit";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
//App
import CommonTitle from "../CommonTitle/CommonTitle";
import ReadMore from "../../components/ReadMore/ReadMore";
import CommonDivider from "../../components/CommonDivider/CommonDivider";
import { useBookmark } from "../../contexts/bookmark-context";
import { createUrl } from "../../helpers/helpers";
interface Props {
  campaignIpfs: CampaignIpfs;
}
const CampaignCard = ({ campaignIpfs }: Props) => {
  const {
    campaignTitle,
    campaignDescription,
    campaignHash,

    goalAmount,
    headerImgPath,
    avatarImgPath,
  } = campaignIpfs;

  //Hooks
  const { dispatch } = useBookmark();
  //Handler
  const handleAddToBookmark = (campaignHash: string, campaignTitle: string) => {
    dispatch({ type: "add", payload: { campaignHash, campaignTitle } });
  };

  //Create JSX
  const createCampJSX = () => {
    return (
      <div className="flex   w-full">
        <div className=" 	flex items-center pr-3	w-1/6">
          <img src={avatarImgPath && createUrl(avatarImgPath)} />
          <CommonDivider orientation="vertical" className="mx-2 " />
        </div>
        <div className="w-5/6	 pl-2 flex flex-col ">
          <CommonTitle
            text={campaignTitle}
            className=" text-lg	text-bold mt-3"
          />
          <div className="	">
            <ReactMarkdown className="line-clamp-2 ">
              {campaignDescription}
            </ReactMarkdown>
          </div>
          <div className="flex justify-between  items-center  mt-auto ">
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
    );
  };

  return (
    <div className="my-3 px-2 ">
      <div className="border border-solid border-bdr-gray py-3 px-3  w-11/12 mx-auto relative ">
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
