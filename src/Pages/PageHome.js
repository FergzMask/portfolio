import Works from "./Components/Works";
import { useEffect } from "react";

const PageHome = () => {
  useEffect(() => {
    document.title = `Sarah H - Web Developer`;
  }, []);

  return (
    <section>
      <p>Don't call it a comeback</p>
      <Works />
    </section>
  );
};

export default PageHome;
