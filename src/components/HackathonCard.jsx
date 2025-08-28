import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhotoModal from "./PhotoModal";

const HackathonCard = ({
  title,
  role,
  location,
  date,
  description,
  images,
  certificateLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const descriptionLines = description.split(".");

  const openModal = (img) => {
    setModalPhoto(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalPhoto(null);
  };

  return (
    <>
      <motion.div
        className="bg-white/5  backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.2)] text-white w-full overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-6">
          {/* Carousel */}
          <div className="w-full md:w-1/2">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="w-full h-52 md:h-84 cursor-pointer">
                  <img
                    src={image}
                    alt={`Hackathon Image ${index + 1}`}
                    className="w-full h-84 object-cover rounded-lg"
                    onClick={() => openModal(image)}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-extrabold text-pink-400">{role}</h2>
            <div className="text-purple-200 text-lg font-medium">{title}</div>
            <div className="text-purple-200 text-lg font-medium">
              {location}
            </div>
            <p className="text-sm text-purple-300 italic">{date}</p>
            <div className="space-y-3">
              {descriptionLines.map((line, index) =>
                line.trim() ? (
                  <p
                    key={index}
                    className="text-sm md:text-md text-purple-300 flex items-start gap-2"
                  >
                    <span className="h-2 w-2 mt-1.5 md:mt-3 rounded-full bg-green-200 flex-shrink-0"></span>
                    {line.trim() +
                      (index < descriptionLines.length - 1 ? "." : "")}
                  </p>
                ) : null
              )}
            </div>

            {certificateLink && (
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700/50 text-white rounded-full shadow hover:bg-gray-700/70 transition duration-200"
                  aria-label="View Certificate"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <PhotoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photoSrc={modalPhoto}
      />
    </>
  );
};

export default HackathonCard;
