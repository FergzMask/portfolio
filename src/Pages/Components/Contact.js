import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../Components/email-icon.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Contact = () => {
  // code to create copy option for email adapted from https://sophiali.dev/copy-email-address-on-click-react
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const email = "sarahhancock@shaw.ca";

  // copied message disappears after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  // give an alert when email address has been copied to clipboard
  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Email copied!");
    setInstructions("");
  }

  // popup to let the user know what to do next
  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions("Copy email?");
  }

  function hideInstruction() {
    setInstructions("");
  }

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
            <p>LinkedIn</p>
          </a>
          <div
            className="contact-link email relative"
            onClick={copyEmail}
            onMouseOver={showInstruction}
            onMouseOut={hideInstruction}
          >
            <EmailIcon className="icon" />
            <p>Email</p>{" "}
            <span className="get-email">
              {copySuccessMessage} {instructions}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
