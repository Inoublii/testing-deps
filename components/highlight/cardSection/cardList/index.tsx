import Card from "./Card";
import { cardList } from "./consts";
import styles from "./styles.module.scss";
const CardList = () => {
  return (
    <div className={styles.cardsContainer}>
      {cardList.map((cardItem) => {
        return (
          <>
            <Card fnakImg={cardItem.fnakImg} />
          </>
        );
      })}
    </div>
  );
};

export default CardList;
