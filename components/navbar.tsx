"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function NavBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative ">
      <motion.nav
        className="flex fixed bottom-[1rem] left-1/2 h-fit -translate-x-1/2 bg-white  rounded-full  w-auto items-center
        justify-center dark:bg-black shadow-xl p-1 overflow-hidden "
      >
        <ul
          className="flex  flex-row items-center justify-center gap-y-1
          font-medium text-gray-500 w-[initial] gap-2  border-[#000] border-opacity-20 dark:border-[#fff] dark:border-opacity-10 p-1 border-[1px] rounded-full  "
        >
          {links.map((link, index) => (
            <motion.li
              className=" h-10 w-10 flex  items-center justify-center relative "
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center text-lg px-1  justify-center w-fit hover:text-black transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-black dark:text-white": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.icon}

                {/* {link.name} */}

                {link.name === activeSection && (
                  <>
                    <motion.span
                      className={`bg-[#f0f0f0] rounded-full ${
                        index === 0 ? "rounded-r-lg " : ""
                      }${
                        index === links.length - 1 ? "rounded-l-lg " : ""
                      } absolute inset-0  -z-10 dark:bg-[#2c2c2c]`}
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    >
                      <motion.span
                        className={`bg-[#fff] shadow-lg shadow-[#fff] opacity-100 dark:shadow-black dark:bg-black blur-md invert brightness-200  inset-0 w-5 h-2 mx-auto my-auto absolute -bottom-10  rounded-full `}
                      ></motion.span>
                    </motion.span>
                  </>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <ThemeSwitch />
      </motion.nav>
    </header>
  );
}
