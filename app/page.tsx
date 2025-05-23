import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaSoundcloud, FaGithub, FaRss } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import Link from "next/link";
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className="container max-w-4xl py-12 flex flex-col items-center px-4 md:px-6 w-full">
      <Avatar className="h-32 w-32 mb-6 border-4 border-primary">
        <AvatarImage
          src={`${BASE_PATH}/img/avatar.png?height=128&width=128`}
          alt="Avatar"
        />
        <AvatarFallback>Rerrah</AvatarFallback>
      </Avatar>

      <h1 className="text-3xl font-bold mb-4 text-center">Rerrah</h1>

      <p className="text-muted-foreground mb-8 max-w-md text-center">
        I'm a Japanese software developer. I enjoy music and develop apps
        related to making music. I often listen to chiptune, especially FM and
        SID tunes. Recently, I've also explore vocal synth songs. I also make
        chiptune music sometimes...
      </p>

      <TooltipProvider>
        <div className="flex gap-4">
          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="btn-outline-custom"
              >
                <Link
                  href="https://x.com/RerrahKRynn"
                  target="_blank"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>X (Twitter)</p>
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="btn-outline-custom"
              >
                <Link
                  href="https://github.com/rerrahkr"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="btn-outline-custom"
              >
                <Link
                  href="https://soundcloud.com/rerrahkrynn"
                  target="_blank"
                  aria-label="SoundCloud"
                >
                  <FaSoundcloud className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>SoundCloud</p>
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="btn-outline-custom"
              >
                <Link
                  href="https://rerrahkr.hatenablog.com"
                  target="_blank"
                  aria-label="はてなブログ"
                >
                  <FaRss className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>はてなブログ</p>
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="btn-outline-custom"
              >
                <Link
                  href="https://zenn.dev/rerrah"
                  target="_blank"
                  aria-label="Zenn"
                >
                  <SiZenn className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zenn</p>
            </TooltipContent>
          </TooltipRoot>
        </div>
      </TooltipProvider>
    </div>
  );
}
