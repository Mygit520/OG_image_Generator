"use client";

import { forwardRef } from "react";
import type { OGImageConfig } from "@/lib/types";

interface PreviewCanvasProps {
  config: OGImageConfig;
}

const PreviewCanvas = forwardRef<HTMLDivElement, PreviewCanvasProps>(
  function PreviewCanvas({ config }, ref) {
    const { title, subtitle, domain, gradient, font, layout } = config;
    const textColor = gradient.textColor === "light" ? "#ffffff" : "#1a1a2e";
    const mutedColor =
      gradient.textColor === "light"
        ? "rgba(255,255,255,0.7)"
        : "rgba(0,0,0,0.6)";

    return (
      <div
        ref={ref}
        style={{
          width: 1200,
          height: 630,
          background: gradient.css,
          fontFamily: font.cssVariable,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: layout === "center" ? "center" : "flex-start",
          padding: layout === "center" ? "60px 80px" : "60px 80px 60px 100px",
          textAlign: layout as React.CSSProperties["textAlign"],
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Decorative overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            [layout === "center" ? "left" : "left"]: layout === "center" ? 0 : 100,
            right: layout === "center" ? 0 : 80,
            textAlign: layout as React.CSSProperties["textAlign"],
          }}
        >
          <span
            style={{
              color: mutedColor,
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            {domain}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            color: textColor,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: 0,
            marginBottom: 20,
            maxWidth: 1000,
            wordBreak: "break-word",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: mutedColor,
            fontSize: 36,
            fontWeight: 400,
            lineHeight: 1.4,
            margin: 0,
            maxWidth: 900,
            wordBreak: "break-word",
          }}
        >
          {subtitle}
        </p>
      </div>
    );
  }
);

export { PreviewCanvas, type PreviewCanvasProps };
