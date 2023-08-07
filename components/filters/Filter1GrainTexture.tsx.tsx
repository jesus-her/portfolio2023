"use client";

import React from "react";

export default function Filter1GrainTexture() {
  return (
    <div className=" opacity-80">
      <svg id="texture" className=" filter2">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".8"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </div>
  );
}
