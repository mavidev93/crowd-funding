/** @format */

//Third party
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BookmarkAddOutlined } from "@mui/icons-material";

type Props = {
  title: string;
  text: string;
  imgSrc?: string;
};

const SingleRecommend = ({ title, text, imgSrc }: Props) => {
  return (
    <div>
      <Card className="flex  flex-row-reverse  justify-between">
        <Box className="grow" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {title}{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {text}{" "}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="bookmark">
              <BookmarkAddOutlined fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 170 }}
          // TODO: style this to be resize dynamic properly
          image={imgSrc}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default SingleRecommend;
