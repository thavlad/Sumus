import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Sumus | Electrical materials, Electronics and Home Appliances in Nigeria",
    template: "%s | Sumus",
  },
  description:
    "Genuine Electrical Building Materials, electronics, home appliances, and solar products in Nigeria, with delivery to Lagos and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
