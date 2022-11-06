import { NavLink } from "react-router-dom";

function TopNav() {
  let activeClassName = "highlight";

  return (
    <div className="topnav">
      <div className="nav-titles">
        <h1 className="top-h1">Sarah H.</h1>
        <h2 className="top-h2">Web Developer</h2>
      </div>
      <nav>
        <ul className="top-nav-list">
          <li>
            <NavLink
              to="/"
              className={`bottomnav-list-item ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <p className="top-nav-text">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Works"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <p className="top-nav-text">Works</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="About"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <p className="top-nav-text">About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <p className="top-nav-text">Contact</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopNav;
