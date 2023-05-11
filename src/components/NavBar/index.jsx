import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import "./navbar.css";
import useDarkMode from "../../hooks/useDarkMode";

function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { isMobile } = props;
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center md:px-16">
      <div className="flex items-center animate__animated animate__fadeInLeft">
        <div className="text-20 font-bold mr-2">GEO</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer animate-bounce"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer animate-bounce"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold animate__animated animate__fadeInRight z-10">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li
              className={`text-effect-desk cursor-pointer hover:text-indigo-400 transition-all duration-300`}
            >
              Features
            </li>
            <li
              className={`text-effect-desk cursor-pointer hover:text-indigo-400 transition-all duration-300`}
            >
              Menu
            </li>
            <li
              className={`text-effect-desk cursor-pointer hover:text-indigo-400 transition-all duration-300`}
            >
              Our Story
            </li>
            <li
              className={`text-effect-desk cursor-pointer hover:text-indigo-400 transition-all duration-300`}
            >
              Contact
            </li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center text-black text-13 w-[150px]">
            <li
              className={`text-effect cursor-pointer hover:text-indigo-700 transition-all duration-300`}
            >
              Features
            </li>
            <li
              className={`text-effect cursor-pointer hover:text-indigo-700 transition-all duration-300`}
            >
              Menu
            </li>
            <li
              className={`text-effect cursor-pointer hover:text-indigo-700 transition-all duration-300`}
            >
              Our Story
            </li>
            <li
              className={`text-effect cursor-pointer hover:text-indigo-700 transition-all duration-300`}
            >
              Contact
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
