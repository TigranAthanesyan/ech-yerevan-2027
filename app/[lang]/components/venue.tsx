import { getImageProps } from "next/image";
import { getDictionary } from "../dictionaries";
import { Reveal } from "./reveal";

export async function Venue() {
  const { venue } = await getDictionary();

  // Art direction: portrait crop on mobile, wide photo from md up (same pattern as the hero).
  const common = { alt: "", fill: true, sizes: "100vw" };
  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({ ...common, src: "/images/venue/karen-demirchyan-desktop.webp" });
  const { props: mobileProps } = getImageProps({
    ...common,
    src: "/images/venue/karen-demirchyan-mobile.webp",
  });

  return (
    // clip-path clips the fixed photo to this section, so it only shows through here.
    <section id="venue" className="relative text-white [clip-path:inset(0)]">
      <div aria-hidden className="fixed inset-0 -z-10 bg-ech-navy">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet ?? desktopSrc} />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...mobileProps} className="object-cover" />
        </picture>
      </div>

      {/* Screen 1: exactly one screen, so the nav link lands on a full-screen Venue. Text sits at the bottom so the building stays visible above it. */}
      <div className="flex min-h-svh flex-col justify-end">
        <div className="bg-linear-to-b from-transparent via-ech-navy/85 via-30% to-ech-navy/70 pt-32 pb-12 md:via-ech-navy/80 md:via-45% lg:pt-40 lg:pb-20">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <Reveal>
              <p className="inline-block bg-accent px-3 py-1 text-sm font-bold tracking-widest uppercase lg:text-base">
                {venue.title}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-4 max-w-4xl text-3xl font-bold text-shadow-lg text-shadow-black/50 lg:text-6xl lg:leading-tight">
                {venue.name}
              </h2>
              <p className="mt-3 text-sm tracking-widest uppercase text-white/80 lg:text-base">
                {venue.address}
              </p>
              <p className="mt-1 text-sm tracking-widest uppercase text-white/80 lg:text-base">
                {venue.airport}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-accent px-6 py-3 text-lg font-bold hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-8 lg:py-4 lg:text-xl"
              >
                {venue.mapLink} ↗
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Screen 2: scrolls over the same photo, which stays visible behind it. */}
      <div className="bg-ech-navy/70 py-12 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <Reveal>
            <h3 className="text-center text-3xl font-bold lg:text-5xl">{venue.timelineTitle}</h3>
          </Reveal>

          {/* One column with the line on the left on phones; centred line with points alternating left and right from md up. */}
          <ol className="mt-10 border-l-2 border-white/30 md:relative md:mt-14 md:border-l-0 md:before:absolute md:before:inset-y-0 md:before:left-[calc(50%-1px)] md:before:w-0.5 md:before:bg-white/30 lg:mt-20">
            {venue.timeline.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={i}
                  className={`relative pb-8 pl-6 last:pb-0 md:w-1/2 md:pb-12 ${
                    left ? "md:pr-10 md:pl-0 md:text-right" : "md:ml-[50%] md:pl-10"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute top-2 -left-1.75 size-3 bg-accent md:top-3 ${
                      left ? "md:-right-1.5 md:left-auto" : "md:-left-1.5"
                    }`}
                  />
                  <Reveal className={left ? "reveal-from-left" : "reveal-from-right"}>
                    <p className="text-2xl font-bold lg:text-4xl">{t.year}</p>
                    <p className="mt-1 text-base leading-relaxed text-white/90 lg:text-lg">
                      {t.text}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <p className="mt-10 text-right text-xs text-white/60">{venue.photoCredit}</p>
        </div>
      </div>
    </section>
  );
}
