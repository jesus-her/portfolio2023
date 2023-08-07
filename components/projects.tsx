"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  // const numDivs = 3; // Número de divs que deseas repetir

  // // Función para calcular los estilos específicos para cada div
  // const calculateDivStyles = (index: number, totalDivs: number) => {
  //   const size = 250 - index * 62.5;
  //   const leftPos = ((index + 1) / (totalDivs + 1)) * 100;
  //   return {
  //     width: `${size}px`,
  //     height: `${size}px`,
  //     left: `${leftPos}%`,
  //     top: "50%",
  //     transform: `translate(-${leftPos}%, -50%)`,
  //   };
  // };

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-0  text-center leading-8  scroll-mt-4 "
    >
      <div className="gridLine" />
      <SectionHeading>My projects</SectionHeading>
      <div className="gridLine" />

      <div className="     overflow-x-hidden  relative mt-8 mb-20 flex ">
        {/* Líneas verticales */}
        {/* {[...Array(numDivs)].map((_, index) => (
          <div
            key={`vertical-${index}`}
            className="absolute h-full w-px dark:opacity-100 opacity-20 bg-[#2c2c2c]"
            style={{ left: `${((index + 1) / (numDivs + 1)) * 100}%` }}
          />
        ))} */}

        {/* Líneas horizontales */}
        {/* {[...Array(numDivs)].map((_, index) => (
          <div
            key={`horizontal-${index}`}
            className="absolute w-full h-px dark:opacity-100 opacity-20 bg-[#2c2c2c]"
            style={{ top: `${((index + 1) / (numDivs + 1)) * 100}%` }}
          />
        ))} */}

        {/* Círculos en los vértices */}
        {/* {[...Array(numDivs)].map((_, vIndex) =>
          [...Array(numDivs)].map((_, hIndex) => (
            <div
              key={`circle-${vIndex}-${hIndex}`}
              className="absolute w-64 h-64 rounded-full border border-[#2c2c2c] dark:opacity-100 opacity-20"
              style={{
                left: `${((hIndex + 1) / (numDivs + 1)) * 100}%`,
                top: `${((vIndex + 1) / (numDivs + 1)) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))
        )} */}

        {/* <div className="absolute w-96 h-96 border border-[#2c2c2c] dark:opacity-100 opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div> */}

        {/* Líneas curvas */}
        {/* {[...Array(numDivs)].map((_, index) => (
          <div
            key={`curved-${index}`}
            className="absolute border border-[#2c2c2c] dark:opacity-100 opacity-20 rounded-0"
            style={calculateDivStyles(index, numDivs)}
          />
        ))} */}
        {/* <div className=" my-8  masonry md:masonry-md lg:masonry-lg  "> */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              {/* <Project {...project} /> */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
