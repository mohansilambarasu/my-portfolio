import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordReveal = {
  initial: {
    y: "110%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 28,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
});

const stack = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "AWS",
  "PySpark",
  "Databricks",
  "Agentic AI",
];

const stats = [
  {
    text: "MS GRAD '26",
    label: "INFORMATION TECHNOLOGY, GEORGE MASON UNIVERSITY",
  },
  {
    text: "4.0 GPA",
    label: "ACADEMIC EXCELLENCE AWARD — 2026",
  },
  {
    text: "3+ YEARS",
    label: "PRODUCTION EXPERIENCE — FRONTEND & DATA ENGINEERING",
  },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "90px 20px 50px" : "100px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      {/* Eyebrow */}
      <motion.div
        {...fadeUp(0.05)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            flexShrink: 0,
          }}
        />

        <p
          style={{
            fontSize: isMobile ? "10px" : "13px",
            fontWeight: "600",
            letterSpacing: isMobile ? "1.5px" : "3px",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Software Engineer · Frontend Engineering & Data Systems · Open to
          relocation
        </p>
      </motion.div>

      {/* Main title */}
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        style={{
          overflow: "hidden",
          marginBottom: "8px",
        }}
      >
        {["SOFTWARE", "ENGINEER"].map((word, i) => (
          <div
            key={word}
            style={{
              overflow: "hidden",
            }}
          >
            <motion.h1
              variants={wordReveal}
              whileHover={
                !isMobile
                  ? {
                      x: i === 0 ? 8 : 12,
                    }
                  : undefined
              }
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "100px" : "160px",
                lineHeight: i === 1 ? 0.88 : 0.95,
                letterSpacing: "-1px",

                color: i === 1 ? "var(--accent)" : "var(--text)",

                margin: i === 1 ? "0 0 32px" : 0,

                cursor: "default",
              }}
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </motion.div>

      {/* Animated statement */}
      <motion.div
        {...fadeUp(0.55)}
        whileHover={
          !isMobile
            ? {
                x: 5,
              }
            : undefined
        }
        transition={{
          duration: 0.2,
        }}
        style={{
          fontSize: isMobile ? "24px" : "32px",
          fontWeight: "400",
          color: "var(--text-muted)",
          lineHeight: 1.75,
          marginBottom: "28px",
          cursor: "default",
        }}
      >
        I build{" "}
        <TypeAnimation
          sequence={[
            "production React applications.",
            2200,

            "real-time data-driven interfaces.",
            2200,

            "Python & SQL data workflows.",
            2200,

            "AI-assisted software prototypes.",
            2200,
          ]}
          wrapper="span"
          speed={55}
          deletionSpeed={75}
          repeat={Infinity}
          cursor={false}
          style={{
            color: "var(--accent)",
            fontWeight: "700",
          }}
        />
      </motion.div>

      {/* Stack */}
      <motion.div
        {...fadeUp(0.68)}
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {stack.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.72 + index * 0.04,
            }}
            whileHover={
              !isMobile
                ? {
                    y: -4,
                    scale: 1.04,
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                  }
                : undefined
            }
            whileTap={{
              scale: 0.97,
            }}
            style={{
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "600",

              color: "var(--text-muted)",

              border: "1.5px solid var(--border)",

              padding: isMobile ? "5px 12px" : "6px 16px",

              borderRadius: "4px",
              letterSpacing: "0.2px",

              backgroundColor: "var(--bg-surface)",

              cursor: "default",
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Evidence / stats */}
      <motion.div
        {...fadeUp(0.8)}
        style={{
          display: "grid",

          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",

          gap: isMobile ? "12px" : "16px",

          paddingTop: "28px",

          borderTop: "1px solid var(--border)",
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            whileHover={
              !isMobile
                ? {
                    y: -5,
                  }
                : undefined
            }
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "relative",

              padding: isMobile ? "18px 0" : "18px 18px 18px 0",

              borderRight:
                !isMobile && index < stats.length - 1
                  ? "1px solid var(--border)"
                  : "none",

              cursor: "default",
            }}
          >
            <motion.div
              whileHover={
                !isMobile
                  ? {
                      x: 4,
                    }
                  : undefined
              }
              style={{
                fontFamily: "var(--font-display)",

                fontSize: isMobile ? "36px" : "42px",

                color: "var(--accent)",

                lineHeight: 1,

                marginBottom: "9px",
              }}
            >
              {stat.text}
            </motion.div>

            <div
              style={{
                fontSize: isMobile ? "12px" : "14px",

                fontWeight: "700",

                color: "var(--text-muted)",

                letterSpacing: "1.3px",

                textTransform: "uppercase",

                lineHeight: 1.55,

                maxWidth: "280px",
              }}
            >
              {stat.label}
            </div>

            {/* Hover underline */}
            {!isMobile && (
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                style={{
                  width: "42px",
                  height: "2px",

                  backgroundColor: "var(--accent)",

                  transformOrigin: "left",

                  marginTop: "14px",
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
