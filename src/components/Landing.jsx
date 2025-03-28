import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
// import About from '../pages/About';

const Landing = () => {
  const navigate = useNavigate();

  const reff = useRef();
  useEffect(() => {
    if ([].current) {
      reff.current.playbackRate = 0.2;
    }
  }, []);
  return (
    <>
      <div
        id="landing"
        className="overflow-hidden  sm:flex justify-between w-full max-h-full  sm:h-screen mt-20 bg-[#0F0715]   relative "
      >
        {/* <video
          className="bg-red-800 absolute hidden md:block w-[50vw] bottom-0 h-[100%] right-0 object-cover blur-[120px]"
          muted
          autoPlay
          loop
          ref={reff}
          src="/3130284-uhd_3840_2160_30fps.mp4"
        ></video> */}
        <div className="part1 relative  text-white flex flex-col mt-14 sm:mt-0  ml-5 sm:ml-10 justify-center ">
          <h1 className="text-4xl ">Hi, I'm Usman Asim</h1>
          <h2 className="mt-2 sm:mt-5 text-[32px] sm:text-5xl font-bold bg-gradient-to-r from-[#764CC4] to-[#f43c36] bg-clip-text text-transparent ">
            A Mern Stack
            <span className=" bg-gradient-to-r from-[#764CC4] to-white bg-clip-text text-transparent">
              {" "}
              Developer &
            </span>{" "}
          </h2>
          <h3 className="lg:text-[75px] md:text-[65px] sm:text-[55px] text-[40px] text-[#764CC4] font-bold">
            Web designer
          </h3>
          <h1 className=" hidden sm:block w-[60%] sm:w-[90%] tracking-wide text-[21px] mt-14 font-light text-gray-200">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </h1>
          <div className=" hidden sm:flex gap-5 text-[#7E4BE7] mt-5">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/chaudhary-usman-asim-949264300/"}
          >
            <h1 className="border w-9 h-9 transition-all duration-600  border-[#7E4BE7] rounded-full flex items-center justify-center hover:bg-[#7E4BE7] hover:text-white">
              <i class="ri-linkedin-fill"></i>
            </h1></Link>
            <Link target="_blank" to={"https://github.com/osmandevlpr"}>
            <h1 className="border w-9 h-9 border-[#7E4BE7] transition-all duration-600  rounded-full flex items-center justify-center hover:bg-[#7E4BE7] hover:text-white">
              <i class="ri-github-fill"></i>
            </h1></Link>
            <Link target="_blank" to={"https://github.com/osmandevlpr"}>
            <h1 className="border w-9 h-9 border-[#7E4BE7] transition-all duration-600  rounded-full flex items-center justify-center hover:bg-[#7E4BE7] hover:text-white">
              <i class="ri-instagram-fill"></i>
            </h1></Link>
          </div>
        </div>

        <div
          oncl
          className="w-[60vw] md:flex hidden relative items-center   justify-center"
        >
          <img
            className=" w-[350px] h-[390px]  bg-black rotate-5 hover:rotate-0 transition-all  rounded-4xl border-[#3D256E] border-2"
            src="/usmanbgremove.png"
          />
        </div>
        <div
          oncl
          className="w-[100vw]  sm:hidden  flex  items-center  justify-center "
        >
          <img
            className=" w-[350px] h-[390px] mt-4 bg-black  rotate-5 hover:rotate-0 transition-all  rounded-4xl border-[#3D256E] border-2"
            src="/usmanbgremove.png"
          />
        </div>
        <h1 className=" px-5 sm:hidden w-[100%] sm:w-[90%] tracking text-[21px] mt-14 font-light text-gray-200">
          I break down complex user experinece problems to create integritiy
          focussed solutions that connect billions of people
        </h1>
        <div className=" mb-8 px-5 sm:hidden flex gap-5 text-[#7E4BE7] mt-2">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/chaudhary-usman-asim-949264300/"}
          >
            {" "}
            <h1 className=" hover:bg-[#7E4BE7] hover:text-white border w-9 h-9 border-[#7E4BE7] rounded-full flex items-center justify-center">
              <i class="ri-linkedin-fill"></i>
            </h1>
          </Link>
          <Link target="_blank" to={"https://github.com/osmandevlpr"}>
            <h1 className=" hover:bg-[#7E4BE7] hover:text-white border w-9 h-9 border-[#7E4BE7] rounded-full flex items-center justify-center">
              <i class="ri-github-fill"></i>
            </h1>
          </Link>
          <Link target="_blank" to={"https://wa.me/923197135894"}>
            <h1 className="hover:bg-[#7E4BE7] hover:text-white border w-9 h-9 border-[#7E4BE7] rounded-full flex items-center justify-center">
              <i class="ri-instagram-fill"></i>
            </h1>
          </Link>
        </div>
        <Link target="_blank" to={"https://wa.me/923197135894"}>
          <img
            className="whatsapp w-[59px] h-[59px] z-50 fixed bottom-6 right-6 "
            src="whatsapp logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center justify-center  ">
        <p className="w-[90%] h-[1px] bg-[#7E4BE7] text-center   " />
      </div>
    </>
  );
};

export default Landing;
