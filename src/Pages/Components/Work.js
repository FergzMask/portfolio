import { useParams } from "react-router-dom";
import worksList from "../data/workslist";

const Work = () => {
  let { id } = useParams();

  return (
    <section>
      <div>
        {worksList
          .filter((singleWork) => singleWork.name === id)
          .map((singleWork, i) => (
            <div key={i}>
              <h2>{singleWork.title}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Work;
