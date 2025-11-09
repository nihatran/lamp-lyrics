"use client";

import { useRef } from "react";
import Card from "./Card";
import { albums } from "@/app/albumData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Albums() {
  const albumsRef = useRef<HTMLDivElement>(null);
  const albumWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!albumsRef.current) return;
    if (!albumWrapperRef.current) return;

    const getScrollAmount = () => {
      let albumsWidth = albumsRef.current?.scrollWidth ?? 0;
      return albumsWidth - window.innerWidth;
    };

    const tween = gsap.to(albumsRef.current, {
      x: () => -getScrollAmount(),
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: albumWrapperRef.current,
      start: "center center",
      end: () => `+=${getScrollAmount() - 10}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  });

  return (
    <>
      <div
        ref={albumWrapperRef}
        className="h-svh flex items-center overflow-hidden pl-3"
      >
        <div className="flex flex-col">
          <h2 className="md:text-2xl text-xl mb-3 xl:pl-10 pl-5">
            Scroll and Select
          </h2>
          <div
            ref={albumsRef}
            className="w-fit flex flex-nowrap md:gap-[5rem] gap-[2rem] xl:px-10 px-5"
          >
            {albums.map((album) => (
              <Link key={album.id} href={`/lyrics/${album.slug}`}>
                <Card
                  cover={album.cover}
                  title={album.title}
                  date={album.date}
                ></Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
