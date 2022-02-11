import { useState } from "react";
import CardList from "./cardList";
import styles from "./styles.module.scss";

const CardSection = () => {
  const [details, setDetails] = useState({
    title: "SOLFENNEX",
    subTitle: "UNIVERSE",
    desc: "Our project is based on outstanding art with a variety ofhandcrafted features. Being one of the best an",
  });
  return (
    <div>
      <CardList />
      {/* <div className={styles.detailCardContainer}>
        <h4>{details.title}</h4>

        <h4>{details.subTitle}</h4>

        <p>{details.desc}</p>
      </div> */}
    </div>
  );
};

export default CardSection;
