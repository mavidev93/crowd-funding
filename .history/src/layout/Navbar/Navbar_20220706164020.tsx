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
      <ul className="flex gap-2 capitalize  py-3 px-5 items-center">
        {navItems.map((item) => (
          <li key={item.id} className={item.classNames}>
            {item.root && <Link to={item.root}>{item.name}</Link>}{" "}
            {item.component && item.component}
          </li>
        ))}
      </ul>
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
        {createNavList()}
        <CustomDivider />
      </nav>
    </section>
  );
}

export default Navbar;
