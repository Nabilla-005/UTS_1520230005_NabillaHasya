import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext"; // pastikan path ini sesuai
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 text-black dark:text-white">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <div className="flex items-center gap-4">
        {/* Toggle Mode */}
        <button
          onClick={toggleTheme}
          className="text-2xl md:mr-6 transition-all"
          title="Toggle theme"
        >
          {theme === "light" ? "🌙" : "🌞"}
        </button>

        {/* Menu Icon */}
        {showMenu ? (
          <RiMenu2Line
            size={30}
            className="md:hidden transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        ) : (
          <RiCloseLine
            size={30}
            className="md:hidden transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        )}
      </div>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-gray-100 dark:bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
