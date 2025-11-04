import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col h-svh w-full justify-center items-center">
      <div className="h-svh w-[70vw] flex flex-col items-center">
        <h1 className="text-[clamp(2.5rem,10vw,14rem)]">Lyrics From Lamp</h1>
        <div className="flex gap-30">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/lamp1.jpg"
              width={1023}
              height={678}
              alt="lamp band group photo"
            ></Image>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xl">Taiyo Someya</p>
                <p>guitar</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl">Yusuke Nagai</p>
                <div className="flex flex-col">
                  <p>bass</p>
                  <p>vocal</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl">Kaori Sakakibara</p>
                <div className="flex flex-col">
                  <p>accordion</p>
                  <p>flute</p>
                  <p>vocal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[18vw] text-xl justify-between">
            <div className="flex flex-col gap-6">
              <p>
                Nostalgia and longing are interwoven in the songs of Japanese
                Indie pop band Lamp.
              </p>
              <p>
                One's heart goes through many subtle changes as the seasons go
                by, and each lyric carefully unveils these precious feelings.
              </p>
              <p>
                No band is better suited for listening to on a quiet Sunday
                morning.
              </p>
            </div>
            <Image
              src="/images/lamp2.jpg"
              width={540}
              height={540}
              alt="lamp band group photo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
