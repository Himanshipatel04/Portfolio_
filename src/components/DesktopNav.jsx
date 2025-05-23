import { NavLink, Link } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/npmZone", label: "Npm Zone" },
  { path: "/hackathons", label: "Hackathons" },
  { path: "/certificates", label: "Certificates" },
];

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex gap-6 text-lg font-medium">
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
