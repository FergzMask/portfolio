import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../Components/email-icon.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="hash-contact">
      <h2>Contact</h2>
      <section>
        <p className="contact-paragraph">
          Interested in working together? Let's talk!
        </p>
        <div className="contact-icons">
          <Link to="https://www.linkedin.com/in/sarahmhancock/">
            <LinkedInIcon className="icon" />
            Connect via LinkedIn
          </Link>
          <EmailIcon
            className="icon"
            onClick={() => {
              navigator.clipboard.writeText("email");
            }}
          />
          sarahhancock@shaw.ca
        </div>
      </section>
    </div>
  );
};

export default Contact;
