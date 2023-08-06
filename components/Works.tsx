import React from "react";
import styles from "./../src/styles/Works.module.css";
import Image from "next/image";
import screenshot1 from "./../public/screenshot1.webp";
import screenshot2 from "./../public/screenshot2.webp";

const Works = ({ worksRef }: { worksRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className={styles.stretchLine} ref={worksRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Works</h2>
        <div className={styles.wrapper}>
          <section className={styles.card}>
            <Image
              className={styles.screenshot}
              src={screenshot1}
              alt="作品1"
              layout="responsive"
              objectFit="scale-down"
            />
            <p className={styles.description}>こちらのサイト</p>
          </section>
          <section className={styles.card}>
            <a href="https://mapcollection.tk">
              <Image
                className={styles.screenshot}
                src={screenshot2}
                alt="作品2"
                layout="responsive"
                objectFit="scale-down"
              />
              <p className={styles.description}>
                好きな場所を紹介し合えるアプリ
              </p>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Works;
