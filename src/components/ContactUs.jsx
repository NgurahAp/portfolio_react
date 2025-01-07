import  { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaLink } from "react-icons/fa";

export const ContactUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Title animation that triggers on scroll
  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 1,
      },
    },
  };

  // Container for contact items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual contact item animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
      },
    },
  };

  // Dot animation
  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const contacts = [
    {
      icon: <CiMail className="text-3xl mr-5" />,
      text: "ngurahpratama2002@gmail.com",
    },
    {
      icon: <FaLinkedinIn className="text-3xl mr-5" />,
      text: "Ngurah Arya Pratama",
    },
    {
      icon: <FaGithub className="text-3xl mr-5" />,
      text: "NgurahAp",
    },
  ];

  return (
    <>
      <section ref={sectionRef} className="min-h-[100vh] flex items-center overflow-hidden">
        <div className="w-1/2 flex items-center pl-28">
          <motion.h1
            className="font-bold text-7xl"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Reach Out to Me!
          </motion.h1>
        </div>

        <motion.div
          className="w-1/2 flex flex-col pl-28 justify-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="flex items-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                x: 20,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full mr-9"
                variants={dotVariants}
                whileHover={{
                  scale: 1.5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              />
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
                <h1 className="">{contact.text}</h1>
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
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="h-screen flex items-center justify-center text-xl text-center px-36">
        I appreciate your interest in my portfolio. Im passionate about
        continuous learning and collaboration in the ever-evolving tech
        landscape.
      </section>
    </>
  );
};

export default ContactUs;
