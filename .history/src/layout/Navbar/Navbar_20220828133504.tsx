/** @format */
import CustomDivider from "../../components/CommonDivider/CommonDivider";

//Third Party
import { Link } from "react-router-dom";

//App
import {
  navItemsCenter,
  navItemsRight,
  navItemsLeft,
  navItem,
} from "./Navbar.static";
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";
import { ConnectButton } from "web3uikit";
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
      <nav>
        <div className="  px-1 hidden md:flex  md:px-4 justify-between  items-center py-2 ">
          <ul className="flex items-center flex-1 ">
            {createNavList(navItemsLeft)}
          </ul>
          <ul>{createNavList(navItemsCenter)}</ul>
          <ul className="flex items-center flex-1 	 ">
            {createNavList(navItemsRight)}

            {/* <ConnectButton moralisAuth={false} /> */}
          </ul>
        </div>
        <CellPhoneNav />
        <CustomDivider />
      </nav>
      {/* <ManualConnect/> */}
    </section>
  );
}

export default Navbar;
