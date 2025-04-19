import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center   py-20 px-6 bg-[#1985a1]"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-8 retro-text text-[#ffbf38] drop-shadow-[0_0_6px_#9b2226] "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-2xl  text-center max-w-2xl md:max-w-3xl mb-10 audiowide text-[#e9d8a6] "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Please feel free to reach out!
      </motion.p>

      <div className="flex flex-col">
        <motion.a
          href="mailto:mohansilambu77@gmail.com"
          className="flex items-center gap-3  p-4 rounded-xl transition retro-text bg-[#ff4d4d] hover:bg-[#ff6666] text-white "
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope size={24} /> Send an email now
        </motion.a>
      </div>

      <motion.p
        className="text-2xl  text-center max-w-2xl md:max-w-3xl mt-10 audiowide text-[#e9d8a6]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Whether you want to discuss a project, collaborate, or just say{" "}
        <span className="">hi!</span>, my inbox is always open.
      </motion.p>

      <div className="flex gap-6 mt-10 ">
        <motion.a
          href="https://www.linkedin.com/in/mohan-silambarasu-elangkumaran/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-3xl transition text-[#f7f2e8] drop-shadow-[0_0_6px_#000000]"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/mohansilambarasu"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-3xl transition text-[#f7f2e8] drop-shadow-[0_0_6px_#000000]"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
};
