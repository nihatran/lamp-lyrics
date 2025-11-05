import Card from "./Card";

export default function Albums() {
  return (
    <div className="h-svh flex items-center">
      <div className="w-fit flex flex-nowrap gap-[5rem] pl-5 pr-10">
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
  );
}
