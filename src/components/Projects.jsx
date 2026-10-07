import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const finalProjectUrl = `${baseUrl}AIT_580_Final_Project.pdf`;
const financialClassificationUrl = `${baseUrl}AIT_626_Final_Project.pdf`;
const asphaltAnalyticsUrl = `${baseUrl}AIT_614_Final_Project.pdf`;
const netflixAnalysisUrl = `${baseUrl}AIT_664_Final_Project.pdf`;

const projects = [
  {
    name: "Menu Admin SDK — Embeddable Frontend SDK",
    type: "Software Engineering",
    stack: "React · TypeScript · Shadow DOM · Vite · SDK Architecture",
    bg: "#1A2840",
    github: "https://github.com/mohansilambarasu/menu-admin-sdk",
    img: null,
  },
  {
    name: "FinMMEval — Multilingual Financial Domain Classification",
    type: "Machine Learning & NLP",
    stack: "SBERT · FinBERT · XGBoost · PyTorch · scikit-learn",
    bg: "#1A2840",
    github: financialClassificationUrl,
    img: null,
  },
  {
    name: "Large-Scale Pavement Degradation Analytics",
    type: "Data Engineering & ML",
    stack: "PySpark · Databricks · Spark MLlib · Machine Learning",
    bg: "#2A1F10",
    github: asphaltAnalyticsUrl,
    img: null,
  },
  {
    name: "NASA Exoplanet Analytics",
    type: "Data Analytics & Cloud",
    stack: "Python · SQL · MySQL · AWS · R",
    bg: "#0D1B2A",
    github: finalProjectUrl,
    img: null,
  },
  {
    name: "Netflix Content Analysis & Topic Modeling",
    type: "NLP & Analytics",
    stack: "Python · NLP · LDA · CountVectorizer · Tableau",
    bg: "#2B1A2F",
    github: netflixAnalysisUrl,
    img: null,
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
              fontSize: "20px",
              color: "#ffffff",
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
          minHeight: "113px",
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
