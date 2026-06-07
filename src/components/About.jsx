import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo from "../assets/img.webp";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

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
        padding: isMobile ? "48px 20px" : "60px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: isMobile ? "36px" : "48px" }}>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 80px)",
            lineHeight: 1,
            color: "var(--text)",
            margin: 0,
          }}
        >
          ABOUT
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 80px)",
            lineHeight: 0.88,
            color: "var(--accent)",
            margin: 0,
          }}
        >
          ME
        </motion.h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
          gap: isMobile ? "32px" : "52px",
          alignItems: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: isMobile ? "280px" : "100%",
            margin: isMobile ? "0 auto" : 0,
          }}
        >
          <img
            src={photo}
            alt="Mohan Silambarasu"
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              filter: "grayscale(15%)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontSize: isMobile ? "26px" : "22px",
              fontWeight: "400",
              color: "var(--text)",
              lineHeight: isMobile ? 1.45 : 1.7,
              marginBottom: "24px",
              letterSpacing: "-0.3px",
            }}
          >
            I'm Mohan, a recent M.S. graduate and Full-Stack AI Engineer looking
            for new grad roles.
          </p>

          <p
            style={{
              fontSize: isMobile ? "17px" : "16px",
              fontWeight: "400",
              color: "var(--text-muted)",
              lineHeight: isMobile ? 1.75 : 1.85,
              marginBottom: "20px",
            }}
          >
            I build intelligent products across AI, data, backend, and frontend
            layers — from RAG pipelines and multi-agent workflows to FastAPI
            backends, data pipelines, and React/TypeScript interfaces.
          </p>

          <p
            style={{
              fontSize: isMobile ? "17px" : "16px",
              fontWeight: "400",
              color: "var(--text-muted)",
              lineHeight: isMobile ? 1.75 : 1.85,
              marginBottom: "32px",
            }}
          >
            I recently graduated with an M.S. in Applied Information Technology
            from George Mason University — GPA 4.0, Academic Excellence Award,
            specializing in Data Analytics and Intelligence Methods.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {[
              "📍 Fairfax, VA",
              "🎓 Recent M.S. Grad",
              "✈️ Open to Relocation",
              "🛂 F-1 OPT STEM",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: isMobile ? "14px" : "15px",
                  fontWeight: "500",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: isMobile ? "8px 14px" : "8px 18px",
                  borderRadius: "20px",
                  backgroundColor: "var(--bg-card)",
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
