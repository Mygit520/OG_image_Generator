import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            OG Image Generator
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 items-center justify-center rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] font-medium transition-all hover:bg-muted hover:text-foreground"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { Navbar };
