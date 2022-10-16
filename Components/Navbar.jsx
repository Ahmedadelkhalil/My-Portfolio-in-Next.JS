import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setSahdow] = useState(false);
  const [navbg, setNavbg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/dashboard" ||
      router.asPath === "/elrehabInc" ||
      router.asPath === "/foodorderingApp" ||
      router.asPath === "/space"
    ) {
      setNavbg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavbg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 90) {
        setSahdow(true);
      } else {
        setSahdow(false);
      }
    };
    window.addEventListener("scroll", handleshadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: navbg }}
      className={
        shadow
          ? "fixed shadow-xl w-full h-20 z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex items-center justify-between px-2 2xl:px-16 w-full h-full">
        <div className="ml-2 flex justify-center items-center">
          <Link href="/">
            <Image
              src="/../public/Assets/navLogo.png"
              alt="/"
              width={125}
              height={50}
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex" style={{ color: linkColor }}>
            <Link href="/#home">
              <li className="uppercase ml-10 hover:border-b text-sm border-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="uppercase ml-10 hover:border-b text-sm border-[#5651e5]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="uppercase ml-10 hover:border-b text-sm border-[#5651e5]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="uppercase ml-10 hover:border-b text-sm border-[#5651e5]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="uppercase ml-10 mr-5 hover:border-b text-sm border-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden mr-2" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 bg-black/70 w-full h-screen" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[75%] md:w-[45%] sm:w-[45%] h-screen p-10 ease-in duration-500 bg-[#ecf0f3]"
              : "fixed top-0 left-[-200%]  p-10 ease-in duration-500 bg-[#ecf0f3]"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link href="/">
                <Image
                  src="/../public/Assets/navLogo.png"
                  alt="/"
                  width={87}
                  height={35}
                />
              </Link>
              <div
                className="rounded-full cursor-pointer shadow-lg shadow-gray-400 p-3"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm" onClick={() => setNav(false)}>
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105">
                  <BsFillPersonLinesFill />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
