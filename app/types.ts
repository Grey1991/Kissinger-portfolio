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
  type: 'text-block' | 'image' | 'video' | 'gallery' | 'stats-grid' | 'feature-list' | 'impact' | 'scrollytelling';
  title?: string;
  content?: string;
  highlight?: string;
  src?: string;
  alt?: string;
  caption?: string;
  imageClass?: string;
  wrapperClass?: string;
  images?: string[];
  intro?: string;
  features?: Feature[];
  stats?: Stat[];
  steps?: ScrollyStep[];
}

// 功能特性类型
export interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
}

// 统计数据类型
export interface Stat {
  value: string;
  label: string;
  sub?: string;
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
  overview: string;
  myRole: string;
  constraints: string;
  approach: string;
  keyDecisions: string[];
  outcome: string;
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
  tags: string[];
  gradient: string;
  icon: ReactNode;
  image?: string;
  isCaseStudy?: boolean;
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
