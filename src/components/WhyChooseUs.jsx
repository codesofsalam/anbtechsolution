// src/components/WhyChooseUs.jsx
import React from 'react';
import { Smartphone, Globe, TrendingUp, ShoppingCart, Pen, Box } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-navy-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-navy-700">
    <div className="inline-block p-3 bg-blue-500 rounded-lg">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom mobile applications that deliver exceptional user experiences across all platforms."
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive and scalable websites that help your business establish a strong online presence."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to boost your brand visibility and drive growth."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "End-to-end e-commerce solutions that help you sell products and services online effectively."
    },
    {
      icon: Pen,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences."
    },
    {
      icon: Box,
      title: "Application Solutions",
      description: "Custom software solutions tailored to meet your specific business requirements."
    }
  ];

  return (
    <div id="services" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
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