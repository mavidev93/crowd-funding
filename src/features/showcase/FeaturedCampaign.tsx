/** @format */
//React
import { useState, useEffect, useContext } from "react";
//Third Party
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import ReactMarkdown from "react-markdown";

//App
import CommonButton from "../../components/CommonButton/CommonButton";
import CommonTitle from "../../components/CommonTitle/CommonTitle";
import useGetCampaign from "../../hooks/useGetCampaign";
import useContract from "../../hooks/useContract";
import ReadMore from "../../components/ReadMore/ReadMore";
import { createUrl } from "../../helpers/helpers";
import { featuredHash, featuredImgPHSrc } from "../../constants";
import { featuredCampaign } from "../../constants/staticCampaigns";
//Constants
const imgSrc = featuredImgPHSrc;
const campaignHash = featuredHash;

export default function FeaturedCampaign() {
  const contract = useContract();
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
