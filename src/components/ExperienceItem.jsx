import React from "react";
import { Link as LinkIcon } from "@styled-icons/boxicons-regular/Link";
import { FileText } from "@styled-icons/feather/FileText";
import { motion } from "framer-motion";

const ExperienceItem = ({
  company,
  role,
  period,
  description,
  website,
  offerLetter,
  photos,
}) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-xl border border-white/20 h-fit rounded-2xl p-4 md:p-8 max-w-4xl mx-auto shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] text-left space-y-2 md:space-y-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Role */}
      <div className="flex justify-between items-start md:items-center md:flex-row flex-col">  
        <h3 className="text-2xl md:text-3xl font-extrabold text-pink-400 tracking-tight">
          {role}
        </h3>
        <div className="flex flex-wrap gap-5 mt-2">
          {offerLetter && (
            <a
              href={offerLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-pink-400 hover:text-pink-600 transition-colors flex items-center gap-1"
              aria-label={`${company} offer letter link`}
            >
              <FileText className="w-5 h-5 md:w-6 md:h-6" />
              <span className="sr-only">Letter</span>
              <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-pink-500 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                View Letter
              </span>
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-pink-400 hover:text-pink-600 transition-colors flex items-center gap-1"
              aria-label={`${company} website link`}
            >
              <LinkIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="sr-only">Company Website</span>
              <span className="absolute bottom-full mb-2 w-max px-2 py-1 rounded bg-pink-500 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Visit Website
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Company Name */}
      <p className="text-sm md:text-base text-purple-300 italic font-semibold">
        {company}
      </p>

      {/* Period */}
      <p className="text-xs md:text-sm text-purple-300 italic tracking-wide">
        {period}
      </p>


      {/* Description */}
      <ul
        className="text-gray-300 leading-relaxed mb-5 "
      
      >
        {description.split("+").map((val, index) => (
          <li
            key={index}
            className="mb-1 relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400"
          >
            {val}
          </li>
        ))}
      </ul>

      {/* Photos */}
      {photos && photos.length > 0 && (
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar"> 
          {photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt={`${company} experience photo ${idx + 1}`}
              className="w-48 h-32 md:w-64 md:h-40 object-cover rounded-xl shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceItem;
