/** @format */
import CustomDivider from "../../components/CustomDivider/CustomDivider";

//Third Party
import { Link } from "react-router-dom";

//Aplication
import { navItemsCenter,navItemsRight,navItemsLeft,navItem } from "./navbarConsts";
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";

function Navbar() {
  //Create JSX
  const createNavList = (navItems:navItem[]) => {
    return (
   
    );
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
        <div className="flex justify-between align-middle">
          <section className=""></section>
          <section></section>
          <section></section>
        </div>
        <CustomDivider />
      </nav>
    </section>
  );
}

export default Navbar;
