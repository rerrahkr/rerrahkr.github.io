import type React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Rerrah</title>
        <meta name="description" content="My personal website." />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />

        {/* OGP */}
        <meta property="og:title" content="Rerrah" />
        <meta property="og:description" content="My personal website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_PATH} />
        <meta property="og:image" content={`${BASE_PATH}/img/avatar.png`} />
        <meta property="og:site_name" content="Rerrah" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@RerrahKRynn" />
        <meta name="twitter:creator" content="@RerrahKRynn" />
      </Head>
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
