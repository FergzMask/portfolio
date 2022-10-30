import TopNav from "./TopNav";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div id="hash-top">
      <TopNav />
      <Link to="/#hash-top">
        <h1 className="name-title">Sarah H.</h1>
        <h2 className="job-title">Web Developer</h2>
      </Link>
    </div>
  </header>
);

export default Header;
