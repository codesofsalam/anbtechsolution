import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Modern Website Design",
      description: "A responsive website built with React and Tailwind CSS",
      thumbnail: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      thumbnail: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Cross-platform mobile application built with React Native",
      thumbnail: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects[currentProject].images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects[currentProject].images.length) % projects[currentProject].images.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        
        {/* Projects Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prevProject}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-6 overflow-hidden w-full max-w-4xl">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-300 ${
                    index === currentProject ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
                  }`}
                  style={{
                    transform: `translateX(-${currentProject * 100}%)`,
                    flex: '0 0 100%'
                  }}
                >
                  <div 
                    className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(true);
                      setCurrentImage(0);
                    }}
                  >
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={nextProject}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-10 p-2 bg-white rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={projects[currentProject].images[currentImage]}
                    alt={`${projects[currentProject].title} - Image ${currentImage + 1}`}
                    className="w-full h-96 object-cover"
                  />
                  
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-600">
                    {projects[currentProject].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;