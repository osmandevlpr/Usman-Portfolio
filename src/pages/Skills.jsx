import React from "react";
// import react from "./asset"
const Skills = () => {
  return (
    <div className="text-white bg-gradient-to-t to-[#140C1C] from-[#0F0715] ">
      <div className="flex flex-col justify-center items-center  ">
        <hr className="w-[95%] mt-10 mb-20 border-[#764CC4]" />
        <h1 className="text-5xl font-extrabold mt- text-transparent bg-clip-text bg-gradient-to-l to-[#764CC4] from-white">
          My Skills
        </h1>
        <p className="md:w-[45%] w-[80%] mt-4 font-thin text-center">
          Explore my diverse set of skills that empower innovative solutions and
          drive technological advancement.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className=" mb-20 mt-14 grid lg:grid-cols-5 md:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-10">
          <div className="gap-3  flex flex-col items-center justify-center">
            <div className="skill rounded-3xl w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="jslogo.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">89%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Javascript</h1>
          </div>

          <div className="gap-3  flex flex-col items-center justify-center">
            <div className=" skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="tailwind.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">88%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Tailwind css</h1>
          </div>
          <div className="gap-3  flex flex-col items-center justify-center">
            <div className=" skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="react.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">86%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">React js</h1>
          </div>

          <div className="gap-3  flex flex-col items-center justify-center">
            <div className="skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="expres.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">79%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Express js</h1>
          </div>

          <div className="gap-3  flex flex-col items-center justify-center">
            <div className=" skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="nodelogo.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">85%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Node js</h1>
          </div>
          <div className="gap-3  flex flex-col items-center justify-center">
            <div className=" skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="nextlogo.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">58%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Next js</h1>
          </div>
          <div className="gap-3  flex flex-col items-center justify-center">
            <div className="skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="mongodblogo.svg" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">78%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Mongo db</h1>
          </div>

          <div className="gap-3  flex flex-col items-center justify-center">
            <div className="skill rounded-3xl w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="gsap.png" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">93%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Gsap</h1>
          </div>
          <div className="gap-3  flex flex-col items-center justify-center">
            <div className="skill rounded-3xl w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="shadui.png" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">97%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Shadcn ui</h1>
          </div>
          <div className="gap-3  flex flex-col items-center justify-center">
            <div className=" skill rounded-3xl  w-40 h-40 gap-5 flex flex-col items-center justify-center">
              <img className="w-20 h-20" src="bootstrap.png" alt="" />
              <h2 className="text-xl font-bold text-[#747779]">89%</h2>
            </div>
            <h1 className="text-[#8750E9] text-xl ">Bootstrap ui</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
