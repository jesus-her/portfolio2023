import { projectsData } from "@/lib/data";

import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import { Button, Chip, Image, Snippet, Link } from "@nextui-org/react";
import { LuAlignCenterHorizontal, LuAnchor } from "react-icons/lu";
import { CgAnchor } from "react-icons/cg";
import { FaAnchor } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  date,
  link,
}: ProjectProps) {
  return (
    <div className="relative rounded-xl break-inside overflow-hidden mb-4 border shadow-sm dark:border-[#2c2c2c] border-gray-200">
      <div className="flex flex-col gap-4 z-10 overflow-hidden relative rounded-lg p-4 ">
        <div className=" relative  rounded-xl flex flex-col gap-4 py-4 px-2">
          <Filter2DiagonalLines />
          <Image
            isBlurred
            src={imageUrl}
            alt="Project Image"
            removeWrapper
            className=" skills-blur "
          />
          <h3 className="font-bold text-4xl ">{title}</h3>
          <Image
            isBlurred
            // removeWrapper
            src={imageUrl}
            alt="Project Image"
            className="rounded-lg mb-6"
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {tags.map((tag: string) => (
            <Chip size="sm" color="default" variant="flat" key={tag}>
              {tag}
            </Chip>
          ))}
        </div>
        <p className="text-left text-sm leading-relaxed font-semibold">
          {description}
        </p>

        {link && (
          <Button
            variant="shadow"
            color="primary"
            as={Link}
            href={link}
            radius="full"
            target="blank"
            className="font-semibold dark:bg-white bg-black border px-6 py-3 mt-6 uppercase shadow-md shadow-black/30"
          >
            {/* Discover this project */}
            <Link showAnchorIcon className=" dark:text-black text-white">
              Discover
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
