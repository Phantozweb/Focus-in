
import type { NavItem, ProjectNavItem, ProjectDetails } from '@/types';
import { Home, Info, Layers, Mail, Bot, MousePointerClick, Users, FilePenLine, Monitor, StickyNote, LucideCalculator, Brain, Heart, MessageSquare, Lightbulb, FileQuestion, Briefcase, ClipboardList, Settings, Share2, UserCheck, Link as LinkIcon, LucideActivity, LucideLibrary, LucideBarChart, Target, Eye, ShieldCheck, Quote, Rocket, Sparkles, AlertTriangle, Crown, IndianRupee, Gift, CheckCircle, Megaphone, CalendarDays } from 'lucide-react';
import type React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/projects', label: 'Our Projects', icon: Layers },
  // { href: '/resources', label: 'Project Spotlights', icon: BookMarked }, // Removed
  { href: '/support', label: 'Support', icon: Mail },
];

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { href: '/projects/focus-ai', label: 'Focus.Ai', icon: Bot, description: "AI-powered diagnostic assistance." },
  { href: '/projects/focus-axis', label: 'Focus Axis', icon: MousePointerClick, description: "JCC Simulator & Gamified Training." },
  { href: '/projects/focus-casex', label: 'Focus CaseX', icon: FilePenLine, description: "Interactive case studies platform." },
  { href: '/projects/focus-gen', label: 'Focus Gen', icon: LucideCalculator, description: "Transposition Sums: Generate & Practice." },
  { href: '/projects/focus-emr', label: 'Focus EMR', icon: Monitor, description: "Electronic Medical Records (Beta)." },
  { href: '/projects/focus-notes', label: 'Focus Notes', icon: StickyNote, description: "Smart note-taking for students (Upcoming)." },
  { href: '/projects/focus-share', label: 'Focus Share', icon: Users, description: "Collaborative platform (Upcoming)." },
];


export const PROJECTS_DETAILS_DATA: ProjectDetails[] = [
  {
    slug: 'focus-ai',
    title: 'Focus.Ai',
    tagline: 'AI-Powered Optometry Assistance, Learning, and Practice Tools',
    description: 'Focus AI is your smart, AI-powered assistant for optometry studies. It simplifies complex theories, helps interpret clinical cases, and aids in preparing for exams, making your learning journey more efficient and confident.',
    longDescription: "Focus.Ai serves as an advanced learning aid, helping students understand how to interpret complex clinical information, such as OCT reports and other ophthalmological data. While it utilizes AI to break down cases and highlight potential areas of interest, it is designed to support the educational process, not to provide definitive diagnoses or replace professional clinical judgment. The interpretations offered are for learning purposes and may vary based on individual case conditions and complexities; it is not 100% accurate and should be used as a supplementary study tool.",
    iconName: 'Bot',
    features: [
      { title: 'Optometry AI Chat', description: 'Ask questions to an AI specially trained on optometry knowledge for instant assistance.', iconName: 'MessageSquare' },
      { title: 'Learning Aid', description: 'Utilize AI-powered explanations and summaries to deepen understanding of complex optometric concepts.', iconName: 'Lightbulb' },
      { title: 'Practice Quiz Section', description: 'Test your knowledge with AI-generated quizzes tailored to different topics and skill levels.', iconName: 'FileQuestion' },
      { title: 'Case Study Generator', description: 'Create realistic case studies for practice, training, and educational purposes.', iconName: 'Briefcase' },
      { title: 'Clinical Case Interpretation Support', description: 'Assists students in learning to analyze and interpret various clinical findings and reports.', iconName: 'ClipboardList' },
    ],
  },
  {
    slug: 'focus-axis',
    title: 'Focus Axis',
    tagline: 'JCC Simulator: Master Lens Flipping',
    description: 'Focus Axis offers a JCC (Jackson Cross Cylinder) simulator. Practice lens flipping and other techniques in a virtual, gamified learning experience.',
    longDescription: 'Enhance your clinical skills with interactive exercises that mimic real-world scenarios, providing a safe and engaging way to master JCC techniques and improve your accuracy in refraction.',
    iconName: 'MousePointerClick',
    features: [
      { title: 'JCC Simulation', description: 'Realistic simulation of Jackson Cross Cylinder tests.', iconName: 'MousePointerClick' },
      { title: 'Gamified Learning Modules', description: 'Engaging training exercises with progress tracking.', iconName: 'LucideActivity' },
      { title: 'Skill Refinement', description: 'Practice and perfect lens flipping techniques.', iconName: 'Wrench' },
    ],
  },
  {
    slug: 'focus-casex',
    title: 'Focus CaseX',
    tagline: 'AI-Powered Clinical Learning & Case Logging (In Development)',
    description: 'Focus CaseX is an AI-powered learning assistant for optometry students. Log real cases, ask questions, get summaries, and practice viva sessions—all based on your own logs. (In Development)',
    longDescription: "It’s not just a case logger — it’s an AI-powered learning assistant for optometry students 👁️‍🗨️📚. You can: Log your real cases 📝, Ask questions about them ❓, Get summaries and interpretations 🧠, Practice viva sessions — all based on your own logs 🎓. No data is stored — everything stays temporarily in your browser tab 🌐 to ensure privacy and medical ethics ✅.",
    iconName: 'FilePenLine',
    features: [
      { title: 'Real Case Logging', description: 'Log your clinical cases with detailed information.', iconName: 'FilePenLine' },
      { title: 'AI-Powered Q&A', description: 'Ask specific questions about your logged cases and get AI assistance.', iconName: 'MessageSquare' },
      { title: 'Case Summaries & Interpretation', description: 'Receive AI-generated summaries and interpretations of your case data.', iconName: 'Brain' },
      { title: 'Viva Session Practice', description: 'Practice viva examinations based on your logged cases.', iconName: 'ClipboardList' },
      { title: 'Privacy-Focused Design', description: 'No data is stored; all processing is done temporarily in your browser tab.', iconName: 'ShieldCheck' },
    ],
  },
  {
    slug: 'focus-share',
    title: 'Focus Share',
    tagline: 'Collaborative Learning and Knowledge Sharing (Upcoming)',
    description: 'Focus Share is a community platform designed for optometry students and practitioners to connect, share knowledge, discuss challenging cases, and collaborate on projects.',
    longDescription: 'Create study groups, participate in forums, share resources, and network with peers and mentors from around the world. Focus Share aims to build a supportive and dynamic optometric community. (Upcoming)',
    iconName: 'Users',
    features: [
      { title: 'Discussion Forums', description: 'Engage in specialty-specific discussions and Q&A.', iconName: 'MessageSquare' },
      { title: 'Resource Sharing', description: 'Upload and access study materials, articles, and presentations.', iconName: 'Share2' },
      { title: 'Mentorship Connections', description: 'Find mentors or offer guidance to junior members.', iconName: 'UserCheck' },
    ],
  },
  {
    slug: 'focus-gen',
    title: 'Focus Gen',
    tagline: 'Transposition Sums: Generate & Practice',
    description: 'Focus Gen is a transposition sum generator where you can create various types of transposition sums and practice them to sharpen your skills.',
    longDescription: 'This tool helps students master optical transposition by providing unlimited practice problems. Select parameters and generate sums for self-assessment and learning reinforcement. (Currently Available)',
    iconName: 'LucideCalculator',
    features: [
      { title: 'Custom Sum Generation', description: 'Generate transposition sums based on selected criteria.', iconName: 'Settings' },
      { title: 'Practice Mode', description: 'Work through generated sums and check your answers.', iconName: 'LucideCalculator' },
      { title: 'Skill Enhancement', description: 'Improve accuracy and speed in optical calculations.', iconName: 'Brain' },
    ],
  },
  {
    slug: 'focus-emr',
    title: 'Focus EMR',
    tagline: 'Streamlined Electronic Medical Records (Beta)',
    description: 'Focus EMR is designed to simplify patient record management for optometry practices, offering an intuitive interface and essential features for efficient clinical workflows.',
    longDescription: 'Currently in beta, Focus EMR aims to provide a cost-effective and user-friendly solution for managing patient data, appointments, and prescriptions. (Beta Program Ongoing)',
    iconName: 'Monitor',
    features: [
      { title: 'Patient Records', description: 'Comprehensive and secure patient data management.', iconName: 'Users'},
      { title: 'Appointment Scheduling', description: 'Easy-to-use calendar and booking system.', iconName: 'CalendarDays' },
      { title: 'Prescription Management', description: 'Generate and track patient prescriptions.', iconName: 'FileText' },
    ],
  },
  {
    slug: 'focus-notes',
    title: 'Focus Notes',
    tagline: 'Smart Note-Taking for Optometry Students (Upcoming)',
    description: 'Focus Notes is an upcoming tool to help optometry students organize their study notes, integrate them with resources, and collaborate effectively.',
    longDescription: 'More details coming soon! Focus Notes will feature smart organization, linking capabilities to other Focus resources, and collaborative features. (Launching Soon)',
    iconName: 'StickyNote',
    features: [
      { title: 'Organized Note-Taking', description: 'Structured notebooks and tagging.', iconName: 'BookMarked' }, // BookMarked is being removed, this can be StickyNote or FileText
      { title: 'Resource Integration', description: 'Link notes to articles, videos, and case studies.', iconName: 'LinkIcon' },
      { title: 'Collaborative Study', description: 'Share notes and study with peers.', iconName: 'Share2' },
    ],
  },
];

// Helper to get project details by slug
export const getProjectDetailsBySlug = (slug: string): ProjectDetails | undefined => {
  return PROJECTS_DETAILS_DATA.find(p => p.slug === slug);
};
