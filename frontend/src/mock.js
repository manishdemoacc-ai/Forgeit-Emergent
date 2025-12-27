// Mock data for Fordge Website

export const services = [
  {
    id: 1,
    title: "Website Design",
    description: "Mobile-first, professional websites tailored for your local business",
    icon: "Monitor",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Custom Design"]
  },
  {
    id: 2,
    title: "Google Maps & Local Presence",
    description: "Get found by local customers with Google Business Profile setup",
    icon: "MapPin",
    features: ["Google Business Setup", "Location Optimization", "Reviews Management", "Local SEO"]
  },
  {
    id: 3,
    title: "WhatsApp Integration",
    description: "Direct communication channel with your customers",
    icon: "MessageCircle",
    features: ["WhatsApp Business", "Quick Replies", "Catalog Integration", "Customer Support"]
  },
  {
    id: 4,
    title: "Website Maintenance",
    description: "Ongoing support and updates to keep your site running smoothly",
    icon: "Settings",
    features: ["Regular Updates", "Security Patches", "Content Updates", "24/7 Support"]
  }
];

export const whyChoose = [
  {
    id: 1,
    title: "Built for Local Businesses",
    description: "We understand the unique needs of shops, restaurants, clinics, and local services",
    icon: "Store"
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description: "Professional websites without breaking the bank. Plans starting from ₹4,999",
    icon: "IndianRupee"
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "Your website live in 5-7 days. Quick turnaround without compromising quality",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Mobile-Friendly",
    description: "All websites are optimized for smartphones, tablets, and desktops",
    icon: "Smartphone"
  },
  {
    id: 5,
    title: "Easy Communication",
    description: "Simple process, clear updates, and support in your language",
    icon: "MessageSquare"
  },
  {
    id: 6,
    title: "No Technical Hassle",
    description: "We handle everything - hosting, domain, updates, and maintenance",
    icon: "CheckCircle"
  }
];

export const demoWebsites = [
  {
    id: 1,
    type: "Restaurant",
    name: "Spice Garden Restaurant",
    description: "Modern restaurant website with online menu and reservation system",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    route: "/demo/restaurant",
    features: ["Online Menu", "Table Booking", "Photo Gallery", "Contact Info"]
  },
  {
    id: 2,
    type: "Retail Store",
    name: "Fashion Hub Boutique",
    description: "Stylish store website showcasing products and services",
    image: "https://images.pexels.com/photos/6373045/pexels-photo-6373045.jpeg",
    route: "/demo/store",
    features: ["Product Showcase", "Store Info", "WhatsApp Order", "Location Map"]
  },
  {
    id: 3,
    type: "Clinic",
    name: "HealthCare Clinic",
    description: "Professional clinic website with appointment booking",
    image: "https://images.pexels.com/photos/6278755/pexels-photo-6278755.jpeg",
    route: "/demo/clinic",
    features: ["Doctor Info", "Services", "Appointment Booking", "Contact Details"]
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Starter Website",
    price: "₹4,999",
    description: "Perfect for small businesses just getting started online",
    features: [
      "3-5 Page Website",
      "Mobile Responsive",
      "Contact Form",
      "Google Maps Integration",
      "WhatsApp Button",
      "Basic SEO",
      "Free Domain (.in)",
      "1 Year Hosting"
    ],
    popular: false,
    route: "/pricing/starter"
  },
  {
    id: 2,
    name: "Business Website",
    price: "₹9,999",
    description: "Complete solution for established local businesses",
    features: [
      "8-10 Page Website",
      "Premium Design",
      "Photo Gallery",
      "Contact & Booking Forms",
      "WhatsApp Integration",
      "Google Business Setup",
      "Advanced SEO",
      "Free Domain (.com/.in)",
      "1 Year Hosting",
      "Social Media Links"
    ],
    popular: true,
    route: "/pricing/business"
  },
  {
    id: 3,
    name: "Monthly Support",
    price: "₹999/month",
    description: "Ongoing maintenance and updates for your website",
    features: [
      "Content Updates",
      "Security Updates",
      "Performance Monitoring",
      "Technical Support",
      "Backup & Recovery",
      "Minor Design Changes",
      "Priority Support"
    ],
    popular: false,
    route: "/pricing/support"
  }
];

export const howItWorks = [
  {
    step: 1,
    title: "Share Your Business Details",
    description: "Tell us about your business, services, and what you need on your website",
    icon: "FileText"
  },
  {
    step: 2,
    title: "We Build Your Website",
    description: "Our team designs and develops your website with all features you need",
    icon: "Code"
  },
  {
    step: 3,
    title: "Your Business Goes Online",
    description: "Launch your website and start reaching more customers online",
    icon: "Rocket"
  }
];

export const socialMedia = [
  { name: "WhatsApp", icon: "MessageCircle", url: "https://wa.me/918610336533", color: "#25D366" },
  { name: "Facebook", icon: "Facebook", url: "https://facebook.com/forgeit", color: "#1877F2" },
  { name: "Instagram", icon: "Instagram", url: "https://instagram.com/forgeit", color: "#E4405F" },
  { name: "Twitter", icon: "Twitter", url: "https://twitter.com/forgeit", color: "#1DA1F2" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/forgeit", color: "#0A66C2" },
  { name: "Email", icon: "Mail", url: "mailto:manishdemoacc@gmail.com", color: "#EA4335" }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    business: "Kumar's Restaurant",
    rating: 5,
    comment: "Forgeit built an amazing website for my restaurant. Now customers can see our menu online and book tables easily!",
    avatar: "RK"
  },
  {
    id: 2,
    name: "Priya Sharma",
    business: "Glamour Beauty Salon",
    rating: 5,
    comment: "Professional service and quick delivery. My salon website looks stunning and I'm getting more appointments now.",
    avatar: "PS"
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    business: "City Dental Clinic",
    rating: 5,
    comment: "Very happy with the website. Patients can now book appointments online and find all information easily.",
    avatar: "AP"
  }
];

export const contactInfo = {
  phone: "+91 8610336533",
  email: "manishdemoacc@gmail.com",
  address: "123 Business Street, Mumbai, Maharashtra 400001",
  whatsapp: "+918610336533"
};
