/** @format */
import CustomDivider from "../CustomDivider/CustomDivider";

//Aplication
function Navbar() {
  //Create JSX
  const createNav = () => {
    return (
      <nav className="py-3 px-5">
        <ul className="flex justify-between">
          <li>Login</li>
          <li>bookmarks</li>
          <li className="hiden md:visible">Crowd Funding</li>
          <li>search</li>
          <li>discover</li>
        </ul>
      </nav>
    );
  };

  //----------------
  return (
    <section>
      <div className=" md:hidden ">
        <span>Crowd Funding</span>
        <CustomDivider />
      </div>
      {createNav()}
      <CustomDivider />
    </section>
  );
}

export default Navbar;
