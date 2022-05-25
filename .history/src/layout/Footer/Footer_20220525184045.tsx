/** @format */

//Third Party
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

type Props = {};

const Footer = (props: Props) => {


  

  return (
    <footer className="">
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
              <IconButton className="p-0">
                <Link to="#">
                  <InstagramIcon className="text-white" />
                </Link>
              </IconButton>
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
