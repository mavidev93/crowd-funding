/** @format */

//Third party
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BookmarkAddOutlined } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { height } from "@mui/system";

//App
import CommonTitle from "../../components/CommonTitle/CommonTitle";

type Props = {};

export default function RecommendedList() {
  return (
    <div>
      <CommonTitle
        className="text-sm uppercase mt-2  mb-4	"
        text="Recommended projects"
        variant="h6"
        component="div"
      />
      <Card className="flex  flex-row-reverse  justify-between">
        <Box className="grow" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="bookmark">
              {/* {false ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
              <BookmarkAddOutlined fontSize="small" />
            </IconButton>
            <IconButton aria-label="Like">
              <ThumbUpOffAltIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="dislike">
              <ThumbDownOffAltIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          // TODO:
          image="https://images.unsplash.com/photo-1653245620594-02e1d9a188f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}
