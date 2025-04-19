import React, { useState } from "react";

const ProjectCard = ({ title, main, image, time, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle read more/less

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle expanded view
  };

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={image} alt={title} /> {/* Use the passed image */}
      
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>

      {/* Initially show only the title, with a "Read More" button */}
      {!isExpanded && (
        <button
          onClick={handleToggle}
          className="px-4 text-sm text-blue-500 underline mt-2"
        >
          Read More
        </button>
      )}

      {/* If expanded, show the rest of the content */}
      {isExpanded && (
        <>
          <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

          {/* Waktu Pengerjaan */}
          {time && (
            <p className="px-4 text-sm md:text-md py-2">
              <strong>Waktu Pengerjaan:</strong> {time}
            </p>
          )}

          {/* Teknologi yang Digunakan */}
          {technologies && (
            <p className="px-4 text-sm md:text-md py-2">
              <strong>Teknologi yang Digunakan:</strong> {technologies}
            </p>
          )}

          {/* Hide the "Read More" button when content is expanded */}
          <button
            onClick={handleToggle}
            className="px-4 text-sm text-blue-500 underline mt-2"
          >
            Read Less
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
