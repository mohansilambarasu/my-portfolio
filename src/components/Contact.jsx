import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center  text-white py-20 px-6"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00e1ff] to-[#3f7af0]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Please feel free to reach out!
        <br></br>
        Whether you want to discuss a project, collaborate, or just say{" "}
        <span className="text-cyan-400">hi!</span>, my inbox is always open.
      </motion.p>

      <div className="flex flex-col">
        <motion.a
          href="mailto:mohansilambu77@gmail.com"
          className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl text-white hover:bg-[#00d3f3] transition"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope size={24} /> Send an email now
        </motion.a>
      </div>

      <div className="flex gap-6 mt-8">
        <motion.a
          href="https://www.linkedin.com/in/mohan-silambarasu-elangkumaran/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-[#00d3f3] transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/mohansilambarasu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-[#3f7af0] transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
};
