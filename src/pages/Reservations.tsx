import { motion } from 'motion/react';
import { Phone, Calendar, Clock, Users, MapPin } from 'lucide-react';

export default function Reservations() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="stone-panel rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fire-glow to-transparent opacity-50"></div>
          
          <h1 className="text-4xl md:text-6xl font-display font-light uppercase tracking-tight mb-6 text-stone-200">
            Reserve Your <span className="fire-glow-text font-medium italic">Vibe</span>
          </h1>
          
          <p className="text-xl text-stone-300 font-light mb-12 max-w-2xl mx-auto">
            Limited seating available. Secure your table in advance to ensure entry to the ultimate dining and nightlife experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Call to Book */}
            <a
              href="tel:09265723990"
              className="group relative flex flex-col items-center justify-center p-10 rounded-[1.5rem] stone-panel hover:bg-stone-800/80 hover:border-fire-glow/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-fire-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="w-20 h-20 rounded-full bg-fire-base flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,107,53,0.4)]">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200 mb-2">Call Now</h3>
              <p className="text-stone-400 mb-4 font-light">Immediate confirmation</p>
              <span className="text-fire-glow font-medium tracking-widest text-lg">09265723990</span>
            </a>

            {/* Online Booking */}
            <a
              href="#"
              className="group relative flex flex-col items-center justify-center p-10 rounded-[1.5rem] stone-panel hover:bg-stone-800/80 hover:border-fire-glow/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-fire-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="w-20 h-20 rounded-full stone-panel flex items-center justify-center text-fire-glow mb-6 group-hover:scale-110 transition-transform duration-500">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200 mb-2">Book Online</h3>
              <p className="text-stone-400 mb-4 font-light">Via District App</p>
              <span className="text-fire-glow font-medium tracking-widest text-lg uppercase">Select Date & Time</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-stone-800/50 pt-10">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-fire-glow shrink-0 mt-1" />
              <div>
                <h4 className="text-stone-200 font-medium uppercase tracking-widest text-xs mb-1">Location</h4>
                <p className="text-stone-400 text-sm font-light">Ahmedabad (Open)<br/>Mehsana (Coming Soon)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-fire-glow shrink-0 mt-1" />
              <div>
                <h4 className="text-stone-200 font-medium uppercase tracking-widest text-xs mb-1">Hours</h4>
                <p className="text-stone-400 text-sm font-light">Mon-Sun: 7 PM - Late</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={20} className="text-fire-glow shrink-0 mt-1" />
              <div>
                <h4 className="text-stone-200 font-medium uppercase tracking-widest text-xs mb-1">Large Groups</h4>
                <p className="text-stone-400 text-sm font-light">For parties 10+, please call directly.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
