import Image from "next/image";
import { RoadMapListmesseges } from "./consts";
import styles from "./styles.module.scss";

const RoadMApCardList = () => {
  return (
    <div className={styles.roadMapCardList}>
      {RoadMapListmesseges.map((chapter) => {
        return (
          <>
            <div className={styles.CardHeadTitle}>
              <div className={styles.horizontalLine} />
              <div className={styles.title}>
                <span className={styles.titleBleuNumber}>
                  {chapter?.chapterNumber}
                </span>
                <br />
                <span className={styles.titleBleuText}>
                  {chapter?.chapterTitle}
                </span>
                <br />
                <br />
              </div>
            </div>
            <div></div>
            {chapter.phases.map((phase) => {
              return (
                <>
                  <div className={styles.CardHeadTitle}>
                    <div className={styles.horizontalLine} />
                    <div className={styles.title}>
                      <div>
                        <span className={styles.subTitlePhaseNumber}>
                          {phase.PhaseNumber}
                        </span>
                        <br />
                        <span className={styles.subTitleText}>
                          {phase.PhaseTitle}
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className={styles.CardBody}>
                    <ul>
                      <>
                        {phase.PhaseActions.map((action) => {
                          return (
                            <>
                              <li>
                                <p className={styles.phaseActionText}>
                                  {action.actionTitle}
                                </p>
                                {action.actionImage && (
                                  <div className={styles.ImagHolder}>
                                    <Image
                                      src={action.actionImage}
                                      width={385}
                                      height={233}
                                      alt="img"
                                    />
                                  </div>
                                )}
                                {action.actionSubTitle && (
                                  <p className={styles.smallText}>
                                    {action.actionSubTitle}
                                  </p>
                                )}
                              </li>
                            </>
                          );
                        })}
                      </>
                    </ul>
                  </div>
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default RoadMApCardList;
