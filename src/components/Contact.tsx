import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3 block"
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
            >
              Book Your Event
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/70 mb-12 max-w-md font-light"
            >
              Ready to create an unforgettable experience? Contact us to discuss your menu and event details.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: Mail, label: 'Email', value: 'events@luminacatering.com' },
                { icon: MapPin, label: 'Location', value: '123 Culinary Ave, Food District, NY' },
                { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9am - 6pm' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gold">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-1">{item.label}</p>
                    <p className="text-lg font-serif text-charcoal">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-charcoal/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Name</label>
                  <input type="text" className="w-full bg-cream border-none rounded-lg p-4 focus:ring-2 focus:ring-gold/50 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Email</label>
                  <input type="email" className="w-full bg-cream border-none rounded-lg p-4 focus:ring-2 focus:ring-gold/50 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Event Date</label>
                  <input type="date" className="w-full bg-cream border-none rounded-lg p-4 focus:ring-2 focus:ring-gold/50 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Guest Count</label>
                  <input type="number" className="w-full bg-cream border-none rounded-lg p-4 focus:ring-2 focus:ring-gold/50 outline-none transition-all" placeholder="50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Message</label>
                <textarea rows={4} className="w-full bg-cream border-none rounded-lg p-4 focus:ring-2 focus:ring-gold/50 outline-none transition-all resize-none" placeholder="Tell us about your event..."></textarea>
              </div>

              <button type="submit" className="w-full bg-charcoal text-white py-4 rounded-lg font-medium hover:bg-gold transition-colors duration-300">
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
