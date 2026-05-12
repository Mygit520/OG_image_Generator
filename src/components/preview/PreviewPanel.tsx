"use client";

import { useRef, useImperativeHandle, forwardRef } from "react";
import { usePreviewScale } from "@/hooks/usePreviewScale";
import { PreviewCanvas } from "./PreviewCanvas";
import type { OGImageConfig } from "@/lib/types";

interface PreviewPanelProps {
  config: OGImageConfig;
}

const PreviewPanel = forwardRef<HTMLDivElement | null, PreviewPanelProps>(
  function PreviewPanel({ config }, ref) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const scale = usePreviewScale(wrapperRef);

    useImperativeHandle(ref, () => previewRef.current as HTMLDivElement, []);

    return (
      <div
        ref={wrapperRef}
        className="w-full overflow-hidden rounded-lg border bg-muted/20"
        style={{ height: Math.max(200, 630 * scale) }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: 1200,
            height: 630,
          }}
        >
          <PreviewCanvas ref={previewRef} config={config} />
        </div>
      </div>
    );
  }
);

export { PreviewPanel, type PreviewPanelProps };
