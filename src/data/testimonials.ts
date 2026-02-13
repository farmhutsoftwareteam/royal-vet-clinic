export interface Testimonial {
  id: string;
  name: string;
  location: string;
  petName: string;
  petType: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Constantia",
    petName: "Bella",
    petType: "Golden Retriever",
    quote: "Dr. Munyuki and his team went above and beyond when Bella needed emergency surgery. The care, communication, and compassion were exceptional. This is veterinary care at its finest.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Abrahams",
    location: "Century City",
    petName: "Whiskers",
    petType: "Maine Coon",
    quote: "Finding a vet who truly understands cats is rare. Dr. Naidoo's gentle approach means Whiskers actually stays calm during visits. The clinic is beautiful and spotlessly clean.",
    rating: 5,
  },
  {
    id: "3",
    name: "Nomsa Dlamini",
    location: "Diep River",
    petName: "Max",
    petType: "Dachshund",
    quote: "As a Cape Dachshund Rescue volunteer, I've seen Dr. Munyuki's dedication to animal welfare firsthand. His clinic provides top-tier care with genuine heart.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael van der Berg",
    location: "Plumstead",
    petName: "Luna",
    petType: "Border Collie",
    quote: "The online booking is so convenient, and I love that they remember Luna's history. The preventive care programme has kept her in perfect health for three years running.",
    rating: 5,
  },
];
