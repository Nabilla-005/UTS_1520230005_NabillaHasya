import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-[#3b4d8b] to-[#465697] text-white p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-10"
    >
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contact</h1>
        <p className="text-sm md:text-lg font-light">
          &copy; 152023005 - Nabilla Hasya Permana
        </p>
      </div>

      <ul className="flex flex-col gap-4 text-sm md:text-lg">
        <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors duration-300">
          <MdOutlineEmail size={24} />
          <a href="mailto:nabilla.hasya@mhs.itenas.ac.id" target="_blank" rel="noopener noreferrer">
            nabilla.hasya@mhs.itenas.ac.id
          </a>
        </li>
        <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors duration-300">
          <CiLinkedin size={24} />
          <a href="https://www.linkedin.com/in/nabilla-hasya" target="_blank" rel="noopener noreferrer">
            Nabilla Hasya Permana
          </a>
        </li>
        <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors duration-300">
          <FaGithub size={24} />
          <a href="https://github.com/nabillahasya" target="_blank" rel="noopener noreferrer">
            nabilla hasya
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
