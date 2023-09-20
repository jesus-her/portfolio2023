"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="text-center w-full  scroll-mt-[4rem] relative"
    >
      <div className="gridLine" />
      <div className="flex items-center justify-center overflow-hidden">
        <div className="relative py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <span className="font-bold text-8xl">Hello ;)</span>
          </motion.div>
        </div>
      </div>

      <div className="gridLine" />
      <motion.h1
        className=" py-8 px-4 text-2xl font-light !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-6xl">I'm Jesús.</span> <br />
        <span className="font-bold">full-stack developer</span> and{" "}
        <span className=" font-bold">IT enthusiast</span>.
      </motion.h1>
      <div className="gridLine"></div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6  px-4 text-lg font-medium
         py-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group text-black px-7 py-3
           flex items-center gap-2 rounded-full shadow-lg
         
           outline-none  hover:opacity-70 bg-gradient-to-r from-[#CBD7FF] via-[#E8C7FE] to-[#F5E3FD]
           
           "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <div className=" flex flex-row gap-4  items-center">
          <a
            className="group text-sm sm:text-base bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
            transition cursor-pointer borderBlack dark:bg-black hover:opacity-70 shadow-lg"
            href="/CV_JoseDeJesusHernandezNava.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="bg-transparent h-12 w-12 justify-center text-black border-black  flex items-center
           gap-2 rounded-full  transition dark:text-white dark:border-white border-2 shadow-lg
            cursor-pointer borderBlack   hover:opacity-70"
            href="https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-hern%C3%A1ndez-nava-457b35235/"
            target="_blank"
          >
            <BsLinkedin size={24} />
          </a>

          <a
            className="bg-transparent h-12 w-12 justify-center text-black border-black  flex items-center
 rounded-full  transition dark:text-white dark:border-white border-2 shadow-lg
            cursor-pointer borderBlack   hover:opacity-70"
            href="https://github.com/jesus-her"
            target="_blank"
          >
            {/* <FaGithubSquare /> */}
            <BsGithub size={32} />
          </a>
        </div>
      </motion.div>
      <div className="gridLine"></div>
    </section>
  );
}
