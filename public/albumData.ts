interface Album {
  id: number;
  cover: string;
  title: string;
  date: string;
}

export const albums: Album[] = [
  {
    id: 1,
    cover: "/images/soyokaze.png",
    title: "Soyokaze Apartment Room 201",
    date: "2003.04.09",
  },
  {
    id: 2,
    cover: "/images/forlovers.png",
    title: "For Lovers",
    date: "2004.02.11",
  },
  {
    id: 3,
    cover: "/images/komorebi.png",
    title: "Komorebi Dori Nite",
    date: "2005.05.25",
  },
  { 
    id: 4,
    cover: "/images/afterglow.png",
    title: "Afterglow",
    date: "2007.03.07",
  },
  {
    id: 5,
    cover: "/images/genso.png",
    title: "Genso",
    date: "2008.12.03",
  },
  {
    id: 6,
    cover: "/images/poetryaugust.png",
    title: "The Poetry Of August",
    date: "2010.08.04",
  },
  {
    id: 7,
    cover: "/images/tokyo.png",
    title: "Tokyo Utopia Communications",
    date: "2011.02.09",
  },
  {
    id: 8,
    cover: "/images/yume.png",
    title: "Yume",
    date: "2014.02.05",
  },
  {
    id: 9,
    cover: "/images/herwatch.png",
    title: "Her Watch",
    date: "2018.05.15",
  },
  {
    id: 10,
    cover: "/images/duskdawn.png",
    title: "Dusk To Dawn",
    date: "2023.10.10"
  }
];
