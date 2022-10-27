import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../Components/home-icon.svg";
import { ReactComponent as WorkIcon } from "../Components/work-icon.svg";
import { ReactComponent as AboutIcon } from "../Components/about-icon.svg";
import { ReactComponent as ContactIcon } from "../Components/contact-icon.svg";
import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  let activeClassName = "highlight";

  return (
    <div className="bottomnav">
      <nav>
        <ul className="bottomnav-list">
          <li>
            <Link
              to="/#hash-top"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link
              // to="Works"
              to="/#hash-works"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <WorkIcon />
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/#hash-about"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <AboutIcon />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#hash-contact"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <ContactIcon />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
