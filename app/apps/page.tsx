import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaGithub,
  FaDownload,
  FaArrowUpRightFromSquare,
  FaGlobe,
} from "react-icons/fa6";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Platform } from "./types";
import { apps } from "./contents";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export const metadata: Metadata = {
  title: "Apps",
  openGraph: {
    title: "Apps - rerrahkr.github.io",
    url: "https://rerrahkr.github.io/apps",
    type: "website",
    images: "/img/avatar.png",
    siteName: "rerrahkr.github.io",
  },
};

// Platform icon component
function PlatformIcon({ platform }: { platform: Platform }) {
  switch (platform) {
    case "windows":
      return <FaWindows className="h-4 w-4" />;
    case "mac":
      return <FaApple className="h-4 w-4" />;
    case "linux":
      return <FaLinux className="h-4 w-4" />;
    case "web":
      return <FaGlobe className="h-4 w-4" />;
    default:
      return null;
  }
}

export default function AppsPage() {
  return (
    <div className="container py-12 px-4 md:px-6 w-full">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Apps</h1>
        <p className="text-muted-foreground mb-6 text-center max-w-2xl">
          A collection of applications I've developed.
        </p>
        <Button asChild variant="outline" className="gap-2 btn-outline-custom">
          <Link href="https://github.com/rerrahkr" target="_blank">
            <FaGithub className="h-4 w-4" />
            GitHub Profile
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {apps.map((app, index) => (
          <Card
            key={app.name}
            className="flex flex-col border-primary/20 hover:border-primary/50 transition-colors"
          >
            <CardHeader className="border-b border-primary/10">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{app.name}</CardTitle>
                </div>
                <div className="flex gap-1">
                  {app.platform.map((os) => (
                    <Badge
                      key={os}
                      variant="outline"
                      className="flex items-center gap-1 border-primary/30 bg-primary/5"
                    >
                      <PlatformIcon platform={os} />
                      <span className="sr-only">{os}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                {app.description}
              </p>
              <div className="relative h-40 w-full overflow-hidden rounded-md border border-primary/20">
                <Image
                  src={`${BASE_PATH}${app.imageUrl}`}
                  alt={`${app.name} screenshot`}
                  fill
                  className="object-cover"
                  priority={app.isLcpImage ?? false}
                />
              </div>
            </CardContent>
            <CardFooter>
              {app.urlType === "download" ? (
                <Button asChild className="w-full gap-2">
                  <Link href={app.url} target="_blank">
                    <FaDownload className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  className="w-full gap-2 btn-outline-custom h-10"
                >
                  <Link href={app.url} target="_blank">
                    <FaArrowUpRightFromSquare className="h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
