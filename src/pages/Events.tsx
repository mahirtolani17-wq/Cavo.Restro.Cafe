import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Calendar } from 'lucide-react';

const pastEvents = [
  {
    title: 'Deep Cave Sessions Vol. 1',
    date: 'March 15, 2026',
    img: '/images/78180a04eb3d0117a0aaeb09df0d846d.jpg',
  },
  {
    title: 'Ember Nights Special',
    date: 'March 10, 2026',
    img: '/images/ec29c594a71482d7970ac6322dee525b.jpg',
  },
  {
    title: 'Sundowner Flow',
    date: 'March 05, 2026',
    img: '/images/7143ee4f46a0788e7f2a8bfceaea1d66.jpg',
  },
  {
    title: 'The Grand Opening',
    date: 'February 28, 2026',
    img: '/images/80ba7bf91e2c93bb9a400ce308759033.jpg',
  },
  {
    title: 'Acoustic Cave',
    date: 'February 20, 2026',
    img: '/images/1297fe39d4d78619c7901d0f700c901d.jpg',
  },
  {
    title: 'Midnight Rituals',
    date: 'February 14, 2026',
    img: '/images/2f7932f383a2a8d57538f94e7106feec.jpg',
  }
];

export default function Events() {
  const [activeLocation, setActiveLocation] = useState('Ahmedabad');

  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cave-950/80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fire-base/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight mb-6 text-stone-200">
              Cave <span className="fire-glow-text font-medium italic">Chronicles</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
              Echoes of unforgettable nights. Witness the history of our sanctuary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Toggle */}
      <section className="relative z-10 -mt-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="stone-panel p-1 rounded-full inline-flex">
            {['Ahmedabad', 'Mehsana'].map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-500 ${
                  activeLocation === loc
                    ? 'bg-fire-base text-white font-medium shadow-[0_0_15px_rgba(255,107,53,0.4)]'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <MapPin size={16} />
                {loc}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeLocation === 'Ahmedabad' ? (
        <>
          {/* Previous Events Gallery */}
          <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-4 text-stone-200">
              Previous <span className="fire-glow-text font-medium italic">Events</span>
            </h2>
            <div className="w-24 h-1 bg-fire-glow/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative rounded-[1.5rem] overflow-hidden stone-panel p-2"
              >
                <div className="relative aspect-[4/5] rounded-[1rem] overflow-hidden">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cave-950 via-cave-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-fire-glow text-xs font-medium uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <Sparkles size={14} />
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200 mb-2 drop-shadow-lg">{event.title}</h3>
                    <div className="w-0 h-[1px] bg-fire-glow group-hover:w-12 transition-all duration-500 delay-200"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Parties */}
      <section className="py-32 relative z-10 border-t border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-light uppercase tracking-wider mb-6 leading-tight text-stone-200">
                Host Your<br />
                <span className="fire-glow-text font-medium italic">Celebration</span>
              </h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed font-light">
                Looking for an exclusive venue for your next private party, corporate event, or birthday bash? Cavo offers dedicated spaces, custom menus, and personalized DJ services to make your event unforgettable.
              </p>
              <ul className="space-y-4 mb-10">
                {['VIP Cave Sections', 'Customized Food & Beverage Packages', 'Dedicated Service Staff', 'Audio/Visual Setup Available'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-300 font-light">
                    <div className="w-2 h-2 rounded-full bg-fire-glow"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:09265723990" className="inline-block px-8 py-4 bg-fire-base text-white font-medium tracking-widest uppercase rounded-2xl hover:bg-fire-glow transition-colors shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]">
                Inquire Now
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="stone-panel p-2 rounded-[1.5rem]">
                <img src="/images/80ba7bf91e2c93bb9a400ce308759033.jpg" alt="Party 1" className="w-full h-64 object-cover rounded-[1rem] opacity-90" referrerPolicy="no-referrer" />
              </div>
              <div className="stone-panel p-2 rounded-[1.5rem] translate-y-12">
                <img src="/images/2f7932f383a2a8d57538f94e7106feec.jpg" alt="Party 2" className="w-full h-64 object-cover rounded-[1rem] opacity-90" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        </>
      ) : (
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="stone-panel rounded-[2rem] p-16 text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 mx-auto bg-fire-base/10 rounded-full flex items-center justify-center mb-6 text-fire-glow">
                <Calendar size={40} />
              </div>
              <h2 className="text-4xl font-display font-medium uppercase tracking-wider text-stone-200 mb-4">Coming Soon</h2>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Get ready for unforgettable nights. We are preparing an incredible lineup of events for our Mehsana location.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
