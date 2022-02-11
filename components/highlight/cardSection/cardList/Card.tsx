import { useState } from "react";
import styles from "./styles.module.scss";

const Card = (props: any) => {
  const [DetailVisibility, setDetailVisibility] = useState(false);
  const [details, setDetails] = useState({
    title: "SOLFENNEX",
    subTitle: "UNIVERSE",
    desc: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an",
  });
  return (
    <div>
      <div
        className={styles.card}
        onMouseEnter={() => {
          setDetailVisibility(true);
        }}
        onMouseLeave={() => {
          setDetailVisibility(false);
        }}
      >
        {!DetailVisibility && (
          <img className={styles.bgImg} src="assets/images/3/mac2.png" />
        )}

        {DetailVisibility && (
          <img className={styles.bgImg} src="assets/svg/loz1.svg" />
        )}
        <img className={styles.fnakImg} src={props.fnakImg} />
      </div>
      {DetailVisibility && (
        <div className={styles.detailCardContainer}>
          <h4>{details.title}</h4>

          <h4>{details.subTitle}</h4>

          <p>{details.desc}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
