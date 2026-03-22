import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Events', path: '/events' },
    { name: 'Locations', path: '/locations' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'stone-panel py-3 px-6' : ''}`}>
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="font-display text-2xl font-bold tracking-widest text-fire-light fire-glow-text uppercase">
            Cavo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-fire-glow ${
                location.pathname === link.path ? 'text-fire-glow font-medium' : 'text-stone-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="px-6 py-2 rounded-full border border-fire-glow/30 text-fire-glow hover:bg-fire-glow hover:text-cave-950 transition-all duration-300 text-sm uppercase tracking-widest font-medium"
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-stone-200 hover:text-fire-glow transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-cave-950/90 z-40 flex flex-col items-center justify-center gap-8 border-b border-fire-glow/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-display tracking-widest uppercase ${
                  location.pathname === link.path ? 'text-fire-glow fire-glow-text' : 'text-stone-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-fire-glow/10 border border-fire-glow/30 text-fire-glow font-medium tracking-widest uppercase"
            >
              Reserve Now
            </Link>
            <a
              href="tel:09265723990"
              className="flex items-center gap-2 text-stone-400 mt-8 hover:text-fire-glow transition-colors"
            >
              <Phone size={18} />
              <span>09265723990</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

