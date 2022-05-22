/** @format */
import CustomDivider from "../../components/CustomDivider/CustomDivider";

//Third Party
import { Link } from "react-router-dom";

//Aplication
import { navItems } from "./navbarConsts";
import { ReactComponent as CrowdFundingLogo } from "../../assets/images/CROWD-FUNDING-logo.svg";

function Navbar() {
  //Create JSX
  const createNavList = () => {
    return (
      <ul className="flex gap-2 capitalize  py-3 px-5 ">
        {/* <Link to="/login">Login</Link>
        <li>bookmarks</li>
        <li className="hidden md:list-item italic font-bold  text-primary-color">
          Crowd Funding
        </li>
        <li>search</li>
        <li>discover</li> */}
        {navItems.map((item) => (
          <li key={item.id} className={item.classNames}>
            {item.name}
            {item.icon && item.icon}
          </li>
        ))}
      </ul>
    );
  };

  //----------------
  return (
    <section className="">
      <nav>
        <div className=" md:hidden flex ju ">
          <CrowdFundingLogo width="200px" height="auto" />
          <CustomDivider />
        </div>
        {createNavList()}
        <CustomDivider />
      </nav>
    </section>
  );
}

export default Navbar;
