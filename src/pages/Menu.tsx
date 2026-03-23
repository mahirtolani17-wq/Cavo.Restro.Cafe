import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Coffee, Flame, Star, MapPin, Pizza, Soup } from 'lucide-react';

const menuData = {
  'Appetizers & Soups': [
    { name: 'Tomato Jasmine Cappuccino', desc: 'Tomato soup fused with jasmine flavoured with cream froth', price: '₹290' },
    { name: 'Wild Mushroom Cappuccino', desc: 'Creamy mushroom soup topped with cream froth', price: '₹295' },
    { name: 'Crispy Garlic Lemongrass Soup', desc: 'Aromatic clear soup with garlic and lemongrass', price: '₹290' },
    { name: 'Gourmet Avocado Bruschetta', desc: 'Greek style avocado cream, pesto and cherry tomato', price: '₹490' },
    { name: 'Mezze Platter', desc: 'Hummus, sun-dried tomato, baba ganoush, served with pita', price: '₹620' },
    { name: 'Paneer Tikka (8 pcs)', desc: 'Chef\'s special seasoning and clay roasted', price: '₹510' },
    { name: 'Hara Bhara Cheese Kebab', desc: 'Spinach and cheese kebabs', price: '₹390' },
    { name: 'Nachos Grand', desc: 'Refried beans, jalapeno, sour cream, cheese', price: '₹350' },
    { name: 'Classic Cheese Fondue', desc: 'Melted cheese served with croutons and veggies', price: '₹440' },
    { name: 'Hungarian Cheese Fries', desc: 'French fries tossed in Hungarian spice and cheese', price: '₹290' }
  ],
  'Dim Sum & Bao': [
    { name: 'Vegetable Crystal Dim Sum', desc: 'Translucent dumplings filled with fresh veggies (6 pcs)', price: '₹590' },
    { name: 'Edamame Truffle Dim Sum', desc: 'Edamame and truffle infused dumplings (6 pcs)', price: '₹650' },
    { name: 'Creamy Mushroom Dim Sum', desc: 'Rich mushroom filled dumplings (6 pcs)', price: '₹690' },
    { name: 'Cheesy Mushroom Bao', desc: 'Soft steamed buns with cheesy mushroom filling (3 pcs)', price: '₹780' },
    { name: 'Chilli Potato Bao', desc: 'Spicy potato filled steamed buns (3 pcs)', price: '₹620' },
    { name: 'Classic Vegetable Bao', desc: 'Traditional vegetable filled steamed buns (3 pcs)', price: '₹640' }
  ],
  'Pasta & Pan Asian': [
    { name: 'Spicy Arrabbiata Pasta', desc: 'Homemade classic tomato sauce with chili flakes', price: '₹420' },
    { name: 'Wild Mushroom Spaghetti', desc: 'Mushroom sautéed to perfection with spaghetti cream sauce', price: '₹520' },
    { name: 'Exotic Vegetable Creamy Pesto Pasta', desc: 'Rich pesto sauce with exotic vegetables', price: '₹450' },
    { name: 'Burmese Khow Suey Curry', desc: 'Authentic Burmese coconut curry served with rice or noodles', price: '₹620' },
    { name: 'Thai Green Curry', desc: 'Served with Basil Steam Rice', price: '₹520' },
    { name: 'Chilli Garlic Noodles', desc: 'Wok-tossed spicy noodles with garlic', price: '₹370' },
    { name: 'Pad Thai Noodles', desc: 'Classic flat noodles with peanuts and tamarind sauce', price: '₹390' },
    { name: 'Schezwan Rice', desc: 'Spicy wok-tossed rice with vegetables', price: '₹290' }
  ],
  'Indian Main Course': [
    { name: 'Paneer Tikka Masala', desc: 'Roasted paneer in a rich tomato and onion gravy', price: '₹420' },
    { name: 'Paneer Butter Masala', desc: 'Classic paneer in a creamy tomato gravy', price: '₹390' },
    { name: 'Lasuni Palak Paneer', desc: 'Garlic infused spinach gravy with paneer cubes', price: '₹430' },
    { name: 'Veg Kolhapuri', desc: 'Spicy mixed vegetable curry', price: '₹340' },
    { name: 'Veg Hyderabadi', desc: 'Rich spinach and mint based vegetable curry', price: '₹360' },
    { name: 'Special Covo Paneer', desc: 'Our chef\'s signature paneer preparation', price: '₹650' },
    { name: 'Dal Makhani', desc: 'Slow-cooked black lentils with butter and cream', price: '₹370' },
    { name: 'Dal Fry', desc: 'Yellow lentils tempered with cumin and garlic', price: '₹320' }
  ],
  'Breads & Rice': [
    { name: 'Butter Naan', desc: 'Soft Indian bread cooked in tandoor with butter', price: '₹90' },
    { name: 'Cheese Stuffed Naan', desc: 'Naan stuffed with melted cheese', price: '₹190' },
    { name: 'Paneer Kulcha', desc: 'Soft bread stuffed with spiced paneer', price: '₹180' },
    { name: 'Hyderabadi Biryani', desc: 'Aromatic basmati rice cooked with vegetables and spices', price: '₹410' },
    { name: 'Cheese Golden Rice', desc: 'Special rice preparation baked with cheese', price: '₹550' },
    { name: 'Jeera Rice', desc: 'Basmati rice tempered with cumin seeds', price: '₹280' }
  ],
  'Beverages & Shakes': [
    { name: 'Mango Mastani Shake', desc: 'Thick mango shake with ice cream and nuts', price: '₹310' },
    { name: 'Brownie Blast Shake', desc: 'Rich chocolate shake blended with brownie pieces', price: '₹310' },
    { name: 'Smoking Bubble Gum', desc: 'Signature mocktail with bubble gum flavor and smoke effect', price: '₹280' },
    { name: 'Fresh Coconut Goa Style', desc: 'Refreshing coconut based mocktail', price: '₹300' },
    { name: 'Cranberry Mojito', desc: 'Classic mojito with a cranberry twist', price: '₹280' },
    { name: 'Special Covo Mix Mocktail', desc: 'Our bartender\'s special creation', price: '₹400' },
    { name: 'Flat White / Macchiato', desc: 'Premium freshly brewed coffee', price: '₹270' }
  ],
  'Desserts': [
    { name: 'Mud pie with Ice Cream', desc: 'Warm gooey chocolate mud pie served with vanilla ice cream', price: '₹290' },
    { name: 'Gulab Jamun with Ice Cream', desc: 'Classic Indian dessert served warm with cold ice cream', price: '₹250' },
    { name: 'Dry Fruit Sundae', desc: 'Assorted ice creams topped with rich dry fruits and nuts', price: '₹240' }
  ]
};

const categories = [
  { id: 'Appetizers & Soups', icon: <Soup size={18} /> },
  { id: 'Dim Sum & Bao', icon: <Star size={18} /> },
  { id: 'Pasta & Pan Asian', icon: <Pizza size={18} /> },
  { id: 'Indian Main Course', icon: <Utensils size={18} /> },
  { id: 'Breads & Rice', icon: <Flame size={18} /> },
  { id: 'Beverages & Shakes', icon: <Coffee size={18} /> },
  { id: 'Desserts', icon: <Star size={18} /> },
];

export default function Menu() {
  const [activeLocation, setActiveLocation] = useState('Ahmedabad');
  const [activeCategory, setActiveCategory] = useState('Appetizers & Soups');

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
