import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <MenuHighlights />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
