/** @format */
import CustomDivider from "../../components/CommonDivider/CommonDivider";

//Third Party
import { Link } from "react-router-dom";
import { BookmarkBorder } from "@mui/icons-material";
import Badge from '@mui/material/Badge';

//App
import {
  navItemsCenter,
  navItemsRight,
  navItemsLeft,
  navItem,
} from "./Navbar.static";
// import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";
// import { ConnectButton } from "web3uikit";
import CellPhoneNav from "./CellPhoneNav";
function Navbar() {
  //Create JSX

  const createNavList = (navItems: navItem[]) => {
    return navItems.map((item) => (
      <li key={item.id} className={item.classNames}>

        {item.root ? (
          <Link to={item.root}>
            {item.name}
            {item.component && item.component}
          </Link>
        ):
          <>
             {item.name}
            {item.component }
          </>
        }{" "}
      </li>
    ));
  };



  //----------------
  return (
    <section>
      <nav className="hidden md:block ">
        <div className=" px-1 md:flex  md:px-4 justify-between  items-center py-2 ">
          <ul className="flex items-center flex-1 ">
            <>
            <Badge badgeContent={4}>
              <BookmarkBorder
            </Badge>

            {createNavList(navItemsLeft)}
            </>
          </ul>
          <ul>{createNavList(navItemsCenter)}</ul>
          <ul className="flex flex-row-reverse items-center flex-1  ">
            <li>
            <Badge ></Badge>
            </li>
            {createNavList(navItemsRight)}
          </ul>
        </div>
        {/* <CustomDivider /> */}
      </nav>
      <CellPhoneNav />
      <CustomDivider />

    </section>
  );
}

export default Navbar;
