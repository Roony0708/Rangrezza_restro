export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/images/1000283326.jpg', alt: 'Signature Dish', category: 'food', width: 800, height: 1000 },
  { id: 'g2', src: '/images/1000283334.jpg', alt: 'Restaurant Ambiance', category: 'restaurant', width: 1200, height: 800 },
  { id: 'g3', src: '/images/1000283341.jpg', alt: 'Banquet Decoration', category: 'banquet', width: 800, height: 800 },
  { id: 'g4', src: '/images/1000283352.jpg', alt: 'Event Celebration', category: 'events', width: 1200, height: 900 },
  { id: 'g5', src: '/images/1000283357.jpg', alt: 'Restrobar Night', category: 'restrobar', width: 800, height: 1200 },
  { id: 'g6', src: '/images/banquet.jpg', alt: 'Grand Banquet Hall', category: 'banquet', width: 1200, height: 800 },
  { id: 'g7', src: '/images/neurons.jpg', alt: 'Neurons Restrobar', category: 'restrobar', width: 1200, height: 800 },
  { id: 'g8', src: '/images/janta-fridge.jpg', alt: 'Culinary Preparation', category: 'food', width: 800, height: 1000 },
  { id: 'g9', src: '/images/about-side.jpg', alt: 'Restaurant Interior', category: 'restaurant', width: 1200, height: 900 },
  { id: 'g10', src: '/images/1000283341.jpg', alt: 'Restaurant Ambiance', category: 'restaurant', width: 1600, height: 1066 },
  { id: 'g11', src: '/images/wedding.png', alt: 'Wedding Celebration', category: 'events', width: 800, height: 800 },
  { id: 'g12', src: '/images/corporate.png', alt: 'Corporate Event', category: 'events', width: 1200, height: 800 },
  { id: 'g13', src: '/images/couple.png', alt: 'Couple Portrait', category: 'banquet', width: 800, height: 1200 },
  { id: 'g14', src: '/images/confetti.png', alt: 'Celebration', category: 'events', width: 1200, height: 900 },
  { id: 'g15', src: '/images/wedding-ring.png', alt: 'Wedding Rings', category: 'banquet', width: 800, height: 800 },
  { id: 'g16', src: '/images/Marriage-recpetion.png', alt: 'Marriage Reception', category: 'events', width: 1200, height: 800 },
  { id: 'g17', src: '/images/275193020_810409249876809_420536523145257781_n.jpg', alt: 'Chef Special', category: 'food', width: 800, height: 1000 },
  { id: 'g18', src: '/images/281577437_863912174526516_138483015384855947_n.jpg', alt: 'Restaurant Night', category: 'restaurant', width: 1200, height: 800 },
  { id: 'g19', src: '/images/side-banner-1.JPG', alt: 'Restaurant Banner', category: 'restaurant', width: 1200, height: 600 },
  { id: 'g20', src: '/images/336317117_4643748872415772_1173530362526624320_n.jpg', alt: 'Event Decoration', category: 'banquet', width: 800, height: 1000 },
  { id: 'g21', src: '/images/336542582_1280439159492469_3433167972840294091_n.jpg', alt: 'Dinner Setup', category: 'banquet', width: 1200, height: 800 },
  { id: 'g22', src: '/images/336573606_158744070447409_5005470720393818967_n.jpg', alt: 'Food Presentation', category: 'food', width: 800, height: 800 },
  { id: 'g23', src: '/images/343477041_627488428878829_2991971438979197579_n.jpg', alt: 'Interior Design', category: 'restaurant', width: 1200, height: 900 },
  { id: 'g24', src: '/images/343749300_466502698984443_7229654027261341480_n.jpg', alt: 'Bar Area', category: 'restrobar', width: 1200, height: 800 },
  { id: 'g25', src: '/images/344724645_995081754820343_1951915730355438965_n.jpg', alt: 'Cocktail Creation', category: 'restrobar', width: 800, height: 1000 },
  { id: 'g26', src: '/images/345308796_6139823306130478_3106990488351881959_n.jpg', alt: 'Live Music', category: 'restrobar', width: 1200, height: 800 },
  { id: 'g27', src: '/images/346095856_772090647793094_4263545601177436718_n.jpg', alt: 'Food Platter', category: 'food', width: 1200, height: 900 },
  { id: 'g28', src: '/images/353043759_757381696390726_775671971831350725_n.jpg', alt: 'Event Setup', category: 'events', width: 1200, height: 800 },
  { id: 'g29', src: '/images/360094502_776456434483252_1748934250484585944_n.jpg', alt: 'Bar Counter', category: 'restrobar', width: 800, height: 1000 },
  { id: 'g30', src: '/images/374533844_763362432465308_3267106517512388673_n.jpg', alt: 'Dining Table', category: 'restaurant', width: 1200, height: 800 },
];

export const galleryCategories = [
  { id: 'all', name: 'All', icon: '⊞' },
  { id: 'food', name: 'Food', icon: '🍽' },
  { id: 'restaurant', name: 'Restaurant', icon: '🏛' },
  { id: 'banquet', name: 'Banquet', icon: '💍' },
  { id: 'events', name: 'Events', icon: '🎉' },
  { id: 'restrobar', name: 'Restrobar', icon: '🍸' },
];
