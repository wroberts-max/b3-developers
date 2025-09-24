// lib/options.ts

export const PROJECT_TYPES = [
  { slug: "land-clearing",   label: "Land Clearing & Mulching" },
  { slug: "dirt-work",       label: "Dirt Work & Excavation" },
  { slug: "gravel-driveway", label: "Gravel Road/Driveway" },  // <- your updated label
  { slug: "site-preparation",label: "Site Preparation" },
  { slug: "multiple",        label: "Multiple Services" },
  { slug: "other",           label: "Other" },
] as const;

export const PROPERTY_SIZES = [
  { slug: "under-1-acre",  label: "Under 1 acre" },
  { slug: "1-5-acres",     label: "1–5 acres" },
  { slug: "5-10-acres",    label: "5–10 acres" },
  { slug: "10-25-acres",   label: "10–25 acres" },
  { slug: "over-25-acres", label: "Over 25 acres" },
  { slug: "unknown",       label: "Not sure" },
] as const;

export const TIMELINES = [
  { slug: "asap",       label: "As soon as possible" },
  { slug: "1-month",    label: "Within 1 month" },
  { slug: "2-3-months", label: "2–3 months" },
  { slug: "3-6-months", label: "3–6 months" },
  { slug: "flexible",   label: "Flexible timeline" },
] as const;

// helpers
type OptList = readonly { slug: string; label: string }[];
export const slugToLabel = (slug: string, list: OptList) =>
  list.find(o => o.slug === slug)?.label ?? slug;