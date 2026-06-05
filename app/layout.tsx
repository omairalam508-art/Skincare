import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLANQUIQ | Glow Beyond Limits",
  description:
    "Luxury brightening body care powered by Niacinamide 2%, AHA 3.5%, Tranexamic Acid, Ceramides, Hyaluron, Copper Peptides, and Korean botanicals.",
  keywords: [
    "BLANQUIQ",
    "Luxury Brightening Body Mask",
    "Body Mask with AHA",
    "Niacinamide body care",
    "brightening skincare"
  ],
  openGraph: {
    title: "BLANQUIQ | Glow Beyond Limits",
    description: "Luxury Brightening Body Care Powered by Science and Nature.",
    images: ["/images/product-hero.jpg"],
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A3C34"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
