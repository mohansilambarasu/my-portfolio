import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import StarCanvas from "./StarCanvas";

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
    { href: "/my-portfolio/#about", label: "About" },
    { href: "/my-portfolio/#work", label: "Work" },
    { href: "/my-portfolio/#project", label: "Projects" },
    { href: "/my-portfolio/#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-10 py-4 rounded-full shadow-lg flex items-center gap-10 transition-all duration-500 hidden lg:flex border-2 border-white ${
          isScrolled ? "scale-100" : "scale-90"
        } z-50`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {links.map((link, index) => (
          <HashLink key={index} smooth to={link.href} className=" text-lg">
            {link.label}
          </HashLink>
        ))}
      </motion.div>

      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handleMenuClick}
          className=" text-2xl px-4 pt-1 pb-2 rounded-lg shadow-lg"
        >
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
            className="fixed top-0 right-0 w-full h-screen  flex flex-col items-center gap-6 p-6 z-40"
          >
            {links.map((link, index) => (
              <HashLink
                key={index}
                smooth
                to={link.href}
                onClick={handleMenuClick}
                className=" text-2xl lg:text-lg"
              >
                {link.label}
              </HashLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
