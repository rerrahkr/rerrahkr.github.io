import type React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "rerrahkr.github.io",
    template: "%s - rerrahkr.github.io",
  },
  description: "My personal website.",
  metadataBase: new URL(`https://rerrahkr.github.io/${BASE_PATH}`),
  twitter: {
    card: "summary",
    site: "@RerrahKRynn",
    creator: "@RerrahKRynn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 flex flex-col items-center w-full">
              {children}
            </main>
            <footer className="py-6 text-center text-sm text-muted-foreground w-full">
              © 2023 Rerrah
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
