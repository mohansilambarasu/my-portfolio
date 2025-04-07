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
      className=" py-20"
      id="work"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-10"
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
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid #000000" }}
          date="January 2025 – Present"
          iconStyle={{ background: "#fff", color: "#000" }}
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
            - Assisted 60+ students in a graduate-level DBMS course with SQL
            queries, ER diagrams, normalization, and query optimization using
            Oracle SQL.
            <br />
            <br />
            - Led weekly code reviews and debugging sessions, mentoring students
            on complex database issues and advanced DBMS concepts.
            <br />
            <br />- Strengthened communication, problem-solving, and leadership
            skills in a fast-paced academic setting.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid #000000" }}
          date="April 2022 – July 2024"
          iconStyle={{ background: "#fff", color: "#000" }}
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
            - Led a front-end team delivering 12+ projects in 10 months;
            recognized for performance and selected for interview panel.
            <br />
            <br />
            - Developed scalable, responsive web apps from Figma designs using
            AEM, React.js, and SCSS.
            <br />
            <br />
            - Managed CI/CD pipelines (GitLab) and agile workflows (Jira),
            ensuring 100% on-time delivery.
            <br />
            <br />- Built a real-time chiller monitoring UI with React,
            TypeScript, and REST APIs, reducing manual reporting by 35%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid #000000" }}
          date="May 2021 – Feb 2022"
          iconStyle={{ background: "#fff", color: "#000" }}
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
            - Developed SQL queries for cleaning, validation, and integrity
            checks on global drink consumption data from 200+ brands.
            <br />
            <br />
            - Led client meetings, managed requirements, and coordinated
            progress using Azure DevOps in cross-functional teams.
            <br />
            <br />- Automated dashboard updates with Python, cutting reporting
            time by 2–3 weeks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
};
