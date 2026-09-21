export interface AboutValue {
  id: string;
  title: string;
  body: string;
  order: number;
}

/** Centralised About content, ready to be managed by a future content system. */
export const aboutValues: AboutValue[] = [
  {
    id: "clarity-over-jargon",
    title: "Clarity over jargon",
    body: "Plain explanations of what we're building, what it costs and what it won't do.",
    order: 1,
  },
  {
    id: "own-the-outcome",
    title: "Own the outcome",
    body: "We measure ourselves on whether the product works in production, not on delivery dates.",
    order: 2,
  },
  {
    id: "craft-in-the-detail",
    title: "Craft in the detail",
    body: "Performance, accessibility and copy get the same attention as the layout.",
    order: 3,
  },
  {
    id: "build-to-hand-over",
    title: "Build to hand over",
    body: "Documentation and clean code, so you're never locked to one agency.",
    order: 4,
  },
];