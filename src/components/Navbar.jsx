import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import {
  menuVariants,
  letterVariants,
  lineVariants,
  nameVariants,
} from "./navbarVariants";
import Marquee from "react-fast-marquee";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaLink } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const contacts = [
    {
      icon: <CiMail className="text-5xl mr-5" />,
      text: "ngurahpratama2002@gmail.com",
    },
    {
      icon: <FaLinkedinIn className="text-5xl mr-5" />,
      text: "Ngurah Arya Pratama",
    },
    {
      icon: <FaGithub className="text-5xl mr-5" />,
      text: "NgurahAp",
    },
  ];

  const menuContent = {
    HOME: (
      <div className="flex flex-col justify-center  px-10 h-full text-white">
        <h2
          className="text-5xl font-semibold underline"
          style={{ fontFamily: "Playfair Display" }}
        >
          Introduction.
        </h2>
        <h1 className="text-8xl font-semibold pt-10">Ngurah Arya Pratama</h1>
        <h2 className="text-2xl pt-4">
          - Fullstack Developer | Mobile Developer -
        </h2>
      </div>
    ),
    EXPERTISE: (
      <div className="flex flex-col  justify-center items-center h-full text-white">
        <Marquee direction="right" className="overflow-y-hidden" speed={40}>
          <h1 className="text-7xl font-semibold  pt-10">
            COMPETENCIES | &nbsp;
          </h1>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
        </Marquee>
        <Marquee direction="right" className="overflow-y-hidden" speed={60}>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
        </Marquee>
        <Marquee direction="right" className="overflow-y-hidden" speed={80}>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
          <h1 className="text-7xl font-semibold pt-10">
            COMPETENCIES | &nbsp;
          </h1>
        </Marquee>
      </div>
    ),
    PROJECTS: (
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h2 className="text-8xl font-bold mb-6">My Projects</h2>
        <p className="text-2xl">
          Showcasing web and mobile apps focused on seamless user experiences.
        </p>
      </div>
    ),
    CONTACT: (
      <div className="flex flex-col justify-center pl-20  h-full text-white">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center group cursor-pointer py-5">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
              >
                {contact.icon}
              </motion.div>
              <h1 className="text-xl">{contact.text}</h1>
              <motion.div
                className="ml-5"
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  },
                }}
              >
                <FaLink className="text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-10 py-6 bg-transparent z-50">
        {/* Left side - logo */}
        <div
          className="text-2xl font-semibold text-[#5f8789]"
          style={{ fontFamily: "Playfair Display" }}
        >
          _ngrhap
        </div>
        {/* Right side - hamburger menu */}
        <div className="">
          <button className="text-[#f1f1f1]" onClick={toggleMenu}>
            <img src="/hamburger.svg" alt="" className="w-14" />
          </button>
        </div>

        {/* Animated dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-[#f1f1f1] p-14 flex flex-col justify-between"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-10 text-black"
              >
                <X size={32} />
              </button>

              <div className="flex pt-5 h-full">
                <div className="w-1/4 ">
                  <ul
                    className="flex flex-col space-y-8 text-xl"
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      onMouseEnter={() => setActiveMenu("HOME")}
                    >
                      <a href="#home" className="text-black text-5xl">
                        HOME
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      onMouseEnter={() => setActiveMenu("EXPERTISE")}
                    >
                      <a href="#about" className="text-black text-5xl">
                        EXPERTISE
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onMouseEnter={() => setActiveMenu("PROJECTS")}
                    >
                      <a href="#projects" className="text-black text-5xl">
                        PROJECTS
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      onMouseEnter={() => setActiveMenu("CONTACT")}
                    >
                      <a href="#contact" className="text-black text-5xl">
                        CONTACT
                      </a>
                    </motion.li>
                  </ul>
                </div>
                <motion.div
                  className={`w-3/4 h-full transition-colors duration-300 rounded-xl ${
                    activeMenu ? "bg-[#1a1a1a]" : "bg-transparent"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {activeMenu && (
                      <motion.div
                        key={activeMenu}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        {menuContent[activeMenu]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* HOVER ACTIVE */}
              <div>
                <motion.hr
                  className="w-full border-t-4 border-black my-4"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.h1
                  className="text-black text-5xl font-semibold"
                  style={{ fontFamily: "Playfair Display" }}
                  variants={nameVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {"Ngurah Arya Pratama".split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <Introduction isOpen={isOpen} />
      <Skills isOpen={isOpen} />
    </>
  );
};
