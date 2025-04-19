import { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/personal-projects/ecommerce.png";
import project2 from "../assets/personal-projects/foodigo.png";
import project3 from "../assets/personal-projects/tictactoe.png";
import project4 from "../assets/personal-projects/stickyscripts.png";
import project5 from "../assets/personal-projects/haute.png";
import project6 from "../assets/personal-projects/blogsphere.png";
import project7 from "../assets/personal-projects/exoplanetAnalysis.png";

const personalProjects = [
  {
    title: "Exoplanet Analysis",
    description:
      "Developed a research website analyzing exoplanet data, showcasing discoveries, trends, and habitability insights using React, Vite, Tailwind CSS, Framer Motion, React Scroll, Charts.",
    image: project6,
    technologies: ["Python", "R", "MySQL", "AWS"],
    link: "https://mohansilambarasu.github.io/exoplanet-analysis/",
  },
  {
    title: "BlogSphere",
    description:
      "BlogSphere App: A full-stack blog platform using React, Vite, Tailwind CSS, enabling users to post, comment, like, and interact in real time.",
    image: project7,
    technologies: ["React", "Tailwind CSS", "Vite", "Vercel"],
    link: "https://myblog-app-xi.vercel.app/",
  },
  {
    title: "Ecommerce Web App",
    description:
      "Developed a highly responsive front-end e-commerce platform displaying products and cart functionalities with React and Tailwind.",
    image: project1,
    technologies: ["React", "Tailwind CSS"],
    link: "https://mohansilambarasu.github.io/ecommerce-react-app/",
  },
  {
    title: "Foodigo",
    description:
      "Built a food delivery front-end site using Bootstrap and AOS library, simulating a high user experience for browsing and ordering food online.",
    image: project2,
    technologies: ["Bootstrap", "AOS", "JavaScript"],
    link: "https://mohansilambarasu.github.io/webdesign-projects-foodigo/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Developed an interactive and responsive web version of the Tic Tac Toe game using CSS and JavaScript.",
    image: project3,
    technologies: ["JavaScript", "CSS"],
    link: "https://mohansilambarasu.github.io//tic-tac-toe/Project_One/index.html",
  },
  {
    title: "Sticky Scripts",
    description:
      "Created a front-end version of a sticky notes app for creating and managing notes using React.js.",
    image: project4,
    technologies: ["React"],
    link: "https://mohansilambarasu.github.io/keeperweb-app/",
  },
  {
    title: "Clothing Store",
    description:
      "Created a front-end design for an online clothing store, featuring responsive product listings, category filters, and a shopping cart using React.js.",
    image: project5,
    technologies: ["React"],
    link: "https://mohansilambarasu.github.io/clothingstore-design/",
  },
];

const workProjects = [
  {
    title: "Botox Cosmetic",
    description:
      "Worked on the front-end development for the official Botox Cosmetic website using HTML, SCSS, JavaScript, and AEM.",
    link: "https://www.botoxcosmetic.com/",
  },
  {
    title: "Botox HCP",
    description:
      "Contributed to the development of the Botox HCP website, ensuring responsive design and AEM integration.",
    link: "https://www.botoxcosmetichcp.com/",
  },
  {
    title: "Juvederm",
    description:
      "Worked on various UI components for the Juvederm website, enhancing its accessibility and responsiveness.",
    link: "https://www.juvederm.com/",
  },
  {
    title: "Juvederm HCP",
    description:
      "Developed interactive front-end elements for the Juvederm HCP website using JavaScript and SCSS.",
    link: "https://hcp.juvederm.com/",
  },
  {
    title: "Natrelle",
    description:
      "Contributed to the front-end enhancements and AEM integration for the Natrelle website.",
    link: "https://www.natrelle.com/",
  },
  {
    title: "My Kybella",
    description:
      "Developed responsive web pages for My Kybella, focusing on performance optimization.",
    link: "https://www.mykybella.com/",
  },
  {
    title: "The Look of 3",
    description:
      "Worked on UI components and animations for The Look of 3 campaign site.",
    link: "https://www.thelookof3.com/",
  },
  {
    title: "HCP My Kybella",
    description:
      "Enhanced front-end functionality and UI structure for the HCP My Kybella website.",
    link: "https://hcp.mykybella.com/",
  },
];

export const Project = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <motion.section
      className=" py-20"
      id="project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-10 retro-text"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          className={`text-2xl font-semibold px-6 py-2 rounded-full transition-all duration-300 typewriter-text ${
            activeTab === "personal" ? " " : " "
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Projects
        </button>
        <button
          className={`text-2xl font-semibold px-6 py-2 rounded-full transition-all duration-300 typewriter-text ${
            activeTab === "work" ? " " : " "
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work Projects
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {activeTab === "personal"
          ? personalProjects.map((project, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold typewriter-text audiowide">
                  {project.title}
                </h3>
                <p className=" mt-2 terminal tracking-wider">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-lg font-semibold typewriter-text  px-2 py-1 bg-black text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-4  hover:underline text-2xl typewriter-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </motion.div>
            ))
          : workProjects.map((project, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold ">{project.title}</h3>
                <p className=" mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4  hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
      </div>
    </motion.section>
  );
};
