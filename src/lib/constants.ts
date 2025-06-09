
import type { NavItem, ProjectNavItem, ProjectDetails, UpdatePost } from '@/types';
import { Home, Info, Layers, Mail, Bot, LucideMousePointerClick, Users, FilePenLine, Monitor, StickyNote, LucideCalculator, Brain, Heart, MessageSquare, Lightbulb, LucideFileQuestion, Briefcase, ClipboardList, Settings, Share2, LucideUserCheck, Link as LinkIcon, LucideActivity, LucideLibrary, BarChart2 as LucideBarChart, Target, Eye, ShieldCheck, Quote, Rocket, Sparkles, AlertTriangle, Crown, IndianRupee, Gift, CheckCircle, Megaphone, CalendarDays, Headphones, Timer, Voicemail, PlayCircle, Clock } from 'lucide-react';
import type React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/projects', label: 'Our Projects', icon: Layers },
  { href: '/updates', label: 'Updates', icon: Megaphone },
  { href: '/origin-of-focus-in', label: 'Origin Story', icon: Lightbulb },
  { href: '/support', label: 'Support', icon: Mail },
];

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { href: '/projects/focus-ai', label: 'Focus.Ai', icon: Bot, description: "AI-powered diagnostic assistance." },
  { href: '/projects/focus-axis', label: 'Focus Axis', icon: LucideMousePointerClick, description: "JCC Simulator & Gamified Training." },
  { href: '/projects/focus-casex', label: 'Focus CaseX', icon: FilePenLine, description: "Interactive case studies platform." },
  { href: '/projects/focus-gen', label: 'Focus Gen', icon: LucideCalculator, description: "Transposition Sums: Generate & Practice." },
  { href: '/projects/focuscast', label: 'Focus Cast', icon: Headphones, description: "Optometry Audio Learning, On the Go." },
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
      { title: 'Practice Quiz Section', description: 'Test your knowledge with AI-generated quizzes tailored to different topics and skill levels.', iconName: 'LucideFileQuestion' },
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
    tagline: 'Interactive Clinical Learning & Case Logging',
    description: 'Focus CaseX is an AI-powered learning assistant for optometry students. Log real cases, ask questions, get summaries, and practice viva sessions—all based on your own logs. No data is stored — everything stays temporarily in your browser tab to ensure privacy and medical ethics.',
    longDescription: "It’s not just a case logger — it’s an AI-powered learning assistant for optometry students. You can log your real cases, ask specific questions about them, get summaries and interpretations, and practice viva sessions — all based on your own logs. No data is stored — everything stays temporarily in your browser tab to ensure privacy and medical ethics.",
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
    slug: 'focuscast',
    title: 'Focus Cast',
    tagline: 'Listen. Learn. Lead.',
    description: "Focuscast is your dedicated audio learning platform for optometry. Built for students, interns, and eye care professionals, it delivers bite-sized, high-yield episodes on clinical topics, exam prep, viva questions, interpretation skills, and more — all in a screen-free format. Whether you're walking, traveling, or resting your eyes, Focuscast helps you stay sharp without burning out.",
    longDescription: "Because sometimes, the best way to learn is to listen. No screens. No burnout. Just deep, focused learning — in your ears. Whether you're prepping for an exam, brushing up on a clinical topic, or just want to stay inspired in your optometry journey, Focuscast brings the classroom to your pocket. Start listening now at focuscast.netlify.app. No login needed. 100% free. Just plug in your earphones and press play.",
    iconName: 'Headphones',
    features: [
      { title: 'Short, High-Impact Episodes', description: 'Focused audio lessons (5–15 mins) for fast revision and deep understanding.', iconName: 'Timer' },
      { title: 'Comprehensive Topic Tracks', description: 'Covers Clinical Refraction, Instruments, Segment Disorders, Binocular Vision, Pharmacology, Career Guidance & Innovation.', iconName: 'LucideLibrary' },
      { title: 'Weekly Episode Drops', description: 'Consistent content flow to help you revise smarter and stay on track.', iconName: 'CalendarDays' },
      { title: 'Screen-Free Learning', description: 'Learn on the go, whether walking, traveling, or resting your eyes.', iconName: 'Headphones' },
      { title: 'Free & Accessible', description: 'No login needed, 100% free. Just plug in and play.', iconName: 'PlayCircle' },
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
      { title: 'Mentorship Connections', description: 'Find mentors or offer guidance to junior members.', iconName: 'LucideUserCheck' },
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
      { title: 'Organized Note-Taking', description: 'Structured notebooks and tagging.', iconName: 'FilePenLine' },
      { title: 'Resource Integration', description: 'Link notes to articles, videos, and case studies.', iconName: 'LinkIcon' },
      { title: 'Collaborative Study', description: 'Share notes and study with peers.', iconName: 'Share2' },
    ],
  },
];

// Helper to get project details by slug
export const getProjectDetailsBySlug = (slug: string): ProjectDetails | undefined => {
  return PROJECTS_DETAILS_DATA.find(p => p.slug === slug);
};

// UPDATES DATA
export const UPDATES_DATA: UpdatePost[] = [
  {
    slug: 'focus-ai-launch',
    title: 'Focus.AI: Your Smart Optometry Companion is Here!',
    date: '2023-04-16',
    excerpt: 'We are thrilled to announce the official launch of Focus.AI, your dedicated AI-powered assistant for optometry studies. Simplify complex theories, get help interpreting clinical cases, and prepare for exams with confidence.',
    content: `
<p>The wait is over! We're incredibly excited to announce the official launch of <strong>Focus.AI</strong>, your smart, AI-powered assistant designed specifically for optometry students.</p>
<p>Focus.AI is built to help you navigate the complexities of optometry education. Whether you're grappling with challenging theories, learning to interpret clinical findings, or preparing for crucial exams, Focus.AI is here to support your learning journey and boost your confidence.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">What Can Focus.AI Do For You?</h3>
<p>Focus.AI is more than just a tool; it's a learning partner. Here's a glimpse of its capabilities:</p>
<ul class="list-disc list-inside space-y-2 my-4 text-muted-foreground">
  <li><strong>AI Chat for Optometry:</strong> Have a question? Get instant, knowledgeable answers from an AI trained extensively on optometry topics.</li>
  <li><strong>Simplify Complex Concepts:</strong> Break down difficult theories into understandable explanations and summaries.</li>
  <li><strong>Clinical Case Interpretation Support:</strong> Learn to analyze various clinical findings, including OCT reports and other ophthalmological data. Focus.AI helps you understand how to approach these interpretations as a student.</li>
  <li><strong>Practice Quiz Section:</strong> Test your knowledge with AI-generated quizzes tailored to different topics and skill levels.</li>
  <li><strong>Case Study Generator:</strong> Create realistic virtual case studies to practice your diagnostic and management skills.</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3">A Note on Usage: Your Learning Companion</h3>
<p>It's important to remember that Focus.AI serves as an advanced <strong>learning aid</strong>. It's designed to help students understand how to interpret complex clinical information and to support the educational process. It is <em>not</em> intended to provide definitive diagnoses or replace professional clinical judgment. The interpretations and information offered are for learning purposes, and accuracy may vary based on individual case conditions and complexities. Always use Focus.AI as a supplementary study tool alongside your curriculum and clinical training.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">Get Started with Focus.AI Today!</h3>
<p>Ready to enhance your study experience? You can access Focus.AI and explore its features now. We believe it will be an invaluable resource in your journey to becoming a skilled optometry professional.</p>
<p class="mt-4">
  <a href="https://focusai.netlify.app" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold shadow-md transition-colors">
    Access Focus.AI
  </a>
  <a href="/projects/focus-ai" class="ml-4 inline-block text-primary hover:underline">
    Learn more about Focus.AI
  </a>
</p>
<p class="mt-4">We're excited for you to try Focus.AI and look forward to your feedback as we continue to develop and improve our tools for the optometry community!</p>
    `,
    author: 'The Focus-IN Team',
    tags: ['launch', 'focus-ai', 'ai', 'optometry', 'students'],
    projectSlug: 'focus-ai',
  },
  {
    slug: 'focus-cast-launch',
    title: 'Focus Cast is Now Live!',
    date: '2024-07-28', 
    excerpt: 'We are thrilled to announce the launch of Focus Cast, your new go-to audio learning platform for optometry. Listen to bite-sized episodes on the go!',
    content: `
<p>We are incredibly excited to officially launch <strong>Focus Cast</strong>, a dedicated audio learning platform designed specifically for optometry students, interns, and professionals.</p>
<p>In today's fast-paced world, finding time to sit down and study can be challenging. That's why we created Focus Cast – to bring high-yield optometry knowledge directly to your ears, whether you're commuting, exercising, or just taking a break from screens.</p>
<h3 class="text-xl font-semibold mt-4 mb-2">What to Expect:</h3>
<ul class="list-disc list-inside space-y-1 text-muted-foreground">
  <li><strong>Bite-Sized Episodes:</strong> Each episode is crafted to be between 5-15 minutes, perfect for quick learning sessions.</li>
  <li><strong>Diverse Topics:</strong> We cover a wide range of subjects including Clinical Refraction, Optometric Instruments, Anterior & Posterior Segment Disorders, Binocular Vision, Pharmacology, and even Career Guidance.</li>
  <li><strong>Screen-Free Learning:</strong> Give your eyes a rest and absorb information through our carefully curated audio content.</li>
  <li><strong>Free & Accessible:</strong> Focus Cast is 100% free, and no login is required. Just head over to <a href="https://focuscast.netlify.app" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">focuscast.netlify.app</a> and start listening!</li>
</ul>
<p class="mt-4">We believe Focus Cast will be an invaluable tool in your optometry journey, helping you learn smarter and stay inspired. Tune in today and let us know what you think!</p>
    `,
    author: 'The Focus-IN Team',
    tags: ['launch', 'focuscast', 'audio learning'],
    projectSlug: 'focuscast',
  },
  {
    slug: 'welcome-to-updates',
    title: 'Welcome to Our New Updates Section!',
    date: '2024-07-27', 
    excerpt: 'This is the first post in our new Updates section. We\'ll be sharing news about our projects, upcoming features, and insights from the Focus-IN team.',
    content: `
<p>Hello everyone, and welcome to the official Updates section of Focus-IN!</p>
<p>We're excited to have this new space to share all the latest happenings with our projects, announce new features, and provide insights into what we're working on behind the scenes. Our goal is to keep you informed and engaged with the continuous development and improvement of our tools for the optometry community.</p>
<p>Here’s what you can expect to find in this section:</p>
<ul class="list-disc list-inside space-y-1 text-muted-foreground">
  <li><strong>Project Milestones:</strong> Updates on major developments and releases for tools like Focus.Ai, Focus Axis, Focus Gen, and more.</li>
  <li><strong>New Features:</strong> Detailed explanations of new functionalities added to our platforms.</li>
  <li><strong>Community News:</strong> Highlights from our user community and ways to get involved.</li>
  <li><strong>Behind-the-Scenes:</strong> Occasional posts about our development process and the vision driving Focus-IN.</li>
</ul>
<p class="mt-4">Stay tuned for more updates, and thank you for being a part of the Focus-IN journey!</p>
    `,
    author: 'The Focus-IN Team',
    tags: ['announcement', 'meta'],
  },
];

export const getUpdatesData = (): UpdatePost[] => {
  return UPDATES_DATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getUpdateBySlug = (slug: string): UpdatePost | undefined => {
  return UPDATES_DATA.find(post => post.slug === slug);
};

