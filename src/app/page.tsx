"use client";

import { useRef, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdBanner } from "@/components/ads/AdBanner";
import { ControlPanel } from "@/components/og-image/ControlPanel";
import { PreviewPanel } from "@/components/preview/PreviewPanel";
import { HowToUse } from "@/components/content/HowToUse";
import { WhatIsOG } from "@/components/content/WhatIsOG";
import { FAQ } from "@/components/content/FAQ";
import { useOGImageState } from "@/hooks/useOGImageState";
import { downloadOGImage } from "@/lib/export";
import type { OGImageConfig } from "@/lib/types";

export default function Home() {
  const { config, setTitle, setSubtitle, setDomain, setGradient, setFont, setLayout } =
    useOGImageState();
  const previewRef = useRef<HTMLDivElement | null>(null);

  const handleUpdateField = useCallback(
    <K extends keyof OGImageConfig>(field: K, value: OGImageConfig[K]) => {
      switch (field) {
        case "title":
          setTitle(value as string);
          break;
        case "subtitle":
          setSubtitle(value as string);
          break;
        case "domain":
          setDomain(value as string);
          break;
        case "gradient":
          setGradient(value as OGImageConfig["gradient"]);
          break;
        case "font":
          setFont(value as OGImageConfig["font"]);
          break;
        case "layout":
          setLayout(value as OGImageConfig["layout"]);
          break;
      }
    },
    [setTitle, setSubtitle, setDomain, setGradient, setFont, setLayout]
  );

  const handleDownload = useCallback(async () => {
    if (previewRef.current) {
      const filename = config.title
        ? `${config.title.slice(0, 30).replace(/\s+/g, "-").toLowerCase()}.png`
        : "og-image.png";
      await downloadOGImage(previewRef.current, filename);
    }
  }, [config.title]);

  return (
    <>
      <Navbar />

      {/* Ad Slot A: Top Leaderboard */}
      <div className="container mx-auto px-4 pt-4">
        <AdBanner
          slot={process.env.NEXT_PUBLIC_AD_SLOT_TOP || "0000000000"}
          format="leaderboard"
        />
      </div>

      {/* Main Tool Area */}
      <main className="container mx-auto px-4 py-6 flex-1">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Control Panel — second on mobile, first on desktop */}
          <aside className="order-2 lg:order-1 lg:w-[380px] shrink-0">
            <ControlPanel
              config={config}
              onUpdateField={handleUpdateField}
              onDownload={handleDownload}
            />
          </aside>

          {/* Preview — first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 flex-1 min-w-0">
            <PreviewPanel ref={previewRef} config={config} />
          </div>
        </div>

        {/* Ad Slot B: Below Preview */}
        <div className="mt-6">
          <AdBanner
            slot={process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM || "0000000000"}
            format="rectangle"
          />
        </div>

        {/* SEO Content Section */}
        <article className="mt-16 space-y-16 max-w-3xl">
          <HowToUse />
          <WhatIsOG />
          <FAQ />
        </article>
      </main>

      <Footer />
    </>
  );
}
