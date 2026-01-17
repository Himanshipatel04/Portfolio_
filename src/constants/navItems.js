import { Home, User, Folder, Briefcase, Package, Trophy, Award, Wrench} from "lucide-react";

export const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/experience", label: "Experience", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: Folder },
  { path: "/skills", label: "Skills", icon:Wrench },
  { path: "/npmZone", label: "Npm Zone", icon: Package },
  { path: "/hackathons", label: "Hackathons", icon: Trophy },
  { path: "/certificates", label: "Certificates", icon: Award },
];
