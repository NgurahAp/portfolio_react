import React from "react";

export const MyProject = () => {
  return (
    <section className="h-screen flex px-20">
      <div className="w-1/2 flex flex-col justify-center ">
        <h1 className="text-8xl font-bold">My Projects</h1>
        <div className=" space-y-2 space-x-10 py-5">
          <span className="block w-36 h-[2px] bg-white"></span>
          <span className="block w-36 h-[2px] bg-white"></span>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute w-full">
          <img
            src="/projects/lxpBW.jpg"
            alt="Bersih Bersama"
            className="absolute w-3/4 h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 right-24 top-[30rem]"
          />
          <img
            src="/projects/bersihBersamabw.jpg"
            alt="LXP"
            className="absolute w-2/3 h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 right-12 top-36"
          />

          <img
            src="/projects/resqguideBW.png"
            alt="ResQ Guide"
            className="absolute  h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 left-0 top-64"
          />
        </div>
      </div>
    </section>
  );
};
