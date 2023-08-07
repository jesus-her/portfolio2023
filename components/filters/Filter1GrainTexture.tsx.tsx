"use client";

import React from "react";

export default function Filter1GrainTexture() {
  return (
    <div className="opacity-80">
      <svg id="texture" className="filter2">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
