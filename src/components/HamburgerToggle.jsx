import { Menu, X } from "lucide-react";

const HamburgerToggle = ({ isOpen, toggle }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggle}>
        {isOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
      </button>
    </div>
  );
};

export default HamburgerToggle;
