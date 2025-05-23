import Slider from "react-slick";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../constants/projects";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],            
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4 mb-5"
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-15 p-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Projects
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto mb-6">
        A few highlights of the projects I’ve built or contributed to.
      </p>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {projectList.map((project, idx) => (
            <div key={idx} className="px-2">
              <ProjectCard {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;
