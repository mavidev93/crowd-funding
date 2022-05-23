/** @format */

//Third Party
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//App
import CommonButton from "../../components/CommonButton/CommonButton";

interface FeaturedProjectPropTypes{

  text: string;
  title: string,
  imgSrc?:string;
    id: string;

}

export default function FeaturedProject({text,title,id,imgSrc}:FeaturedProjectPropTypes) {
  return (
    <Card>
      <CardMedia
        sx={{ maxHeight: "250px" }}
        component="img"
        alt="green iguana"
        height="200px"
        image={imgSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
{title}        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* //TODO: create and custom button for app */}
        <CommonButton size="small" text="Learn More" />
      </CardActions>
    </Card>
  );
}
