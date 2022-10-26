import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../Components/home-icon.svg";
import Nav from "./Nav";
import { ReactComponent as WorkIcon } from "../Components/work-icon.svg";
import { ReactComponent as AboutIcon } from "../Components/about-icon.svg";

const imageFolderPath = process.env.PUBLIC_URL + "./images/";

const Footer = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <footer>
      <Nav />
      {/* <nav className="navigation" onClick={blur}>
        <ul>
          <li>
            <NavLink to="/">
              Home
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/work">
              Works
              <WorkIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
              <AboutIcon />
            </NavLink>
          </li>
        </ul>
      </nav> */}
    </footer>
  );
};

export default Footer;
