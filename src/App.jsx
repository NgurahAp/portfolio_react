import "flowbite/dist/flowbite.css";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";

export default function App() {
 

  return (
    <>
     <Navbar/>
      <Introduction />
      <section className="h-screen px-20 text-[#dfdad5] py-28"></section>
    </>
  );
}
