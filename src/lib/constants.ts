
import type { NavItem, ProjectNavItem, ProjectDetails, UpdatePost, DropdownNavItem } from '@/types';
import { Home, Info, Layers, Mail, Bot, LucideMousePointerClick, Users, FilePenLine, Monitor, StickyNote, LucideCalculator, Brain, Heart, MessageSquare, Lightbulb, LucideFileQuestion, Briefcase, ClipboardList, Settings, Share2, LucideUserCheck, Link as LinkIcon, LucideActivity, LucideLibrary, BarChart2 as LucideBarChart, Target, Eye, ShieldCheck, Quote, Rocket, Sparkles, AlertTriangle, Crown, IndianRupee, Gift, CheckCircle, Megaphone, CalendarDays, Headphones, Timer, Voicemail, PlayCircle, Clock, BookOpen, Wrench, Video, HelpCircle } from 'lucide-react';
import type React from 'react';

export const NAV_ITEMS: DropdownNavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/updates', label: 'Updates', icon: Megaphone },
  { href: '/support', label: 'Support', icon: Mail },
];

export const PROJECT_NAV_ITEMS: ProjectNavItem[] = [
  { href: '/projects/focus-ai', label: 'Focus.Ai', icon: Bot, description: "AI-powered diagnostic assistance." },
  { href: '/projects/focus-axis', label: 'Focus Axis', icon: LucideMousePointerClick, description: "JCC Simulator & Gamified Training." },
  { href: '/projects/focuscase', label: 'FocusCase', icon: FilePenLine, description: "Interactive case studies platform." },
  { href: '/projects/focus-gen', label: 'Focus Gen', icon: LucideCalculator, description: "Transposition Sums: Generate & Practice." },
  { href: '/projects/focuscast', label: 'Focus Cast', icon: Headphones, description: "Optometry Audio Learning, On the Go." },
  { href: '/projects/focus-clinic', label: 'Focus Clinic', icon: Monitor, description: "Clinical Management System (Beta)." },
];


export const PROJECTS_DETAILS_DATA: ProjectDetails[] = [
  {
    slug: 'focus-ai',
    title: 'Focus.Ai',
    tagline: 'An All-In-One Study Toolkit for Optometry',
    description: 'Focus AI is your smart, AI-powered assistant for optometry studies. It simplifies complex theories, helps interpret clinical cases, and aids in preparing for exams, making your learning journey more efficient and confident. Everything you need to succeed, from first year to board exams.',
    longDescription: "Focus.Ai serves as an advanced learning aid, helping students understand how to interpret complex clinical information, such as OCT reports and other ophthalmological data. While it utilizes AI to break down cases and highlight potential areas of interest, it is designed to support the educational process, not to provide definitive diagnoses or replace professional clinical judgment. The interpretations offered are for learning purposes and may vary based on individual case conditions and complexities; it is not 100% accurate and should be used as a supplementary study tool.",
    iconName: 'Bot',
    imageUrl: 'https://picsum.photos/seed/focusai/600/400',
    features: [
        { title: 'AI Assistant', description: 'Get instant, detailed answers to complex optometry questions.', iconName: 'MessageSquare' },
        { title: 'AI Canvas', description: 'Generate comprehensive, editable study guides on any topic.', iconName: 'FilePenLine' },
        { title: 'Study Notes', description: 'Create, organize, and search your own digital study library.', iconName: 'BookOpen' },
        { title: 'Guided Study Sessions', description: 'Learn step-by-step with AI-curated notes and integrated quizzes.', iconName: 'LucideActivity' },
        { title: 'Interactive Case Studies', description: 'Sharpen clinical decision-making with realistic patient scenarios.', iconName: 'Briefcase' },
        { title: 'Customisable Quizzes', description: 'Generate tailored quizzes with various question types and difficulties.', iconName: 'Wrench' },
        { title: 'Flow Learning', description: 'A swipe-to-learn interface for continuous, engaging study sessions.', iconName: 'Layers' },
        { title: 'Case Interpretation Helper', description: 'Assists students in learning to analyze and interpret various clinical findings.', iconName: 'ClipboardList' },
    ],
  },
  {
    slug: 'focus-axis',
    title: 'Focus Axis',
    tagline: 'JCC Simulator: Master Lens Flipping',
    description: 'Focus Axis offers a JCC (Jackson Cross Cylinder) simulator. Practice lens flipping and other techniques in a virtual, gamified learning experience.',
    longDescription: 'Enhance your clinical skills with interactive exercises that mimic real-world scenarios, providing a safe and engaging way to master JCC techniques and improve your accuracy in refraction.',
    iconName: 'LucideMousePointerClick',
    imageUrl: 'https://picsum.photos/seed/focusaxis/600/400',
    features: [
      { title: 'JCC Simulation', description: 'Realistic simulation of Jackson Cross Cylinder tests.', iconName: 'MousePointerClick' },
      { title: 'Gamified Learning Modules', description: 'Engaging training exercises with progress tracking.', iconName: 'LucideActivity' },
      { title: 'Skill Refinement', description: 'Practice and perfect lens flipping techniques.', iconName: 'Wrench' },
    ],
  },
  {
    slug: 'focuscase',
    title: 'FocusCase',
    tagline: 'Interactive Clinical Learning and Case Logging',
    description: 'FocusCase is an AI-powered learning assistant for optometry students. Log real cases, ask questions, get summaries, and practice viva sessions all based on your own logs. No data is stored everything stays temporarily in your browser tab to ensure privacy and medical ethics.',
    longDescription: "It is not just a case logger it is an AI-powered learning assistant for optometry students. You can log your real cases, ask specific questions about them, get summaries and interpretations, and practice viva sessions all based on your own logs. No data is stored everything stays temporarily in your browser tab to ensure privacy and medical ethics.",
    iconName: 'FilePenLine',
    imageUrl: 'https://picsum.photos/seed/focuscase/600/400',
    features: [
      { title: 'Real Case Logging', description: 'Log your clinical cases with detailed information.', iconName: 'FilePenLine' },
      { title: 'AI-Powered Q&A', description: 'Ask specific questions about your logged cases and get AI assistance.', iconName: 'MessageSquare' },
      { title: 'Case Summaries and Interpretation', description: 'Receive AI-generated summaries and interpretations of your case data.', iconName: 'Brain' },
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
    imageUrl: 'https://picsum.photos/seed/focuscast/600/400',
    features: [
      { title: 'Short, High-Impact Episodes', description: 'Focused audio lessons (5–15 mins) for fast revision and deep understanding.', iconName: 'Timer' },
      { title: 'Topic Tracks Include', description: 'Clinical Refraction, Instruments, Segment Disorders, Binocular Vision, Pharmacology, Career Guidance & Innovation.', iconName: 'LucideLibrary' },
      { title: 'Weekly Episode Drops', description: 'Consistent content flow to help you revise smarter and stay on track.', iconName: 'CalendarDays' },
      { title: 'Screen-Free Learning', description: 'Learn on the go, whether walking, traveling, or resting your eyes.', iconName: 'Headphones' },
      { title: 'Free and Accessible', description: 'No login needed, 100% free. Just plug in and play.', iconName: 'PlayCircle' },
    ],
  },
  {
    slug: 'focus-gen',
    title: 'Focus Gen',
    tagline: 'Transposition Sums: Generate and Practice',
    description: 'Focus Gen is a transposition sum generator where you can create various types of transposition sums and practice them to sharpen your skills.',
    longDescription: 'This tool helps students master optical transposition by providing unlimited practice problems. Select parameters and generate sums for self-assessment and learning reinforcement. (Currently Available)',
    iconName: 'LucideCalculator',
    imageUrl: 'https://picsum.photos/seed/focusgen/600/400',
    features: [
      { title: 'Custom Sum Generation', description: 'Generate transposition sums based on selected criteria.', iconName: 'Settings' },
      { title: 'Practice Mode', description: 'Work through generated sums and check your answers.', iconName: 'LucideCalculator' },
      { title: 'Skill Enhancement', description: 'Improve accuracy and speed in optical calculations.', iconName: 'Brain' },
    ],
  },
  {
    slug: 'focus-clinic',
    title: 'Focus Clinic',
    tagline: 'Clinical Management System (Beta)',
    description: 'Focus Clinic is designed to simplify patient record management for optometry practices, offering an intuitive interface and essential features for efficient clinical workflows.',
    longDescription: 'Currently in beta, Focus Clinic aims to provide a cost-effective and user-friendly solution for managing patient data, appointments, and prescriptions. (Beta Program Ongoing)',
    iconName: 'Monitor',
    imageUrl: 'https://picsum.photos/seed/focusclinic/600/400',
    features: [
      { title: 'Patient Records', description: 'Comprehensive and secure patient data management.', iconName: 'Users'},
      { title: 'Appointment Scheduling', description: 'Easy-to-use calendar and booking system.', iconName: 'CalendarDays' },
      { title: 'Prescription Management', description: 'Generate and track patient prescriptions.', iconName: 'FileText' },
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
    slug: 'focus-emr-to-focus-clinic-rename',
    title: 'Project Update: Focus EMR is now Focus Clinic!',
    date: '2025-06-07',
    excerpt: "We're excited to announce a name change for one of our key projects. Focus EMR has been renamed to Focus Clinic to better reflect its mission of serving smaller optometry practices and its affordability.",
    content: `
<p>We're excited to share an important update regarding one of our ongoing projects. What was formerly known as Focus EMR will now be called <strong>Focus Clinic</strong>.</p>
<p>This name change reflects a refined vision for the project. We realized that the term "EMR" (Electronic Medical Record) often implies a system designed for larger hospitals and extensive server capabilities, which can be costly and complex. While our goal is to provide robust record-keeping, our primary focus is to empower smaller, independent optometry clinics with an affordable and user-friendly solution.</p>
<p>We thought the name 'EMR' didn't quite suit our vision well because EMR systems traditionally have more capability for running on large servers and are often associated with big hospitals. Our focus is on individual practitioners and smaller clinics who need an effective tool that is also budget-friendly.</p>
<p><strong>Focus Clinic</strong> aims to offer a streamlined, user-friendly system tailored to the needs of individual practitioners and smaller clinical setups. We believe this new name better communicates our commitment to providing a powerful tool that is accessible, affordable, and perfectly suited for managing patient data efficiently in a smaller clinic setting. We want to ensure it's a lot of value for a small clinic.</p>
<p>We're enthusiastic about this new direction and believe Focus Clinic will be a valuable asset for many optometry professionals. Thank you for your continued support!</p>
    `,
    author: 'The Focus-IN Team',
    tags: ['project update', 'focus-clinic', 'renaming', 'emr', 'affordability'],
    projectSlug: 'focus-clinic',
  },
  {
    slug: 'focus-ai-launch',
    title: 'Focus.AI: Your Smart Optometry Companion is Here!',
    date: '2025-03-23', // World Optometry Day
    excerpt: 'We are thrilled to announce the official launch of Focus.AI, your dedicated AI-powered assistant for optometry studies. Simplify complex theories, get help interpreting clinical cases, and prepare for exams with confidence.',
    content: `
<p>The wait is over! We're incredibly excited to announce the official launch of <strong>Focus.AI</strong>, your smart, AI-powered assistant designed specifically for optometry students, which was first conceived from personal need in June 2024 and now publicly available from March 23, 2025, World Optometry Day!</p>
<p>Focus.AI is built to help you navigate the complexities of optometry education. Whether you're grappling with challenging theories, learning to interpret clinical findings, or preparing for crucial exams, Focus.AI is here to support your learning journey and boost your confidence.</p>

<h3 class="text-xl font-semibold mt-6 mb-3">What Can Focus.AI Do For You?</h3>
<p>Focus.AI is more than just a tool; it's a learning partner. Here's a glimpse of its capabilities:</p>
<ul class="list-disc list-inside space-y-2 my-4 text-muted-foreground">
  <li><strong>Optometry AI Chat:</strong> Have a question? Get instant, knowledgeable answers from an AI trained extensively on optometry topics.</li>
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
];

export const getUpdatesData = (): UpdatePost[] => {
  return UPDATES_DATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getUpdateBySlug = (slug: string): UpdatePost | undefined => {
  return UPDATES_DATA.find(post => post.slug === slug);
};


