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

interface FeaturedProjectPropTypes={
  te
}

export default function FeaturedProject() {
  return (
    <Card>
      <CardMedia
        sx={{ maxHeight: "250px" }}
        component="img"
        alt="green iguana"
        height="200px"
        image="https://images.unsplash.com/photo-1653155864141-57b96ee8216f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
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
