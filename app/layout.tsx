import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prosis Shrestha",
  description: "Prosis Shrestha's portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-2 text-center text-xs sm:text-sm font-light text-[#C1C2D3]">
            Haven&apos;t upgraded the site and projects since long except{" "}
            <span className="font-medium text-white">RESUME</span>. You can
            still browse all without hassle 😊
          </div>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
