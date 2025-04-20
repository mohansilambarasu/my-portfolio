import { motion, useInView } from "framer-motion";
import {
  FaGamepad,
  FaSave,
  FaStar,
  FaHeart,
  FaRocket,
  FaKeyboard,
  FaBug,
  FaSpaceShuttle,
  FaSafari,
} from "react-icons/fa";
import {
  GiJoystick,
  GiTwoCoins,
  GiConsoleController,
  GiSpikedDragonHead,
} from "react-icons/gi";
import { useRef } from "react";

const icons = [
  {
    Icon: FaGamepad,
    color: "#ff4d4d",
    top: "top-[5%]",
    left: "left-[5%]",
    delay: 0,
  },
  {
    Icon: FaSave,
    color: "#2e2e2e",
    top: "top-[10%]",
    left: "left-[85%]",
    delay: 0.2,
  },
  {
    Icon: FaStar,
    color: "#ffd700",
    top: "top-[25%]",
    left: "left-[10%]",
    delay: 0.4,
  },
  {
    Icon: FaGamepad,
    color: "#f77f00",
    top: "top-[30%]",
    left: "left-[80%]",
    delay: 0.6,
  },
  {
    Icon: GiTwoCoins,
    color: "#ffb703",
    top: "top-[45%]",
    left: "left-[3%]",
    delay: 0.8,
  },
  {
    Icon: FaHeart,
    color: "#ff4d4d",
    top: "top-[60%]",
    left: "left-[90%]",
    delay: 1,
  },
  {
    Icon: GiJoystick,
    color: "#ff4d4d",
    top: "top-[70%]",
    left: "left-[7%]",
    delay: 1.2,
  },
  {
    Icon: FaRocket,
    color: "#39ff14",
    top: "top-[15%]",
    left: "left-[50%]",
    delay: 1.4,
  },
  {
    Icon: FaKeyboard,
    color: "#1985a1",
    top: "top-[85%]",
    left: "left-[75%]",
    delay: 1.6,
  },
  {
    Icon: FaRocket,
    color: "#1985a1",
    top: "top-[80%]",
    left: "left-[15%]",
    delay: 1.8,
  },
  {
    Icon: GiConsoleController,
    color: "#ff006e",
    top: "top-[78%]",
    left: "left-[60%]",
    delay: 2,
  },
  {
    Icon: GiJoystick,
    color: "#721010",
    top: "top-[90%]",
    left: "left-[30%]",
    delay: 2.2,
  },
  {
    Icon: FaBug,
    color: "#ffcc00",
    top: "top-[90%]",
    left: "left-[90%]",
    delay: 2.4,
  },
  {
    Icon: FaSafari,
    color: "#721010",
    top: "top-[20%]",
    left: "left-[25%]",
    delay: 2.6,
  },
  {
    Icon: FaSpaceShuttle,
    color: "#ff0066",
    top: "top-[60%]",
    left: "left-[20%]",
    delay: 2.8,
  },
  {
    Icon: GiSpikedDragonHead,
    color: "#ff0066",
    top: "top-[50%]",
    left: "left-[82%]",
    delay: 3,
  },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {icons.map(({ Icon, color, top, left, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${top} ${left}`}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            delay,
          }}
        >
          <div className="block md:hidden">
            <Icon size={10} style={{ color, opacity: 0.4 }} />
          </div>
          <div className="hidden md:block">
            <Icon size={28} style={{ color, opacity: 0.5 }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
