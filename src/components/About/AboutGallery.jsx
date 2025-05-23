import { motion } from "framer-motion";
import about1 from "../../assets/Himi.jpg";
import about2 from "../../assets/Himi2.jpg";

const AboutGallery = () => {
  const imageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-2 pb-16">
      {[about1, about1].map((img, i) => (
        <motion.div
          key={i}
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200"
        >
          <img
            src={img}
            // alt={`About image ${i + 1}`}
            className="w-full h-[400px] object-cover transform group-hover:scale-110 group-hover:rotate-[0.5deg] transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-lg font-semibold tracking-wide">Snapshot {i + 1}</p>
            <p className="text-sm">Capturing a moment from my journey</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutGallery;
