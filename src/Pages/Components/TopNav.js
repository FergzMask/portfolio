import { NavLink } from "react-router-dom";

function TopNav() {
  let activeClassName = "highlight";

  return (
    <div className="topnav">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
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
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopNav;
