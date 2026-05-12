import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - OG Image Generator",
  description:
    "Terms of service and disclaimer for the OG Image Generator tool.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
        <h1>Terms of Service</h1>
        <p>
          <strong>Effective Date:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website (&quot;OG Image Generator&quot;), you
          agree to be bound by these Terms of Service. If you do not agree, please
          discontinue use of this website.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          OG Image Generator is a free online tool that allows users to create
          Open Graph images for use on their websites and social media. The
          service is provided &quot;as is&quot; and for general informational and design
          purposes only.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All images generated using this tool are owned by you, the user. You
          may use them for any purpose, commercial or non-commercial, without
          attribution. The underlying code, design, and user interface of this
          website are protected by applicable copyright laws.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          This website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis
          without any representation or warranty of any kind, express or
          implied. We do not warrant that the service will be uninterrupted,
          timely, secure, or error-free.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall the owners or operators of this website be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or relating to your use of the service.
        </p>

        <h2>6. Third-Party Links & Advertisements</h2>
        <p>
          This website displays advertisements served by Google AdSense and may
          contain links to external websites. We are not responsible for the
          content or practices of any third-party sites or services.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Updated terms
          will be posted on this page. Continued use of the website after
          changes constitutes acceptance of the new terms.
        </p>
      </main>
      <Footer />
    </>
  );
}
