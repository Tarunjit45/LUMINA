import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChefHat } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-gold/10 p-2 rounded-full group-hover:bg-gold/20 transition-colors">
            <ChefHat className="w-6 h-6 text-gold" />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-charcoal' : 'text-white'}`}>
            Lumina
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                scrolled ? 'text-charcoal/80' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
              scrolled 
                ? 'bg-charcoal text-white hover:bg-gold hover:text-white' 
                : 'bg-white text-charcoal hover:bg-gold hover:text-white'
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-charcoal' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white shadow-xl p-6 pt-24 md:hidden flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-serif font-medium text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-charcoal text-white py-3 rounded-lg text-center font-medium hover:bg-gold transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
