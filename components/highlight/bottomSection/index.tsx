import Image from "next/image";
import styles from "./styles.module.scss";

const BottomSection = () => {
  return (
    <div className={styles.BottomSectionContainer}>
      <div className={styles.BottomCard}>
        <div className={styles.BottomCardHead}>
          <h3>RISE OF SOLFENNEX</h3>
          <p>
            Our project is based on outstanding art with a variety ofhandcrafted
            features. Being one of the best an
          </p>
          <br />
        </div>
        <div className={styles.BottomCardBody}>
          <Image
            src="/assets/images/3/layer1.png"
            width={380}
            height={212}
            alt="fnak"
          />
        </div>
      </div>
      <div className={styles.BottomCard}>
        <div className={styles.BottomCardHead}>
          <h3>RISE OF SOLFENNEX</h3>
          <p>
            Our project is based on outstanding art with a variety ofhandcrafted
            features. Being one of the best an
          </p>
          <br />
        </div>
        <div className={styles.BottomCardBody}>
          <Image
            src="/assets/images/3/layer1.png"
            width={380}
            height={212}
            alt="fnak"
          />
        </div>
      </div>
      <div className={styles.BottomCard}>
        <div className={styles.BottomCardHead}>
          <h3>RISE OF SOLFENNEX</h3>
          <p>
            Our project is based on outstanding art with a variety ofhandcrafted
            features. Being one of the best an
          </p>
          <br />
        </div>
        <div className={styles.BottomCardBody}>
          <Image
            src="/assets/images/3/layer1.png"
            width={380}
            height={212}
            alt="fnak"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
