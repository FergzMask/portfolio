import { HashLink } from "react-router-hash-link";
import { ReactComponent as UpArrowIcon } from "../Components/up-arrow.svg";

const Scroll = () => {
  return (
    <HashLink to="/#hash-top">
      <UpArrowIcon className="icon up-icon" />
    </HashLink>
  );
};

export default Scroll;
