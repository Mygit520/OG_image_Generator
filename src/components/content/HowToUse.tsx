function HowToUse() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">How to Use</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="space-y-2 rounded-lg border p-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            1
          </div>
          <h3 className="font-semibold">Customize Your Image</h3>
          <p className="text-sm text-muted-foreground">
            Enter your headline, subtitle, and domain. Choose from 8 gradient
            presets, 3 font styles, and adjust the layout to match your brand.
          </p>
        </div>
        <div className="space-y-2 rounded-lg border p-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            2
          </div>
          <h3 className="font-semibold">Preview in Real-Time</h3>
          <p className="text-sm text-muted-foreground">
            See exactly how your OG image will look as you make changes. The
            preview updates instantly at the standard 1200x630 resolution.
          </p>
        </div>
        <div className="space-y-2 rounded-lg border p-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            3
          </div>
          <h3 className="font-semibold">Download & Share</h3>
          <p className="text-sm text-muted-foreground">
            Click Download PNG to export a high-quality 1200x630 image. Add it
            to your website&apos;s meta tags and boost your social media presence.
          </p>
        </div>
      </div>
    </section>
  );
}

export { HowToUse };
