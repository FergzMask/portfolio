import Works from "./Components/Works";
import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Scroll from "./Components/Scroll";

const PageHome = () => {
  useEffect(() => {
    document.title = `Sarah H - Web Developer`;
  }, []);

  // code borrowed from https://codepen.io/pradeep-selva/pen/ZEevrar
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => window.removeEventListener("scroll", listenToScroll);
  // }, []);

  // const listenToScroll = () => {
  //   let heightToHideFrom = 200;
  //   const winScroll = window.scrollY;

  //   if (winScroll > heightToHideFrom) {
  //     isVisible && setIsVisible(false);
  //   } else {
  //     setIsVisible(true);
  //   }
  // };

  return (
    <div id="hash-top">
      <section className="intro">
        <p>Hi! It's great to meet you!</p>
        <p>
          I'm a front end developer based in the Fraser Valley. I get a kick out
          of making websites that look great and are easy to use.
        </p>
        <p>Let me show you what I've been working on!</p>
        <Works />
        <About />
        <Contact />
        {/* {isVisible && <Scroll />} */}
      </section>
    </div>
  );
};

export default PageHome;
