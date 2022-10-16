import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen flex items-center  p-2 py-16">
      <div className="max-w-[1240px] md:grid grid-cols-3 gap-8 m-auto p-2">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#5651e5] uppercase">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// i'm not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            amet odio deleniti maiores! Alias ipsam esse nobis nesciunt at ipsum
            temporibus sapiente quam reiciendis officiis dolore, blanditiis
            omnis totam consectetur a placeat deleniti rerum recusandae fugit
            eligendi voluptatum, perspiciatis laudantium.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta iure
            atque est doloribus nobis ducimus odio expedita, sapiente animi,
            totam harum, debitis hic ipsa dolor temporibus voluptatum amet
            eveniet! Quos expedita accusamus, laborum sunt veritatis asperiores
            non illum aliquam cumque.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">checkout my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto flex items-center justify-center p-4 hover:scale-105 shadow-xl shadow-gray-400 m-auto ease-in duration-300 rounded-xl">
          <Image
            src="/../public/Assets/about.jpg"
            alt="/"
            width={400}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
