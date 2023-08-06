import React from "react";
import styles from "./../src/styles/Hero.module.css";

const Hero = ({
  heroRef,
  skillsRef,
  worksRef,
}: {
  heroRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  worksRef: React.RefObject<HTMLDivElement>;
}) => {
  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: elementRef!.current!.offsetTop,
      behavior: "smooth",
    });
  };
  console.log(worksRef)
  return (
    <>
      <header className={styles.wrapper} ref={heroRef}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => scrollToSection(heroRef)}>TOP</li>
          <li className={styles.item} onClick={() => scrollToSection(skillsRef)}>SKILL</li>
          <li className={styles.item} onClick={() => scrollToSection(worksRef)}>WORKS</li>
        </ul>
      </header>

      <div className={styles.square}>
        <div className={styles.text}>
          <h2>Welcome to</h2>
          <h2>My Portfolio Site</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;