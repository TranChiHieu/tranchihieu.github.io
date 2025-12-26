export interface Profile {
  personalInfo: PersonalInfo;
  contact: Contact;
  social: SocialLinks;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  hobbies: string[];
  languages: Language[];
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  birthDate: string;
  gender: string;
  nationality: string;
  photo: string;
  bio: string;
}

export interface Contact {
  email: string;
  phone: string;
  website: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  zip: string;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  [key: string]: string | undefined;
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;  
  description: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  technologies: string[];
}

export interface Language {
  language: string;
  level: "Beginner" | "Intermediate" | "Fluent" | "Native";
}
