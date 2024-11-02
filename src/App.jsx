import { useScroll, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
    </>
  );
};

export default App;
