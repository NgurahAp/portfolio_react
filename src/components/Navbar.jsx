import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import { MyProject } from "./MyProject";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
        delay: 0.1, // Menambahkan delay 0.2 detik
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Menurunkan delay antar huruf
        delayChildren: 0.1, // Delay setelah animasi garis
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 9, // Menurunkan damping untuk mempercepat animasi
        stiffness: 300, // Menambahkan stiffness untuk mempercepat respons
      },
    },
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

              <ul className="flex flex-col space-y-8 text-xl">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="#home" className="text-black text-5xl">
                    HOME
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="#about" className="text-black text-5xl">
                    ABOUT
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="#projects" className="text-black text-5xl">
                    PROJECTS
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a href="#contact" className="text-black text-5xl">
                    CONTACT
                  </a>
                </motion.li>
              </ul>

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
      <MyProject />
      <section className="h-screen px-28 pt-36 flex">
        <div className="w-1/2 ">
          <h1
            className="text-3xl underline"
            style={{ fontFamily: "Playfair Display" }}
          >
            Education
          </h1>
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
              <h3 className="text-xl font-semibold pb-4">
                Sept 2023 - Dec 2023
              </h3>
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
    </>
  );
};
