/** @format */


//Aplication
function Navbar() {
  return (
    <section>
      <nav>
        <ul>
          <li>Login</li>
          <li>bookmarks</li>
          <li>Crowd Funding</li>
          <li>search</li>
          <li>discover</li>
        </ul>
      </nav>
      <div className="mx-3">
        <Divider />
      </div>
    </section>
  );
}

export default Navbar;
