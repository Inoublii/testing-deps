import styles from "./styles.module.scss";
import { messages, sky } from "./consts";
const HighFnaks = () => {
  let fnak_index = [0, 1, 2, 3, 2, 1, 0];
  return (
    <div className={styles.highfnaks}>
      <div className={styles.sky}>
        <img className={styles.planet1} src={sky.planet1} width={200} />
        <img className={styles.ship} src={sky.ship} width={1000} />
        <img className={styles.planet2} src={sky.planet2} width={150} />
      </div>

      <div className={styles.fnakslist}>
        {fnak_index.map((el, idx) => {
          let style = { zIndex: el };
          let width = idx !== 3 ? 270 : 400;
          return (
            <img
              key={idx}
              style={style}
              width={width}
              src={`assets/images/3/fnaksList/fnak${idx + 1}.png`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HighFnaks;
