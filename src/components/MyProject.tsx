import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";

interface Project {
  id: string;
  image: string;
  focusImage: string;
  title: string;
  subtitle: string;
  className: string;
  direction: "left" | "right"; // Menambahkan property untuk arah animasi
}

export const MyProject = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  const projects: Project[] = [
    {
      id: "lxp",
      image: "/projects/lxpBW.jpg",
      focusImage: "/projects/lxp.jpg",
      title: "LXP M-Knows",
      subtitle: "Learning Management System.",
      className: "absolute w-4/6 h-auto right-28 top-[25rem]",
      direction: "right",
    },
    {
      id: "bersih",
      image: "/projects/bersihBersamabw.jpg",
      focusImage: "/projects/bersihBersama.jpg",
      title: "Bersih Bersama",
      subtitle: "Cleaning Service Platform",
      className: "absolute w-4/6 h-auto right-12 top-36",
      direction: "left",
    },
    {
      id: "resq",
      image: "/projects/resqguideBW.png",
      focusImage: "/projects/resqguide.png",
      title: "ResQ Guide",
      subtitle: "Emergency Response with AI Powered.",
      className: "absolute h-44 w-auto left-16 top-72",
      direction: "right",
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const selectedProject = selectedId
    ? projects.find((p) => p.id === selectedId)
    : null;

  // Variants untuk animasi scroll
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Menambahkan delay antar item
      },
    },
  };

  const itemVariants = {
    hidden: (direction: "left" | "right") => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <section ref={sectionRef} className="h-screen flex px-20 ">
      <div className="w-1/2 flex flex-col justify-center ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-bold"
        >
          My Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2 space-x-10 py-5"
        >
          <span className="block w-36 h-[2px] bg-white"></span>
          <span className="block w-36 h-[2px] bg-white"></span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg py-5"
        >
          Showcasing web and mobile apps focused on seamless user experiences.
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-[1px] rounded-md text-base w-32 border-[#dfdad5] font-semibold px-2 py-2"
          style={{ fontFamily: "Playfair Display" }}
        >
          MORE
        </motion.button>
      </div>
      <div className="w-1/2 relative">
        <motion.div
          className="absolute w-full"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`cursor-pointer ${project.className}`}
              custom={project.direction}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="relative rounded-lg max-w-[90vw] max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative">
                <motion.img
                  src={selectedProject.focusImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <motion.h2
                    className="text-4xl font-bold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.h5
                    className="text-2xl text-gray-300 mt-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.subtitle}
                  </motion.h5>
                </div>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
