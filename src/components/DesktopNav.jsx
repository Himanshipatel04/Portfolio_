import { NavLink, Link } from "react-router-dom";
import {navItems} from '../constants/navItems'


const DesktopNav = () => {
  return (
    <ul className="hidden md:flex gap-6 text-md font-medium">
      {navItems.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-pink-400 ${
                isActive ? "text-pink-400" : "text-white"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
      
    </ul>
  );
};

export default DesktopNav;
