import TopNav from "./TopNav";
import { HashLink } from "react-router-hash-link";

const Header = () => (
  <header className="fixed">
    <a className="skip-nav" href="#hash-top">
      Skip To Page
    </a>
    {/* <div id="hash-top"> */}
    <HashLink to="/#hash-top" className="disappearing-title">
      <i>
        <h1 className="name-title">Sarah Hancock</h1>
      </i>
      <h2 className="job-title">Web Developer</h2>
    </HashLink>
    <TopNav />
    {/* </div> */}
  </header>
);

export default Header;
