"use client";

import { GRADIENT_PRESETS } from "@/lib/constants";
import type { GradientPreset } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GradientPickerProps {
  value: GradientPreset;
  onSelect: (preset: GradientPreset) => void;
}

function GradientPicker({ value, onSelect }: GradientPickerProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {GRADIENT_PRESETS.map((preset) => (
        <button
          key={preset.id}
          type="button"
          title={preset.name}
          onClick={() => onSelect(preset)}
          className={cn(
            "h-10 w-full rounded-lg border-2 transition-all hover:scale-105",
            value.id === preset.id
              ? "border-foreground ring-2 ring-ring/50"
              : "border-transparent"
          )}
          style={{ background: preset.css }}
        />
      ))}
    </div>
  );
}

export { GradientPicker, type GradientPickerProps };
