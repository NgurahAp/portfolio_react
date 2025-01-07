import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const Introduction = ({ isOpen }) => {
  const introductionVariants = {
    hidden: { x: 0 },
    animate: {
      x: isOpen ? -80 : 0, // Ketika navbar dibuka, elemen turun 50px
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    },
  };
  const descriptionVariants = {
    hidden: { y: 0 },
    animate: {
      y: isOpen ? 100 : 0, // Ketika navbar dibuka, elemen turun 50px
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    },
  };
  const nameVariants = {
    hidden: { y: 0 },
    animate: {
      y: isOpen ? 50 : 0, // Ketika navbar dibuka, elemen turun 50px
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    },
  };

  return (
    <section className="h-screen px-20 text-[#dfdad5] pt-40 flex flex-col">
      <motion.h1
        className="text-6xl font-semibold underline pb-12"
        style={{ fontFamily: "Playfair Display" }}
        variants={introductionVariants}
        initial="hidden"
        animate="animate"
      >
        Introduction.
      </motion.h1>
      <div>
        <motion.div variants={nameVariants} initial="hidden" animate="animate">
          <h1 className="text-7xl font-semibold">Ngurah Arya Pratama</h1>
          <h2 className="text-xl pt-8">
            - Fullstack Developer | Mobile Developer -
          </h2>
        </motion.div>

        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate="animate"
        >
          <p className=" pt-8">
            <span className="font-bold">Hi there!</span>👋 My name is Arya,
            I&apos;m a System Information student at Universitas BSI with a
            strong interest in mobile and web application development. I have
            gained valuable experience and received positive feedback in mobile
            app development, and I am also keen to expand my skills in fullstack
            development.
          </p>
          <div className="flex gap-10">
            <button
              className="border-[1px] rounded-md  text-[#1a1a1a] font-semibold bg-[#dfdad5] px-4 py-2 mt-14"
              style={{ fontFamily: "Playfair Display" }}
            >
              DOWNLOAD CV
            </button>
            <button
              className="border-[1px] rounded-md  border-[#dfdad5] font-semibold px-4 py-2 mt-14"
              style={{ fontFamily: "Playfair Display" }}
            >
              CONTACT ME
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// PropTypes validation
Introduction.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validasi bahwa isOpen harus berupa boolean dan wajib diisi
};
