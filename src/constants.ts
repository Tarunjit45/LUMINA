import { Utensils, Wine, Coffee, Cake, Users, Calendar, Award, ChefHat } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Wedding Catering',
    description: 'Exquisite culinary experiences for your special day. From intimate gatherings to grand celebrations, we ensure every bite is memorable.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Corporate Events',
    description: 'Impress clients and colleagues with professional catering. We provide seamless service for conferences, galas, and office luncheons.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Private Dining',
    description: 'Bring the restaurant experience to your home. Our chefs curate personalized menus for dinner parties and family gatherings.',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop'
  }
];

export const MENU_CATEGORIES = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    items: [
      { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle and mozzarella', price: '$12' },
      { name: 'Smoked Salmon Blinis', description: 'Crème fraîche, dill, and lemon zest', price: '$14' },
      { name: 'Wagyu Beef Sliders', description: 'Brioche bun, caramelized onions, aged cheddar', price: '$16' },
    ]
  },
  {
    id: 'mains',
    title: 'Main Courses',
    items: [
      { name: 'Herb-Crusted Lamb Rack', description: 'Served with fondant potatoes and red wine jus', price: '$32' },
      { name: 'Pan-Seared Scallops', description: 'Cauliflower purée, crispy pancetta, truffle oil', price: '$28' },
      { name: 'Wild Mushroom Risotto', description: 'Arborio rice, porcini mushrooms, parmesan crisp', price: '$24' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Dark Chocolate Fondant', description: 'Molten center, raspberry coulis, vanilla bean ice cream', price: '$14' },
      { name: 'Lemon Basil Tart', description: 'Zesty lemon curd, buttery pastry, basil sugar', price: '$12' },
      { name: 'Artisan Cheese Board', description: 'Selection of local cheeses, honeycomb, crackers', price: '$18' },
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Wedding Planner',
    content: 'The attention to detail was impeccable. My clients were absolutely thrilled with the menu and the presentation. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Corporate Director',
    content: 'Professional, punctual, and delicious. They handled our gala for 500 guests seamlessly. The best catering service we have used.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Private Client',
    content: 'They transformed my birthday dinner into a magical evening. The chef was amazing and the food was out of this world.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];
