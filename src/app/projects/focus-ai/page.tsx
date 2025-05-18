
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { ChangelogDisplay, type ChangelogData } from '@/components/projects/changelog-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-ai');
  if (!project) {
    return { title: 'Project Not Found | Focus-IN' }
  }
  return {
    title: `${project.title} - AI Diagnostic Tool & Changelog | Focus-IN Projects`,
    description: `${project.description} Stay updated with the latest features and improvements.`,
  };
}

const focusAiChangelogData: ChangelogData = {
  currentVersion: "2.0",
  introduction: "Stay informed about the latest improvements, features, and bug fixes to Focus.AI. We're constantly working to enhance your learning experience.",
  versions: [
    {
      version: "2.0",
      releaseDate: "2025-05-13",
      summary: "Major update with image analysis capabilities and improved UI.",
      keyHighlights: [
        "Added image analysis for OCT and ophthalmological reports",
        "Completely redesigned user interface",
        "Enhanced study notes organization system",
        "Improved AI Assistant with chat history",
        "Added multiple format modes (simplify, student-friendly, clinical focus)"
      ],
      detailedChanges: [
        {
          title: "Image Analysis Integration",
          date: "2025-05-13",
          type: "New Feature",
          description: "AI can now interpret OCT and ophthalmological reports, providing detailed analysis and learning opportunities."
        },
        {
          title: "Enhanced Study Notes",
          date: "2025-05-13",
          type: "Improvement",
          description: "Complete redesign of the study notes section with better organization, tagging, and search functionality."
        },
        {
          title: "Advanced Quiz System",
          date: "2025-05-13",
          type: "Improvement",
          description: "Support for various question types including multiple choice, short answer, match the following, and weighted questions (1, 2, 5 marks)."
        },
        {
          title: "AI Assistant Chat History",
          date: "2025-05-13",
          type: "New Feature",
          description: "Chat history is now saved and accessible, making it easier to reference previous conversations."
        },
        {
          title: "Quick Format Modes",
          date: "2025-05-13",
          type: "New Feature",
          description: "New modes for AI responses: simplify, student-friendly, and clinical focus."
        }
      ]
    },
    {
      version: "1.0",
      releaseDate: "2024-10-01", // Example past date
      summary: "Initial release of Focus.AI with core AI diagnostic assistance and study material generation.",
      keyHighlights: [
        "AI-powered diagnostic suggestions",
        "Generative AI for creating study summaries",
        "Basic quiz generation feature"
      ],
      detailedChanges: [
         {
          title: "Core AI Engine",
          date: "2024-10-01",
          type: "New Feature",
          description: "Launched with foundational AI capabilities for text-based analysis."
        }
      ]
    }
  ],
  futureUpdates: {
    introduction: "We're constantly working on improving Focus.AI. Here are some features we're planning to add in future updates:",
    items: [
      "Mobile applications for Android and iOS",
      "Expanded case study database with more clinical scenarios",
      "Integration with our upcoming tools like Focus Share and Focus EMR",
      "Collaborative study tools for group learning",
      "Enhanced image analysis with 3D visualization of eye structures"
    ]
  },
  supportNote: "Your feedback and support are invaluable as we continue to develop Focus.AI. Consider supporting our development to help us bring more innovative features to the optometry community."
};


export default function FocusAiPage() {
  const project = getProjectDetailsBySlug('focus-ai');

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto container-padding py-12 md:py-16 space-y-12">
      <ProjectDetailsDisplay project={project} />
      <Separator />
      <ChangelogDisplay changelog={focusAiChangelogData} projectName="Focus.AI" />
    </div>
  );
}
