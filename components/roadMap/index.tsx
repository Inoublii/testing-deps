import Image from "next/image";
import { messeges } from "./consts";
import styles from "./styles.module.scss";
import RoadMApCardList from "./roadMApCardList";

const RoadMap = () => {
  return (
    <div className={styles.roadMapContainer}>
      <div className={styles.roadMapHeader}>
        <h1 className={styles.roadMaptitle}>{messeges.roadMapHeadTitle}</h1>
        {messeges.headText.map((el: string) => (
          <>
            <p className={styles.roadMapText}>{el}</p>
          </>
        ))}
      </div>
      <RoadMApCardList />
    </div>
  );
};

export default RoadMap;
