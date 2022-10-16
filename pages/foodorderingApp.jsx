import React from "react";
import foodappImg from "../public/Assets/Projects/Food App.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const foodapp = () => {
  return (
    <div className="w-full">
      <div className="relative w-screen h-[30vh] lg:h-[40vh]">
        <div className="absolute w-full h-[30vh] lg:h-[40vh]  top-0 left-0 bg-black/80 z-10" />
        <Image
          src={foodappImg}
          alt="/"
          objectFit="cover"
          layout="fill"
          className="absolute z-1"
        />
        <div className="absolute max-w-[1240px] w-full top-[60%] p-4 text-[#fff] z-10">
          <h2 className="py-2">Food Ordering App</h2>
          <h3>React.JS / Scss / Bootstrap</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8 p-2">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            nostrum, iste cumque aspernatur in quo sequi molestias commodi
            recusandae ea. Fugit sequi suscipit cumque quas impedit minus
            reprehenderit libero, officia adipisci eos totam cum dignissimos
            eaque voluptatum ea ut autem quidem? Dolorum nemo reprehenderit
            doloremque incidunt libero esse totam fugit?
          </p>
          <button className="px-8 py-2 mr-8 mt-4">
            <a
              href="https://github.com/Ahmedadelkhalil/E-Commerce-Food-App-Redux.JS"
              target="blank"
            >
              Code
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://ahmedadelkhalil.github.io/E-Commerce-Food-App-Redux.JS/"
              target="blank"
            >
              Demo
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <p className="text-center font-bold pb-2">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="mr-1" /> React
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="mr-1" /> Boostarp
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="mr-1" /> Scss
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="mr-1" /> JS
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="mr-1" /> Css
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="mr-1" /> Tailwind
            </p>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer ml-4 md:ml-8 mb-5 mt-5">Back</p>
      </Link>
    </div>
  );
};

export default foodapp;
