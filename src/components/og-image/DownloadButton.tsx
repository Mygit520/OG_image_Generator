"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  onDownload: () => Promise<void>;
}

function DownloadButton({ onDownload }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onDownload();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      size="lg"
      className="w-full"
    >
      {loading ? "Generating..." : "Download PNG"}
    </Button>
  );
}

export { DownloadButton, type DownloadButtonProps };
