import { useState } from "react";
import { useParams } from "react-router-dom";
import worksList from "../data/workslist";
import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as LinkIcon } from "../Components/link-icon.svg";
import { ReactComponent as GitHubIcon } from "../Components/github-icon.svg";

const Work = () => {
  let { id } = useParams();
  // const [github, setGithub] = useState(true);

  return (
    <section>
      <div>
        {worksList
          .filter((singleWork) => singleWork.name === id)
          .map((singleWork, i) => (
            <article key={i}>
              <h2>{singleWork.title}</h2>
              <img
                src={`${singleWork.coverimage}`}
                alt="screenshot of webpage"
                className="work-cover-image"
              />
              <p>{singleWork.projectdescription}</p>
              <img
                src={`${singleWork.screenshot1}`}
                alt="screenshot of webpage"
                className="work-small-image"
              />
              <p>{singleWork.screenshot1description}</p>
              <img
                src={`${singleWork.screenshot2}`}
                alt="screenshot of webpage"
                className="work-small-image"
              />
              <p>{singleWork.screenshot2description}</p>
              <img
                src={`${singleWork.screenshot3}`}
                alt="screenshot of webpage"
                className="works-second-level"
              />
              <p>{singleWork.screenshot3description}</p>
              {/* {`${singleWork.githublink !== ""}` && (
                <img src={`${(<GitHubIcon />)}`} alt="GitHub icon" />
              )} */}
              <p>
                <strong>Learnings from this project:</strong>{" "}
                {singleWork.learnings}
              </p>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Work;
