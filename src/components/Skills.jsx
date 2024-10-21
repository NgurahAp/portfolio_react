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
        <div className="flex gap-24 pt-16 justify-center">
          <div className=" flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <h1 className="text-center pt-2 text-lg">Mobile Development</h1>
          </div>
          <div className=" flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>

            <h1 className="text-center pt-2 text-lg">REST API</h1>
          </div>
          <div className=" flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <h1 className="text-center pt-2 text-lg">Web Development</h1>
          </div>
        </div>
        <div className="flex pt-20 gap-x-6">
          <div className="w-1/2 flex flex-col  items-center">
            <h1 className="tracking-[0.2em] font-medium pb-7 text-2xl">
              L A N G U A G E &nbsp;&nbsp;&amp;&nbsp;&nbsp; F R A M E W O R K
            </h1>
            <p className="text-center text-lg">
              <span className="font-bold">HTML</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">CSS</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Javascript</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Typescript</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">React</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">NextJS</span>{" "}
              <span className="mx-2">|</span>
              <span className="">TailwindCSS</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Bootstrap</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">Flutter</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Dart</span> <span className="mx-2">|</span>
              <span className="">MySQL</span> <span className="mx-2">|</span>
              <span className="">Firebase</span> <span className="mx-2">|</span>
              <span className="">PHP</span> <span className="mx-2">|</span>
              <span className="font-bold">Laravel</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">CodeIgniter</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Python</span>
            </p>
          </div>
          <div className="w-1/2 flex flex-col  items-center">
            <h1 className="tracking-[0.2em] font-medium pb-7 text-2xl">
              T O O L S
            </h1>
            <p className="text-center text-lg">
              <span className="font-bold">Visual Studio Code</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">Android Simulator</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Rapid Miner Studio</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">Git</span>{" "}
              <span className="mx-2">|</span>
              <span className="font-bold">Github</span>{" "}
              <span className="mx-2">|</span>
              <span className="">Figma</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
