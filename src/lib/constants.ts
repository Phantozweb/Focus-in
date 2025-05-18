
import type { NavItem, ProjectNavItem, Resource, ProjectDetails } from '@/types';
import { Home, Info, Layers, Mail, Bot, MousePointerClick, Users, FilePenLine, Monitor, StickyNote, BookMarked, LucideCalculator, Brain, Heart } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/projects', label: 'Our Projects', icon: Layers },
  { href: '/resources', label: 'Project Spotlights', icon: BookMarked },
  { href: '/support', label: 'Support', icon: Mail },
];

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { href: '/projects/focus-ai', label: 'Focus.Ai', icon: Bot, description: "AI-powered diagnostic assistance." },
  { href: '/projects/focus-axis', label: 'Focus Axis', icon: MousePointerClick, description: "JCC Simulator & Gamified Training." },
  { href: '/projects/focus-casex', label: 'Focus CaseX', icon: FilePenLine, description: "Interactive case studies platform." },
  { href: '/projects/focus-share', label: 'Focus Share', icon: Users, description: "Collaborative platform (Upcoming)." },
  { href: '/projects/focus-gen', label: 'Focus Gen', icon: LucideCalculator, description: "Transposition Sums: Generate & Practice." },
  { href: '/projects/focus-emr', label: 'Focus EMR', icon: Monitor, description: "Electronic Medical Records (Beta)." },
  { href: '/projects/focus-notes', label: 'Focus Notes', icon: StickyNote, description: "Smart note-taking for students (Upcoming)." },
];


export const PROJECTS_DETAILS_DATA: ProjectDetails[] = [
  {
    slug: 'focus-ai',
    title: 'Focus.Ai',
    tagline: 'AI-Powered Optometry Assistance, Learning, and Practice Tools',
    description: 'Focus AI is an innovative tool leveraging Artificial Intelligence designed to significantly enhance the efficiency and accuracy of optometric diagnostics, patient management, and professional learning.',
    longDescription: 'Focus.Ai aims to reduce diagnostic errors and improve patient outcomes by integrating with existing diagnostic tools and offering a second layer of analysis powered by machine learning algorithms.',
    iconName: 'Bot',
    features: [
      { title: 'Optometry AI Chat', description: 'Ask questions to an AI specially trained on optometry knowledge for instant assistance.', iconName: 'MessageSquare' },
      { title: 'Learning Aid', description: 'Utilize AI-powered explanations and summaries to deepen understanding of complex optometric concepts.', iconName: 'Lightbulb' },
      { title: 'Practice Quiz Section', description: 'Test your knowledge with AI-generated quizzes tailored to different topics and skill levels.', iconName: 'FileQuestion' },
      { title: 'Case Study Generator', description: 'Create realistic case studies for practice, training, and educational purposes.', iconName: 'Briefcase' },
      { title: 'Streamlined Patient Management', description: 'Aids in managing patient information and workflows, enhancing practice efficiency.', iconName: 'ClipboardList' },
    ],
  },
  {
    slug: 'focus-axis',
    title: 'Focus Axis',
    tagline: 'JCC Simulator: Master Lens Flipping',
    description: 'Focus Axis offers a JCC (Jackson Cross Cylinder) simulator. Practice lens flipping and other techniques in a virtual, gamified learning experience.',
    longDescription: 'Enhance your clinical skills with interactive exercises that mimic real-world scenarios, providing a safe and engaging way to master JCC techniques and improve your accuracy in refraction. (Currently Available)',
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
    tagline: 'Interactive Case Studies & Clinical Learning Platform',
    description: 'Focus CaseX is an educational platform where users can log clinical cases, ask questions, simulate viva sessions, and more. It\'s designed to enhance diagnostic and clinical reasoning skills. (Currently in development).',
    longDescription: 'Engage with realistic patient scenarios, make diagnostic decisions, and receive immediate feedback. CaseX aims to cover a wide range of ocular conditions and patient demographics, fostering a deeper understanding of clinical practice.',
    iconName: 'FilePenLine',
    features: [
      { title: 'Case Logging & Management', description: 'Securely log and organize patient cases for review and discussion.', iconName: 'LucideLibrary' },
      { title: 'Q&A and Discussion Forum', description: 'Ask questions about specific cases and engage in discussions with peers and mentors.', iconName: 'MessageSquare' },
      { title: 'Viva Simulation', description: 'Practice for oral examinations with simulated viva sessions.', iconName: 'Brain' },
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
      { title: 'Discussion Forums', description: 'Engage in specialty-specific discussions and Q&A.', iconName: 'MessageSquare' },
      { title: 'Resource Sharing', description: 'Upload and access study materials, articles, and presentations.', iconName: 'Share2' },
      { title: 'Mentorship Connections', description: 'Find mentors or offer guidance to junior members.', iconName: 'UserCheck' },
    ],
  },
  {
    slug: 'focus-gen',
    title: 'Focus Gen',
    tagline: 'Transposition Sums: Generate & Practice',
    description: 'Focus Gen is a transposition sum generator. Create various types of transposition sums and practice them to sharpen your skills.',
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
      { title: 'Organized Note-Taking', description: 'Structured notebooks and tagging.', iconName: 'BookMarked' },
      { title: 'Resource Integration', description: 'Link notes to articles, videos, and case studies.', iconName: 'LinkIcon' },
      { title: 'Collaborative Study', description: 'Share notes and study with peers.', iconName: 'Share2' },
    ],
  },
];

// Helper to get project details by slug
export const getProjectDetailsBySlug = (slug: string): ProjectDetails | undefined => {
  return PROJECTS_DETAILS_DATA.find(p => p.slug === slug);
};

export const RESOURCES_DATA: Resource[] = PROJECTS_DETAILS_DATA.map(project => ({
  id: project.slug,
  title: `Project Spotlight: ${project.title}`,
  summary: `Learn more about ${project.title} - ${project.tagline}. Click to explore its features and development status.`,
  link: `/projects/${project.slug}`,
  type: 'project-spotlight',
  iconName: project.iconName,
}));
