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
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-800 via-indigo-900 to-black dark:bg-gradient-to-r from-gray-800 via-gray-900 to-black px-6 md:px-20 py-10">
      <div className="w-full max-w-6xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-3xl p-16 flex flex-col md:flex-row items-center gap-12 border-8 border-gray-200 dark:border-gray-700">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight tracking-tight mb-4">
            <TextChange />
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Halo, saya <span className="font-semibold text-blue-600">Nabilla Hasya Permana</span>, mahasiswi Institut Teknologi Nasional Bandung.
            Saya berkomitmen untuk terus berkembang melalui pengetahuan, pengalaman, dan inovasi.
          </p>

          {/* Skills/Highlights */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            {["Mahasiswa", "Web Lanjut", "Semester 4"].map((tag, idx) => (
              <span key={idx} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <button
              onClick={() => scrollToSection("Footer")}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
              Hubungi Saya
            </button>
            <button
              onClick={() => scrollToSection("Projects")}
              className="px-8 py-4 border border-gray-400 hover:border-blue-600 text-gray-800 hover:text-blue-600 font-semibold rounded-lg transition duration-300">
              Lihat Proyek
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-8">
          <div className="relative group">
            <img 
              src={avatarImg} 
              alt="Profile Nabilla Hasya Permana" 
              className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg transform group-hover:scale-105 transition duration-300 object-cover"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-8 mt-6">
            <a href="#" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800 text-3xl transition duration-300">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-black text-3xl transition duration-300">
              <FaGithub />
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-800 text-3xl transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
