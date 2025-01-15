import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "C&S Limousine Service",
      thumbnail: "/limousine.PNG",
      images: [
        "/limousine-full.png",
        "/limousine-full2.png",
        "/limousine-full3.png",
      ],
    },
    {
      id: 2,
      title: "OIB-Online Islamic Book App",
      thumbnail: "/oib.PNG",
      images: ["/oib2.jpg", "/oib3.jpg", "/oib4.jpg"],
    },
    {
      id: 3,
      title: "Salah Tracker",
      thumbnail: "/salahtrackerthumbnail.jpg",
      video: "/salahtracker.mp4",
      images: [
        "/salahtracker2.jpg",
        "/salahtracker3.jpg",
        "/salahtracker4.jpg",
      ],
    },
  ];

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % projects[currentProject].images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + projects[currentProject].images.length) %
        projects[currentProject].images.length
    );
  };

  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(nextProject, 5000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, currentProject, nextProject]);

  return (
    <section className="py-8 md:py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-[#021228] font-bold text-center mb-8 md:mb-12 font-cardo">
          Projects
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <button
              onClick={prevProject}
              className="p-1 md:p-2 rounded-full bg-[#021228] shadow-lg"
            >
              <ChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
            </button>

            <div className="flex gap-4 md:gap-6 overflow-hidden w-full max-w-4xl">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-300 ${
                    index === currentProject
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-50"
                  }`}
                  style={{
                    transform: `translateX(-${currentProject * 100}%)`,
                    flex: "0 0 100%",
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
                      className="w-full h-48 md:h-96 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-1 md:p-2 rounded-full bg-[#021228] shadow-lg"
            >
              <ChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-2 md:right-6 top-2 md:top-6 z-50 p-2 md:p-3 bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
              >
                <X className="w-4 h-4 md:w-6 md:h-6 text-black" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden relative">
                <div className="relative overflow-auto max-h-[80vh] md:max-h-screen flex flex-col items-center">
                  {projects[currentProject].video && (
                    <div className="relative w-full max-w-4xl mx-auto mb-4">
                      <video
                        src={projects[currentProject].video}
                        controls
                        className="w-full h-auto max-h-[40vh] md:max-h-[50vh] mx-auto"
                        autoPlay
                      />
                    </div>
                  )}

                  <div className="relative w-full max-w-4xl mx-auto">
                    <img
                      src={projects[currentProject].images[currentImage]}
                      alt={`${projects[currentProject].title} - Image ${
                        currentImage + 1
                      }`}
                      className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain mx-auto"
                    />

                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 bg-white rounded-full shadow-lg hover:bg-gray-200"
                    >
                      <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                  </div>
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
