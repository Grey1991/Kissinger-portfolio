import React from 'react';
import { 
  Database, Users, Shield, Clock, Layers, Smartphone, 
  PenTool, Utensils, Search, MousePointer, CheckSquare, Monitor,
  Layout, Activity, Target, Code, FileText, Eye, TrendingUp, Zap, Lightbulb, RefreshCw, MessageCircle, AlertCircle, HelpCircle, Check, ShoppingCart, UserPlus
} from 'lucide-react';
import { ResumeData } from '../types';

export const RESUME_DATA = {
  name: "Kissinger Hu",
  role: "Senior UI/UX Designer",
  location: "Sydney, NSW",
  contact: {
    email: "huweina98@gmail.com",
    phone: "0415056842",
    linkedin: "https://www.linkedin.com/in/kissingerhu",
    website: "https://www.kissingerhu.com"
  },
  summary: "Senior UI/UX Designer with 5+ years of experience modernising legacy systems and designing complex enterprise platforms. Most recently, I worked as the sole designer across Surf Life Saving Australia’s national platforms—turning member, operational and compliance requirements into clearer workflows, reusable systems and implementation-ready product design.",
  skills: [
    "End-to-End Product & UI/UX Design",
    "Complex Workflow & Form Design",
    "Design Systems & Component Libraries",
    "Responsive & Mobile-First Design",
    "Interaction Design & Prototyping",
    "Stakeholder & Cross-functional Collaboration",
    "Accessibility-minded Responsive Design (web & mobile)",
    "QA Support & UI Validation",
    "AI-Assisted Product Design"
  ],
  tools: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  experience: [
    {
      company: "Surf Life Saving Australia (SLSA)",
      role: "Senior UI Designer (Sole Designer)",
      period: "05/2023 - 05/2026",
      description: "Led end-to-end design across national platforms supporting 200,000+ members and 316 clubs.",
      achievements: [
        "Led SLS Hub UX/UI from workflow definition through implementation QA, replacing the legacy Members Area with a live, responsive national portal.",
        "Led SurfGuard modernisation across dense operational workflows, reducing avoidable errors, steps and task time while preserving complex rules and permissions.",
        "Re-architected compliance-heavy journeys (Member Join & Registration), simplifying decision-making via progressive disclosure.",
        "Established a 50+ component Figma design system, including approximately four SLSA-specific components and patterns, to accelerate delivery."
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
        "Optimised responsive purchase flows for 'CourtCanva', significantly improving discoverability.",
        "Iterated designs in an Agile environment, delivering production-ready assets for complex customisation tools."
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
      subtitle: "Legacy Modernisation · In Development",
      category: "Legacy Modernisation",
      summary: "Led the UX modernisation of a dense legacy operational platform, restructuring high-volume data tables, search, filtering and multi-step workflows into a scalable component-based experience designed to reduce avoidable errors and steps while preserving complex permissions and business rules.",
      tags: ["Enterprise", "Legacy Modernisation", "Design System", "Multi-device"],
      gradient: "from-blue-700 to-cyan-600",
      image: "/surfguard/SLS Hub Hero.png",
      icon: <Shield />,
      isCaseStudy: true,
      finalDesignLink: "design-system",
      details: {
        role: "UI/UX Designer",
        year: "2023-2026",
        platform: "Web (Desktop + Mobile + Tablet)",
        tools: "Figma, Jira, Confluence",
        
        toc: [
          { id: "summary", label: "Summary" },
          { id: "what-i-owned", label: "What I Owned" },
          { id: "design-system", label: "Design System & Delivery" },
          { id: "responsive", label: "Mobile & Tablet Coverage" },
          { id: "qa-support", label: "QA & Implementation Support" },
          { id: "wrap-up", label: "Wrap-up" }
        ],

        contentSections: [
          {
            id: "summary",
            type: "bento-cards",
            title: "Summary",

            cards: [

              {
                icon: "database",
                iconColor: "#60a5fa",
                title: "The Platform",
                description: "SurfGuard is a national core operational platform supporting Surf Life Saving Australia's network of 200,000+ members across 316 clubs, including member records, awards, patrols and organisational operations."
              },
              {
                icon: "box",
                iconColor: "#4ade80",
                title: "The Mission",
                description: "A complete rewrite and modernisation of a legacy PHP system. The objective: bring the platform in-house and transition it to a robust, modern cloud architecture and security model."
              },
              {
                icon: "layout",
                iconColor: "#d946ef",
                title: "My Role: UI/UX Designer",
                description: "Led product design from discovery and workflow definition through UI, prototyping, validation, handoff and implementation QA. Worked with 1–2 BAs, an architect, 7–9 developers, 2 QA specialists and senior stakeholders."
              }
            ],
            badges: [
              { icon: "activity", label: "Enterprise Workflow Modernisation" },
              { icon: "shield", label: "Rule-Rich UX & Permissions" },
              { icon: "layers", label: "Shared Design System Delivery" },
              { icon: "git-branch", label: "Cross-Functional Collaboration" }
            ]
          },
          {
            id: "what-i-owned",
            type: "spotlight-grid",
            title: "What I Owned",
            cards: [
              {
                number: "01",
                icon: "edit3",
                title: "End-to-end UI/UX Design",
                description: "Owned discovery, workflow definition, UI, prototyping, validation, handoff and implementation QA across core modules."
              },
              {
                number: "02",
                icon: "grid",
                title: "Shared SG UI Design System",
                description: "Built and maintained components library and design guidelines."
              },
              {
                number: "03",
                icon: "code",
                title: "Developer Handoff",
                description: "Dev Mode-ready specs with detailed interaction notes."
              },
              {
                number: "04",
                icon: "play",
                title: "Clickable Prototypes",
                description: "Full-flow prototypes for validation with dev teams and stakeholders."
              },
              {
                number: "05",
                icon: "smartphone",
                title: "Multi-device Designs",
                description: "Mobile and tablet designs covering responsive behaviours and interaction density."
              },
              {
                number: "06",
                icon: "users",
                title: "Cross-team Collaboration",
                description: "Aligned 1–2 BAs, an architect, 7–9 developers, 2 QA specialists and senior stakeholders around complex rules and delivery constraints."
              },
              {
                number: "07",
                icon: "check-circle",
                title: "UI QA & Testing",
                description: "Ongoing UI QA per ticket across browsers/devices with tracked feedback loops."
              },
              {
                number: "08",
                icon: "star",
                title: "Brand Assets",
                description: "Supporting brand asset: SurfGuard favicon."
              }
            ]
          },
          {
            id: "design-system",
            type: "artifact-delivery",
            title: "Design System & Delivery",
            content: "Built and maintained a 50+ component Figma design system, including approximately four SLSA-specific components and patterns. Delivered developer-ready design systems — scalable Figma components, documented interaction states and UI patterns aligned with front-end implementation — plus clickable prototypes for end-to-end validation.",
            artifacts: [
              {
                label: "ARTIFACT 01",
                title: "Shared Component Library",
                description: "50+ reusable Figma components, including approximately four SLSA-specific components and patterns, ensuring consistency across modules.",
                image: "/surfguard/Ul Design System SG.png",
                linkUrl: "https://www.figma.com/design/keE51vjv5xu2WiNnVObf5c/UI-Design-System---SG?node-id=2-39&t=SHainmf0XnJxPm78-1"
              },
              {
                label: "ARTIFACT 02",
                title: "Dev Mode Specs",
                description: "Implementation-ready handoff with spacing, tokens, and interaction annotations.",
                image: "/surfguard/SurfGuard Dev Mode.png",
                linkUrl: "https://www.figma.com/design/PtpQ1q57zmzz7pZWRQuDwX/SurfGuard-Dev-Mode?node-id=426-50&t=wrBP4Gh8oJtX5R2G-1"
              },
              {
                label: "ARTIFACT 03",
                title: "Clickable Prototypes",
                description: "Full flow validation for developers and stakeholders across end-to-end journeys.",
                figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/9LLFJrvwoOhqIXs0xgAJbs/SG-Clickable-Prototype--Copy-?page-id=0%3A1&node-id=35110-523921&p=f&viewport=640%2C1683%2C0.02&t=0GkjNPDEeVsAUXCE-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=36365%3A1519657&show-proto-sidebar=1",
                fullWidth: true
              }
            ],
            processItems: [
              "Design-to-development collaboration with BAs, the architect, developers, QA specialists and senior stakeholders.",
              "Monthly module-user reviews to validate live operational needs and guide continuous refinement.",
              "Ongoing refinement and UI QA to protect design intent during the build phase."
            ]
          },

          {
            id: "responsive",
            type: "responsive-device",
            title: "Mobile & Tablet Coverage",
            content: "SurfGuard is being rebuilt to support mobile device usage as a first-class requirement. I delivered responsive layouts across key workflows to ensure operational tasks remain usable under smaller viewports and real-world constraints.",
            checkItems: [
              "Navigation density and action placement across breakpoints.",
              "Mobile/tablet-friendly forms and step progression.",
              "Table/list responsiveness — priority columns, inline actions, overflow rules.",
              "Modal/overlay behaviour and safe touch targets."
            ],
            deviceImages: {
              tablet: "/surfguard/SG Tablet screenshot.png",
              phone: "/surfguard/SG Mobile screenshot.png"
            }
          },
          {
            id: "qa-support",
            type: "qa-console",
            title: "QA & Implementation Support",
            content: "Throughout development, I combined monthly module-user reviews with UI QA per ticket and actionable feedback from real device/browser behaviour. This continuous validation reduced avoidable errors, unnecessary workflow steps and task completion time without overstating unsupported numerical outcomes.",
            qaItems: [
              {
                title: "UI Ticket Testing",
                description: "Performed testing per ticket + recorded feedback for continuous iteration."
              },
              {
                title: "Cross-browser & Responsive",
                description: "Verified layout integrity across Chrome, Edge, Safari and multiple viewports."
              },
              {
                title: "Flow Consistency",
                description: "Validated edge cases, invalid states, and empty states logic."
              },
              {
                title: "Visual Regression",
                description: "Ensured interaction accuracy and protected design fidelity against specs."
              }
            ]
          },
          {
            id: "wrap-up",
            type: "wrapup-section",
              title: "Wrap-up",
            heroText: "",
            outcomes: [],
            statusBar: {
              label: "Project Status",
              value: "In Development",
              badges: [
                { text: "🚧 In Development", type: "pending" },
                { text: "⚙️ Incremental Rollout", type: "pending" }
              ]
            },
            content: ""
          }
        ]
      }
    },
    {
      id: "slshub",
      title: "SLS Hub — National Member Portal",
      subtitle: "Live National Portal · 2024-2026",
      category: "Platform",
      summary: "Led the end-to-end design of SLS Hub, the live national member portal serving a network of 200,000+ members across 316 clubs. Unified memberships, awards, patrols, submissions and admin operations through clear rule-driven workflows across desktop, mobile and dark mode.",
      tags: ["Portal", "Transactions", "Governance", "Live Product"],
      gradient: "from-yellow-600 to-orange-500",
      image: "/slshub/SLS Hub Hero.png",
      icon: <Users />,
      isCaseStudy: true,
      finalDesignLink: "selected-screens",
      details: {
        role: "UI/UX Designer",
        year: "2024-2026",
        platform: "Web + Mobile (responsive) + Dark mode",
        tools: "Figma, Jira, Confluence",
        
        toc: [
          { id: "summary", label: "Summary" },
          { id: "module-coverage", label: "Module Coverage" },
          { id: "rules-governance", label: "Rules & Governance" },
          { id: "design-system", label: "Design System & Delivery" },
          { id: "responsive-dark", label: "Responsive & Dark Mode" },
          { id: "guides-enablement", label: "Guides & Enablement" },
          { id: "quality-readiness", label: "Quality & Release Readiness" },
          { id: "selected-screens", label: "Selected Screens" },
          { id: "interactive-prototype", label: "Interactive Prototype" },
          { id: "wrap-up", label: "Wrap-up" }
        ],

        contentSections: [
          {
            id: "summary",
            type: "text-block",
            title: "Summary",
            content: "SLS Hub is the live national member portal replacing the legacy Members Area for a network of 200,000+ members across 316 clubs. It brings memberships, awards, patrol participation, requests, resources and linked services into one governed experience.\n\nI led product design from discovery and workflow definition through UI, prototyping, validation, handoff and implementation QA across desktop and responsive mobile. I worked with 1–2 BAs, an architect, 7–9 developers, 2 QA specialists and senior stakeholders to balance member needs, eligibility rules and delivery constraints.\n\nWhat this demonstrates:\n• System-level portal UX with role- and eligibility-driven visibility (member vs admin, award-gated access)\n• Rules-heavy transactional workflows (renewals, transfers, submissions, approvals, payments)\n• Operational traceability (history logs, records, exports, audit-friendly status changes)"
          },
          {
            id: "module-coverage",
            type: "text-block",
            title: "Module Coverage",
            content: "SLS Hub spans a wide set of member and admin capabilities, organised into a clear navigation model (Dashboard, Applications, Account, More modules, and Admin). This coverage map reflects the scope I designed and standardised across the platform.\n\nCoverage includes:\n• Dashboard & Applications (portal entry, task widgets, quick actions)\n• Account Management (profile, verification, password recovery)\n• Memberships (renewals, transfers, family groups, payments)\n• Awards & Training (proficiency tracking, submissions, approvals)\n• Patrols & Operations (scheduling, hours, substitutions, calendar exports)\n• Submissions & Forms (apply, multi-step workflows, admin processing)\n• Resources & Documents (library, sharing, access controls)\n• Admin Tools (user management, permissions, reports, bulk actions)\n• Nipper Tracker (sessions, attendance, RFID/NFC, awards)"
          },
          {
            id: "rules-governance",
            type: "text-block",
            title: "Rules & Governance",
            content: "A large part of SLS Hub UX is rules-driven: permissions, eligibility, statuses, and time windows determine what content and actions are available. I designed interfaces that make these rules explicit through guided states, inline validation, and status-driven calls-to-action to reduce 'why can't I see this?' support load.\n\nExamples of governance patterns:\n• Eligibility-gated modules and actions (award/proficiency-driven access)\n• Status-based visibility and CTAs (pending / approved / rejected / expired)\n• Multi-step approvals and audit-friendly confirmations\n• Admin controls designed to be predictable and reversible where possible"
          },
          {
            id: "design-system",
            type: "text-block",
            title: "Design System & Delivery",
            content: "Built and maintained a 50+ component Figma design system, including approximately four SLSA-specific components and patterns, and mapped Confluence field requirements to UI components. The design-to-development collaboration combined scalable Figma components, documented interaction states and UI patterns aligned with front-end implementation.\n\nWhat I delivered:\n• 50+ shared Figma components for consistent patterns across modules\n• Approximately four SLSA-specific components and operational patterns\n• Confluence requirements mapping (fields → UI components) for build clarity\n• Dev Mode specs and clickable prototypes covering complete flows\n• Continuous alignment with BAs, engineering, QA and senior stakeholders"
          },
          {
            id: "responsive-dark",
            type: "text-block",
            title: "Responsive & Dark Mode",
            content: "Designed responsive mobile layouts for members who predominantly access Hub on phones, ensuring key workflows remain usable under smaller viewports and real-world constraints. Also delivered a dark mode experience to provide an accessible alternative and align with modern platform expectations.\n\nWhat was addressed:\n• Navigation and action density across breakpoints\n• Mobile-friendly forms and step progression\n• Modal/overlay behaviour for small viewports\n• Dark mode styling and contrast consistency across modules"
          },
          {
            id: "guides-enablement",
            type: "text-block",
            title: "Guides & Enablement",
            content: "Supporting assets:\n• Brochure and favicon to strengthen consistency and recognition"
          },
          {
            id: "quality-readiness",
            type: "text-block",
            title: "Quality & Release Readiness",
            content: "Combined monthly module-user reviews with continuous UI QA per ticket, cross-browser testing and implementation reviews. Feedback from active module users informed ongoing refinement, while developer and QA collaboration caught rule-driven visibility, status-transition, responsive and modal edge cases before release."
          },
          {
            id: "selected-screens",
            type: "text-block",
            title: "Selected Screens",
            content: "Below are grouped examples showing how rules, transactions, and operational workflows were handled in the UI."
          },
          {
            id: "interactive-prototype",
            type: "text-block",
            title: "Interactive Prototype",
            content: "Explore the clickable prototype to experience the full user flows and interactions.",
            figmaPrototype: {
              url: "https://embed.figma.com/proto/B0IlwtwutamxC08o2Zph3B/SLS-HUB-Clickable-Prototype--Copy-?page-id=0%3A1&node-id=1652-284737&p=f&viewport=1700%2C1346%2C0.02&t=7tsiTSA7G5HURs50-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1652%3A284737&show-proto-sidebar=1&embed-host=share",
              title: "Interactive Prototype",
              description: "Explore the clickable prototype to experience the full user flows and interactions."
            }
          },
          {
            id: "wrap-up",
            type: "wrapup-section",
            title: "",
            heroText: "",
            outcomes: [],
            statusBar: {
              label: "Project Status",
              value: "Live Product",
              badges: [
                { text: "✓ Live", type: "done" },
                { text: "🌐 National Portal", type: "done" }
              ]
            },
            content: ""
          }
        ]
      }
    },
    {
      id: "memberjoin",
      title: "Member Join (SLSA)",
      subtitle: "Member Join Process Rewrite",
      category: "Web App",
      summary: "Redesigned the end-to-end join, rejoin and renewal journey across the public website, SLS Hub and SurfGuard—turning fragmented guidance, eligibility logic, payments and administration into one clearer cross-platform flow.",
      shortSummary: "Enhancing the membership sign-up and renewal process with improved information on the SLS Website, streamlined SLS Hub flows, and consolidated reporting in SurfGuard.",
      tags: ["Form UX", "System Integration", "Compliance", "Working Project"],
      gradient: "from-slate-700 to-slate-800",
      icon: <UserPlus />,
      image: "/member%20join%20slsa/Join%20Cover%20image.png",
      isCaseStudy: true,
      finalDesignLink: "ui-walkthrough",
      details: {
        role: "UI/UX Designer",
        year: "Dec 2025 – Feb 2026",
        platform: "Web App (Responsive)",
        tools: "Figma, Confluence",
        type: "Public Facing + Member Portal",
        
        toc: [
          { id: "demo-video", label: "Demo Walkthrough" },
          { id: "overview", label: "Project Overview" },
          { id: "problem-goal", label: "Problem & Goal" },
          { id: "scope", label: "Project Blueprint" },
          { id: "ui-walkthrough", label: "Design Outcomes" },
          { id: "status", label: "Wrap-up" }
        ],

        overview: "This project involves a complex delivery across three distinct ecosystems: SLSA Website (Public), SLS Hub (Member Portal), and SurfGuard (Admin/CRM). The unified landing page handles information and user triage, while the Hub manages transactional forms and payments.",
        myRole: "Led product design across all three systems from workflow definition through UI, prototyping, stakeholder validation, handoff and implementation-ready documentation.",
        constraints: "Must maintain strict compliance with safeguarding standards, integrate with legacy CRM systems, and support complex pricing logic including promo codes and government vouchers.",
        approach: "Progressive disclosure strategy to guide users through complex decisions, with clear separation between information (SLSA Website) and transactions (Hub).",
        keyDecisions: ["Upfront membership type identification", "Interactive club finder with map", "Price transparency before account creation", "Full SurfGuard integration for automated reporting"],
        outcome: "Currently in V1 stakeholder validation phase, optimizing flows based on initial feedback.",
        
        contentSections: [
          {
            id: "demo-video",
            type: "video-multi",
            caption: "Full walkthrough demonstrating the family membership join process",
            videoItems: [
              {
                src: "/member join slsa/Member Join Process Desktop Demo V2.1.mp4",
                label: "Desktop"
              },
              {
                src: "/member join slsa/Member Join Process Tablet Demo V2.1.mp4",
                label: "Tablet"
              },
              {
                src: "/member join slsa/Member Join Process Mobile Demo V2.1 Mobile.mp4",
                label: "Mobile"
              }
            ]
          },
          {
            id: "overview",
            type: "text-block",
            title: "Project Overview",
            content: "Unifying join, renewal and re-joining journeys that previously depended on fragmented state portals. The proposed experience connects national guidance on the SLSA Website with member transactions in SLS Hub and reporting and reconciliation in SurfGuard.\n\nThe work spans three distinct systems with different users, rules and operational responsibilities: SLSA Website (public), SLS Hub (member portal), and SurfGuard (admin/CRM)."
          },
          {
            id: "problem-goal",
            type: "problem-goal",
            title: "Problem & Goal",
            problemText: "The current ecosystem suffers from <strong>fragmented entry points</strong> across state and club websites, leading to inconsistent information and repetitive workflows.<br/><br/>The legacy reliance on <strong>offline forms</strong> creates friction for members and results in <strong>disconnected data</strong> for reconciliation within SurfGuard.",
            goalText: "Provide a <strong>centralised source</strong> of joining information on the SLSA Website.<br/><br/>Reduce avoidable steps in Hub transactions and connect the resulting records to SurfGuard for <strong>reporting</strong> and financial reconciliation."
          },
          {
            id: "scope",
            type: "flip-cards",
            title: "Project Blueprint",
            hint: "Hover cards to reveal logic",
            cards: [
              // @ts
              {
                system: "SLSA Website",
                tag: "PUBLIC FACING",
                color: "cyan",
                icon: "globe",
                scope: [
                  { id: "01", text: "Landing Page" },
                  { id: "02", text: "Guides & Content" },
                  { id: "03", text: "Logic Flow" },
                  { id: "04", text: "Club Directory" }
                ],
                logic: {
                  title: "Triage Logic",
                  steps: [
                    "User Entry",
                    "Logic Engine|Who • What • Where",
                    "Display Pricing",
                    "Hub Redirect"
                  ]
                }
              },
              {
                system: "SLS Hub",
                tag: "MEMBERS AREA",
                color: "pink",
                icon: "users",
                scope: [
                  { id: "05", text: "Join Wizard" },
                  { id: "06", text: "Member Portal" },
                  { id: "07", text: "Automations" }
                ],
                logic: {
                  title: "Process Map",
                  dualColumn: [
                    {
                      label: "JOIN FLOW",
                      steps: ["1. State", "2. Who", "3. Details", "4. Family", "5. Pay"]
                    },
                    {
                      label: "RENEW FLOW",
                      steps: ["1. Verify", "2. Update", "3. Options", "4. Pay"]
                    }
                  ]
                }
              },
              {
                system: "SurfGuard",
                tag: "ADMIN & SECURITY",
                color: "emerald",
                icon: "shield",
                scope: [
                  { id: "08", text: "Org & Profiles" },
                  { id: "09", text: "Reporting Mods" }
                ],
                logic: {
                  title: "Admin State",
                  steps: [
                    "Pending Queue",
                    "Review",
                    "Organisation Approval",
                    "Sync → Hub"
                  ]
                }
              }
            ],
            uatBar: {
              badge: "10",
              title: "Integration Testing & Rework (UAT)",
              subtitle: "Cross-Platform Validation"
            }
          },
          {
            id: "ui-walkthrough",
            type: "text-block",
            title: "Design Outcomes",
            content: "The member journey spans from the SLSA Website's guided logic flow, which helps users understand membership options and pricing, before redirecting into the SLS Hub to complete the customised join or renew form."
          },
          {
            id: "website-flow",
            type: "image-masonry",
            title: "SLSA Website — Guided Logic Flow",
            content: "Users are guided through key decision points before being redirected to the Hub:",
            images: [
              { src: "/member join slsa/Website Landing Page v2.png", caption: "Website Landing Page" },
              { src: "/member%20join%20slsa/Logic%20Flow%20Step%201.%20Choose%20the%20type%20of%20membership.png", caption: "Step 1: Membership Type" },
              { src: "/member%20join%20slsa/Logic%20Flow%20Step%202.%20Choose%20Type%20of%20Action.png", caption: "Step 2: Action" },
              { src: "/member%20join%20slsa/Logic%20Flow%20Step%203.%20Select%20a%20club.png", caption: "Step 3: Select Club" },
              { src: "/member%20join%20slsa/Logic%20Flow%20Step%204.%20Review%20fees%20and%20costs%20and%20redirect%20to%20SLS%20Hub.png", caption: "Step 4: Review Fees and Redirect to Hub" }
            ]
          },
          {
            id: "hub-journey",
            type: "image-masonry",
            title: "SLS Hub — Join/Renew Form Journey",
            content: "Once redirected to the Hub, users complete the transactional process:",
            images: [
              { src: "/member%20join%20slsa/Redirected%20to%20SLS%20Hub%20-%20start%20by%20creating%20an%20account%20(check%20for%20existing%20account%20done).png", caption: "Redirected to SLS Hub — Start by creating an account (check for existing account done)" },
              { src: "/member%20join%20slsa/Complete%20the%20Hub%20account%20creation%20(welcome%20email%20sent).png", caption: "Complete the Hub account creation (welcome email sent)" },
              { src: "/member%20join%20slsa/Overview%20of%20what%20will%20be%20required%20to%20complete%20the%20process.png", caption: "Overview of what will be required to complete the process" },
              { src: "/member join slsa/Family Group Name and Member Details.png", caption: "Family Group Name and Member Details" },
              { src: "/member join slsa/Membership and Guardian (where req.) Declarations.png", caption: "Membership and Guardian (where req.) Declarations" },
              { src: "/member join slsa/Payment Summary.png", caption: "Payment Summary" },
              { src: "/member join slsa/Complete Payment.png", caption: "Complete Payment" },
              { src: "/member join slsa/Confirmation.png", caption: "Confirmation" }
            ]
          },
          {
            id: "status",
            type: "wrapup-section",
            title: "Wrap-up",
            heroText: "This rewrite transforms a complex, multi-system join/renew experience into a clear, consistent journey. We focused on designing an end-to-end flow across the SLSA Website and SLS Hub, ensuring critical data—such as safeguarding requirements and transaction records—is captured consistently for downstream operational processes.",
            outcomes: [
              {
                icon: "link",
                title: "System-Level UX",
                desc: "Holistic design thinking across Website → Hub → SurfGuard, ensuring data integrity at every handover.",
                color: "blue"
              },
              {
                icon: "shield",
                title: "Risk-Aware Design",
                desc: "Embedded patterns for compliance and sensitive data capture reducing organisational risk.",
                color: "orange"
              },
              {
                icon: "credit-card",
                title: "Payment Experience",
                desc: "Reconcilable payment flows designed for both user ease and strict financial reporting needs.",
                color: "green"
              },
              {
                icon: "package",
                title: "Delivery Discipline",
                desc: "Structured execution through defined scope, detailed artefacts, and rigorous iteration cycles.",
                color: "purple"
              }
            ],
            statusBar: {
              label: "Project Status",
              value: "Scoped Rewrite & Prototyping",
              badges: [
                { text: "✓ Design V1 Complete", type: "done" },
                { text: "⚡ Implementation Pending", type: "pending" }
              ]
            },
            content: "Want a deeper dive? I'm happy to share a demo of the interaction flow and design rationale in a confidential conversation."
          }
        ]
      }
    },
    {
      id: "surfcom",
      title: "SurfCom ICEMS — Incident Logging & Manager Refresh",
      subtitle: "Emergency / Incident Mgmt",
      category: "Regulated",
      summary: "Redesigned time-critical incident logging and coordination workflows so operators can capture structured information, understand the latest confirmed state and hand over active incidents with less ambiguity.",
      tags: ["Emergency Ops", "Incident Logging", "Messaging", "Maps & Location", "Prototype", "QA"],
      gradient: "from-red-600 to-rose-600",
      icon: <Clock />,
      image: "/surfcom%20icems/hero.png",
      isCaseStudy: true,
      details: {
        role: "UI/UX Designer",
        year: "2023",
        platform: "Desktop Operational Console",
        tools: "Figma",
        type: "Mission Critical",
        
        toc: [
          { id: "demo-video", label: "Demo Walkthrough" },
          { id: "overview", label: "Overview" },
          { id: "incident-scenario", label: "Incident Response Scenario" },
          { id: "journey", label: "End-to-End Service Journey" },
          { id: "goals", label: "Goals" },
          { id: "design-highlights", label: "Design Highlights" },
          { id: "safety-rails", label: "Risk Scenarios & Solutions" },
          { id: "wrapup", label: "Wrap-up" }
        ],

        overview: "SurfCom ICEMS is an incident management system supporting operators, supervisors, and responders during live emergency operations. The system handles incident logging, real-time messaging, location tracking, and coordination workflows where speed and clarity directly impact safety outcomes.\n\nSurfCom is part of Surf Life Saving's operational communications ecosystem and is described as a radio communications centre supporting coordination and operational data collection. It also provides communication and coordination support across lifesaving services and can liaise with external emergency services as required—making clear status visibility and message traceability critical in practice.",
        myRole: "Interaction design, prototyping, design specifications, and continuous UX optimisation.",
        constraints: "High-contrast requirements for operational environments, information density, zero-latency interaction expectations, and strict data capture consistency for compliance.",
        approach: "Focused on reducing friction in time-critical workflows through keyboard-first patterns, clear status hierarchy, and consolidated message-centre design that keeps incident context and communications unified.",
        keyDecisions: [
          "Adopted keyboard-first navigation and high-contrast UI for operational speed and accessibility.",
          "Unified incident context, messaging, and coordination into a single, persistent workspace.",
          "Validated design patterns with real operators to ensure practical usability."
        ],
        outcome: "Delivered and tested a clearer design direction for incident logging and coordination. The case study presents the post-testing prototype; implementation was not complete at the documented stage.",
        contentSections: [
          {
            id: "demo-video",
            type: "video",
            src: "/surfcom%20icems/ICEMS%20draft%20demo%201.mp4",
            alt: "SurfCom ICEMS Demo Walkthrough",
            caption: "System walkthrough showing incident logging, message centre, and coordination workflows"
          },
          {
            id: "overview",
            type: "text-block",
            title: "Overview",
            content: "SurfCom ICEMS is an incident management system supporting operators, supervisors, and responders during live emergency operations. The system handles incident logging, real-time messaging, location tracking, and coordination workflows where speed and clarity directly impact safety outcomes.\n\nSurfCom is part of Surf Life Saving's operational communications ecosystem and is described as a radio communications centre supporting coordination and operational data collection. It also provides communication and coordination support across lifesaving services and can liaise with external emergency services as required—making clear status visibility and message traceability critical in practice."
          },
          {
            id: "incident-scenario",
            type: "incident-scenario"
          },
          {
            id: "journey",
            type: "image",
            src: "/surfcom%20icems/Service%20journey.png",
            alt: "End-to-End Service Journey",
            caption: "Incident lifecycle: log → manage/orchestrate → close/report. Journey mapping informed prioritisation and interaction patterns."
          },
          {
            id: "goals",
            type: "goals-interactive"
          },
          {
            id: "design-highlights",
            type: "pattern-cards"
          },
          {
            id: "safety-rails",
            type: "safety-rails",
            safetyRails: [
              {
                risk: "Acknowledgement is delayed or missing, leading to false assumptions.",
                guardrail: "Persist \"awaiting acknowledgement\" state and keep the last confirmed update visibly pinned.",
                image: "/surfcom%20icems/last%20confirmed%20update.png",
                caption: "Pinned 'last confirmed update' and recency cues make acknowledgement uncertainty explicit.",
                chips: ["Clarity", "Status tracking"]
              },
              {
                risk: "Updates arrive out of order, causing confusion about what's current.",
                guardrail: "Chronological log with latest-state emphasis to prevent stale decisions.",
                image: "/surfcom%20icems/Key%20events%20+%20latest%20status.png",
                caption: "Key events + latest status reduce reliance on reading the full message history.",
                chips: ["Clarity", "Handover"]
              },
              {
                risk: "Non-standard callers or channels create inconsistent data capture.",
                guardrail: "Provide fast structured entry paths and prevent \"free text everywhere\" drift.",
                image: "/surfcom%20icems/Caller%20modes.png",
                caption: "Caller modes (Radio/Public/Agency) guide structured capture while keeping entry fast.",
                chips: ["Data consistency", "Speed"]
              },
              {
                risk: "High-stress actions lead to accidental clicks (ack/close).",
                guardrail: "Single primary action + clear confirmation hierarchy for critical moments.",
                image: "/surfcom%20icems/Close%20Incident%20Confirm.png",
                caption: "Destructive action separated and confirmed to reduce accidental closure.",
                chips: ["Error prevention", "Safety"]
              },
              {
                risk: "Context switching between incident details and comms causes missed information.",
                guardrail: "Keep coordination history attached to the incident context, with clear recency cues.",
                image: "/surfcom%20icems/Split%20view.png",
                caption: "Split view keeps incident context and communication trail visible together.",
                chips: ["Context preservation", "Coordination"]
              },
              {
                risk: "Handovers happen mid-incident; missing context slows continuity.",
                guardrail: "Preserve an audit-like trail of key actions and messages for rapid re-orientation.",
                image: "/surfcom%20icems/Incident%20recap.png",
                caption: "Incident recap + key events support rapid re-orientation during handover.",
                chips: ["Handover", "Continuity"]
              }
            ]
          },
          {
            id: "wrapup",
            type: "wrapup-section",
            title: "Wrap-up",
            content: "This refresh focuses on making operational coordination faster to scan, safer to act on, and easier to hand over—especially when updates are incomplete or time-critical. The UI patterns prioritise explicit status, traceable communication, and structured capture to reduce ambiguity under pressure.\n\nPrototype status: The designs shown include post-testing iterations and are not yet implemented.\n\nWant a walkthrough? I'm happy to share a short demo of the interaction flow and design rationale in a confidential conversation."
          }
        ]
      }
    },
    {
      id: "hubx",
      title: "HubX — Trading Management Platform",
      subtitle: "Launched & Delivered · Enterprise Fintech",
      category: "Desktop",
      summary: "Led the design of a launched and delivered portfolio-management platform, consolidating managed funds, asset management and forex copy trading into a clearer system for fund managers and clients.",
      tags: ["Trading Platform", "Fintech", "Data-heavy UI"],
      gradient: "from-slate-700 to-indigo-900",
      image: "/hubx/Hero.png",
      icon: <Layers />,
      isCaseStudy: true,
      details: {
        role: "UI/UX Designer",
        year: "2023",
        platform: "Desktop",
        tools: "Figma, Ant Design",
        type: "Trading Platform",
        
        toc: [
          { id: "overview", label: "Overview" },
          { id: "context", label: "Context & Constraints" },
          { id: "role", label: "My Role" },
          { id: "decisions", label: "Key Design Decisions" },
          { id: "before-after", label: "Before → After" },
          { id: "requirements", label: "Requirements & Specifications" },
          { id: "outcome", label: "Outcome" },
          { id: "reflection", label: "Reflection" }
        ],

        overview: "HubX is a portfolio management system for fund managers and clients, consolidating features from multiple forex trading platforms (MetaTrader 4/5) into a unified web-based platform. It supports managed funds, asset management, and forex copy trading, enabling centralized risk allocation and portfolio management.",
        myRole: "Led end-to-end UX research, interface design, requirements documentation, and quality assurance across the product lifecycle.",
        constraints: "Enterprise-grade data density, accuracy requirements, complex multi-user workflows, and integration with legacy trading systems.",
        approach: "",
        keyDecisions: [],
        outcome: "Launched and delivered with a unified information architecture, reusable Ant Design patterns and implementation-ready requirements.",
        
        contentSections: [
          {
            id: "overview",
            type: "hud-ribbon",
            title: "Project Overview",
            stats: [
              {
                label: "Purpose",
                value: "Unified Platform",
                icon: "archive"
              },
              {
                label: "Target Users",
                value: "Fund Managers",
                icon: "users"
              },
              {
                label: "Core Goals",
                value: "Risk & Portfolio",
                icon: "trending-up"
              },
              {
                label: "Tools",
                value: "Figma + Ant Design",
                icon: "layout"
              }
            ]
          },
          {
            id: "ecosystem",
            type: "ecosystem-diagram"
          },
          {
            id: "context",
            type: "feature-list",
            title: "Context & Constraints",
            intro: "Operating within the realities of enterprise fintech:",
            features: [
              {
                title: "Data-Dense Interface Requirements",
                desc: "Users need to monitor hundreds of positions, transactions, and risk metrics simultaneously without losing clarity.",
                icon: <Layout size={20} />
              },
              {
                title: "Complex Multi-Step Workflows",
                desc: "Trading operations span multiple screens and states, so users need to understand their position in a task and what will happen next.",
                icon: <Activity size={20} />
              },
              {
                title: "Accuracy & Precision",
                desc: "Financial data requires consistent formatting, precise alignment and explicit labels so values and actions are not misread.",
                icon: <Target size={20} />
              },
              {
                title: "Cross-Platform Consistency",
                desc: "Migrating users from legacy systems (MT4/MT5) requires familiar patterns while introducing modern improvements.",
                icon: <Layers size={20} />
              }
            ]
          },
          {
            id: "role",
            type: "flip-cards",
            title: "My Role & Responsibilities",
            flipCards: [
              {
                problemIcon: "search",
                problemTitle: "Research & Analysis",
                problemDesc: "Understanding the existing landscape",
                goalIcon: "target",
                goalTitle: "Discovery Process",
                goals: [
                  "Examined previous platform versions to identify feature gaps",
                  "Analyzed user experience issues in legacy MetaTrader interfaces",
                  "Documented improvement opportunities across core workflows"
                ]
              },
              {
                problemIcon: "edit",
                problemTitle: "UX/UI Design",
                problemDesc: "Translating requirements into interfaces",
                goalIcon: "layout",
                goalTitle: "Design Execution",
                goals: [
                  "Created high-fidelity mockups using Ant Design components",
                  "Developed clickable prototypes for stakeholder validation",
                  "Maintained visual consistency across 40+ screens"
                ]
              },
              {
                problemIcon: "users",
                problemTitle: "Collaboration",
                problemDesc: "Aligning cross-functional teams",
                goalIcon: "check",
                goalTitle: "Stakeholder Alignment",
                goals: [
                  "Partnered with PM to define objectives and functional requirements",
                  "Collaborated with developers on implementation specifications",
                  "Facilitated design reviews to maintain project momentum"
                ]
              },
              {
                problemIcon: "file-text",
                problemTitle: "Documentation & QA",
                problemDesc: "Ensuring implementation accuracy",
                goalIcon: "shield",
                goalTitle: "Quality Assurance",
                goals: [
                  "Authored requirements documents combining product decisions, field rules and prototype behaviour",
                  "Tested front-end builds, documenting discrepancies for resolution",
                  "Iterated designs based on feedback, constraints, and testing results"
                ]
              },
              {
                problemIcon: "activity",
                problemTitle: "Usability Testing",
                problemDesc: "Validating design decisions",
                goalIcon: "trending-up",
                goalTitle: "User Validation",
                goals: [
                  "Identified behavioral patterns revealing confusion or inefficiency",
                  "Applied testing insights to refine interactions and resolve pain points",
                  "Conducted iterative testing cycles to validate improvements"
                ]
              }
            ]
          },
          {
            id: "decisions",
            type: "console-nav",
            title: "Key Design Decisions",
            intro: "Strategic choices that shaped the platform:",
            consoleNav: {
              items: [
                {
                  navTitle: "Ant Design as Foundation",
                  tag: "LIBRARY",
                  displayTitle: "Enterprise-Grade Consistency",
                  description: "Used Ant Design as a shared implementation foundation, then defined product-specific patterns for dense data, forms and multi-step workflows."
                },
                {
                  navTitle: "Component-Driven Arch",
                  tag: "MODULARITY",
                  displayTitle: "Rapid Page Assembly",
                  description: "Defined reusable data-grid, form and card patterns so recurring screens could be assembled consistently without redesigning common behaviour."
                },
                {
                  navTitle: "Documentation Standards",
                  tag: "HANDOFF",
                  displayTitle: "Reducing Ambiguity",
                  description: "Documented field rules, component references and interaction behaviour so engineering and QA could work from the same criteria."
                },
                {
                  navTitle: "Iterative QA Integration",
                  tag: "QUALITY",
                  displayTitle: "Design Fidelity Assurance",
                  description: "Reviewed front-end builds throughout delivery, documenting visual and interaction discrepancies before they accumulated."
                },
                {
                  navTitle: "Workflow Simplification",
                  tag: "UX OPTIMIZATION",
                  displayTitle: "Clearer task progression",
                  description: "Analysed user journeys to identify and eliminate friction points, streamlining multi-step processes without sacrificing functionality."
                }
              ]
            }
          },
          {
            id: "before-after",
            type: "before-after-slider",
            title: "Platform Evolution",
            content: "Migrating from legacy interfaces to a unified modern platform required balancing familiarity with innovation.",
            beforeAfterSlider: {
              badge: "TRANSFORMATION",
              beforeImages: ["/hubx/MetaTrader%204%20before.png", "/hubx/MetaTrader%205%20before.png"],
              afterImages: ["/hubx/MetaTrader%204%20After.png", "/hubx/MetaTrader%205%20after.png"],
              beforeLabel: "Before: Tool-Centric",
              afterLabel: "After: Task-Focused",
              comparisons: [
                {
                  label: "MetaTrader 4",
                  beforeImage: "/hubx/MetaTrader%204%20before.png",
                  afterImage: "/hubx/MetaTrader%204%20After.png"
                },
                {
                  label: "MetaTrader 5",
                  beforeImage: "/hubx/MetaTrader%205%20before.png",
                  afterImage: "/hubx/MetaTrader%205%20after.png"
                }
              ],
              improvements: [
                {
                  title: "Unified Information Architecture",
                  description: "Consolidated scattered features from multiple platforms into a coherent navigation structure, reducing cognitive load.",
                  icon: <Layout size={18} />
                },
                {
                  title: "Consistent Visual Language",
                  description: "Replaced fragmented UI patterns with standardised Ant Design components, improving scanability and reducing the learning curve.",
                  icon: <Eye size={18} />
                },
                {
                  title: "Enhanced Data Clarity",
                  description: "Redesigned tables, charts, and dashboards with improved typography, spacing, and colour coding for faster comprehension.",
                  icon: <TrendingUp size={18} />
                },
                {
                  title: "Streamlined Workflows",
                  description: "Simplified multi-step operations by removing unnecessary screens and optimising task sequences based on user testing.",
                  icon: <Zap size={18} />
                }
              ]
            }
          },
          {
            id: "requirements",
            type: "hotspot-doc",
            title: "Requirements & Specifications",
            content: "Hover over the interactive markers to see how documentation bridges design and engineering.",
            hotspotDoc: {
              imageSrc: "/hubx/BA%20Document.png",
              hotspots: [
                {
                  position: { top: "35%", left: "55%" },
                  title: "Reduced Ambiguity",
                  description: "Explicitly linking Ant Design components (e.g., Input, Select) ensures developers use the exact library assets, eliminating UI inconsistencies."
                },
                {
                  position: { top: "60%", left: "70%" },
                  title: "QA Foundation",
                  description: "Defining field-level logic (e.g., \"Digits set to 2 for fiat currency\") provides QA with testable criteria for automated validation.",
                  tooltipAlign: "right"
                },
                {
                  position: { top: "80%", left: "90%" },
                  title: "Stakeholder Alignment",
                  description: "Documenting data structures (JSON values) acts as a contract between Backend and Frontend, preventing API mismatches.",
                  tooltipAlign: "right"
                }
              ]
            }
          },
          {
            id: "outcome",
            type: "text-block",
            title: "Outcome",
            content: "HubX launched and was delivered with a unified information architecture, reusable Ant Design patterns and implementation-ready requirements. The result made dense trading information easier to scan and complex workflows clearer while keeping confidential commercial and adoption metrics private."
          },
          {
            id: "design-outcome-video",
            type: "video",
            src: "/hubx/hubx demo video.mp4",
            alt: "HubX Final Design Outcome",
            caption: "Final platform design demonstrating unified interface and consistent component usage"
          },
          {
            id: "reflection",
            type: "reflection-dual",
            title: "Reflection",
            reflectionData: {
              successes: [
                {
                  title: "Documentation-First Approach",
                  description: "Detailed requirements gave product, engineering and QA a shared reference for field logic and interaction behaviour."
                },
                {
                  title: "Component Library Foundation",
                  description: "Building on Ant Design provided immediate consistency and enabled focus on complex workflow problems rather than basic UI patterns."
                },
                {
                  title: "Continuous QA Integration",
                  description: "Embedded testing throughout development caught discrepancies early, maintaining design fidelity and reducing last-minute fixes."
                }
              ],
              improvements: [
                {
                  title: "Earlier User Testing",
                  description: "Conducting usability sessions during wireframe phase would have surfaced workflow issues before high-fidelity design investment."
                },
                {
                  title: "Design System Governance",
                  description: "Formalized contribution guidelines and version control for component library would improve scalability as the team grows."
                },
                {
                  title: "Accessibility Audit Process",
                  description: "Integrating WCAG compliance checks earlier in design would prevent retrofitting accessibility features post-development."
                }
              ]
            }
          }
        ]
      }
    },
    {
      id: "courtcanva",
      title: "CourtCanva",
      subtitle: "Live Client Project · End-to-End Product Design",
      category: "Desktop",
      summary: "Led responsive product design for a live client platform enabling custom court creation and supplier quotes. The product remained in active development and was progressing toward full delivery when my employment ended.",
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

        overview: "CourtCanva is a live client platform where court owners, sports facility managers and individuals can create custom court designs, visualise options and receive supplier quotes. The product was still progressing toward full delivery when my employment ended.",
        myRole: "Led responsive product design across core journeys, developed style guidelines with BAs and developers, integrated stakeholder feedback and prepared implementation-ready designs across desktop, iPad and iPhone.",
        constraints: "Maintaining understandable court-building and ordering workflows across desktop, iPad and iPhone while preserving consistency and accessible interaction states.",
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
                desc: "Worked with the BA and developers to document colour, typography, icon and reusable interface decisions.",
                icon: <PenTool size={20} />
              },
              {
                title: "Responsive Layout Design",
                desc: "Designed core pages and landing experiences across desktop and iPad, adapting controls and content hierarchy for each viewport.",
                icon: <Layers size={20} />
              },
              {
                title: "Stakeholder Feedback Integration",
                desc: "Participated in fortnightly showcases to collect and incorporate feedback from stakeholders.",
                icon: <Users size={20} />
              },
              {
                title: "Continuous Design Refinement",
                desc: "Refined workflows and interface details with the project team as requirements, feedback and implementation constraints changed.",
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
              heroTitle: "A clearer configuration and quoting journey",
              description: "The second design direction reorganised the core court-building workflow, improved visualisation controls and connected customisation more clearly to quoting and checkout.",
              features: [
                {
                  index: "01",
                  title: "Intelligent Design Studio",
                  icon: "lightbulb",
                  description: "Enhanced with a collapsible property panel, dynamic dimension sliders, and a real-time pricing engine that instantly calculates costs based on surface area."
                },
                {
                  index: "02",
                  title: "Responsive visualisation",
                  icon: "eye",
                  description: "SVG-based rendering supporting multi-sport layouts (Tennis, Basketball, Pickleball) with instant, lightweight 2D-to-3D perspective switching."
                },
                {
                  index: "03",
                  title: "Structured customisation",
                  icon: "edit",
                  description: "Granular control over surface textures, custom text branding, and a suite of 3D accessories including LED lighting, fencing, and scoreboards."
                },
                {
                  index: "04",
                  title: "Quote and order journey",
                  icon: "shopping-cart",
                  description: "Connected template selection and court customisation to cart management, quote details and the checkout flow."
                },
                {
                  index: "05",
                  title: "Design and order management",
                  icon: "user",
                  description: "A dashboard for saved designs and orders, supported by profile, security and help settings."
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
                  description: "Regular showcases surfaced stakeholder feedback while design decisions were still practical to adjust."
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
                  description: "Starting with smaller viewports to ensure core features are prioritised before scaling up."
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
      subtitle: "Client Project · End-to-End Product Design",
      category: "Desktop",
      summary: "Designed a collaborative note-taking product around the gaps users experienced with shared organisation, media-rich notes and keeping team knowledge easy to retrieve.",
      tags: ["Product Design", "UX Research", "Desktop App"],
      gradient: "from-violet-600 to-fuchsia-600",
      backgroundImage: "/nootee/NooTee Hero BG.png",
      image: "/nootee/hero-1.png",
      icon: <PenTool />,
      isCaseStudy: true,
      details: {
        role: "Product Designer",
        year: "2021",
        platform: "Desktop App",
        tools: "Adobe XD, Miro",
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

        overview: "The research focused on three recurring gaps in note-taking tools: collaborating within a note, working with mixed media, and retrieving information as the number of notes grows.",
        myRole: "Led end-to-end product design—research, personas, journey mapping, competitive analysis, wireframes, and high-fidelity UI.",
        constraints: "A crowded category with established interaction patterns. The design needed a clear reason to switch without making organisation unfamiliar.",
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
                problemDesc: "As the number of notes grows, inconsistent structure and naming make retrieval increasingly difficult.",
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
            imageClass: "w-full block max-w-2xl mx-auto rounded-xl border border-white/10 shadow-2xl"
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
                description: "Users expected familiar navigation and a clear content hierarchy without controls competing with the note itself."
              },
              {
                number: "02",
                title: "Multi-format Flexibility",
                description: "Users want the freedom to capture ideas in various formats, including rich text, images, audio recordings, and video clips."
              },
              {
                number: "03",
                title: "Cross-device Continuity",
                description: "Users needed current notes to remain available across desktop, laptop, tablet and mobile."
              },
              {
                number: "04",
                title: "Advanced Search Ability",
                description: "Users needed to retrieve notes through keywords, custom tags, dates and other remembered attributes."
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
                description: "This is the detailed flow for creating content. It organises the complex \"Tool Bar\" features into logical groups (Editing, Files, Output).",
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
                description: "Visual hierarchy, drag-and-drop organisation and consistent keyboard shortcuts.",
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
                description: "Real-time collaboration, comments and version history attached to the note context.",
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
                description: "Allow users to continue editing without a connection and make synchronisation state visible.",
                image: "/nootee/offline functionality.png"
              }
            ]
          },
          {
            id: "final-ui",
            type: "text-block",
            title: "Final UI",
            content: "The final direction uses a dark-first workspace with clear typography and restrained controls around the note canvas. Media and collaboration actions remain available without occupying the primary writing area, while navigation supports folders, tags and retrieval."
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
            type: "next-steps",
            title: "Next Steps & Learnings",
            content: "A roadmap for future iterations and reflections on the design process.",
            nextSteps: {
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
      summary: "Designed an office canteen service that combines pre-ordering and table booking to reduce queuing, seat uncertainty and wasted break time during the lunch rush.",
      tags: ["Mobile UX", "O2O Service", "Efficiency", "Full Case Study"], 
      gradient: "from-orange-500 to-amber-600",
      backgroundImage: "/jr food court/JR Food Court Hero BG.png",
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
        approach: "Prioritised the time-sensitive parts of the service: choosing food, confirming collection timing and finding a seat.",
        keyDecisions: ["Smart Re-order Loop", "Live Queue Visualization", "Split-Path Checkout"],
        outcome: "Delivered a high-fidelity prototype connecting food pre-ordering, collection status and table booking in one mobile journey.",
        
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
            content: "During definition, the team grouped research findings into the moments causing the most lost break time: deciding what to order, waiting without reliable collection information and searching for seating. We prioritised the task flow around those moments and limited the first concept to ordering, queue visibility and table booking."
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
                description: "Use clear signage and matching in-app references so employees can identify collection and seating areas quickly."
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
            caption: "Iterative process of creating the JR Food Court logo.",
            imageClass: "w-full block max-w-[500px] mx-auto rounded-xl border border-white/10 shadow-2xl"
          },
          {
            id: "iterations",
            type: "text-block",
            title: "Design Iterations (Low-Fi to Hi-Fi)",
            content: "The interface moved through three levels of fidelity, allowing the task sequence and screen hierarchy to be reviewed before visual detail was added. The carousel below shows that progression."
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
                { title: "Low-Fi 9: Item Detail Select page", text: "Detailed view for customising food orders (e.g., toppings).", image: "https://i.postimg.cc/HnxMzqV7/Low-Fi9.avif", caption: "Wireframe 9/16" },
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
            content: "The final UI applies testing feedback through larger touch targets and clearer Live Queue status indicators. The screens below document the proposed end-to-end journey for handoff."
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
            content: "The high-fidelity prototype brings ordering, collection status and seating into one service journey. It demonstrates how the proposed experience could reduce uncertainty during the lunch rush; operational impact was not measured in a live release."
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
