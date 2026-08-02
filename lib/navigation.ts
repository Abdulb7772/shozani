import type { LucideIcon } from "lucide-react";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Languages,
  Bot,
  Calculator,
  FileText,
  CheckCircle2,
  BarChart3,
  Star,
} from "lucide-react";

export type NavChild = {
  title: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
};

export type NavGroup = {
  label: string;
  icon: LucideIcon;
  children: NavChild[];
};

export const company: NavChild[] = [
  { title: "About Us", description: "Who we are and our mission", href: "/about" },
  { title: "Why Shozani", description: "What makes us different", href: "/why-shozani" },
  { title: "Success Stories", description: "Real results from real clients", href: "/success-stories" },
  { title: "Careers", description: "Join our growing team", href: "/careers" },
  { title: "Blog", description: "Guides, news & resources", href: "/blog" },
  { title: "Contact", description: "Get in touch with our team", href: "/contact" },
];

export const serviceGroups: NavGroup[] = [
  {
    label: "Study Abroad",
    icon: GraduationCap,
    children: [
      { title: "Study in Germany", description: "TU9 & public universities, tuition-free", href: "/services/study-abroad/germany" },
      { title: "Study in Australia", description: "PR pathways via skilled migration", href: "/services/study-abroad/australia" },
      { title: "Study in Canada", description: "PGWP & fast-track PR eligibility", href: "/services/study-abroad/canada" },
      { title: "Study in USA", description: "Top-ranked universities & STEM", href: "/services/study-abroad/usa" },
      { title: "Study in UK", description: "Elite institutions & post-study work", href: "/services/study-abroad/uk" },
    ],
  },
  {
    label: "Work & Immigration",
    icon: Briefcase,
    children: [
      { title: "Work in Germany", description: "Opportunity Card, IT & nursing visas", href: "/services/work-abroad/germany" },
      { title: "Permanent Residence", description: "PR routes for skilled professionals", href: "/services/immigration/permanent-residence" },
      { title: "Family Immigration", description: "Reunite with dependent visas", href: "/services/immigration/family" },
      { title: "Business & Investment", description: "Company formation & business visas", href: "/services/immigration/business" },
      { title: "Construction Services", description: "Architecture, design & house building", href: "/services/construction" },
    ],
  },
  {
    label: "Language Training",
    icon: Languages,
    children: [
      { title: "German Language", description: "A1 – C1 with exam prep & visa-ready", href: "/services/language/german" },
      { title: "IELTS Preparation", description: "Band 7+ coaching with mock tests", href: "/services/language/ielts" },
      { title: "PTE Preparation", description: "Fast scoring, computer-based format", href: "/services/language/pte" },
    ],
  },
];

export const countryLinks: NavChild[] = [
  { title: "Germany", icon: Globe, href: "/countries/germany" },
  { title: "United Kingdom", href: "/countries/uk" },
  { title: "USA", icon: Star, href: "/countries/usa" },
  { title: "Australia", href: "/countries/australia" },
  { title: "Canada", href: "/countries/canada" },
  { title: "Europe", href: "/countries/europe" },
  { title: "Saudi Arabia", href: "/countries/saudi-arabia" },
  { title: "UAE", href: "/countries/uae" },
  { title: "Pakistan", href: "/countries/pakistan" },
];

export const aiTools: NavChild[] = [
  { title: "AI Chatbot", description: "Instant answers, 24/7", href: "/ai/chatbot", icon: Bot },
  { title: "Visa Eligibility Check", description: "2-minute automated assessment", href: "/ai/visa-eligibility", icon: CheckCircle2 },
  { title: "IELTS Score Predictor", description: "Estimate your IELTS band", href: "/ai/ielts-predictor", icon: BarChart3 },
  { title: "Germany Salary Calculator", description: "Net salary after German tax", href: "/ai/salary-calculator", icon: Calculator },
  { title: "Study Cost Calculator", description: "Tuition, living & visa budget", href: "/ai/study-cost-calculator", icon: FileText },
];

export const links = {
  whatsapp: "https://wa.me/923000000000",
  phone: "+92 300 0000000",
  email: "info@shozani.com",
};