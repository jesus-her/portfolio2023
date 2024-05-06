import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
  small?: boolean
}

export default function SectionHeading ({
  children,
  small
}: SectionHeadingProps) {
  return (
    <h2
      className={` ${
        small ? 'text-2xl md:text-3xl text-center ' : 'text-4xl md:text-5xl '
      } font-medium    text-center my-6 mb-14`}
    >
      {children}
    </h2>
  )
}
