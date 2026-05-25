import type { App } from "./types";

// Sample data
export const apps: App[] = [
    {
    name: "OPNShare",
    description:
      "Post and share instruments for OPN-series FM sound chip.",
    platform: ["web"],
    urlType: "web",
    url: "https://opnshare.vercel.app",
    imageUrl: "/img/opnshare.png?height=200&width=400",
    isLcpImage: true,
  },
  {
    name: "ConvFMML",
    description: "Convert MIDI to MML for PMD, FMP7, mml2vgm, etc.",
    platform: ["windows"],
    urlType: "download",
    url: "https://github.com/rerrahkr/ConvFMML/releases",
    imageUrl: "/img/convfmml.png?height=200&width=400",
  },
  {
    name: "PMDFileWatcher",
    description: "Monitor, compile and play MML automatically.",
    platform: ["windows"],
    urlType: "download",
    url: "https://github.com/rerrahkr/PMDFileWatcher/releases",
    imageUrl: "/img/pmdfilewatcher.png?height=200&width=400",
  },
  {
    name: "voice-analyzer2",
    description:
      "A simple audio player that runs in a web browser and displays waveforms.",
    platform: ["web"],
    urlType: "web",
    url: "https://rerrahkr.github.io/voice-analyzer2/",
    imageUrl: "/img/voice-analyzer2.png?height=200&width=400",
  },
];
