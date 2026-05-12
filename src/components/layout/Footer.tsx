import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} OG Image Generator. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
