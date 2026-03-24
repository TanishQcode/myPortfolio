import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ParticleBackground from "@/components/ParticleBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanishq Sharma | Full Stack .NET Developer",
  description: "Portfolio of Tanishq Sharma, Full Stack .NET Developer building scalable enterprise systems and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-white selection:bg-cyan-500/30 font-sans`}
      >
        <ParticleBackground />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
