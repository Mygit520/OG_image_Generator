function WhatIsOG() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">
        What is an OG Image?
      </h2>
      <div className="prose prose-neutral max-w-none text-muted-foreground space-y-3">
        <p>
          OG Images (Open Graph Images) are the preview cards that appear when
          you share a link on social media platforms like Twitter/X, Facebook,
          LinkedIn, and Discord. They are defined using Open Graph meta tags in
          your webpage&apos;s HTML.
        </p>
        <p>
          A well-designed OG image dramatically increases click-through rates
          from social media. The standard size is 1200x630 pixels, which
          ensures your image looks sharp on all devices, from mobile phones to
          high-resolution desktop displays.
        </p>
        <p>
          Search engines and social platforms use OG images to understand and
          present your content. Without a proper OG image, platforms will
          either show a blank placeholder or randomly crop an image from your
          page — neither of which looks professional.
        </p>
      </div>
    </section>
  );
}

export { WhatIsOG };
