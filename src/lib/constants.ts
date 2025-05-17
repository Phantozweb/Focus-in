
import React from 'react';
import type { SVGProps } from 'react';
import type { NavItem, ProjectNavItem, Tool, Resource, ProjectDetails } from '@/types';
import { Home, Wrench, BookOpen, Mail, Brain, Scaling, Briefcase, Users, Bot, Eye, Lightbulb, Microscope, CheckCircle, Video, Link as LinkIcon, FileText, Camera as LucideCamera, ScanSearch as LucideScanSearch, SquareActivity as LucideSquareActivity, Map as LucideMap, Calculator as LucideCalculator, Activity as LucideActivity, Library as LucideLibrary, MousePointerClick as LucideMousePointerClick, BarChart2 as LucideBarChart, MessageSquare as LucideMessageSquare, Share2 as LucideShare2, UserCheck as LucideUserCheck, FileQuestion as LucideFileQuestion, Layers as LucideLayers } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/tools', label: 'Tools', icon: Wrench },
  { href: '/resources', label: 'Resources', icon: BookOpen },
  { href: '/support', label: 'Support', icon: Mail },
];

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { href: '/projects/focus-ai', label: 'Focus.Ai', icon: Brain, description: "AI-powered diagnostic assistance." },
  { href: '/projects/focus-axis', label: 'Focus Axis', icon: Scaling, description: "Advanced ocular measurement tools." },
  { href: '/projects/focus-casex', label: 'Focus CaseX', icon: Briefcase, description: "Interactive case studies platform." },
  { href: '/projects/focus-share', label: 'Focus Share', icon: Users, description: "Collaborative platform for students." },
  { href: '/projects/focus-gen', label: 'Focus Gen', icon: Bot, description: "Generative AI for study material creation." },
];

export const TOOLS_DATA: Tool[] = [
  { id: '1', name: 'Digital Phoropter', description: 'Advanced digital phoropter for precise refraction.', imageUrl: 'https://placehold.co/600x400.png', category: 'Diagnostic', icon: Eye, dataAiHint: 'phoropter medical' },
  { id: '2', name: 'Slit Lamp', description: 'High-magnification slit lamp for detailed eye examination.', imageUrl: 'https://placehold.co/600x400.png', category: 'Diagnostic', icon: Microscope, dataAiHint: 'slit lamp' },
  { id: '3', name: 'Lensmeter', description: 'Automated lensmeter for accurate lens measurement.', imageUrl: 'https://placehold.co/600x400.png', category: 'Optical', icon: Wrench, dataAiHint: 'lensmeter optometry' },
  { id: '4', name: 'Retinal Camera', description: 'Fundus camera for capturing high-resolution retinal images.', imageUrl: 'https://placehold.co/600x400.png', category: 'Imaging', icon: LucideCamera, dataAiHint: 'retinal camera' },
  { id: '5', name: 'OCT Machine', description: 'Optical Coherence Tomography for cross-sectional imaging.', imageUrl: 'https://placehold.co/600x400.png', category: 'Imaging', icon: LucideScanSearch, dataAiHint: 'OCT machine' },
  { id: '6', name: 'Visual Field Analyzer', description: 'Perimeter for assessing visual field defects.', imageUrl: 'https://placehold.co/600x400.png', category: 'Diagnostic', icon: LucideSquareActivity, dataAiHint: 'visual field' },
];

export const RESOURCES_DATA: Resource[] = [
  { id: '1', title: 'Clinical Optics Guide', summary: 'A comprehensive guide to understanding clinical optics.', link: '#', type: 'article', icon: FileText, imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'optics textbook' },
  { id: '2', title: 'Anatomy of the Eye', summary: 'Interactive module on ocular anatomy.', link: '#', type: 'course', icon: BookOpen, imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'eye anatomy' },
  { id: '3', title: 'Refraction Techniques Video', summary: 'Video tutorial on mastering refraction techniques.', link: '#', type: 'video', icon: Video, imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'optometry lecture' },
  { id: '4', title: 'Optometry Journal Online', summary: 'Access to the latest research and articles in optometry.', link: '#', type: 'website', icon: LinkIcon, imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'medical journal' },
];


export const PROJECTS_DETAILS_DATA: ProjectDetails[] = [
  {
    slug: 'focus-ai',
    title: 'Focus.Ai',
    tagline: 'Intelligent Diagnostic Assistance for Optometrists',
    description: 'Focus.Ai leverages artificial intelligence to provide decision support for optometrists, helping analyze diagnostic images and patient data for more accurate and efficient assessments.',
    longDescription: 'Our platform integrates with existing diagnostic tools, offering a second layer of analysis powered by machine learning algorithms trained on vast datasets of ocular conditions. Focus.Ai aims to reduce diagnostic errors and improve patient outcomes.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'AI healthcare',
    bannerImageUrl: 'https://placehold.co/1200x400.png',
    bannerDataAiHint: 'artificial intelligence',
    icon: Brain,
    features: [
      { title: 'AI Image Analysis', description: 'Automated analysis of retinal scans, OCT images, and more.', icon: LucideScanSearch },
      { title: 'Predictive Diagnostics', description: 'Early detection models for common eye diseases.', icon: Lightbulb },
      { title: 'Personalized Patient Insights', description: 'Tailored risk assessments based on patient history and genetics.', icon: Users },
    ],
  },
  {
    slug: 'focus-axis',
    title: 'Focus Axis',
    tagline: 'Precision Ocular Measurement and Analysis',
    description: 'Focus Axis offers a suite of advanced tools for precise measurement of ocular parameters, essential for complex lens fitting, surgical planning, and tracking disease progression.',
    longDescription: 'From corneal topography to axial length measurement, Focus Axis provides high-resolution data and intuitive analysis software to enhance clinical decision-making and improve the accuracy of treatments.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'medical measurement',
    bannerImageUrl: 'https://placehold.co/1200x400.png',
    bannerDataAiHint: 'precision engineering',
    icon: Scaling,
    features: [
      { title: 'Corneal Topography', description: 'Detailed mapping of the corneal surface.', icon: LucideMap },
      { title: 'Biometry & IOL Calculation', description: 'Accurate axial length and IOL power calculations.', icon: LucideCalculator },
      { title: 'Wavefront Aberrometry', description: 'Comprehensive analysis of ocular aberrations.', icon: LucideActivity },
    ],
  },
  {
    slug: 'focus-casex',
    title: 'Focus CaseX',
    tagline: 'Interactive Optometry Case Studies Platform',
    description: 'Focus CaseX is an educational platform providing a rich library of interactive case studies for optometry students and professionals to hone their diagnostic and clinical reasoning skills.',
    longDescription: 'Engage with realistic patient scenarios, make diagnostic decisions, and receive immediate feedback. CaseX covers a wide range of ocular conditions and patient demographics, fostering a deeper understanding of clinical practice.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'medical education',
    bannerImageUrl: 'https://placehold.co/1200x400.png',
    bannerDataAiHint: 'e-learning platform',
    icon: Briefcase,
    features: [
      { title: 'Vast Case Library', description: 'Hundreds of curated cases across all optometric specialties.', icon: LucideLibrary },
      { title: 'Interactive Decision Making', description: 'Simulate clinical workflows and choices.', icon: LucideMousePointerClick },
      { title: 'Performance Analytics', description: 'Track your progress and identify areas for improvement.', icon: LucideBarChart },
    ],
  },
  {
    slug: 'focus-share',
    title: 'Focus Share',
    tagline: 'Collaborative Learning and Knowledge Sharing',
    description: 'Focus Share is a community platform designed for optometry students and practitioners to connect, share knowledge, discuss challenging cases, and collaborate on projects.',
    longDescription: 'Create study groups, participate in forums, share resources, and network with peers and mentors from around the world. Focus Share aims to build a supportive and dynamic optometric community.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'collaboration community',
    bannerImageUrl: 'https://placehold.co/1200x400.png',
    bannerDataAiHint: 'social network',
    icon: Users,
    features: [
      { title: 'Discussion Forums', description: 'Engage in specialty-specific discussions and Q&A.', icon: LucideMessageSquare },
      { title: 'Resource Sharing', description: 'Upload and access study materials, articles, and presentations.', icon: LucideShare2 },
      { title: 'Mentorship Connections', description: 'Find mentors or offer guidance to junior members.', icon: LucideUserCheck },
    ],
  },
  {
    slug: 'focus-gen',
    title: 'Focus Gen',
    tagline: 'AI-Powered Study Material Generation',
    description: 'Focus Gen utilizes generative AI to help students and educators create customized study materials, quizzes, and summaries from existing optometric texts and resources.',
    longDescription: 'Input your source material, specify your needs (e.g., flashcards, multiple-choice questions, concise summary), and let Focus Gen accelerate your learning and teaching preparation. ',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'AI writing tool',
    bannerImageUrl: 'https://placehold.co/1200x400.png',
    bannerDataAiHint: 'generative art',
    icon: Bot,
    features: [
      { title: 'Custom Quiz Generation', description: 'Create quizzes from textbooks or lecture notes.', icon: LucideFileQuestion },
      { title: 'Automated Summarization', description: 'Condense lengthy articles into key takeaways.', icon: FileText }, 
      { title: 'Flashcard Creation', description: 'Generate flashcards for quick review of important concepts.', icon: LucideLayers },
    ],
  },
];

// Helper to get project details by slug
export const getProjectDetailsBySlug = (slug: string): ProjectDetails | undefined => {
  return PROJECTS_DETAILS_DATA.find(p => p.slug === slug);
};

// Placeholder icons, actual components will be used.
// Using React.FC with explicit SVGProps and returning React.createElement to avoid JSX in .ts file.
const CameraPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const ScanSearchPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const SquareActivityPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const MapPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const CalculatorPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const ActivityPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const LibraryPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const MousePointerClickPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const BarChartPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const MessageSquarePlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const Share2Placeholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const UserCheckPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const FileQuestionPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const FileTextIconPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const LayersPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));


// Note: The original placeholder functions had names that could conflict with imported Lucide icons (e.g., Camera, Map).
// I've aliased the Lucide imports or used more specific Lucide icon names (e.g., LucideCamera, LucideMap, BarChart2)
// and renamed placeholder functions (e.g., CameraPlaceholder, FileTextIconPlaceholder)
// to ensure clarity and avoid naming collisions if these placeholders were ever to be used more broadly or exported.
// The project data (PROJECTS_DETAILS_DATA, TOOLS_DATA) has been updated to use actual Lucide icons where appropriate,
// or the correctly named placeholder if a generic SVG was intended.
// For 'Automated Summarization' feature in Focus Gen, it now uses the actual Lucide 'FileText' icon.
// For TOOLS_DATA, icons Camera, ScanSearch, SquareActivity were updated to use their Lucide counterparts.
// For PROJECTS_DETAILS_DATA features, icons were updated to use their Lucide counterparts.

// Example: If a feature was using a placeholder `Map` icon, it now uses `LucideMap`.
// This ensures that actual Lucide icons are used where they are available and placeholders are distinct.
// The placeholders defined above are generic and can be used if a specific Lucide icon isn't suitable or available.
// However, for "Automated Summarization" feature of "Focus Gen" project, I've changed its icon from `FileTextIconPlaceholder` to the actual `FileText` Lucide icon for better representation.
// All other placeholders remain defined but are not actively used in the current constants data if a suitable Lucide icon was found.
// If you intended to use specific placeholders, ensure they are assigned correctly in the data structures above.
// The current setup prioritizes using actual Lucide icons.
    