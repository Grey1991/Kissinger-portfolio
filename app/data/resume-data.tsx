import React from 'react';
import { 
  Database, Users, Shield, Clock, Layers, Smartphone, 
  PenTool, Utensils, Search, MousePointer, CheckSquare, Monitor 
} from 'lucide-react';
import { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  name: "Kissinger Hu",
  role: "Senior UI/UX Designer",
  location: "Sydney, NSW",
  contact: {
    email: "huweina98@gmail.com",
    phone: "0415056842",
    linkedin: "https://www.linkedin.com/in/kissingerhu",
    website: "https://www.kissingerhu.com"
  },
  summary: "Senior UI/UX Designer with 5+ years of experience specialized in modernizing legacy systems and designing complex enterprise platforms. Currently the sole designer at Surf Life Saving Australia, leading digital transformation across desktop and mobile. Expert in translating heavy data and compliance workflows into clear, human-centered experiences.",
  skills: [
    "End-to-End Product & UI/UX Design",
    "Complex Workflow & Form Design",
    "Design Systems & Component Libraries",
    "Responsive & Mobile-First Design",
    "Interaction Design & Prototyping",
    "Stakeholder & Cross-functional Collaboration",
    "Accessibility-minded Responsive Design (web & mobile)",
    "QA Support & UI Validation"
  ],
  tools: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  experience: [
    {
      company: "Surf Life Saving Australia (SLSA)",
      role: "Senior UI Designer (Sole Designer)",
      period: "05/2023 - Present",
      description: "Leading the end-to-end design and modernization of core digital platforms supporting nationwide operations.",
      achievements: [
        "Spearheaded the UX/UI for 'SLS Hub', replacing a legacy members area with a modern, responsive platform for thousands of users.",
        "Led the 'SurfGuard' core system rewrite, transforming outdated complex workflows into a scalable design system.",
        "Re-architected compliance-heavy journeys (Member Join & Registration), simplifying decision-making via progressive disclosure.",
        "Established a comprehensive Design System & Component Library to accelerate engineering delivery."
      ]
    },
    {
      company: "Life Byte System",
      role: "UI/UX Designer",
      period: "01/2023 - 05/2023",
      description: "Focused on B2B Fintech Trading & Risk Management Platforms.",
      achievements: [
        "Designed scalable UI conventions for complex, data-heavy financial dashboards.",
        "Conducted comprehensive UX audits to identify critical usability gaps in trading workflows.",
        "Bridged the gap between design and dev with high-fidelity prototypes and HTML/CSS feasibility checks."
      ]
    },
    {
      company: "Async Working",
      role: "UI/UX Designer",
      period: "04/2022 - 01/2023",
      description: "Sports Tech - Custom Court Design & Ordering Platform.",
      achievements: [
        "Optimized responsive purchase flows for 'CourtCanva', significantly improving discoverability.",
        "Iterated designs in an Agile environment, delivering production-ready assets for complex customization tools."
      ]
    },
    {
      company: "Freelance",
      role: "UI/UX Designer",
      period: "06/2021 - 04/2022",
      description: "Various projects including 'NOOTEE' and 'JR Food Court'.",
      achievements: [
        "Mapped user journeys and IA for a note-taking application based on user research.",
        "Designed a mobile-first office canteen ordering system focused on task efficiency."
      ]
    }
  ],
  education: [
    {
      degree: "Master of International Business",
      school: "The University of Sydney",
      year: "2022 - 2023"
    },
    {
      degree: "Bachelor of Applied Finance",
      school: "Australian National Institute of Management",
      year: "2019 - 2021"
    }
  ],
  projects: [
    {
      id: "surfguard",
      title: "SurfGuard (SLSA)",
      subtitle: "Legacy System Rewrite",
      category: "Enterprise",
      summary: "Modernizing a critical nationwide operational database into a scalable, user-friendly React application.",
      tags: ["Enterprise Admin", "Legacy Modernisation", "Design System", "Complex Workflows"],
      gradient: "from-blue-700 to-cyan-600",
      icon: <Database />,
      details: {
        role: "Sole Lead Designer",
        year: "2023 - Present",
        platform: "Web Application (Desktop Focus)",
        tools: "Figma, React, Storybook",
        type: "Enterprise B2B",
        overview: "SurfGuard is the core operational database for Surf Life Saving Australia. The legacy system suffered from outdated UI, poor accessibility, and convoluted workflows. The goal was to rewrite the system to improve data integrity and user efficiency for administrators nationwide.",
        myRole: "I led the complete UX redesign, translating complex legacy table-based logic into modern, component-based patterns. I built the shared design system from scratch.",
        constraints: "Strict data compliance requirements, need to support power-users accustomed to legacy workflows, and a complex permission hierarchy.",
        approach: "I started by auditing the existing workflows, mapping out the information architecture, and then creating low-fidelity wireframes to validate logic with BAs. I then moved to high-fidelity prototypes for stakeholder sign-off before delivering dev-ready specs.",
        keyDecisions: [
          "Introduced a 'Drawer' pattern for editing records to keep context, rather than full-page reloads.",
          "Standardized data tables with sticky headers and customizable columns to handle dense information.",
          "Created a 'Status Badge' system to quickly communicate member compliance status."
        ],
        outcome: "A modernized, accessible platform that significantly reduced training time for new administrators and improved data entry accuracy."
      }
    },
    {
      id: "slshub",
      title: "SLS Hub (SLSA)",
      subtitle: "New National Platform (Live)",
      category: "Platform",
      summary: "A new lightweight national platform replacing the legacy Members Area, serving thousands of members.",
      tags: ["Platform UX", "IA", "Authentication", "Responsive UI"],
      gradient: "from-yellow-600 to-orange-500",
      icon: <Users />,
      details: {
        role: "Lead Product Designer",
        year: "2024 (Live)",
        platform: "Responsive Web",
        tools: "Figma, Jira",
        type: "B2C / Member Platform",
        overview: "Replacing the aging 'Members Area', SLS Hub serves as the central entry point for members to renew memberships, access resources, and view awards. The challenge was to create a modern, mobile-friendly experience.",
        myRole: "Designed end-to-end journeys for authentication, dashboard, and navigation. Created light/dark themes and ensured WCAG 2.1 AA compliance.",
        constraints: "Integration with legacy backend APIs, diverse user demographic (age 16 to 80+), and need for high availability.",
        approach: "Adopted a mobile-first strategy. Simplified the IA to group related tasks (e.g., 'My Training', 'My Patrols'). Used prototyping to test navigation clarity with volunteer members.",
        keyDecisions: [
          "Implemented a 'Magic Link' and simplified SSO flow to reduce login friction.",
          "Designed a modular 'Widget' based dashboard that adapts to user roles.",
          "Prioritized 'Renew Membership' CTA during renewal season based on user analytics."
        ],
        outcome: "Successful launch with positive feedback on ease of use. significantly reduced support tickets related to login issues."
      }
    },
    {
      id: "memberjoin",
      title: "Member Join (SLSA)",
      subtitle: "Compliance-heavy Onboarding",
      category: "Regulated",
      summary: "Re-architecting a complex, multi-step onboarding flow covering declarations, fees, and payments.",
      tags: ["Form UX", "Microcopy", "Validation", "Compliance"],
      gradient: "from-emerald-600 to-teal-500",
      icon: <Shield />,
      details: {
        role: "UX Designer",
        year: "2023",
        platform: "Web",
        tools: "Figma",
        type: "Public Facing Form",
        overview: "Joining a surf club involves complex legal declarations, payment calculations, and guardian approvals. The existing flow had high drop-off rates due to confusion.",
        myRole: "Redesigned the entire flow. Simplified decision-making via progressive disclosure and rule-driven defaults.",
        constraints: "Cannot remove legal text, must support multi-member family registrations in one transaction.",
        approach: "Broke the massive form into digestible steps (Stepper Pattern). Used 'If this, then that' logic to hide irrelevant fields.",
        keyDecisions: [
          "Grouped 'Family' members into a single card view to prevent repetitive data entry.",
          "Used inline validation with helpful microcopy instead of generic error messages.",
          "Added a 'Save & Resume' feature for lengthy applications."
        ],
        outcome: "Improved completion rates and reduced the perceived complexity of the joining process."
      }
    },
    {
      id: "surfcom",
      title: "SurfCom ICEMS (SLSA)",
      subtitle: "Emergency / Incident Mgmt",
      category: "Regulated",
      summary: "Enhancing time-critical notification and incident communication workflows for operations centers.",
      tags: ["Time-critical UX", "Operational Workflows", "Clarity"],
      gradient: "from-red-600 to-rose-600",
      icon: <Clock />,
      details: {
        role: "UI/UX Designer",
        year: "2023",
        platform: "Desktop Operational Console",
        tools: "Figma, Adobe XD",
        type: "Mission Critical",
        overview: "SurfCom operators manage incidents in real-time. Speed and clarity are matters of life and safety. The UI needed to support high-stress decision making.",
        myRole: "Designed improvements to notification systems and incident logging workflows.",
        constraints: "High contrast requirements, information density, zero-latency interaction expectations.",
        approach: "Focused on cognitive load reduction. Used color coding strictly for status (Red = Danger/Active, Green = Resolved).",
        keyDecisions: [
          "Designed a 'Ticker' style notification stream that doesn't block the main map view.",
          "Created keyboard shortcuts for common actions to reduce mouse travel.",
          "Used distinct visual hierarchy for 'Active' vs 'Pending' incidents."
        ],
        outcome: "Streamlined communication between dispatchers and patrols, reducing time to log critical incidents."
      }
    },
    {
      id: "hubx",
      title: "HubX (Life Byte)",
      subtitle: "B2B Trading & Risk Platform",
      category: "Enterprise",
      summary: "Fintech dashboard focused on information density, data clarity, and rapid decision-making.",
      tags: ["B2B", "Data-heavy UI", "Documentation", "Interaction"],
      gradient: "from-slate-700 to-indigo-900",
      icon: <Layers />,
      details: {
        role: "UI/UX Designer",
        year: "2023",
        platform: "Desktop Web",
        tools: "Figma",
        type: "Fintech B2B",
        overview: "A professional trading platform for risk managers. Users need to monitor thousands of data points simultaneously.",
        myRole: "Conducted UX audits, defined component patterns for data grids, and built high-fidelity prototypes.",
        constraints: "Dense data requirements, need for real-time updates without UI flickering.",
        approach: "Utilized a strict grid system. Designed 'Dark Mode' by default to reduce eye strain for long sessions.",
        keyDecisions: [
          "Implemented customizable dashboard widgets allowing users to build their own workspace.",
          "Designed 'Sparklines' for quick trend analysis within data tables.",
          "Created a consistent colour semantic for financial data (Gain/Loss)."
        ],
        outcome: "Delivered a scalable design system that developers used to build the MVP."
      }
    },
    {
      id: "courtcanva",
      title: "CourtCanva",
      subtitle: "Custom Court Design & Quoting Platform",
      category: "Desktop",
      summary: "A web platform enabling users to create custom court designs and obtain quotes from builders and suppliers.",
      tags: ["Redesign", "Design System", "Stakeholder Collaboration"],
      gradient: "from-pink-600 to-purple-600",
      image: "/courtcanva/hero2.0.png",
      icon: <Monitor />,
      isCaseStudy: true,
      details: {
        role: "UI/UX Designer",
        year: "2022",
        platform: "Desktop",
        tools: "Figma",
        type: "E-commerce Platform",
        
        toc: [
          { id: "overview", label: "Overview" },
          { id: "responsibilities", label: "My Responsibilities" },
          { id: "requirements", label: "User Requirements" },
          { id: "product-structure", label: "Product Structure" },
          { id: "prototypes", label: "Prototype Outcomes" },
          { id: "testing", label: "Testing & Iterative Improvements" },
          { id: "courtcanva2-intro", label: "CourtCanva 2.0 — Redesigned Experience" },
          { id: "reflection", label: "Reflection" }
        ],

        overview: "CourtCanva is a startup platform where users can create custom court designs and receive quotes for their creations. The web application allows court owners, sports facility managers, and individuals to visualize designs through an intuitive interface and connect with builders.",
        myRole: "Designed responsive layouts for all pages, developed style guidelines in collaboration with BAs and developers, and continuously refined the design through stakeholder feedback cycles.",
        constraints: "Ensuring seamless responsive experience across desktop, iPad, and iPhone while maintaining design consistency and accessibility standards.",
        approach: "",
        keyDecisions: [],
        outcome: "",
        
        contentSections: [
          {
            id: "overview",
            type: "context-panel",
            title: "Background & Target Users",
          },
          {
            id: "responsibilities",
            type: "feature-list",
            title: "My Responsibilities",
            intro: "Four core pillars guided my work on CourtCanva:",
            features: [
              {
                title: "Style Guidelines Development",
                desc: "Collaborated with BA and developers to create comprehensive guidelines for theme colours, fonts, font sizes, and icon designs.",
                icon: <PenTool size={20} />
              },
              {
                title: "Responsive Layout Design",
                desc: "Designed layouts for all pages and landing pages, ensuring seamless experience across desktop and iPad devices.",
                icon: <Layers size={20} />
              },
              {
                title: "Stakeholder Feedback Integration",
                desc: "Participated in fortnightly showcases to collect and incorporate feedback from stakeholders.",
                icon: <Users size={20} />
              },
              {
                title: "Continuous Design Refinement",
                desc: "Engaged in ongoing design improvement, working closely with the project team to deliver a polished final product.",
                icon: <CheckSquare size={20} />
              }
            ]
          },
          {
            id: "requirements",
            type: "requirements-list",
            title: "User Requirements",
          },
          {
            id: "product-structure",
            type: "structure-cards",
            title: "Product Structure",
          },
          {
            id: "prototypes",
            type: "text-block",
            title: "Prototype Outcomes",
            content: "Version 1.0 high-fidelity prototypes completed by continuing the design style established by the previous designer who had left the company. The prototypes showcase the complete user journey from landing to order placement, maintaining visual consistency with the original design direction."
          },
          {
            id: "prototypes-gallery",
            type: "gallery",
            images: [
              "/courtcanva/landing webpage.png",
              "/courtcanva/ProTennis Court.png",
              "/courtcanva/3D Preview Access Button.png",
              "/courtcanva/3D Preview popup.png",
              "/courtcanva/Template List.png",
              "/courtcanva/Template List-1.png",
              "/courtcanva/My Template Page.png",
              "/courtcanva/Folder Design Preview.png",
              "/courtcanva/Folder Design Preview (Delete Pop up).png",
              "/courtcanva/Shopping Cart.png",
              "/courtcanva/Order Generation Page.png",
              "/courtcanva/Deposit Display.png",
              "/courtcanva/Order Placed Successful Page.png",
              "/courtcanva/Order Placed Failed Page.png",
              "/courtcanva/My Order Page.png",
              "/courtcanva/My Account.png",
              "/courtcanva/Edit Profile Image Popup.png"
            ],
            caption: "Complete interface designs across all user flows"
          },
          {
            id: "testing",
            type: "text-block",
            title: "Testing & Iterative Improvements",
            content: "Through user testing, we identified three critical areas for refinement:"
          },
          {
            id: "testing-improvements",
            type: "flip-cards",
            flipCards: [
              {
                problemIcon: "alert-circle",
                problemTitle: "Fragmented Course Design Tools",
                problemDesc: "Users found it difficult to locate tools in the design interface, causing frustration during creation.",
                goalIcon: "layout",
                goalTitle: "Reorganised Tool Palette",
                goals: [
                  "Grouped related tools logically",
                  "Added clear labels to all tools",
                  "Improved visual hierarchy"
                ]
              },
              {
                problemIcon: "help-circle",
                problemTitle: "3D Preview Button Enhancement",
                problemDesc: "Confusion about 3D preview quality and access point. Users weren't confident the preview represented final output.",
                goalIcon: "eye",
                goalTitle: "Improved Clarity & Affordance",
                goals: [
                  "Enhanced button visibility and labeling",
                  "Added preview quality indicator",
                  "Improved interaction feedback"
                ]
              },
              {
                problemIcon: "eye-off",
                problemTitle: "Toolbar Background & Contrast",
                problemDesc: "Low contrast between toolbar and canvas caused visual fatigue during extended design sessions.",
                goalIcon: "sun",
                goalTitle: "Accessibility Compliance",
                goals: [
                  "Increased contrast ratios",
                  "Met WCAG accessibility guidelines",
                  "Reduced eye strain for users"
                ]
              }
            ]
          },
          {
            id: "courtcanva2-intro",
            type: "feature-showcase",
            title: "CourtCanva 2.0 — Redesigned Experience",
            featureShowcase: {
              badge: "Version 2.0",
              heroTitle: "The Complete Reimagination",
              description: "CourtCanva 2.0 isn't just an update; it's a new standard. We rebuilt the core engine to deliver precision, speed, and a seamless commerce experience.",
              features: [
                {
                  index: "01",
                  title: "Intelligent Design Studio",
                  icon: "lightbulb",
                  description: "Enhanced with a collapsible property panel, dynamic dimension sliders, and a real-time pricing engine that instantly calculates costs based on surface area."
                },
                {
                  index: "02",
                  title: "High-Performance Visualisation",
                  icon: "eye",
                  description: "SVG-based rendering supporting multi-sport layouts (Tennis, Basketball, Pickleball) with instant, lightweight 2D-to-3D perspective switching."
                },
                {
                  index: "03",
                  title: "Deep Customisation",
                  icon: "edit",
                  description: "Granular control over surface textures, custom text branding, and a suite of 3D accessories including LED lighting, fencing, and scoreboards."
                },
                {
                  index: "04",
                  title: "E-commerce Ecosystem",
                  icon: "shopping-cart",
                  description: "A seamless user journey from smart template selection to customisation, cart management, and a simulated secure checkout process."
                },
                {
                  index: "05",
                  title: "Comprehensive User Hub",
                  icon: "user",
                  description: "A fully functional dashboard for managing saved designs and orders, integrated with a robust settings suite covering Profile, Security, and Help Centre."
                }
              ]
            }
          },
          {
            id: "courtcanva2-cta",
            type: "text-block",
            content: "💡 <strong>Try the interactive prototype below</strong> to explore the complete user journey."
          },
          {
            id: "courtcanva2",
            type: "react-component",
            component: "CourtCanva2"
          },
          {
            id: "reflection",
            type: "reflection-dual",
            title: "Reflection",
            reflectionData: {
              successes: [
                {
                  title: "Stakeholder Showcases",
                  description: "Regular alignment sessions significantly reduced late-stage revisions, keeping the dev timeline on track."
                },
                {
                  title: "Style Guide Sync",
                  description: "Co-creating the library with developers prevented implementation inconsistencies during handoff."
                }
              ],
              improvements: [
                {
                  title: "Earlier User Testing",
                  description: "Testing low-fi wireframes would have surfaced the tool palette navigation issues much sooner."
                },
                {
                  title: "Structured A11y",
                  description: "Integrating accessibility checks (contrast, focus states) throughout the process, not just at the end."
                },
                {
                  title: "Mobile-First Strategy",
                  description: "Starting with smaller viewports to ensure core features are prioritized before scaling up."
                },
                {
                  title: "iPad Gestures",
                  description: "Exploring advanced interactions like pinch-to-zoom to utilize the canvas fully."
                }
              ]
            }
          }
        ]
      }
    },
    {
      id: "nootee",
      title: "NooTee — Note-Taking App",
      subtitle: "Concept Project",
      category: "Desktop",
      summary: "A note-taking app designed to solve collaboration gaps, media limitations, and organisation challenges in existing tools.",
      tags: ["Product Design", "UX Research", "Desktop App"],
      gradient: "from-violet-600 to-fuchsia-600",
      image: "/nootee/hero-1.png",
      icon: <PenTool />,
      isCaseStudy: true,
      details: {
        role: "Product Designer",
        year: "2021",
        platform: "Desktop App",
        tools: "Figma, Miro",
        type: "Concept",
        
        toc: [
          { id: "overview", label: "Overview" },
          { id: "research", label: "Research" },
          { id: "product-users", label: "Product Users" },
          { id: "empathy-map", label: "Empathy Map" },
          { id: "survey", label: "Survey Results" },
          { id: "observations", label: "Key Observations" },
          { id: "interview", label: "User Interview" },
          { id: "personas-journey", label: "Personas & Journey" },
          { id: "swot", label: "Competitor Analysis" },
          { id: "user-needs", label: "User Needs" },
          { id: "flow", label: "Flow & IA" },
          { id: "features", label: "Features & Functionalities" },
          { id: "final-ui", label: "Final UI" },
          { id: "whats-next", label: "Next Steps & Learnings" }
        ],

        overview: "Most note-taking apps lack collaboration features and robust media support. When users accumulate many notes, poor organisation makes retrieval difficult.",
        myRole: "Led end-to-end product design—research, personas, journey mapping, competitive analysis, wireframes, and high-fidelity UI.",
        constraints: "Crowded market with established players. Need clear differentiation and intuitive organisation.",
        approach: "",
        keyDecisions: [],
        outcome: "",
        
        contentSections: [
          {
            id: "overview",
            type: "flip-cards",
            title: "Turning Problems into Solutions",
            content: "Hover over the cards to see how we address user pain points.",
            flipCards: [
              {
                problemIcon: "user-x",
                problemTitle: "Isolation",
                problemDesc: "Most note-taking apps lack collaboration, isolating users and limiting teamwork potential.",
                goalIcon: "users",
                goalTitle: "Unified Platform",
                goals: [
                  "Combine study, work, and life notes.",
                  "Enable real-time team collaboration."
                ]
              },
              {
                problemIcon: "layout",
                problemTitle: "Rigidity",
                problemDesc: "Apps often focus solely on text, with limited media support and clunky interfaces.",
                goalIcon: "zap",
                goalTitle: "Efficiency",
                goals: [
                  "Concise, media-rich interface.",
                  "Quick-open for capturing fleeting ideas."
                ]
              },
              {
                problemIcon: "activity",
                problemTitle: "Chaos",
                problemDesc: "Managing a large volume of notes becomes difficult without powerful organization tools.",
                goalIcon: "search",
                goalTitle: "Structure",
                goals: [
                  "Smart categorisation system.",
                  "Instant search functionality."
                ]
              }
            ]
          },
          {
            id: "research",
            type: "text-block",
            title: "Research",
            content: "I conducted an online survey with <strong>16 users</strong> and performed qualitative interviews to understand note-taking behaviors, pain points, and feature preferences."
          },
          {
            id: "product-users",
            type: "product-users",
            title: "Product Users",
            productUsers: {
              description: "Our target demographic is primarily between the ages of 19 and 54.",
              users: [
                {
                  name: "Office Workers",
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Students",
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Homemakers",
                  image: "https://images.sbs.com.au/dims4/default/91eed36/2147483647/strip/true/crop/5122x2881+0+179/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fc5%2Fcd%2F0d4b016e45d3a285a8f95a07e4d4%2Fgettyimages-135205222.jpg&imwidth=1280"
                }
              ]
            }
          },
          {
            id: "empathy-map",
            type: "image",
            src: "/nootee/empathy-map.png",
            caption: "Empathy map synthesizing user thoughts, feelings, and behaviors",
            imageClass: "max-w-2xl mx-auto"
          },
          {
            id: "survey",
            type: "survey-tabs",
            title: "Survey Results",
            caption: "Survey results revealing key usage patterns across different user segments",
            surveyTabs: [
              {
                label: "Study",
                images: [
                  "/nootee/nootee survey/study/Statistics--Study.png",
                  "/nootee/nootee survey/study/Study 1.png",
                  "/nootee/nootee survey/study/Study 2.png",
                  "/nootee/nootee survey/study/Study3.png",
                  "/nootee/nootee survey/study/Study 4.png",
                  "/nootee/nootee survey/study/Study 5.png",
                  "/nootee/nootee survey/study/Study 6.png",
                  "/nootee/nootee survey/study/Study 7.png"
                ]
              },
              {
                label: "Work",
                images: [
                  "/nootee/nootee survey/work/Statistics--Work.png",
                  "/nootee/nootee survey/work/Work 1.png",
                  "/nootee/nootee survey/work/Work 2.png",
                  "/nootee/nootee survey/work/Work 3.png",
                  "/nootee/nootee survey/work/Work 4.png"
                ]
              },
              {
                label: "Personal Use",
                images: [
                  "/nootee/nootee survey/personal use/Statistics-- Personal use.png",
                  "/nootee/nootee survey/personal use/Personal use 1.png",
                  "/nootee/nootee survey/personal use/Personal use 2.png",
                  "/nootee/nootee survey/personal use/Personal use 3.png",
                  "/nootee/nootee survey/personal use/Personal use 4.png"
                ]
              }
            ]
          },
          {
            id: "observations",
            type: "stats-grid",
            title: "Key Observations",
            stats: [
              { value: "50%", label: "Regularly review their notes", icon: "📊" },
              { value: "37.5%", label: "Take notes a few times a week", icon: "✍️" },
              { value: "50%", label: "Use notes primarily to manage knowledge", icon: "🧠" },
              { value: "62.5%", label: "Target users aged 25-34", icon: "👥" },
              { value: "56.2%", label: "Full-time employed", icon: "💼" }
            ]
          },
          {
            id: "interview",
            type: "chat-interview",
            title: "User Interview",
            content: "We conducted an in-depth interview with Grey, a developer who falls within our target demographic, to gain qualitative insights into note-taking habits and pain points.",
            date: "13/12/2021",
            interviewee: {
              name: "Grey",
              role: "Developer",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grey"
            },
            messages: [
              { type: "sent", text: "I'm Kissinger! I'm here to interview you today, would you like to tell me about yourself?" },
              { type: "received", text: "Sure, my name is Grey, I am 31 years old and I am a developer." },
              { type: "sent", text: "Hi, Grey! Thank you for joining us for an interview on the development of our new note-taking app." },
              { type: "received", text: "Hi, it's a pleasure for me too." },
              { type: "sent", text: "Do you think it is important to take notes?" },
              { type: "received", text: "Yes, it is very important." },
              { type: "sent", text: "In what situations do you usually use note-taking?" },
              { type: "received", text: "When I have something new to learn, when I have a long list of things to do at work, when I need to write something down that isn't an emergency but needs to be remembered, or when I need to make a shopping list." },
              { type: "sent", text: "How often do you review your notes?" },
              { type: "received", text: "In my personal life, I have maybe recheck them once. When I'm working, I look through my notes as I'm doing the work. And I frequently review them for study purposes." },
              { type: "sent", text: "What devices do you usually use to record your notes?" },
              { type: "received", text: "I usually use my laptop and in my life I use my phone." },
              { type: "sent", text: "Are you used to taking detailed notes or just the key points?" },
              { type: "received", text: "When it comes to studies or works, I prefer the basics first and fill in the details later, but when it comes to personal matters, I prefer to recall the more simple aspects." },
              { type: "sent", text: "What problems have you encountered so far?" },
              { type: "received", text: "I often have trouble with fragmented notes that I don't know how to organise and search." },
              { type: "sent", text: "Do you encounter urgent situations that you need to record and often fail to capture the content?" },
              { type: "received", text: "In my daily life, I frequently find instances in which I need to precisely capture the substance of a phone call but am unable to do so due to language differences. I frequently see this at work in meetings where it is too late to take notes or the notes are not detailed, which usually causes me to miss critical things." },
              { type: "sent", text: "If you're having trouble keeping up, do you record videos to watch and review at a later time?" },
              { type: "received", text: "I don't use extra tools to record or tape. I may use software for meetings or classes if it has a recording function." },
              { type: "sent", text: "Do you make typos or misspell words when taking notes, resulting in unclear sections of your notes?" },
              { type: "received", text: "No, I hardly ever encounter this situation." },
              { type: "sent", text: "Do you have difficulty drawing diagrams when taking notes on the computer?" },
              { type: "received", text: "No. I don't usually draw pictures, but if I need a picture or a drawing I usually take a photo or screenshot of the drawing." },
              { type: "sent", text: "What is the latest note taking software you are using?" },
              { type: "received", text: "Typora" },
              { type: "sent", text: "Are there any other features you look forward to when taking notes?" },
              { type: "received", text: "I am looking forward to an application that can help me organise fragmented information and build a network of knowledge." },
              { type: "sent", text: "We appreciate your responses, and that's the end of our interview. Have a wonderful day and I'll see you soon, Grey!" },
              { type: "received", text: "You're very welcome! Have a good day!" },
              { type: "system", text: "Interview Concluded" }
            ]
          },
          {
            id: "personas-journey",
            type: "dual-image",
            images: [
              {
                title: "User Persona",
                src: "/nootee/Persona.png",
                caption: "User persona representing primary user segments"
              },
              {
                title: "User Journey Map",
                src: "/nootee/journey-map.png",
                caption: "User journey map highlighting key touchpoints and pain points"
              }
            ]
          },
          {
            id: "swot",
            type: "image",
            title: "Competitor Analysis",
            src: "/nootee/swot.png",
            caption: "SWOT analysis of competitor note-taking apps"
          },
          {
            id: "user-needs",
            type: "needs-list",
            title: "User Needs",
            needs: [
              {
                number: "01",
                title: "Ease of Use",
                description: "Users require a simple, clutter-free interface that is intuitive to navigate from the first use."
              },
              {
                number: "02",
                title: "Multi-format Flexibility",
                description: "Users want the freedom to capture ideas in various formats, including rich text, images, audio recordings, and video clips."
              },
              {
                number: "03",
                title: "Seamless Synchronization",
                description: "Users need their notes to sync instantly across all devices—desktop, laptop, iPad, and mobile—ensuring data is always accessible."
              },
              {
                number: "04",
                title: "Advanced Search Ability",
                description: "Users want powerful retrieval tools to find notes instantly by specific keywords, custom tags, creation dates, or other criteria."
              },
              {
                number: "05",
                title: "Sharing & Collaboration",
                description: "Users seek features that allow them to easily share notes with others or collaborate on documents in real-time."
              },
              {
                number: "06",
                title: "Productivity Templates",
                description: "Users look for pre-built frameworks to kickstart their work, such as templates for meeting minutes, project plans, and class notes."
              }
            ]
          },
          {
            id: "flow",
            type: "flow-images",
            title: "Flow & IA",
            flows: [
              {
                part: "Part 1",
                title: "Main Navigation (Overview)",
                description: "This chart covers the user journey from the app launch to the Home page and lists the main entry points.",
                src: "/nootee/Task Flow-Main Navigation (Overview).png"
              },
              {
                part: "Part 2",
                title: "Note Creation & Editing (Core Flow)",
                description: "This is the detailed flow for creating content. It organizes the complex \"Tool Bar\" features into logical groups (Editing, Files, Output).",
                src: "/nootee/Task Flow-Note Creation & Editing (Core Flow).png"
              },
              {
                part: "Part 3",
                title: "Management & Settings",
                description: "Handles the auxiliary flows: searching, recovering deleted items, and user profile settings.",
                src: "/nootee/Task Flow-Management & Settings.png"
              }
            ]
          },
          {
            id: "features",
            type: "features-interactive",
            title: "Features & Functionalities",
            content: "To resolve user needs",
            interactiveFeatures: [
              {
                icon: "smile",
                title: "Ease of Use",
                description: "Visual hierarchical structure, drag-and-drop organisation, and intuitive shortcuts.",
                image: "/nootee/Ease of Use.png"
              },
              {
                icon: "edit",
                title: "Flexibility",
                description: "Switch freely between writing, drawing, and recording. Format notes with bold, italic, and underlining.",
                image: "/nootee/Flexibility.png"
              },
              {
                icon: "cloud",
                title: "Synchronisation",
                description: "Cloud storage lets users sync their notes instantly across multiple devices.",
                image: "/nootee/Synchronisation.png"
              },
              {
                icon: "search",
                title: "Search Ability",
                description: "Filter notes by times, keywords, tags, or other criteria to find them quickly.",
                image: "/nootee/Search ability.png"
              },
              {
                icon: "users",
                title: "Sharing & Collaboration",
                description: "Real-time collaboration, commenting, and comprehensive version history.",
                image: "/nootee/Sharing.png"
              },
              {
                icon: "layout",
                title: "Templates",
                description: "Choose a template from the list, customise it, or upload your own.",
                image: "/nootee/Templets.png"
              },
              {
                icon: "wifi-off",
                title: "Offline Functionality",
                description: "Let users edit notes seamlessly without an internet connection.",
                image: "/nootee/offline functionality.png"
              }
            ]
          },
          {
            id: "final-ui",
            type: "text-block",
            title: "Final UI",
            content: "The final design features a clean, dark-mode-first interface with generous spacing, clear typography, and intuitive gestures. Media uploads are seamlessly integrated, and collaboration features are accessible without cluttering the core experience."
          },
          {
            id: "final-gallery",
            type: "gallery",
            images: [
              "/nootee/nootee hi-fi/HomePage.png",
              "/nootee/nootee hi-fi/Dashboard.png",
              "/nootee/nootee hi-fi/Sign in.png",
              "/nootee/nootee hi-fi/Sign up.png",
              "/nootee/nootee hi-fi/Lecture Notes.png",
              "/nootee/nootee hi-fi/Lecture Notes--Profile.png",
              "/nootee/nootee hi-fi/Lecture Notes--Setting.png",
              "/nootee/nootee hi-fi/Lecture Notes--Save.png",
              "/nootee/nootee hi-fi/Lecture Notes--Share.png",
              "/nootee/nootee hi-fi/Lecture Notes--Invite User.png",
              "/nootee/nootee hi-fi/Lecture Notes--Templet List.png",
              "/nootee/nootee hi-fi/Quick Notes.png",
              "/nootee/nootee hi-fi/To do List.png",
              "/nootee/nootee hi-fi/Search.png",
              "/nootee/nootee hi-fi/filter.png",
              "/nootee/nootee hi-fi/Study.png",
              "/nootee/nootee hi-fi/Study--Selected.png",
              "/nootee/nootee hi-fi/Study-- Deselected.png"
            ]
          },
          {
            id: "whats-next",
            type: "wrapup-section",
            title: "Next Steps & Learnings",
            content: "A roadmap for future iterations and reflections on the design process.",
            wrapup: {
              roadmap: [
                { icon: "users", title: "Conduct Usability Testing" },
                { icon: "edit", title: "Refine Collaboration Features" },
                { icon: "trending-up", title: "Explore AI Auto-tagging" },
                { icon: "smartphone", title: "Build Mobile & Tablet Versions" }
              ],
              learnings: [
                {
                  icon: "check",
                  title: "Research Validates Assumptions",
                  description: "Survey data confirmed that search and organisation were top pain points, validating my initial intuition."
                },
                {
                  icon: "minus",
                  title: "Less is More",
                  description: "Users clearly preferred minimal interfaces over feature-heavy designs, emphasizing clarity."
                },
                {
                  icon: "users",
                  title: "Context Matters",
                  description: "Students vs. Professionals have distinct needs; one solution doesn't fit all segments perfectly."
                }
              ],
              improvements: [
                {
                  icon: "code",
                  title: "Workflows Exploration",
                  description: "Deeper dive into real-time editing and commenting systems for better collaboration."
                },
                {
                  icon: "shield",
                  title: "Robust Testing",
                  description: "Testing the tagging system with more diverse content types to ensure scalability."
                },
                {
                  icon: "target",
                  title: "Accessibility",
                  description: "Refining color-based tags to ensure they are accessible to color-blind users."
                }
              ]
            }
          },
          {
            id: "nda-note",
            type: "text-block",
            title: "",
            content: "<small style='opacity: 0.6;'>Note: Screens shown are simplified for portfolio sharing.</small>"
          }
        ]
      }
    },
    {
      id: "jrfood",
      title: "JR Food Court",
      subtitle: "Office Smart Canteen Solution",
      category: "Mobile",
      summary: "An O2O mobile application streamlining the lunch rush for office workers through pre-ordering and smart table booking.",
      tags: ["Mobile UX", "O2O Service", "Efficiency", "Full Case Study"], 
      gradient: "from-orange-500 to-amber-600",
      image: "https://i.postimg.cc/x1Hz6yTM/JR-Landing-img-mv2.avif",
      icon: <Utensils />,
      isCaseStudy: true,
      details: {
        role: "UI/UX Designer",
        year: "2021",
        platform: "iOS & Android App",
        tools: "Adobe XD, Illustrator",
        type: "B2C / O2O",
        
        toc: [
          { id: "overview", label: "Overview" },
          { id: "role", label: "My Role" },
          { id: "research", label: "Research & Insights" },
          { id: "define", label: "Define Phase" },
          { id: "define-solutions", label: "Strategy Roadmap" },
          { id: "flow", label: "User Task Flow" },
          { id: "logo", label: "Logo Design Process" },
          { id: "iterations", label: "Design Iterations" },
          { id: "final-polish", label: "Final Polish" },
          { id: "hifi-section", label: "From Wireframes to Reality" },
          { id: "testing", label: "Testing & Refinement" },
          { id: "final-ui", label: "Final UI & Outcomes" }
        ],

        overview: "JR Academy's new office needed a food court solution. The challenge was to manage the lunch rush efficiency for staff.",
        myRole: "Led the end-to-end product design, from user research and service blueprinting to high-fidelity UI.",
        constraints: "High-stress, time-sensitive environment. Users are hungry and have limited break time.",
        approach: "Speed-First philosophy focusing on seamless ordering and queue management.",
        keyDecisions: ["Smart Re-order Loop", "Live Queue Visualization", "Split-Path Checkout"],
        outcome: "Delivered a comprehensive high-fidelity prototype that streamlined the ordering process.",
        
        contentSections: [
          {
            id: "overview",
            type: "text-block",
            title: "Background & Challenge",
            content: "JR Academy is a growing educational institution that recently announced plans to open a new office in Sydney. To facilitate their staff's lunchtime needs, the office will feature a food court with 10 food vendors and a common dining room.\n\n<strong style='color: #f472b6;'>The Problem:</strong> The lunchtime rush often leads to overcrowding, causing a shortage of available tables. Employees waste valuable break time queuing or searching for seats, leading to 'Lunch Rush Anxiety'.",
            highlight: "Goal: Simplify the lunch ordering process for both desk-side delivery and dine-in experiences, ensuring employees can eat stress-free."
          },
          {
            id: "role",
            type: "feature-list",
            title: "My Role & Responsibilities",
            intro: "As the Lead Product Designer, I owned the end-to-end process:",
            features: [
              {
                title: "User Research",
                desc: "Conducted interviews & surveys to understand dining habits.",
                icon: <Search size={20} />
              },
              {
                title: "Interaction Design",
                desc: "Created user flows, wireframes, and prototypes (Lo-fi to Hi-fi).",
                icon: <MousePointer size={20} />
              },
              {
                title: "Validation",
                desc: "Ran usability testing sessions and iterated on feedback.",
                icon: <CheckSquare size={20} />
              }
            ]
          },
          {
            id: "research",
            type: "text-block",
            title: "Research & Insights",
            content: "I conducted background checks on competitor O2O apps and surveyed JR Academy staff. Key insights revealed that <strong>speed</strong> and <strong>certainty</strong> (knowing a table is available) were valued higher than menu variety."
          },
          {
            id: "research-personas",
            type: "dual-image",
            images: [
              {
                title: "Zoe - HR Manager",
                src: "https://i.postimg.cc/D0MXMxXg/Persona-Zoe.avif",
                caption: "User Persona: Zoe focuses on efficiency and team coordination"
              },
              {
                title: "Adam - Product Manager",
                src: "https://i.postimg.cc/1XtFBk47/Persona-Adam.avif",
                caption: "User Persona: Adam values speed and certainty in his lunch routine"
              }
            ]
          },
          {
            id: "define",
            type: "text-block",
            title: "Define Phase",
            content: "During the define phase of our project, I collaborated with my team members to brainstorm and create a comprehensive plan that included feature prioritisation, user task flow, and defining the scope of work. This process allowed us to clearly outline our goals and ensure that our design decisions were aligned with the needs of our users.\n\nAfter conducting thorough research and analysis, we were able to define the key pain points of our users and develop effective solutions to address them."
          },
          {
            id: "define-solutions",
            type: "strategy-roadmap",
            title: "Strategy Roadmap",
            roadmapChallenge: "Lunchtime overcrowding & shortage of tables.",
            roadmapSteps: [
              {
                step: "01",
                title: "Streamline Ordering",
                description: "Creating a user flow to streamline the ordering process and reduce wait times."
              },
              {
                step: "02",
                title: "Seat Reservation",
                description: "Implementing a reservation system so employees can secure seating in advance."
              },
              {
                step: "03",
                title: "Smart Notification",
                description: "Developing a notification system to alert employees when orders are ready."
              },
              {
                step: "04",
                title: "Wayfinding System",
                description: "Providing clear signage to guide employees through the food court effortlessly."
              },
              {
                step: "05",
                title: "Feedback Loop",
                description: "Analysing user feedback to continuously improve the solution."
              }
            ]
          },
          {
            id: "flow",
            type: "interactive-flow",
            title: "User Task Flow",
            content: "Interactive visualization of the ordering process.",
            flowDiagrams: [
              {
                id: "flow-1",
                label: "🍔 Canteen Ordering",
                caption: "Flow 1: Ordering Food in Canteen",
                nodes: [
                  { label: "Discover", x: 7, y: 22, type: "start" },
                  { label: "Search", x: 7, y: 68, type: "start" },
                  { label: "Select", x: 20, y: 45 },
                  { label: "Take Away", x: 34, y: 22 },
                  { label: "Dine In", x: 34, y: 68 },
                  { label: "Select Table", x: 48, y: 68 },
                  { label: "Check Out", x: 58, y: 45 },
                  { label: "Place Order", x: 71, y: 45 },
                  { label: "Finish", x: 83, y: 45, type: "end" },
                  { label: "Review", x: 93, y: 45 }
                ]
              },
              {
                id: "flow-2",
                label: "🍱 Bringing Lunch",
                caption: "Flow 2: Bringing Own Lunch",
                nodes: [
                  { label: "Dine In", x: 7, y: 50, type: "start" },
                  { label: "Select Table", x: 23, y: 50 },
                  { label: "Check Out", x: 41, y: 50 },
                  { label: "Confirm", x: 57, y: 50 },
                  { label: "Finish", x: 72, y: 50, type: "end" },
                  { label: "Review", x: 88, y: 50 }
                ]
              }
            ]
          },
          {
            id: "logo",
            type: "text-block",
            title: "Logo Design Process",
            content: "Visualizing the brand identity through iterative logo exploration, focusing on modern aesthetics and food-related motifs."
          },
          {
            id: "logo-img",
            type: "image",
            src: "https://i.postimg.cc/SNH9LtqF/Logo-Design-Process.avif",
            alt: "Logo Design Process",
            caption: "Iterative process of creating the JR Food Court logo."
          },
          {
            id: "iterations",
            type: "text-block",
            title: "Design Iterations (Low-Fi to Hi-Fi)",
            content: "I employed a three-step development process to iterate quickly. Below is an interactive 3D carousel showcasing the evolution from initial wireframes to polished designs."
          },
          {
            id: "lowfi-carousel",
            type: "carousel-3d",
            steps: [
                { title: "Low-Fi 1: Log in Page", text: "Initial concept for the login screen, focusing on quick access for busy employees.", image: "https://i.postimg.cc/pX3jQ1xM/Low-Fi1.avif", caption: "Wireframe 1/16" },
                { title: "Low-Fi 2: Initial page", text: "Entry point options for Delivery or Pickup modes.", image: "https://i.postimg.cc/Hsr5y1q6/Low-Fi2.avif", caption: "Wireframe 2/16" },
                { title: "Low-Fi 3: Home Page", text: "Drafting the main feed with food categories and search.", image: "https://i.postimg.cc/rFDWr2BN/Low-Fi3.avif", caption: "Wireframe 3/16" },
                { title: "Low-Fi 4: Search Page", text: "Search functionality for finding specific food items or stores.", image: "https://i.postimg.cc/VsGnvkVq/Low-Fi4.avif", caption: "Wireframe 4/16" },
                { title: "Low-Fi 5: Searched Places", text: "Displaying results for specific food court vendors.", image: "https://i.postimg.cc/mDVMQL2x/Low-Fi5.avif", caption: "Wireframe 5/16" },
                { title: "Low-Fi 6: Searched Items", text: "Showing individual food item results with pricing.", image: "https://i.postimg.cc/1zQN2nf0/Low-Fi6.avif", caption: "Wireframe 6/16" },
                { title: "Low-Fi 7: Store's Order Page", text: "Vendor menu layout allowing item selection.", image: "https://i.postimg.cc/kXLSNh9g/Low-Fi7.avif", caption: "Wireframe 7/16" },
                { title: "Low-Fi 8: Store's Review Page", text: "Social proof through user ratings and comments.", image: "https://i.postimg.cc/CMPk5xQK/Low-Fi8.avif", caption: "Wireframe 8/16" },
                { title: "Low-Fi 9: Item Detail Select page", text: "Detailed view for customizing food orders (e.g., toppings).", image: "https://i.postimg.cc/HnxMzqV7/Low-Fi9.avif", caption: "Wireframe 9/16" },
                { title: "Low-Fi 10: My Shopping Cart - Take away", text: "Cart overview specific to Take Away flow.", image: "https://i.postimg.cc/cCH3hprg/Low-Fi10.avif", caption: "Wireframe 10/16" },
                { title: "Low-Fi 11: My Shopping Cart - Dine in", text: "Cart overview with table selection integration for Dine In.", image: "https://i.postimg.cc/jqgP2SFK/Low-Fi11.avif", caption: "Wireframe 11/16" },
                { title: "Low-Fi 12: Order Overview", text: "Final summary before payment confirmation.", image: "https://i.postimg.cc/W1rk56b4/Low-Fi12.avif", caption: "Wireframe 12/16" },
                { title: "Low-Fi 13: My Orders Page", text: "Tracking active orders and viewing history.", image: "https://i.postimg.cc/T3mDtqYm/Low-Fi13.avif", caption: "Wireframe 13/16" },
                { title: "Low-Fi 14: Book a table Page", text: "Standalone flow for booking a table without ordering food.", image: "https://i.postimg.cc/CL98C60v/Low-Fi14.avif", caption: "Wireframe 14/16" },
                { title: "Low-Fi 15: Select Seats Page", text: "Visual seat map for choosing specific tables.", image: "https://i.postimg.cc/HsFM0PHg/Low-Fi15.avif", caption: "Wireframe 15/16" },
                { title: "Low-Fi 16: My Account Page", text: "User profile, payment methods, and settings.", image: "https://i.postimg.cc/yYD9ZCM9/Low-Fi16.avif", caption: "Wireframe 16/16" }
            ]
          },
          {
            id: "final-polish",
            type: "text-block",
            title: "Final Polish",
            content: "The final UI incorporates feedback from user testing, featuring larger touch targets and clearer status indicators for 'Live Queue'. Below are all the polished high-fidelity screens ready for development handoff."
          },
          {
            id: "final-polish-gallery",
            type: "gallery",
            images: [
              "/jr food court/jr hi-fis/Log in Page.png",
              "/jr food court/jr hi-fis/Log in Page-1.png",
              "/jr food court/jr hi-fis/Initial page.png",
              "/jr food court/jr hi-fis/Home Page.png",
              "/jr food court/jr hi-fis/Search Page.png",
              "/jr food court/jr hi-fis/Searched Places.png",
              "/jr food court/jr hi-fis/Searched Places-1.png",
              "/jr food court/jr hi-fis/Searched Items.png",
              "/jr food court/jr hi-fis/Store's Review Page.png",
              "/jr food court/jr hi-fis/Item Detail Select page.png",
              "/jr food court/jr hi-fis/Item Detail Select page (Dropdown).png",
              "/jr food court/jr hi-fis/Item Detail Select page (Dropdown)-1.png",
              "/jr food court/jr hi-fis/Item Detail Select page (Dropdown)-2.png",
              "/jr food court/jr hi-fis/Item Detail Select page (Dropdown)-3.png",
              "/jr food court/jr hi-fis/My Shopping Cart Page -- Take away.png",
              "/jr food court/jr hi-fis/My Shopping Cart Page -- Dine in.png",
              "/jr food court/jr hi-fis/My Shopping Cart Page -- Dine in 3.png",
              "/jr food court/jr hi-fis/Check Out page.png",
              "/jr food court/jr hi-fis/Choose a Payment.png",
              "/jr food court/jr hi-fis/Order Placed.png",
              "/jr food court/jr hi-fis/My Orders.png",
              "/jr food court/jr hi-fis/My Account Page.png"
            ],
            caption: "Complete High-Fidelity UI Screens (Ordered by User Flow)"
          },
          {
            id: "hifi-section",
            type: "scrollytelling",
            title: "From Wireframes to Reality",
            steps: [
                {
                    title: "High Fidelity Design",
                    text: "Applying the visual identity. We used a clean, appetizing color palette (Warm Orange & Deep Blue) to stimulate appetite while maintaining readability.",
                    image: "https://i.postimg.cc/jSN7MQdv/Low-Hi-Fi.avif"
                },
                {
                    title: "Deliver",
                    text: "Real-world application and final handoff deliverables.",
                    image: "https://i.postimg.cc/28gWdXmf/Real-life-use.avif"
                }
            ]
          },
          {
            id: "testing",
            type: "testing-refinement"
          },
          {
            id: "final-ui",
            type: "text-block",
            title: "Final UI & Outcomes",
            content: "The final High-Fidelity prototype successfully addressed the core pain points. The application now supports a seamless O2O (Online-to-Offline) experience, reducing perceived wait times and ensuring staff can enjoy their break."
          },
          {
            id: "outcomes-video",
            type: "video",
            src: "/jr food court/video/JR Demo.mp4",
            caption: "High Fidelity Prototype Walkthrough"
          }
        ]
      }
    }
  ]
};
