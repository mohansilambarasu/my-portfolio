import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import { Button, Link } from "react-scroll";
import { useStarsBackground } from "../context/starsbackgroundContext";
import ScatterText from "./ScatterText";

export const Hero = () => {
  const { StarsBackground } = useStarsBackground();

  return (
    <motion.div
      className={`text-center h-screen w-full flex flex-col justify-center items-center gap-8 relative z-[1] overflow-hidden ${
        StarsBackground ? "text-white" : "text-black"
      }`}
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-content flex flex-col items-center gap-6 max-w-5xl px-6 md:px-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold md:mb-4 tracking-wide min-h-25 md:min-h-auto">
          <TypeAnimation
            sequence={[
              "Hey! I'm Mohan.",
              1500,
              "A Web Developer.",
              1500,
              "A Graduate Student.",
              1500,
              "A Tech Enthusiast.",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-lg md:text-2xl  font-medium tracking-wide">
          Master's in Applied Information Technology (4.0 GPA). DBMS Teaching
          Assistant @George Mason. Software Developer & Data Analyst
        </h2>
        <h2 className="text-lg md:text-2xl  font-medium">
          Actively Seeking Summer 2025 Internship.
        </h2>
      </motion.div>

      <motion.div
        className="absolute bottom-10 animate-bounce  text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Link to="work" smooth={true} duration={800} offset={-50}>
          <FaArrowDown className="cursor-pointer" />
        </Link>
      </motion.div>
    </motion.div>
  );
};
