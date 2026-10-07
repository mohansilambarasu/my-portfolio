import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend Engineering",
    accent: true,
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Context API",
      "HTML5",
      "CSS3",
      "SCSS",
      "REST APIs",
      "WebSockets",
      "Adobe Experience Manager",
      "Jest",
      "Accessibility",
      "BrowserStack",
    ],
  },
  {
    category: "Data Engineering & Analytics",
    accent: true,
    skills: [
      "Python",
      "SQL",
      "pandas",
      "PySpark",
      "Databricks",
      "Apache Spark",
      "Data Transformation",
      "Data Validation",
      "Data Quality",
      "Data Modeling",
      "JSON",
      "KPI Analysis",
    ],
  },
  {
    category: "Machine Learning & NLP",
    accent: true,
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "scikit-learn",
      "PyTorch",
      "Hugging Face",
      "SBERT",
      "FinBERT",
      "XGBoost",
      "Spark MLlib",
      "Model Evaluation",
      "Text Classification",
      "Topic Modeling",
    ],
  },
  {
    category: "Cloud & Databases",
    accent: true,
    skills: [
      "AWS",
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "MySQL",
      "MongoDB",
      "SQL Server",
      "Oracle SQL",
    ],
  },
  {
    category: "Engineering Tools & Practices",
    accent: true,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "Vite",
      "Webpack",
      "Babel",
      "npm",
      "ESLint",
      "Prettier",
      "Chrome DevTools",
      "Figma",
      "Code Review",
      "Performance Optimization",
    ],
  },
  {
    category: "AI — Current Exploration",
    accent: true,
    skills: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "Generative AI",
      "AI Agents",
      "Vector Databases",
      "LLM Grounding",
      "Retrieval",
      "LLM Evaluation",
      "Prompt Engineering",
    ],
  },
];

export default function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "60px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
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
          TOOLS &
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
          STACK
        </motion.h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(500px, 1fr))",
          gap: "16px",
        }}
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.65,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              padding: "22px",
              border: `1px solid ${group.accent ? "var(--accent)" : "var(--border)"}`,
              borderLeft: `3px solid ${group.accent ? "var(--accent)" : "var(--border)"}`,
              borderRadius: "8px",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "2.5px",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              {group.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    padding: "5px 12px",
                    borderRadius: "4px",
                    backgroundColor: "var(--bg-surface)",
                    lineHeight: 1.4,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
