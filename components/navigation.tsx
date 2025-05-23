"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Only render on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/music", label: "Music" },
    { href: "/apps", label: "Apps" },
  ];

  // For CSR, don't show anything before mounting
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <TooltipProvider>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="hover:bg-primary/10 hover:text-foreground"
              >
                {resolvedTheme === "dark" ? (
                  <FaSun className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {resolvedTheme === "dark" ? "Light" : "Dark"} Mode</p>
            </TooltipContent>
          </TooltipRoot>
        </TooltipProvider>
      </div>
    </header>
  );
}
