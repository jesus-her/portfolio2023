import React, { useEffect, useState } from "react";

import { useTheme } from "@/context/theme-context";

const Star = ({
  top,
  left,
  theme,
}: {
  top: number;
  left: number;
  theme: any;
}) => {
  const starStyle = {
    animation: `${theme === "dark" ? "twinkle" : "twinkleDark"} ${
      Math.random() * 5 + 3
    }s linear ${Math.random() * 1 + 1}s infinite`,
    top: `${top}%`,
    left: `${left}%`,
  };

  return <div className=" star " style={starStyle}></div>;
};

const GradientText = () => {
  const [stars, setStars] = useState([]);

  const { theme } = useTheme();

  useEffect(() => {
    // Genera las nuevas estrellas al cambiar el tema
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 15; i++) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        newStars.push({ top, left });
      }
      //@ts-ignore
      setStars(newStars);
    };

    generateStars();
  }, [theme]);

  return (
    <div
      className="flex items-center justify-center overflow-hidden md:border-8 border-4 dark:border-white 
     border-black dark:bg-black bg-white     "
    >
      <div className="relative py-8 md:px-4 px-1 flex flex-col justify-center items-center"></div>
    </div>
  );
};

export default GradientText;
