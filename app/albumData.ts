interface Album {
  id: number;
  cover: string;
  title: string;
  date: string;
  slug: string;
}

export const albums: Album[] = [
  {
    id: 1,
    cover: "/images/soyokaze.png",
    title: "Soyokaze Apartment Room 201",
    date: "2003.04.09",
    slug: "soyokaze-apt-room-201",
  },
  {
    id: 2,
    cover: "/images/forlovers.png",
    title: "For Lovers",
    date: "2004.02.11",
    slug: "for-lovers",
  },
  {
    id: 3,
    cover: "/images/komorebi.png",
    title: "Komorebi Dori Nite",
    date: "2005.05.25",
    slug: "komorebi-dori-nite",
  },
  { 
    id: 4,
    cover: "/images/afterglow.png",
    title: "Afterglow",
    date: "2007.03.07",
    slug: "afterglow",
  },
  {
    id: 5,
    cover: "/images/genso.png",
    title: "Genso",
    date: "2008.12.03",
    slug: "genso",
  },
  {
    id: 6,
    cover: "/images/poetryaugust.png",
    title: "The Poetry Of August",
    date: "2010.08.04",
    slug: "the-poetry-of-august",
  },
  {
    id: 7,
    cover: "/images/tokyo.png",
    title: "Tokyo Utopia Communications",
    date: "2011.02.09",
    slug: "tokyo-utopia-communications",
  },
  {
    id: 8,
    cover: "/images/yume.png",
    title: "Yume",
    date: "2014.02.05",
    slug: "yume",  
  },
  {
    id: 9,
    cover: "/images/herwatch.png",
    title: "Her Watch",
    date: "2018.05.15",
    slug: "her-watch",
  },
  {
    id: 10,
    cover: "/images/duskdawn.png",
    title: "Dusk To Dawn",
    date: "2023.10.10",
    slug: "dusk-to-dawn",
  }
];
