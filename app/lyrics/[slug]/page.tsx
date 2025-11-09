"use client";

import { albums } from "@/app/albumData";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";

interface LyricsPageProps {
  params: Promise<{ slug: string }>;
}

interface Song {
  id: string;
  name: string;
  lyrics: string;
}

export default function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = use(params);

  const album = albums.find((album) => album.slug === slug);

  if (!album) {
    return <div>Album not found</div>;
  }

  const [selectedSong, setSelectedSong] = useState<Song>(album.songs[0]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex md:flex-row flex-col md:items-start items-center md:justify-center w-full gap-8 xl:mt-12 mt-10 md:pl-5 lg:pl-0">
        <div className="flex flex-col gap-1">
          <div className="relative w-[250px] aspect-square sm:w-[350px] mb-4 xl:mb-0">
            <Image
              src={album.cover}
              fill
              alt="lamp album cover"
              sizes="(max-width:440px) 250px, 350px"
            ></Image>
          </div>
          <h3 className="md:text-2xl text-xl font-medium">{album.title}</h3>
          <p className="md:text-lg text-base">{album.date}</p>
          <ol className="flex flex-col gap-2 mt-4 ml-4 list-decimal md:text-xl text-lg">
            {album.songs.map((song) => {
              const isSelected = selectedSong?.name === song.name;

              return (
                <li
                  key={song.id}
                  onClick={() => setSelectedSong(song)}
                  className={`cursor-pointer pl-2 ${
                    isSelected
                      ? "bg-slate-200 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {song.name}
                </li>
              );
            })}
          </ol>
          <div className="flex mt-5 justify-between">
            <button className="hover:text-green-700 md:text-lg border-1 border-slate-300 p-2 cursor-pointer">
              <a href={album.spotify} target="_blank">
                Listen on Spotify
              </a>
            </button>
            <Link
              href="/"
              className="hover:text-blue-700 md:text-lg border-1 border-slate-300 p-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <div className="lg:w-[500px] pb-10">
          {selectedSong.lyrics.split("\n").map((line, index) => (
            <p key={index} className="py-1 px-5">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
