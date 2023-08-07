"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import Link from "next/link";
import Filter3Colors from "./filters/Filter3Colors";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center scroll-mt-4 relative w-screen pb-12 overflow-x-hidden leading-8 "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className=" gridLine " />

      <SectionHeading>{"Contact"}</SectionHeading>
      <div className=" gridLine " />

      <div className="sm:text-7xl text-5xl  my-16 p-8  relative text-white ">
        <p className=" font-bold bg-violet-600 w-fit mb-2">Let's</p>
        <p className=" font-bold bg-violet-600 w-fit mb-2">Work</p>
        <p className=" font-bold bg-violet-600 w-fit mb-2">Together</p>

        <Filter3Colors />
        <Filter2DiagonalLines />
      </div>
      <div className=" flex flex-col lg:flex-row gap-8  items-center justify-center px-8 ">
        <a
          href="mailto:jesus10.hn@gmail.com"
          target="blank"
          className="button-spark"
        >
          <span className="spark__container">
            <span className="spark" />
          </span>
          <span className="backdrop" />
          <span className="text md:text-4xl text-xl">jesus10.hn@gmail.com</span>
        </a>
        <a
          href="https://wa.me/522462224323"
          target="blank"
          className="button-spark"
        >
          <span className="spark__container">
            <span className="spark" />
          </span>
          <span className="backdrop" />
          <span className="text md:text-4xl text-xl">+52 246 222 4323</span>
        </a>
      </div>
    </motion.section>
  );
}
