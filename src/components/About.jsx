import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    value: "3+",
    label: "Years",
    detail: "Production engineering experience",
  },
  {
    value: "13+",
    label: "Deliveries",
    detail: "AEM production projects",
  },
  {
    value: "4.0",
    label: "GPA",
    detail: "Academic Excellence Award '26",
  },
];

const profileTags = [
  "React.js",
  "JavaScript",
  "Python",
  "SQL",
  "Real-Time Systems",
  "Data Engineering",
];

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "48px 20px" : "72px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: isMobile ? "36px" : "52px" }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 80px)",
              lineHeight: 1,
              color: "var(--text)",
              margin: 0,
            }}
          >
            ABOUT
          </h2>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 80px)",
              lineHeight: 0.88,
              color: "var(--accent)",
              margin: 0,
            }}
          >
            ME
          </h2>
        </motion.div>
      </div>

      {/* Main layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.65fr",
          gap: isMobile ? "32px" : "60px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT — Profile / evidence panel */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            borderTop: "3px solid var(--accent)",
            padding: "22px 0 0",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            PROFILE / 2026
          </div>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "48px" : "56px",
              lineHeight: 0.95,
              color: "var(--text)",
              marginBottom: "30px",
            }}
          >
            SOFTWARE
            <br />
            <span style={{ color: "var(--accent)" }}>ENGINEER</span>
          </div>

          <div>
            {highlights.map((item, index) => {
              const active = hoveredStat === index;

              return (
                <motion.div
                  key={item.label}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ x: 6 }}
                  transition={{
                    duration: 0.2,
                  }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "72px 1fr",
                    gap: "16px",
                    alignItems: "center",
                    padding: "18px 0",
                    borderTop: "1px solid var(--border)",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "34px",
                      lineHeight: 1,
                      color: active ? "var(--accent)" : "var(--text)",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.value}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "var(--text)",
                        textTransform: "uppercase",
                        letterSpacing: "1.2px",
                        marginBottom: "3px",
                      }}
                    >
                      {item.label}
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT — Narrative */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Intro */}
          <p
            style={{
              fontSize: isMobile ? "24px" : "26px",
              fontWeight: "400",
              color: "var(--text)",
              lineHeight: 1.5,
              letterSpacing: "-0.5px",
              margin: "0 0 28px",
              maxWidth: "720px",
            }}
          >
            I'm Mohan, a{" "}
            <span
              style={{
                color: "var(--accent)",
                fontWeight: "600",
              }}
            >
              Software Engineer
            </span>{" "}
            specializing in production frontend engineering and data-driven
            systems, with 3+ years of experience building real-time applications
            and analytics workflows.
          </p>

          {/* Divider / mini label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "26px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "2px",
                backgroundColor: "var(--accent)",
              }}
            />

            <span
              style={{
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "2.5px",
                color: "var(--text-muted)",
                textTransform: "uppercase",
              }}
            >
              Frontend + Data + AI
            </span>
          </div>

          <p
            style={{
              fontSize: isMobile ? "16px" : "16px",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "22px",
              maxWidth: "700px",
            }}
          >
            My professional experience spans{" "}
            <strong style={{ color: "var(--text)" }}>
              React and JavaScript frontend products
            </strong>
            , real-time REST and WebSocket integrations, and{" "}
            <strong style={{ color: "var(--text)" }}>
              Python and SQL data workflows
            </strong>
            .
          </p>

          <p
            style={{
              fontSize: isMobile ? "16px" : "16px",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              marginBottom: "30px",
              maxWidth: "700px",
            }}
          >
            I recently completed an M.S. in Information Technology at George
            Mason University, specializing in Data Analytics and Intelligence
            Methods, with a 4.0 GPA and Academic Excellence Award.
          </p>

          {/* Current direction */}
          <motion.div
            whileHover={{
              x: 4,
            }}
            style={{
              borderLeft: "3px solid var(--accent)",
              padding: "15px 18px",
              marginBottom: "30px",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "var(--accent)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "7px",
              }}
            >
              Currently Exploring
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "var(--text)",
                lineHeight: 1.7,
              }}
            >
              RAG · LLMs · Agentic AI · Vector Databases · AI-assisted software
              workflows
            </div>
          </motion.div>

          {/* Core tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "30px",
            }}
          >
            {profileTags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{
                  y: -2,
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "6px 12px",
                  borderRadius: "3px",
                  backgroundColor: "var(--bg-surface)",
                  cursor: "default",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Status row */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              paddingTop: "20px",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              "📍 New York City Metro",
              "🎓 M.S. IT '26",
              "💼 F-1 OPT",
              "✈️ Open to Relocation",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: "500",
                  color: "var(--text-muted)",
                  padding: "5px 0",
                  marginRight: "12px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
