const imageFolderPath = process.env.PUBLIC_URL + "./images/";

const About = () => {
  return (
    <section>
      <article>
        <img
          src={`${imageFolderPath}/sarah.png`}
          alt="Sarah smiling and wearing a black shirt"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
          neque porta, porttitor libero et, dapibus ipsum. Proin tincidunt nec
          nisl et lacinia. Quisque vitae mauris nec tellus volutpat placerat non
          nec urna.{" "}
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
          neque porta, porttitor libero et, dapibus ipsum. Proin tincidunt nec
          nisl et lacinia. Quisque vitae mauris nec tellus volutpat placerat non
          nec urna.{" "}
        </p>
        <img
          src={`${imageFolderPath}/sarah.png`}
          alt="Sarah smiling and wearing a black shirt"
        />
      </article>
    </section>
  );
};

export default About;
