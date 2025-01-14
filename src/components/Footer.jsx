import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#021228]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h2 className="text-white text-xl font-bold">ANB Tech Solutions</h2>
            <p className="mt-4 text-gray-300">
              Your Partner for Trusted Solutions in the Digital Age
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/anb-tech-solutions/"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/18GBjciTFb/"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/anb.techsolutions?utm_source=qr&igsh=dGJ4eTFtZmFsbHFk"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} ANB Tech Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
