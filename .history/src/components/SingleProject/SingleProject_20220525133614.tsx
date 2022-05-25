/** @format */

//Third Party
import { BookmarkAddOutlined } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import IconButton from "@mui/material/IconButton";

//App
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonButton from "../CommonButton/CommonButton";

type Props = {
  title: string;
  text: string;
  isBookmarked?: boolean;
  isLiked?: boolean;
  isDisliked?: boolean;
};

const SingleProject = ({
  title,
  text,
  isBookmarked,
  isLiked,
  isDisliked,
}: Props) => {
  return (
    <div className="my-3 px-2 ">
      <div className="border border-solid border-bdr-gray py-4 px-5  w-5/6 mx-auto relative ">
        <CommonTitle text="title" />
        <p className="line-clamp-4 	">
 {text}
        </p>
        <CommonButton
          text="Fund Project"
          variant="contained"
          className="bg-primary-color my-3"
        />
        <CommonButton text="Read More" variant="text" className=" mx-2 my-3" />
        <div className="absolute flex flex-col h-full justify-between top-0  -right-5">
          <IconButton aria-label="bookmark" className="bg-white ">
            <BookmarkAddOutlined fontSize="medium" />
          </IconButton>
          <IconButton aria-label="Like" className="bg-white mt-10">
            <ThumbUpOffAltIcon fontSize="medium" />
          </IconButton>
          <IconButton aria-label="dislike" className="bg-white ">
            <ThumbDownOffAltIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
