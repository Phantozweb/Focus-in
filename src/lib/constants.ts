
import React from 'react';
import type { SVGProps } from 'react';
import type { NavItem, ProjectNavItem, Resource, ProjectDetails } from '@/types';
import { Home, BookOpen, Mail, Brain, Scaling, Briefcase, Users, Bot, Eye, Lightbulb, Microscope, CheckCircle, Video, Link as LinkIcon, FileText, Camera as LucideCamera, ScanSearch as LucideScanSearch, SquareActivity as LucideSquareActivity, Map as LucideMap, Calculator as LucideCalculator, Activity as LucideActivity, Library as LucideLibrary, MousePointerClick as LucideMousePointerClick, BarChart2 as LucideBarChart, MessageSquare as LucideMessageSquare, Share2 as LucideShare2, UserCheck as LucideUserCheck, FileQuestion as LucideFileQuestion, Layers, ClipboardList, StickyNote } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Our Projects', icon: Layers },
  { href: '/resources', label: 'Resources', icon: BookOpen },
  { href: '/support', label: 'Support', icon: Mail },
];

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { href: '/projects/focus-ai', label: 'Focus.Ai', icon: Brain, description: "AI-powered diagnostic assistance." },
  { href: '/projects/focus-axis', label: 'Focus Axis', icon: Scaling, description: "Advanced ocular measurement tools." },
  { href: '/projects/focus-casex', label: 'Focus CaseX', icon: Briefcase, description: "Interactive case studies platform." },
  { href: '/projects/focus-share', label: 'Focus Share', icon: Users, description: "Collaborative platform (Upcoming)." },
  { href: '/projects/focus-gen', label: 'Focus Gen', icon: Bot, description: "Generative AI for study material creation." },
  { href: '/projects/focus-emr', label: 'Focus EMR', icon: ClipboardList, description: "Electronic Medical Records (Beta)." },
  { href: '/projects/focus-notes', label: 'Focus Notes', icon: FileText, description: "Smart note-taking for students (Upcoming)." },
];


export const RESOURCES_DATA: Resource[] = [
  { id: '1', title: 'Clinical Optics Guide', summary: 'A comprehensive guide to understanding clinical optics.', link: '#', type: 'article', iconName: 'FileText' },
  { id: '2', title: 'Anatomy of the Eye', summary: 'Interactive module on ocular anatomy.', link: '#', type: 'course', iconName: 'BookOpen' },
  { id: '3', title: 'Refraction Techniques Video', summary: 'Video tutorial on mastering refraction techniques.', link: '#', type: 'video', iconName: 'Video' },
  { id: '4', title: 'Optometry Journal Online', summary: 'Access to the latest research and articles in optometry.', link: '#', type: 'website', iconName: 'LinkIcon' },
];


export const PROJECTS_DETAILS_DATA: ProjectDetails[] = [
  {
    slug: 'focus-ai',
    title: 'Focus.Ai',
    tagline: 'Intelligent Diagnostic Assistance for Optometrists',
    description: 'Focus.Ai leverages artificial intelligence to provide decision support for optometrists, helping analyze diagnostic images and patient data for more accurate and efficient assessments.',
    longDescription: 'Our platform integrates with existing diagnostic tools, offering a second layer of analysis powered by machine learning algorithms trained on vast datasets of ocular conditions. Focus.Ai aims to reduce diagnostic errors and improve patient outcomes. (Currently Available)',
    iconName: 'Brain',
    features: [
      { title: 'AI Image Analysis', description: 'Automated analysis of retinal scans, OCT images, and more.', iconName: 'LucideScanSearch' },
      { title: 'Predictive Diagnostics', description: 'Early detection models for common eye diseases.', iconName: 'Lightbulb' },
      { title: 'Personalized Patient Insights', description: 'Tailored risk assessments based on patient history and genetics.', iconName: 'Users' },
    ],
  },
  {
    slug: 'focus-axis',
    title: 'Focus Axis',
    tagline: 'Precision Ocular Measurement and Analysis',
    description: 'Focus Axis offers a suite of advanced tools for precise measurement of ocular parameters, essential for complex lens fitting, surgical planning, and tracking disease progression.',
    longDescription: 'From corneal topography to axial length measurement, Focus Axis provides high-resolution data and intuitive analysis software to enhance clinical decision-making and improve the accuracy of treatments. (Currently Available)',
    iconName: 'Scaling',
    features: [
      { title: 'Corneal Topography', description: 'Detailed mapping of the corneal surface.', iconName: 'LucideMap' },
      { title: 'Biometry & IOL Calculation', description: 'Accurate axial length and IOL power calculations.', iconName: 'LucideCalculator' },
      { title: 'Wavefront Aberrometry', description: 'Comprehensive analysis of ocular aberrations.', iconName: 'LucideActivity' },
    ],
  },
  {
    slug: 'focus-casex',
    title: 'Focus CaseX',
    tagline: 'Interactive Optometry Case Studies Platform',
    description: 'Focus CaseX is an educational platform providing a rich library of interactive case studies for optometry students and professionals to hone their diagnostic and clinical reasoning skills.',
    longDescription: 'Engage with realistic patient scenarios, make diagnostic decisions, and receive immediate feedback. CaseX covers a wide range of ocular conditions and patient demographics, fostering a deeper understanding of clinical practice.',
    iconName: 'Briefcase',
    features: [
      { title: 'Vast Case Library', description: 'Hundreds of curated cases across all optometric specialties.', iconName: 'LucideLibrary' },
      { title: 'Interactive Decision Making', description: 'Simulate clinical workflows and choices.', iconName: 'LucideMousePointerClick' },
      { title: 'Performance Analytics', description: 'Track your progress and identify areas for improvement.', iconName: 'LucideBarChart' },
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
      { title: 'Discussion Forums', description: 'Engage in specialty-specific discussions and Q&A.', iconName: 'LucideMessageSquare' },
      { title: 'Resource Sharing', description: 'Upload and access study materials, articles, and presentations.', iconName: 'LucideShare2' },
      { title: 'Mentorship Connections', description: 'Find mentors or offer guidance to junior members.', iconName: 'LucideUserCheck' },
    ],
  },
  {
    slug: 'focus-gen',
    title: 'Focus Gen',
    tagline: 'AI-Powered Study Material Generation',
    description: 'Focus Gen utilizes generative AI to help students and educators create customized study materials, quizzes, and summaries from existing optometric texts and resources.',
    longDescription: 'Input your source material, specify your needs (e.g., flashcards, multiple-choice questions, concise summary), and let Focus Gen accelerate your learning and teaching preparation. (Currently Available)',
    iconName: 'Bot',
    features: [
      { title: 'Custom Quiz Generation', description: 'Create quizzes from textbooks or lecture notes.', iconName: 'LucideFileQuestion' },
      { title: 'Automated Summarization', description: 'Condense lengthy articles into key takeaways.', iconName: 'FileText' },
      { title: 'Flashcard Creation', description: 'Generate flashcards for quick review of important concepts.', iconName: 'LucideLayers' },
    ],
  },
  {
    slug: 'focus-emr',
    title: 'Focus EMR',
    tagline: 'Streamlined Electronic Medical Records (Beta)',
    description: 'Focus EMR is designed to simplify patient record management for optometry practices, offering an intuitive interface and essential features for efficient clinical workflows.',
    longDescription: 'Currently in beta, Focus EMR aims to provide a cost-effective and user-friendly solution for managing patient data, appointments, and prescriptions. (Beta Program Ongoing)',
    iconName: 'ClipboardList',
    features: [
      { title: 'Patient Records', description: 'Comprehensive and secure patient data management.', iconName: 'Users'},
      { title: 'Appointment Scheduling', description: 'Easy-to-use calendar and booking system.', iconName: 'CalendarDays' }, // Assuming CalendarDays is available or similar
      { title: 'Prescription Management', description: 'Generate and track patient prescriptions.', iconName: 'FileText' },
    ],
  },
  {
    slug: 'focus-notes',
    title: 'Focus Notes',
    tagline: 'Smart Note-Taking for Optometry Students (Upcoming)',
    description: 'Focus Notes is an upcoming tool to help optometry students organize their study notes, integrate them with resources, and collaborate effectively.',
    longDescription: 'More details coming soon! Focus Notes will feature smart organization, linking capabilities to other Focus resources, and collaborative features. (Launching Soon)',
    iconName: 'FileText', // Or StickyNote if available and preferred
    features: [
      { title: 'Organized Note-Taking', description: 'Structured notebooks and tagging.', iconName: 'BookMarked' }, // Assuming BookMarked or similar
      { title: 'Resource Integration', description: 'Link notes to articles, videos, and case studies.', iconName: 'LinkIcon' },
      { title: 'Collaborative Study', description: 'Share notes and study with peers.', iconName: 'Share2' },
    ],
  },
];

// Helper to get project details by slug
export const getProjectDetailsBySlug = (slug: string): ProjectDetails | undefined => {
  return PROJECTS_DETAILS_DATA.find(p => p.slug === slug);
};

// Placeholder icon functions using React.createElement to avoid JSX parsing issues in .ts files
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
const Share2PlaceholderIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props)); // Renamed to avoid conflict
const UserCheckPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const FileQuestionPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
const FileTextIconPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props)); 
const LayersPlaceholder: React.FC<SVGProps<SVGSVGElement>> = (props) => (React.createElement('svg', props));
