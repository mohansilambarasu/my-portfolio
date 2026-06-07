import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDark(saved === "dark");
    document.documentElement.classList.toggle("dark", saved === "dark");

    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  const navLinks = ["Work", "Projects", "Skills", "About", "Contact"];

  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const resumeUrl = `${baseUrl}Mohan_Silambarasu_Elangkumaran_AI_Resume.pdf`;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: scrolled || menuOpen ? "var(--bg)" : "transparent",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid var(--border)"
              : "1px solid transparent",
          transition: "all 0.3s ease",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              letterSpacing: "2px",
              color: "var(--accent)",
              flexShrink: 0,
            }}
          >
            MSE
          </span>

          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-56}
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-muted)")
                  }
                >
                  {link}
                </Link>
              ))}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={toggleTheme}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-surface)",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              aria-label="Toggle theme"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {!isMobile && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "6px 14px",
                  borderRadius: "3px",
                  letterSpacing: "0.5px",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}
              >
                Resume ↗
              </a>
            )}

            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  backgroundColor: "var(--bg-surface)",
                  padding: "0",
                }}
                aria-label="Toggle menu"
              >
                <span
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: "var(--text)",
                    transition: "all 0.2s",
                    transform: menuOpen
                      ? "rotate(45deg) translate(4px, 4px)"
                      : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: "var(--text)",
                    transition: "all 0.2s",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: "var(--text)",
                    transition: "all 0.2s",
                    transform: menuOpen
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "none",
                  }}
                />
              </button>
            )}
          </div>
        </div>

        {isMobile && menuOpen && (
          <div
            style={{
              borderTop: "1px solid var(--border)",
              backgroundColor: "var(--bg)",
              padding: "16px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-56}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  letterSpacing: "0.3px",
                }}
              >
                {link}
              </Link>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--accent)",
                marginTop: "16px",
                letterSpacing: "0.5px",
              }}
            >
              Resume ↗
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
