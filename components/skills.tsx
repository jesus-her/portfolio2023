"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16  text-center leading-8  scroll-mt-4 relative"
    >
      <div className="gridLine" />
      <SectionHeading>My skills</SectionHeading>
      <div className="gridLine" />

      <ul className="flex flex-wrap justify-center md:gap-8 gap-0 text-lg  mt-16 overflow-hidden">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-transparent borderBlack rounded-xl px-3 py-3 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <h1 className="md:text-8xl text-2xl font-bold dark:font-outline-2-w font-outline-2  text-transparent relative">
              {skill}
            </h1>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
