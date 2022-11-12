import { useEffect, useState } from "react";
import { ReactComponent as DarkIcon } from "../Components/darkmode.svg";
import { ReactComponent as LightIcon } from "../Components/lightmode.svg";

function Darkmode() {
  const [theme, setTheme] = useState(false);
  const handleClick = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    let darkmode = document.getElementsByClassName("AppRouter");
    if (theme === true) {
      darkmode[0].classList.add("light");
    } else {
      darkmode[0].classList.remove("light");
    }
  });

  return (
    <div className="darktext" onClick={handleClick}>
      {theme ? (
        <div className="light-icon-container">
          <DarkIcon className="cancel-dark" />
          <p>Dark</p>
        </div>
      ) : (
        <div className="light-icon-container">
          <LightIcon className="cancel-light" />
          <p>Light</p>
        </div>
      )}
    </div>
  );
}

export default Darkmode;
