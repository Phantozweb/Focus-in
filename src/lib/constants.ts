
import type { NavItem, ProjectNavItem, Resource, ProjectDetails } from '@/types';
import { Home, Info, Layers, Mail, Bot, MousePointerClick, Users, FilePenLine, Monitor, StickyNote, BookMarked, LucideCalculator, Brain, Heart, MessageSquare, Lightbulb, FileQuestion, Briefcase, ClipboardList, Settings, Share2, UserCheck, Link as LinkIcon, LucideActivity, LucideLibrary, LucideBarChart, Target, Eye, ShieldCheck, Search, Filter } from 'lucide-react';
import type React from 'react';

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
    description: 'Focus Axis offers a JCC (Jackson Cross Cylinder) simulator. Practice lens flipping and other techniques in a virtual, gamified learning experience. Currently in Beta.',
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
    tagline: 'Interactive Case Studies & Clinical Learning Platform (In Development)',
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

// Updated RESOURCES_DATA for "Project Spotlights" / Blog-like entries
export const RESOURCES_DATA: Resource[] = [
  {
    id: 'focus-ai-v2-launch-spotlight',
    slug: 'focus-ai-v2-launch',
    title: 'Focus.AI Version 2.0: Now with Image Analysis!',
    summary: 'Discover the exciting new features in Focus.AI v2.0, including advanced image analysis capabilities for OCT reports, a redesigned UI, and much more.',
    link: '/resources/focus-ai-v2-launch', 
    type: 'project-spotlight',
    iconName: 'Bot',
    date: '2025-05-13',
    tags: ['Focus.AI', 'New Feature', 'Update'],
    fullContent: `We are thrilled to announce the launch of Focus.AI Version 2.0! This major update brings a host of new features and improvements designed to further empower optometry students and professionals.
    
Key highlights include the integration of advanced image analysis for OCT and ophthalmological reports, allowing for deeper insights and learning opportunities. We've also completely redesigned the user interface for a more intuitive and streamlined experience.
    
Additionally, the study notes organization system has been significantly enhanced, and the AI Assistant now benefits from chat history. Explore new quick format modes like "simplify," "student-friendly," and "clinical focus" to tailor AI responses to your needs.
    
Read more about the journey and the technical details on the main Focus.AI project page.`
  },
  {
    id: 'focus-axis-ga-spotlight',
    slug: 'focus-axis-ga',
    title: 'Focus Axis JCC Simulator: Now Live (Beta)!',
    summary: 'Master the Jackson Cross Cylinder technique with our interactive and gamified simulator. Focus Axis is now available for all aspiring and practicing optometrists in its beta version.',
    link: '/resources/focus-axis-ga',
    type: 'project-spotlight',
    iconName: 'MousePointerClick',
    date: '2024-07-01',
    tags: ['Focus Axis', 'Launch', 'Beta', 'Training Tool'],
    fullContent: `Focus Axis, our JCC (Jackson Cross Cylinder) simulator, has officially launched in beta! This tool is designed to help optometry students and practitioners master lens flipping and other critical refraction techniques through a virtual, gamified learning experience.
    
The current beta includes core simulation features and initial training modules. We are actively seeking feedback from users like you to refine and expand its capabilities. Your input will be invaluable as we work towards a full release.
    
Try it out and let us know what you think!`
  },
  {
    id: 'focus-gen-intro-spotlight',
    slug: 'focus-gen-intro',
    title: 'Introducing Focus Gen: Your Transposition Practice Partner',
    summary: 'Struggling with transposition sums? Focus Gen is here to help! Generate unlimited practice questions and sharpen your optical calculation skills.',
    link: '/resources/focus-gen-intro',
    type: 'project-spotlight',
    iconName: 'LucideCalculator',
    date: '2024-06-15',
    tags: ['Focus Gen', 'Launch', 'Student Tool'],
    fullContent: `We're excited to introduce Focus Gen, a dedicated tool for mastering optical transposition. Understanding and performing transpositions accurately is a fundamental skill in optometry, and Focus Gen is designed to make practice more accessible and effective.
    
With Focus Gen, you can:
- Generate a wide variety of transposition sums.
- Practice at your own pace.
- Improve your accuracy and speed in optical calculations.

This tool is perfect for students preparing for exams or anyone looking to refresh their transposition skills. Check out the Focus Gen project page for more details.`
  },
  {
    id: 'focus-casex-dev-update-spotlight',
    slug: 'focus-casex-dev-update',
    title: 'Development Update: Focus CaseX is Taking Shape!',
    summary: 'Get a sneak peek into Focus CaseX, our upcoming interactive case study platform. We\'re working hard to bring you a new way to log cases, simulate vivas, and enhance your clinical reasoning.',
    link: '/resources/focus-casex-dev-update',
    type: 'project-spotlight',
    iconName: 'FilePenLine',
    date: '2024-08-01',
    tags: ['Focus CaseX', 'Development', 'Upcoming'],
    fullContent: `Development of Focus CaseX, our interactive clinical case study platform, is well underway! We envision CaseX as a dynamic learning environment where users can:
    
- Log and manage clinical cases.
- Engage in Q&A sessions about specific cases.
- Simulate viva examinations to prepare for real-world scenarios.
- Track their learning progress and identify areas for improvement.

Our team is focused on building a comprehensive and user-friendly platform. Stay tuned for more updates as we approach our beta release!`
  },
  {
    id: 'focus-emr-beta-spotlight',
    slug: 'focus-emr-beta',
    title: 'Focus EMR Beta Program: Join Us!',
    summary: 'We are excited to announce the beta program for Focus EMR. Help us refine our electronic medical records system designed specifically for optometry practices.',
    link: '/resources/focus-emr-beta',
    type: 'project-spotlight',
    iconName: 'Monitor',
    date: '2024-09-01',
    tags: ['Focus EMR', 'Beta', 'Practice Management'],
    fullContent: `The beta program for Focus EMR is now open! We're looking for optometry practices and professionals to help us test and refine our new Electronic Medical Records system.
    
Focus EMR aims to provide a streamlined, intuitive, and cost-effective solution for managing patient records, appointments, and prescriptions. Your feedback during this beta phase will be crucial in shaping the final product.
    
If you're interested in participating, please visit the Focus EMR project page or contact us through the support page.`
  },
];

// Helper to get resource details by slug
export const getResourceBySlug = (slug: string): Resource | undefined => {
  return RESOURCES_DATA.find(r => r.slug === slug);
};
