import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../Components/email-icon.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Contact = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const email = "sarahhancock@shaw.ca";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Email copied!");
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    // setInstructions(`click to copy ${email}`);
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
            className="contact-link email"
            onClick={copyEmail}
            onMouseOver={showInstruction}
            onMouseOut={hideInstruction}
          >
            <EmailIcon className="icon relative" />
            <p>Email</p>{" "}
          </div>
          <span className="get-email">
            {copySuccessMessage} {instructions}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
