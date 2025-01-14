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
    <div id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#021228] sm:text-4xl">
            Our Approach
          </h2>
          <p className="mt-4 text-xl text-navy-700">
          We take a collaborative approach to app development. From the initial consultation to post-launch support, we work closely with you to understand your goals and target audience. Our agile development process allows for flexibility and adaptability, ensuring that your app evolves with your needs.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#021228]">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-[#021228]">{step.title}</h3>
                  <p className="mt-2 text-sm text-navy-700">{step.description}</p>
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