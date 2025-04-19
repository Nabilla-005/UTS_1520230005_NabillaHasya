import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import avatarImg from "../../assets/foto.png";
import TextChange from "../TextChange";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black px-4 md:px-16 py-6 dark:bg-black">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 border-4 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight tracking-tight mb-4 dark:text-white">
            <TextChange />
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0 dark:text-gray-300">
            Halo, saya <span className="font-semibold text-blue-600">Nabilla Hasya Permana</span>, mahasiswi Institut Teknologi Nasional Bandung.
            Saya berkomitmen untuk terus berkembang melalui pengetahuan, pengalaman, dan inovasi.
          </p>

          {/* Skills/Highlights */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            {["Mahasiswa", "Web Lanjut", "Semester 4"].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-200 text-sm rounded-full text-gray-800 dark:bg-gray-600 dark:text-gray-100">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={() => scrollToSection("Footer")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-400">
              Hubungi Saya
            </button>
            <button
              onClick={() => scrollToSection("Projects")}
              className="px-6 py-3 border border-gray-400 hover:border-blue-600 text-gray-800 hover:text-blue-600 font-semibold rounded-lg transition duration-300 dark:border-gray-600 dark:text-gray-100 dark:hover:text-blue-400">
              Lihat Proyek
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-6">
          <div className="relative group">
            <img 
              src={avatarImg} 
              alt="Profile Nabilla Hasya Permana" 
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-gray-200 shadow-lg transform group-hover:scale-105 transition duration-300 object-cover"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-4">
            <a href="#" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800 text-2xl transition duration-300 dark:text-blue-500 dark:hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-black text-2xl transition duration-300 dark:text-gray-300 dark:hover:text-white">
              <FaGithub />
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-800 text-2xl transition duration-300 dark:text-pink-500 dark:hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
