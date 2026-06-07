import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function CountUp({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId, startTime;
    const duration = 1400;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * to);
      if (progress < 1) rafId = requestAnimationFrame(animate);
      else setVal(to);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}
      {suffix}
    </span>
  );
}

const container = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const wordReveal = {
  initial: { y: "110%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "90px 20px 50px" : "100px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.p
        {...fadeUp(0.05)}
        style={{
          fontSize: isMobile ? "10px" : "13px",
          fontWeight: "600",
          letterSpacing: isMobile ? "1.5px" : "3px",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        AI & Frontend Engineer · M.S Grad ’26 · 4.0 GPA · F-1 OPT STEM · Open to
        relocation
      </motion.p>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        style={{ overflow: "hidden", marginBottom: "8px" }}
      >
        {["AI &", "FRONTEND", "ENGINEER"].map((word, i) => (
          <div key={word} style={{ overflow: "hidden" }}>
            <motion.h1
              variants={wordReveal}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(60px, 13vw, 150px)",
                lineHeight: i === 2 ? 0.88 : 0.95,
                letterSpacing: "-1px",
                color: i === 2 ? "var(--accent)" : "var(--text)",
                margin: i === 2 ? "0 0 32px" : 0,
              }}
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp(0.55)}
        style={{
          fontSize: isMobile ? "16px" : "18px",
          fontWeight: "400",
          color: "var(--text-muted)",
          maxWidth: "520px",
          lineHeight: 1.75,
          marginBottom: "28px",
        }}
      >
        I build{" "}
        <TypeAnimation
          sequence={[
            "LLM pipelines & RAG systems.",
            2200,
            "multi-agent AI platforms.",
            2200,
            "real-time React interfaces.",
            2200,
            "end-to-end AI products.",
            2200,
          ]}
          wrapper="span"
          speed={55}
          deletionSpeed={75}
          repeat={Infinity}
          cursor={false}
          style={{ color: "var(--accent)", fontWeight: "700" }}
        />
      </motion.div>

      <motion.div
        {...fadeUp(0.68)}
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {[
          "LangChain",
          "RAG",
          "Multi-Agent",
          "React",
          "FastAPI",
          "PySpark",
          "Python",
          "AWS",
        ].map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "600",
              color: "var(--text-muted)",
              border: "1.5px solid var(--border)",
              padding: isMobile ? "5px 12px" : "6px 16px",
              borderRadius: "4px",
              letterSpacing: "0.2px",
              backgroundColor: "var(--bg-surface)",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp(0.8)}
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, auto)",
          gap: isMobile ? "24px 32px" : "0",
          columnGap: isMobile ? "32px" : "48px",
          paddingTop: "28px",
          borderTop: "1px solid var(--border)",
        }}
      >
        {[
          { to: 3, suffix: "+", label: "Years Experience" },
          { text: "4.0 GPA", label: "Master of Science" },
          { text: "F1 OPT", label: "STEM Graduate" },
        ].map(({ to, suffix, decimals, text, label }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "40px" : "48px",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              {text != null ? (
                text
              ) : (
                <CountUp
                  to={to}
                  suffix={suffix ?? ""}
                  decimals={decimals ?? 0}
                />
              )}
            </div>
            <div
              style={{
                fontSize: isMobile ? "10px" : "13px",
                fontWeight: "600",
                color: "var(--text-muted)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
