import { ChefHat, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="w-8 h-8 text-gold" />
              <span className="font-serif text-2xl font-bold">Lumina</span>
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-6">
              Crafting exceptional culinary experiences for life's most memorable moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Weddings</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Private Dining</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cocktail Parties</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 font-light mb-4 text-sm">Subscribe for seasonal menus and updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-charcoal transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-light">
          <p>&copy; 2024 Lumina Catering. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed by</span>
            <a href="https://confluxai.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              Conflux AI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
