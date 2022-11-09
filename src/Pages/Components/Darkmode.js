import { useEffect, useState } from "react";
import { ReactComponent as DarkIcon } from "../Components/darkmode.svg";
import { ReactComponent as LightIcon } from "../Components/lightmode.svg";

function Darkmode({}) {
  const [theme, setTheme] = useState(false);
  const handleClick = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  });

  return (
    <div>
      <span onClick={handleClick}>{theme ? <DarkIcon /> : <LightIcon />}</span>

      {/* <span>Light and Dark Theme</span> */}
    </div>
  );
}

export default Darkmode;
