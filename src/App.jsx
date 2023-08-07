import HeroSection from './section/HeroSection';
import Navbar from './components/Navbar';
import ServiceSection from './section/ServiceSection';
import ProjectSection from './section/ProjectSection';

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <section>Client</section>
      <section>Testimonial</section>
      <section>Blog</section>
      <section>Contact</section>
    </main>
  );
}

export default App;
