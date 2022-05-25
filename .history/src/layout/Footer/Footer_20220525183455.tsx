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
        <div className="flex justify-between items-center  text-center  text-tx-white mt-5 p-3 md:w-5/6 mx-auto">
          <ul className="footer_links order-last capitalize">
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
          <div>scrool ul</div>
          <ul className="order-first text-tx-white">
            <li>
              <IconButton className="p-0">
                <Link to="#">
                  <InstagramIcon color="t" />
                </Link>
              </IconButton>
            </li>
            <li>
              <IconButton className="p-0">
                <Link to="#">
                  <TwitterIcon />
                </Link>
              </IconButton>
            </li>
            <li>
              <IconButton className="p-0">
                <Link to="#">
                  <TelegramIcon />
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
