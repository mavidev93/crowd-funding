/** @format */

//React
import { useEffect } from "react";
//Third Party
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

//styles
import "./Footer.scss";
type Props = {};

const Footer = (props: Props) => {
  //Handlers
  const handleScrollToTop = () => {
    console.log("from hanlde sccrool");
    window.scrollTo(0, 0);
  };
  return (
    <footer className="h-10">
      <div className="bg-primary-color-dark ">
        <div className="flex justify-between items-center  text-center  text-white mt-5 p-3 md:w-5/6 mx-auto">
          <ul className="flex flex-col justify-between gap-2 order-last capitalize">
            <li>
              <Link to="/"> home </Link>
            </li>
            <li>
              <Link to="/"> discover </Link>
            </li>
            <li>
              <Link to="/"> about </Link>
            </li>
          </ul>
          <div>
            <IconButton>
              <ArrowUpwardIcon className="text-white" />
            </IconButton>
          </div>
          <ul className="order-first ">
            <li>
              {/* TODO: add scroll to up  */}
              <IconButto className="p-0" >
                <Link to="#">
                  <InstagramIcon className="text-white" />
                </Link>
              </IconButto>
            </li>
            <li>
              <IconButton className="p-0">
                <Link to="#">
                  <TwitterIcon className="text-white" />
                </Link>
              </IconButton>
            </li>
            <li>
              <IconButton className="p-0">
                <Link to="#">
                  <TelegramIcon className="text-white" />
                </Link>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
