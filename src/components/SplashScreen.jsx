import { useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Tambahkan ini di bagian atas file

const SplashScreen = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 3000); // Splash screen akan muncul selama 3 detik

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-blue-500 text-white"
    >
      <h1 className="text-4xl font-bold">Selamat Datang!</h1>
    </motion.div>
  );
};

// Tambahkan prop types di bawah komponen
SplashScreen.propTypes = {
  onFinished: PropTypes.func.isRequired, // Memastikan onFinished adalah fungsi dan wajib
};

export default SplashScreen; // Ekspor komponen
