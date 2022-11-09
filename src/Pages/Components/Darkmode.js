import { useEffect, useState } from "react";
import { ReactComponent as DarkIcon } from "../Components/darkmode.svg";
import { ReactComponent as LightIcon } from "../Components/lightmode.svg";

function Darkmode({}) {
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
    <div>
      {/* <span onClick={handleClick}>{theme ? <DarkIcon /> : <LightIcon />}</span> */}
      <span className="darktext" onClick={handleClick}>
        {theme ? "Dark Mode" : "Light Mode"}
      </span>

      {/* <span>Light and Dark Theme</span> */}
    </div>
  );
}

export default Darkmode;
