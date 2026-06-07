import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px 100px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 8vw, 80px)",
            lineHeight: 1,
            color: "var(--text)",
            margin: 0,
          }}
        >
          LET'S
        </h2>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 8vw, 80px)",
            lineHeight: 0.88,
            color: "var(--accent)",
            margin: "0 0 24px",
          }}
        >
          CONNECT
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          style={{
            fontSize: isMobile ? "15px" : "16px",
            fontWeight: "400",
            color: "var(--text-muted)",
            maxWidth: "500px",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Open to full-time AI Engineer, Full-Stack AI Developer, or Data
          Engineer roles in the U.S. F-1 OPT STEM — no sponsorship needed for 3
          years. Happy to relocate anywhere.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "10px",
            marginBottom: "44px",
            maxWidth: isMobile ? "280px" : "none",
          }}
        >
          <a
            href="mailto:melangku@gmu.edu"
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#fff",
              backgroundColor: "var(--accent)",
              padding: "13px 28px",
              borderRadius: "4px",
              letterSpacing: "0.3px",
              transition: "opacity 0.2s",
              display: "inline-block",
              textAlign: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Send an Email ↗
          </a>

          {[
            {
              label: "LinkedIn ↗",
              href: "https://linkedin.com/in/mohan-silambarasu-elangkumaran",
            },
            { label: "GitHub ↗", href: "https://github.com/mohansilambarasu" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--text)",
                border: "1px solid var(--border)",
                padding: "13px 28px",
                borderRadius: "4px",
                letterSpacing: "0.3px",
                transition: "all 0.2s",
                display: "inline-block",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "13px" : "15px",
              letterSpacing: "2px",
              color: "var(--text-muted)",
            }}
          >
            MOHAN SILAMBARASU ELANGKUMARAN
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "400",
              color: "var(--text-muted)",
            }}
          >
            melangku@gmu.edu
          </span>
        </div>
      </motion.div>
    </section>
  );
}
