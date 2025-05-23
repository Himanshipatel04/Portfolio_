import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4 mb-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        About Me
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
        I’m Himanshi — passionate about turning ideas into beautiful, useful software. Here's a glimpse of who I am, what I love, and where I’m headed.
      </p>
    </motion.div>
  );
};

export default AboutHero;
