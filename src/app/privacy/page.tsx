import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - OG Image Generator",
  description:
    "Our privacy policy explains that we do not collect any personal data and how third-party advertising cookies work.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>We do not collect any personal data.</strong> This tool
          operates entirely in your browser. The text, images, and settings you
          create are never uploaded to any server. We do not require accounts,
          emails, or any form of registration.
        </p>

        <h2>2. Third-Party Advertising & Cookies</h2>
        <p>
          We use Google AdSense to display advertisements on this website.
          Google, as a third-party vendor, uses cookies to serve ads based on
          your prior visits to this website and other websites. Google&apos;s use
          of advertising cookies enables it and its partners to serve ads to
          you based on your visit to this site and/or other sites on the
          Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . Alternatively, you can opt out of third-party cookie-based
          advertising by visiting{" "}
          <a
            href="https://optout.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://optout.aboutads.info
          </a>
          .
        </p>

        <h2>3. Analytics</h2>
        <p>
          We may use basic, privacy-focused analytics to understand site
          traffic and usage patterns. No personally identifiable information is
          collected through these tools.
        </p>

        <h2>4. Children&apos;s Privacy</h2>
        <p>
          This website is not directed at children under the age of 13, and we
          do not knowingly collect any information from anyone under 13 years
          of age.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>

        <h2>6. Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us
          through our GitHub repository linked in the navigation bar.
        </p>
      </main>
      <Footer />
    </>
  );
}
