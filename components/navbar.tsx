"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";
//https://www.npmjs.com/package/clsx
//@ts-ignore
import clsx from "clsx";

export default function NavBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="flex justify-center items-center fixed bottom-2 w-screen z-[11]">
      <motion.nav className="dark:bg-white bg-black shadow-2xl rounded-full px-4 py-2 w-fit">
        <ul className="flex items-center justify-center font-medium text-gray-400 gap-2">
          {links.map((link, index) => (
            <motion.li
              className="relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex flex-col text-[10px] items-center justify-center w-fit  transition px-1",
                  {
                    "text-white dark:text-[#000]": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <div className=" text-base">{link.icon}</div>

                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className={`bg-[#f0f0f0] rounded-full w-1 h-1 absolute -bottom-1  dark:bg-[#000]`}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      <ThemeSwitch />
    </header>
  );
}
