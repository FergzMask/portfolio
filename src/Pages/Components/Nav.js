import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../Components/home-icon.svg";
import { ReactComponent as WorkIcon } from "../Components/work-icon.svg";
import { ReactComponent as AboutIcon } from "../Components/about-icon.svg";
import { ReactComponent as ContactIcon } from "../Components/contact-icon.svg";

function Nav() {
  let activeClassName = "highlight";

  return (
    <div className="bottomnav">
      <nav>
        <ul className="bottomnav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Works"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <WorkIcon />
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="About"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <AboutIcon />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <ContactIcon />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
