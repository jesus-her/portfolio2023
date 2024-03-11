'use client'

import { useTheme } from '@/context/theme-context'
import React from 'react'

export default function Filter2DiagonalLines ({ rotate }: { rotate: string }) {
  const { theme } = useTheme()
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`c-lesPJm c-lesPJm-ijsQFok-css ${rotate}  min-w-full  min-h-full`}
    >
      <defs>
        <pattern
          id='pattern-white-false'
          patternUnits='userSpaceOnUse'
          width='1'
          height='30'
        >
          <line
            x1='0'
            y='0'
            x2='0'
            y2='1'
            stroke={theme === 'light' ? '#000' : '#fff'}
            stroke-width='7'
          ></line>
        </pattern>
      </defs>{' '}
      <rect
        width='100%'
        height='100%'
        fill='url(#pattern-white-false)'
        opacity='.33'
      ></rect>
    </svg>
  )
}
