/** @format */
//Third Party
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import ReactMarkdown from "react-markdown";

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import useContract from "../../hooks/useContract";
import ReadMore from "../../components/ReadMore/ReadMore";
import { createUrl } from "../../helpers/helpers";
import { featuredHash, featuredImgPHSrc } from "../../constants";
import { featuredCampaign } from "../../constants/staticCampaigns";
//Constants
const imgSrc = featuredImgPHSrc;

export default function FeaturedCampaign() {
  const featured = featuredCampaign;

  return (
    <div>
      <CommonTitle
        className="text-sm  mt-2 ml-3 mb-4	"
        text="featured project"
        variant="h6"
        component="div"
      />
      {featured ? (
        <Card>
          <CardMedia
            sx={{ maxHeight: "250px" }}
            component="img"
            alt="green iguana"
            height="200px"
            image={
              featured.headerImgPath
                ? createUrl(featured.headerImgPath)
                : imgSrc
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {featured.campaignTitle}{" "}
            </Typography>
            <ReactMarkdown className="line-clamp-6">
              {featured.campaignDescription}
            </ReactMarkdown>
          </CardContent>
          <CardActions>
            <ReadMore
              campaignHash={featured.campaignHash}
              campaignTitle={featured.campaignTitle}
            />
          </CardActions>
        </Card>
      ) : (
        <Skeleton variant="rectangular" className="w-full h-96" />
      )}
    </div>
  );
}
