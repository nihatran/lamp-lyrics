"use client";

import { useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        className="h-screen flex items-center overflow-hidden pl-3"
      >
        <div className="flex flex-col">
          <h2 className="md:text-2xl text-xl mb-3 xl:pl-10 pl-5">
            Scroll and Select
          </h2>
          <div
            ref={albumsRef}
            className="w-fit flex flex-nowrap md:gap-[5rem] gap-[2rem] xl:px-10 px-5"
          >
            <Card
              imgSrc={"/images/soyokaze.png"}
              albumName={"Soyokaze Apartment Room 201"}
              albumYear={"2003.04.09"}
            ></Card>
            <Card
              imgSrc={"/images/forlovers.png"}
              albumName={"For Lovers"}
              albumYear={"2004.02.11"}
            ></Card>
            <Card
              imgSrc={"/images/komorebi.png"}
              albumName={"Komorebi Dori Nite"}
              albumYear={"2005.05.25"}
            ></Card>
            <Card
              imgSrc={"/images/afterglow.png"}
              albumName={"Afterglow"}
              albumYear={"2007.03.07"}
            ></Card>
            <Card
              imgSrc={"/images/genso.png"}
              albumName={"Genso"}
              albumYear={"2008.12.03"}
            ></Card>
            <Card
              imgSrc={"/images/poetryaugust.png"}
              albumName={"The Poetry Of August"}
              albumYear={"2010.08.04"}
            ></Card>
            <Card
              imgSrc={"/images/tokyo.png"}
              albumName={"Tokyo Utopia Communications"}
              albumYear={"2011.02.09"}
            ></Card>
            <Card
              imgSrc={"/images/yume.png"}
              albumName={"Yume"}
              albumYear={"2014.02.05"}
            ></Card>
            <Card
              imgSrc={"/images/herwatch.png"}
              albumName={"Her Watch"}
              albumYear={"2018.05.15"}
            ></Card>
            <Card
              imgSrc={"/images/duskdawn.png"}
              albumName={"Dusk To Dawn"}
              albumYear={"2023.10.10"}
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}
