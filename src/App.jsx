import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurApproach from './components/OurApproach';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Projects />
      <OurApproach />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default App;










