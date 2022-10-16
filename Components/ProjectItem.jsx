import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgrounfImg, projecyUrl, tech }) => {
  return (
    <div className="relative w-full h-auto group flex items-center justify-center rounded-xl shadow-xl shadow-gray-400 p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={backgrounfImg}
        alt="/"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-center lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1rem] tracking-widest text-white">
          {title}
        </h3>
        <p className="text-center text-white pb-4 pt-2 lg:text-[1rem] md:text-[0.9rem] sm:text-[0.5rem]">
          {tech}
        </p>
        <Link href={projecyUrl}>
          <p className="capitalize bg-white text-gray-700 py-3 cursor-pointer text-center font-bold text-lg rounded-lg ">
            more info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
