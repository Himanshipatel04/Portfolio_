import React from "react";
import { motion } from "framer-motion";
import { npm } from "../constants/npmLibraries"; // If you store it separately
// Or paste the npm array directly in this file if needed

const NpmZone = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4 mb-10"
    >
      <h1 className="text-4xl md:text-5xl leading-18 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Npm Zone
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-10">
        Here’s a collection of npm packages that I used in my projects.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {npm.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.02 }}
          >
            <h2 className="text-lg font-semibold text-pink-400">{pkg.key}</h2>
            <p className="text-sm text-gray-300">{pkg.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NpmZone;
