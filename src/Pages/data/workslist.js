import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as LinkIcon } from "../Components/link-icon.svg";
import { ReactComponent as GitHubIcon } from "../Components/github-icon.svg";

const imageFolderPath = process.env.PUBLIC_URL + "../images/";

const worksList = [
  {
    name: "tweeling",
    title: "Tweeling Bakery",
    coverimage: `${imageFolderPath}tweeling.png`,
    coverimagealt: "Screenshot of Tweeling Bakery homepage",
    projectdescription:
      "Tweeling Bakery is an e-commerce page for a fictional restaurant operating in Vancouver.  The site was developed using Woocommerce/WordPress in collaboration with 3 of my classmates from the Front End Web Developer program at BCIT.",
    screenshot1: `${imageFolderPath}tweeling-1.png`,
    ss1alt: "Screenshot of Adobe XD wireframes for Tweeling Bakery site",
    screenshot1description:
      "Wireframes for this page were created collaboratively using Adobe XD as our group worked remotely, as needed.  To start, we made mobile and desktop mockups and once the foundation for the project was set, we experimented with some different colour schemes and layouts before settling on the final design.  From here, we made full-colour, high fidelity mockups to guide our development.",
    screenshot2: `${imageFolderPath}tweeling-2.png`,
    ss2alt:
      "Screenshot of Advanced Custom Fields being used in Tweeling Bakery site",
    screenshot2description:
      "Advanced Custom Fields gave us the flexibility we needed to gather information in a logical way to display on the page.",
    screenshot3: `${imageFolderPath}tweeling-3.png`,
    ss3alt: "Screenshot of GitHub repo for Tweeling Bakery site",
    screenshot3description:
      "With 4 of us working on the site, pushing code and completing pull requests, we were able to work really efficently.",
    tech1: "WordPress",
    tech2: "Woocommerce",
    tech3: "SASS",
    tech4: "Adobe XD",
    learnings:
      "The Tweeling Bakery site was very helpful to get experience working with WordPress to design a fully functional, ready to launch e-commerce page.  Working as a group to design and develop Tweeling collaboratively using Git and GitHub also allowed for a lot of practice communicating via Slack as we each completed our parts and integrated them into the final deliverable.",
    githublogo: `${imageFolderPath}github-icon.svg`,
    githublink: "https://github.com/htpwebdesign/tweeling-bakery",
    linklogo: <LinkIcon />,
    projectlink: "https://tweelingbakery.bcitwebdeveloper.ca/",
  },
  {
    name: "portfolio",
    title: "Web Portfolio",
    coverimage: `${imageFolderPath}portfolio.png`,
    coverimagealt: "Screenshot of the About Page from Sarah's portfolio site",
    projectdescription:
      "This portfolio site sarahhancock.ca showcases a number of skills I learned in the BCIT Front End Web Development Program.  Without technical requirements for this project, the design and development are completely up to me!",
    screenshot1: `${imageFolderPath}portfolio-1.png`,
    ss1alt:
      "Screenshot of Adobe XD wireframes from designing my portfolio site",
    screenshot1description:
      "Starting with wireframes in Adobe XD, I laid out a plan for my design.  I set out to create a simple layout that showcased my projects primarily.",
    screenshot2: `${imageFolderPath}portfolio-2.png`,
    ss2alt: "Screenshot of the mobile view of my portfolio site",
    screenshot2description:
      "I created the site mobile-first and I liked having the opportunity to use a button bar at the bottom for navigation.",
    screenshot3: `${imageFolderPath}portfolio-3.png`,
    ss3alt:
      "Screenshot from VS Code showing the code written to create the dynamic Works page of my portfolio site",
    screenshot3description:
      "Using React let me create pages dynamically, saving a lot of time and creating consistency through the projects I chose to showcase.",
    tech1: "React",
    tech2: "HTML",
    tech3: "CSS",
    tech4: "Adobe XD",
    learnings:
      "I wanted to make this site using React so I could get a lot more practice and familiarity with the framework.  I did have some challenges trying to make everything work as I had intended but I was able to include more than I had anticipated given my timeline.  I'm looking forward to continuing to work on the site as I continue to develop my skills.",
    githublogo: `${imageFolderPath}github-icon.svg`,
    githublink: "https://github.com/FergzMask/portfolio",
    linklogo: <LinkIcon />,
    projectlink: "",
  },
  {
    name: "corn",
    title: "Chilliwacky Corn",
    coverimage: `${imageFolderPath}corn.png`,
    coverimagealt:
      "Screenshot of the initial load page of my Chilliwacky Corn game",
    projectdescription:
      "Chilliwacky Corn is an original JavaScript game where the user has to guess a sequence of numbers correctly to win the game.",
    screenshot1: `${imageFolderPath}corn-2.png`,
    ss1alt: "Screenshot of the data validation screen of Chilliwacky Corn",
    screenshot1description:
      "The user selects their guesses in these dropdown menus and when they press the Submit button, their guess is entered as an array and compared to the random array generated at the start of the game.  Feedback is given to the user so they can prepare their next guess.",
    screenshot2: `${imageFolderPath}corn-1.png`,
    ss2alt: "Screenshot of the pop-up modal from Chilliwacky Corn",
    screenshot2description:
      "A pop-up modal shows the user instructions about how to play the game.",
    screenshot3: `${imageFolderPath}corn-3.png`,
    ss3alt:
      "Screenshot from the final screen of Chilliwacky Corn where the player makes their final selection",
    screenshot3description:
      "When the user correctly guesses the secret code or they've exceeded the number of tries, the game ends with a unique 'Game Over' message with an option to restart or end the game.",
    tech1: "JavaScript",
    tech2: "HTML",
    tech3: "CSS",
    tech4: "Git/GitHub",
    learnings:
      "Creating this game was a fun way to practice my JavaScript skills.  I was really challenged by figuring out how to compare the two arrays in order to validate the user's guess.  I liked designing a game theme around the code-break concept and trying to make a game that I would like to play.",
    githublogo: `${imageFolderPath}github-icon.svg`,
    githublink: "https://github.com/FergzMask/corn",
    linklogo: <LinkIcon />,
    projectlink: "https://www.sarahhancock.ca/corn",
  },
  {
    name: "kardsharp",
    title: "KardSharp Kards",
    coverimage: `${imageFolderPath}kardsharp.png`,
    coverimagealt: "Screenshot of KardSharp Kards homepage",
    projectdescription:
      "Kardsharp Kards is a Shopify site created for a client to sell her handmade greeting cards.  This page is a solo project and is anticipated to launch December 2022.",
    screenshot1: `${imageFolderPath}kardsharp-1.png`,
    ss1alt:
      "Screenshot of individual card page from KardSharp Kards showing customization fields",
    screenshot1description:
      "As the artist offers customized items, I added and configured the Globo Product Variant app to allow personalized greetings, a new shipping method and a conditional field to set an alternative mailing address.  The site also uses the Mahina Event Calendar app to share the craft fairs that will be hosting KardSharp Kards.",
    screenshot2: `${imageFolderPath}kardsharp-2.png`,
    ss2alt:
      "Screenshot showing discounts and promotions set up for the store owner",
    screenshot2description:
      "Setting up multiple discount offers to allow KardSharp to clear out excess inventory and welcome new customers with a discount.",
    screenshot3: `${imageFolderPath}kardsharp-3.png`,
    ss3alth:
      "Screenshot of all the products set up so far to be sold on the KardSharp Kards site",
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
];

export default worksList;
