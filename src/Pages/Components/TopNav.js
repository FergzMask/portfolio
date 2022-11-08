// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function TopNav() {
  let activeClassName = "highlight";

  return (
    <div className="topnav">
      <div className="nav-titles">
        <HashLink
          to="/#hash-top"
          className={`({ isActive }) =>
                isActive ? className : undefined
              `}
        >
          <h1 className="top-h1">Sarah H.</h1>
          <h2 className="top-h2">Web Developer</h2>
        </HashLink>
      </div>
      <nav>
        <ul className="top-nav-list">
          <li>
            <HashLink
              to="/#hash-top"
              className={`top-button-block ({ isActive }) =>
              isActive ? className : undefined
            `}
            >
              <p className="top-nav-text">Home</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#hash-works"
              className={`top-button-block ({ isActive }) =>
                isActive ? className : undefined
              `}
            >
              <p className="top-nav-text">Works</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#hash-about"
              className={`top-button-block ({ isActive }) =>
                isActive ? className : undefined
              `}
            >
              <p className="top-nav-text">About</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#hash-contact"
              className={`top-button-block ({ isActive }) =>
                isActive ? className : undefined
              `}
            >
              <p className="top-nav-text">Contact</p>
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopNav;
