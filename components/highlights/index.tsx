import styles from "./styles.module.scss";
import { messages } from "./consts";
import HighFnaks from "./highfnaks";
import HorizRoadmap from "./horizroadmap";
import TrailerCards from "./trailercards";

const Highlights = () => {
  return (
    <section className={styles.highContainer}>
      < HighFnaks />

    </section>
  );
};

export default Highlights;

// <h1>{messages.title}</h1>
// <p>{messages.text}</p>
// < HorizRoadmap />
// < TrailerCards />
