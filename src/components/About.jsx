import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen text-white px-6 py-12"
      id="about"
    >
      <motion.div
        className="
      max-w-5xl flex flex-col items-center space-y-6 
                   bg-gray-800 bg-opacity-30 backdrop-blur-md p-8 md:p-10 
                   lg:p-12 rounded-2xl shadow-lg border border-gray-600 
                   border-opacity-30 hover:border-opacity-50 
                   transition-all duration-500
      "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-cyan-400 bg-clip-text bg-gradient-to-r from-[#00e1ff] to-[#3f7af0] mb-4 tracking-wide text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          About Me!
        </motion.h2>
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-md md:text-lg leading-relaxed text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Hi, I'm <span className="font-semibold text-white">Mohan</span>, an
            international student pursuing my Master's in Applied Information
            Technology at George Mason University with a{" "}
            <span className="text-cyan-300">4.0 GPA</span>, specializing in Data
            Analytics and Intelligence Methods. I currently work as a{" "}
            <span className="text-cyan-300">Graduate Teaching Assistant</span>,
            assisting with DBMS, SQL, and grading.
          </motion.p>

          <motion.p
            className="text-md md:text-lg leading-relaxed text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            With over <span className="text-cyan-300">three years</span> of
            experience in Frontend Development and Data Analysis, I specialize
            in{" "}
            <span className="text-cyan-300">JavaScript, React.js, SCSS,</span>{" "}
            and <span className="text-cyan-300">AEM</span>, managing CI/CD
            pipelines in GitLab. I have solid experience working in IT
            environments following{" "}
            <span className="text-cyan-300">Agile methodologies</span>,
            collaborating with cross-functional teams to deliver high-quality
            solutions. I’ve led teams delivering{" "}
            <span className="text-cyan-300">12+ web applications</span> and
            contributed to hiring top talent. Right now, I’m exploring{" "}
            <span className="text-cyan-300">big data, cloud computing,</span>{" "}
            and <span className="text-cyan-300">NLP</span>.
          </motion.p>

          <motion.p
            className="text-md md:text-lg leading-relaxed text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            I am actively seeking{" "}
            <span className="text-cyan-300">Summer 2025 internships</span> in{" "}
            <span className="text-cyan-300">
              Software Development or Data Engineering,
            </span>{" "}
            where I can leverage my technical expertise, industry experience,
            and problem-solving skills. I am eager to contribute effectively to
            your team while continuing to learn and grow within your
            organization.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
