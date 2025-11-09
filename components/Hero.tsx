import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col xl:h-svh w-full justify-center items-center px-10 py-5 xl:p-0">
      <div className="xl:h-svh xl:w-[70vw] w-full flex flex-col items-center">
        <h1 className="text-[clamp(2.4rem,9vw,14rem)] font-medium xl:font-normal">
          Lyrics From Lamp
        </h1>
        <div className="flex flex-col xl:flex-row xl:gap-30 gap-4 mt-3 xl:mt-0">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/lamp1.jpg"
              width={1023}
              height={678}
              alt="lamp band group photo"
            ></Image>
            <div className="flex justify-between xl:justify-start lg:gap-8">
              <div className="flex flex-col md:gap-1">
                <p className="xl:text-xl lg:text-lg md:text-base text-sm">
                  Taiyo Someya
                </p>
                <p className="text-sm md:text-base">guitar</p>
              </div>
              <div className="flex flex-col md:gap-1">
                <p className="xl:text-xl lg:text-lg md:text-base text-sm">
                  Yusuke Nagai
                </p>
                <div className="flex flex-col text-sm md:text-base">
                  <p>bass</p>
                  <p>vocal</p>
                </div>
              </div>
              <div className="flex flex-col md:gap-1">
                <p className="xl:text-xl lg:text-lg md:text-base text-sm">
                  Kaori Sakakibara
                </p>
                <div className="flex flex-col text-sm md:text-base">
                  <p>accordion</p>
                  <p>flute</p>
                  <p>vocal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-col xl:w-[18vw] text-sm lg:text-lg md:text-base xl:text-xl xl:justify-between items-center xl:items-start">
            <div className="flex flex-col xl:gap-6 gap-4">
              <p>
                Nostalgia and longing are interwoven in the dreamy songs of
                Japanese indie pop band Lamp.
              </p>
              <p>
                The heart goes through many subtle changes as the seasons go by,
                and such precious feelings should be cherished.
              </p>
              <p>
                Whether it's rainy or sunny, no band is better suited for
                listening to on a quiet Sunday morning.
              </p>
            </div>
            <div className="relative w-[250px] aspect-square sm:w-[445px] mb-4 xl:mb-0">
              <Image
                src="/images/lamp2.jpg"
                fill
                alt="lamp band group photo"
                sizes="(max-width:440px) 250px, 445px"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
