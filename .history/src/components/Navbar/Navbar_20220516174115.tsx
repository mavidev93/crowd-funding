/** @format */
import CustomDivider from "../Divider/Divider";

//Aplication
function Navbar() {
  return (
    <section>
      <nav>
        <ul className="flex ju">
          <li>Login</li>
          <li>bookmarks</li>
          <li>Crowd Funding</li>
          <li>search</li>
          <li>discover</li>
        </ul>
      </nav>
      <CustomDivider />
    </section>
  );
}

export default Navbar;
