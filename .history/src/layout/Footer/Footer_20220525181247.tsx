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
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
