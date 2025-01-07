import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLink } from "react-icons/fa";

export const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "16rem",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="min-h-screen px-28 pt-36 flex">
      <motion.div
        className="w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl underline pb-10"
          style={{ fontFamily: "Playfair Display" }}
        >
          Education
        </motion.h1>
        <motion.div variants={itemVariants} className="text-white space-y-1">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <h2 className="text-lg font-semibold">
              Information System (Bachelor)
            </h2>
            <FaLink className="text-gray-400 text-lg" />
          </div>
          <div className="flex space-x-2 text-sm text-gray-400 pl-7">
            <span>BSI University</span>
            <span>•</span>
            <span>GPA 3.89</span>
            <span>•</span>
            <span>2021/2024</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-2xl underline pb-10 pt-20"
          style={{ fontFamily: "Playfair Display" }}
        >
          Certificate
        </motion.h1>
        <motion.div variants={containerVariants} className="space-y-7">
          {[
            {
              title: "Complete Mobile Engineer Career with Flutter",
              org: "Alterra Academy",
              score: "95/100",
            },
            {
              title: "Certificate of Competence: Program Analyst",
              org: "Indonesian Professional Certification Authority (BNSP)",
              date: "2024 - 2027",
            },
            {
              title: "Pemrograman Go-lang: Pemula sampai Mahir",
              org: "Udemy - Programmer Zaman Now",
            },
          ].map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-white space-y-2"
            >
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <h2 className="text-lg font-semibold">{cert.title}</h2>
                <FaLink className="text-gray-400 text-lg" />
              </div>
              <div className="flex space-x-2 text-sm text-gray-400 pl-7">
                <span>{cert.org}</span>
                {cert.score && (
                  <>
                    <span>•</span>
                    <span>{cert.score}</span>
                  </>
                )}
                {cert.date && (
                  <>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl underline pb-14"
          style={{ fontFamily: "Playfair Display" }}
        >
          Experience
        </motion.h1>
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <motion.div
              variants={itemVariants}
              className="w-4 h-4 bg-white rounded-full mt-1"
            />
            <motion.div
              variants={lineVariants}
              className="w-0.5 bg-white"
              style={{ originY: 0 }}
            />
          </div>
          <motion.div
            variants={itemVariants}
            className="px-4 rounded-md w-full"
          >
            <h3 className="text-lg font-semibold pb-4">Sept 2023 - Dec 2023</h3>
            <h4 className="text-xl font-bold">PT Menara Indonesia</h4>
            <p className="mt-1 text-sm">Frontend Web Developer | Intern</p>
            <p className="mt-5 text-xs">
              Develop a Learning Management System (LMS), focusing on user
              management and learning modules. This experience enhanced my
              technical skills and highlighted the significance of digital
              education.
            </p>
            <div className="mt-4">
              <h1 className="font-semibold text-sm">
                NextJS &nbsp; &nbsp;|&nbsp; &nbsp; TypeScript &nbsp;
                &nbsp;|&nbsp; &nbsp; Tailwind
              </h1>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
