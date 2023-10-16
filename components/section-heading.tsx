import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  small?: boolean;
};

export default function SectionHeading({
  children,
  small,
}: SectionHeadingProps) {
  return (
    <h2
      className={` ${
        small ? "text-2xl lg:text-3xl text-center " : "text-4xl lg:text-5xl "
      } font-medium    text-left my-6 `}
    >
      {children}
    </h2>
  );
}
