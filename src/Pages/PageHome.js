import Works from "./Components/Works";
// import Nav from "./Components/Nav";
import { useEffect } from "react";
import About from "./Components/About";

const PageHome = () => {
  useEffect(() => {
    document.title = `Sarah H - Web Developer`;
  }, []);

  return (
    <section>
      <p>Hi! It's great to meet you!</p>
      <p>
        I'm a front end developer who gets a kick out of making websites that
        look great and are easy to use.
      </p>
      <p>Let me show you what I've been working on!</p>
      <Works />
      <About />
    </section>
  );
};

export default PageHome;
