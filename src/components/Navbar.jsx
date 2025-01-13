import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">ANB Tech Solutions</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-gray-300 px-3 py-2">Home</a>
              <a href="#services" className="text-white hover:text-gray-300 px-3 py-2">Services</a>
              <a href="#approach" className="text-white hover:text-gray-300 px-3 py-2">Our Approach</a>
              <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2">Contact</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy-900">
            <a href="#home" className="text-white block px-3 py-2">Home</a>
            <a href="#services" className="text-white block px-3 py-2">Services</a>
            <a href="#approach" className="text-white block px-3 py-2">Our Approach</a>
            <a href="#contact" className="text-white block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;