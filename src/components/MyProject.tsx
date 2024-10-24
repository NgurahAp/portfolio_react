import React from "react";

export const MyProject = () => {
  return (
    <section className="h-screen flex px-20">
      <div className="w-full flex flex-col justify-center ">
        <h1 className="text-8xl font-bold">My Projects</h1>
        <div className=" space-y-2 space-x-10 py-5">
          <span className="block w-36 h-[2px] bg-white"></span>
          <span className="block w-36 h-[2px] bg-white"></span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">My Project</div>
    </section>
  );
};
