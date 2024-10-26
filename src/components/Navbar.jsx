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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuContent = {
    HOME: (
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h2 className="text-8xl font-bold mb-6">Welcome</h2>
        <p className="text-2xl">Discover my portfolio</p>
      </div>
    ),
    ABOUT: (
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h2 className="text-8xl font-bold mb-6">About Me</h2>
        <p className="text-2xl">Learn more about my journey</p>
      </div>
    ),
    PROJECTS: (
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h2 className="text-8xl font-bold mb-6">My Work</h2>
        <p className="text-2xl">Explore my latest projects</p>
      </div>
    ),
    CONTACT: (
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h2 className="text-8xl font-bold mb-6">Get in Touch</h2>
        <p className="text-2xl">Lets work together</p>
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
                <div className="w-1/4">
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
                      onMouseEnter={() => setActiveMenu("ABOUT")}
                    >
                      <a href="#about" className="text-black text-5xl">
                        ABOUT
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
                  className={`w-3/4 h-full transition-colors duration-300 ${
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
