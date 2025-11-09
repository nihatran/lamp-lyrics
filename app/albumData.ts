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
  spotify: string;
}

export const albums: Album[] = [
  {
    id: 1,
    cover: "/images/soyokaze.png",
    title: "Soyokaze Apartment Room 201",
    date: "2003.04.09",
    slug: "soyokaze-apt-room-201",
    songs: soyokazeSongs,
    spotify: "https://open.spotify.com/album/05b7MdxKhnHe7zA3HRVw2c?si=2_pq9moDQS-SFb-yCTr1Qw"
  },
  {
    id: 2,
    cover: "/images/forlovers.png",
    title: "For Lovers",
    date: "2004.02.11",
    slug: "for-lovers",
    songs: forLoversSongs,
    spotify: "https://open.spotify.com/album/0gwS2D9sukMLXNvleEnYr2?si=u4sTz1zzTkqU6plnHZi0Kw"
  },
  {
    id: 3,
    cover: "/images/komorebi.png",
    title: "Komorebi Dori Nite",
    date: "2005.05.25",
    slug: "komorebi-dori-nite",
    songs: komorebiSongs,
    spotify: "https://open.spotify.com/album/5E74hczbln3vnszAQ1wf2E?si=dyQqfVomQdWmp7irrZLVqg"
  },
  { 
    id: 4,
    cover: "/images/afterglow.png",
    title: "Afterglow",
    date: "2007.03.07",
    slug: "afterglow",
    songs: afterglowSongs,
    spotify: "https://open.spotify.com/album/6yXvLJMTXfEiZVpk6o3No2?si=BMyDEWzRQaiqksG8B29JzA"
  },
  {
    id: 5,
    cover: "/images/genso.png",
    title: "Genso",
    date: "2008.12.03",
    slug: "genso",
    songs: gensoSongs,
    spotify: "https://open.spotify.com/album/7b55VfUk2Vpuqnac9NDREc?si=Hh8nb8kYQjaBcsI8ynO_4g"
  },
  {
    id: 6,
    cover: "/images/poetryaugust.png",
    title: "The Poetry Of August",
    date: "2010.08.04",
    slug: "the-poetry-of-august",
    songs: poetryOfAugustSongs,
    spotify: "https://open.spotify.com/album/4zWi5DWyMAd4uEBJm4mC6J?si=fgm85qjoThuEZ3DgNSfUFA"
  },
  {
    id: 7,
    cover: "/images/tokyo.png",
    title: "Tokyo Utopia Communications",
    date: "2011.02.09",
    slug: "tokyo-utopia-communications",
    songs: tokyoUtopiaSongs,
    spotify: "https://open.spotify.com/album/3IEjje6Km1ZQBw94VQgqAK?si=cQFgYLkdRiWsRtU3TX209w"
  },
  {
    id: 8,
    cover: "/images/yume.png",
    title: "Yume",
    date: "2014.02.05",
    slug: "yume",  
    songs: yumeSongs,
    spotify: "https://open.spotify.com/album/0snrpSOntTb03Sd8XDPn78?si=NS2gSlJtQ6aTNnVvxfgjxw"
  },
  {
    id: 9,
    cover: "/images/herwatch.png",
    title: "Her Watch",
    date: "2018.05.15",
    slug: "her-watch",
    songs: herWatchSongs,
    spotify: "https://open.spotify.com/album/7vXAMJhJF7viqpEDclzx7r?si=W8gPku96RB-FPgWllMqmAA"
  },
  {
    id: 10,
    cover: "/images/duskdawn.png",
    title: "Dusk To Dawn",
    date: "2023.10.10",
    slug: "dusk-to-dawn",
    songs: duskToDawnSongs,
    spotify: "https://open.spotify.com/album/7rAKQOCXiqYF1PnWBot3Be?si=h9ATmGtjT7isfy1USMIh8A"
  }
];
