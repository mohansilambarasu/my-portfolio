import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "LLM & AI",
    accent: true,
    skills: [
      "LangChain",
      "LangChain LCEL",
      "LangGraph",
      "RAG",
      "Multi-Agent Systems",
      "Groq",
      "OpenAI API",
      "HuggingFace",
      "Pinecone",
      "Prompt Engineering",
      "Text-to-SQL",
    ],
  },
  {
    category: "ML & NLP",
    skills: [
      "scikit-learn",
      "FinBERT",
      "SBERT",
      "XGBoost",
      "Random Forest",
      "Gradient Boosting",
      "Feature Engineering",
      "Model Evaluation",
      "Text Classification",
    ],
  },
  {
    category: "Data & Backend",
    accent: true,
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "PySpark",
      "SQL",
      "FastAPI",
      "ETL Pipelines",
      "SQLite",
      "Databricks",
      "Spark MLlib",
      "REST APIs",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
      "Vite",
      "Component Architecture",
    ],
  },
  {
    category: "Cloud & Databases",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "Pinecone Serverless",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Git",
      "GitLab CI/CD",
      "Azure DevOps",
      "Agile/Scrum",
      "Postman",
      "Jupyter Notebook",
      "Vercel",
      "GitHub Pages",
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
            : "repeat(auto-fill, minmax(300px, 1fr))",
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
                fontSize: "11px",
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
                    fontSize: "13px",
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
