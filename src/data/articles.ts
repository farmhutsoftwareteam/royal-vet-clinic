export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

export const categories = ["All", "Puppy Care", "Senior Wellness", "Nutrition", "Emergency", "Dental Health"];

export const articles: Article[] = [
  {
    id: "puppy-first-visit",
    title: "Your Puppy's First Vet Visit: What to Expect",
    excerpt: "Bringing a new puppy home is exciting. Here's how to prepare for their first veterinary check-up and vaccination schedule to give them the best start.",
    category: "Puppy Care",
    readTime: "5 min read",
    date: "2025-01-15",
    author: "Dr. Rightwell Munyuki",
  },
  {
    id: "senior-pet-signs",
    title: "5 Signs Your Senior Pet Needs a Health Check",
    excerpt: "As pets age, subtle changes can signal underlying health issues. Learn the key signs to watch for and when to schedule a senior wellness exam.",
    category: "Senior Wellness",
    readTime: "4 min read",
    date: "2025-01-08",
    author: "Dr. Priya Naidoo",
  },
  {
    id: "pet-nutrition-guide",
    title: "The Complete Guide to Pet Nutrition in South Africa",
    excerpt: "From premium kibble to raw diets, navigating pet food options can be overwhelming. Our veterinary team breaks down what your pet really needs.",
    category: "Nutrition",
    readTime: "7 min read",
    date: "2024-12-20",
    author: "Dr. Johan van Wyk",
  },
  {
    id: "emergency-poisoning",
    title: "Pet Poisoning: Common Household Dangers",
    excerpt: "Chocolate, grapes, lilies, and rat poison — your home may harbour hidden dangers for your pets. Know what to watch for and what to do in an emergency.",
    category: "Emergency",
    readTime: "6 min read",
    date: "2024-12-10",
    author: "Dr. Rightwell Munyuki",
  },
  {
    id: "dental-health-tips",
    title: "Why Your Pet's Dental Health Matters More Than You Think",
    excerpt: "Dental disease affects over 80% of pets by age three. Discover why regular dental care is crucial and how to keep your pet's teeth clean at home.",
    category: "Dental Health",
    readTime: "5 min read",
    date: "2024-11-28",
    author: "Dr. Johan van Wyk",
  },
  {
    id: "puppy-socialisation",
    title: "The Critical Window: Puppy Socialisation Done Right",
    excerpt: "The first 16 weeks of a puppy's life shape their behaviour forever. Learn how to socialise your puppy safely while protecting them from disease.",
    category: "Puppy Care",
    readTime: "6 min read",
    date: "2024-11-15",
    author: "Dr. Priya Naidoo",
  },
];
