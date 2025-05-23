import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DesktopNav from "../components/DesktopNav";
import HamburgerToggle from "../components/HamburgerToggle";
import MobileDrawer from "../components/Drawer";
import FloatingHeader from "../components/FloatingHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <FloatingHeader isOpen={isOpen} setIsOpen={setIsOpen} />

      <MobileDrawer isOpen={isOpen} toggle={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
