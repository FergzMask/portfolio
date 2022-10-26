import TopNav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <TopNav />
    <Link to="/">
      <h1>Sarah Hancock</h1>
    </Link>
  </header>
);

export default Header;
