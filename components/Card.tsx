import Image from "next/image";

interface CardProps {
  cover: string;
  title: string;
  date: string;
}

export default function Card({ cover, title, date }: CardProps) {
  return (
    <div className="flex flex-col w-fit items-center gap-[5rem]">
      <div className="relative w-[250px] h-[250px] aspect-square md:w-[500px] md:h-[500px]">
        <Image
          src={cover}
          fill
          alt="lamp album cover"
          sizes="(max-width: 640px) 250px, 500px"
        ></Image>
      </div>
      <div className="flex flex-col font-medium items-center gap-2">
        <h2 className="md:text-2xl text-xl">{title}</h2>
        <p className="md:text-xl text-base">{date}</p>
      </div>
    </div>
  );
}
