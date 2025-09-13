
import React from 'react';
import type { LucideProps } from 'lucide-react';
import { 
  Eye, Microscope, Wrench, Camera as LucideCamera, ScanSearch as LucideScanSearch, 
  SquareActivity as LucideSquareActivity, FileText, BookOpen, Video, Link as LinkIcon, 
  Brain, Scaling, Briefcase, Users, Bot, Lightbulb, Map as LucideMap, 
  Calculator as LucideCalculator, Activity as LucideActivity, Library as LucideLibrary, 
  MousePointerClick as LucideMousePointerClick, 
  BarChart2 as LucideBarChart, 
  MessageSquare as LucideMessageSquare, Share2 as LucideShare2, UserCheck as LucideUserCheck, 
  FileQuestion as LucideFileQuestion, Layers as LucideLayers, HelpCircle, ClipboardList,
  StickyNote, CalendarDays, Info, Aperture, Palette, TestTubeDiagonal, 
  Settings, ZoomIn, Database, GitBranch, CloudUpload, UserCircle, Quote, Rocket, Sparkles, AlertTriangle,
  Monitor, FilePenLine, Home, Mail, Heart, Target, ShieldCheck, Megaphone, Crown, IndianRupee, Gift, CheckCircle,
  Instagram, Linkedin, Search, ListFilter, Tag,
  Headphones, Timer, Voicemail, PlayCircle, Clock, Star, Ticket, Send, Loader2, BadgePercent,
  ClipboardCheck, ExternalLink, ChevronRight
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
  'MousePointerClick': LucideMousePointerClick,
  LucideBarChart,
  LucideMessageSquare,
  LucideShare2,
  UserCheck: LucideUserCheck,
  FileQuestion: LucideFileQuestion,
  Layers: LucideLayers,
  ClipboardList,
  StickyNote,
  CalendarDays,
  Info,
  Aperture,
  Palette,
  TestTubeDiagonal,
  Settings,
  ZoomIn,
  Database,
  GitBranch,
  CloudUpload,
  UserCircle,
  Quote,
  Rocket,
  Sparkles,
  AlertTriangle,
  Monitor,
  FilePenLine,
  Home, 
  Mail, 
  Heart,
  Target,
  ShieldCheck,
  Megaphone,
  Crown,
  IndianRupee,
  Gift,
  CheckCircle,
  Instagram,
  Linkedin,
  Search,
  ListFilter,
  Tag,
  Headphones,
  Timer,
  Voicemail,
  PlayCircle,
  Clock,
  Star,
  Ticket,
  Send,
  Loader2,
  BadgePercent,
  ClipboardCheck, 
  ExternalLink,
  ChevronRight,
  // Add other icons as needed by their string name
};

export const IconRenderer: React.FC<IconRendererProps> = ({ iconName, ...props }) => {
  if (!iconName) {
    const iconFromDisplayName = Object.entries(iconMap).find(([key, value]) => value.displayName === iconName);
    if(iconFromDisplayName) {
        const IconComponent = iconFromDisplayName[1];
        return <IconComponent {...props} />;
    }
    return <HelpCircle {...props} />;
  }
  
  const IconComponent = iconMap[iconName] || Object.values(iconMap).find(icon => (icon as any).displayName === iconName);


  if (!IconComponent) {
    // console.warn(`Icon "${iconName}" not found in iconMap.`);
    return <HelpCircle {...props} />; // Fallback icon
  }

  return <IconComponent {...props} />;
};
