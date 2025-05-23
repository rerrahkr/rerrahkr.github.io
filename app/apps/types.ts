export type Platform = "windows" | "mac" | "linux" | "web";
export type UrlType = "download" | "web";

export type App = {
  name: string;
  description: string;
  platform: Platform[];
  urlType: UrlType;
  url: string;
  imageUrl: string;
  isLcpImage?: boolean;
};
