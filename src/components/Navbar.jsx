import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  const links = [
    { href: "/my-portfolio/#top", label: "Home" },
    { href: "/my-portfolio/#work", label: "Work" },
    { href: "/my-portfolio/#project", label: "Projects" },
    { href: "/my-portfolio/#about", label: "About" },
    { href: "/my-portfolio/#contact", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed w-screen z-[2] w-full flex items-center justify-between px-6 py-4 bg-[#2e2e3a] text-[#fbeec1] retro-text text-sm flex justify-end lg:justify-center items-center">
        <motion.nav
          className={`px-10 py-3 rounded-xl bg-[#f3e3c3] border border-[#2e2e2e] shadow-[inset_-4px_-4px_0_#d6c2a8] flex items-center gap-10 transition-all duration-500 hidden lg:flex ${
            isScrolled ? "scale-100" : "scale-90"
          } z-50`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button className="w-5 h-5 bg-[#2e2e2e] rounded-full shadow-[inset_2px_2px_2px_#444]"></button>

          {links.map((link, index) => (
            <HashLink
              key={index}
              smooth
              to={link.href}
              className="text-sm retro-text text-[#2e2e2e] hover:text-[#d62828] transition-all duration-300"
            >
              {link.label}
            </HashLink>
          ))}

          <button className="w-5 h-5 bg-[#d62828] rounded-full shadow-[inset_2px_2px_2px_#721010]"></button>
        </motion.nav>

        <div className="lg:hidden relative z-50">
          <button onClick={handleMenuClick} className="text-3xl  transition">
            {isMenuActive ? "✕" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {isMenuActive && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-full h-screen bg-[#1f1f2e] flex flex-col justify-center items-center gap-12 pt-6 z-40"
            >
              {links.map((link, index) => (
                <HashLink
                  key={index}
                  smooth
                  to={link.href}
                  onClick={handleMenuClick}
                  className="text-2xl retro-text text-[#fbeec1] hover:text-[#ffa500] transition-all duration-300"
                >
                  {link.label}
                </HashLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
