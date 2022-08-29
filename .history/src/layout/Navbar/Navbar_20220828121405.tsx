/** @format */
import CustomDivider from "../../components/CommonDivider/CommonDivider";

//Third Party
import { Link } from "react-router-dom";

//Aplication
import {
  navItemsCenter,
  navItemsRight,
  navItemsLeft,
  navItem,
} from "./navbarConsts";
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";
import { ConnectButton } from "web3uikit";
import ManualConnect from "../../components/ManualConnect/ManualConnect";

function Navbar() {
  //Create JSX
  const createNavList = (navItems: navItem[]) => {
    return navItems.map((item) => (
      <li key={item.id} className={item.classNames}>
        {item.root && (
          <Link to={item.root}>
            {item.name}
            {item.component && item.component}
          </Link>
        )}{" "}
      </li>
    ));
  };

  //----------------
  return (
    <section className="">
      <nav>
        <div className=" md:hidden flex justify-center py-3 ">
          <CrowdFundingLogo width="200px" />
        </div>
        <div className="md:hidden">
          <CustomDivider />
        </div>
        {/* {createNavList()} */}
        <div className="flex justify-between  items-center py-2 px-4">
          <ul className="flex items-center flex-1 ">
            {createNavList(navItemsLeft)}
          </ul>
          <ul>{createNavList(navItemsCenter)}</ul>
          <ul className="flex items-center flex-1 flex-row-reverse	 ">
            {createNavList(navItemsRight)}

              <ConnectButton moralisAuth={false}  />

          </ul>
        </div>
        <CustomDivider />
      </nav>
      {/* <ManualConnect/> */}
    </section>
  );
}

export default Navbar;
