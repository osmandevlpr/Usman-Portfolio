import React, { useEffect, useState, useRef } from "react";

const Number = () => {
  const [projects, setProjects] = useState("70");
  const [completed, setCompleted] = useState("50");
  const [experience, setExperience] = useState("1");
  const counterRef = useRef(null); // Reference to the counter section

  const startCounting = (setCount, targetCount, duration,plus) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < targetCount) {
        count += 1;
        setCount(count);
        if(count==plus){
                setCount(count+"+")
        }
      } else {
        clearInterval(interval);
      }
    }, duration);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting when the component is in view
            startCounting(setProjects, 60, 40,60);
            startCounting(setCompleted, 45, 59,45);
            startCounting(setExperience, 1, 900,1);
            observer.unobserve(entry.target); // Stop observing after counting starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (<>
    <div className="flex justify-center w-screen   text-white number bg-gradient-to-t to-[#0F0715] from-black">
      <div
        ref={counterRef} // Attach the ref to the counter container
        className="w-[90%]  flex justify-center md:gap-5 gap-3 items-center  mb-16 mt-17 md:mt-15 "
      >
        <div className="text-[#764CC4] rounded-lg w-[31%] md:w-[28%]  bg-white text-4xl flex flex-col justify-center items-center ">
          <div className=" w-[100%] h-14 md:h-24 mt-5 md:text-7xl text-5xl text-center font-extrabold ">
            {projects}
          </div>
          <div className="tracking-tight   w-[100%] h-[50%] text-center text-black md:font-extrabold font-bold text-[21px] md:text-4xl pb-2">
            Projects
          </div>
        </div>
        <div className="text-[#764CC4] rounded-lg w-[32%] md:w-[28%]  bg-white text-4xl flex flex-col justify-center items-center font-extrabold">
          <div className=" w-[100%] h-14 md:h-24 mt-5 md:text-7xl text-5xl text-center font-extrabold">
            {completed}
          </div>
          <div className="tracking-tight w-[100%] h-[50%] text-center text-black   md:font-extrabold font-bold text-[21px] md:text-4xl  pb-2">
            Completed
          </div>
        </div>
        <div className="text-[#764CC4] rounded-lg w-[32%] md:w-[28%]  bg-white text-4xl flex flex-col justify-center items-center font-extrabold">
          <div className=" w-[100%] h-14 md:h-24 mt-5 md:text-7xl text-5xl text-center font-extrabold">
            {experience}
          </div>
          <div className="tracking-tight w-[100%] h-[50%] text-center text-black md:font-extrabold font-bold text-[21px] md:text-4xl  pb-2">
            Experience
          </div>
        </div>
      </div>
    </div> 
     </>

  );
};

export default Number;