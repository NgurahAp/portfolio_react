import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "flowbite/dist/flowbite.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="w-full h-screen flex items-center justify-center pl-8">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 opacity-90">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <h1 className="text-2xl font-semibold">_ngrhap</h1>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-purple-800 bg-white border border-purple-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-3 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/12A0KipgS5i5ybIM2orfLT8I5M-r2uvkq/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </button>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/1500/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold space-y-2 md:space-y-0 md:space-x-8 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#service"
                    className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#skill"
                    className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Skill
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="w-full flex flex-col items-start space-y-4 pl-11 pr-8">
          <div data-aos="fade-up">
            <h1
              className="text-8xl font-bold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              👋 Hi there,
            </h1>
            <h1
              className="text-8xl font-bold pb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Im Ngurah <span className="text-purple-800">Arya</span>
            </h1>
            <p className="text-xl text-gray-600 text-justify">
              A System Information student at Universitas BSI with a strong
              interest in mobile and web application development. I have gained
              valuable experience and received positive feedback in mobile app
              development, and I am also keen to expand my skills in fullstack
              development.
            </p>
          </div>
          <div className="flex space-x-6 pt-5" data-aos="fade-up">
            <a
              href="https://www.linkedin.com/in/ngurah-arya-pratama-4314811b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-4xl"></i>
            </a>
            <a
              href="https://github.com/NgurahAp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-4xl"></i>
            </a>
            <a
              href="https://web.facebook.com/ngurah.pratama.37/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook text-4xl"></i>
            </a>
            <a
              href="https://www.instagram.com/_ngrhap/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-4xl"></i>
            </a>
          </div>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center text-center"
          data-aos="fade-up"
        >
          <img
            src="src/assets/test2.png"
            alt="Profile Image"
            className="w-1/2"
          />
        </div>
      </header>
      {/* Service */}
      <section className="h-[70vh] pt-24" id="service">
        <div className="pl-[4%]" data-aos="fade-up">
          <h2 className="text-xl pb-2 text-gray-500 pl-2">S E R V I C E S</h2>
          <h3
            className="text-5xl font-bold text-purple-800"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Focused on
          </h3>
          <div className="relative mt-5">
            <div className="absolute inset-x-0 bottom-0 bg-gray-600 h-1 w-72"></div>
          </div>
        </div>

        <div className="flex justify-center pt-20">
          {/* Mobile Dev */}
          <div
            data-aos="fade-right"
            className="max-w-md p-6 bg-white border-2 border-purple-800 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mr-12"
          >
            <img
              src="src/assets/mobile.png"
              className="h-12"
              alt="Mobile Development Icon"
            />
            <h4 className="mb-2 pt-5 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Mobile Dev
            </h4>
            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
              Design and build engaging mobile applications, focusing on
              seamless integration with backend systems and third-party
              services.
            </p>
          </div>
          {/* FrontEnd Dev */}
          <div
            data-aos="fade-down"
            className="max-w-md p-6 bg-white border-2 border-purple-800 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 mr-12"
          >
            <img
              src="src/assets/coding.png"
              className="h-12"
              alt="Frontend Development Icon"
            />
            <h4 className="mb-2 pt-5 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Frontend
            </h4>
            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
              Design and implement engaging user interfaces. Leverage expertise
              in HTML, CSS, JavaScript, and modern frameworks.
            </p>
          </div>
          {/* Backend Dev */}
          <div
            data-aos="fade-left"
            className="max-w-md p-6 bg-white border-2 border-purple-800 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src="src/assets/backend-coding.png"
              className="h-12"
              alt="Backend Development Icon"
            />
            <h4 className="mb-2 pt-5 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Backend
            </h4>
            <p className="mb-3 font-normal text-xl text-gray-500 dark:text-gray-400">
              Develop and maintain server-side logic and databases, ensuring
              robust and scalable application performance.
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="pt-24 pb-20 h-screen" id="project">
        <div className="container mx-auto px-8">
          <div data-aos="fade-up">
            <h2 className="text-xl pb-2 text-gray-500 pl-2">
              P O R T F O L I O S
            </h2>
            <h3 className="text-5xl pb-2 font-bold text-purple-800 font-plus-jakarta">
              My Latest Works
            </h3>
            <div className="relative mt-3">
              <div className="w-1/4 absolute inset-x-0 bottom-0 bg-gray-600 h-1"></div>
            </div>
          </div>
          <div className="relative w-full  mx-auto pt-16" data-aos="fade-up">
            {/* Carousel Wrapper */}
            <div
              id="indicators-carousel"
              className="relative border border-gray-300 w-full h-96 z-10" // H-96 untuk menambahkan tinggi carousel
              data-carousel="static"
            >
              <div className="relative h-[32rem] overflow-hidden rounded-lg items-center">
                {/* ResQGuide */}
                <div
                  className="hidden duration-700 ease-in-out flex"
                  data-carousel-item="active"
                >
                  <div className="flex-[3_3_0%] overflow-hidden">
                    <img
                      src="src/assets/resqguide.png"
                      alt="ResQGuide"
                      className="block w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-[1_1_0%] p-6 bg-white flex flex-col">
                    <h3 className="text-5xl pt-8 font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                      ResQGuide
                    </h3>
                    <p className="text-xl mb-3">
                      My first Flutter app available on Play Store. The app
                      provides first aid guidance with the assistance of
                      artificial intelligence. I utilized OpenAI's AI technology
                      to search for guidance that isn't available within the
                      app.
                    </p>
                    <div className="flex">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.ngurahpratama.resqguide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        <img
                          src="src/assets/gstore.png"
                          alt="Google Store Icon"
                          className="w-5 h-5 mr-2"
                        />
                        Google Store
                      </a>
                      <a
                        href="https://github.com/NgurahAp/ResQGuide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        <img
                          src="src/assets/code.png"
                          alt="Source Code Icon"
                          className="w-5 h-5 mr-2"
                        />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* BersihBersama */}
                <div
                  className="hidden duration-700 ease-in-out flex"
                  data-carousel-item
                >
                  <div className="flex-[3_3_0%] overflow-hidden">
                    <img
                      src="src/assets/bersihbersama.jpg"
                      alt="BersihBersama"
                      className="block w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-[1_1_0%] p-6 bg-white flex flex-col">
                    <h3 className="text-5xl pt-8 font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                      BersihBersama
                    </h3>
                    <p className="text-xl mb-3">
                      Developed a website using Laravel 11 that allows users to
                      report locations of rivers or areas filled with trash.
                      These reports are then processed by the admin team to
                      become cleanup events, which can be joined by other users
                      who have signed up.
                    </p>
                    <div className="flex">
                      <a
                        href="https://github.com/NgurahAp/BersihBersama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        <img
                          src="src/assets/code.png"
                          alt="Source Code Icon"
                          className="w-5 h-5 mr-2"
                        />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* Gov-Complaint */}
                <div
                  className="hidden duration-700 ease-in-out flex"
                  data-carousel-item
                >
                  <div className="flex-[3_3_0%] overflow-hidden">
                    <img
                      src="src\assets\gov-complant.png"
                      alt="Gov-Complaint"
                      className="block w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-[1_1_0%] p-6 bg-white flex flex-col">
                    <h3 className="text-5xl pt-8 font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                      Gov-Complaint
                    </h3>
                    <p className="text-xl mb-3">
                      Gov-Complaint is my capstone project at Alterra, designed
                      as a complaint management platform for the city of Batam.
                      The application features include city news, complaint
                      forms, complaint status, responses, complaint history,
                      categories, notifications, and live chat with Customer
                      Service.
                    </p>
                    <div className="flex">
                      <a
                        href="https://github.com/Capstone-Tim-15/e-complaint-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        <img
                          src="src/assets/code.png"
                          alt="Source Code Icon"
                          className="w-5 h-5 mr-2"
                        />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-gray-300"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-gray-300"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-gray-300"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
              {/* Slider Controls */}
              <button
                type="button"
                className="absolute top-[50%] -translate-y-[50%] left-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
                  <svg
                    className="w-4 h-4 text-purple-800 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1L1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-[50%] -translate-y-[50%] right-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
                  <svg
                    className="w-4 h-4 text-purple-800 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 9l4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
