import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section>Service</section>
      <section>Project</section>
      <section>Client</section>
      <section>Testimonial</section>
      <section>Blog</section>
      <section>Contact</section>
    </main>
  );
}

export default App;
