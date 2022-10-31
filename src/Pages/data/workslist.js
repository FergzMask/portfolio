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
      "Kardsharp Kards is a Shopify site created for a client to sell her handmade greeting cards.  This page is a solo project and is anticipated to launch December 2022.",
    screenshot1: `${imageFolderPath}kardsharp-1.png`,
    screenshot1description:
      "As the artist offers customized items, I added and configured the Globo Product Variant app to allow personalized greetings, a new shipping method and a conditional field to set an alternative mailing address.  The site also uses the Mahina Event Calendar app to share the craft fairs that will be hosting KardSharp Kards.",
    screenshot2: `${imageFolderPath}kardsharp-2.png`,
    screenshot2description:
      "Setting up multiple discount offers to allow KardSharp to clear out excess inventory and welcome new customers with a discount.",
    screenshot3: `${imageFolderPath}kardsharp-3.png`,
    screenshot3description:
      "Adding the artist's products to the site gave me the opportunity to configure the layout using both the block editor and Liquid code.  It was great to see the site come to life with all the categories, tags and templates I'd created.",
    tech1: "Shopify",
    tech2: "Liquid",
    tech3: "Adobe XD",
    tech4: "Git/GitHub",
    learnings:
      "Developing this site using the Shopify platform gave me the opportunity to see the inside workings of an e-commerce store.  Working with Liquid code was new to me too so I'm looking forward to getting more experience with this so I can customize sites more indepth.",
    githublogo: "",
    githublink: "",
    linklogo: <LinkIcon />,
    projectlink: "",
  },
  {
    name: "tweeling",
    title: "Tweeling Bakery",
    coverimage: `${imageFolderPath}/tweeling.png`,
    projectdescription:
      "Tweeling Bakery is an e-commerce site for a fictional restaurant operating in Vancouver.  The site was developed using Woocommerce/WordPress in collaboration with 3 of my classmates from the Front End Web Developer program at BCIT.",
    screenshot1: `${imageFolderPath}/tweeling-1.png`,
    screenshot1description:
      "Wireframes for this page were created using Adobe XD which allowed our group to work collaboratively and remotely, as needed.  To start, we made mobile and desktop mockups and once the foundation for the project was set, we experimented with some different colour schemes and layouts before settling on the final design.  From here, we made full-colour, high fidelity mockups to guide our development.",
    screenshot2: `${imageFolderPath}/tweeling-2.png`,
    screenshot2description:
      "In order to create custom content for the site, we used Advanced Custom Fields to give us flexibility to help our client understand the content they needed to fill out to populate the site.  ACF gave us a multitude of options to capture and display the content we needed.",
    screenshot3: `${imageFolderPath}/tweeling-1.png`,
    screenshot3description: "What I learned etc",
    tech1: "WordPress",
    tech2: "Woocommerce",
    tech3: "SASS",
    tech4: "Adobe XD",
    learnings:
      "The Tweeling Bakery site was very helpful to get experience working with WordPress to design a fully functional, ready to launch e-commerce page.  Working as a group to design and develop Tweeling collaboratively using Git and GitHub also allowed for a lot of practice communicating via Slack as we each completed our parts and integrated them into the final deliverable.",
    githublogo: `${imageFolderPath}/github-icon.svg`,
    githublink: "https://github.com/htpwebdesign/tweeling-bakery",
    linklogo: <LinkIcon />,
    projectlink: "https://tweelingbakery.bcitwebdeveloper.ca/",
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
    screenshot1: `${imageFolderPath}/corn-1.png`,
    screenshot1description: "Ipsum",
    screenshot2: `${imageFolderPath}/corn-2.png`,
    screenshot2description: "LoremIpsum",
    screenshot3: `${imageFolderPath}/corn-3.png`,
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
