
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionTitle } from '@/components/shared/section-title';
import type { Metadata } from 'next';
import { Bot, LucideMousePointerClick, Headphones, IndianRupee, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help Center | Focus-IN',
  description: 'Find answers to frequently asked questions about Focus-IN, our AI-powered optometry tools like Focus.Ai, the JCC simulator, and other learning resources for students.',
};

const faqData = [
    {
        category: "General Questions",
        icon: Users,
        questions: [
            {
                question: "What is Focus-IN?",
                answer: "Focus-IN is a suite of web-based tools and resources designed by optometry students, for optometry students. Our mission is to provide innovative, accessible technology that enhances learning, simplifies clinical practice, and helps you excel in your studies and career."
            },
            {
                question: "Who is behind Focus-IN?",
                answer: "We are a team of optometry students, educators, and tech enthusiasts passionate about improving vision care education. Our tools are born from the real-world challenges we faced during our own studies. You can learn more about us on our <a href='/about' class='text-primary hover:underline'>About page</a>."
            },
            {
                question: "Are the tools on Focus-IN free?",
                answer: "Many of our core tools, like Focus Cast and Focus Gen, are completely free to use. Our flagship product, <a href='/projects/focus-ai' class='text-primary hover:underline'>Focus.Ai</a>, operates on a paid model to support its advanced features and continuous development. We strive to keep our resources as accessible as possible."
            },
             {
                question: "How can I provide feedback or suggest a new tool?",
                answer: "We are community-driven and thrive on user feedback! If you have suggestions, feedback, or an idea for a new tool, please reach out to us through our <a href='/support' class='text-primary hover:underline'>Support page</a>. We'd love to hear from you."
            }
        ]
    },
    {
        category: "Focus.Ai",
        icon: Bot,
        questions: [
            {
                question: "How does Focus.Ai help with studying for optometry exams?",
                answer: "Focus.Ai is an all-in-one study toolkit. It can simplify complex topics, generate practice quizzes with different question formats (MCQs, short answers), help you understand clinical cases, and create comprehensive study guides with its 'Canvas' feature. It's like having a personal AI tutor available 24/7."
            },
            {
                question: "Is the clinical case interpretation in Focus.Ai accurate?",
                answer: "Focus.Ai is designed as a learning aid to help students understand how to interpret clinical findings. While it is trained on extensive optometry data, it is not a diagnostic tool and is not 100% accurate. It should be used as a supplementary study resource to develop your clinical reasoning skills, not to make definitive diagnoses."
            },
        ]
    },
    {
        category: "Focus Axis (JCC Simulator)",
        icon: LucideMousePointerClick,
        questions: [
            {
                question: "How realistic is the JCC simulator in Focus Axis?",
                answer: "Focus Axis is designed to be a highly realistic simulation of the Jackson Cross Cylinder (JCC) technique. It mimics the lens-flipping process and patient responses, allowing you to practice and refine your refraction skills in a gamified, risk-free environment. It's an excellent tool for building muscle memory and confidence before you work with real patients."
            },
            {
                question: "Who can benefit from using Focus Axis?",
                answer: "Focus Axis is perfect for first and second-year optometry students who are learning the JCC technique for the first time. It's also a great refresher for senior students and interns who want to sharpen their skills and improve their speed and accuracy."
            }
        ]
    },
     {
        category: "Focus Cast",
        icon: Headphones,
        questions: [
            {
                question: "What kind of topics does Focus Cast cover?",
                answer: "Focus Cast offers bite-sized audio episodes (5-15 minutes) on a wide range of high-yield topics, including clinical refraction, optometric instruments, binocular vision, pharmacology, and exam preparation. It's designed for screen-free learning on the go."
            },
            {
                question: "Is Focus Cast really free?",
                answer: "Yes, 100%! There is no login required and no subscription fee. You can start listening to all available episodes right away on the <a href='https://focuscast.netlify.app' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Focus Cast platform</a>."
            }
        ]
    }
];

export default function HelpPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Help Center"
        subtitle="Have questions? We've got answers. Here are some of the most common inquiries we receive about our optometry tools and platform."
      />
      <div className="max-w-4xl mx-auto space-y-12">
        {faqData.map((category, index) => {
            const Icon = category.icon;
            return(
                <div key={index}>
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-6">
                        <Icon className="h-7 w-7 text-primary" />
                        {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {category.questions.map((faq, qIndex) => (
                        <AccordionItem value={`item-${index}-${qIndex}`} key={qIndex} className="bg-muted/30 rounded-lg px-6 border">
                            <AccordionTrigger className="text-left hover:no-underline text-base md:text-lg">
                            {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-sm md:text-base pt-2">
                               <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            )
        })}
      </div>
    </div>
  );
}

    