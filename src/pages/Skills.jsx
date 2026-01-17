import { motion } from "framer-motion";
import { skills } from "../constants/skills";

const Skills = () => {
  return (
    <section className="px-4 py-4 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-15 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Skills
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto mb-14">
        A showcase of my technical skills and the technologies I work in.
      </p>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {skills.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="break-inside-avoid relative p-6 rounded-2xl
            bg-white/5 border 
            border-pink-400/40"
          >
            <h2 className="text-lg font-semibold text-pink-400 mb-4 relative z-10">
              {section.title}
            </h2>

            <div className="flex flex-wrap gap-3 relative z-10">
              {section.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="px-4 py-2 rounded-full text-sm bg-black/40 
                  border border-white/10 text-gray-200 
                  hover:border-pink-400/40 hover:bg-black/50"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
