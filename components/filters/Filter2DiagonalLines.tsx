"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

export default function Filter2DiagonalLines() {
  const { theme } = useTheme();
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="c-lesPJm c-lesPJm-ijsQFok-css"
      >
        <defs>
          <pattern
            id="pattern-white-false"
            patternUnits="userSpaceOnUse"
            width="7"
            height="7"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y="0"
              x2="0"
              y2="3.5"
              stroke={theme === "light" ? "#000" : "#fff"}
              stroke-width="1"
            ></line>
          </pattern>
        </defs>{" "}
        <rect
          width="100%"
          height="100%"
          fill="url(#pattern-white-false)"
          opacity="1"
        ></rect>
      </svg>
    </div>
  );
}
