import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import {navItems} from "../constants/navItems";

const MobileDrawer = ({ isOpen, toggle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-screen w-3/4 bg-gray-900/50 backdrop-blur-md z-40 p-6 text-white shadow-lg md:hidden"
        >
          <ul className="space-y-5 text-md pt-20 macondo-regular">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={toggle}
                  className={({ isActive }) =>
                    `block transition-colors text-sm duration-300 hover:text-pink-400 ${
                      isActive ? "text-pink-400" : "text-white"
                    }`
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
