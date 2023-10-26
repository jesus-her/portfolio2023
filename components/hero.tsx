"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Button, Chip, Spacer } from "@nextui-org/react";

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
        className="font-bold text-7xl "
      >
        <h1>Hello!</h1>
        <Spacer y={8} />
        <Chip
          variant="flat"
          color="default"
          className=" py-4 w-auto px-4 h-auto text-6xl"
        >
          ¯\_(ツ)_/¯
        </Chip>
        {/* <Spacer y={8} /> */}
      </motion.div>

      <motion.h2
        className="text-4xl font-bold !leading-[1.5] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm Jesús.
        <br />
        <span className=" bg-clip-text bg-gradient-to-b from-[#00D4DA] via-[#00B9E2] to-[#0080EE] text-transparent">
          full-stack developer
        </span>{" "}
        and{" "}
        <span className=" bg-clip-text bg-gradient-to-b from-[#0080EE] via-[#00B9E2] to-[#00D4DA] text-transparent">
          IT enthusiast.
        </span>
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
          radius="full"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          endContent={<BsArrowRight size={22} />}
          href="#contact"
          as={Link}
          variant="shadow"
          color="primary"
        >
          Contact me here
        </Button>
        <Button
          radius="full"
          startContent={<HiDownload size={22} />}
          href="/Jesus_HN_cv.pdf"
          variant="bordered"
          color="primary"
        >
          <a href="/Jesus_HN_cv.pdf" download>
            Download CV{" "}
          </a>
        </Button>
      </motion.div>
      {/* <motion.div
        className="flex  items-center justify-center gap-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          aria-label="LinkenIn Button"
          as={Link}
          radius="full"
          variant="bordered"
          href="https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-hern%C3%A1ndez-nava-457b35235/"
          target="blank"
          startContent={<BsLinkedin className=" rounded-full " size={22} />}
        >
          LinkedIn
        </Button>
        <Button
          radius="full"
          as={Link}
          variant="bordered"
          href="https://github.com/jesus-her"
          target="blank"
          startContent={<BsGithub className=" rounded-full  " size={22} />}
        >
          Github
        </Button>
      </motion.div> */}
    </section>
  );
}
