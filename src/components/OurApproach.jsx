import React from 'react';
import { CheckCircle } from 'lucide-react';

const OurApproach = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We begin by understanding your business needs, goals, and challenges through in-depth consultation."
    },
    {
      title: "Strategy",
      description: "Our team develops a comprehensive strategy tailored to your specific requirements and objectives."
    },
    {
      title: "Development",
      description: "We implement the solution using cutting-edge technologies and best practices in development."
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your solution meets the highest standards of quality and performance."
    },
    {
      title: "Deployment",
      description: "We carefully launch your solution and provide comprehensive training and support."
    }
  ];

  return (
    <div id="approach" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Approach
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            A systematic approach to delivering exceptional results
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                    <CheckCircle className="w-6 h-6 text-navy-900" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;