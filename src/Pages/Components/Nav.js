import { NavLink } from "react-router-dom";

function Nav() {
  let activeClassName = "highlight";

  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
}

export default Nav;
