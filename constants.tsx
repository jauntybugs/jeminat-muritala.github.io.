
import React from 'react';
import { Layout, Code, Lightbulb, PenTool, Search, Zap, Rocket, Globe } from 'lucide-react';
import { CaseStudy, ClientProject, SkillCategory } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'designme',
    title: 'DesignMe',
    description: 'AI-powered design platform for non-designers and beginners.',
    image: 'https://picsum.photos/seed/designme/800/600',
    tags: ['AI Product', 'UX Research', 'Frontend'],
    problem: 'Beginners feel overwhelmed by professional design tools like Figma.',
    role: 'Founder & Lead Designer',
    approach: 'Leveraging Gemini API to translate natural language into UI components.',
    outcome: 'Streamlined the learning curve for 500+ early beta users.'
  },
  {
    id: 'keero',
    title: 'Keero',
    description: 'International trade ecosystem connecting global markets.',
    image: 'https://res.cloudinary.com/dreamsavvy/image/upload/v1771363758/Screenshot_2026-02-17_at_10.28.42_PM_trjbn2.png',
    tags: ['FinTech', 'B2B', 'Systems Design'],
    problem: 'Fragmented communication and manual paperwork in international trade.',
    role: 'Product Designer',
    approach: 'Created a unified dashboard for tracking shipments, payments, and compliance.',
    outcome: 'Reduced processing time for trade documents by 40%.'
  },
  {
    id: 'africa-beta',
    title: 'Africa Beta',
    description: 'Agent-based customer portal and commission system.',
    image: 'https://picsum.photos/seed/africabeta/800/600',
    tags: ['Logistics', 'Dashboard', 'Scalable UX'],
    problem: 'Agents struggled to track commissions and customer status in real-time.',
    role: 'Lead UX/UI Designer',
    approach: 'Mobile-first portal focused on high-visibility task completion.',
    outcome: 'Increased agent engagement and daily active users by 25%.'
  },
  {
    id: 'tutelage',
    title: 'Tutelage',
    description: 'On-demand African language learning platform concept.',
    image: 'https://res.cloudinary.com/dreamsavvy/image/upload/v1771363214/Screenshot_2026-02-17_at_10.19.01_PM_pjonx5.png',
    tags: ['EdTech', 'Cultural Innovation', 'Concept'],
    problem: 'Lack of interactive, modern platforms for indigenous African languages.',
    role: 'Product Strategy & Design',
    approach: 'Gamified micro-learning modules based on spoken-first pedagogy.',
    outcome: 'Received viral acclaim in design communities for UX innovation.'
  }
];

export const CLIENT_WORK: ClientProject[] = [
  { name: 'Oncre', industry: 'Fintech', type: 'UI/UX Design', impact: 'Modernized brand identity', image: 'https://res.cloudinary.com/dreamsavvy/image/upload/v1771363757/Screenshot_2026-02-17_at_10.27.24_PM_m7lerm.png' },
  { name: 'XPS Construction', industry: 'Industrial', type: 'Website Development', impact: 'Lead gen increased 60%', image: 'https://picsum.photos/seed/xps/400/300' },
  { name: 'AOA Foundation', industry: 'Non-Profit', type: 'Web Development', impact: 'Enhanced donor transparency', image: 'https://picsum.photos/seed/aof/400/300' },
  { name: 'Marble Lashe', industry: 'Beauty', type: 'Brand Experience', impact: 'Premium aesthetic launch', image: 'https://picsum.photos/seed/marble/400/300' },
  { name: 'Affinity Gallery', industry: 'Art', type: 'Website Development', impact: 'Digital collection showcase', image: 'https://picsum.photos/seed/affinity/400/300' },
  { name: 'Shekinah Family', industry: 'Community', type: 'Website Design', impact: 'Attendance tracking system', image: 'https://picsum.photos/seed/shekinah/400/300' },
];

export const SERVICES = [
  { icon: <PenTool size={24} />, title: 'UI/UX Design', desc: 'Crafting intuitive, accessible, and beautiful interfaces.' },
  { icon: <Code size={24} />, title: 'Web Development', desc: 'Building scalable, high-performance web applications.' },
  { icon: <Lightbulb size={24} />, title: 'Product Strategy', desc: 'Aligning design decisions with business goals.' },
  { icon: <Layout size={24} />, title: 'Design Systems', desc: 'Creating scalable component libraries for teams.' },
  { icon: <Search size={24} />, title: 'UX Research', desc: 'Data-driven insights to solve the right problems.' },
  { icon: <Zap size={24} />, title: 'Landing Page Optimization', desc: 'Driving conversions with strategic layouts.' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { 
    title: 'Design', 
    skills: ['UI/UX Design', 'Product Strategy', 'UX Research', 'Design Systems', 'Wireframing', 'Prototyping', 'Interaction Design'],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  { 
    title: 'Frontend Development', 
    skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'WordPress', 'Elementor', 'Tailwind CSS', 'Firebase'],
    color: 'from-purple-500/20 to-purple-600/20'
  },
  { 
    title: 'Platforms & Tools', 
    skills: ['Figma', 'Framer', 'Webflow', 'Adobe CC', 'Responsive Design', 'Component-Based Design', 'MVP Development'],
    color: 'from-orange-500/20 to-orange-600/20'
  }
];
