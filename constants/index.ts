// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/how-it-works', key: 'how_hilink_work', label: 'How We Work' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/pricing', key: 'pricing', label: 'Pricing' },
  // { href: '/contact', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Expert Camping Guides',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Our certified camping guides have years of experience and local knowledge to ensure your camping adventure is safe, enjoyable, and memorable',
  },
  {
    title: 'Complete Camping Setup',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "We provide all camping equipment including tents, sleeping bags, cooking gear, and safety equipment. Just bring your personal items and we'll handle the rest",
  },
  {
    title: 'Safety & Emergency Support',
    icon: '/tech.svg',
    variant: 'green',
    description:
      '24/7 emergency support, first aid trained guides, and comprehensive safety protocols ensure your camping experience is secure and worry-free',
  },
  {
    title: 'Premium Camping Locations',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Access to exclusive camping spots, private reserves, and premium locations that offer the best views, facilities, and camping experiences',
  },
];

// SERVICES SECTION
export const SERVICES = [
  {
    id: 'guided-camping',
    title: 'Guided Camping Adventures',
    icon: '/map.svg',
    description: 'Join our expert guides for unforgettable camping experiences. We handle all the planning, equipment, and logistics while you focus on enjoying nature.',
    features: [
      'Professional certified camping guides',
      'All camping equipment provided',
      'Meal planning and cooking',
      'Safety equipment and first aid',
      'Transportation to camping sites'
    ],
    benefits: [
      'Learn from experienced professionals',
      'No need to buy expensive gear',
      'Safe and secure camping experience',
      'Focus on enjoying the outdoors'
    ]
  },
  {
    id: 'equipment-rental',
    title: 'Camping Equipment Rental',
    icon: '/calendar.svg',
    description: 'Rent high-quality camping gear for your own adventures. From basic tents to complete camping setups, we have everything you need for a successful camping trip.',
    features: [
      'Premium camping equipment selection',
      'Complete camping packages available',
      'Delivery and pickup service',
      'Equipment maintenance and cleaning',
      'Flexible rental periods'
    ],
    benefits: [
      'Access to professional-grade gear',
      'Cost-effective for occasional campers',
      'Try before you buy',
      'No storage or maintenance worries'
    ]
  },
  {
    id: 'camping-education',
    title: 'Camping Skills & Training',
    icon: '/tech.svg',
    description: 'Learn essential camping skills from our experienced instructors. From basic setup to advanced wilderness survival, we offer courses for all skill levels.',
    features: [
      'Beginner to advanced skill levels',
      'Hands-on practical training',
      'Wilderness survival techniques',
      'Equipment care and maintenance',
      'Safety and emergency procedures'
    ],
    benefits: [
      'Build confidence in the outdoors',
      'Learn from certified instructors',
      'Gain valuable survival skills',
      'Connect with fellow camping enthusiasts'
    ]
  },
  {
    id: 'exclusive-locations',
    title: 'Exclusive Camping Locations',
    icon: '/location.svg',
    description: 'Access to premium camping locations including private reserves, scenic overlooks, and exclusive wilderness areas not available to the general public.',
    features: [
      'Private and exclusive camping sites',
      'Premium locations with facilities',
      'Scenic and remote wilderness areas',
      'Seasonal location recommendations',
      'Special access permits included'
    ],
    benefits: [
      'Camp in exclusive locations',
      'Avoid crowded public campsites',
      'Access to pristine wilderness',
      'Unique and memorable experiences'
    ]
  }
];

// FAQ SECTION
export const FAQ_QUESTIONS = [
  {
    id: 'offline-functionality',
    question: 'How does offline functionality work?',
    answer: 'Hilink allows you to download maps and trail data before your adventure. Once downloaded, you can navigate, view routes, and access safety information without any internet connection. Maps are stored locally on your device and can be updated when you have connectivity.'
  },
  {
    id: 'battery-life',
    question: 'Will using AR navigation drain my battery quickly?',
    answer: 'Our AR technology is optimized for battery efficiency. We use smart algorithms that only activate AR features when needed, and you can adjust the intensity of AR overlays. Most users report only 10-15% additional battery usage compared to standard GPS navigation.'
  },
  {
    id: 'device-compatibility',
    question: 'What devices are compatible with Hilink?',
    answer: 'Hilink works on iOS 12+ and Android 8+ devices. For AR features, you need a device with ARCore (Android) or ARKit (iOS) support. We provide a compatibility checker in the app to verify your device capabilities.'
  },
  {
    id: 'safety-features',
    question: 'What safety features does Hilink provide?',
    answer: 'Hilink includes emergency waypoints, SOS location sharing, weather alerts, trail condition updates, and automatic check-in reminders. You can also share your planned route with emergency contacts before starting your adventure.'
  },
  {
    id: 'data-usage',
    question: 'How much data does Hilink use?',
    answer: 'Once maps are downloaded, Hilink uses virtually no data during offline navigation. Initial map downloads range from 50-200MB depending on the area. We also offer data-saving modes and compression options for users with limited data plans.'
  },
  {
    id: 'group-features',
    question: 'Can I use Hilink for group adventures?',
    answer: 'Absolutely! Hilink excels at group coordination. You can create group events, share routes, track group members (with permission), and communicate through the app. All group members can access the same maps and safety information.'
  },
  {
    id: 'trail-updates',
    question: 'How often are trails and locations updated?',
    answer: 'We update our trail database monthly with new locations, condition reports, and user contributions. Critical safety information is updated in real-time. Users can also report trail conditions and closures to help keep the community informed.'
  },
  {
    id: 'international-use',
    question: 'Does Hilink work internationally?',
    answer: 'Yes! Hilink provides maps and trails for locations worldwide. Our offline maps cover most countries and popular outdoor destinations. International users can download maps for their region and access the same features as domestic users.'
  }
];

// PRICING SECTION
export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic Camping',
    price: 89,
    period: 'per person',
    description: 'Perfect for first-time campers and casual outdoor enthusiasts',
    features: [
      'Basic camping equipment (tent, sleeping bag)',
      'Group camping experience (8-12 people)',
      'Basic meal planning and cooking',
      'Safety briefing and basic training',
      'Transportation to campsite',
      'Basic first aid support'
    ],
    notIncluded: [
      'Premium equipment upgrades',
      'Private camping locations',
      'Advanced skills training',
      '24/7 emergency support'
    ],
    popular: false,
    color: 'blue'
  },
  {
    id: 'premium',
    name: 'Premium Camping',
    price: 149,
    period: 'per person',
    description: 'Our most popular choice with enhanced comfort and exclusive locations',
    features: [
      'Premium camping equipment (high-end gear)',
      'Smaller group size (4-6 people)',
      'Gourmet meal planning and cooking',
      'Advanced camping skills training',
      'Exclusive camping locations',
      '24/7 emergency support',
      'Professional photography session',
      'Equipment delivery and setup'
    ],
    notIncluded: [
      'Private guide service',
      'Luxury camping amenities',
      'Multi-day expedition planning'
    ],
    popular: true,
    color: 'green'
  },
  {
    id: 'luxury',
    name: 'Luxury Camping',
    price: 299,
    period: 'per person',
    description: 'Ultimate camping experience with private guides and luxury amenities',
    features: [
      'Luxury camping equipment (premium brands)',
      'Private guide service (1:2 ratio)',
      'Private exclusive locations',
      'Gourmet chef-prepared meals',
      'Luxury camping amenities',
      'Multi-day expedition planning',
      'Professional photography package',
      'Equipment delivery and setup',
      '24/7 concierge support',
      'Custom adventure planning'
    ],
    notIncluded: [],
    popular: false,
    color: 'purple'
  }
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Privacy Policy',
      'Contact Us',
    ],
  },
 
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Camping Reservations', value: '123-456-7890' },
    { label: 'Email Support', value: 'info@hilinkcamping.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
