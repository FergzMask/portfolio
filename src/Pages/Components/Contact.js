import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../Components/email-icon.svg";

const Contact = () => {
  return (
    <div id="hash-contact">
      <h2>Contact</h2>
      <section>
        <p>
          Have an idea for a webpage or interested in working together? Let's
          talk!
        </p>
        <LinkedInIcon className="icon" />
        <EmailIcon className="icon" />
      </section>
    </div>
  );
};

export default Contact;
