export interface Goal {
  title: string;
  description: string;
  icon: string;
  wireframeImage: string;
  uiImage: string;
  colorClass: string;
  colorVars: {
    bg: string;
    border: string;
    hover: string;
  };
}

export const goalsData: Goal[] = [
  {
    title: "Reduce Friction\nin Logging",
    description: "Streamline incident creation and data capture during live operational work to minimize time away from coordination tasks.",
    icon: "⚡️",
    wireframeImage: "/surfcom%20icems/Incident%20logging%20phase.png",
    uiImage: "/surfcom%20icems/View%20Incident%20Details.png",
    colorClass: "card-1",
    colorVars: {
      bg: "rgba(236, 72, 153, 0.1)",
      border: "rgba(236, 72, 153, 0.3)",
      hover: "#ec4899"
    }
  },
  {
    title: "Improve Update\nVisibility",
    description: "Enhance visibility of incident updates and communication history to reduce back-and-forth and information gaps.",
    icon: "👁️",
    wireframeImage: "/surfcom%20icems/orchestration%20phase.png",
    uiImage: "/surfcom%20icems/View%20Message%20Log.png",
    colorClass: "card-2",
    colorVars: {
      bg: "rgba(59, 130, 246, 0.1)",
      border: "rgba(59, 130, 246, 0.3)",
      hover: "#3b82f6"
    }
  },
  {
    title: "Support Consistent\nData Capture",
    description: "Ensure structured, unambiguous information flows to enable faster coordination and reliable reporting.",
    icon: "☑️",
    wireframeImage: "/surfcom%20icems/Key%20data%20needs.png",
    uiImage: "/surfcom%20icems/View%20ICEMS%20Summary.png",
    colorClass: "card-3",
    colorVars: {
      bg: "rgba(168, 85, 247, 0.1)",
      border: "rgba(168, 85, 247, 0.3)",
      hover: "#a855f7"
    }
  }
];
