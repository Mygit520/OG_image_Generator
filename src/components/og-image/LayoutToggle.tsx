"use client";

import type { LayoutMode } from "@/lib/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface LayoutToggleProps {
  value: LayoutMode;
  onSelect: (layout: LayoutMode) => void;
}

function LayoutToggle({ value, onSelect }: LayoutToggleProps) {
  return (
    <ToggleGroup
      value={[value]}
      onValueChange={(vals) => {
        if (vals.length > 0) {
          const v = vals[0];
          if (v === "center" || v === "left") onSelect(v);
        }
      }}
      variant="outline"
      className="w-full"
    >
      <ToggleGroupItem value="center" className="flex-1">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="left" className="flex-1">
        Left
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export { LayoutToggle, type LayoutToggleProps };
