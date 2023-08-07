"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className=" bg-black   backdrop-blur-[0.5rem]    text-white dark:text-black
      shadow-2xl rounded-full flex items-center justify-center hover:opacity-90 dark:bg-[#f0f0f0] h-10 w-10 ml-4"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
