"use client";

import { useReducer } from "react";
import { DEFAULT_CONFIG } from "@/lib/constants";
import type { OGImageConfig, GradientPreset, FontOption, LayoutMode } from "@/lib/types";

type Action =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_SUBTITLE"; payload: string }
  | { type: "SET_DOMAIN"; payload: string }
  | { type: "SET_GRADIENT"; payload: GradientPreset }
  | { type: "SET_FONT"; payload: FontOption }
  | { type: "SET_LAYOUT"; payload: LayoutMode };

function ogImageReducer(state: OGImageConfig, action: Action): OGImageConfig {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_SUBTITLE":
      return { ...state, subtitle: action.payload };
    case "SET_DOMAIN":
      return { ...state, domain: action.payload };
    case "SET_GRADIENT":
      return { ...state, gradient: action.payload };
    case "SET_FONT":
      return { ...state, font: action.payload };
    case "SET_LAYOUT":
      return { ...state, layout: action.payload };
    default:
      return state;
  }
}

export function useOGImageState() {
  const [state, dispatch] = useReducer(ogImageReducer, DEFAULT_CONFIG);

  return {
    config: state,
    setTitle: (title: string) => dispatch({ type: "SET_TITLE", payload: title }),
    setSubtitle: (subtitle: string) => dispatch({ type: "SET_SUBTITLE", payload: subtitle }),
    setDomain: (domain: string) => dispatch({ type: "SET_DOMAIN", payload: domain }),
    setGradient: (gradient: GradientPreset) => dispatch({ type: "SET_GRADIENT", payload: gradient }),
    setFont: (font: FontOption) => dispatch({ type: "SET_FONT", payload: font }),
    setLayout: (layout: LayoutMode) => dispatch({ type: "SET_LAYOUT", payload: layout }),
  };
}
