export const Skills = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-20 text-[#dfdad5] py-28">
      <div className="w-full items-center justify-center">
        <h1 className="text-center text-4xl font-semibold">
          Core Competencies
        </h1>
        <h2 className="text-center text-lg pt-3">
          Delving into the abilities I harness to create effective solutions.
        </h2>
        <div className="flex gap-10 pt-16 justify-center">
          <div className=" flex flex-col items-center justify-center">
            <img src="/expertise/mobile.png" className="h-16 w-auto" alt="" />
            <h1 className="text-center pt-2 text-lg">Mobile Development</h1>
          </div>
          <div className=" flex flex-col items-center">
            <img src="/expertise/api.png" className="h-16 w-auto" alt="" />
            <h1 className="text-center pt-2 text-lg">REST API</h1>
          </div>
          <div className=" flex flex-col items-center">
            <img src="/expertise/web.png" className="h-16 w-auto" alt="" />
            <h1 className="text-center pt-2 text-lg">Web Development</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
