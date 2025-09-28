
"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, User, ArrowLeft, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconRenderer } from '@/components/shared/icon-renderer';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';

const faqData = [
    {
        category: "General",
        icon: 'Users',
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
        icon: 'Bot',
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
        icon: 'MousePointerClick',
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
        icon: 'Headphones',
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
    },
    {
        category: "Focus CaseX",
        icon: 'FilePenLine',
        questions: [
            {
                question: "What is Focus CaseX?",
                answer: "Focus CaseX is an AI-powered platform that lets you log real patient cases and then use AI to interact with that data. You can ask the AI questions about the case, get summaries, and even practice for viva exams, all based on your own logged information."
            },
            {
                question: "Is my patient data stored anywhere?",
                answer: "Absolutely not. Focus CaseX is designed with privacy as its top priority. All case information you enter is processed temporarily in your browser and is never sent to or stored on our servers. Once you close the tab, the data is gone."
            },
             {
                question: "How does this help me prepare for viva exams?",
                answer: "After logging a case, you can start a simulated viva session. The AI will ask you relevant questions about the case, from patient history to diagnosis and management, just like a real examiner would. It's a great way to practice your clinical reasoning and communication skills under pressure."
            }
        ]
    },
    {
        category: "Focus Gen",
        icon: 'LucideCalculator',
        questions: [
            {
                question: "What is Focus Gen?",
                answer: "Focus Gen is a simple but powerful tool for optometry students. It's a transposition sum generator that allows you to create an unlimited number of practice problems to master optical calculations."
            },
            {
                question: "Why do I need to practice transposition?",
                answer: "Transposition is a fundamental skill in optometry used to convert prescriptions between plus and minus cylinder forms. Being fast and accurate is essential for both exams and clinical practice. Focus Gen helps you build that speed and confidence."
            }
        ]
    },
    {
        category: "Focus Links",
        icon: 'LinkIcon',
        questions: [
            {
                question: "What is Focus Links?",
                answer: "Focus Links is a centralized, curated hub of essential online resources for optometry. Instead of juggling hundreds of bookmarks, you can find links to top-tier academic journals, clinical calculators, professional organizations, and study guides all in one place."
            },
            {
                question: "Is Focus Links a free resource?",
                answer: "Yes, Focus Links is completely free to use. Our goal is to streamline access to information for the entire optometry community."
            }
        ]
    }
];

type ChatMessage = {
    sender: 'bot' | 'user' | 'system';
    type: 'text' | 'category-selection' | 'question-selection' | 'unanswered-prompt';
    content?: string;
    payload?: any;
    id: number;
}

export function FaqChat() {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial greeting from the bot
        setChatHistory([
            {
                sender: 'bot',
                type: 'text',
                content: "Welcome to the Focus-IN Help Center! I'm here to assist you. What can I help you with today?",
                id: Date.now()
            },
            {
                sender: 'system',
                type: 'category-selection',
                payload: faqData,
                id: Date.now() + 1
            }
        ]);
    }, []);

    useEffect(() => {
        // Auto-scroll to the bottom of the chat
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [chatHistory]);

    const handleCategorySelect = (category: any) => {
        setSelectedCategory(category);
        setChatHistory(prev => [
            ...prev.filter(msg => msg.type !== 'category-selection' && msg.type !== 'unanswered-prompt'), // remove old selection
            { sender: 'user', type: 'text', content: `I have a question about ${category.category}.`, id: Date.now() },
            { sender: 'bot', type: 'text', content: `Great! Here are some common questions about ${category.category}.`, id: Date.now() + 1 },
            { sender: 'system', type: 'question-selection', payload: category.questions, id: Date.now() + 2 }
        ]);
    };

    const handleQuestionSelect = (question: any) => {
        setChatHistory(prev => [
            ...prev.filter(msg => msg.type !== 'question-selection' && msg.type !== 'unanswered-prompt'),
            { sender: 'user', type: 'text', content: question.question, id: Date.now() },
            { sender: 'bot', type: 'text', content: question.answer, id: Date.now() + 1 },
            { sender: 'system', type: 'unanswered-prompt', id: Date.now() + 2 }
        ]);
    };
    
    const handleGoBack = () => {
        setSelectedCategory(null);
        setChatHistory(prev => [
            ...prev.filter(msg => msg.type !== 'question-selection' && msg.type !== 'unanswered-prompt'),
            { sender: 'bot', type: 'text', content: "What else can I help you with?", id: Date.now() },
            { sender: 'system', type: 'category-selection', payload: faqData, id: Date.now() + 1 }
        ]);
    };

    const renderMessageContent = (msg: ChatMessage) => {
        switch (msg.type) {
            case 'text':
                return <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: msg.content || '' }} />;
            case 'category-selection':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-popup">
                        {msg.payload.map((cat: any) => (
                            <Card key={cat.category} onClick={() => handleCategorySelect(cat)} className="cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                                <CardHeader className="flex flex-row items-center gap-4 p-4">
                                    <IconRenderer iconName={cat.icon} className="h-7 w-7 text-primary" />
                                    <CardTitle className="text-base">{cat.category}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                );
            case 'question-selection':
                return (
                     <div className="flex flex-col items-start gap-2 animate-popup">
                        {msg.payload.map((q: any, index: number) => (
                            <Button key={index} variant="outline" size="sm" className="h-auto text-left py-2" onClick={() => handleQuestionSelect(q)}>
                                {q.question}
                            </Button>
                        ))}
                        <Button variant="ghost" size="sm" onClick={handleGoBack} className="mt-2 text-primary">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                        </Button>
                    </div>
                );
            case 'unanswered-prompt':
                return (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-popup">
                        <p className="text-sm text-muted-foreground">Still have questions?</p>
                        <div className="flex gap-2">
                             <Button size="sm" onClick={handleGoBack}>Ask another question</Button>
                             <Button size="sm" variant="outline" asChild>
                                <Link href="/support"><Send className="mr-2 h-4 w-4"/>Contact Support</Link>
                             </Button>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    };

    return (
        <Card className="w-full shadow-2xl border-primary/20">
            <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Bot className="h-8 w-8 text-primary" />
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-card" />
                    </div>
                    <div>
                        <CardTitle className="text-xl">Focus-IN Help Center</CardTitle>
                        <CardDescription>Get help with our products and services.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <ScrollArea className="h-[60vh]" ref={scrollAreaRef}>
                 <CardContent className="p-4 sm:p-6 space-y-6">
                    {chatHistory.map((msg) => (
                        <div key={msg.id} className={cn("flex items-start gap-3", msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                            {msg.sender === 'bot' && <Bot className="h-7 w-7 text-primary flex-shrink-0" />}
                            
                            <div className={cn(
                                "max-w-md rounded-lg px-4 py-3 text-sm",
                                msg.sender === 'bot' && 'bg-muted',
                                msg.sender === 'user' && 'bg-primary text-primary-foreground',
                                msg.sender === 'system' && 'w-full max-w-full bg-transparent p-0'
                            )}>
                                {renderMessageContent(msg)}
                            </div>

                            {msg.sender === 'user' && <User className="h-7 w-7 text-muted-foreground flex-shrink-0" />}
                        </div>
                    ))}
                </CardContent>
            </ScrollArea>
        </Card>
    );
}
