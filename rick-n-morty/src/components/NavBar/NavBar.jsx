import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <div id="NavContainer">
        {" "}
        Nav Bar Location
        <ul>
          <li>
            <Link to="/"> HomePage</Link>
          </li>
          <li>
            <Link to="characterpage//"> characterpage/</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
