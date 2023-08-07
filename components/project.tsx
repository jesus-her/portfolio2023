import { projectsData } from "@/lib/data";
import Filter1GrainTexture from "./filters/Filter1GrainTexture.tsx";
import Link from "next/link.js";
import Image from "next/image.js";

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
    <div className=" w-auto  bg-[rgba(255,255,255,1)]   relative rounded-lg break-inside overflow-hidden m-1 mb-2">
      <Image alt="" src={imageUrl} className="c-lesPJm c-lesPJm-ikzLvCr-css" />
      <Filter1GrainTexture />

      <div className="overflow-hidden relative   rounded-lg p-4 bg-[rgba(255,255,255,0.2)] ">
        <div className=" relative z-10 flex flex-col items-center gap-4 ">
          <Image
            src={imageUrl}
            alt="Card Image"
            className=" w-72 h-auto  object-cover  rounded-lg"
          />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <div
                key={tag}
                className="flex flex-row bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 px-2 py-1 text-black font-semibold"
              >
                <p className="opacity-100">{tag}</p>
              </div>
            ))}
          </div>
          <div className=" text-black ">
            <h3 className=" font-bold text-xl  ">{title}</h3>
            <p className=" opacity-90">{description}</p>
          </div>
        </div>
        {link !== "" && (
          <div className="flex justify-center items-center  pt-4">
            <a className="button-spark" href={link} target="blank">
              <span className="spark__container">
                <span className="spark" />
              </span>
              <span className="backdrop" />
              <span className="text">Discover this project</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
