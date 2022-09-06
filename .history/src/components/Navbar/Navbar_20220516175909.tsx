/** @format */
import CustomDivider from "../CustomDivider/CustomDivider";

//Aplication
function Navbar() {
  //Create JSX
  const createNav = () => {
    return (
      <nav className="py-3 px-5">
        <div className="visible md:invisible ">
          <span>Crowd Funding</span>
          <CustomDivider />
        </div>
        <ul className="flex justify-between">
          <li>Login</li>
          <li>bookmarks</li>
          <li className="invisible md:visible">Crowd Funding</li>
          <li>search</li>
          <li>discover</li>
        </ul>
      </nav>
    );
  };

  //----------------
  return (
    <section>
      {createNav()}
      <CustomDivider />
    </section>
  );
}

export default Navbar;