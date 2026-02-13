export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "xray",
    title: "Digital X-Ray & Imaging",
    description: "State-of-the-art digital radiography providing instant, high-resolution images for accurate diagnosis of bone fractures, joint issues, and internal conditions.",
    icon: "xray",
    features: ["Digital radiography", "Instant results", "Orthopaedic assessment", "Chest & abdominal imaging"],
  },
  {
    id: "ultrasound",
    title: "Ultrasound Diagnostics",
    description: "Non-invasive ultrasound examinations for detailed assessment of soft tissue structures, pregnancy monitoring, and cardiac evaluation.",
    icon: "ultrasound",
    features: ["Abdominal scans", "Pregnancy monitoring", "Cardiac assessment", "Guided biopsies"],
  },
  {
    id: "dental",
    title: "Dental Care",
    description: "Comprehensive dental services including routine cleaning, extractions, and oral surgery to maintain your pet's dental health and overall wellbeing.",
    icon: "dental",
    features: ["Dental cleaning", "Extractions", "Oral surgery", "Dental X-rays"],
  },
  {
    id: "wellness",
    title: "Wellness & Preventive Care",
    description: "Proactive health management through regular check-ups, vaccinations, parasite prevention, and nutritional counselling to keep your pet thriving.",
    icon: "wellness",
    features: ["Annual check-ups", "Vaccinations", "Parasite prevention", "Nutrition advice"],
  },
  {
    id: "surgery",
    title: "Surgical Services",
    description: "From routine sterilisations to complex soft tissue and orthopaedic procedures, performed with precision in our fully equipped surgical suites.",
    icon: "surgery",
    features: ["Sterilisation", "Soft tissue surgery", "Orthopaedic surgery", "Post-op care"],
  },
  {
    id: "emergency",
    title: "Emergency & Critical Care",
    description: "Rapid response emergency services with experienced veterinary teams ready to handle acute trauma, poisoning, and critical medical conditions.",
    icon: "emergency",
    features: ["Trauma care", "Poisoning treatment", "Intensive monitoring", "After-hours referrals"],
  },
];

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "puppy-starter",
    name: "Puppy Starter Pack",
    price: "R2,450",
    period: "once-off",
    description: "Everything your new puppy needs for a healthy start in life.",
    features: [
      "Full health examination",
      "3x puppy vaccinations",
      "Deworming programme",
      "Microchipping",
      "Nutrition consultation",
      "Free follow-up visit",
    ],
  },
  {
    id: "dental-wellness",
    name: "Dental Wellness Bundle",
    price: "R3,200",
    period: "per treatment",
    description: "Complete dental care package for a healthy, happy smile.",
    features: [
      "Pre-anaesthetic blood work",
      "Full dental examination",
      "Professional cleaning & polish",
      "Dental X-rays",
      "Extractions if needed",
      "Take-home dental kit",
    ],
    popular: true,
  },
  {
    id: "senior-care",
    name: "Senior Care Programme",
    price: "R1,850",
    period: "per visit",
    description: "Specialised wellness checks for pets aged 7 years and older.",
    features: [
      "Comprehensive geriatric exam",
      "Blood chemistry panel",
      "Thyroid screening",
      "Blood pressure check",
      "Joint health assessment",
      "Personalised care plan",
    ],
  },
];
