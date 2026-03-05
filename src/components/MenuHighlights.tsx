import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES } from '../constants';

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Image & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef Plating Food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 bg-cream p-8 rounded-tl-3xl shadow-xl hidden md:block">
              <p className="font-serif text-2xl italic text-charcoal leading-relaxed">
                "We believe that food is not just sustenance, but an art form that brings people together."
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-gold">Executive Chef</p>
            </div>
          </motion.div>

          {/* Right Side: Menu Items */}
          <div className="pt-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3 block"
            >
              Culinary Delights
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-charcoal mb-8"
            >
              Curated Menus
            </motion.h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-10 border-b border-charcoal/10 pb-4">
              {MENU_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors pb-4 -mb-4 border-b-2 ${
                    activeCategory === category.id 
                      ? 'text-charcoal border-gold' 
                      : 'text-charcoal/40 border-transparent hover:text-charcoal/70'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Menu Items List */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {MENU_CATEGORIES.find(c => c.id === activeCategory)?.items.map((item, index) => (
                    <div key={index} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif font-medium text-charcoal group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-gold font-medium">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-charcoal/60 font-light text-sm flex-1">
                          {item.description}
                        </p>
                        <div className="h-[1px] bg-charcoal/10 flex-1 opacity-50"></div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-medium border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
                Download Full Menu PDF
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
