/** @format */

//Third Party
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="">
      <div>
      <div className="flex justify-between  text-center bg-primary-color-dark text-tx-white mt-5 p-3 md:w-5/6 ">
        <ul className="footer_links order-last ">
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
        <ul className="order-1">
          <Link to="#">instagram</Link>
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
