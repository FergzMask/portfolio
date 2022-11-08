import { useEffect } from "react";

const imageFolderPath = process.env.PUBLIC_URL + "./images/";

const About = () => {
  useEffect(() => {
    document.title = `Sarah H - About`;
  }, []);

  return (
    <div id="hash-about">
      <section>
        <h2>About</h2>

        <article className="article-about">
          <img
            src={`${imageFolderPath}sarah.jpeg`}
            alt="Sarah smiling and wearing a black shirt"
            className="works-second-level"
          />
          <p>
            I've had a love for coding since I first discovered I could make
            webpages to document my hobbies. After a career working in sales,
            I'm now blending my interests focusing full time on web development
            with a passion for e-commerce, WordPress and SaaS. I love learning
            and am always curious to develop new skills and find ways to share
            information over the web.{" "}
          </p>
        </article>
        <article className="article-about">
          <img
            src={`${imageFolderPath}sarah2.jpeg`}
            alt="Sarah beside a view of the ocean crashing into the beach"
            className="works-second-level"
          />
          <p>
            When I'm not studying or working online, I love being active in the
            outdoors. I enjoy hiking especially and can usually be found
            wandering the beautiful trails and mountains in the Fraser Valley in
            my free time.{" "}
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
