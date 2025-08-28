import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700/50 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex px-3 md:flex-row justify-between items-center gap-3">
        {/* Logo and Brand */}
        <div className="flex items-center py-1 gap-3">
          <img
            src={Logo}
            alt="Himanshi Logo"
            className="h-6 object-contain"
          />
        </div>

        <div className="text-center text-md text-gray-200 select-none hidden md:block">
          &copy; {new Date().getFullYear()} Himanshi. All rights reserved.
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
