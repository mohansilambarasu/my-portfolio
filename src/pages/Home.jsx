import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Work } from "../components/Work";

export const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Project />
      <About />
      <Contact />
    </>
  );
};
