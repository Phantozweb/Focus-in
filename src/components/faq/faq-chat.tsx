
"use client";

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, FilePenLine, Headphones, IndianRupee, Link as LinkIcon, LucideCalculator, LucideMousePointerClick, User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '../shared/animated-section';

const faqData = [
    {
        category: "General",
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
        category: "Focus Axis",
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

type Conversation = {
    type: 'question' | 'answer';
    content: string;
    id: string;
};

export function FaqChat() {
    const [selectedCategory, setSelectedCategory] = useState(faqData[0]);
    const [conversation, setConversation] = useState<Conversation[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleCategorySelect = (category: typeof faqData[0]) => {
        setIsLoading(true);
        setSelectedCategory(category);
        setConversation([]);

        setTimeout(() => {
            const newConversation: Conversation[] = [];
            category.questions.forEach((q, index) => {
                newConversation.push({ type: 'question', content: q.question, id: `q-${index}` });
                newConversation.push({ type: 'answer', content: q.answer, id: `a-${index}` });
            });
            setConversation(newConversation);
            setIsLoading(false);
        }, 300);
    };

    useEffect(() => {
      handleCategorySelect(faqData[0]);
    }, []);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [conversation]);


    return (
        <Card className="shadow-2xl border-primary/20 w-full h-[70vh] flex flex-col">
            <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Bot className="h-9 w-9 text-primary" />
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Focus-IN Help Assistant</h2>
                        <p className="text-sm text-muted-foreground">Online and ready to help</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex overflow-hidden">
                <div className="w-1/3 border-r h-full overflow-y-auto bg-muted/30">
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-4 text-foreground">Topics</h3>
                        <div className="space-y-2">
                        {faqData.map(cat => {
                            const Icon = cat.icon;
                            return (
                            <Button
                                key={cat.category}
                                variant={selectedCategory.category === cat.category ? 'default' : 'ghost'}
                                className="w-full justify-start gap-3 h-12 text-base"
                                onClick={() => handleCategorySelect(cat)}
                            >
                                <Icon className="h-5 w-5" />
                                {cat.category}
                            </Button>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <ScrollArea className="w-2/3 h-full" ref={scrollAreaRef}>
                    <div className="p-6 space-y-6">
                        {conversation.map((msg, index) => (
                             <AnimatedSection key={`${msg.id}-${index}`} delay={index * 100} animationType='slide-up'>
                                <div className={cn("flex items-end gap-3 w-full", msg.type === 'question' ? 'justify-end' : 'justify-start')}>
                                    {msg.type === 'answer' && (
                                        <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                                    )}
                                    <div className={cn(
                                        "max-w-[80%] rounded-2xl p-4 shadow-md",
                                        msg.type === 'question' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted text-foreground rounded-bl-none'
                                    )}>
                                       <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{ __html: msg.content }} />
                                    </div>
                                     {msg.type === 'question' && (
                                        <User className="h-8 w-8 text-muted-foreground flex-shrink-0" />
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                         {isLoading && (
                            <div className="flex items-end gap-3 justify-start">
                                <Bot className="h-8 w-8 text-primary flex-shrink-0" />
                                <div className="bg-muted text-foreground rounded-2xl p-4 shadow-md rounded-bl-none flex items-center gap-2">
                                   <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-0"></span>
                                   <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-150"></span>
                                   <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-300"></span>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>
             <CardFooter className="p-4 border-t bg-muted/30">
                <p className="text-xs text-muted-foreground text-center w-full">
                    This is a simulated chat for browsing help topics. For direct support, please visit our <a href="/support" className="text-primary hover:underline">Support Page</a>.
                </p>
            </CardFooter>
        </Card>
    );
}
