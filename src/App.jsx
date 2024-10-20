import { useState } from "react";
import { Navbar } from "./components/Navbar";
import SplashScreen from "./components/SplashScreen"; // Impor komponen

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinished={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <section className="h-screen px-20 text-[#dfdad5] py-28"></section>
        </>
      )}
    </>
  );
};

export default App;
