import { motion, useSpring, useScroll } from "framer-motion";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          originX: 0,
          backgroundColor: "var(--accent)",
          zIndex: 50,
        }}
      />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
