import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Work } from "../components/Work";
import StarCanvas from "../components/StarCanvas";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Project />
      <Contact />
    </>
  );
};
