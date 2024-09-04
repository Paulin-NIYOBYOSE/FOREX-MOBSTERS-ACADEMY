"use client";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative py-4 px-10 flex flex-row justify-between items-center bg-white shadow-md">
      {/* Logo (Mobile Only) */}
      <div className="md:hidden flex-1">
        <div className="text-lg font-bold">Logo</div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden absolute right-4 top-4">
        <CiMenuFries
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center p-4 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          &times; {/* Close button */}
        </button>
        <ul className="flex flex-col gap-4 font-bold text-center">
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#mentorship" onClick={() => setIsMenuOpen(false)}>
              Mentorship
            </a>
          </li>
          <li>
            <a href="#signals" onClick={() => setIsMenuOpen(false)}>
              Signals
            </a>
          </li>
          <li>
            <a href="#minor-ai" onClick={() => setIsMenuOpen(false)}>
              Minor AI
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => setIsMenuOpen(false)}>
              About us
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-2 mt-4">
          <button className="w-full h-10 bg-blue-500 hover:bg-blue-600 duration-300 text-white rounded-lg">
            Log in
          </button>
          <button className="w-full h-10 border-gray-700 border-[1.5px] rounded-md flex items-center justify-center hover:bg-blue-500 hover:border-0 hover:text-white duration-300">
            <FiLogIn />
          </button>
          <button
            className="w-full h-10 border-gray-700 border-[1.5px] rounded-md flex items-center justify-center hover:bg-blue-500 hover:border-0 hover:text-white duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:flex flex-1 items-center">
        <div className="text-lg font-bold">Logo</div>
        <h3 className="text-xl font-semibold ml-4">FX miners</h3>
      </div>
      <ul className="hidden lg:flex flex-row space-x-8 font-bold mr-7">
        <li className="py-2 lg:py-0">Home</li>
        <li className="py-2 lg:py-0">Mentorship</li>
        <li className="py-2 lg:py-0">Signals</li>
        <li className="py-2 lg:py-0">Minor AI</li>
        <li className="py-2 lg:py-0">About us</li>
      </ul>
      <div className="hidden lg:flex flex-row gap-4">
        <button className="w-full lg:w-24 h-10 bg-blue-500 hover:bg-blue-600 duration-300 text-white rounded-lg">
          Log in
        </button>
        <button className="w-full lg:w-10 h-10 border-gray-700 border-[1.5px] rounded-md flex items-center justify-center hover:bg-blue-500 hover:border-0 hover:text-white duration-300">
          <FiLogIn />
        </button>
        <button
          className="w-10 h-10 border-gray-700 border-[1.5px] rounded-md flex items-center justify-center hover:bg-blue-500 hover:border-0 hover:text-white duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
