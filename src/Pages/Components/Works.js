// import { Outlet } from "react-router-dom";

const imageFolderPath = process.env.PUBLIC_URL + "./images/";

const Works = () => (
  <section>
    <h2>Works</h2>
    {/* <Outlet /> */}
    <div className="project1">
      <h3>KardSharp Kards</h3>
      <img
        className="works-top-level"
        src={`${imageFolderPath}kardsharp.png`}
        alt="Screenshot of KardSharp Kards webpage"
      />
      <h4>Tech Stack</h4>
      <ul>
        <li className="nav-item">Shopify Platform</li>
        <li className="nav-item">Liquid</li>
        <li className="nav-item">HTML</li>
        <li className="nav-item">CSS</li>
      </ul>
    </div>

    <div className="project2">
      <h3>Capstone Project</h3>
      <img
        className="works-top-level"
        src={`${imageFolderPath}kardsharp.png`}
        alt="screenshot of Capstone Project"
      />
      <h4>Tech Stack</h4>
      <ul>
        <li className="nav-item">React</li>
        <li className="nav-item">WordPress</li>
        <li className="nav-item">REST API</li>
        <li className="nav-item">SASS</li>
      </ul>
    </div>

    <div className="project3">
      <h3>Portfolio Site</h3>
      <img
        className="works-top-level"
        src={`${imageFolderPath}kardsharp.png`}
        alt="Portfolio site screenshot"
      />
      <h4>Tech Stack</h4>
      <ul>
        <li className="nav-item">React</li>
        <li className="nav-item">Git/GitHub</li>
        <li className="nav-item">HTML</li>
        <li className="nav-item">CSS</li>
      </ul>
    </div>

    <div className="project4">
      <h3>Chilliwacky Corn</h3>
      <img
        className="works-top-level"
        src={`${imageFolderPath}corn.png`}
        alt="Chilliwacky Corn game screenshot"
      />
      <h4>Tech Stack</h4>
      <ul>
        <li className="nav-item">JavaScript</li>
        <li className="nav-item">HTML</li>
        <li className="nav-item">CSS</li>
      </ul>
    </div>
  </section>
);

export default Works;
