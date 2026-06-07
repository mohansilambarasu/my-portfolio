import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import exoplanetImg from "../assets/personal-projects/exoplanetAnalysis.png";
import blogsphereImg from "../assets/personal-projects/blogsphere.png";
import ecommerceImg from "../assets/personal-projects/ecommerce.png";
import foodigoImg from "../assets/personal-projects/foodigo.png";

const filters = ["All", "AI / LLM", "Data", "Frontend"];

const projects = [
  {
    name: "StudyAI — RAG Document Intelligence",
    type: "AI / LLM",
    stack: "LangChain · Pinecone · HuggingFace · FastAPI · React",
    bg: "#2D1B69",
    github: "https://github.com/mohansilambarasu/ai-study-assistant",
    img: null,
  },
  {
    name: "SupportAI — Multi-Agent Customer Support",
    type: "AI / LLM",
    stack: "Groq · LangChain · Node.js · React · TypeScript",
    bg: "#0F1F3D",
    github: "https://github.com/mohansilambarasu/ai-support-agent",
    img: null,
  },
  {
    name: "Supplier Quality Monitor Agent",
    type: "AI / LLM",
    stack: "Text-to-SQL · FastAPI · SQLite · Streamlit · Groq",
    bg: "#1A3020",
    github: "https://github.com/mohansilambarasu/supplier-quality-agent",
    img: null,
  },
  {
    name: "Multilingual Financial Text Classification",
    type: "Data",
    stack: "SBERT · FinBERT · XGBoost · scikit-learn · HuggingFace",
    bg: "#1A2840",
    github: "https://github.com/mohansilambarasu",
    img: null,
  },
  {
    name: "Asphalt Pavement Degradation Analytics",
    type: "Data",
    stack: "PySpark · Databricks · Spark MLlib · SQL",
    bg: "#2A1F10",
    github: "https://github.com/mohansilambarasu",
    img: null,
  },
  {
    name: "Exoplanet Data Analysis",
    type: "Data",
    stack: "Python · R · AWS · React · Tailwind CSS",
    bg: "#0D1B2A",
    github: "https://github.com/mohansilambarasu",
    img: exoplanetImg,
  },
  {
    name: "BlogSphere — Blogging Platform",
    type: "Frontend",
    stack: "React · Vite · Tailwind CSS · Vercel",
    bg: "#2B1A2F",
    github: "https://github.com/mohansilambarasu",
    img: blogsphereImg,
  },
  {
    name: "Ecommerce Web App",
    type: "Frontend",
    stack: "React · Tailwind CSS · React Router",
    bg: "#1F2B1A",
    github: "https://github.com/mohansilambarasu",
    img: ecommerceImg,
  },
  {
    name: "Foodigo",
    type: "Frontend",
    stack: "Bootstrap · AOS · JavaScript",
    bg: "#2B2015",
    github: "https://mohansilambarasu.github.io/webdesign-projects-foodigo/",
    img: foodigoImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        display: "block",
        borderRadius: "10px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.25s ease",
      }}
    >
      <div
        style={{
          height: "190px",
          backgroundColor: project.bg,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project.img ? (
          <motion.img
            src={project.img}
            alt={project.name}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "88%",
              height: "88%",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        ) : (
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(12px, 1.6vw, 17px)",
              color: "rgba(255,255,255,0.12)",
              textAlign: "center",
              padding: "0 24px",
              letterSpacing: "2px",
              lineHeight: 1.4,
              userSelect: "none",
            }}
          >
            {project.name.toUpperCase()}
          </div>
        )}

        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            color: "#fff",
            pointerEvents: "none",
          }}
        >
          ↗
        </motion.div>

        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            color: "rgba(255,255,255,0.8)",
            textTransform: "uppercase",
            backgroundColor: "rgba(0,0,0,0.45)",
            padding: "4px 10px",
            borderRadius: "3px",
          }}
        >
          {project.type}
        </div>
      </div>

      <div
        style={{
          padding: "16px",
          backgroundColor: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          minHeight: "76px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "var(--text)",
            marginBottom: "6px",
            lineHeight: 1.4,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "var(--text-muted)",
            lineHeight: 1.5,
          }}
        >
          {project.stack}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section
      id="projects"
      style={{
        padding: "60px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          marginBottom: "32px",
          gap: "16px",
        }}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 8vw, 80px)",
              lineHeight: 1,
              color: "var(--text)",
              margin: 0,
            }}
          >
            RECENT
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 8vw, 80px)",
              lineHeight: 0.88,
              color: "var(--accent)",
              margin: 0,
            }}
          >
            PROJECTS
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontSize: "12px",
                fontWeight: "500",
                padding: "6px 16px",
                borderRadius: "20px",
                border: `1px solid ${active === f ? "var(--accent)" : "var(--border)"}`,
                color: active === f ? "var(--accent)" : "var(--text-muted)",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
