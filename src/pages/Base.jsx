import { motion, useSpring, useScroll } from "motion/react";
import { Home } from "./Home";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff4d4d",
        }}
        className="z-[2]"
      />
      <Home />
    </>
  );
}
