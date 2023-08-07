import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import Filter3Colors from "./filters/Filter3Colors";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import Filter1GrainTexture from "./filters/Filter1GrainTexture.tsx";

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
      <div className="relative py-8 md:px-4 px-1 flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <div>
            {stars.map((star: { top: number; left: number }, index) => (
              <Star key={index} top={star.top} left={star.left} theme={theme} />
            ))}
          </div>
          {/* <div className="flex justify-between flex-col text-left mb-4 text-xs md:text-lg leading-5    border dark:border-white  border-black px-1 ">
            <span>Passionate about creating interactive web experiences.</span>
            <span>
              I love to combine{" "}
              <span className="font-bold text-black  dark:text-transparent dark:bg-clip-text bg-gradient-to-r from-[#CBD7FF] via-[#E8C7FE] to-[#F5E3FD] ">
                creativity
              </span>{" "}
              and <span className=" font-bold tracking-wide">technology </span>{" "}
              to offer innovative solutions.
            </span>
            <span>Focused on designing impactful graphic solutions.</span>
          </div> */}

          <div className=" flex gap-4 relative w-full justify-center">
            <Filter3Colors />
            <Filter2DiagonalLines />

            <div className="  font-bold md:text-9xl text-5xl   w-fit items-center justify-center flex">
              <span>{"<"}</span>
            </div>
            <div className="font-bold md:text-8xl text-4xl text-white   w-fit    ">
              <div className="flex justify-between flex-row text-justify my-4 bg-purple-700">
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
              </div>
              <div className="flex justify-between text-white flex-row text-justify my-4 bg-blue-500">
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>L</span>
                <span>D</span>
              </div>
            </div>
            <div className="  font-bold md:text-9xl text-5xl   w-fit items-center justify-center flex">
              <span>{"/>"}</span>
            </div>
          </div>

          <div className=" text-xs md:text-lg leading-6 text-center w-full my-4  font-extralight justify-center items-center flex flex-col  ">
            <p>
              <span className=" font-bold border dark:border-white  border-black">
                If I don't know it
              </span>
              , I learn it, and what I know, I share it.
            </p>
            <p>
              If I don't know it,{" "}
              <span className=" font-bold border dark:border-white  border-black">
                I learn it
              </span>
              , and what I know, I share it.
            </p>
            <p>
              If I don't know it, I learn it, and{" "}
              <span className=" font-bold border dark:border-white  border-black">
                what I know
              </span>
              , I share it.
            </p>
            <p>
              If I don't know it, I learn it, and what I know,{" "}
              <span className=" font-bold border dark:border-white  border-black">
                I share it.
              </span>
            </p>
          </div>

          <div className="flex justify-between flex-col text-left mt-4 text-xs md:text-lg leading-5   border dark:border-white  border-black px-1 ">
            <span>Passionate about creating interactive web experiences.</span>
            <span>
              I love to combine{" "}
              <span className="font-bold text-black  dark:text-transparent dark:bg-clip-text bg-gradient-to-r from-[#CBD7FF] via-[#E8C7FE] to-[#F5E3FD] ">
                creativity
              </span>{" "}
              and <span className=" font-bold tracking-wide">technology </span>{" "}
              to offer innovative solutions.
            </span>
            <span>Focused on designing impactful graphic solutions.</span>
          </div>

          {/* <div className=" flex gap-4 relative mt-8  ">
            <Filter3Colors />

            <div className="font-bold md:text-base text-sm text-white overflow-hidden px-3   w-fit bg-purple-700 flex justify-between flex-row text-justify     ">
              <span>nerd at heart. ☁️</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GradientText;
