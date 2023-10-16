import { projectsData } from "@/lib/data";

import Link from "next/link.js";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import { Button, Chip, Image } from "@nextui-org/react";
import { HiLockClosed } from "react-icons/hi";
import { LuLink } from "react-icons/lu";

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
    <div className="relative rounded-xl break-inside overflow-hidden mb-4  ">
      <Image
        alt="Project Image"
        isBlurred
        removeWrapper
        src={imageUrl}
        width={500}
        height={500}
        className=" c-lesPJm-ikzLvCr-css"
      />
      <div className="flex flex-col gap-4 z-10 overflow-hidden relative rounded-lg p-4 ">
        <Filter2DiagonalLines />
        <h3 className="font-bold text-4xl">{title}</h3>
        <Image
          isBlurred
          src={imageUrl}
          alt="Project Image"
          className="rounded-lg mb-6"
        />
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {tags.map((tag: string) => (
            <Chip size="sm" color="warning" key={tag}>
              {tag}
            </Chip>
          ))}
        </div>
        <p className="text-left text-sm leading-relaxed text-white font-semibold">
          {description}
        </p>

        {link && (
          <Button
            variant="shadow"
            color="primary"
            endContent={<LuLink />}
            as={Link}
            href={link}
            target="blank"
            className="font-semibold  px-6 py-3 mt-6 uppercase shadow-md shadow-black/30"
          >
            Discover this project
          </Button>
        )}
      </div>

      {/* <div className="flex flex-col gap-2 z-10 overflow-hidden relative rounded-lg p-4 ">
        <div className=" relative z-10 flex flex-col items-center gap-4  ">
          <Image
            src={imageUrl}
            alt="Project Image"
            width={800}
            height={600}
            layout="responsive"
            priority
          />

          <div className=" text-black ">
            <h3 className=" font-bold text-xl  ">{title}</h3>
            <p className=" opacity-90 text-left">{description}</p>
          </div>
        </div>

        {link !== "" && (
          <Link
            href={link}
            target="blank"
            className="group px-7 py-1 text-white mt-8
                   flex items-center gap-2 rounded-full shadow-lg
                 
                   outline-none  hover:opacity-80 bg-black text-center justify-center
                   
                   "
            onClick={() => {}}
          >
            Discover this project
          </Link>
        )}
      </div> */}
    </div>
  );
}
