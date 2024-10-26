import { FaLink } from "react-icons/fa";

export const Experience = () => {
  return (
    <section className="h-screen px-28 pt-36 flex">
      <div className="w-1/2 ">
        <h1
          className="text-3xl underline pb-14"
          style={{ fontFamily: "Playfair Display" }}
        >
          Education
        </h1>
        <div className="text-white space-y-1">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <h2 className="text-2xl font-semibold">
              Information System (Bachelor)
            </h2>
            <FaLink className="text-gray-400 text-2xl " />
          </div>
          <div className="flex space-x-2 text-lg text-gray-400 pl-7">
            <span>BSI University</span>
            <span>•</span>
            <span>GPA 3.89</span>
            <span>•</span>
            <span>2021/2024</span>
          </div>
        </div>
        <h1
          className="text-3xl underline pb-14 pt-20"
          style={{ fontFamily: "Playfair Display" }}
        >
          Sertificate
        </h1>
        <div className="space-y-7">
          <div className="text-white space-y-2">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Complete Mobile Engineer Career with Flutter
              </h2>
              <FaLink className="text-gray-400 text-2xl " />
            </div>
            <div className="flex space-x-2 text-lg text-gray-400 pl-7">
              <span>Alterra Academy</span>
              <span>•</span>
              <span>95/100</span>
            </div>
          </div>
          <div className="text-white space-y-2">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Certificate of Competence: Program Analyst
              </h2>
              <FaLink className="text-gray-400 text-2xl " />
            </div>
            <div className="flex space-x-2 text-lg text-gray-400 pl-7">
              <span>
                Indonesian Professional Certification Authority (BNSP)
              </span>
              <span>•</span>
              <span>2024 - 2027</span>
            </div>
          </div>
          <div className="text-white space-y-2">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Pemrograman Go-lang: Pemula sampai Mahir
              </h2>
              <FaLink className="text-gray-400 text-2xl " />
            </div>
            <div className="flex space-x-2 text-lg text-gray-400 pl-7">
              <span>Udemy - Programmer Zaman Now </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1
          className="text-3xl underline pb-14"
          style={{ fontFamily: "Playfair Display" }}
        >
          Experience
        </h1>
        <div className="flex items-start space-x-4 ">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-white rounded-full mt-1 "></div>
            <div className="w-0.5 h-64 bg-white "></div>
          </div>
          <div className=" px-4 rounded-md  w-full">
            <h3 className="text-xl font-semibold pb-4">Sept 2023 - Dec 2023</h3>
            <h4 className="text-2xl font-bold">PT Menara Indonesia</h4>
            <p className="mt-1 ">Frontend Web Developer | Intern</p>
            <p className="mt-5">
              Develop a Learning Management System (LMS), focusing on user
              management and learning modules. This experience enhanced my
              technical skills and highlighted the significance of digital
              education.
            </p>
            <div className=" mt-4">
              <h1 className="font-semibold">
                NextJS &nbsp; &nbsp;|&nbsp; &nbsp; TypeScript &nbsp;
                &nbsp;|&nbsp; &nbsp; Tailwind
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
