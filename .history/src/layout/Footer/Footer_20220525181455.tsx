/** @format */

//Third Party
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="h-20 text-center bg-primary-color-dark text-tx-white mt-5">
        <ul className="footer_links">
          <li>
            <Link to="/"> home </Link>
            <Link to="/"> discover </Link>
            <Link to="/"> about </Link>
          </li>
        </ul>
        <div>
          scrool ul
        </div>
        <ul>
          <Link to='#'>instagram</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
