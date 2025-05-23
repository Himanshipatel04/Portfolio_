import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificateList } from "../constants/certificates";

// Card component first
const CertificateCard = ({ title, issuer, date, image, link }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4 border border-white/20"
      />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{issuer}</p>
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-pink-400 hover:underline text-sm"
      >
        View Certificate
        <ExternalLink className="ml-1 w-4 h-4" />
      </a>
    </motion.div>
  );
};

// Main component
const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center p-4 mb-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Certificates
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-10">
        A showcase of my verified learning journey – from hands-on workshops to structured programs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {certificateList.map((cert, idx) => (
          <CertificateCard key={idx} {...cert} />
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
