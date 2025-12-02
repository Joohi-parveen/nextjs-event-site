import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LightRays from '@/components/LightRays';
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miss Dev Event ",
  description: "Miss Dev Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="absolute inset-0 top-0 min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5dfeca"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
