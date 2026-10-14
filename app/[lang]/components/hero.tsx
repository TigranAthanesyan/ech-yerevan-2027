import Image from "next/image";
import { getDictionary } from "../dictionaries";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export async function Hero() {
  const { hero } = await getDictionary();

  return (
    <section className="bg-brand text-white">
      <div className="relative">
        {/* Mobile: image on top, text below. md and up: text sits on the empty left of the artwork. */}
        <div className="relative aspect-4/3 w-full overflow-hidden md:aspect-video md:max-h-[calc(100svh-5.5rem)] md:min-h-112">
          <Image
            src="/images/hero-no-logo.webp"
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[85%_center] md:object-[75%_center]"
          />
        </div>

        <div className="px-4 py-10 md:absolute md:inset-0 md:flex md:items-center md:px-0 md:py-0">
          <div className="mx-auto w-full max-w-7xl md:px-8">
            <div className="md:w-[46%]">
              <p className="inline-block bg-white px-4 py-2 text-base font-bold tracking-widest text-brand uppercase lg:px-5 lg:py-3 lg:text-xl">
                {hero.dates}
              </p>
              <p className="mt-3 text-sm text-white/80">{hero.datesNote}</p>

              <h1 className="mt-6 text-4xl font-bold md:text-4xl lg:mt-8 lg:text-6xl">
                {hero.discipline}
              </h1>
              <p className="mt-4 text-lg tracking-widest uppercase lg:text-xl">
                {hero.city}
              </p>
              <p className="mt-1 text-base text-white/80">{hero.venue}</p>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
