export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  event?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Food Enthusiast',
    content: 'The most exquisite dining experience in Delhi. Every dish tells a story of tradition meeting innovation. The presentation is nothing short of art.',
    rating: 5,
    image: '/images/1000283326.jpg',
    event: 'Birthday Dinner',
  },
  {
    id: 2,
    name: 'Rajesh Verma',
    role: 'Corporate Client',
    content: 'We hosted our annual gala at Rangrezza Banquet. The team handled 500+ guests flawlessly. Truly world-class hospitality.',
    rating: 5,
    image: '/images/1000283334.jpg',
    event: 'Corporate Event',
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    role: 'Wedding Planner',
    content: 'The Neurons Restrobar is hands down the best nightlife spot. Amazing cocktails, incredible ambiance, and service that exceeds expectations.',
    rating: 5,
    image: '/images/1000283341.jpg',
    event: 'Wedding Afterparty',
  },
  {
    id: 4,
    name: 'Amit Khanna',
    role: 'Regular Patron',
    content: 'From the warm hospitality to the gastronomic journey, Rangrezza never disappoints. Their signature dishes are a must-try for every food lover.',
    rating: 5,
    image: '/images/1000283352.jpg',
  },
];
