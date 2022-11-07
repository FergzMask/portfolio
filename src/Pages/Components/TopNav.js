// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function TopNav() {
  let activeClassName = "highlight";

  return (
    <div className="topnav">
      <div className="nav-titles">
        <Link to="/">
          <h1 className="top-h1">Sarah H.</h1>
          <h2 className="top-h2">Web Developer</h2>
        </Link>
      </div>
      <nav>
        <ul className="top-nav-list">
          <li>
            <Link
              to="/#hash-top"
              className={`top-button-block ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <p className="top-nav-text">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/#hash-works"
              className={`top-button-block ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <p className="top-nav-text">Works</p>
            </Link>
          </li>
          <li>
            <Link
              to="/#hash-about"
              className={`top-button-block ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <p className="top-nav-text">About</p>
            </Link>
          </li>
          <li>
            <Link
              to="/#hash-contact"
              className={`top-button-block ({ isActive }) =>
                isActive ? activeClassName : undefined
              `}
            >
              <p className="top-nav-text">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopNav;
