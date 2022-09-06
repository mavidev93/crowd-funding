/** @format */

//Third party
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BookmarkAddOutlined } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";

//App
import { useBookmark } from "../../contexts/bookmark-context";
import { createUrl } from "../../helpers/helpers";
import imgSrc from "../../assets/images/images.png";
import ReadMore from "../../components/ReadMore/ReadMore";
type Props = { campaign: Campaign };

const SingleRecommend = ({ campaign }: Props) => {
  const { campaignHash, campaignTitle, campaignDescription, avatarImgPath } =
    campaign;
  //Hooks
  const { dispatch } = useBookmark();
  //Handler
  const handleAddToBookmark = (campaignHash: string, campaignTitle: string) => {
    dispatch({ type: "add", payload: { campaignHash, campaignTitle } });
  };
  return (
    <div>
      <Card className="flex  flex-row-reverse  justify-between">
        <Box className="grow" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {campaignTitle}
            </Typography>
            <ReactMarkdown className="line-clamp-2">
              {campaignDescription}
            </ReactMarkdown>
          </CardContent>
          <Box className="flex flex-row-reverse justify-between items-center px-2 pb-1">
            <IconButton
              aria-label="bookmark"
              onClick={(e) => handleAddToBookmark(campaignHash, campaignTitle)}
            >
              <BookmarkAddOutlined fontSize="small" />
            </IconButton>
            <ReadMore
              campaignHash={campaignHash}
              campaignTitle={campaignTitle}
            />
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 170 }}
          image={avatarImgPath ? createUrl(avatarImgPath) : imgSrc}
          alt="Live from space album cover"
          className="p-2"
        />
      </Card>
    </div>
  );
};

export default SingleRecommend;
