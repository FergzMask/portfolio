import { useState } from "react";
import { useParams } from "react-router-dom";
import worksList from "../data/workslist";
import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as LinkIcon } from "../Components/link-icon.svg";
import { ReactComponent as GitHubIcon } from "../Components/github-icon.svg";
import { Link } from "react-router-dom";

const Work = () => {
  let { id } = useParams();
  // let githubexist = singleWork.githublink;

  // const githuboption = () => {
  //   if (githubexist !== null) {
  //     return (
  //       <div className="github">
  //         <GitHubIcon />
  //         <Link to={`${singleWork.githublink}`}>GitHub</Link>
  //       </div>
  //     );
  //   } else {
  //     return;
  //   }
  // };

  return (
    <section className="work-page" id="hash-work">
      <div>
        {worksList
          .filter((singleWork) => singleWork.name === id)
          .map((singleWork, i) => (
            <article key={i}>
              <h2 className="work-title">{singleWork.title}</h2>
              <img
                sizes="(max-width: 1080px) 100vw, 1080px"
                srcSet={`${singleWork.coverimagesrcset500} 500w,
                        ${singleWork.coverimagesrcset826} 826w,
                        ${singleWork.coverimagesrcset1080} 1080w`}
                src={`${singleWork.coverimage}`}
                alt={`${singleWork.coverimagealt}`}
                className="work-cover-image"
              />
              <p>{singleWork.projectdescription}</p>
              <h3 className="work-features">Features</h3>
              <article className="work-features-article">
                <img
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  srcSet={`${singleWork.ss1srcset500} 500w,
                        ${singleWork.ss1srcset826} 826w,
                        ${singleWork.ss1srcset1080} 1080w`}
                  src={`${singleWork.screenshot1}`}
                  alt={`${singleWork.ss1alt}`}
                  className="work-small-image"
                />
                <p>{singleWork.screenshot1description}</p>
              </article>
              <article className="work-features-article">
                <img
                  sizes="(max-width: 1019px) 100vw, 1019px"
                  srcSet={`${singleWork.ss2srcset500} 500w,
                      ${singleWork.ss2srcset826} 826w,
                      ${singleWork.ss2srcset1080} 1019w`}
                  src={`${singleWork.screenshot2}`}
                  alt={`${singleWork.ss2alt}`}
                  className="work-small-image"
                />
                <p>{singleWork.screenshot2description}</p>
              </article>
              <article className="work-features-article">
                <img
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  srcSet={`${singleWork.ss3srcset500} 500w,
                      ${singleWork.ss3srcset826} 826w,
                      ${singleWork.ss3srcset1080} 1080w`}
                  src={`${singleWork.screenshot3}`}
                  alt={`${singleWork.ss3alt}`}
                  className="work-small-image"
                />
                <p>{singleWork.screenshot3description}</p>
              </article>

              <h4 className="learnings">Learnings from this project: </h4>
              <p>{singleWork.learnings}</p>
              <div className="contact-icons">
                {singleWork.githublink !== "null" ? (
                  <div className="contact-link">
                    <a
                      href={singleWork.githublink}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      <GitHubIcon className="icon" />
                      <p>GitHub</p>
                    </a>
                  </div>
                ) : null}

                {singleWork.projectlink !== "null" ? (
                  <div>
                    <a
                      href={singleWork.projectlink}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      <LinkIcon className="icon" />
                      <p>Website</p>
                      {singleWork.name === "kardsharp" ? (
                        <p className="password">Password: shotha</p>
                      ) : null}
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Work;
