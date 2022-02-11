import React from "react";
import Image from "next/image";
import { messages } from "./consts";
import styles from "./styles.module.scss";

const Section2 = () => {
  return (
    <section className={styles.section2div}>
      <div className={styles.desertImg}>
        <Image
          className={styles.desertImg}
          src={messages.desertImgUrl}
          width={1440}
          height={172}
          alt="desert"
        />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{messages.title}</h1>
        <p className={styles.text}>{messages.subsTitle} </p>
      </div>
      <div className={styles.imgSection}>
        <div className={styles.neoLogo}>
          <Image
            src="/assets/images/2/slfenexneon.png"
            width={953}
            height={409}
            alt="fnak_image"
          />
        </div>
        <div className={styles.fnakImg}>
          <Image
            src={messages.fnexLImgUrl}
            width={435}
            height={489}
            alt="fnak_image"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
