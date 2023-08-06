import React from "react";
import styles from "./../src/styles/Skills.module.css";
import Image from "next/image";
import html from "./../public/file_type_html_icon_130541.svg";
import css from "./../public/file_type_css_icon_130661.svg";
import javascript from "./../public/javascript_icon_130900.svg";
import typescript from "./../public/file_type_typescript_official_icon_130107.svg";
import react from "./../public/react_original_logo_icon_146374.svg";
import rails from "./../public/file_type_rails_icon_130210.svg";

const Skills = ({
  skillsRef,
}: {
  skillsRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className={styles.stretchLine} ref={skillsRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Skills</h2>
        <div className={styles.wrapper}>
          <section className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                src={html}
                alt="HTMLの画像"
                layout="responsive"
              />
            </div>
            <p className={styles.skill__name}>HTML</p>
          </section>
          <section className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                src={css}
                alt="CSSの画像"
                layout="responsive"
              />
            </div>
            <p className={styles.skill__name}>CSS</p>
          </section>
          <section className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                src={javascript}
                alt="Javascriptの画像"
                layout="responsive"
              />
            </div>
            <p className={styles.skill__name}>Javascript</p>
          </section>
          <section className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                src={typescript}
                alt="Typescriptの画像"
                layout="responsive"
              />
            </div>
            <p className={styles.skill__name}>Typescript</p>
          </section>
          <section className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                src={react}
                alt="React.jsの画像"
                layout="responsive"
              />
            </div>
            <p className={styles.skill__name}>React.js</p>
          </section>
          <section className={styles.card}>
            <div className={styles.img_wrapper}>
              <Image
                src={rails}
                alt="Ruby on Railsの画像"
                layout="responsive"
              />
            </div>
            <p className={styles.skill__name}>Ruby on Rails</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
