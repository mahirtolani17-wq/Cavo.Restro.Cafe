import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Coffee, Flame, Star, MapPin } from 'lucide-react';

const menuData = {
  Starters: [
    { name: 'Truffle Edamame', desc: 'Steamed edamame tossed in truffle oil and sea salt.', price: '₹450' },
    { name: 'Crispy Lotus Stem', desc: 'Honey chili glaze, sesame seeds, spring onion.', price: '₹550' },
    { name: 'Charcoal Bao', desc: 'Activated charcoal buns, pulled jackfruit, spicy mayo.', price: '₹650' },
    { name: 'Stone-Baked Brie', desc: 'Warm brie, fig jam, artisan crackers.', price: '₹850' },
  ],
  'Main Course': [
    { name: 'Smoked Risotto', desc: 'Wild mushroom risotto served under a smoke cloche.', price: '₹950' },
    { name: 'Cavo Signature Pasta', desc: 'Handmade fettuccine, black garlic cream, parmesan crisp.', price: '₹850' },
    { name: 'Miso Glazed Eggplant', desc: 'Roasted eggplant, sweet miso, toasted sesame, sticky rice.', price: '₹750' },
    { name: 'Pan-Seared Tofu Steak', desc: 'Silken tofu, ginger soy glaze, wok-tossed greens.', price: '₹800' },
  ],
  Beverages: [
    { name: 'Liquid Gold', desc: 'Saffron infused gin alternative, tonic, edible gold dust.', price: '₹450' },
    { name: 'Cave Water', desc: 'Charcoal filtered water, cucumber, mint, lime.', price: '₹250' },
    { name: 'Smoked Old Fashioned', desc: 'Zero-proof whiskey alternative, smoked hickory, orange peel.', price: '₹550' },
    { name: 'Matcha Mojito', desc: 'Ceremonial matcha, fresh mint, lime, cane sugar.', price: '₹450' },
  ],
  Specials: [
    { name: 'The DJ Platter', desc: 'Assortment of our best starters, perfect for sharing.', price: '₹1800' },
    { name: 'Liquid Nitrogen Dessert', desc: 'Dark chocolate dome shattered at the table, berry compote.', price: '₹950' },
    { name: 'Gold Leaf Burger', desc: 'Beyond meat patty, truffle mayo, 24k gold leaf bun.', price: '₹1200' },
  ]
};

const categories = [
  { id: 'Starters', icon: <Flame size={18} /> },
  { id: 'Main Course', icon: <Utensils size={18} /> },
  { id: 'Beverages', icon: <Coffee size={18} /> },
  { id: 'Specials', icon: <Star size={18} /> },
];

export default function Menu() {
  const [activeLocation, setActiveLocation] = useState('Ahmedabad');
  const [activeCategory, setActiveCategory] = useState('Starters');

  return (
    <div className="w-full pt-32 pb-24 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight mb-6 text-stone-200"
          >
            Our <span className="fire-glow-text font-medium italic">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-stone-400 font-light max-w-2xl mx-auto"
          >
            A culinary journey designed to excite the senses.
          </motion.p>
        </div>

        {/* Location Toggle */}
        <div className="flex justify-center mb-16">
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

        {activeLocation === 'Ahmedabad' ? (
          <>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-display uppercase tracking-widest text-sm transition-all duration-500 ${
                activeCategory === cat.id
                  ? 'bg-fire-base text-white font-medium shadow-[0_0_15px_rgba(255,107,53,0.4)]'
                  : 'stone-panel text-stone-400 hover:text-stone-200 hover:border-fire-glow/30'
              }`}
            >
              {cat.icon}
              {cat.id}
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
                <div
                  key={idx}
                  className="stone-panel p-8 rounded-[1.5rem] flex flex-col justify-between transition-all duration-500 hover:bg-stone-800/80 hover:border-fire-glow/30"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-display font-medium uppercase tracking-wider text-stone-200">{item.name}</h3>
                      <span className="text-xl font-medium text-fire-glow">{item.price}</span>
                    </div>
                    <p className="text-stone-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="stone-panel rounded-[2rem] p-16 text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto bg-fire-base/10 rounded-full flex items-center justify-center mb-6 text-fire-glow">
              <Utensils size={40} />
            </div>
            <h2 className="text-4xl font-display font-medium uppercase tracking-wider text-stone-200 mb-4">Coming Soon</h2>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              Our culinary team is crafting an exclusive menu for the Mehsana location. Stay tuned for a dining experience like no other.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
