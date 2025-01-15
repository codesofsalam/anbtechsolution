const Hero = () => {
  return (
    <div
      id="home"
      className="relative pt-16 bg-[#021228] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.PNG')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl font-cardo">
            <span className="block">Your Partner for Trusted Solutions</span>
            <span className="block text-white">in the Digital Age</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            As a leading digital services provider, we specialize in crafting
            custom mobile apps for iOS and Android, along with tailored
            marketing strategies, e-commerce solutions, and innovative UI/UX
            design. Our expertise ensures your digital projects stand out,
            driving growth and engagement across platforms.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#021228] bg-white transition-colors md:py-3 md:text-lg md:px-8"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
