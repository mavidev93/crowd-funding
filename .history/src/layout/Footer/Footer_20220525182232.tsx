/** @format */

//Third Party
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="">
      <div className="flex justify-between  text-center bg-primary-color-dark text-tx-white order-10  mt-5 p-3 ">
        <ul className="footer_links ">
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
    </footer>
  );
};

export default Footer;
