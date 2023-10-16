"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import GradientText from "./gradient-text";
import { Button, Chip, Image, Spacer } from "@nextui-org/react";
import Filter3Colors from "./filters/Filter3Colors";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import { BsCircleFill } from "react-icons/bs";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="text-center leading-8  scroll-mt-4 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{"About Me"}</SectionHeading>
      <div className=" flex flex-col items-center lg:flex-row  object-contain relative gap-8 ">
        <div className="flex flex-col text-left text-base md:text-xl w-full items-start justify-center ">
          <p className=" max-w-xl">
            Hello! I'm Jesus, a Software Developer based in Tlaxcala, Mexico. I
            enjoy creating beautiful and reliable applications for internet and
            phones. My goal is to always build scalable products and performant
            experiences.
          </p>
          <Spacer y={10} />

          <Chip variant="shadow" color="warning">
            <p className=" font-semibold text-lg">nerd at heart. ☁️</p>
          </Chip>
        </div>

        <Image
          isBlurred
          src={"https://i.imgur.com/ZDbY7SK.jpg"}
          alt="Project Image"
          width={369}
          height={369}
          className="aspect-square object-cover self-center rounded-lg overflow-hidden"
        />
      </div>
    </motion.section>
  );
}
