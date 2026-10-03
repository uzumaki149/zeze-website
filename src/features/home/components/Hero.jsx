import Image from "next/image";
import profileImage from "../../../assets/images/zanzenj-profile.png";

function Hero() {
  return (
    <section className="relative isolate flex h-[calc(100svh-6rem)] min-h-140 w-full items-end justify-center overflow-visible">
      <div className="wordmark-window pointer-events-none absolute left-1/2 top-[43%] z-0 w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <div className="wordmark-track flex w-max">
            <h1
              aria-label="ZEZE"
              className="shrink-0 whitespace-nowrap px-8 font-normal text-[clamp(7rem,22vw,23rem)] leading-none tracking-[0.15em] text-transparent [-webkit-text-stroke:1.2px_#18181b] dark:[-webkit-text-stroke:1.2px_#f4f4f5]"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              ZEZE&nbsp;&nbsp;ZEZE&nbsp;&nbsp;ZEZE
            </h1>
            <span
              aria-hidden="true"
              className="shrink-0 whitespace-nowrap px-8 font-normal text-[clamp(7rem,22vw,23rem)] leading-none tracking-[0.15em] text-transparent [-webkit-text-stroke:1.2px_#18181b] dark:[-webkit-text-stroke:1.2px_#f4f4f5]"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              ZEZE&nbsp;&nbsp;ZEZE&nbsp;&nbsp;ZEZE
            </span>
          </div>
        </div>
        
      <div className="absolute inset-x-0 sm:bottom-0 xl:bottom-8 z-10 mx-auto h-[90%] w-full sm:h-[84%] xl:h-[88%]">
        <Image
          src={profileImage}
          alt="Portrait of Zanzenj"
          priority
          fill
          sizes="100vw"
          quality={100}
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}

export default Hero;