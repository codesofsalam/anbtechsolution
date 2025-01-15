import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#021228]">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <img src="logo.png" className="h-8 w-auto mt-2" alt="" />
            <p className="mt-3 md:mt-4 text-gray-300 text-sm md:text-base">
              Your Partner for Trusted Solutions in the Digital Age
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-base md:text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="mt-3 md:mt-4 space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm md:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm md:text-base"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm md:text-base"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm md:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-base md:text-lg font-semibold">
              Connect With Us
            </h3>
            <div className="mt-3 md:mt-4 flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/company/anb-tech-solutions/"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/18GBjciTFb/"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.instagram.com/anb.techsolutions?utm_source=qr&igsh=dGJ4eTFtZmFsbHFk"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 border-t border-gray-700 pt-6 md:pt-8">
          <p className="text-gray-300 text-center text-sm md:text-base">
            © {new Date().getFullYear()} ANB Tech Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
