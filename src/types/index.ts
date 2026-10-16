export type PageId = 'home' | 'about' | 'work' | 'resources' | 'news' | 'contact';

export interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  whatsapp: string;
}

export interface FocusArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  impactObjective: string;
  image: string;
  status: 'Operational' | 'Active Initiative' | 'Proposed Program';
  keyInterventions: string[];
}

export interface CPRResource {
  id: string;
  title: string;
  category: 'Fundamentals' | 'Emergency Steps' | 'Bystander Guidance' | 'Community FAQs' | 'Training Guidance';
  summary: string;
  readTime: string;
  publishedDate: string;
  authoritativeSource: string;
  content: string[];
  keyTakeaways: string[];
  warningNote?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Announcement' | 'Community Outreach' | 'Partnership' | 'Public Health';
  date: string;
  summary: string;
  content: string;
  image: string;
  location?: string;
  readTime: string;
}

export interface RegistrationDetails {
  organizationName: string;
  entityType: string;
  incorporationDate: string;
  registrationNumber: string;
  registrarAgency: string;
  registeredOffice: string;
  postalAddress: string;
  country: string;
  contactEmail: string;
  contactPhone: string;
  officialWhatsAppNumber: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: 'general' | 'partnership' | 'school' | 'healthcare' | 'media';
  subject: string;
  message: string;
}
