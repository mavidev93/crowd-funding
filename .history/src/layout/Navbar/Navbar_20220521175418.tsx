/** @format */
import CustomDivider from "../../components/CustomDivider/CustomDivider";

//Third Party
import { Link } from "react-router-dom";

//Aplication
function Navbar() {
  //Create JSX
  const createNavList = () => {
    return (
      <ul className="flex justify-between py-3 px-5">
        <Link to="/login">Login</Link>
        <li>bookmarks</li>
        <li className="hidden md:list-item italic font-bold  co">Crowd Funding</li>
        <li>search</li>
        <li>discover</li>
      </ul>
    );
  };

  //----------------
  return (
    <section className="">
      <nav>
        <div className=" md:hidden  ">
          <p className="text-center italic py-2 font-bold">Crowd Funding</p>
          <CustomDivider />
        </div>
        {createNavList()}
        <CustomDivider />
      </nav>
    </section>
  );
}

export default Navbar;
