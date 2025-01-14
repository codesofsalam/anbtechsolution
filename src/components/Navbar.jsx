import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#021228] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/Asset 11.png" className="h-16 w-auto mt-2" alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-white hover:text-blue-300 px-3 py-2 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-blue-300 px-3 py-2 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-white hover:text-blue-300 px-3 py-2 transition-colors"
              >
                Our Projects
              </a>{" "}
              {/* Added Our Projects */}
              <a
                href="#approach"
                className="text-white hover:text-blue-300 px-3 py-2 transition-colors"
              >
                Our Approach
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-300 px-3 py-2 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy-900">
            <a
              href="#home"
              className="text-white hover:text-blue-300 block px-3 py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-300 block px-3 py-2 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-white hover:text-blue-300 block px-3 py-2 transition-colors"
            >
              Our Projects
            </a>{" "}
            {/* Added Our Projects */}
            <a
              href="#approach"
              className="text-white hover:text-blue-300 block px-3 py-2 transition-colors"
            >
              Our Approach
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 block px-3 py-2 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
