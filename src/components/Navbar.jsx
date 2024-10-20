import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed w-full flex items-center justify-between px-10 py-6 bg-transparent">
      {/* Left side - logo */}
      <div
        className="text-2xl font-semibold text-[#76ABAE]"
        style={{ fontFamily: "Playfair Display" }}
      >
        _ngrhap
      </div>
      {/* Right side - hamburger menu */}
      <div className="">
        <button className=" text-[#f1f1f1]" onClick={toggleMenu}>
          <img src="/hamburger.svg" alt="" className="w-14" />
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#f1f1f1] p-6">
          <ul className="flex flex-col space-y-4 text-xl">
            <li>
              <a href="#home" className="text-[#76ABAE]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[#76ABAE]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-[#76ABAE]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#76ABAE]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
