import type { App } from "./types";

// Sample data
export const apps: App[] = [
  {
    name: "BambooTracker",
    description:
      "A chiptune tracker for Yamaha YM2608 sound chip which was used in NEC PC-8801/9801 series computers.",
    platform: ["windows", "mac", "linux"],
    urlType: "web",
    url: "https://bambootracker.github.io/BambooTracker/",
    imageUrl: "/img/bambootracker.png?height=200&width=400",
    isLcpImage: true,
  },
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
    name: "YM2608 Tone Editor",
    description:
      "A tone editor for YM2608 sound chip, with support for converting tone data from various chiptune composition software.",
    platform: ["windows"],
    urlType: "download",
    url: "https://github.com/rerrahkr/YM2608-Tone-Editor/releases",
    imageUrl: "/img/ym2608-tone-editor.png?height=200&width=400",
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
