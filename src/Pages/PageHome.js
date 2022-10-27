import Works from "./Components/Works";
// import Nav from "./Components/Nav";
import { useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";

const PageHome = () => {
  useEffect(() => {
    document.title = `Sarah H - Web Developer`;
  }, []);

  return (
    <div>
      <section>
        <p>Hi! It's great to meet you!</p>
        <p>
          I'm a front end developer based in the Fraser Valley who gets a kick
          out of making websites that look great and are easy to use.
        </p>
        <p>Let me show you what I've been working on!</p>
        <Works />
        <About />
        <Contact />
      </section>
    </div>
  );
};

export default PageHome;
