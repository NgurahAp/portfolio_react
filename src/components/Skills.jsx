import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { MyProject } from "./MyProject";
import { Experience } from "./Experience";
import ContactUs from "./ContactUs";

export const Skills = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillVariants = {
    hidden: { y: 0 },
    animate: {
      y: isOpen ? 100 : 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, delay: 0.5 },
    },
  };

  // Variants for framework and tools
  const frameworkVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, delay: 0.5 },
    },
  };

  const toolsVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, delay: 1 },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="h-screen flex flex-col justify-center px-20 text-[#dfdad5] py-28"
        variants={skillVariants}
        initial="hidden"
        animate={isOpen ? "animate" : "hidden"} // tambahkan ini
      >
        <div className="w-full items-center justify-center">
          <motion.h1
            className="text-center text-3xl font-semibold"
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Core Competencies
          </motion.h1>
          <motion.h2
            className="text-center text-base pt-2"
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Delving into the abilities I harness to create effective solutions.
          </motion.h2>

          <motion.div
            className="flex gap-24 pt-12 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {[
              {
                icon: "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z",
                title: "Mobile Development",
              },
              {
                icon: "m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
                title: "REST API",
              },
              {
                icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
                title: "Web Development",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                variants={itemVariants}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={skill.icon}
                  />
                </svg>
                <h1 className="text-center text-sm pt-2 ">{skill.title}</h1>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex pt-32 gap-x-10">
            <motion.div
              className="w-1/2 flex flex-col items-center"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <h1 className="tracking-[0.2em] font-medium pb-7 text-lg">
                L A N G U A G E &nbsp;&nbsp;&amp;&nbsp;&nbsp; F R A M E W O R K
              </h1>
              <motion.p
                className="text-center text-sm"
                variants={frameworkVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
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
                <span className="">Firebase</span>{" "}
                <span className="mx-2">|</span>
                <span className="">PHP</span> <span className="mx-2">|</span>
                <span className="font-bold">Laravel</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">CodeIgniter</span>{" "}
                <span className="mx-2">|</span>
                <span className="">Python</span>
              </motion.p>
            </motion.div>
            <motion.div
              className="w-1/2 flex flex-col items-center"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <h1 className="tracking-[0.2em] font-medium pb-7 text-lg">
                T O O L S &nbsp;&nbsp;&amp;&nbsp;&nbsp; T E C H N O L O G Y
              </h1>
              <motion.p
                className="text-center text-sm"
                variants={toolsVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <span className="font-bold">Git</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">Figma</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">Postman</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">Android Studio</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">Visual Studio Code</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">Xcode</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">Sublime Text</span>{" "}
                <span className="mx-2">|</span>
                <span className="font-bold">MongoDB</span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <MyProject />
      <Experience />
      <ContactUs />
    </>
  );
};

Skills.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
