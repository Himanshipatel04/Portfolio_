import { useState } from "react";
import { Link } from "react-router-dom";
import react from "../assets/React.a7bac6fd.png";
import logo from "../assets/logo.png";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  ArrowRight,
  Code2,
  MessageSquareQuote,
} from "lucide-react";
import { navItems } from "../constants/navItems";

const Hero = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive((prev) => !prev);

  return (
    <div className="overflow-x-hidden h-screen relative ">
      <header className="h-[20vh] md:h-[30vh] flex items-center justify-around gap-40 md:gap-96 z-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 md:w-28" />
        </Link>

        {/* Drawer toggle button */}
        <button
          onClick={toggleMenu}
          className="text-white cursor-pointer p-2 block md:hidden rounded-md bg-emerald-500/25 hover:bg-emerald-600/20 transition"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex relative group cursor-pointer">
          {/* Icon */}
          <div className="bg-gray-700/50 p-2 md:p-4 rounded-full hover:scale-105 transition-all ease-in-out duration-500">
            <MessageSquareQuote className="text-white shrink-0" />
          </div>

          {/* Quote - shown horizontally just above the icon on hover */}
          <p className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs md:text-sm px-3 py-2 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Himi's quote: "Live Your Life! That's what we are here for!"
          </p>
        </div>

        {/* Drawer */}
        <Drawer active={active} toggleMenu={toggleMenu} />
      </header>

      <div className="absolute hidden md:flex top-1/4 rounded-full right-3 h-96 w-16 bg-gradient-to-b from-gray-900 to-gray-800 flex-col items-center justify-around py-4">
        {navItems.map(({ icon: Icon, label,path }, idx) => (
          <Link
            key={idx}
            to={path}
            className="relative group flex flex-col items-center cursor-pointer"
          >
            <Icon
              size={22}
              className="text-white hover:text-pink-400 transition"
            />

            {/* Label shown on hover */}
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
              {label}
            </span>
          </Link>
        ))}
      </div>

      <main className="h-[80vh] md:h-[60vh] flex items-center justify-center flex-col gap-7 md:gap-5 text-center macondo-regular">
        <div className="relative flex flex-col items-center pointer-events-none">
          <img
            src={react}
            alt="React"
            className="w-6 md:w-12 absolute top-14 right-9 md:-top-12 md:-right-2 animate-spin"
          />
          <p className="text-5xl md:text-7xl font-bold leading-relaxed bg-gradient-to-r from-pink-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent ">
            HEY , I am{" "}
            <span className="text-6xl md:text-8xl hover:tracking-normal duration-500">
              HIMANSHI
            </span>
          </p>
          <p className="text-lg md:text-2xl  ">
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

    </div>
  );
};

export default Hero;

export const Drawer = ({ active, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[50%] md:w-[20%]  backdrop-blur-xl text-white shadow-xl z-50 transition-transform duration-300 ${
        active ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <p className="text-lg font-semibold">Navigate</p>
        <button
          onClick={toggleMenu}
          className="text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-6 p-6 text-md">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            onClick={toggleMenu}
            className="hover:text-pink-400"
          >
            <p className="flex items-center gap-2 macondo-regular">
              {" "}
              <Icon size={20} />
              {label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
