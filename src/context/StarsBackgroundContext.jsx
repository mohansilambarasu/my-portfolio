import { createContext, useContext, useState } from "react";

const StarsBackgroundContext = createContext();

export const StarsBackgroundProvider = ({ children }) => {
  const [StarsBackground, setStarsBackground] = useState(false);

  const toggleStarsBackground = () => {
    setStarsBackground((prev) => !prev);
  };

  return (
    <StarsBackgroundContext.Provider
      value={{ StarsBackground, toggleStarsBackground }}
    >
      {children}
    </StarsBackgroundContext.Provider>
  );
};

export const useStarsBackground = () => useContext(StarsBackgroundContext);
