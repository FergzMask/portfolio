import { ReactComponent as LinkedInIcon } from "../Components/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../Components/email-icon.svg";

const Contact = () => {
  return (
    <div id="hash-contact">
      <section>
        <p>
          Have an idea for a webpage or interested in working together? Let's
          talk!
        </p>
        <LinkedInIcon />
        <EmailIcon />
      </section>
    </div>
  );
};

export default Contact;
