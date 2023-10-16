"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Button } from "@nextui-org/react";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="text-center w-full  scroll-mt-[4rem] relative flex flex-col gap-8 pt-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="font-bold text-7xl"
      >
        <h1>Hello ;)</h1>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm Jesús.
        <br />
        full-stack developer <span className=" font-light">and </span>
        IT enthusiast.
      </motion.h2>

      <motion.div
        className="flex  items-center justify-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          endContent={<BsArrowRight />}
          href="#contact"
          as={Link}
          variant="shadow"
          color="primary"
        >
          Contact me here
        </Button>
        <Button
          startContent={<HiDownload />}
          href="/CV_JoseDeJesusHernandezNava.pdf"
          variant="bordered"
          color="primary"
        >
          <a href="/bpl_cv.pdf" download>
            Download CV{" "}
          </a>
        </Button>
      </motion.div>
      <motion.div
        className="flex  items-center justify-center gap-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          aria-label="LinkenIn Button"
          isIconOnly
          as={Link}
          variant="bordered"
          href="https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-hern%C3%A1ndez-nava-457b35235/"
          target="blank"
        >
          <BsLinkedin size={24} />
        </Button>
        <Button
          isIconOnly
          as={Link}
          variant="bordered"
          href="https://github.com/jesus-her"
          target="blank"
        >
          <BsGithub size={24} />
        </Button>
      </motion.div>
    </section>
  );
}
