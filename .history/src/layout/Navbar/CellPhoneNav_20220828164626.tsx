/** @format */
//Reaact
import { useRef } from "react";
//Third Party
import { Link } from "react-router-dom";
//App
import {
  navItem,
  navItemsCenter,
  navItemsLeft,
  navItemsRight,
} from "./Navbar.static";
import CommonDivider from "../../components/CommonDivider/CommonDivider";
import './Navbar.scss'

type Props = {};

const CellPhoneNav = (props: Props) => {
    const hamburgerRef = useRef(null)
    const navMenuRef = useRef(null)
  //Create JSX
  const createNavList = (navItems: navItem[]) => {
    return navItems.map((item) => (
        <li className={item.classNames}>
      <div className="flex items-center justify-center py-2">
        <div key={item.id} >
          {item.root ? (
            <Link to={item.root}>
              {item.name}
              {item.component && item.component}
            </Link>
          ) : (
            <>
              {item.name}
              {item.component}
            </>
          )}{" "}
        </div>

      </div>
      <CommonDivider/>
      </li>
    ));
  };
  const items = [...navItemsCenter, ...navItemsRight, ...navItemsLeft];

  return (
    <div className=" md:hidden">
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
      <ul className="flex flex-col nav-menu " ref={}>
        {items && createNavList(items)}
        </ul>
    </div>
  );
};

export default CellPhoneNav;
