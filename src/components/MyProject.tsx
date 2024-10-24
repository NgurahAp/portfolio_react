import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definisikan interface untuk project
interface Project {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  className: string;
}

export const MyProject = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "lxp",
      image: "/projects/lxpBW.jpg",
      title: "LXP Project",
      subtitle: "Learning Experience Platform",
      className: "absolute w-3/4 h-auto right-24 top-[30rem]",
    },
    {
      id: "bersih",
      image: "/projects/bersihBersamabw.jpg",
      title: "Bersih Bersama",
      subtitle: "Cleaning Service Platform",
      className: "absolute w-2/3 h-auto right-12 top-36",
    },
    {
      id: "resq",
      image: "/projects/resqguideBW.png",
      title: "ResQ Guide",
      subtitle: "Emergency Response Platform",
      className: "absolute h-80 w-auto left-0 top-64",
    },
  ];

  // Function untuk mendapatkan project yang dipilih
  const selectedProject = selectedId
    ? projects.find((p) => p.id === selectedId)
    : null;

  return (
    <section className="h-screen flex px-20">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-8xl font-bold">My Projects</h1>
        <div className="space-y-2 space-x-10 py-5">
          <span className="block w-36 h-[2px] bg-white"></span>
          <span className="block w-36 h-[2px] bg-white"></span>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute w-full">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`cursor-pointer ${project.className}`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
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
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain max-h-[80vh]"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
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
