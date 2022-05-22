/** @format */
import CustomDivider from "../CustomDivider/CustomDivider";

//Aplication
function Navbar() {
  //Create JSX
  const createNavList = () => {
    return (
      <ul className="flex justify-between py-3 px-5">
        <li>Login</li>
        <li>bookmarks</li>
        <li className="hidden md:list-item">Crowd Funding</li>
        <li>search</li>
        <li>discover</li>
      </ul>
    );
  };

  //----------------
  return (
    <section className="py-2">
      <nav>
        <div className=" md:hidden  ">
          <p className="text-center py-2">Crowd Funding</p>
          <CustomDivider />
        </div>
        {createNavList()}
        <CustomDivider />
      </nav>
    </section>
  );
}

export default Navbar;
