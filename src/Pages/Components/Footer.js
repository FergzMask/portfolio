import Nav from "./Nav";

const Footer = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <footer>
      <Nav />
    </footer>
  );
};

export default Footer;
