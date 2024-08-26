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
          <img src="src/assets/test2.png" alt="Profile Image" className="w-1/2" />
        </div>
      </header>
    </>
  );
}
