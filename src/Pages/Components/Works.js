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
            <Link to={`/works/${singleWork.name}`}>
              <h3>{singleWork.title}</h3>
              <img
                src={`${singleWork.coverimage}`}
                alt="some text here"
                className="works-top-level"
              />
              <h4>Tech Stack</h4>
              <ul>
                <li className="original-color">{singleWork.tech1}</li>
                <li className="original-color">{singleWork.tech2}</li>
                <li className="original-color">{singleWork.tech3}</li>
                <li className="original-color">{singleWork.tech4}</li>
              </ul>
              <div>See More</div>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default Works;
