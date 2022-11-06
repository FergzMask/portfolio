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
          <a
            href="https://www.linkedin.com/in/sarahmhancock/"
            target="_blank"
            className="contact-link"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon" />
            Connect via LinkedIn
          </a>
          <div className="contact-link">
            <EmailIcon
              className="icon"
              onClick={() => {
                navigator.clipboard.writeText("email");
              }}
            />
            sarahhancock@shaw.ca
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
