import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';

export default function Locations() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cave-950/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight mb-6 text-stone-200">
              Find <span className="fire-glow-text font-medium italic">Cavo</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
              Discover our current and upcoming locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Ahmedabad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="stone-panel rounded-[2rem] p-3"
            >
              <div className="aspect-[16/9] relative rounded-[1.5rem] overflow-hidden">
                <img src="/images/80ba7bf91e2c93bb9a400ce308759033.jpg" alt="Ahmedabad Location" className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cave-950 to-transparent"></div>
                <div className="absolute top-6 left-6 flex items-center gap-2 stone-panel px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Open Now</span>
                </div>
              </div>
              <div className="p-10">
                <h2 className="text-4xl font-display font-medium uppercase tracking-wider text-stone-200 mb-4">Ahmedabad</h2>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed font-light">
                  Our flagship location. A sprawling cave-inspired lounge featuring multiple VIP sections, a state-of-the-art DJ booth, and an immersive dining experience.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full stone-panel flex items-center justify-center text-fire-glow shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium uppercase tracking-widest text-sm mb-1">Address</h4>
                      <p className="text-stone-400 font-light">Sindhu Bhavan Road, Bodakdev,<br />Ahmedabad, Gujarat 380054</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full stone-panel flex items-center justify-center text-fire-glow shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium uppercase tracking-widest text-sm mb-1">Reservations</h4>
                      <a href="tel:09265723990" className="text-stone-400 hover:text-stone-200 transition-colors font-light">09265723990</a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="tel:09265723990" className="flex-1 text-center px-6 py-4 bg-fire-base text-white font-medium tracking-widest uppercase rounded-2xl hover:bg-fire-glow transition-colors">
                    Call to Book
                  </a>
                  <a href="https://share.google/5QgtBXzjBWPgXGBnM" target="_blank" rel="noreferrer" className="flex-1 text-center px-6 py-4 stone-panel text-stone-200 font-medium tracking-widest uppercase rounded-2xl hover:border-fire-glow/50 hover:text-fire-glow transition-colors flex items-center justify-center gap-2">
                    Directions <ExternalLink size={16} />
                  </a>
                </div>

                <div className="w-full h-48 rounded-2xl overflow-hidden stone-panel p-1">
                  <iframe 
                    src="https://maps.google.com/maps?q=Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad,+Gujarat+380054&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '1rem' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map for Cavo Ahmedabad"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Mehsana */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="stone-panel rounded-[2rem] p-3 relative"
            >
              <div className="aspect-[16/9] relative rounded-[1.5rem] overflow-hidden">
                <img src="/images/1297fe39d4d78619c7901d0f700c901d.jpg" alt="Mehsana Location" className="w-full h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cave-950 to-transparent"></div>
                <div className="absolute top-6 left-6 flex items-center gap-2 stone-panel px-4 py-2 rounded-full z-20">
                  <span className="w-2 h-2 rounded-full bg-fire-glow animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-fire-glow font-medium">Coming Soon</span>
                </div>
              </div>
              <div className="p-10 relative z-20">
                <h2 className="text-4xl font-display font-medium uppercase tracking-wider text-stone-200 mb-4">Mehsana</h2>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed font-light">
                  The Cavo experience is expanding. Get ready for a new era of nightlife and dining in Mehsana. Stay tuned for our grand opening announcements.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full stone-panel flex items-center justify-center text-fire-glow shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium uppercase tracking-widest text-sm mb-1">Location</h4>
                      <p className="text-stone-400 font-light">Mehsana, Gujarat<br />(Exact location revealing soon)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full stone-panel flex items-center justify-center text-fire-glow shrink-0">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <h4 className="text-stone-200 font-medium uppercase tracking-widest text-sm mb-1">Follow Updates</h4>
                      <a href="https://www.instagram.com/cafecavo.mehsana?igsh=NTh1cXUzdDd2aHN5" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-fire-glow transition-colors font-light">@cafecavo.mehsana</a>
                    </div>
                  </div>
                </div>

                <a href="https://www.instagram.com/cafecavo.mehsana?igsh=NTh1cXUzdDd2aHN5" target="_blank" rel="noreferrer" className="block w-full text-center px-6 py-4 stone-panel text-fire-glow font-medium tracking-widest uppercase rounded-2xl hover:border-fire-glow/50 hover:text-fire-glow transition-colors">
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
