import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Store | Phones, Electronics and Home Appliances in Nigeria",
    template: "%s | Store",
  },
  description:
    "Genuine phones, electronics, home appliances, and solar products in Nigeria, with delivery to Lagos and beyond.",
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
