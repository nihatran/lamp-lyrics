import Image from "next/image";

interface CardProps {
  imgSrc: string;
  albumName: string;
  albumYear: string;
}

export default function Card({ imgSrc, albumName, albumYear }: CardProps) {
  return (
    <div className="flex flex-col w-fit items-center gap-[5rem]">
      <div className="relative w-[250px] h-[250px] aspect-square md:w-[500px] md:h-[500px]">
        <Image
          src={imgSrc}
          fill
          alt="lamp album cover"
          sizes="(max-width: 640px) 250px, 500px"
        ></Image>
      </div>
      <div className="flex flex-col font-medium items-center gap-2">
        <h2 className="text-3xl">{albumName}</h2>
        <p className="text-2xl">{albumYear}</p>
      </div>
    </div>
  );
}
