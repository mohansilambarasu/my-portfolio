import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Work } from "../components/Work";
import { useStarsBackground } from "../context/starsbackgroundContext";
import StarCanvas from "../components/StarCanvas";
import StarsBackgroundToggle from "../components/StarsBackgroundToggle";
import { motion, useSpring, useScroll } from "motion/react";

export const Home = () => {
  const { StarsBackground } = useStarsBackground();

  return (
    <>
      <Hero />

      <Work />
      <Project />
      <About />
      <Contact />
      <StarsBackgroundToggle />

      <>{StarsBackground && <StarCanvas />}</>
    </>
  );
};
