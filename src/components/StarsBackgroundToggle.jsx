import React from "react";
import { Moon, Sun } from "lucide-react";

import { useStarsBackground } from "../context/starsbackgroundContext";

export default function StarsBackgroundToggle() {
  const { StarsBackground, toggleStarsBackground } = useStarsBackground();

  return (
    <button
      onClick={toggleStarsBackground}
      className="fixed top-5 left-5 p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer z-[3]"
    >
      {StarsBackground ? <Moon className="" /> : <Sun className="" />}
    </button>
  );
}
