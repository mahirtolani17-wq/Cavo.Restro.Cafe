import { motion } from 'motion/react';
import { Disc, Zap, Flame } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cave-950/50"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fire-glow/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cave-700/50 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight mb-6 text-stone-200">
              Our <span className="fire-glow-text font-medium italic">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
              Born from the earth. Designed for the elite. Cavo is more than a destination; it's a frequency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="stone-panel p-2 rounded-[1.5rem]">
                <img
                  src="/images/1297fe39d4d78619c7901d0f700c901d.jpg"
                  alt="Cave Inspiration"
                  className="w-full h-full object-cover rounded-[1rem] opacity-90 hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-8 text-stone-200">
                The <span className="fire-glow-text font-medium italic">Inspiration</span>
              </h2>
              <div className="space-y-6 text-stone-400 text-lg leading-relaxed font-light">
                <p>
                  Cavo draws its essence from the raw, primal energy of subterranean caves combined with the pulsating life of modern lounge culture. We wanted to create a space that feels hidden, organic, and entirely immersive.
                </p>
                <p>
                  Every texture, from the rough-hewn stone walls to the warm amber lighting, is designed to contrast and complement. The firelight mimics ancient gatherings, guiding you through an auditory and culinary journey.
                </p>
                <p>
                  It's a sanctuary where the outside world fades away, replaced by deep basslines, clinking glasses, and unforgettable flavors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-4 text-stone-200">
              Experience <span className="fire-glow-text font-medium italic">Philosophy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sonic Curation', desc: 'State-of-the-art acoustics and resident DJs spinning deep house, techno, and ambient beats.', icon: <Disc size={32} className="text-fire-glow" /> },
              { title: 'Culinary Alchemy', desc: 'A menu designed to surprise. Earthy flavors reimagined with modern techniques and bold presentations.', icon: <Flame size={32} className="text-fire-glow" /> },
              { title: 'Fluid Vibe', desc: 'An atmosphere that shifts from relaxed dining to high-energy nightlife as the evening progresses.', icon: <Zap size={32} className="text-fire-glow" /> }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="stone-panel p-10 rounded-[1.5rem] flex flex-col items-center text-center gap-6 hover:bg-stone-800/80 hover:border-fire-glow/30 transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-full stone-panel flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200">{pillar.title}</h3>
                <p className="text-stone-400 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-4 text-stone-200">
              The <span className="fire-glow-text font-medium italic">Journey</span>
            </h2>
          </div>

          <div className="relative border-l border-fire-glow/20 ml-4 md:ml-1/2 md:-translate-x-[1px] space-y-20">
            {/* Event 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right"
            >
              <div className="absolute left-0 md:right-0 md:left-auto top-0 w-4 h-4 bg-fire-glow rounded-full -translate-x-[8px] md:translate-x-[8px] fire-glow-box"></div>
              <h4 className="text-fire-glow font-medium tracking-widest uppercase mb-2">2024</h4>
              <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200 mb-4">The Genesis</h3>
              <p className="text-stone-400 font-light">
                Cavo Ahmedabad opens its doors, introducing the city to a new standard of nightlife and dining fusion within a modern cave setting.
              </p>
            </motion.div>

            {/* Event 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 md:pl-12 md:w-1/2 md:ml-auto"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-stone-500/50 rounded-full -translate-x-[8px] border border-fire-glow/50"></div>
              <h4 className="text-stone-400 font-medium tracking-widest uppercase mb-2">Coming Soon</h4>
              <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200 mb-4">Expansion</h3>
              <p className="text-stone-400 font-light">
                Bringing the vibe to Mehsana. A new location, the same unforgettable energy and earthy architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

