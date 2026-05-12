import type { GradientPreset, FontOption, OGImageConfig } from "./types";

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: "ocean",
    name: "Ocean Blue",
    css: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "light",
  },
  {
    id: "sunset",
    name: "Sunset",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    textColor: "light",
  },
  {
    id: "mint",
    name: "Mint",
    css: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    textColor: "dark",
  },
  {
    id: "peach",
    name: "Peach",
    css: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    textColor: "dark",
  },
  {
    id: "midnight",
    name: "Midnight",
    css: "linear-gradient(135deg, #0c0c1d 0%, #111d4a 100%)",
    textColor: "light",
  },
  {
    id: "forest",
    name: "Forest",
    css: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    textColor: "light",
  },
  {
    id: "berry",
    name: "Berry",
    css: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    textColor: "dark",
  },
  {
    id: "noir",
    name: "Noir",
    css: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    textColor: "light",
  },
];

export const FONT_OPTIONS: FontOption[] = [
  { id: "sans", label: "Sans Serif", cssVariable: "var(--font-sans)" },
  { id: "serif", label: "Serif", cssVariable: "var(--font-serif)" },
  { id: "mono", label: "Monospace", cssVariable: "var(--font-mono)" },
];

export const DEFAULT_CONFIG: OGImageConfig = {
  title: "Your Headline Here",
  subtitle: "A catchy subtitle goes right here",
  domain: "yourdomain.com",
  gradient: GRADIENT_PRESETS[0],
  font: FONT_OPTIONS[0],
  layout: "center",
};
