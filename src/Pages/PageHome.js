import Works from "./Components/Works";
import Nav from "./Components/Nav";
import { useEffect } from "react";
import About from "./Components/About";

const PageHome = () => {
  useEffect(() => {
    document.title = `Sarah H - Web Developer`;
  }, []);

  return (
    <section>
      <p>Don't call it a comeback</p>
      <Works />
      <About />
    </section>
  );
};

export default PageHome;
