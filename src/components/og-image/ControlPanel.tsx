"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GradientPicker } from "./GradientPicker";
import { FontSelector } from "./FontSelector";
import { LayoutToggle } from "./LayoutToggle";
import { DownloadButton } from "./DownloadButton";
import type { OGImageConfig, GradientPreset, FontOption, LayoutMode } from "@/lib/types";

interface ControlPanelProps {
  config: OGImageConfig;
  onUpdateField: <K extends keyof OGImageConfig>(
    field: K,
    value: OGImageConfig[K]
  ) => void;
  onDownload: () => Promise<void>;
}

function ControlPanel({ config, onUpdateField, onDownload }: ControlPanelProps) {
  return (
    <div className="space-y-6 p-6 border rounded-xl bg-card">
      {/* Text Inputs */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter main headline"
            value={config.title}
            onChange={(e) => onUpdateField("title", e.target.value)}
            maxLength={80}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input
            id="subtitle"
            placeholder="Enter subtitle"
            value={config.subtitle}
            onChange={(e) => onUpdateField("subtitle", e.target.value)}
            maxLength={120}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="domain">Domain</Label>
          <Input
            id="domain"
            placeholder="yourdomain.com"
            value={config.domain}
            onChange={(e) => onUpdateField("domain", e.target.value)}
            maxLength={60}
          />
        </div>
      </div>

      <Separator />

      {/* Gradient Picker */}
      <div className="space-y-2">
        <Label>Gradient</Label>
        <GradientPicker
          value={config.gradient}
          onSelect={(gradient) => onUpdateField("gradient", gradient)}
        />
      </div>

      <Separator />

      {/* Font Selector */}
      <div className="space-y-2">
        <Label>Font</Label>
        <FontSelector
          value={config.font}
          onSelect={(font) => onUpdateField("font", font)}
        />
      </div>

      <Separator />

      {/* Layout Toggle */}
      <div className="space-y-2">
        <Label>Layout</Label>
        <LayoutToggle
          value={config.layout}
          onSelect={(layout) => onUpdateField("layout", layout)}
        />
      </div>

      <Separator />

      {/* Download Button */}
      <DownloadButton onDownload={onDownload} />
    </div>
  );
}

export { ControlPanel, type ControlPanelProps };
