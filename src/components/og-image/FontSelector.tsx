"use client";

import { FONT_OPTIONS } from "@/lib/constants";
import type { FontOption } from "@/lib/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FontSelectorProps {
  value: FontOption;
  onSelect: (font: FontOption) => void;
}

function FontSelector({ value, onSelect }: FontSelectorProps) {
  return (
    <ToggleGroup
      value={[value.id]}
      onValueChange={(ids) => {
        if (ids.length > 0) {
          const font = FONT_OPTIONS.find((f) => f.id === ids[0]);
          if (font) onSelect(font);
        }
      }}
      variant="outline"
      className="w-full"
    >
      {FONT_OPTIONS.map((font) => (
        <ToggleGroupItem key={font.id} value={font.id} className="flex-1">
          {font.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export { FontSelector, type FontSelectorProps };
