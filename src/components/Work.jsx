import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    title: "Research Assistant — Data Analysis & AI Engineering",
    company: "George Mason University",
    date: "Jul 2026 – Present",
    location: "United States",
    bullets: [
      "Prototyping an AI-assisted database-design workflow that combines LLM-based question generation, structured data modeling, and human validation for graduate-level database problems.",
      "Applying SQL, Database Design, and ERD/EER modeling to validate primary and foreign keys, relationships, cardinality, optionality, and relational structure before AI-generated outputs are accepted.",
      "Researching Retrieval-Augmented Generation (RAG) and Vector Databases to ground LLM responses in trusted course materials and database-design references, with emphasis on retrieval quality and response reliability.",
      "Rebuilding the PLAIT research application by recovering legacy source files and moving development toward GitHub-based version control, maintainable software workflows, and future deployment.",
    ],
    tags: [
      "LLMs",
      "RAG",
      "Vector Databases",
      "SQL",
      "Database Design",
      "Data Modeling",
      "ERD/EER",
      "GitHub",
    ],
  },
  {
    title: "Graduate Teaching Assistant — Database Management Systems",
    company: "George Mason University",
    date: "Jan 2025 – May 2026",
    location: "Fairfax, VA",
    bullets: [
      "Supported 60+ graduate students across SQL, Database Design, ERD/EER modeling, normalization, and relational schema design, reinforcing core database-management and data-modeling concepts.",
      "Led weekly debugging sessions and one-on-one technical reviews, helping students diagnose SQL query issues and resolve problems involving keys, relationships, cardinality, and relational structure.",
      "Mentored students through structured problem-solving, reviewed and graded database assignments, provided technical feedback on SQL and schema design, and collaborated with faculty on assessments and course delivery.",
    ],
    tags: [
      "SQL",
      "Database Design",
      "Data Modeling",
      "DBMS",
      "ERD/EER",
      "Normalization",
      "Debugging",
      "Technical Mentoring",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Solvative",
    date: "Apr 2022 – Jul 2024",
    location: "Ahmedabad, India",
    bullets: [
      "Engineered a production React.js dashboard for Mueller’s multi-site dairy monitoring platform, integrating REST APIs and WebSockets to stream live sensor data and refresh operational interfaces every 1–3 seconds.",

      "Built configurable threshold and scheduled alert workflows using Redux, Context API, form validation, and persisted state, keeping user-defined settings synchronized with real-time operational data.",

      "Extended the existing frontend architecture with a dedicated chiller monitoring dashboard; users reported about 30% time savings compared with the previous manual monitoring process.",

      "Optimized performance across data-heavy dashboards and charts using memoization, lazy loading, code splitting, and debouncing, profiling rendering behavior with Chrome DevTools to reduce unnecessary UI work.",

      "Delivered frontend engineering across 13 Adobe Experience Manager (AEM) production projects for Allergan Aesthetics in about 10 months, introducing reusable component variants that reduced development-to-QA handoff by about 50%, from roughly 4 weeks to 2 weeks.",

      "Improved accessibility and cross-browser quality using semantic HTML, ARIA, keyboard navigation patterns, responsive design, and BrowserStack validation; QA reported about 20% fewer accessibility-related tickets.",

      "Strengthened engineering quality through Jest unit testing, GitLab pull-request reviews, frontend mentoring, and cross-functional debugging with Backend Engineers and QA teams, including investigation of data-flow issues involving MongoDB and REST API integrations.",
    ],

    clientProjects: [
      {
        name: "Botox Cosmetic",
        description:
          "Frontend development for the official Botox Cosmetic website using HTML, SCSS, JavaScript, and Adobe Experience Manager.",
        url: "https://www.botoxcosmetic.com/",
      },
      {
        name: "Botox HCP",
        description:
          "Built responsive frontend experiences and reusable AEM components for the healthcare professional website.",
        url: "https://www.botoxcosmetichcp.com/",
      },
      {
        name: "Juvederm",
        description:
          "Built responsive and accessible UI components with focus on reusable frontend patterns and visual consistency.",
        url: "https://www.juvederm.com/",
      },
      {
        name: "Juvederm HCP",
        description:
          "Developed interactive frontend components using JavaScript, SCSS, and Adobe Experience Manager.",
        url: "https://hcp.juvederm.com/",
      },
      {
        name: "Natrelle",
        description:
          "Delivered production frontend enhancements and reusable Adobe Experience Manager components.",
        url: "https://www.natrelle.com/",
      },
      {
        name: "My Kybella",
        description:
          "Built responsive production pages with emphasis on frontend performance, accessibility, and cross-browser quality.",
        url: "https://www.mykybella.com/",
      },
      {
        name: "The Look of 3",
        description:
          "Developed frontend UI components and interactive experiences for a campaign-focused production website.",
        url: "https://www.thelookof3.com/",
      },
      {
        name: "HCP My Kybella",
        description:
          "Enhanced frontend functionality, reusable UI structure, and responsive behavior for the HCP-facing website.",
        url: "https://hcp.mykybella.com/",
      },
    ],

    tags: [
      "React.js",
      "JavaScript",
      "Redux",
      "Context API",
      "REST APIs",
      "WebSockets",
      "AEM",
      "SCSS",
      "Frontend Architecture",
      "Performance Optimization",
      "Accessibility",
      "Jest",
      "BrowserStack",
      "GitLab",
    ],
  },
  {
    title: "Senior Analyst — Data Strategy & Engineering",
    company: "Kantar",
    date: "May 2021 – Feb 2022",
    location: "Bengaluru, India",
    bullets: [
      "Used SQL Server and structured data-validation checks to verify schemas, columns, null values, and invalid records before data entered recurring client reporting and analytics workflows.",

      "Reconciled raw and aggregated KPI data against dashboard outputs, tracing discrepancies across workflow stages to support root-cause analysis, data quality, defect resolution, and reporting accuracy.",

      "Built reusable Python and pandas transformation scripts across approximately 100–200 heterogeneous JSON files, reducing repetitive manual processing and shortening recurring delivery effort by about 2–3 weeks.",

      "Monitored data and reporting workflows across development, testing, UAT, and production in Azure DevOps, investigating job failures, coordinating reruns, tracking defects, and supporting release readiness.",

      "Partnered with client stakeholders to gather reporting and KPI requirements, translate business needs into technical validation rules, and follow implementation through testing and delivery.",
    ],

    tags: [
      "Python",
      "SQL Server",
      "pandas",
      "Data Engineering",
      "Data Transformation",
      "Data Validation",
      "Data Quality",
      "KPI Reconciliation",
      "Root Cause Analysis",
      "JSON",
      "Azure DevOps",
      "Workflow Automation",
    ],
  },
];

export default function Work() {
  const [open, setOpen] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="work"
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
          WORK
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
          EXPERIENCE
        </motion.h2>
      </div>

      <div>
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              borderTop:
                hovered === i
                  ? "1px solid var(--accent)"
                  : "1px solid var(--border)",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "clamp(14px, 3vw, 17px)",
                    fontWeight: "500",
                    color: hovered === i ? "var(--accent)" : "var(--text)",
                    marginBottom: "5px",
                    letterSpacing: "-0.2px",
                    lineHeight: 1.3,
                    transition: "color 0.2s ease",
                  }}
                >
                  {job.title}
                </div>
                <div
                  style={{
                    fontSize: "clamp(12px, 2.5vw, 14px)",
                    fontWeight: "500",
                    color: hovered === i ? "var(--accent)" : "var(--accent)",
                    opacity: hovered === i ? 1 : 0.8,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  {job.company}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: 0,
                  paddingTop: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(11px, 2vw, 13px)",
                    fontWeight: "400",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.date}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    color: open === i ? "#fff" : "var(--text)",
                    flexShrink: 0,
                    backgroundColor:
                      open === i ? "var(--accent)" : "transparent",
                    borderColor: open === i ? "var(--accent)" : "var(--border)",
                    transition:
                      "background-color 0.2s, border-color 0.2s, color 0.2s",
                  }}
                >
                  +
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ paddingBottom: "24px" }}>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "var(--text-subtle)",
                        marginBottom: "16px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {job.location}
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      {job.bullets.map((b, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: "clamp(13px, 2.5vw, 15px)",
                            fontWeight: "400",
                            color: "var(--text-muted)",
                            lineHeight: 1.75,
                            paddingLeft: "16px",
                            borderLeft: "2px solid var(--accent)",
                          }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "20px",
                      }}
                    >
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "var(--accent)",
                            border: "1px solid var(--accent)",
                            padding: "4px 12px",
                            borderRadius: "3px",
                            opacity: 0.85,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {job.clientProjects && (
                      <div style={{ marginBottom: "22px" }}>
                        <div
                          style={{
                            fontSize: "13px",

                            fontWeight: "700",

                            color: "var(--accent)",

                            letterSpacing: "2px",

                            textTransform: "uppercase",

                            marginBottom: "12px",
                          }}
                        >
                          Selected Client Projects
                        </div>

                        <div
                          style={{
                            display: "grid",

                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(220px, 1fr))",

                            gap: "10px",
                          }}
                        >
                          {job.clientProjects.map((project) => (
                            <a
                              key={project.name}
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                textDecoration: "none",

                                border: "1px solid var(--border)",

                                borderRadius: "6px",

                                padding: "14px",

                                background: "rgba(255, 255, 255, 0.25)",

                                transition:
                                  "border-color 0.2s ease, transform 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                  "var(--accent)";

                                e.currentTarget.style.transform =
                                  "translateY(-2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor =
                                  "var(--border)";

                                e.currentTarget.style.transform =
                                  "translateY(0)";
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "14px",

                                  fontWeight: "600",

                                  color: "var(--text)",

                                  marginBottom: "6px",
                                }}
                              >
                                {project.name}{" "}
                                <span
                                  style={{
                                    color: "var(--accent)",
                                    fontSize: "12px",
                                  }}
                                >
                                  ↗
                                </span>
                              </div>

                              <p
                                style={{
                                  fontSize: "12.5px",

                                  lineHeight: 1.6,

                                  color: "var(--text-muted)",

                                  margin: 0,
                                }}
                              >
                                {project.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
