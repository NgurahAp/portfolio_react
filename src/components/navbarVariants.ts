export const menuVariants = {
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

  export const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  export const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Menurunkan delay antar huruf
        delayChildren: 0.1, // Delay setelah animasi garis
      },
    },
  };

  export const letterVariants = {
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