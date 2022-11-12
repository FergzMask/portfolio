import TopNav from "./TopNav";
import { HashLink } from "react-router-hash-link";

const Header = () => (
  <header className="fixed">
    <a className="skip-nav" href="#hash-top">
      Skip To Page
    </a>
    <HashLink to="/#hash-top" className="disappearing-title">
      <h1 className="name-title shadow">Sarah Hancock</h1>
      <h2 className="job-title shadow">Web Developer</h2>
    </HashLink>
    <TopNav />
  </header>
);

export default Header;
