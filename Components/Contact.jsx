import React from "react";
import Image from "next/image";
import ContactImg from "../public/Assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] px-2 py-16 w-full mx-auto">
        <p className="text-[#5651e5] text-xl tracking-widest uppercase">
          Contact
        </p>
        <h2 className="capitalize py-4">get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl shadow-xl shadow-gray-400 p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={ContactImg}
                  alt="/"
                  className="rounded-xl shadow-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Ahmed Adel</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  im available for freelance or full time positions. contact me
                  and lets talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">connect with me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* RIGHT */}
          <div className="col-span-3 w-full h-auto lg:p-4 shadow-xl rounded-xl shadow-gray-400">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase py-2 text-sm">Name</label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 p-3 flex rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase py-2 text-sm">Number</label>
                    <input
                      type="number"
                      className="border-2 border-gray-300 p-3 flex rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase py-2 text-sm">Email</label>
                  <input
                    type="email"
                    className="border-2 border-gray-300 p-3 flex rounded-lg"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase py-2 text-sm">Subject</label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-3 flex rounded-lg"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase py-2 text-sm">message</label>
                  <textarea
                    type="number"
                    className="border-2 border-gray-300 p-3 flex rounded-lg"
                    rows={10}
                  />
                </div>
                <button className="w-full text-gray-100 mt-4 p-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-6 hover:scale-105 ease-in duration-300 text-[#5651e5]">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
