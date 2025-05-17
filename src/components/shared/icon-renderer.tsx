
import React from 'react';
import type { LucideProps } from 'lucide-react';
import { 
  Eye, Microscope, Wrench, Camera as LucideCamera, ScanSearch as LucideScanSearch, 
  SquareActivity as LucideSquareActivity, FileText, BookOpen, Video, Link as LinkIcon, 
  Brain, Scaling, Briefcase, Users, Bot, Lightbulb, Map as LucideMap, 
  Calculator as LucideCalculator, Activity as LucideActivity, Library as LucideLibrary, 
  MousePointerClick as LucideMousePointerClick, BarChart2 as LucideBarChart, 
  MessageSquare as LucideMessageSquare, Share2 as LucideShare2, UserCheck as LucideUserCheck, 
  FileQuestion as LucideFileQuestion, Layers as LucideLayers, HelpCircle, ClipboardList,
  StickyNote, CalendarDays, BookMarked
} from 'lucide-react';

interface IconRendererProps extends LucideProps {
  iconName?: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  Eye,
  Microscope,
  Wrench,
  LucideCamera,
  LucideScanSearch,
  LucideSquareActivity,
  FileText,
  BookOpen,
  Video,
  LinkIcon,
  Brain,
  Scaling,
  Briefcase,
  Users,
  Bot,
  Lightbulb,
  LucideMap,
  LucideCalculator,
  LucideActivity,
  LucideLibrary,
  LucideMousePointerClick,
  LucideBarChart,
  LucideMessageSquare,
  LucideShare2,
  LucideUserCheck,
  LucideFileQuestion,
  LucideLayers,
  ClipboardList,
  StickyNote,
  CalendarDays,
  BookMarked,
  // Add other icons as needed by their string name
};

export const IconRenderer: React.FC<IconRendererProps> = ({ iconName, ...props }) => {
  if (!iconName) return null;
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    // console.warn(\`Icon "${iconName}" not found in iconMap.\`);
    return <HelpCircle {...props} />; // Fallback icon
  }

  return <IconComponent {...props} />;
};
