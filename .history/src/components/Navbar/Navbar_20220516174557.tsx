/** @format */
import CustomDivider from "../Divider/CustomDivider";

//Aplication
function Navbar() {
  return (
    <section>
      <nav className="py-3 px-5">
        <ul className="flex justify-between">
          <li>Login</li>
          <li>bookmarks</li>
          <li className="">Crowd Funding</li>
          <li>search</li>
          <li>discover</li>
        </ul>
      </nav>
      <CustomDivider />
    </section>
  );
}

export default Navbar;
