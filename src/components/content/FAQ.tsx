import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = [
  {
    q: "What size is the exported image?",
    a: "The exported image is always 1200x630 pixels, which is the recommended size for Open Graph images by Facebook, Twitter, LinkedIn, and most other social platforms.",
  },
  {
    q: "Is this tool free to use?",
    a: "Yes! The OG Image Generator is completely free. We support the tool through advertising so you can generate unlimited images without paying anything.",
  },
  {
    q: "What are OG images used for?",
    a: "OG images appear as preview cards when your webpage is shared on social media. They help increase engagement, click-through rates, and make your content look professional.",
  },
  {
    q: "Can I use the generated images commercially?",
    a: "Absolutely. Every image you create with this tool is yours to use however you like, including in commercial projects, with no attribution required.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account or registration is needed. Just customize your image, download it, and you are done. We do not collect any personal data.",
  },
  {
    q: "How do I add the image to my website?",
    a: "Add the image URL to your page's <meta> tags using the og:image property. For Next.js, use the openGraph.image field in your metadata export. For plain HTML, add <meta property=\"og:image\" content=\"your-image-url.png\" /> in the <head>.",
  },
];

function FAQ() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">
        Frequently Asked Questions
      </h2>
      <Accordion className="w-full">
        {FAQs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export { FAQ };
