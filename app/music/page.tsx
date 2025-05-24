import { Button } from "@/components/ui/button";
import { FaRegFile, FaRegFileZipper, FaSoundcloud } from "react-icons/fa6";
import type { Metadata } from "next";
import Link from "next/link";
import type React from "react";
import type { LinkIconType } from "./types";
import { categories } from "./contents";

export const metadata: Metadata = {
  title: "Music",
  openGraph: {
    title: "Music - rerrahkr.github.io",
    url: "https://rerrahkr.github.io/music",
    type: "website",
    images: "/img/avatar.png",
    siteName: "rerrahkr.github.io",
  },
};

function LinkIcon({ iconType }: { iconType: LinkIconType }): React.JSX.Element {
  switch (iconType) {
    case "SoundCloud":
      return <FaSoundcloud className="h-3 w-3" />;
    case "Zip":
      return <FaRegFileZipper className="h-3 w-3" />;
    default:
      return <FaRegFile className="h-3 w-3" />;
  }
}

export default function MusicPage() {
  return (
    <div className="container py-12 px-4 md:px-6 w-full">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Music</h1>
        <p className="text-muted-foreground mb-6 text-center max-w-2xl">
          A collection of chiptune music I've created.
        </p>
        <Button asChild variant="outline" className="gap-2 btn-outline-custom">
          <Link href="https://soundcloud.com/rerrahkrynn" target="_blank">
            <FaSoundcloud className="h-3 w-3 ml-1" />
            SoundCloud Profile
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {categories.map((category) => (
          <section key={category.id} className="space-y-4">
            <h2 className="text-2xl font-semibold border-b border-primary/30 pb-2">
              {category.name}
            </h2>
            <div className="space-y-3">
              {category.tracks.map((track, index) => (
                <div
                  key={`${category.id}-${index}`}
                  className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="font-medium">{track.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Tool: {track.tools.join(", ")}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {track.links.map((link, linkIndex) => (
                        <Button
                          key={`${category.id}-${index}-${linkIndex}`}
                          asChild
                          variant="outline"
                          size="sm"
                          className="btn-outline-custom"
                        >
                          <Link
                            href={link.url}
                            target="_blank"
                            className="gap-1"
                          >
                            <LinkIcon iconType={link.iconType} />
                            {link.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
