import React from 'react';
import { 
  Database, Users, Shield, Clock, Layers, Smartphone, 
  PenTool, Utensils, Search, MousePointer, CheckSquare 
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
      subtitle: "E-commerce Custom Ordering",
      category: "Mobile",
      summary: "Interactive court design tool allowing users to customize sports surfaces with real-time preview.",
      tags: ["Responsive UI", "Prototyping", "Conversion Flow"],
      gradient: "from-pink-600 to-purple-600",
      icon: <Smartphone />,
      details: {
        role: "UI/UX Designer",
        year: "2022",
        platform: "Responsive Web",
        tools: "Figma",
        type: "E-commerce",
        overview: "Users wanted to design custom basketball/tennis courts. The previous process was manual and offline. We digitized it into a web configurator.",
        myRole: "Optimized the purchase flow and designed the mobile experience for the configurator.",
        constraints: "Technical limitations of the canvas rendering, complex pricing logic.",
        approach: "Focused on 'What You See Is What You Get'. ensured the price updated in real-time as users added logos or changed colors.",
        keyDecisions: [
          "Moved complex options to a side panel on desktop and a bottom sheet on mobile.",
          "Added 'Preset Designs' to solve the blank canvas paralysis problem.",
          "Simplified the checkout process to 3 steps."
        ],
        outcome: "Improved discoverability and user engagement time on the design tool."
      }
    },
    {
      id: "nootee",
      title: "NooTee (Freelance)",
      subtitle: "Note-taking App Concept",
      category: "Research",
      summary: "A research-driven note-taking application addressing specific pain points in information retrieval.",
      tags: ["UX Research", "IA", "UI"],
      gradient: "from-violet-600 to-fuchsia-600",
      icon: <PenTool />,
      details: {
        role: "Product Designer",
        year: "2021",
        platform: "Mobile App",
        tools: "Figma, Miro",
        type: "Concept / MVP",
        overview: "Market research showed users struggled to find notes after creating them. NooTee focused on tagging and retrieval.",
        myRole: "Ran user surveys, mapped journeys, and performed competitive analysis.",
        constraints: "Crowded market, need for differentiation.",
        approach: "Focused on 'Auto-Tagging' and context-aware organization.",
        keyDecisions: [
          "Prioritized search over folder structure.",
          "Designed a minimal writing interface to support 'flow state'.",
          "Created a unique visual tag system."
        ],
        outcome: "Validated concept through user interviews and prototype testing."
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
        role: "Lead UI/UX Designer",
        year: "2021",
        platform: "iOS & Android App",
        tools: "Adobe XD, Illustrator",
        type: "B2C / O2O",
        
        toc: [
          { id: "overview", label: "Overview" },
          { id: "role", label: "My Role" },
          { id: "research", label: "Research & Insights" },
          { id: "define", label: "Define Phase" },
          { id: "flow", label: "Task Flow" },
          { id: "logo", label: "Logo Design" },
          { id: "iterations", label: "Design Iterations" },
          { id: "testing", label: "Testing & Refinement" },
          { id: "final-ui", label: "Final UI" },
          { id: "outcomes", label: "Outcomes" }
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
            content: "JR Academy is a growing educational institution that recently announced plans to open a new office in Sydney. To facilitate their staff's lunchtime needs, the office will feature a food court with 10 food vendors and a common dining room.\n\n**The Problem:** The lunchtime rush often leads to overcrowding, causing a shortage of available tables. Employees waste valuable break time queuing or searching for seats, leading to 'Lunch Rush Anxiety'.",
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
            content: "I conducted background checks on competitor O2O apps and surveyed JR Academy staff. Key insights revealed that **speed** and **certainty** (knowing a table is available) were valued higher than menu variety."
          },
          {
            id: "research-personas",
            type: "gallery",
            images: [
              "https://i.postimg.cc/D0MXMxXg/Persona-Zoe.avif",
              "https://i.postimg.cc/1XtFBk47/Persona-Adam.avif"
            ],
            caption: "User Personas: Zoe (HR) & Adam (Product Manager)"
          },
          {
            id: "define",
            type: "text-block",
            title: "Define Phase",
            content: "During the define phase of our project, I collaborated with my team members to brainstorm and create a comprehensive plan that included feature prioritisation, user task flow, and defining the scope of work. This process allowed us to clearly outline our goals and ensure that our design decisions were aligned with the needs of our users.\n\nAfter conducting thorough research and analysis, we were able to define the key pain points of our users and develop effective solutions to address them."
          },
          {
            id: "define-solutions",
            type: "text-block",
            title: "Strategy & Solutions",
            content: "Key Pain Point:\nThe lunchtime rush at the canteen often leads to overcrowding, causing a shortage of available tables for the employees.\n\nPlan Solutions:\n• Creating a user flow to streamline the ordering process and reduce wait times\n• Implementing a reservation system to ensure that employees can secure their preferred seating options in advance\n• Developing a notification system to alert employees when their orders are ready for pickup\n• Providing clear signage and way finding to guide employees through the food court\n• Regularly monitoring and analysing user feedback to continuously improve the solution and address any new pain points that may arise.",
            highlight: "Strategic Focus: Reducing wait times and securing seating."
          },
          {
            id: "flow",
            type: "text-block",
            title: "User Task Flow",
            content: "To address the diverse needs, I mapped out two distinct flows: one for users who want to **order food** in the canteen, and another for users who **bring their own lunch** but still need to book a seat."
          },
          {
            id: "flow-img-1",
            type: "image",
            src: "https://i.postimg.cc/6pRvML5f/User-Task-Flow-1.avif",
            alt: "User Flow - Ordering Food",
            caption: "Flow 1: For users ordering food in the canteen",
            imageClass: "filter invert opacity-80"
          },
          {
            id: "flow-img-2",
            type: "image",
            src: "https://i.postimg.cc/RFGfcSCy/User-Task-Flow-2.avif",
            alt: "User Flow - Seat Booking Only",
            caption: "Flow 2: For users who bring their own lunch and need a seat only",
            imageClass: "filter invert opacity-80"
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
            content: "I employed a three-step development process to iterate quickly. The Scrollytelling format below demonstrates the evolution from initial wireframes to polished designs."
          },
          {
            id: "iterations-scrolly",
            type: "scrollytelling",
            title: "From Wireframes to Reality",
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
                { title: "Low-Fi 16: My Account Page", text: "User profile, payment methods, and settings.", image: "https://i.postimg.cc/yYD9ZCM9/Low-Fi16.avif", caption: "Wireframe 16/16" },
                {
                    title: "High Fidelity Design",
                    text: "Applying the visual identity. We used a clean, appetizing color palette (Warm Orange & Deep Blue) to stimulate appetite while maintaining readability.",
                    image: "https://i.postimg.cc/jSN7MQdv/Low-Hi-Fi.avif",
                    caption: "High Fidelity: Visual Design Applied"
                },
                {
                    title: "Final Polish",
                    text: "The final UI incorporates feedback from user testing, featuring larger touch targets and clearer status indicators for 'Live Queue'.",
                    image: "https://i.postimg.cc/4NjcvFGB/Hifis.png",
                    caption: "Final Production Design"
                },
                {
                    title: "Deliver",
                    text: "Real-world application and final handoff deliverables.",
                    image: "https://i.postimg.cc/28gWdXmf/Real-life-use.avif",
                    caption: "Real-life Use Case"
                }
            ]
          },
          {
            id: "testing",
            type: "text-block",
            title: "Testing & Refinement",
            content: "During usability testing, we discovered that the initial table booking function was confusing. Users were unable to select a specific dining period, leading to anxiety about seat availability.\n\n**Improvement Strategy:**\n• **Specific Dining Periods:** Added a time-slot selector (e.g., 12:00 PM - 12:30 PM).\n• **Visual Seat Map:** Enabled users to select a specific table number via a visual layout, similar to cinema booking."
          },
          {
             id: "testing-comparison",
             type: "gallery",
             images: [
                 "https://i.postimg.cc/L6Jf1Fc1/Select-Seats-Page-1.avif",
                 "https://i.postimg.cc/8PxvdnDP/Select-Seat-Page-2.avif"
             ],
             caption: "Comparison: Initial Seat Selection (Left) vs Refined Visual Seat Map (Right)"
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
            src: "https://video.wixstatic.com/video/dc438f_2a303de3a77e41e2a7f5a98d844566df/720p/mp4/file.mp4",
            caption: "High Fidelity Prototype Walkthrough"
          }
        ]
      }
    }
  ]
};
