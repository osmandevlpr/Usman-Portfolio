import React from "react";

const Services = () => {
  return (
    <div className="text-white md:p-0 p-5   mt-20 ">
      <div className="flex flex-col justify-center items-center ">
      <h1 className="md:text-5xl text-[35px] font-extrabold bg-gradient-to-r from-[#764CC4] to-white bg-clip-text text-transparent mt-2 md:mt-5">
      MY Qulality Services</h1>
      <p className="md:w-[55%] w-[87%] text-center mt-4 font-thin">
        I transform your ideas into unique web and mobile projects that not only
        inspire you but also captivate your customers.
      </p>
      </div>
      <div className="services w-full  md:bg-transparent flex flex-col  justify-center items-center mt-2 md:mt-10 ">
        <div className=" border-b border-[#764CC4] w-[100%] md:w-[90%]   p-6 flex  md:flex-row flex-col items-center gap-3 md:gap-13 lg:gap-16 hover:bg-[#764CC4] transition-all duration-1000 hover:text-white">
          <h1 className="md:w-[50%] w-[100%] ms:text-[30px] text-[21px] font-extrabold uppercase whitespace-nowrap tracking-tight"><span className="mr-3 text-[27px] text-[#764CC4]">01</span>   Mern Stack Development</h1>
          <p className="text-justify  text-[#DDDDDD] w-[100%] md:w-[50%]">
            I craft bespoke web & mobile solutions that provide robust
            performance and aesthetically pleasing designs, tailored to meet the
            specific needs of your business and enhance user engagement.
          </p>
        </div>
        <div className="hover:bg-[#764CC4] transition-all duration-1000 hover:text-white border-b border-[#764CC4] w-[100%] md:w-[90%]   p-6 flex  md:flex-row flex-col items-center gap-3 md:gap-13 lg:gap-16">
          <h1 className="md:w-[50%] w-[100%] ms:text-[30px] text-[21px] font-extrabold uppercase whitespace-nowrap tracking-tight"><span className="mr-3 text-[27px] text-[#764CC4]">02</span>    Frontened Development</h1>
          <p className="text-justify  text-[#DDDDDD] w-[100%] md:w-[50%]">
          I specialize in Frontend Development, transforming intricate user
            interaction designs into robust, scalable solutions that enhance
            user engagement across the globe.
          </p>
        </div>
        <div className="hover:bg-[#764CC4] transition-all duration-1000 hover:text-white border-b border-[#764CC4] w-[100%] md:w-[90%]   p-6 flex  md:flex-row flex-col items-center gap-3 md:gap-13 lg:gap-16">
          <h1 className="md:w-[50%] w-[100%] ms:text-[30px] text-[21px] font-extrabold uppercase whitespace-nowrap tracking-tight"><span className="mr-3 text-[27px] text-[#764CC4]">03</span>    Backened Development</h1>
          <p className="text-justify  text-[#DDDDDD] w-[100%] md:w-[50%]">
          I offer Backend Development services, focusing on creating scalable
            and secure server-side solutions. My approach ensures high
            performance and reliability, empowering your applications to handle
            complex operations and large volumes of data efficiently.
          </p>
        </div>
        <div className=" hover:bg-[#764CC4] transition-all duration-1000 hover:text-white mb-14 border-b border-[#764CC4] w-[100%] md:w-[90%]   p-6 flex  md:flex-row flex-col items-center gap-3 md:gap-13 lg:gap-16">
          <h1 className="md:w-[50%] w-[100%] ms:text-[30px] text-[21px] font-extrabold uppercase whitespace-nowrap tracking-tight"><span className="mr-3 text-[27px] text-[#764CC4]">04</span>    Responsive Web Designing</h1>
          <p className="text-justify  text-[#DDDDDD] w-[100%] md:w-[50%]">
          I offer professional web designing services that create visually
            stunning, user-friendly, and responsive websites. Let us elevate
            your brand with innovative designs tailored to engage your audience
            on any device.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Services;
