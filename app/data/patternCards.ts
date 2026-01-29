// Pattern Cards Data
export interface Pattern {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  figcaption: string;
  tags: string[];
}

export const patternCardsData: Pattern[] = [
  {
    title: "Searchable Tables + Persistent Filters",
    description: "Incident and message tables support instant search and column filters, enabling operators to locate specific records without navigating across pages.",
    imageSrc: "/surfcom%20icems/View%20Incidents%20Summary.png",
    imageAlt: "Incidents table with search and filter controls",
    figcaption: "Incident list view with search bar and status filters",
    tags: ["Fast Retrieval", "Operational Triage", "Filter + Search"]
  },
  {
    title: "Status Visibility with Coloured Pills",
    description: "Color-coded status pills (awaiting acknowledgement / acknowledged / closed) provide at-a-glance incident state without requiring detail inspection.",
    imageSrc: "/surfcom%20icems/View%20ICEMS%20Summary.png",
    imageAlt: "ICEMS summary with status pills",
    figcaption: "Status pills highlighting incident states in the summary view",
    tags: ["At-a-glance Status", "State Clarity", "Reduced Checking"]
  },
  {
    title: "Row-Level Quick Actions",
    description: "Contextual action buttons embedded in table rows reduce navigation depth and keep operators in flow during coordination tasks.",
    imageSrc: "/surfcom%20icems/View%20Incidents%20Summary.png",
    imageAlt: "Quick action buttons in incident rows",
    figcaption: "Row-level actions enabling direct access to chat and incident details",
    tags: ["Quick Actions", "In-Context Work", "Reduced Navigation"]
  },
  {
    title: "Structured Incident Details Form",
    description: "Required field validation and logical field grouping ensure consistent data capture and reduce ambiguity during shift handovers.",
    imageSrc: "/surfcom%20icems/View%20Incident%20Details.png",
    imageAlt: "Incident details form with structured fields",
    figcaption: "Incident form showing grouped fields and validation requirements",
    tags: ["Structured Data", "Error Prevention", "Handover-ready"]
  },
  {
    title: "Message Log Timeline with Visibility States",
    description: "Chronological message history displays sender identity, timestamps, and 'seen' states to track communication flow and reduce follow-up questions.",
    imageSrc: "/surfcom%20icems/View%20Message%20Log.png",
    imageAlt: "Message log with timeline and seen states",
    figcaption: "Message timeline showing sender, timestamp, and read status",
    tags: ["Traceable Timeline", "Seen / Read States", "Coordination Clarity"]
  },
  {
    title: "Toast Confirmation with Deep Links",
    description: "Non-blocking toast notifications confirm actions and provide direct navigation links to relevant incident context.",
    imageSrc: "/surfcom%20icems/Light%20Toast.png",
    imageAlt: "Toast notification with action link",
    figcaption: "Toast notification with deep link to newly created incident",
    tags: ["Non-blocking Feedback", "Deep Link Jump", "Flow Continuity"]
  },
  {
    title: "SOS/Emergency Popup Pattern",
    description: "High-priority incident popups surface critical information with a single primary action to minimize decision friction during emergency response.",
    imageSrc: "/surfcom%20icems/SOS%20Popup.png",
    imageAlt: "SOS emergency popup",
    figcaption: "Emergency popup displaying incident ID, time, coordinates, and primary action",
    tags: ["High Priority Alert", "Single Primary Action", "Decision Friction↓"]
  },
  {
    title: "Chat Window Integration",
    description: "Embedded messaging within incident context eliminates context-switching and keeps all coordination history accessible in one place.",
    imageSrc: "/surfcom%20icems/Chat%20window.png",
    imageAlt: "Chat window integrated in incident view",
    figcaption: "Chat interface embedded within incident coordination workspace",
    tags: ["Embedded Comms", "Context-preserving", "Reduced Context Switch"]
  }
];
