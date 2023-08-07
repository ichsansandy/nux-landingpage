import HeroSection from './section/HeroSection';
import Navbar from './components/Navbar';
import ServiceSection from './section/ServiceSection';

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <section>Project</section>
      <section>Client</section>
      <section>Testimonial</section>
      <section>Blog</section>
      <section>Contact</section>
    </main>
  );
}

export default App;
