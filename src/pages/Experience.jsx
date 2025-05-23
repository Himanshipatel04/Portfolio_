import React from "react";
import ExperienceItem from "../components/ExperienceItem";

import { motion } from "framer-motion";
import { experiences } from "../constants/experience";

const Experience = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4 mb-10"
    >
      <h1 className="text-4xl md:text-5xl leading-18 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Experience
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-10">
        Here’s a snapshot of my journey so far, working with exciting projects and companies that fuel my passion and growth.
      </p>

      <div className="max-w-4xl mx-auto space-y-12 ">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
