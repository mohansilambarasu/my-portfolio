import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaChalkboardTeacher, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

export const Work = () => {
  return (
    <motion.div
      className="text-white py-20"
      id="work"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00e1ff] to-[#3f7af0]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e2939", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e2939" }}
          date="January 2025 – Present"
          iconStyle={{ background: "#00e1ff", color: "#fff" }}
          icon={<FaChalkboardTeacher />}
        >
          <motion.h3
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Graduate Teaching Assistant
          </motion.h3>
          <h4 className="text-lg md:text-2xl font-medium">
            George Mason University
          </h4>
          <p>
            - Assist students in understanding core DBMS concepts like ER
            diagrams, normalization, and Oracle SQL.
            <br />- Support grading, conduct review sessions, and mentor
            students in advanced database concepts.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e2939", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e2939" }}
          date="April 2022 – July 2024"
          iconStyle={{ background: "#3f7af0", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <motion.h3
            className="text-lg md:text-2xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frontend Developer
          </motion.h3>
          <h4 className="text-lg md:text-2xl font-medium">Solvative</h4>
          <p>
            - Translated Figma designs into responsive web applications using
            Adobe Experience Manager, SCSS, and JavaScript.
            <br />
            - Developed a real-time UI for a chiller system using React.js,
            TypeScript, and Node.js.
            <br />- Led frontend development, delivering 12+ projects in 10
            months and conducting hiring interviews.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e2939", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e2939" }}
          date="May 2021 – Feb 2022"
          iconStyle={{ background: "#ff4c60", color: "#fff" }}
          icon={<FaDatabase />}
        >
          <motion.h3
            className="text-lg md:text-2xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Senior Analyst - Data Strategy & Engineering
          </motion.h3>
          <h4 className="text-lg md:text-2xl font-medium">
            Kantar Analytics Practice
          </h4>
          <p>
            - Developed SQL queries for data validation on global drink
            consumption datasets from 200+ brands.
            <br />
            - Automated brand name updates using Python, reducing delivery time
            by 2–3 weeks.
            <br />- Led weekly client calls for requirement analysis and bug
            testing in Azure DevOps.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
};
