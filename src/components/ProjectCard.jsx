import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ title, description, image, tech, github, demo }) => {
  return (
    <div className="bg-white/10 p-4 h-96 md:h-[450px] rounded-2xl backdrop-blur-lg shadow-md text-left">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div>
        {description.split(".").map((line, index) => (
          <p key={index} className="text-gray-300 mb-2">
            {line.trim() +
              (index < description.split(".").length - 1 ? "." : "")}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-pink-400/20 text-pink-300 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-pink-400 hover:underline flex items-center text-sm"
        >
          <Github className="w-4 h-4 mr-1" /> GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 hover:underline flex items-center text-sm"
        >
          <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
