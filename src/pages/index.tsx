import React, { useRef } from "react";
import Hero from "./../../components/Hero"
import Skills from "./../../components/Skills";
import Works from "./../../components/Works";

const App = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const worksRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Hero heroRef={heroRef} skillsRef={skillsRef} worksRef={worksRef} />
      <Skills skillsRef={skillsRef} />
      <Works worksRef={worksRef} />
    </>
  );
};

export default App;