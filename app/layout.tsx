import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sumus | Electrical, Electronics and Home Appliances in Nigeria",
    template: "%s | Sumus",
  },
  description:
    "Genuine Electrical Building materials, electronics, home appliances, and solar products in Nigeria, with delivery to Lagos and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
