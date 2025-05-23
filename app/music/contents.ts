import {
  LinkSoundCloud,
  LinkBtm,
  LinkVgz,
  LinkM2,
  LinkMml,
  LinkZippedMml,
  LinkNsf,
  Link0cc,
  LinkSid,
  LinkSng,
  type Category,
} from "./types";

const categoryFm: Category = {
  id: "fm",
  name: "FM",
  tracks: [
    {
      title: "Starlight",
      tools: ["BambooTracker"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/starlight"),
        LinkBtm.create("Starlight.btm"),
      ],
    },
    {
      title: "Hayate",
      tools: ["BambooTracker"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/hayate"),
        LinkBtm.create("Hayate.btm"),
      ],
    },
    {
      title: "Lotus",
      tools: ["BambooTracker"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/lotus-opna"),
        LinkVgz.create("Lotus.vgz"),
        LinkBtm.create("Lotus.btm"),
      ],
    },
    {
      title: "Silicon Republic",
      tools: ["PMD"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/silicon-republic"),
        LinkMml.create("Silicon_Republic.mml"),
        LinkM2.create("SILICON.M2"),
      ],
    },
    {
      title: "Trends",
      tools: ["FMP7", "PMD"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/trends"),
        LinkZippedMml.create("Trends.zip"),
      ],
    },
    {
      title: "ニケのつばさ",
      tools: ["FMP7"],
      links: [
        LinkSoundCloud.create("r-k-r5/nike_no_tsubasa"),
        LinkZippedMml.create("nike_no_tsubasa.zip"),
      ],
    },
    {
      title: "戦闘1",
      tools: ["FMP7"],
      links: [
        LinkSoundCloud.create("r-k-r5/battle1"),
        LinkZippedMml.create("battle1.zip"),
      ],
    },
  ],
};

const categoryNes: Category = {
  id: "nes",
  name: "NES",
  tracks: [
    {
      title: "Neon in the Rain",
      tools: ["0CC-FamiTracker"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/neon-in-the-rain"),
        LinkNsf.create("Neon_in_the_Rain.nsf"),
        Link0cc.create("Neon_in_the_Rain.0cc"),
      ],
    },
    {
      title: "Grape Shower",
      tools: ["0CC-FamiTracker"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/grape-shower"),
        LinkNsf.create("Grape_Shower.nsf"),
        Link0cc.create("Grape_Shower.0cc"),
      ],
    },
  ],
};

const categorySid: Category = {
  id: "sid",
  name: "SID",
  tracks: [
    {
      title: "Fun Ride",
      tools: ["SID-Wizard"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/fun-ride"),
        LinkSid.create("Fun_Ride.sid"),
      ],
    },
    {
      title: "Lotus",
      tools: ["GoatTracker2"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/lotus"),
        LinkSid.create("Lotus.sid"),
        LinkSng.create("Lotus.sng"),
      ],
    },
    {
      title: "Second Attempt",
      tools: ["GoatTracker2"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/second-attempt"),
        LinkSid.create("Second_Attempt.sid"),
        LinkSng.create("Second_Attempt.sng"),
      ],
    },
    {
      title: "My First SID Tune",
      tools: ["GoatTracker2"],
      links: [
        LinkSoundCloud.create("rerrahkrynn/my-first-sid-tune"),
        LinkSid.create("My_First_SID_Tune.sid"),
        LinkSng.create("My_First_SID_Tune.sng"),
      ],
    },
  ],
};

export const categories: Category[] = [categoryFm, categoryNes, categorySid];
