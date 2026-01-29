export interface TestingRefinementContent {
  header: {
    title: string;
    subtitle: string;
  };
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  images: {
    v1: string;
    v1Alt: string;
    v2: string;
    v2Alt: string;
  };
  toggleLabels: {
    v1: string;
    v2: string;
  };
}

export const testingRefinementData: TestingRefinementContent = {
  header: {
    title: "Testing & Refinement",
    subtitle: "From Confusion to Clarity"
  },
  problem: {
    title: "The Problem (V1)",
    description: "Users were anxious. The abstract list of seats meant they couldn't visualize where they would be sitting, leading to drop-offs."
  },
  solution: {
    title: "The Solution (V2)",
    description: "We introduced a Cinema-style Seat Map. Users can now select specific time slots and visually pick their exact table."
  },
  images: {
    v1: "/jr food court/Select Seats Page 1.png",
    v1Alt: "Before: Confusing seat selection",
    v2: "/jr food court/Select Seat Page 2.png",
    v2Alt: "After: Visual seat map"
  },
  toggleLabels: {
    v1: "Before (V1)",
    v2: "After (V2)"
  }
};
