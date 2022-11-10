import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../Components/home-icon.svg";
import { ReactComponent as WorkIcon } from "../Components/work-icon.svg";
import { ReactComponent as AboutIcon } from "../Components/about-icon.svg";
import { ReactComponent as ContactIcon } from "../Components/contact-icon.svg";
import { HashLink } from "react-router-hash-link";
import Darkmode from "./Darkmode";
import { ReactComponent as LightIcon } from "../Components/lightmode.svg";

function Nav() {
  let activeClassName = "highlight";

  return (
    <div className="bottomnav">
      <nav>
        <ul className="bottomnav-list">
          <li>
            <HashLink
              to="/#hash-top"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <HomeIcon className="icon" />
              <p className="bottom-nav-name">Home</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#hash-works"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <WorkIcon className="icon" />
              <p className="bottom-nav-name">Works</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#hash-about"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <AboutIcon className="icon" />
              <p className="bottom-nav-name">About</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#hash-contact"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <ContactIcon className="icon" />
              <p className="bottom-nav-name">Contact</p>
            </HashLink>
          </li>
          <li>
            {/* <LightIcon className="light-icon" /> */}
            <Darkmode />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
