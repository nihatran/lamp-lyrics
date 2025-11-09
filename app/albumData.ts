import { soyokazeSongs } from "./songs/soyokaze";
import { forLoversSongs } from "./songs/forlovers";
import { komorebiSongs } from "./songs/komorebi";
import { afterglowSongs } from "./songs/afterglow";
import { gensoSongs } from "./songs/genso";
import { poetryOfAugustSongs } from "./songs/poetryaugust";
import { tokyoUtopiaSongs } from "./songs/tokyoutopia";
import { yumeSongs } from "./songs/yume";
import { herWatchSongs } from "./songs/herwatch";
import { duskToDawnSongs } from "./songs/duskdawn";

interface Song {
  id: string;
  name: string;
  lyrics: string;
}

interface Album {
  id: number;
  cover: string;
  title: string;
  date: string;
  slug: string;
  songs: Song[];
}

export const albums: Album[] = [
  {
    id: 1,
    cover: "/images/soyokaze.png",
    title: "Soyokaze Apartment Room 201",
    date: "2003.04.09",
    slug: "soyokaze-apt-room-201",
    songs: soyokazeSongs,
  },
  {
    id: 2,
    cover: "/images/forlovers.png",
    title: "For Lovers",
    date: "2004.02.11",
    slug: "for-lovers",
    songs: forLoversSongs,
  },
  {
    id: 3,
    cover: "/images/komorebi.png",
    title: "Komorebi Dori Nite",
    date: "2005.05.25",
    slug: "komorebi-dori-nite",
    songs: komorebiSongs,
  },
  { 
    id: 4,
    cover: "/images/afterglow.png",
    title: "Afterglow",
    date: "2007.03.07",
    slug: "afterglow",
    songs: afterglowSongs,
  },
  {
    id: 5,
    cover: "/images/genso.png",
    title: "Genso",
    date: "2008.12.03",
    slug: "genso",
    songs: gensoSongs,
  },
  {
    id: 6,
    cover: "/images/poetryaugust.png",
    title: "The Poetry Of August",
    date: "2010.08.04",
    slug: "the-poetry-of-august",
    songs: poetryOfAugustSongs,
  },
  {
    id: 7,
    cover: "/images/tokyo.png",
    title: "Tokyo Utopia Communications",
    date: "2011.02.09",
    slug: "tokyo-utopia-communications",
    songs: tokyoUtopiaSongs,
  },
  {
    id: 8,
    cover: "/images/yume.png",
    title: "Yume",
    date: "2014.02.05",
    slug: "yume",  
    songs: yumeSongs,
  },
  {
    id: 9,
    cover: "/images/herwatch.png",
    title: "Her Watch",
    date: "2018.05.15",
    slug: "her-watch",
    songs: herWatchSongs,
  },
  {
    id: 10,
    cover: "/images/duskdawn.png",
    title: "Dusk To Dawn",
    date: "2023.10.10",
    slug: "dusk-to-dawn",
    songs: duskToDawnSongs,
  }
];
