"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import GradientText from "./gradient-text";
import {
  Button,
  Chip,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
} from "@nextui-org/react";
import Filter3Colors from "./filters/Filter3Colors";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import { BsCircleFill, BsCloud, BsGithub, BsLinkedin } from "react-icons/bs";
import { CgCloud } from "react-icons/cg";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="text-center leading-8  scroll-mt-4 mb-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{"About Me"}</SectionHeading>
      <div className=" flex flex-col items-start lg:flex-row  object-contain relative gap-8 ">
        <div className="flex flex-col text-left text-base md:text-xl w-full gap-4   ">
          <p className=" max-w-xl">
            Hello! I'm Jesus, a Software Developer based in Tlaxcala, Mexico. I
            enjoy creating beautiful and reliable applications for internet and
            phones. My goal is to always build scalable products and performant
            experiences.
          </p>
          <motion.div
            className="flex  items-center justify-start gap-2"
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
          </motion.div>
        </div>
        <Image
          isBlurred
          src={"https://i.imgur.com/ekDnwjM.jpg"}
          alt="Project Image"
          width={369}
          height={369}
          className="aspect-square object-cover self-center rounded-lg overflow-hidden"
        />
        {/* <Popover isOpen showArrow placement="top-start">
          <PopoverContent>
            <Button isDisabled variant="bordered">
              <p className=" font-semibold text-lg px-6 capitalize">
                nerd at heart. ☁️
              </p>
            </Button>
          </PopoverContent>
        </Popover> */}
      </div>
    </motion.section>
  );
}
