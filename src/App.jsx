import HeroSection from './section/HeroSection';
import Navbar from './components/Navbar';
import ServiceSection from './section/ServiceSection';
import ProjectSection from './section/ProjectSection';
import ClientSection from './section/ClientSection';
import AboutSection from './section/AboutSection';
import TestimonialSection from './section/TestimonialSection';

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <ClientSection />
      <AboutSection />
      <TestimonialSection />
      <section>Blog</section>
      <section>Contact</section>
    </main>
  );
}

export default App;
