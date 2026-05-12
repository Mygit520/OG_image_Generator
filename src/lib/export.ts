import { toPng } from "html-to-image";

export async function downloadOGImage(
  node: HTMLElement,
  filename = "og-image.png"
): Promise<void> {
  await document.fonts.ready;
  await new Promise((r) => setTimeout(r, 100));

  const dataUrl = await toPng(node, {
    cacheBust: true,
    pixelRatio: 1,
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
