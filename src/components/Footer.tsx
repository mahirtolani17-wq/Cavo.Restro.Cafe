import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cave-900 border-t border-white/5 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold tracking-widest text-white ambient-glow-text uppercase">
                Cavo
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Where dining meets nightlife. Enter the vibe of Cavo, a premium modern cave lounge and luxury restro fusion.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-gray-400 hover:text-amber-glow hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:info@cavo.com" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-gray-400 hover:text-amber-glow hover:bg-white/10 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase mb-6 text-sm font-medium">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Events', 'Locations'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-amber-glow transition-colors text-sm font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase mb-6 text-sm font-medium">Locations</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-amber-glow" /> Ahmedabad
                </h5>
                <p className="text-gray-400 text-sm mb-2 font-light">Open Now</p>
                <a href="tel:09265723990" className="text-gray-400 hover:text-amber-glow transition-colors text-sm flex items-center gap-2 font-light">
                  <Phone size={14} /> 09265723990
                </a>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-amber-glow" /> Mehsana
                </h5>
                <p className="text-amber-glow text-sm mb-2 font-light">Coming Soon</p>
                <a href="https://www.instagram.com/cafecavo.mehsana?igsh=NTh1cXUzdDd2aHN5" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-glow transition-colors text-sm flex items-center gap-2 font-light">
                  <Instagram size={14} /> @cafecavo.mehsana
                </a>
              </div>
            </div>
          </div>

          {/* Reservations */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase mb-6 text-sm font-medium">Reservations</h4>
            <p className="text-gray-400 text-sm mb-6 font-light">
              Limited seating available. Reserve your vibe in advance.
            </p>
            <Link
              to="/reservations"
              className="inline-block w-full text-center px-6 py-3 rounded-full liquid-glass text-amber-glow font-medium tracking-widest uppercase text-sm hover:bg-amber-glow hover:text-cave-900 transition-colors"
            >
              Book a Table
            </Link>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left font-light">
            &copy; {new Date().getFullYear()} Cavo Restro & Cafe. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-light">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
