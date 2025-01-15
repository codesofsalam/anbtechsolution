import PropTypes from "prop-types";
import {
  Smartphone,
  Globe,
  TrendingUp,
  ShoppingCart,
  Pen,
  Box,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, backgroundImage }) => (
  <div className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-navy-700 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
    <div className="relative z-10">
      <div className="inline-block p-3 bg-white rounded-lg">
        <Icon className="h-6 w-6 text-[#021228]" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 font-semibold text-gray-100">{description}</p>
    </div>
  </div>
);

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

const WhyChooseUs = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Our expert team ensures seamless user experiences with innovative features. From concept to launch, we prioritize performance and design. Stay ahead in a mobile-first world with our cutting-edge solutions.",
      backgroundImage: "/mobapp.jpg",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Create a stunning online presence with our custom website development services. User-friendly sites for all devices and platforms. Our focus on functionality and aesthetics that your brand stands out.",
      backgroundImage: "/web.jpg",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "We utilize SEO, social media, and content marketing to drive traffic and engagement. Our data-driven approach ensures measurable results and continuous improvement. Grow your brand online.",
      backgroundImage: "/seo.jpg",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "From payment integration to inventory management, we handle it all. We design and develop secure, scalable platforms that enhance customer shopping experiences.",
      backgroundImage: "/E-commerce.jpg",
    },
    {
      icon: Pen,
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user interfaces that captivate your audience. Ensuring your app works seamlessly across various devices and operating systems.",
      backgroundImage: "/UIUX.png",
    },
    {
      icon: Box,
      title: "Application Solutions",
      description:
        "Providing ongoing support and updates to keep your app running smoothly. Tailored solutions to meet your specific business requirements. Earning the trust of our clients.",
      backgroundImage: "/apsol.jpg",
    },
  ];

  return (
    <div id="services" className="py-24 bg-[#021228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl ">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive solutions to drive your business forward
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
