import { NavLink } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "./images/";

const Footer = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <footer>
      <nav className="navigation" onClick={blur}>
        <ul>
          <li>
            <NavLink to="/">
              Home
              <img src={`${imageFolderPath}home-icon.svg`} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/work">
              Works
              <img src={`${imageFolderPath}work-icon.svg`} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
              <img src={`${imageFolderPath}about-icon.svg`} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
