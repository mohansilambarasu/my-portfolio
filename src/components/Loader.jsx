import { useEffect, useState } from "react";
import { FaRocket, FaStar, FaMeteor } from "react-icons/fa";

const Loader = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [<FaRocket />, <FaStar />, <FaMeteor />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2e2e3a] ">
      <div className="text-5xl animate-spin text-[#fbeec1]">
        {icons[currentIcon]}
      </div>
      <p className="ml-4 text-lg typewriter-text text-[#fbeec1]">Loading...</p>
    </div>
  );
};

export default Loader;
