import nextConfig from "@/next.config.mjs";

type Tool =
  | "BambooTracker"
  | "PMD"
  | "FMP7"
  | "0CC-FamiTracker"
  | "SID-Wizard"
  | "GoatTracker2";

export type LinkSoundCloud = {
  iconType: "SoundCloud";
  label: "SoundCloud";
  url: `https://soundcloud.com/${string}`;
};
export const LinkSoundCloud = {
  create: (path: string): LinkSoundCloud => ({
    iconType: "SoundCloud",
    label: "SoundCloud",
    url: `https://soundcloud.com/${path}`,
  }),
};

export type LinkBtm = {
  iconType: "File";
  label: "BTM";
  url: `/music/${string}`;
};
export const LinkBtm = {
  create: (filename: string): LinkBtm => ({
    iconType: "File",
    label: "BTM",
    url: `/music/${filename}`,
  }),
};

export type LinkVgz = {
  iconType: "File";
  label: "VGZ";
  url: `/music/${string}`;
};
export const LinkVgz = {
  create: (filename: string): LinkVgz => ({
    iconType: "File",
    label: "VGZ",
    url: `/music/${filename}`,
  }),
};

export type LinkM2 = {
  iconType: "File";
  label: "M2";
  url: `/music/${string}`;
};
export const LinkM2 = {
  create: (filename: string): LinkM2 => ({
    iconType: "File",
    label: "M2",
    url: `/music/${filename}`,
  }),
};

export type LinkMml = {
  iconType: "File";
  label: "MML";
  url: `/music/${string}`;
};
export const LinkMml = {
  create: (filename: string): LinkMml => ({
    iconType: "File",
    label: "MML",
    url: `/music/${filename}`,
  }),
};

export type LinkZippedMml = {
  iconType: "Zip";
  label: "MML";
  url: `/music/${string}`;
};
export const LinkZippedMml = {
  create: (filename: string): LinkZippedMml => ({
    iconType: "Zip",
    label: "MML",
    url: `/music/${filename}`,
  }),
};

export type LinkNsf = {
  iconType: "File";
  label: "NSF";
  url: `/music/${string}`;
};
export const LinkNsf = {
  create: (filename: string): LinkNsf => ({
    iconType: "File",
    label: "NSF",
    url: `/music/${filename}`,
  }),
};

export type Link0cc = {
  iconType: "File";
  label: "0CC";
  url: `/music/${string}`;
};
export const Link0cc = {
  create: (filename: string): Link0cc => ({
    iconType: "File",
    label: "0CC",
    url: `/music/${filename}`,
  }),
};

export type LinkSid = {
  iconType: "File";
  label: "SID";
  url: `/music/${string}`;
};
export const LinkSid = {
  create: (filename: string): LinkSid => ({
    iconType: "File",
    label: "SID",
    url: `/music/${filename}`,
  }),
};

export type LinkSng = {
  iconType: "File";
  label: "SNG";
  url: `/music/${string}`;
};
export const LinkSng = {
  create: (filename: string): LinkSng => ({
    iconType: "File",
    label: "SNG",
    url: `/music/${filename}`,
  }),
};

export type ExternalLink =
  | LinkSoundCloud
  | LinkBtm
  | LinkVgz
  | LinkM2
  | LinkMml
  | LinkZippedMml
  | LinkNsf
  | Link0cc
  | LinkSid
  | LinkSng;

export type LinkIconType = ExternalLink["iconType"];

export type Track = {
  title: string;
  tools: Tool[];
  links: ExternalLink[];
};

export type Category = {
  id: string;
  name: string;
  tracks: Track[];
};
