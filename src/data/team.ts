export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "dr-munyuki",
    name: "Dr. Rightwell Munyuki",
    role: "Founder & Lead Veterinarian",
    qualifications: "BVSc, MBA",
    bio: "With a passion for clinical excellence and a business mind sharpened by an MBA, Dr. Munyuki founded Royal Veterinary Clinic to deliver world-class care with a personal touch. His journey from veterinary student to clinic founder reflects an unwavering commitment to both animal welfare and community service. Through partnerships with Cape Dachshund Rescue and local shelters, he extends compassionate care beyond the clinic walls.",
    specialties: ["Small Animal Medicine", "Surgery", "Diagnostic Imaging", "Practice Leadership"],
  },
  {
    id: "dr-naidoo",
    name: "Dr. Priya Naidoo",
    role: "Senior Veterinarian",
    qualifications: "BVSc",
    bio: "Dr. Naidoo brings a gentle hand and keen diagnostic eye to every consultation. With a special interest in feline medicine and internal diagnostics, she is a favourite among cat owners across the Southern Suburbs.",
    specialties: ["Feline Medicine", "Internal Medicine", "Ultrasound"],
  },
  {
    id: "dr-van-wyk",
    name: "Dr. Johan van Wyk",
    role: "Veterinarian",
    qualifications: "BVSc",
    bio: "A born-and-raised Capetonian, Dr. van Wyk is passionate about preventive care and client education. He believes that informed pet owners raise healthier, happier animals.",
    specialties: ["Preventive Care", "Dental Care", "Surgery"],
  },
  {
    id: "sister-thompson",
    name: "Sister Lisa Thompson",
    role: "Veterinary Nurse Manager",
    qualifications: "Dip. Vet Nursing",
    bio: "Sister Thompson ensures every patient receives attentive, compassionate nursing care. Her calm presence puts anxious pets and owners at ease from the moment they walk through the door.",
    specialties: ["Anaesthesia Monitoring", "Post-Operative Care", "Client Education"],
  },
];
