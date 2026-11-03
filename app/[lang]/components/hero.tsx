import { getImageProps } from "next/image";
import { getDictionary } from "../dictionaries";
import { Countdown } from "./countdown";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export async function Hero() {
  const { hero } = await getDictionary();

  // Art direction: portrait crop on mobile, wide artwork from md up.
  const common = { alt: hero.imageAlt, fill: true, priority: true };
  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({
    ...common,
    src: "/images/hero/desktop.webp",
    sizes: "100vw",
  });
  const { props: mobileProps } = getImageProps({
    ...common,
    src: "/images/hero/mobile.webp",
    sizes: "100vw",
  });

  return (
    <section className="bg-brand text-white">
      <div className="relative">
        {/* Mobile: portrait image on top, text below. md and up: text sits on the empty left of the wide artwork. */}
        <div className="relative aspect-5/6 w-full overflow-hidden md:aspect-video md:max-h-[calc(100svh-5.5rem)] md:min-h-112">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopSrcSet ?? desktopSrc} />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              {...mobileProps}
              className="object-cover md:object-[75%_center]"
            />
          </picture>
          {/* Mobile only: fades the image bottom into the section background */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-brand to-transparent md:hidden" />
        </div>

        <div className="px-4 pt-6 pb-10 md:absolute md:inset-0 md:flex md:items-center md:px-0 md:py-0">
          <div className="mx-auto w-full max-w-7xl md:px-8">
            <div className="md:w-[50%]">
              <p className="inline-block bg-accent px-3 py-1 text-sm font-bold tracking-widest uppercase lg:text-base">
                {hero.tag}
              </p>

              <h1 className="mt-4 wrap-break-word text-[1.625rem] font-bold sm:text-3xl lg:text-5xl lg:leading-tight">
                {hero.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="bg-white px-3 py-1.5 text-sm font-bold tracking-widest text-brand uppercase lg:px-4 lg:py-2 lg:text-lg">
                  {hero.dates}
                </p>
                <p className="text-base tracking-widest uppercase lg:text-lg">
                  {hero.city}
                </p>
              </div>
              <p className="mt-2 text-base text-white/80">{hero.venue}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#programme"
                  className={`bg-accent px-6 py-3 text-lg font-bold hover:bg-white hover:text-brand lg:px-8 lg:py-4 lg:text-xl ${focusRing}`}
                >
                  {hero.programme}
                </a>
                <a
                  href="#venue"
                  className={`border-2 border-white px-6 py-3 text-lg font-bold hover:bg-white hover:text-brand lg:px-8 lg:py-4 lg:text-xl ${focusRing}`}
                >
                  {hero.venueButton}
                </a>
              </div>

              <Countdown labels={hero.countdown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
