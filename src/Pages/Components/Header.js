import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Nav />
    <Link to="/">
      <h1>Sarah Hancock</h1>
    </Link>
  </header>
);

export default Header;
