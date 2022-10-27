// import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import workslist from "../data/workslist";
import Work from "./Work";
import { Link } from "react-router-dom";

// const imageFolderPath = process.env.PUBLIC_URL + "./images/";

const Works = () => {
  useEffect(() => {
    document.title = `Sarah H - Works`;
  }, []);

  return (
    <div className="works-container" id="hash-works">
      {workslist.map((singleWork, i) => {
        return (
          //   <Work {...singleWork} key={i} />

          <section key={i}>
            <h3>{singleWork.title}</h3>
            <img
              src={`${singleWork.coverimage}`}
              alt="some text here"
              className="works-top-level"
            />
            <h4>Tech Stack</h4>
            <ul>
              <li>{singleWork.tech1}</li>
              <li>{singleWork.tech2}</li>
              <li>{singleWork.tech3}</li>
              <li>{singleWork.tech4}</li>
            </ul>
            <Link to={`/works/${singleWork.name}`}>See More</Link>
          </section>
        );
      })}
    </div>
  );
};

export default Works;
