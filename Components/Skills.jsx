import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto h-full flex flex-col justify-center">
        <p className="uppercase text-xl text-[#5651e5]  tracking-widest">
          Skills
        </p>
        <h2 className="capitalize py-4">What i can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {/* html tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">html</h3>
              </div>
            </div>
          </div>
          {/* css tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">css</h3>
              </div>
            </div>
          </div>
          {/* js tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">javascript</h3>
              </div>
            </div>
          </div>
          {/* bootstrap tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/bootstrap.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">bootstrap</h3>
              </div>
            </div>
          </div>
          {/* tailwind tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/tailwind.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">tailwind</h3>
              </div>
            </div>
          </div>
          {/* scss tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/sass.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">scss</h3>
              </div>
            </div>
          </div>
          {/* react tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">react</h3>
              </div>
            </div>
          </div>
          {/* next tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/nextjs.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">next</h3>
              </div>
            </div>
          </div>
          {/* redux tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/Redux.jpg"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">redux</h3>
              </div>
            </div>
          </div>
          {/* node tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/node.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">npm</h3>
              </div>
            </div>
          </div>
          {/* ajax texh */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/ajax.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">ajax</h3>
              </div>
            </div>
          </div>
          {/* github tech */}
          <div className="shadow-xl rounded-xl p-6 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  items-center justify-center">
              <div className="m-auto">
                <Image
                  src="/../public/Assets/Skills/github.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
