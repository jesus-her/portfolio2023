import { projectsData } from "@/lib/data";
import Filter1GrainTexture from "./filters/Filter1GrainTexture.tsx";
import Link from "next/link.js";
import Image from "next/image.js";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import Filter3Colors from "./filters/Filter3Colors";
// import Filter3Colors from "./filters/Filter3Colors.tsx";

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
    <div className="   bg-[rgba(255,255,255,1)]   relative rounded-lg break-inside overflow-hidden m-1 mt-0">
      {/* <img alt="ola" src={imageUrl} className=" c-lesPJm-ikzLvCr-css" /> */}
      <Image
        src={imageUrl}
        alt="Project Image"
        priority // Prioriza la carga de la imagen
        className=" c-lesPJm-ikzLvCr-css"
      />
      <Filter1GrainTexture />
      {/* <Filter2DiagonalLines /> */}
      {/* <Filter3Colors /> */}

      <div className="overflow-hidden relative   rounded-lg p-4 bg-[rgba(255,255,255,.2)] ">
        <div className=" relative z-10 flex flex-col items-center gap-4  ">
          {/* <img
            src={imageUrl}
            alt="Card Image"
            className=" w-72 h-auto  object-cover  rounded-lg"
          /> */}
          <Image
            src={imageUrl}
            alt="Project Image"
            width={800} // Establece el ancho de la imagen
            height={600} // Establece la altura de la imagen
            layout="responsive" // Permite que la imagen se ajuste al contenedor
            priority // Prioriza la carga de la imagen
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
            <p className=" opacity-90 text-left">{description}</p>
          </div>
        </div>
        {/* {link !== "" && (
          <Link
            href={link}
            target="blank"
            className="group px-7 py-3 text-white
                   flex items-center gap-2 rounded-full shadow-lg
                 
                   outline-none  hover:opacity-70 bg-black
                   
                   "
            onClick={() => {}}
          >
            Discover this project ch
          </Link>
        )} */}
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
      </div>
    </div>
  );
}
