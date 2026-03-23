import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, MapPin, Music, Utensils, GlassWater } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cave-950/80 via-cave-950/40 to-cave-950 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,8,7,0.9)_100%)] z-10"></div>
          <img
            src="/images/80ba7bf91e2c93bb9a400ce308759033.jpg"
            alt="Old Cave Interior"
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_15s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight uppercase mb-6 text-stone-200"
          >
            Enter The <span className="fire-glow-text font-medium italic">Cave</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-stone-300 font-light mb-12 tracking-wide"
          >
            A Timeless Sanctuary of Taste & Sound
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <a
              href="tel:09265723990"
              className="group relative px-8 py-4 stone-panel text-stone-200 font-medium tracking-widest uppercase overflow-hidden flex items-center gap-3 transition-all hover:bg-stone-800/80 hover:border-fire-glow/50 w-full sm:w-auto justify-center"
            >
              <Phone size={20} className="text-fire-glow" />
              <span>Call Now</span>
            </a>
            
            <Link
              to="/reservations"
              className="group relative px-8 py-4 bg-fire-base text-white font-medium tracking-widest uppercase overflow-hidden flex items-center gap-3 transition-all hover:bg-fire-glow w-full sm:w-auto justify-center rounded-2xl"
            >
              <Calendar size={20} className="text-white transition-colors" />
              <span>Book Table</span>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-stone-400">Descend</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-fire-glow to-transparent opacity-50"></div>
        </motion.div>
      </section>

      {/* Vibe Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-6 text-stone-200">
              Earthy <span className="fire-glow-text font-medium italic">Energy</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light text-lg">
              Rough stone meets modern luxury. A sensory journey through fire, flavor, and atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Acoustic Resonance', img: '/images/1297fe39d4d78619c7901d0f700c901d.jpg', icon: <Music size={24} /> },
              { title: 'Earthy Flavors', img: '/images/78180a04eb3d0117a0aaeb09df0d846d.jpg', icon: <Utensils size={24} /> },
              { title: 'Liquid Spirits', img: '/images/ec29c594a71482d7970ac6322dee525b.jpg', icon: <GlassWater size={24} /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative aspect-[3/4] rounded-[1.5rem] overflow-hidden cursor-pointer stone-panel p-2"
              >
                <div className="w-full h-full rounded-[1rem] overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cave-950 via-cave-950/40 to-transparent opacity-90"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-full stone-panel flex items-center justify-center text-fire-glow mb-6 group-hover:bg-fire-glow group-hover:text-cave-950 transition-colors duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experience */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-wider mb-8 leading-tight text-stone-200">
                The Ancient<br />
                <span className="fire-glow-text font-medium italic">Sanctuary</span>
              </h2>
              <p className="text-stone-400 text-lg mb-10 leading-relaxed font-light">
                Step into an underground haven where premium dining seamlessly transitions into high-energy nightlife. Our cave-inspired architecture, combined with warm firelight aesthetics and state-of-the-art sound, creates an unparalleled atmosphere.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 text-stone-200 font-medium tracking-widest uppercase hover:text-fire-glow transition-colors group">
                Discover Our Story
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="stone-panel p-8 rounded-[1.5rem] flex flex-col items-center text-center gap-4 hover:bg-stone-800/80 hover:border-fire-glow/30 transition-colors"
              >
                <Utensils size={32} className="text-fire-glow" />
                <h4 className="font-display font-medium uppercase tracking-wider text-stone-200">Dining</h4>
                <p className="text-sm text-stone-400 font-light">Curated global cuisine with an earthy, modern twist.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="stone-panel p-8 rounded-[1.5rem] flex flex-col items-center text-center gap-4 hover:bg-stone-800/80 hover:border-fire-glow/30 transition-colors translate-y-12"
              >
                <Music size={32} className="text-fire-glow" />
                <h4 className="font-display font-medium uppercase tracking-wider text-stone-200">DJ Nights</h4>
                <p className="text-sm text-stone-400 font-light">Underground beats and a fluid, electric atmosphere.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-4 text-stone-200">
                Our <span className="fire-glow-text font-medium italic">Locations</span>
              </h2>
              <p className="text-stone-400 max-w-xl font-light">
                Find your nearest Cavo experience.
              </p>
            </div>
            <Link to="/locations" className="inline-flex items-center gap-3 text-stone-200 font-medium tracking-widest uppercase hover:text-fire-glow transition-colors group">
              View All Locations
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ahmedabad */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="stone-panel p-2 rounded-[1.5rem] group"
            >
              <div className="relative rounded-[1rem] overflow-hidden aspect-[16/9]">
                <img src="/images/7143ee4f46a0788e7f2a8bfceaea1d66.jpg" alt="Ahmedabad Location" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cave-950 via-cave-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Open Now</span>
                      </div>
                      <h3 className="text-3xl font-display font-medium uppercase tracking-wider text-stone-200 mb-2">Ahmedabad</h3>
                      <p className="text-stone-300 text-sm flex items-center gap-2 font-light">
                        <MapPin size={14} className="text-fire-glow" /> Sindhu Bhavan Road
                      </p>
                    </div>
                    <a href="https://share.google/5QgtBXzjBWPgXGBnM" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full stone-panel flex items-center justify-center text-fire-glow hover:bg-fire-glow hover:text-cave-950 transition-colors">
                      <MapPin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mehsana */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="stone-panel p-2 rounded-[1.5rem] group"
            >
              <div className="relative rounded-[1rem] overflow-hidden aspect-[16/9]">
                <img src="/images/2f7932f383a2a8d57538f94e7106feec.jpg" alt="Mehsana Location" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cave-950 via-cave-950/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-fire-glow animate-pulse"></span>
                        <span className="text-xs uppercase tracking-widest text-fire-glow font-medium">Coming Soon</span>
                      </div>
                      <h3 className="text-3xl font-display font-medium uppercase tracking-wider text-stone-200 mb-2">Mehsana</h3>
                      <p className="text-stone-300 text-sm flex items-center gap-2 font-light">
                        <MapPin size={14} className="text-fire-glow" /> Opening 2026
                      </p>
                    </div>
                    <a href="https://www.instagram.com/cafecavo.mehsana?igsh=NTh1cXUzdDd2aHN5" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full stone-panel text-fire-glow text-xs uppercase tracking-widest font-medium hover:bg-fire-glow hover:text-cave-950 transition-colors">
                      Updates
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
