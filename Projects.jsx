import React from "react";
import bannerImg1 from "../../assets/Portfolio.png"; // Importing first image
import bannerImg2 from "../../assets/crud.png"; // Importing second image
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio"
          main="Berisi deskripsi singkat tentang diri, termasuk latar belakang pendidikan."
          image={bannerImg1} // Passing first image
          time="2 Minggu"
          technologies="React, CSS, Node.js"
        />
        <ProjectCard
          title="Toko Baju"
          main="Mengelola Toko Baju dari mulai kelola stok, penjualan, pemasukan dan riwayat transaksi."
          image={bannerImg2} // Passing second image
          time="3 Minggu"
          technologies="Mysql, PHP"
        />
        <ProjectCard
          title="Progress Skripsi"
          main="Membuat website untuk mahasiswa semester akhir melihat jadwal bimbingan, melihat mahasiswa yang di bimbing, dan lain sebagainya."
          image={bannerImg1} // Passing the first image again (or change as needed)
          time="4 bulan"
          technologies="Laravel, Bootstrap, MySQL"
        />
      </div>
    </div>
  );
};

export default Projects;
