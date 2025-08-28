import React from "react";
import HamburgerToggle from "./HamburgerToggle";
import DesktopNav from "./DesktopNav";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const FloatingHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl bg-gray-700/60 backdrop-blur-lg rounded-full shadow-md border border-white/10"
      >
        <nav className="flex justify-between items-center px-6 py-1 md:py-3 text-white">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-12 cursor-pointer" />
          </Link>
          <DesktopNav />
          <HamburgerToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </nav>
      </motion.header>
    </div>
  );
};

export default FloatingHeader;
