import HackathonCard from "../components/HackathonCard";
import { motion } from "framer-motion";
import { hackathonData } from "../constants/hackathonData";

const Hackathons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4 mb-10"
    >
      <h1 className="text-4xl md:text-5xl leading-18 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Hackathons
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-10">
        Highlights from national-level hackathons showcasing creativity,
        innovation, and real-world problem solving.
      </p>

      <div className="grid gap-10 grid-cols-1">
        {hackathonData.map((hackathon, index) => (
          <HackathonCard key={index}  {...hackathon} />
        ))}
      </div>
    </motion.div>
  );
};

export default Hackathons;
