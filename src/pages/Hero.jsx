import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../common/Footer";
import react from "../assets/React.a7bac6fd.png";
import logo from "../assets/logo.png";

import {
  Github,
  Linkedin,
  Mail,
  Menu,
  Grid3x3,
  ArrowRight,
  Code2,
  MessageSquareQuote,
} from "lucide-react";

const MenuComponent = () => (
  <div className="bg-gray-800/80 rounded-xl p-4 flex flex-col gap-2 text-white shadow-lg">
    <Link to="/" className="hover:text-pink-400">
      Home
    </Link>
    <Link to="/projects" className="hover:text-pink-400">
      Projects
    </Link>
    <Link to="/about" className="hover:text-pink-400">
      About
    </Link>
    <Link to="/experience" className="hover:text-pink-400">
      Experience
    </Link>
    <Link to="/npmZone" className="hover:text-pink-400">
      NpmZone
    </Link>
  </div>
);

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive((prev) => !prev);

  return (
    <div className="overflow-x-hidden h-screen relative">
      <header className="h-[20vh] md:h-[30vh] flex items-center justify-around gap-40 md:gap-96 z-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 md:w-28" />
        </Link>

        <nav className="flex gap-6 text-lg relative">
          <div
            onClick={toggleMenu}
            className="relative cursor-pointer w-10 h-10 text-emerald-400"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Grid3x3
              className={`absolute w-10 h-10 transition-opacity duration-500 ${
                hovered || active ? "opacity-0" : "opacity-100"
              }`}
            />
            <Menu
              className={`absolute w-10 h-10 transition-opacity duration-500 ${
                hovered || active ? "opacity-100" : "opacity-0"
              }`}
            />
            {(hovered || active) && (
              <div
                className={`absolute top-12 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
                  active || hovered
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-10"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <MenuComponent />
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="h-[80vh] md:h-[70vh] flex items-center justify-center flex-col gap-7 md:gap-5 text-center">
        <div className="relative flex flex-col items-center cursor-default">
          <img
            src={react}
            alt="React"
            className="w-6 md:w-12 absolute top-8 right-12 md:-top-12 md:-right-0.5 animate-spin"
          />
          <p className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-pink-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent zeyada-regular">
            HEY , I am{" "}
            <span className="tracking-widest text-6xl md:text-8xl hover:tracking-normal duration-500">
              HIMANSHI
            </span>
          </p>
          <p className="text-lg md:text-2xl tracking-wide teko-regular mt-6">
            I am a Software Developer specializing in full stack development.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Link
            to="/projects"
            className="animated-link flex items-center gap-2 hover:text-pink-400 transition"
          >
            <ArrowRight className="h-5" />
            See My Projects
          </Link>
          <Link
            to="/about"
            className="animated-link flex items-center gap-2 hover:text-pink-400 transition"
          >
            <ArrowRight className="h-5" />
            More About Me
          </Link>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/Himanshipatel04"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700/60 hover:scale-125 transition-transform animate-pulse duration-100 rounded-full h-12 w-12 flex items-center justify-center"
          >
            <Github className="h-6" />
          </a>
          <a
            href="https://leetcode.com/u/himanshi0416/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700/50 hover:scale-125 transition-transform animate-pulse duration-100 rounded-full h-12 w-12 flex items-center justify-center"
          >
            <Code2 className="h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/himi04/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700/50 hover:scale-125 transition-transform animate-pulse duration-100 rounded-full h-12 w-12 flex items-center justify-center"
          >
            <Linkedin className="h-6" />
          </a>
          <a
            href="mailto:himanship871@gmail.com"
            className="bg-gray-700/50 hover:scale-125 transition-transform animate-pulse duration-100 rounded-full h-12 w-12 flex items-center justify-center"
          >
            <Mail className="h-6" />
          </a>
        </div>
      </main>
      <div className="flex absolute bottom-8 right-4 bg-gray-700/50 p-2 md:p-4 hover:p-2 rounded-full hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer group items-center max-w-[80%]">
        <MessageSquareQuote className="text-white shrink-0 group-hover:hidden" />
        <p className="hidden group-hover:inline-block ml-1 bg-black text-white text-xs md:text-sm px-3 py-2 rounded-full shadow-lg whitespace-normal break-words">
          Himi's quote: "Live Your Life! That's what we are here for!"
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
