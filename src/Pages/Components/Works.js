import workslist from "../data/workslist";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="works-container" id="hash-works">
      <h2 className="works shadow">Works</h2>
      <div className="works-center">
        {workslist.map((singleWork, i) => {
          return (
            <section key={i} className="works-section">
              <Link to={`/works/${singleWork.name}#hash-work`}>
                <h3 className="works-title">{singleWork.title}</h3>
                <div className="image-and-tech">
                  <img
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    srcSet={`${singleWork.coverimagesrcset500} 500w,
                              ${singleWork.coverimagesrcset826} 826w,
                              ${singleWork.coverimagesrcset1080} 1080w`}
                    src={`${singleWork.coverimage}`}
                    alt={`${singleWork.coverimagealt}`}
                    className="works-top-level"
                  />
                  <div className="tech-stack">
                    <h4>Tech Stack</h4>
                    <ul>
                      <li className="original-color tech-names">
                        {singleWork.tech1}
                      </li>
                      <li className="original-color tech-names">
                        {singleWork.tech2}
                      </li>
                      <li className="original-color tech-names">
                        {singleWork.tech3}
                      </li>
                      <li className="original-color tech-names">
                        {singleWork.tech4}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="see-more-button">See More</div>
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
