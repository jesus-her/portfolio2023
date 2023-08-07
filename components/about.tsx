"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import GradientText from "./gradient-text";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-16  text-center leading-8  scroll-mt-4 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="gridLine "></div>
      <SectionHeading>{"About Me"}</SectionHeading>
      <div className="gridLine "></div>
      <div className="flex justify-center mt-16   ">
        <GradientText />
      </div>
    </motion.section>
  );
}
