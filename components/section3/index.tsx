import styles from "./styles.module.css";
import { fnaksUrls, sky } from "./consts";
const Section3 = () => {
  return (
    <section className={styles.section3}>


      <div className={styles.sky}>
        <img className={styles.planet1} src={sky.planet1} />
        <img className={styles.ship} src={sky.ship} />
        <img className={styles.planet2} src={sky.planet2} />
      </div>


      <div className={styles.fnaksList}>

        {fnaksUrls.map((el, idx) => {
          return (
            <img key={idx} className={styles[`fnak-${idx + 1}`]} src={el} />
          )
        })}


      </div>

    </section>
  );
};

export default Section3;
