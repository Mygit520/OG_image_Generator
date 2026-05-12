"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "leaderboard" | "rectangle";
  className?: string;
}

function AdBanner({ slot, format = "auto", className }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  useEffect(() => {
    if (!publisherId || !insRef.current) return;
    try {
      (window as unknown as Record<string, unknown>).adsbygoogle = (
        window as unknown as Record<string, unknown>
      ).adsbygoogle || [];
      (
        (window as unknown as Record<string, unknown>)
          .adsbygoogle as unknown[]
      ).push({});
    } catch {
      // AdSense script not loaded
    }
  }, [publisherId]);

  if (!publisherId) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg border border-dashed border-muted-foreground/30 bg-muted/30 text-xs text-muted-foreground",
          format === "leaderboard" ? "h-[90px]" : "h-[250px]",
          className
        )}
      >
        Ad Space ({format})
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        style={{ display: "block" }}
      />
    </div>
  );
}

export { AdBanner, type AdBannerProps };
