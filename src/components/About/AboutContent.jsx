import { motion } from "framer-motion";
import { BookOpen, User, Code, TrendingUp, Heart } from "lucide-react";

const items = [
  {
    icon: <User className="w-6 h-6 text-pink-400" />,
    title: "Education",
    description: (
      <>
        {" "}
        <span>•</span>{" "}
        <span className="text-pink-400 font-semibold">
          IES College of Technology
        </span>{" "}
        – B.Tech, CGPA <span className="font-semibold">8.3</span>
        <br />
        <span>•</span>{" "}
        <span className="text-pink-400 font-semibold">
          Gurudev Public School
        </span>{" "}
       - (12th: <span className="font-semibold">93.6%</span>, 10th:{" "}
        <span className="font-semibold">95.6%</span>)
      </>
    ),
  },
  {
    icon: <BookOpen className="w-6 h-6 text-pink-400" />,
    title: "Passion",
    description: (
      <>
        Avid reader & writer: <em>The Almanack of Naval Ravikant</em>,{" "}
        <em>Atomic Habits</em>, <em>Sapiens</em>, <em>The Subtle Art</em>
      </>
    ),
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
    title: "Interests",
    description:
      "In my free time, you'll find me diving into system design, exploring how apps scale, or getting lost in the wonders of space and quantum physics.",
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-400" />,
    title: "Hobbies",
    description:
      "Exploring new places, nature walks, journaling, and art-craft.",
  },
];

const AboutContent = () => {
  return (
    <motion.section
      className="pb-5 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-start space-x-4 hover:scale-[1.03] transition-transform duration-300 shadow-md"
          >
            <div className="pt-1">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutContent;
