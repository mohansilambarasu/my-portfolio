import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <motion.div
      className="text-center h-screen w-full flex flex-col justify-center items-center gap-8 relative z-[1] overflow-hidden"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Text Content */}
      <motion.div
        className="hero-content flex flex-col items-center gap-6 max-w-5xl px-6 md:px-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00e1ff] to-[#3f7af0] md:mb-4 tracking-wide min-h-25 md:min-h-auto">
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
        <h2 className="text-lg md:text-2xl text-gray-300 font-medium">
          A Graduate Student at George Mason University.
          <br className="hidden md:block" />
          Pursuing a Master's in Applied Information Technology.
        </h2>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="pointer-events-auto flex gap-6 mt-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Link to="contact" smooth={true} duration={800} offset={-50}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="w-40 justify-center text-white bg-gray-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-full text-md md:text-lg px-2 py-2 md:px-6 md:py-3 transition-all duration-300 ease-in-out shadow-lg cursor-pointer"
          >
            Contact Me
          </motion.button>
        </Link>

        {/* New Button: Scroll to Next Section */}
        <Link to="about" smooth={true} duration={800} offset={-50}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="w-40 justify-center text-white bg-gray-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-md md:text-lg px-2 py-2 md:px-6 md:py-3 transition-all duration-300 ease-in-out shadow-lg cursor-pointer"
          >
            View More
          </motion.button>
        </Link>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 animate-bounce text-gray-300 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <FaArrowDown />
      </motion.div>
    </motion.div>
  );
};
