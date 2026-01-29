export interface SafetyRailCard {
  risk: string;
  guardrail: string;
  image: string;
  caption: string;
  chips?: string[];
}

export const safetyRailsData: SafetyRailCard[] = [
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
];
