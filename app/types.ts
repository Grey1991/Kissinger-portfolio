import { ReactNode } from 'react';

// 联系信息类型
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  website: string;
}

// 工作经历类型
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

// 教育经历类型
export interface Education {
  degree: string;
  school: string;
  year: string;
}

// 内容区块类型
export interface ContentSection {
  id: string;
  type: 'text-block' | 'image' | 'video' | 'video-cta' | 'image-masonry' | 'gallery' | 'stats-grid' | 'feature-list' | 'impact' | 'scrollytelling' | 'carousel-3d' | 'process-steps' | 'product-users' | 'survey-tabs' | 'hub-highlights-tabs' | 'info-cards' | 'chat-interview' | 'dual-image' | 'needs-list' | 'flow-images' | 'features-interactive' | 'next-steps-cards' | 'wrapup-section' | 'flip-cards' | 'strategy-roadmap' | 'interactive-flow' | 'testing-refinement' | 'context-panel' | 'requirements-list' | 'structure-cards' | 'react-component' | 'reflection-dual' | 'feature-showcase' | 'hud-ribbon' | 'ecosystem-diagram' | 'console-nav' | 'before-after-slider' | 'hotspot-doc' | 'incident-scenario' | 'goals-interactive' | 'pattern-cards' | 'safety-rails' | 'problem-goal' | 'deliverables-circuit';
  title?: string;
  content?: string;
  highlight?: string;
  src?: string;
  alt?: string;
  component?: string;
  caption?: string;
  imageClass?: string;
  wrapperClass?: string;
  videoPath?: string;
  buttonText?: string;
  images?: string[] | Array<{title: string; src: string; caption: string}>;
  captions?: string[];
  intro?: string;
  features?: Feature[];
  stats?: Stat[];
  steps?: ScrollyStep[];
  processSteps?: Array<{label: string; icon: string}>;
  productUsers?: {
    description: string;
    users: Array<{name: string; image: string}>;
  };
  surveyTabs?: Array<{
    label: string;
    images: string[];
  }>;
  hubHighlightsTabs?: Array<{
    label: string;
    whyItMatters: string;
    primaryGallery: Array<{src: string; caption: string}>;
    moreScreenshots?: Array<{src: string; caption: string}>;
  }>;
  infoCards?: Array<{
    title: string;
    content: string;
  }>;
  date?: string;
  interviewee?: {
    name: string;
    role: string;
    avatar: string;
  };
  messages?: Array<{
    type: 'sent' | 'received' | 'system';
    text: string;
  }>;
  needs?: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  flows?: Array<{
    part: string;
    title: string;
    description: string;
    src: string;
  }>;
  problemText?: string;
  goalText?: string;
  systems?: Array<{
    name: string;
    tag: string;
    color: string;
    icon: string;
    deliverables: string[];
  }>;
  finalPhase?: {
    title: string;
    tag: string;
    deliverable: string;
  };
  hint?: string;
  cards?: Array<{
    system: string;
    tag: string;
    color: string;
    icon: string;
    scope: Array<{ id: string; text: string }>;
    logic: {
      title: string;
      steps?: string[];
      dualColumn?: Array<{
        label: string;
        steps: string[];
      }>;
    };
  }>;
  uatBar?: {
    badge: string;
    title: string;
    subtitle: string;
  };
  interactiveFeatures?: Array<{
    icon: string;
    title: string;
    description: string;
    image: string;
  }>;
  nextSteps?: Array<{
    icon: string;
    title: string;
  }>;
  wrapup?: {
    roadmap: Array<{ icon: string; title: string }>;
    learnings: Array<{ icon: string; title: string; description: string }>;
    improvements: Array<{ icon: string; title: string; description: string }>;
  };
  heroText?: string;
  outcomes?: Array<{
    icon: string;
    title: string;
    desc: string;
    color: string;
  }>;
  statusBar?: {
    label: string;
    value: string;
    badges: Array<{ text: string; type: string }>;
  };
  figmaPrototype?: {
    url: string;
    title: string;
    description: string;
  };
  flipCards?: Array<{
    problemIcon: string;
    problemTitle: string;
    problemDesc: string;
    goalIcon: string;
    goalTitle: string;
    goals: string[];
  }>;
  roadmapChallenge?: string;
  roadmapSteps?: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  flowDiagrams?: Array<{
    id: string;
    label: string;
    caption: string;
    nodes: Array<{
      label: string;
      x: number;
      y: number;
      type?: 'start' | 'end' | 'normal';
    }>;
  }>;
  reflectionData?: {
    successes: Array<{
      title: string;
      description: string;
    }>;
    improvements: Array<{
      title: string;
      description: string;
    }>;
  };
  featureShowcase?: {
    badge: string;
    heroTitle: string;
    description: string;
    features: Array<{
      index: string;
      title: string;
      icon: string;
      description: string;
    }>;
  };
  consoleNav?: {
    items: Array<{
      navTitle: string;
      tag: string;
      displayTitle: string;
      description: string;
    }>;
  };
  beforeAfterSlider?: {
    badge: string;
    beforeImages: string[];
    afterImages: string[];
    beforeLabel: string;
    afterLabel: string;
    comparisons?: Array<{
      label: string;
      beforeImage: string;
      afterImage: string;
    }>;
    improvements: Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
    }>;
  };
  hotspotDoc?: {
    imageSrc: string;
    hotspots: Array<{
      position: { top: string; left: string };
      title: string;
      description: string;
      tooltipAlign?: 'left' | 'right';
    }>;
  };
  safetyRails?: Array<{
    risk: string;
    guardrail: string;
    image: string;
    caption: string;
    chips?: string[];
  }>;
}

// 功能特性类型
export interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
  images?: string[];
}

// 统计数据类型
export interface Stat {
  value: string;
  label: string;
  sub?: string;
  icon?: string;
}

// Scrollytelling步骤类型
export interface ScrollyStep {
  title: string;
  text: string;
  image: string;
  caption?: string;
}

// 目录项类型
export interface TocItem {
  id: string;
  label: string;
}

// 项目详情类型
export interface ProjectDetails {
  role: string;
  year: string;
  platform: string;
  tools: string;
  type: string;
  overview?: string;
  myRole?: string;
  constraints?: string;
  approach?: string;
  keyDecisions?: string[];
  outcome?: string;
  toc?: TocItem[];
  contentSections?: ContentSection[];
}

// 项目类型
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  shortSummary?: string;
  tags: string[];
  gradient: string;
  icon: ReactNode;
  image?: string;
  isCaseStudy?: boolean;
  finalDesignLink?: string;
  details: ProjectDetails;
}

// 简历数据类型
export interface ResumeData {
  name: string;
  role: string;
  location: string;
  contact: ContactInfo;
  summary: string;
  skills: string[];
  tools: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}
