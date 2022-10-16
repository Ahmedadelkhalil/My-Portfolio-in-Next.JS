import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full flex items-center justify-center mx-auto p-2">
        <div>
          <p className="uppercase text-gray-600 tracking-widest text-sm">
            let's build something together
          </p>
          <h1 className="capitalize text-gray-700 py-4">
            hi i'm <span className="text-[#5651e5]">ahmed</span>
          </h1>
          <h1 className="text-gray-700 capitalize py-2">
            a front-End web developer
          </h1>
          <p className="max-w-[70%] text-gray-600 py-4 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et
            exercitationem dicta eligendi deserunt magni blanditiis ipsam
            distinctio. Excepturi hic et cum, similique maiores, omnis libero
            praesentium nobis fugiat velit officia, tempora voluptatum suscipit
            pariatur reprehenderit eos! Aliquam, ex minima.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110">
              <BsFillPersonLinesFill />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-110">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
