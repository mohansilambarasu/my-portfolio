import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    title: "Graduate Teaching Assistant",
    company: "George Mason University",
    date: "Jan 2025 – May 2026",
    location: "Fairfax, VA",
    bullets: [
      "Supported graduate-level DBMS course for 60+ students covering SQL query design, ER modeling, schema normalization, and query optimization using Oracle SQL.",
      "Led weekly debugging sessions and 1:1 code reviews, contributing to a 28% improvement in overall class performance.",
      "Strengthened technical communication by facilitating structured problem-solving discussions on advanced database challenges.",
    ],
    tags: ["Oracle SQL", "DBMS", "ER Modeling", "Query Optimization"],
  },
  {
    title: "Frontend Developer",
    company: "Solvative",
    date: "Apr 2022 – Jul 2024",
    location: "Ahmedabad, India",
    bullets: [
      "Led the frontend team to deliver 12+ production client websites in 10 months — recognized by leadership and selected for the technical interview panel.",
      "Built a real-time IoT dashboard for a dairy company's chiller monitoring system using React.js, TypeScript, Node.js, and REST APIs — reducing alert response time by 58%.",
      "Developed high-performance, responsive web apps for cosmetic and pharmaceutical brands translating Figma designs using React.js, SCSS, and AEM.",
      "Managed GitLab CI/CD pipelines, conducted structured code reviews, and collaborated across Agile/Scrum ceremonies.",
    ],
    clientProjects: [
      {
        name: "Botox Cosmetic",

        description:
          "Frontend development for the official Botox Cosmetic website using HTML, SCSS, JavaScript, and AEM.",

        url: "https://www.botoxcosmetic.com/",
      },

      {
        name: "Botox HCP",

        description:
          "Contributed responsive page development and AEM integration for the healthcare professional website.",

        url: "https://www.botoxcosmetichcp.com/",
      },

      {
        name: "Juvederm",

        description:
          "Built UI components with a focus on accessibility, responsiveness, and visual consistency.",

        url: "https://www.juvederm.com/",
      },

      {
        name: "Juvederm HCP",

        description:
          "Developed interactive frontend elements using JavaScript and SCSS for HCP users.",

        url: "https://hcp.juvederm.com/",
      },

      {
        name: "Natrelle",

        description:
          "Contributed frontend enhancements and Adobe Experience Manager integration for production pages.",

        url: "https://www.natrelle.com/",
      },

      {
        name: "My Kybella",

        description:
          "Developed responsive web pages with focus on performance optimization.",

        url: "https://www.mykybella.com/",
      },

      {
        name: "The Look of 3",

        description:
          "Worked on UI components and animations for a campaign-focused brand experience.",

        url: "https://www.thelookof3.com/",
      },

      {
        name: "HCP My Kybella",

        description:
          "Enhanced frontend functionality, UI structure, and responsive behavior for the HCP-facing website.",

        url: "https://hcp.mykybella.com/",
      },
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "AEM",
      "GitLab CI/CD",
      "REST APIs",
    ],
  },
  {
    title: "Senior Analyst — Data Strategy & Engineering",
    company: "Kantar Analytics Practice",
    date: "May 2021 – Feb 2022",
    location: "Bengaluru, India",
    bullets: [
      "Developed and optimized complex SQL queries for data cleaning and integrity checks on global drink consumption datasets spanning 200+ brands across 180+ countries.",
      "Automated brand hierarchy updates using Python scripts, reducing manual delivery time by 2–3 weeks per cycle and eliminating 70% of manual processing effort.",
      "Built internal Python ETL pipelines improving data integrity to 99.9% across 5 enterprise reporting systems.",
      "Managed bug tracking and release activities using Azure DevOps across Agile delivery cycles.",
    ],
    tags: ["Python", "SQL Server", "ETL Pipelines", "Azure DevOps", "pandas"],
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
