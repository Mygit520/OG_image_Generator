export interface GradientPreset {
  id: string;
  name: string;
  css: string;
  textColor: "light" | "dark";
}

export interface FontOption {
  id: string;
  label: string;
  cssVariable: string;
}

export type LayoutMode = "center" | "left";

export interface OGImageConfig {
  title: string;
  subtitle: string;
  domain: string;
  gradient: GradientPreset;
  font: FontOption;
  layout: LayoutMode;
}
