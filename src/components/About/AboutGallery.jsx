// AboutGallery.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import about1 from "../../assets/Himi.jpg";
import about2 from "../../assets/Himi2.jpg";
import PhotoModal from "../../components/PhotoModal";

const imageVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const imageData = [
  {
    src: about1,
    location: "Pune, Maharashtra",
    description: "Capturing a moment from my journey of internship in Pune",
  },
  {
    src: about1,
    location: "Pune, Maharashtra",
    description: "Another beautiful capture from the same journey",
  },
];

const ImageCard = ({ img, index, onClick }) => (
  <motion.div
    variants={imageVariants}
    initial="initial"
    whileInView="animate"
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 cursor-pointer"
    onClick={() => onClick(img.src)}
  >
    <img
      src={img.src}
      alt={img.description}
      className="w-full h-[400px] object-cover transform group-hover:scale-110 group-hover:rotate-[0.5deg] transition-transform duration-700 ease-in-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <p className="text-lg font-semibold tracking-wide">{img.location}</p>
      <p className="text-sm">{img.description}</p>
    </div>
  </motion.div>
);

const AboutGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const handleOpenModal = (src) => {
    setSelectedPhoto(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPhoto("");
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-2 pb-16">
        {imageData.map((img, i) => (
          <ImageCard key={i} img={img} index={i} onClick={handleOpenModal} />
        ))}
      </div>

      <PhotoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        photoSrc={selectedPhoto}
      />
    </>
  );
};

export default AboutGallery;
