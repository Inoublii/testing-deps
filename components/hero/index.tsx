import styles from "./styles.module.scss";
import { messeges } from "./consts";
const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.fnakZone}>
        <h1 className={styles.title}>{messeges.title}</h1>
        <img className={styles.heroImage} src={messeges.imgUrl} width={200} />
      </div>

      <h2>{messeges.subTitle}</h2>

      <h3>{messeges.text}</h3>
      <button className={styles.button}>{messeges.buttonText}</button>
    </section>
  );
};

export default Hero;
