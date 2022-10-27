import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as LinkIcon } from "../Components/link-icon.svg";
import { ReactComponent as GitHubIcon } from "../Components/github-icon.svg";

const imageFolderPath = process.env.PUBLIC_URL + "../images/";

const worksList = [
  {
    name: "kardsharp",
    title: "KardSharp Kards",
    coverimage: `${imageFolderPath}kardsharp.png`,
    projectdescription:
      "Lorem 1-2 lines describing the Project including goals, technology",
    screenshot1: `${imageFolderPath}kardsharp.png`,
    screenshot1description: "Ipsum",
    screenshot2: `${imageFolderPath}kardsharp.png`,
    screenshot2description: "LoremIpsum",
    screenshot3: `${imageFolderPath}kardsharp.png`,
    screenshot3description: "What I learned etc",
    tech1: "Shopify",
    tech2: "Liquid",
    tech3: "Adobe XD",
    tech4: "CSS",
    learnings: "Chitchat",
    githublogo: "",
    githublink: "",
    linklogo: <LinkIcon />,
    projectlink: "",
  },
  {
    name: "tweeling",
    title: "Tweeling Bakery",
    coverimage: `${imageFolderPath}/tweeling.png`,
    projectdescription: "Lorem",
    screenshot1: `${imageFolderPath}/tweeling.png`,
    screenshot1description: "Ipsum",
    screenshot2: `${imageFolderPath}/tweeling.png`,
    screenshot2description: "LoremIpsum",
    screenshot3: `${imageFolderPath}/tweeling.png`,
    screenshot3description: "What I learned etc",
    tech1: "React",
    tech2: "WordPress",
    tech3: "REST API",
    tech4: "SASS",
    learnings: "Chitchat about Capstone",
    githublogo: `${imageFolderPath}/github-icon.svg`,
    githublink: "",
    linklogo: <LinkIcon />,
    projectlink: "",
  },
  {
    name: "portfolio",
    title: "Web Portfolio",
    coverimage: `${imageFolderPath}/kardsharp.png`,
    projectdescription: "Lorem",
    screenshot1: `${imageFolderPath}/kardsharp.png`,
    screenshot1description: "Ipsum",
    screenshot2: `${imageFolderPath}/kardsharp.png`,
    screenshot2description: "LoremIpsum",
    screenshot3: `${imageFolderPath}/kardsharp.png`,
    screenshot3description: "What I learned etc",
    tech1: "React",
    tech2: "HTML",
    tech3: "CSS",
    tech4: "",
    learnings: "Chitchat about the Portfolio",
    githublogo: `${imageFolderPath}/github-icon.svg`,
    githublink: "https://github.com/FergzMask/portfolio",
    linklogo: <LinkIcon />,
    projectlink: "",
  },
  {
    name: "corn",
    title: "Chilliwacky Corn",
    coverimage: `${imageFolderPath}/corn.png`,
    projectdescription: "Lorem",
    screenshot1: `${imageFolderPath}/corn.png`,
    screenshot1description: "Ipsum",
    screenshot2: `${imageFolderPath}/corn.png`,
    screenshot2description: "LoremIpsum",
    screenshot3: `${imageFolderPath}/corn.png`,
    screenshot3description: "What I learned etc",
    tech1: "JavaScript",
    tech2: "HTML",
    tech3: "CSS",
    tech4: "",
    learnings: "Chitchat about Corn",
    githublogo: `${imageFolderPath}/github-icon.svg`,
    githublink: "https://github.com/FergzMask/corn",
    linklogo: <LinkIcon />,
    projectlink: "",
  },
];

export default worksList;
